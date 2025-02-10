n.d(t, {
    S: () => E,
    d: () => g
}),
    n(47120),
    n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(47770),
    s = n(46973),
    o = n(379649),
    l = n(358085),
    u = n(709054),
    c = n(909766),
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
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
function h(e, t) {
    return e.size === t.size && Array.from(e).every((e) => t.has(e));
}
class m {
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
var g = (function (e) {
    return (e.FpsUpdate = 'fps-update'), e;
})({});
class E extends a.Z {
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        (this.streamStart = this.timestampProducer.now()), this.connection.on(s.Sh.Stats, this.sampleStats);
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
            r().forEach(this.outboundStats, (e) => {
                e.statsWindow = [];
            }),
            r().forEach(this.inboundStats, (e) => {
                e.statsWindow = [];
            }),
            this.updateSendState({ paused: !0 });
    }
    resume() {
        this.updateSendState({ paused: !1 });
    }
    stop() {
        this.connection.off(s.Sh.Stats, this.sampleStats), (this.streamEnd = this.timestampProducer.now()), this.removeAllListeners();
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
            for (let i of this.outboundStats[t].getCodecsUsed()) {
                let r = i.toUpperCase();
                n.set(r, p(this.outboundStats[t].codecBuckets[r])), e.set(parseInt(t), n);
            }
        }
        return e;
    }
    getDecoderUsageStats() {
        let e = new Map();
        for (let t in this.inboundStats) {
            let n = new Map();
            for (let i of this.inboundStats[t].getCodecsUsed()) {
                let r = i.toUpperCase();
                n.set(r, p(this.inboundStats[t].codecBuckets[r])), e.set(t, n);
            }
        }
        return e;
    }
    getCodecUsageStats(e, t) {
        var n, i, r, a, s, o, l, u, c, d;
        let _ = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            p = new Map();
        if ('sender' === e || 'streamer' === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let t = [...e.keys()].sort()[0];
                p = e.get(t);
            }
            return {
                codec_asymmetric_session: _,
                codec_h264_encode_duration_sec: null !== (n = p.get(f.u7.H264)) && void 0 !== n ? n : 0,
                codec_h265_encode_duration_sec: null !== (i = p.get(f.u7.H265)) && void 0 !== i ? i : 0,
                codec_vp8_encode_duration_sec: null !== (r = p.get(f.u7.VP8)) && void 0 !== r ? r : 0,
                codec_vp9_encode_duration_sec: null !== (a = p.get(f.u7.VP9)) && void 0 !== a ? a : 0,
                codec_av1_encode_duration_sec: null !== (s = p.get(f.u7.AV1)) && void 0 !== s ? s : 0
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(t) && (p = e.get(t)),
                {
                    codec_asymmetric_session: _,
                    codec_h264_decode_duration_sec: null !== (o = p.get(f.u7.H264)) && void 0 !== o ? o : 0,
                    codec_h265_decode_duration_sec: null !== (l = p.get(f.u7.H265)) && void 0 !== l ? l : 0,
                    codec_vp8_decode_duration_sec: null !== (u = p.get(f.u7.VP8)) && void 0 !== u ? u : 0,
                    codec_vp9_decode_duration_sec: null !== (c = p.get(f.u7.VP9)) && void 0 !== c ? c : 0,
                    codec_av1_decode_duration_sec: null !== (d = p.get(f.u7.AV1)) && void 0 !== d ? d : 0
                }
            );
        }
    }
    getOutboundStats() {
        let e = [];
        return (
            r().forEach(this.outboundStats, (t, n) => {
                var i, r, a, s, o;
                let l;
                let u = null === (i = this.connection) || void 0 === i ? void 0 : i.getStreamParameters();
                u.length > 1 &&
                    u.forEach((e) => {
                        if (parseInt(n) === e.ssrc) {
                            var t;
                            l = null !== (t = e.quality) && void 0 !== t ? t : 50;
                        }
                    });
                let c = [1, 5, 10, 25, 50, 75],
                    d = [1, 5, 10, 25, 50, 75, 99],
                    _ = t.vmafHistogram.getReport(c),
                    h = t.psnrHistogram.getReport(c),
                    m = t.targetBitrateHistogram.getReport(d),
                    g = t.outboundBandwidthSurplus.getReport(d),
                    E = this.videoEntropy.getReport(d),
                    v = t.aggregationDuration / 1000;
                e.push({
                    ...this.getStats(t),
                    target_fps: v > 0 ? Math.round((null !== (r = t.targetFrames) && void 0 !== r ? r : 0) / v) : 0,
                    target_bitrate_network: v > 0 ? Math.round(((null !== (a = t.targetBytesNetwork) && void 0 !== a ? a : 0) * 8) / v) : 0,
                    target_bitrate_network_percentile1: m.count > 0 ? m.percentiles[1] : null,
                    target_bitrate_network_percentile5: m.count > 0 ? m.percentiles[5] : null,
                    target_bitrate_network_percentile10: m.count > 0 ? m.percentiles[10] : null,
                    target_bitrate_network_percentile25: m.count > 0 ? m.percentiles[25] : null,
                    target_bitrate_network_percentile50: m.count > 0 ? m.percentiles[50] : null,
                    target_bitrate_network_percentile75: m.count > 0 ? m.percentiles[75] : null,
                    target_bitrate_network_percentile99: m.count > 0 ? m.percentiles[99] : null,
                    target_bitrate_max: v > 0 ? Math.round(((null !== (s = t.targetBytesMax) && void 0 !== s ? s : 0) * 8) / v) : 0,
                    outbound_bandwidth_estimate: v > 0 ? Math.round(((null !== (o = t.outboundBytesAvailable) && void 0 !== o ? o : 0) * 8) / v) : 0,
                    outbound_bandwidth_surplus_percentile1: g.count > 0 ? g.percentiles[1] : null,
                    outbound_bandwidth_surplus_percentile5: g.count > 0 ? g.percentiles[5] : null,
                    outbound_bandwidth_surplus_percentile10: g.count > 0 ? g.percentiles[10] : null,
                    outbound_bandwidth_surplus_percentile25: g.count > 0 ? g.percentiles[25] : null,
                    outbound_bandwidth_surplus_percentile50: g.count > 0 ? g.percentiles[50] : null,
                    outbound_bandwidth_surplus_percentile75: g.count > 0 ? g.percentiles[75] : null,
                    outbound_bandwidth_surplus_percentile99: g.count > 0 ? g.percentiles[99] : null,
                    duration_encoder_nvidia_cuda: p(t.encoderBuckets[f.Su.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: p(t.encoderBuckets[f.Su.NVIDIA_DIRECT_3D]),
                    duration_encoder_openh264: p(t.encoderBuckets[f.Su.OPENH264]),
                    duration_encoder_videotoolbox: p(t.encoderBuckets[f.Su.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: p(t.encoderBuckets[f.Su.AMD_DIRECT_3D]),
                    duration_encoder_intel: p(t.encoderBuckets[f.Su.INTEL]),
                    duration_encoder_intel_direct3d: p(t.encoderBuckets[f.Su.INTEL_DIRECT_3D]),
                    duration_encoder_vp8_libvpx: p(t.encoderBuckets[f.Su.VP8_LIBVPX]),
                    duration_encoder_uncategorized: p(t.encoderBuckets[f.Su.UNCATEGORIZED]),
                    duration_encoder_unknown: p(t.encoderBuckets[f.Su.UNKNOWN]),
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
                    duration_hq_simulcast_stream_encoded: p(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_lq_simulcast_stream_encoded: p(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_both_simulcast_streams_encoded: p(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
                    duration_fps_bandwidth_limited: p(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                    duration_resolution_bandwidth_limited: p(this.bandwidthLimitedResolution.totalDurationSeconds()),
                    video_entropy_percentile1: E.count > 0 ? E.percentiles[1] : null,
                    video_entropy_percentile5: E.count > 0 ? E.percentiles[5] : null,
                    video_entropy_percentile10: E.count > 0 ? E.percentiles[10] : null,
                    video_entropy_percentile25: E.count > 0 ? E.percentiles[25] : null,
                    video_entropy_percentile50: E.count > 0 ? E.percentiles[50] : null,
                    video_entropy_percentile75: E.count > 0 ? E.percentiles[75] : null,
                    video_entropy_percentile99: E.count > 0 ? E.percentiles[99] : null
                });
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
        return u.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let t = this.paused.value || this.zeroReceivers.value,
            n = this.videoStopped.value;
        (this.videoStopped.value = t), t !== n && r().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        if (null == e) return;
        let t = Number(this.streamStart),
            n = (null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t) / 1000,
            i = Math.max(e.aggregationDuration, 0) / 1000,
            r = [1, 5, 10, 25, 50, 75],
            a = [1, 5, 10, 25, 50, 75, 99],
            s = [1, 5, 10, 25, 50, 75, 99],
            o = [1, 5, 10, 25, 50, 75, 90, 95],
            l = e.fpsHistogram.getReport(r),
            u = e.bitrateHistogram.getReport(a),
            c = e.resolutionHistogram.getReport(r),
            d = e.inboundBitrateEstimateHistogram.getReport(s),
            _ = e.localWantHistogram.getReport(o),
            h = e.systemResources.getStats(),
            m = {
                duration: Math.floor(n),
                duration_aggregation: p(i),
                duration_stopped_receiving: p(e.videoStoppedDuration.asSeconds()),
                duration_stream_under_8mbps: p(e.bitrateBuckets[8000000]),
                duration_stream_under_7mbps: p(e.bitrateBuckets[7000000]),
                duration_stream_under_6mbps: p(e.bitrateBuckets[6000000]),
                duration_stream_under_5mbps: p(e.bitrateBuckets[5000000]),
                duration_stream_under_4mbps: p(e.bitrateBuckets[4000000]),
                duration_stream_under_3mbps: p(e.bitrateBuckets[3000000]),
                duration_stream_under_2mbps: p(e.bitrateBuckets[2000000]),
                duration_stream_under_1_5mbps: p(e.bitrateBuckets[1500000]),
                duration_stream_under_1mbps: p(e.bitrateBuckets[1000000]),
                duration_stream_under_0_5mbps: p(e.bitrateBuckets[500000]),
                duration_stream_at_0mbps: p(e.bitrateBuckets[0]),
                duration_fps_under_60: p(e.fpsBuckets[60]),
                duration_fps_under_55: p(e.fpsBuckets[55]),
                duration_fps_under_50: p(e.fpsBuckets[50]),
                duration_fps_under_45: p(e.fpsBuckets[45]),
                duration_fps_under_40: p(e.fpsBuckets[40]),
                duration_fps_under_35: p(e.fpsBuckets[35]),
                duration_fps_under_30: p(e.fpsBuckets[30]),
                duration_fps_under_25: p(e.fpsBuckets[25]),
                duration_fps_under_20: p(e.fpsBuckets[20]),
                duration_fps_under_15: p(e.fpsBuckets[15]),
                duration_fps_under_10: p(e.fpsBuckets[10]),
                duration_fps_under_5: p(e.fpsBuckets[5]),
                duration_fps_at_0: p(e.fpsBuckets[0]),
                avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                duration_resolution_under_720: p(e.resolutionBuckets[720]),
                duration_resolution_under_480: p(e.resolutionBuckets[480]),
                duration_resolution_under_360: p(e.resolutionBuckets[360]),
                num_pauses: this.pausedCount,
                duration_paused: p(this.paused.totalDuration() / 1000),
                duration_zero_receivers: p(this.zeroReceivers.totalDuration() / 1000),
                duration_video_stopped: p(this.videoStopped.totalDuration() / 1000),
                duration_hq_simulcast_stream_watched: p(this.hqSimulcastStreamWatched.totalDurationSeconds()),
                duration_lq_simulcast_stream_watched: p(this.lqSimulcastStreamWatched.totalDurationSeconds()),
                duration_hq_simulcast_stream_eligible: p(this.hqSimulcastStreamEligible.totalDurationSeconds()),
                duration_lq_simulcast_stream_eligible: p(this.lqSimulcastStreamEligible.totalDurationSeconds()),
                num_quality_changes: this.simulcastQualityChanges,
                duration_window_occluded: p(this.windowOccluded.totalDurationSeconds()),
                duration_incoming_video_stopped_for_occlusion: p(this.videoStoppedForOcclusion.totalDurationSeconds()),
                num_window_occlusion_changes: this.numWindowOcclusionChanges,
                fps_percentile1: l.percentiles[1],
                fps_percentile5: l.percentiles[5],
                fps_percentile10: l.percentiles[10],
                fps_percentile25: l.percentiles[25],
                fps_percentile50: l.percentiles[50],
                fps_percentile75: l.percentiles[75],
                bitrate_percentile1: u.percentiles[1],
                bitrate_percentile5: u.percentiles[5],
                bitrate_percentile10: u.percentiles[10],
                bitrate_percentile25: u.percentiles[25],
                bitrate_percentile50: u.percentiles[50],
                bitrate_percentile75: u.percentiles[75],
                bitrate_percentile99: u.percentiles[99],
                resolution_percentile1: c.percentiles[1],
                resolution_percentile5: c.percentiles[5],
                resolution_percentile10: c.percentiles[10],
                resolution_percentile25: c.percentiles[25],
                resolution_percentile50: c.percentiles[50],
                resolution_percentile75: c.percentiles[75],
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
                duration_video_effect: p(this.videoEffectDuration.totalDuration() / 1000),
                cryptor_max_attempts: e.cryptorMaxAttempts,
                duration_decoder_ffmpeg: p(e.decoderBuckets[f.gr.FFMPEG]),
                duration_decoder_dav1d: p(e.decoderBuckets[f.gr.DAV1D]),
                duration_decoder_vp8_libvpx: p(e.decoderBuckets[f.gr.VP8_LIBVPX]),
                duration_decoder_electron: p(e.decoderBuckets[f.gr.ELECTRON]),
                duration_decoder_videotoolbox: p(e.decoderBuckets[f.gr.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: p(e.decoderBuckets[f.gr.UNCATEGORIZED]),
                duration_decoder_unknown: p(e.decoderBuckets[f.gr.UNKNOWN]),
                ...h
            },
            { bytes: g, framesDropped: E, framesCodecError: v, framesCodec: y, framesNetwork: I, packets: T, packetsLost: b, nackCount: S, pliCount: A, qpSum: N, pauseCount: C, freezeCount: R, totalPausesDuration: O, totalFreezesDuration: D, totalFramesDuration: L, keyframes: x, passthroughCount: P, cryptorSuccessCount: w, cryptorFailureCount: M, cryptorDuration: k, cryptorAttempts: U, cryptorMissingKeyCount: G, cryptorInvalidNonceCount: B, qualityDecodeErrors: Z, qualityDecoderReboots: F, qualityScoreErrors: V, qualityFrameDrops: j, qualitySizeMismatches: H } = e.aggregatedProperties;
        return (
            e instanceof f.nt ? ((m.sender_freeze_count = R), (m.sender_total_freezes_duration = D), (m.sender_total_frames_duration = L)) : ((m.receiver_freeze_count = R), (m.receiver_total_freezes_duration = D), (m.receiver_total_frames_duration = L), (m.receiver_pause_count = C), (m.receiver_total_pauses_duration = O)),
            {
                ...m,
                avg_bitrate: i > 0 ? Math.round(((null != g ? g : 0) * 8) / i) : 0,
                avg_fps: i > 0 ? Math.round((null != y ? y : 0) / i) : 0,
                num_bytes: g,
                num_packets_lost: b,
                num_packets: T,
                num_frames: I,
                num_frames_codec_error: v,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: E,
                num_nacks: S,
                num_plis: A,
                qp_sum: N,
                num_keyframes: x,
                cryptor_passthrough_count: P,
                cryptor_success_count: w,
                cryptor_failure_count: M,
                cryptor_duration: k,
                cryptor_attempts: U,
                cryptor_missing_key_count: G,
                cryptor_invalid_nonce_count: B,
                encoder_quality_decode_errors: Z,
                encoder_quality_decoder_reboots: F,
                encoder_quality_score_errors: V,
                encoder_quality_frame_drops: j,
                encoder_quality_size_mismatches: H
            }
        );
    }
    receivedStats(e, t, n) {
        var i, a;
        let o = t.transport,
            u = (0, l.isWeb)() ? 1 : null !== (a = null === (i = o.receiverReports) || void 0 === i ? void 0 : i.length) && void 0 !== a ? a : 0,
            c = new Set(),
            d = new Set();
        this.updateSendState({ receivers: u });
        let _ = r().max(n.map((e) => e.quality)),
            p = t.rtp.outbound.filter((e) => 'video' === e.type && (null == e ? void 0 : e.videoEntropy) != null)[0],
            m = null == p ? void 0 : p.videoEntropy;
        t.rtp.outbound
            .filter((e) => 'video' === e.type)
            .forEach((t) => {
                let i = t;
                if (null != i) {
                    let t = i.ssrc,
                        S = this.outboundStats[t];
                    null == S && (console.warn('Unknown outbound video stream with SSRC: '.concat(t)), (S = new f.nt(this.timestampProducer)), (this.outboundStats[t] = S)), null == S.timeToFirstFrame && (i.framesEncoded > 0 || (null !== (r = i.frameRateInput) && void 0 !== r ? r : 0) > 0) && (S.timeToFirstFrame = Math.max(0, e - S.startTime)), null != m && m >= 0 && this.videoEntropy.addSample(m);
                    let A = n.find((e) => e.ssrc === t);
                    var r,
                        a,
                        l,
                        u,
                        d,
                        p,
                        h,
                        g,
                        E,
                        v,
                        y,
                        I,
                        T = !0;
                    if (this.connection.context === s.Yn.STREAM) {
                        var b = this.connection.getRemoteVideoSinkWants(t);
                        (null == b || 0 === b) && (null == A ? void 0 : A.quality) === _ && (b = this.connection.getRemoteVideoSinkWants('any')), (T = (null != b ? b : 0) > 0);
                    }
                    let N = this.videoStopped.value || !T;
                    if ((N !== S.isVideoStopped && S.setVideoStopped(N, f.Mq.SenderStopped), !N)) {
                        S.appendAndIncrementStats(f.z4.parseOutboundStats(i, e)), S.encoderCodec !== f.u7.UNKNOWN && c.add(S.encoderCodec);
                        let t = null == A ? void 0 : A.maxBitrate;
                        S.appendTargetRates(null == A ? void 0 : A.maxFrameRate, null !== (l = i.bitrateTarget) && void 0 !== l ? l : Math.min(null !== (a = o.availableOutgoingBitrate) && void 0 !== a ? a : 0, null != t ? t : 0), t, o.availableOutgoingBitrate), (S.averageEncodeTime = null !== (u = i.averageEncodeTime) && void 0 !== u ? u : 0), (S.framesDroppedRateLimiter = null !== (d = i.framesDroppedRateLimiter) && void 0 !== d ? d : null), (S.framesDroppedEncoderQueue = null !== (p = i.framesDroppedEncoderQueue) && void 0 !== p ? p : null), (S.framesDroppedCongestionWindow = null !== (h = i.framesDroppedCongestionWindow) && void 0 !== h ? h : null), (S.framesDroppedEncoder = null !== (g = i.framesDroppedEncoder) && void 0 !== g ? g : null), (this.hqSimulcastStreamEncoded.value = null !== (E = i.hqSimulcastStreamEncoded) && void 0 !== E && E), (this.lqSimulcastStreamEncoded.value = null !== (v = i.lqSimulcastStreamEncoded) && void 0 !== v && v), (this.bothSimulcastStreamsEncoded.value = this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value), (this.bandwidthLimitedResolution.value = null !== (y = i.bandwidthLimitedResolution) && void 0 !== y && y), (this.bandwidthLimitedFramerate.value = null !== (I = i.bandwidthLimitedFrameRate) && void 0 !== I && I);
                    }
                }
            }),
            this.paused.value ||
                r().forEach(t.rtp.inbound, (t, n) => {
                    let i = t.find((e) => 'video' === e.type);
                    if (null != i) {
                        let t = this.inboundStats[n];
                        null == t && (console.warn('Unknown inbound video stream for user: '.concat(n)), (t = new f.m7(this.timestampProducer)), (this.inboundStats[n] = t));
                        let r = f.z4.parseInboundStats(i, e);
                        this.statCollectionPausedUsers.has(n) || (t.appendAndIncrementStats(r), t.appendTransportStats(o)), r.packets > 0 && this.emit('fps-update', n, r.framesCodec, r.timestamp), t.decoderCodec !== f.u7.UNKNOWN && d.add(t.decoderCodec), null == t.timeToFirstFrame && i.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                    }
                }),
            0 !== c.size && 0 !== d.size && (h(c, d) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
    }
    updateSystemResourceStats() {
        for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats) this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let t = null == e ? void 0 : e.rtp.outbound.find((e) => 'video' === e.type);
        this.videoEffectDuration.value = (null == t ? void 0 : t.type) === 'video' && null != t.filter;
    }
    constructor(e, t = o.Z_) {
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
            (this.paused = new m(!1, t)),
            (this.zeroReceivers = new m(!1, t)),
            (this.videoStopped = new m(!1, t)),
            (this.videoEffectDuration = new m(!1, t)),
            (this.hqSimulcastStreamEncoded = new m(!1, t)),
            (this.lqSimulcastStreamEncoded = new m(!1, t)),
            (this.bothSimulcastStreamsEncoded = new m(!1, t)),
            (this.hqSimulcastStreamWatched = new m(!1, t)),
            (this.lqSimulcastStreamWatched = new m(!1, t)),
            (this.hqSimulcastStreamEligible = new m(!1, t)),
            (this.lqSimulcastStreamEligible = new m(!1, t)),
            (this.windowOccluded = new m(!1, t)),
            (this.videoStoppedForOcclusion = new m(!1, t)),
            (this.bandwidthLimitedFramerate = new m(!1, t)),
            (this.bandwidthLimitedResolution = new m(!1, t)),
            (this.videoEntropy = new c.b());
    }
}
