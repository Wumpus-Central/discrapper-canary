n.d(t, {
    S: () => v,
    d: () => y
}),
    n(47120),
    n(230036),
    n(653041);
var r = n(392711),
    i = n.n(r),
    o = n(47770),
    a = n(46973),
    s = n(379649),
    l = n(358085),
    c = n(709054),
    u = n(909766),
    d = n(140828),
    f = n(255914);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
function E(e, t) {
    return e.size === t.size && Array.from(e).every((e) => t.has(e));
}
class b {
    set value(e) {
        e && !this.state && (this.begin = this.timestampProducer.now()), !e && this.state && ((this.total += this.timestampProducer.now() - Number(this.begin)), (this.begin = null)), (this.state = e);
    }
    get value() {
        return this.state;
    }
    totalDuration() {
        return null != this.begin ? this.total + this.timestampProducer.now() - this.begin : this.total;
    }
    totalDurationSeconds() {
        return this.totalDuration() / 1000;
    }
    constructor(e, t) {
        _(this, 'timestampProducer', void 0), _(this, 'begin', void 0), _(this, 'total', void 0), _(this, 'state', void 0), (this.timestampProducer = t), (this.total = 0), (this.state = e), (this.begin = e ? t.now() : null);
    }
}
var y = (function (e) {
    return (e.FpsUpdate = 'fps-update'), e;
})({});
class v extends o.Z {
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        (this.streamStart = this.timestampProducer.now()), this.connection.on(a.Sh.Stats, this.sampleStats);
    }
    setOutboundSsrc(e) {
        null == this.outboundStats[e] && (this.outboundStats[e] = new f.nt(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return null == this.inboundStats[e] && (this.inboundStats[e] = new f.m7(this.timestampProducer)), this.inboundStats[e];
    }
    setInboundUser(e, t) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === t, f.Mq.SenderStopped);
    }
    setUserVideoDisabled(e, t) {
        let n = this.getOrCreateInboundStats(e);
        n.setVideoStopped(t, f.Mq.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now());
    }
    setOcclusionIncomingVideoEnabled(e) {
        this.videoStoppedForOcclusion.value = !e;
    }
    setWindowOcclusionState(e) {
        e !== this.windowOccluded.value && this.numWindowOcclusionChanges++, (this.windowOccluded.value = e);
    }
    pause() {
        !this.paused.value && this.pausedCount++,
            i().forEach(this.outboundStats, (e) => {
                e.statsWindow = [];
            }),
            i().forEach(this.inboundStats, (e) => {
                e.statsWindow = [];
            }),
            this.updateSendState({ paused: !0 });
    }
    resume() {
        this.updateSendState({ paused: !1 });
    }
    stop() {
        this.connection.off(a.Sh.Stats, this.sampleStats), (this.streamEnd = this.timestampProducer.now()), this.removeAllListeners();
    }
    setViewedSimulcastQuality(e) {
        e !== this.hqSimulcastStreamWatched.value && (this.hqSimulcastStreamWatched.totalDuration() > 0 || this.lqSimulcastStreamWatched.totalDuration() > 0) && this.simulcastQualityChanges++, (this.hqSimulcastStreamWatched.value = e), (this.lqSimulcastStreamWatched.value = !e);
    }
    setEligibleSimulcastQuality(e) {
        (this.hqSimulcastStreamEligible.value = e), (this.lqSimulcastStreamEligible.value = !e);
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getEncoderUsageStats() {
        let e = new Map();
        for (let t in this.outboundStats) {
            let n = new Map();
            for (let r of this.outboundStats[t].getCodecsUsed()) {
                let i = r.toUpperCase();
                n.set(i, g(this.outboundStats[t].codecBuckets[i])), e.set(parseInt(t), n);
            }
        }
        return e;
    }
    getDecoderUsageStats() {
        let e = new Map();
        for (let t in this.inboundStats) {
            let n = new Map();
            for (let r of this.inboundStats[t].getCodecsUsed()) {
                let i = r.toUpperCase();
                n.set(i, g(this.inboundStats[t].codecBuckets[i])), e.set(t, n);
            }
        }
        return e;
    }
    getCodecUsageStats(e, t) {
        var n, r, i, o, a, s, l, c, u, d, _, p;
        let h = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            m = new Map();
        if ('sender' === e || 'streamer' === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let t = [...e.keys()].sort()[0];
                m = e.get(t);
            }
            return {
                codec_asymmetric_session: h,
                codec_h264_encode_duration_sec: null != (n = m.get(f.u7.H264)) ? n : 0,
                codec_h265_encode_duration_sec: null != (r = m.get(f.u7.H265)) ? r : 0,
                codec_vp8_encode_duration_sec: null != (i = m.get(f.u7.VP8)) ? i : 0,
                codec_vp9_encode_duration_sec: null != (o = m.get(f.u7.VP9)) ? o : 0,
                codec_av1_encode_duration_sec: null != (a = m.get(f.u7.AV1)) ? a : 0,
                codec_unknown_encode_duration_sec: null != (s = m.get(f.u7.UNKNOWN)) ? s : 0
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(t) && (m = e.get(t)),
                {
                    codec_asymmetric_session: h,
                    codec_h264_decode_duration_sec: null != (l = m.get(f.u7.H264)) ? l : 0,
                    codec_h265_decode_duration_sec: null != (c = m.get(f.u7.H265)) ? c : 0,
                    codec_vp8_decode_duration_sec: null != (u = m.get(f.u7.VP8)) ? u : 0,
                    codec_vp9_decode_duration_sec: null != (d = m.get(f.u7.VP9)) ? d : 0,
                    codec_av1_decode_duration_sec: null != (_ = m.get(f.u7.AV1)) ? _ : 0,
                    codec_unknown_decode_duration_sec: null != (p = m.get(f.u7.UNKNOWN)) ? p : 0
                }
            );
        }
    }
    getOutboundStats() {
        let e = [];
        return (
            i().forEach(this.outboundStats, (t, n) => {
                var r, i, o, a, s;
                let l,
                    c = null == (r = this.connection) ? void 0 : r.getStreamParameters();
                c.length > 1 &&
                    c.forEach((e) => {
                        if (parseInt(n) === e.ssrc) {
                            var t;
                            l = null != (t = e.quality) ? t : 50;
                        }
                    });
                let u = [1, 5, 10, 25, 50, 75],
                    d = [1, 5, 10, 25, 50, 75, 99],
                    _ = t.vmafHistogram.getReport(u),
                    h = t.psnrHistogram.getReport(u),
                    E = t.targetBitrateHistogram.getReport(d),
                    b = t.outboundBandwidthSurplus.getReport(d),
                    y = this.videoEntropy.getReport(d),
                    v = t.aggregationDuration / 1000;
                e.push(
                    m(p({}, this.getStats(t)), {
                        target_fps: v > 0 ? Math.round((null != (i = t.targetFrames) ? i : 0) / v) : 0,
                        target_bitrate_network: v > 0 ? Math.round(((null != (o = t.targetBytesNetwork) ? o : 0) * 8) / v) : 0,
                        target_bitrate_network_percentile1: E.count > 0 ? E.percentiles[1] : null,
                        target_bitrate_network_percentile5: E.count > 0 ? E.percentiles[5] : null,
                        target_bitrate_network_percentile10: E.count > 0 ? E.percentiles[10] : null,
                        target_bitrate_network_percentile25: E.count > 0 ? E.percentiles[25] : null,
                        target_bitrate_network_percentile50: E.count > 0 ? E.percentiles[50] : null,
                        target_bitrate_network_percentile75: E.count > 0 ? E.percentiles[75] : null,
                        target_bitrate_network_percentile99: E.count > 0 ? E.percentiles[99] : null,
                        target_bitrate_max: v > 0 ? Math.round(((null != (a = t.targetBytesMax) ? a : 0) * 8) / v) : 0,
                        outbound_bandwidth_estimate: v > 0 ? Math.round(((null != (s = t.outboundBytesAvailable) ? s : 0) * 8) / v) : 0,
                        outbound_bandwidth_surplus_percentile1: b.count > 0 ? b.percentiles[1] : null,
                        outbound_bandwidth_surplus_percentile5: b.count > 0 ? b.percentiles[5] : null,
                        outbound_bandwidth_surplus_percentile10: b.count > 0 ? b.percentiles[10] : null,
                        outbound_bandwidth_surplus_percentile25: b.count > 0 ? b.percentiles[25] : null,
                        outbound_bandwidth_surplus_percentile50: b.count > 0 ? b.percentiles[50] : null,
                        outbound_bandwidth_surplus_percentile75: b.count > 0 ? b.percentiles[75] : null,
                        outbound_bandwidth_surplus_percentile99: b.count > 0 ? b.percentiles[99] : null,
                        duration_encoder_nvidia_cuda: g(t.encoderBuckets[f.Su.NVIDIA_CUDA]),
                        duration_encoder_nvidia_direct3d: g(t.encoderBuckets[f.Su.NVIDIA_DIRECT_3D]),
                        duration_encoder_openh264: g(t.encoderBuckets[f.Su.OPENH264]),
                        duration_encoder_videotoolbox: g(t.encoderBuckets[f.Su.VIDEOTOOLBOX]),
                        duration_encoder_amd_direct3d: g(t.encoderBuckets[f.Su.AMD_DIRECT_3D]),
                        duration_encoder_intel: g(t.encoderBuckets[f.Su.INTEL]),
                        duration_encoder_intel_direct3d: g(t.encoderBuckets[f.Su.INTEL_DIRECT_3D]),
                        duration_encoder_vp8_libvpx: g(t.encoderBuckets[f.Su.VP8_LIBVPX]),
                        duration_encoder_uncategorized: g(t.encoderBuckets[f.Su.UNCATEGORIZED]),
                        duration_encoder_unknown: g(t.encoderBuckets[f.Su.UNKNOWN]),
                        quality: l,
                        average_encode_time_ms: t.averageEncodeTime,
                        average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
                        encoder_vmaf_score_percentile1: _.count > 0 ? _.percentiles[1] : null,
                        encoder_vmaf_score_percentile5: _.count > 0 ? _.percentiles[5] : null,
                        encoder_vmaf_score_percentile10: _.count > 0 ? _.percentiles[10] : null,
                        encoder_vmaf_score_percentile25: _.count > 0 ? _.percentiles[25] : null,
                        encoder_vmaf_score_percentile50: _.count > 0 ? _.percentiles[50] : null,
                        encoder_vmaf_score_percentile75: _.count > 0 ? _.percentiles[75] : null,
                        average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
                        encoder_psnr_db_percentile1: h.count > 0 ? h.percentiles[1] : null,
                        encoder_psnr_db_percentile5: h.count > 0 ? h.percentiles[5] : null,
                        encoder_psnr_db_percentile10: h.count > 0 ? h.percentiles[10] : null,
                        encoder_psnr_db_percentile25: h.count > 0 ? h.percentiles[25] : null,
                        encoder_psnr_db_percentile50: h.count > 0 ? h.percentiles[50] : null,
                        encoder_psnr_db_percentile75: h.count > 0 ? h.percentiles[75] : null,
                        average_outbound_want: t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
                        frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
                        frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
                        frames_dropped_congestion_window: t.framesDroppedCongestionWindow,
                        frames_dropped_encoder: t.framesDroppedEncoder,
                        duration_hq_simulcast_stream_encoded: g(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                        duration_lq_simulcast_stream_encoded: g(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                        duration_both_simulcast_streams_encoded: g(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
                        duration_fps_bandwidth_limited: g(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                        duration_resolution_bandwidth_limited: g(this.bandwidthLimitedResolution.totalDurationSeconds()),
                        video_entropy_percentile1: y.count > 0 ? y.percentiles[1] : null,
                        video_entropy_percentile5: y.count > 0 ? y.percentiles[5] : null,
                        video_entropy_percentile10: y.count > 0 ? y.percentiles[10] : null,
                        video_entropy_percentile25: y.count > 0 ? y.percentiles[25] : null,
                        video_entropy_percentile50: y.count > 0 ? y.percentiles[50] : null,
                        video_entropy_percentile75: y.count > 0 ? y.percentiles[75] : null,
                        video_entropy_percentile99: y.count > 0 ? y.percentiles[99] : null
                    })
                );
            }),
            e
        );
    }
    getInboundStats(e) {
        return this.getStats(this.inboundStats[e]);
    }
    destroyUser(e) {
        delete this.inboundStats[e];
    }
    getInboundParticipants() {
        return c.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let t = this.paused.value || this.zeroReceivers.value,
            n = this.videoStopped.value;
        (this.videoStopped.value = t), t !== n && i().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        if (null == e) return null;
        let t = Number(this.streamStart),
            n = (null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t) / 1000,
            r = Math.max(e.aggregationDuration, 0) / 1000,
            i = [1, 5, 10, 25, 50, 75],
            o = [1, 5, 10, 25, 50, 75, 99],
            a = [1, 5, 10, 25, 50, 75, 99],
            s = [1, 5, 10, 25, 50, 75, 90, 95],
            l = e.fpsHistogram.getReport(i),
            c = e.bitrateHistogram.getReport(o),
            u = e.resolutionHistogram.getReport(i),
            d = e.inboundBitrateEstimateHistogram.getReport(a),
            _ = e.localWantHistogram.getReport(s),
            h = e.systemResources.getStats(),
            E = p(
                {
                    duration: Math.floor(n),
                    duration_aggregation: g(r),
                    duration_stopped_receiving: g(e.videoStoppedDuration.asSeconds()),
                    duration_stream_under_8mbps: g(e.bitrateBuckets[8000000]),
                    duration_stream_under_7mbps: g(e.bitrateBuckets[7000000]),
                    duration_stream_under_6mbps: g(e.bitrateBuckets[6000000]),
                    duration_stream_under_5mbps: g(e.bitrateBuckets[5000000]),
                    duration_stream_under_4mbps: g(e.bitrateBuckets[4000000]),
                    duration_stream_under_3mbps: g(e.bitrateBuckets[3000000]),
                    duration_stream_under_2mbps: g(e.bitrateBuckets[2000000]),
                    duration_stream_under_1_5mbps: g(e.bitrateBuckets[1500000]),
                    duration_stream_under_1mbps: g(e.bitrateBuckets[1000000]),
                    duration_stream_under_0_5mbps: g(e.bitrateBuckets[500000]),
                    duration_stream_at_0mbps: g(e.bitrateBuckets[0]),
                    duration_fps_under_60: g(e.fpsBuckets[60]),
                    duration_fps_under_55: g(e.fpsBuckets[55]),
                    duration_fps_under_50: g(e.fpsBuckets[50]),
                    duration_fps_under_45: g(e.fpsBuckets[45]),
                    duration_fps_under_40: g(e.fpsBuckets[40]),
                    duration_fps_under_35: g(e.fpsBuckets[35]),
                    duration_fps_under_30: g(e.fpsBuckets[30]),
                    duration_fps_under_25: g(e.fpsBuckets[25]),
                    duration_fps_under_20: g(e.fpsBuckets[20]),
                    duration_fps_under_15: g(e.fpsBuckets[15]),
                    duration_fps_under_10: g(e.fpsBuckets[10]),
                    duration_fps_under_5: g(e.fpsBuckets[5]),
                    duration_fps_at_0: g(e.fpsBuckets[0]),
                    avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                    avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                    avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                    duration_resolution_under_720: g(e.resolutionBuckets[720]),
                    duration_resolution_under_480: g(e.resolutionBuckets[480]),
                    duration_resolution_under_360: g(e.resolutionBuckets[360]),
                    num_pauses: this.pausedCount,
                    duration_paused: g(this.paused.totalDuration() / 1000),
                    duration_zero_receivers: g(this.zeroReceivers.totalDuration() / 1000),
                    duration_video_stopped: g(this.videoStopped.totalDuration() / 1000),
                    duration_hq_simulcast_stream_watched: g(this.hqSimulcastStreamWatched.totalDurationSeconds()),
                    duration_lq_simulcast_stream_watched: g(this.lqSimulcastStreamWatched.totalDurationSeconds()),
                    duration_hq_simulcast_stream_eligible: g(this.hqSimulcastStreamEligible.totalDurationSeconds()),
                    duration_lq_simulcast_stream_eligible: g(this.lqSimulcastStreamEligible.totalDurationSeconds()),
                    num_quality_changes: this.simulcastQualityChanges,
                    duration_window_occluded: g(this.windowOccluded.totalDurationSeconds()),
                    duration_incoming_video_stopped_for_occlusion: g(this.videoStoppedForOcclusion.totalDurationSeconds()),
                    num_window_occlusion_changes: this.numWindowOcclusionChanges,
                    fps_percentile1: l.percentiles[1],
                    fps_percentile5: l.percentiles[5],
                    fps_percentile10: l.percentiles[10],
                    fps_percentile25: l.percentiles[25],
                    fps_percentile50: l.percentiles[50],
                    fps_percentile75: l.percentiles[75],
                    bitrate_percentile1: c.percentiles[1],
                    bitrate_percentile5: c.percentiles[5],
                    bitrate_percentile10: c.percentiles[10],
                    bitrate_percentile25: c.percentiles[25],
                    bitrate_percentile50: c.percentiles[50],
                    bitrate_percentile75: c.percentiles[75],
                    bitrate_percentile99: c.percentiles[99],
                    resolution_percentile1: u.percentiles[1],
                    resolution_percentile5: u.percentiles[5],
                    resolution_percentile10: u.percentiles[10],
                    resolution_percentile25: u.percentiles[25],
                    resolution_percentile50: u.percentiles[50],
                    resolution_percentile75: u.percentiles[75],
                    inbound_bitrate_estimate_percentile1: d.percentiles[1],
                    inbound_bitrate_estimate_percentile5: d.percentiles[5],
                    inbound_bitrate_estimate_percentile10: d.percentiles[10],
                    inbound_bitrate_estimate_percentile25: d.percentiles[25],
                    inbound_bitrate_estimate_percentile50: d.percentiles[50],
                    inbound_bitrate_estimate_percentile75: d.percentiles[75],
                    inbound_bitrate_estimate_percentile99: d.percentiles[99],
                    local_want_percentile1: _.percentiles[1],
                    local_want_percentile5: _.percentiles[5],
                    local_want_percentile10: _.percentiles[10],
                    local_want_percentile25: _.percentiles[25],
                    local_want_percentile50: _.percentiles[50],
                    local_want_percentile75: _.percentiles[75],
                    local_want_percentile90: _.percentiles[90],
                    local_want_percentile95: _.percentiles[95],
                    average_local_want: _.mean,
                    duration_video_effect: g(this.videoEffectDuration.totalDuration() / 1000),
                    cryptor_max_attempts: e.cryptorMaxAttempts,
                    duration_decoder_ffmpeg: g(e.decoderBuckets[f.gr.FFMPEG]),
                    duration_decoder_dav1d: g(e.decoderBuckets[f.gr.DAV1D]),
                    duration_decoder_vp8_libvpx: g(e.decoderBuckets[f.gr.VP8_LIBVPX]),
                    duration_decoder_electron: g(e.decoderBuckets[f.gr.ELECTRON]),
                    duration_decoder_videotoolbox: g(e.decoderBuckets[f.gr.VIDEOTOOLBOX]),
                    duration_decoder_uncategorized: g(e.decoderBuckets[f.gr.UNCATEGORIZED]),
                    duration_decoder_unknown: g(e.decoderBuckets[f.gr.UNKNOWN])
                },
                h
            ),
            { bytes: b, framesDropped: y, framesCodecError: v, framesCodec: O, framesNetwork: I, packets: S, packetsLost: T, nackCount: N, pliCount: A, qpSum: C, pauseCount: R, freezeCount: P, totalPausesDuration: w, totalFreezesDuration: D, totalFramesDuration: L, keyframes: x, passthroughCount: M, cryptorSuccessCount: k, cryptorFailureCount: j, cryptorDuration: U, cryptorAttempts: G, cryptorMissingKeyCount: B, cryptorInvalidNonceCount: F, qualityDecodeErrors: V, qualityDecoderReboots: Z, qualityScoreErrors: H, qualityFrameDrops: W, qualitySizeMismatches: Y } = e.aggregatedProperties;
        return (
            e instanceof f.nt ? ((E.sender_freeze_count = P), (E.sender_total_freezes_duration = D), (E.sender_total_frames_duration = L)) : ((E.receiver_freeze_count = P), (E.receiver_total_freezes_duration = D), (E.receiver_total_frames_duration = L), (E.receiver_pause_count = R), (E.receiver_total_pauses_duration = w)),
            m(p({}, E), {
                avg_bitrate: r > 0 ? Math.round(((null != b ? b : 0) * 8) / r) : 0,
                avg_fps: r > 0 ? Math.round((null != O ? O : 0) / r) : 0,
                num_bytes: b,
                num_packets_lost: T,
                num_packets: S,
                num_frames: I,
                num_frames_codec_error: v,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: y,
                num_nacks: N,
                num_plis: A,
                qp_sum: C,
                num_keyframes: x,
                cryptor_passthrough_count: M,
                cryptor_success_count: k,
                cryptor_failure_count: j,
                cryptor_duration: U,
                cryptor_attempts: G,
                cryptor_missing_key_count: B,
                cryptor_invalid_nonce_count: F,
                encoder_quality_decode_errors: V,
                encoder_quality_decoder_reboots: Z,
                encoder_quality_score_errors: H,
                encoder_quality_frame_drops: W,
                encoder_quality_size_mismatches: Y
            })
        );
    }
    receivedStats(e, t, n) {
        var r, o;
        let s = t.transport,
            c = (0, l.isWeb)() ? 1 : null != (o = null == (r = s.receiverReports) ? void 0 : r.length) ? o : 0,
            u = new Set(),
            d = new Set();
        this.updateSendState({ receivers: c });
        let _ = i().max(n.map((e) => e.quality)),
            p = t.rtp.outbound.filter((e) => 'video' === e.type && (null == e ? void 0 : e.videoEntropy) != null)[0],
            h = null == p ? void 0 : p.videoEntropy;
        t.rtp.outbound
            .filter((e) => 'video' === e.type)
            .forEach((t) => {
                let r = t;
                if (null != r) {
                    let t = r.ssrc,
                        S = this.outboundStats[t];
                    null == S && (console.warn('Unknown outbound video stream with SSRC: '.concat(t)), (S = new f.nt(this.timestampProducer)), (this.outboundStats[t] = S)), null == S.timeToFirstFrame && (r.framesEncoded > 0 || (null != (i = r.frameRateInput) ? i : 0) > 0) && (S.timeToFirstFrame = Math.max(0, e - S.startTime)), null != h && h >= 0 && this.videoEntropy.addSample(h);
                    let T = n.find((e) => e.ssrc === t);
                    var i,
                        o,
                        l,
                        c,
                        d,
                        p,
                        m,
                        g,
                        E,
                        b,
                        y,
                        v,
                        O = !0;
                    if (this.connection.context === a.Yn.STREAM) {
                        var I = this.connection.getRemoteVideoSinkWants(t);
                        (null == I || 0 === I) && (null == T ? void 0 : T.quality) === _ && (I = this.connection.getRemoteVideoSinkWants('any')), (O = (null != I ? I : 0) > 0);
                    }
                    let N = this.videoStopped.value || !O;
                    if ((N !== S.isVideoStopped && S.setVideoStopped(N, f.Mq.SenderStopped), !N)) {
                        S.appendAndIncrementStats(f.z4.parseOutboundStats(r, e)), S.encoderCodec !== f.u7.UNKNOWN && u.add(S.encoderCodec);
                        let t = null == T ? void 0 : T.maxBitrate;
                        S.appendTargetRates(null == T ? void 0 : T.maxFrameRate, null != (l = r.bitrateTarget) ? l : Math.min(null != (o = s.availableOutgoingBitrate) ? o : 0, null != t ? t : 0), t, s.availableOutgoingBitrate), (S.averageEncodeTime = null != (c = r.averageEncodeTime) ? c : 0), (S.framesDroppedRateLimiter = null != (d = r.framesDroppedRateLimiter) ? d : null), (S.framesDroppedEncoderQueue = null != (p = r.framesDroppedEncoderQueue) ? p : null), (S.framesDroppedCongestionWindow = null != (m = r.framesDroppedCongestionWindow) ? m : null), (S.framesDroppedEncoder = null != (g = r.framesDroppedEncoder) ? g : null), (this.hqSimulcastStreamEncoded.value = null != (E = r.hqSimulcastStreamEncoded) && E), (this.lqSimulcastStreamEncoded.value = null != (b = r.lqSimulcastStreamEncoded) && b), (this.bothSimulcastStreamsEncoded.value = this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value), (this.bandwidthLimitedResolution.value = null != (y = r.bandwidthLimitedResolution) && y), (this.bandwidthLimitedFramerate.value = null != (v = r.bandwidthLimitedFrameRate) && v);
                    }
                }
            }),
            this.paused.value ||
                i().forEach(t.rtp.inbound, (t, n) => {
                    let r = t.find((e) => 'video' === e.type);
                    if (null != r) {
                        let t = this.inboundStats[n];
                        null == t && (console.warn('Unknown inbound video stream for user: '.concat(n)), (t = new f.m7(this.timestampProducer)), (this.inboundStats[n] = t));
                        let i = f.z4.parseInboundStats(r, e);
                        this.statCollectionPausedUsers.has(n) || (t.appendAndIncrementStats(i), t.appendTransportStats(s)), i.packets > 0 && this.emit('fps-update', n, i.framesCodec, i.timestamp), t.decoderCodec !== f.u7.UNKNOWN && d.add(t.decoderCodec), null == t.timeToFirstFrame && r.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                    }
                }),
            0 !== u.size && 0 !== d.size && (E(u, d) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
    }
    updateSystemResourceStats() {
        for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats) this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let t = null == e ? void 0 : e.rtp.outbound.find((e) => 'video' === e.type);
        this.videoEffectDuration.value = (null == t ? void 0 : t.type) === 'video' && null != t.filter;
    }
    constructor(e, t = s.Z_) {
        super(),
            _(this, 'connection', void 0),
            _(this, 'timestampProducer', void 0),
            _(this, 'networkQuality', void 0),
            _(this, 'paused', void 0),
            _(this, 'pausedCount', void 0),
            _(this, 'zeroReceivers', void 0),
            _(this, 'videoStopped', void 0),
            _(this, 'videoEffectDuration', void 0),
            _(this, 'hqSimulcastStreamEncoded', void 0),
            _(this, 'lqSimulcastStreamEncoded', void 0),
            _(this, 'bothSimulcastStreamsEncoded', void 0),
            _(this, 'hqSimulcastStreamWatched', void 0),
            _(this, 'lqSimulcastStreamWatched', void 0),
            _(this, 'hqSimulcastStreamEligible', void 0),
            _(this, 'lqSimulcastStreamEligible', void 0),
            _(this, 'simulcastQualityChanges', void 0),
            _(this, 'windowOccluded', void 0),
            _(this, 'videoStoppedForOcclusion', void 0),
            _(this, 'numWindowOcclusionChanges', void 0),
            _(this, 'outboundStats', void 0),
            _(this, 'inboundStats', void 0),
            _(this, 'streamStart', void 0),
            _(this, 'streamEnd', void 0),
            _(this, 'symmetricCodecUpdates', void 0),
            _(this, 'asymmetricCodecUpdates', void 0),
            _(this, 'bandwidthLimitedFramerate', void 0),
            _(this, 'bandwidthLimitedResolution', void 0),
            _(this, 'videoEntropy', void 0),
            _(this, 'statCollectionPausedUsers', void 0),
            _(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.timestampProducer = t),
            (this.networkQuality = new d.Z()),
            (this.pausedCount = 0),
            (this.simulcastQualityChanges = 0),
            (this.numWindowOcclusionChanges = 0),
            (this.outboundStats = {}),
            (this.inboundStats = {}),
            (this.symmetricCodecUpdates = 0),
            (this.asymmetricCodecUpdates = 0),
            (this.statCollectionPausedUsers = new Set()),
            (this.sampleStats = (e) => {
                if (null == e) return;
                let t = this.timestampProducer.now();
                if ((this.networkQuality.incrementNetworkStats(t), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e)) return;
                let n = this.connection.getStreamParameters();
                this.receivedStats(t, e, n);
            }),
            (this.paused = new b(!1, t)),
            (this.zeroReceivers = new b(!1, t)),
            (this.videoStopped = new b(!1, t)),
            (this.videoEffectDuration = new b(!1, t)),
            (this.hqSimulcastStreamEncoded = new b(!1, t)),
            (this.lqSimulcastStreamEncoded = new b(!1, t)),
            (this.bothSimulcastStreamsEncoded = new b(!1, t)),
            (this.hqSimulcastStreamWatched = new b(!1, t)),
            (this.lqSimulcastStreamWatched = new b(!1, t)),
            (this.hqSimulcastStreamEligible = new b(!1, t)),
            (this.lqSimulcastStreamEligible = new b(!1, t)),
            (this.windowOccluded = new b(!1, t)),
            (this.videoStoppedForOcclusion = new b(!1, t)),
            (this.bandwidthLimitedFramerate = new b(!1, t)),
            (this.bandwidthLimitedResolution = new b(!1, t)),
            (this.videoEntropy = new u.b());
    }
}
