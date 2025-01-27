r.d(n, {
    S: function () {
        return b;
    },
    d: function () {
        return i;
    }
});
var i,
    a = r(47120);
var o = r(653041);
var s = r(392711),
    l = r.n(s),
    u = r(47770),
    c = r(46973),
    d = r(379649),
    f = r(358085),
    p = r(709054),
    h = r(909766),
    _ = r(140828),
    m = r(255914);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function E(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : n;
}
function v(e, n) {
    return e.size === n.size && Array.from(e).every((e) => n.has(e));
}
class y {
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
    constructor(e, n) {
        g(this, 'timestampProducer', void 0), g(this, 'begin', void 0), g(this, 'total', void 0), g(this, 'state', void 0), (this.timestampProducer = n), (this.total = 0), (this.state = e), (this.begin = e ? n.now() : null);
    }
}
!(function (e) {
    e.FpsUpdate = 'fps-update';
})(i || (i = {}));
class b extends u.Z {
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        (this.streamStart = this.timestampProducer.now()), this.connection.on(c.Sh.Stats, this.sampleStats);
    }
    setOutboundSsrc(e) {
        null == this.outboundStats[e] && (this.outboundStats[e] = new m.nt(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return null == this.inboundStats[e] && (this.inboundStats[e] = new m.m7(this.timestampProducer)), this.inboundStats[e];
    }
    setInboundUser(e, n) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === n, m.Mq.SenderStopped);
    }
    setUserVideoDisabled(e, n) {
        let r = this.getOrCreateInboundStats(e);
        r.setVideoStopped(n, m.Mq.ClientSideDisableVideo), !n && r.statsWindow.length > 0 && 0 === r.statsWindow[0].packets && (r.startTime = this.timestampProducer.now());
    }
    setOcclusionIncomingVideoEnabled(e) {
        this.videoStoppedForOcclusion.value = !e;
    }
    setWindowOcclusionState(e) {
        e !== this.windowOccluded.value && this.numWindowOcclusionChanges++, (this.windowOccluded.value = e);
    }
    pause() {
        !this.paused.value && this.pausedCount++,
            l().forEach(this.outboundStats, (e) => {
                e.statsWindow = [];
            }),
            l().forEach(this.inboundStats, (e) => {
                e.statsWindow = [];
            }),
            this.updateSendState({ paused: !0 });
    }
    resume() {
        this.updateSendState({ paused: !1 });
    }
    stop() {
        this.connection.off(c.Sh.Stats, this.sampleStats), (this.streamEnd = this.timestampProducer.now()), this.removeAllListeners();
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
        for (let n in this.outboundStats) {
            let r = new Map();
            for (let i of this.outboundStats[n].getCodecsUsed()) {
                let a = i.toUpperCase();
                r.set(a, E(this.outboundStats[n].codecBuckets[a])), e.set(parseInt(n), r);
            }
        }
        return e;
    }
    getDecoderUsageStats() {
        let e = new Map();
        for (let n in this.inboundStats) {
            let r = new Map();
            for (let i of this.inboundStats[n].getCodecsUsed()) {
                let a = i.toUpperCase();
                r.set(a, E(this.inboundStats[n].codecBuckets[a])), e.set(n, r);
            }
        }
        return e;
    }
    getCodecUsageStats(e, n) {
        var r, i, a, o, s, l, u, c, d, f;
        let p = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            h = new Map();
        if ('sender' === e || 'streamer' === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let n = [...e.keys()].sort()[0];
                h = e.get(n);
            }
            return {
                codec_asymmetric_session: p,
                codec_h264_encode_duration_sec: null !== (r = h.get(m.u7.H264)) && void 0 !== r ? r : 0,
                codec_h265_encode_duration_sec: null !== (i = h.get(m.u7.H265)) && void 0 !== i ? i : 0,
                codec_vp8_encode_duration_sec: null !== (a = h.get(m.u7.VP8)) && void 0 !== a ? a : 0,
                codec_vp9_encode_duration_sec: null !== (o = h.get(m.u7.VP9)) && void 0 !== o ? o : 0,
                codec_av1_encode_duration_sec: null !== (s = h.get(m.u7.AV1)) && void 0 !== s ? s : 0
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(n) && (h = e.get(n)),
                {
                    codec_asymmetric_session: p,
                    codec_h264_decode_duration_sec: null !== (l = h.get(m.u7.H264)) && void 0 !== l ? l : 0,
                    codec_h265_decode_duration_sec: null !== (u = h.get(m.u7.H265)) && void 0 !== u ? u : 0,
                    codec_vp8_decode_duration_sec: null !== (c = h.get(m.u7.VP8)) && void 0 !== c ? c : 0,
                    codec_vp9_decode_duration_sec: null !== (d = h.get(m.u7.VP9)) && void 0 !== d ? d : 0,
                    codec_av1_decode_duration_sec: null !== (f = h.get(m.u7.AV1)) && void 0 !== f ? f : 0
                }
            );
        }
    }
    getOutboundStats() {
        let e = [];
        return (
            l().forEach(this.outboundStats, (n, r) => {
                var i, a, o, s, l;
                let u;
                let c = null === (i = this.connection) || void 0 === i ? void 0 : i.getStreamParameters();
                c.length > 1 &&
                    c.forEach((e) => {
                        if (parseInt(r) === e.ssrc) {
                            var n;
                            u = null !== (n = e.quality) && void 0 !== n ? n : 50;
                        }
                    });
                let d = [1, 5, 10, 25, 50, 75],
                    f = [1, 5, 10, 25, 50, 75, 99],
                    p = n.vmafHistogram.getReport(d),
                    h = n.psnrHistogram.getReport(d),
                    _ = n.targetBitrateHistogram.getReport(f),
                    g = n.outboundBandwidthSurplus.getReport(f),
                    v = this.videoEntropy.getReport(f),
                    y = n.aggregationDuration / 1000;
                e.push({
                    ...this.getStats(n),
                    target_fps: y > 0 ? Math.round((null !== (a = n.targetFrames) && void 0 !== a ? a : 0) / y) : 0,
                    target_bitrate_network: y > 0 ? Math.round(((null !== (o = n.targetBytesNetwork) && void 0 !== o ? o : 0) * 8) / y) : 0,
                    target_bitrate_network_percentile1: _.count > 0 ? _.percentiles[1] : null,
                    target_bitrate_network_percentile5: _.count > 0 ? _.percentiles[5] : null,
                    target_bitrate_network_percentile10: _.count > 0 ? _.percentiles[10] : null,
                    target_bitrate_network_percentile25: _.count > 0 ? _.percentiles[25] : null,
                    target_bitrate_network_percentile50: _.count > 0 ? _.percentiles[50] : null,
                    target_bitrate_network_percentile75: _.count > 0 ? _.percentiles[75] : null,
                    target_bitrate_network_percentile99: _.count > 0 ? _.percentiles[99] : null,
                    target_bitrate_max: y > 0 ? Math.round(((null !== (s = n.targetBytesMax) && void 0 !== s ? s : 0) * 8) / y) : 0,
                    outbound_bandwidth_estimate: y > 0 ? Math.round(((null !== (l = n.outboundBytesAvailable) && void 0 !== l ? l : 0) * 8) / y) : 0,
                    outbound_bandwidth_surplus_percentile1: g.count > 0 ? g.percentiles[1] : null,
                    outbound_bandwidth_surplus_percentile5: g.count > 0 ? g.percentiles[5] : null,
                    outbound_bandwidth_surplus_percentile10: g.count > 0 ? g.percentiles[10] : null,
                    outbound_bandwidth_surplus_percentile25: g.count > 0 ? g.percentiles[25] : null,
                    outbound_bandwidth_surplus_percentile50: g.count > 0 ? g.percentiles[50] : null,
                    outbound_bandwidth_surplus_percentile75: g.count > 0 ? g.percentiles[75] : null,
                    outbound_bandwidth_surplus_percentile99: g.count > 0 ? g.percentiles[99] : null,
                    duration_encoder_nvidia_cuda: E(n.encoderBuckets[m.Su.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: E(n.encoderBuckets[m.Su.NVIDIA_DIRECT_3D]),
                    duration_encoder_openh264: E(n.encoderBuckets[m.Su.OPENH264]),
                    duration_encoder_videotoolbox: E(n.encoderBuckets[m.Su.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: E(n.encoderBuckets[m.Su.AMD_DIRECT_3D]),
                    duration_encoder_intel: E(n.encoderBuckets[m.Su.INTEL]),
                    duration_encoder_intel_direct3d: E(n.encoderBuckets[m.Su.INTEL_DIRECT_3D]),
                    duration_encoder_vp8_libvpx: E(n.encoderBuckets[m.Su.VP8_LIBVPX]),
                    duration_encoder_uncategorized: E(n.encoderBuckets[m.Su.UNCATEGORIZED]),
                    duration_encoder_unknown: E(n.encoderBuckets[m.Su.UNKNOWN]),
                    quality: u,
                    average_encode_time_ms: n.averageEncodeTime,
                    average_encoder_vmaf_score: n.vmafScoreNum > 0 ? n.vmafScoreSum / n.vmafScoreNum : null,
                    encoder_vmaf_score_percentile1: p.count > 0 ? p.percentiles[1] : null,
                    encoder_vmaf_score_percentile5: p.count > 0 ? p.percentiles[5] : null,
                    encoder_vmaf_score_percentile10: p.count > 0 ? p.percentiles[10] : null,
                    encoder_vmaf_score_percentile25: p.count > 0 ? p.percentiles[25] : null,
                    encoder_vmaf_score_percentile50: p.count > 0 ? p.percentiles[50] : null,
                    encoder_vmaf_score_percentile75: p.count > 0 ? p.percentiles[75] : null,
                    average_encoder_psnr_db: n.psnrDbNum > 0 ? n.psnrDbSum / n.psnrDbNum : null,
                    encoder_psnr_db_percentile1: h.count > 0 ? h.percentiles[1] : null,
                    encoder_psnr_db_percentile5: h.count > 0 ? h.percentiles[5] : null,
                    encoder_psnr_db_percentile10: h.count > 0 ? h.percentiles[10] : null,
                    encoder_psnr_db_percentile25: h.count > 0 ? h.percentiles[25] : null,
                    encoder_psnr_db_percentile50: h.count > 0 ? h.percentiles[50] : null,
                    encoder_psnr_db_percentile75: h.count > 0 ? h.percentiles[75] : null,
                    average_outbound_want: n.outboundSinkWantNum > 0 ? n.outboundSinkWantSum / n.outboundSinkWantNum : null,
                    frames_dropped_rate_limiter: n.framesDroppedRateLimiter,
                    frames_dropped_encoder_queue: n.framesDroppedEncoderQueue,
                    frames_dropped_congestion_window: n.framesDroppedCongestionWindow,
                    frames_dropped_encoder: n.framesDroppedEncoder,
                    duration_hq_simulcast_stream_encoded: E(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_lq_simulcast_stream_encoded: E(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_both_simulcast_streams_encoded: E(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
                    duration_fps_bandwidth_limited: E(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                    duration_resolution_bandwidth_limited: E(this.bandwidthLimitedResolution.totalDurationSeconds()),
                    video_entropy_percentile1: v.count > 0 ? v.percentiles[1] : null,
                    video_entropy_percentile5: v.count > 0 ? v.percentiles[5] : null,
                    video_entropy_percentile10: v.count > 0 ? v.percentiles[10] : null,
                    video_entropy_percentile25: v.count > 0 ? v.percentiles[25] : null,
                    video_entropy_percentile50: v.count > 0 ? v.percentiles[50] : null,
                    video_entropy_percentile75: v.count > 0 ? v.percentiles[75] : null,
                    video_entropy_percentile99: v.count > 0 ? v.percentiles[99] : null
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
        return p.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let n = this.paused.value || this.zeroReceivers.value,
            r = this.videoStopped.value;
        (this.videoStopped.value = n), n !== r && l().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        if (null == e) return;
        let n = Number(this.streamStart),
            r = (null != this.streamEnd ? this.streamEnd - n : this.timestampProducer.now() - n) / 1000,
            i = Math.max(e.aggregationDuration, 0) / 1000,
            a = [1, 5, 10, 25, 50, 75],
            o = [1, 5, 10, 25, 50, 75, 99],
            s = [1, 5, 10, 25, 50, 75, 99],
            l = [1, 5, 10, 25, 50, 75, 90, 95],
            u = e.fpsHistogram.getReport(a),
            c = e.bitrateHistogram.getReport(o),
            d = e.resolutionHistogram.getReport(a),
            f = e.inboundBitrateEstimateHistogram.getReport(s),
            p = e.localWantHistogram.getReport(l),
            h = e.systemResources.getStats(),
            _ = {
                duration: Math.floor(r),
                duration_aggregation: E(i),
                duration_stopped_receiving: E(e.videoStoppedDuration.asSeconds()),
                duration_stream_under_8mbps: E(e.bitrateBuckets[8000000]),
                duration_stream_under_7mbps: E(e.bitrateBuckets[7000000]),
                duration_stream_under_6mbps: E(e.bitrateBuckets[6000000]),
                duration_stream_under_5mbps: E(e.bitrateBuckets[5000000]),
                duration_stream_under_4mbps: E(e.bitrateBuckets[4000000]),
                duration_stream_under_3mbps: E(e.bitrateBuckets[3000000]),
                duration_stream_under_2mbps: E(e.bitrateBuckets[2000000]),
                duration_stream_under_1_5mbps: E(e.bitrateBuckets[1500000]),
                duration_stream_under_1mbps: E(e.bitrateBuckets[1000000]),
                duration_stream_under_0_5mbps: E(e.bitrateBuckets[500000]),
                duration_stream_at_0mbps: E(e.bitrateBuckets[0]),
                duration_fps_under_60: E(e.fpsBuckets[60]),
                duration_fps_under_55: E(e.fpsBuckets[55]),
                duration_fps_under_50: E(e.fpsBuckets[50]),
                duration_fps_under_45: E(e.fpsBuckets[45]),
                duration_fps_under_40: E(e.fpsBuckets[40]),
                duration_fps_under_35: E(e.fpsBuckets[35]),
                duration_fps_under_30: E(e.fpsBuckets[30]),
                duration_fps_under_25: E(e.fpsBuckets[25]),
                duration_fps_under_20: E(e.fpsBuckets[20]),
                duration_fps_under_15: E(e.fpsBuckets[15]),
                duration_fps_under_10: E(e.fpsBuckets[10]),
                duration_fps_under_5: E(e.fpsBuckets[5]),
                duration_fps_at_0: E(e.fpsBuckets[0]),
                avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                duration_resolution_under_720: E(e.resolutionBuckets[720]),
                duration_resolution_under_480: E(e.resolutionBuckets[480]),
                duration_resolution_under_360: E(e.resolutionBuckets[360]),
                num_pauses: this.pausedCount,
                duration_paused: E(this.paused.totalDuration() / 1000),
                duration_zero_receivers: E(this.zeroReceivers.totalDuration() / 1000),
                duration_video_stopped: E(this.videoStopped.totalDuration() / 1000),
                duration_hq_simulcast_stream_watched: E(this.hqSimulcastStreamWatched.totalDurationSeconds()),
                duration_lq_simulcast_stream_watched: E(this.lqSimulcastStreamWatched.totalDurationSeconds()),
                duration_hq_simulcast_stream_eligible: E(this.hqSimulcastStreamEligible.totalDurationSeconds()),
                duration_lq_simulcast_stream_eligible: E(this.lqSimulcastStreamEligible.totalDurationSeconds()),
                num_quality_changes: this.simulcastQualityChanges,
                duration_window_occluded: E(this.windowOccluded.totalDurationSeconds()),
                duration_incoming_video_stopped_for_occlusion: E(this.videoStoppedForOcclusion.totalDurationSeconds()),
                num_window_occlusion_changes: this.numWindowOcclusionChanges,
                fps_percentile1: u.percentiles[1],
                fps_percentile5: u.percentiles[5],
                fps_percentile10: u.percentiles[10],
                fps_percentile25: u.percentiles[25],
                fps_percentile50: u.percentiles[50],
                fps_percentile75: u.percentiles[75],
                bitrate_percentile1: c.percentiles[1],
                bitrate_percentile5: c.percentiles[5],
                bitrate_percentile10: c.percentiles[10],
                bitrate_percentile25: c.percentiles[25],
                bitrate_percentile50: c.percentiles[50],
                bitrate_percentile75: c.percentiles[75],
                bitrate_percentile99: c.percentiles[99],
                resolution_percentile1: d.percentiles[1],
                resolution_percentile5: d.percentiles[5],
                resolution_percentile10: d.percentiles[10],
                resolution_percentile25: d.percentiles[25],
                resolution_percentile50: d.percentiles[50],
                resolution_percentile75: d.percentiles[75],
                inbound_bitrate_estimate_percentile1: f.percentiles[1],
                inbound_bitrate_estimate_percentile5: f.percentiles[5],
                inbound_bitrate_estimate_percentile10: f.percentiles[10],
                inbound_bitrate_estimate_percentile25: f.percentiles[25],
                inbound_bitrate_estimate_percentile50: f.percentiles[50],
                inbound_bitrate_estimate_percentile75: f.percentiles[75],
                inbound_bitrate_estimate_percentile99: f.percentiles[99],
                local_want_percentile1: p.percentiles[1],
                local_want_percentile5: p.percentiles[5],
                local_want_percentile10: p.percentiles[10],
                local_want_percentile25: p.percentiles[25],
                local_want_percentile50: p.percentiles[50],
                local_want_percentile75: p.percentiles[75],
                local_want_percentile90: p.percentiles[90],
                local_want_percentile95: p.percentiles[95],
                average_local_want: p.mean,
                duration_video_effect: E(this.videoEffectDuration.totalDuration() / 1000),
                cryptor_max_attempts: e.cryptorMaxAttempts,
                duration_decoder_ffmpeg: E(e.decoderBuckets[m.gr.FFMPEG]),
                duration_decoder_dav1d: E(e.decoderBuckets[m.gr.DAV1D]),
                duration_decoder_vp8_libvpx: E(e.decoderBuckets[m.gr.VP8_LIBVPX]),
                duration_decoder_electron: E(e.decoderBuckets[m.gr.ELECTRON]),
                duration_decoder_videotoolbox: E(e.decoderBuckets[m.gr.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: E(e.decoderBuckets[m.gr.UNCATEGORIZED]),
                duration_decoder_unknown: E(e.decoderBuckets[m.gr.UNKNOWN]),
                ...h
            },
            { bytes: g, framesDropped: v, framesCodecError: y, framesCodec: b, framesNetwork: I, packets: T, packetsLost: S, nackCount: A, pliCount: C, qpSum: N, pauseCount: R, freezeCount: O, totalPausesDuration: D, totalFreezesDuration: L, totalFramesDuration: x, keyframes: w, passthroughCount: P, cryptorSuccessCount: M, cryptorFailureCount: k, cryptorDuration: U, cryptorAttempts: B, cryptorMissingKeyCount: G, cryptorInvalidNonceCount: Z, qualityDecodeErrors: F, qualityDecoderReboots: V, qualityScoreErrors: j, qualityFrameDrops: H, qualitySizeMismatches: Y } = e.aggregatedProperties;
        return (
            e instanceof m.nt ? ((_.sender_freeze_count = O), (_.sender_total_freezes_duration = L), (_.sender_total_frames_duration = x)) : ((_.receiver_freeze_count = O), (_.receiver_total_freezes_duration = L), (_.receiver_total_frames_duration = x), (_.receiver_pause_count = R), (_.receiver_total_pauses_duration = D)),
            {
                ..._,
                avg_bitrate: i > 0 ? Math.round(((null != g ? g : 0) * 8) / i) : 0,
                avg_fps: i > 0 ? Math.round((null != b ? b : 0) / i) : 0,
                num_bytes: g,
                num_packets_lost: S,
                num_packets: T,
                num_frames: I,
                num_frames_codec_error: y,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: v,
                num_nacks: A,
                num_plis: C,
                qp_sum: N,
                num_keyframes: w,
                cryptor_passthrough_count: P,
                cryptor_success_count: M,
                cryptor_failure_count: k,
                cryptor_duration: U,
                cryptor_attempts: B,
                cryptor_missing_key_count: G,
                cryptor_invalid_nonce_count: Z,
                encoder_quality_decode_errors: F,
                encoder_quality_decoder_reboots: V,
                encoder_quality_score_errors: j,
                encoder_quality_frame_drops: H,
                encoder_quality_size_mismatches: Y
            }
        );
    }
    receivedStats(e, n, r) {
        var i, a;
        let o = n.transport,
            s = (0, f.isWeb)() ? 1 : null !== (a = null === (i = o.receiverReports) || void 0 === i ? void 0 : i.length) && void 0 !== a ? a : 0,
            u = new Set(),
            d = new Set();
        this.updateSendState({ receivers: s });
        let p = l().max(r.map((e) => e.quality)),
            h = n.rtp.outbound.filter((e) => 'video' === e.type && (null == e ? void 0 : e.videoEntropy) != null)[0],
            _ = null == h ? void 0 : h.videoEntropy;
        n.rtp.outbound
            .filter((e) => 'video' === e.type)
            .forEach((n) => {
                let i = n;
                if (null != i) {
                    let n = i.ssrc,
                        A = this.outboundStats[n];
                    null == A && (console.warn('Unknown outbound video stream with SSRC: '.concat(n)), (A = new m.nt(this.timestampProducer)), (this.outboundStats[n] = A)), null == A.timeToFirstFrame && (i.framesEncoded > 0 || (null !== (a = i.frameRateInput) && void 0 !== a ? a : 0) > 0) && (A.timeToFirstFrame = Math.max(0, e - A.startTime)), null != _ && _ >= 0 && this.videoEntropy.addSample(_);
                    let C = r.find((e) => e.ssrc === n);
                    var a,
                        s,
                        l,
                        d,
                        f,
                        h,
                        g,
                        E,
                        v,
                        y,
                        b,
                        I,
                        T = !0;
                    if (this.connection.context === c.Yn.STREAM) {
                        var S = this.connection.getRemoteVideoSinkWants(n);
                        (null == S || 0 === S) && (null == C ? void 0 : C.quality) === p && (S = this.connection.getRemoteVideoSinkWants('any')), (T = (null != S ? S : 0) > 0);
                    }
                    let N = this.videoStopped.value || !T;
                    if ((N !== A.isVideoStopped && A.setVideoStopped(N, m.Mq.SenderStopped), !N)) {
                        A.appendAndIncrementStats(m.z4.parseOutboundStats(i, e)), A.encoderCodec !== m.u7.UNKNOWN && u.add(A.encoderCodec);
                        let n = null == C ? void 0 : C.maxBitrate;
                        A.appendTargetRates(null == C ? void 0 : C.maxFrameRate, null !== (l = i.bitrateTarget) && void 0 !== l ? l : Math.min(null !== (s = o.availableOutgoingBitrate) && void 0 !== s ? s : 0, null != n ? n : 0), n, o.availableOutgoingBitrate), (A.averageEncodeTime = null !== (d = i.averageEncodeTime) && void 0 !== d ? d : 0), (A.framesDroppedRateLimiter = null !== (f = i.framesDroppedRateLimiter) && void 0 !== f ? f : null), (A.framesDroppedEncoderQueue = null !== (h = i.framesDroppedEncoderQueue) && void 0 !== h ? h : null), (A.framesDroppedCongestionWindow = null !== (g = i.framesDroppedCongestionWindow) && void 0 !== g ? g : null), (A.framesDroppedEncoder = null !== (E = i.framesDroppedEncoder) && void 0 !== E ? E : null), (this.hqSimulcastStreamEncoded.value = null !== (v = i.hqSimulcastStreamEncoded) && void 0 !== v && v), (this.lqSimulcastStreamEncoded.value = null !== (y = i.lqSimulcastStreamEncoded) && void 0 !== y && y), (this.bothSimulcastStreamsEncoded.value = this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value), (this.bandwidthLimitedResolution.value = null !== (b = i.bandwidthLimitedResolution) && void 0 !== b && b), (this.bandwidthLimitedFramerate.value = null !== (I = i.bandwidthLimitedFrameRate) && void 0 !== I && I);
                    }
                }
            }),
            !this.paused.value &&
                l().forEach(n.rtp.inbound, (n, r) => {
                    let i = n.find((e) => 'video' === e.type);
                    if (null != i) {
                        let n = this.inboundStats[r];
                        null == n && (console.warn('Unknown inbound video stream for user: '.concat(r)), (n = new m.m7(this.timestampProducer)), (this.inboundStats[r] = n));
                        let a = m.z4.parseInboundStats(i, e);
                        !this.statCollectionPausedUsers.has(r) && (n.appendAndIncrementStats(a), n.appendTransportStats(o)), a.packets > 0 && this.emit('fps-update', r, a.framesCodec, a.timestamp), n.decoderCodec !== m.u7.UNKNOWN && d.add(n.decoderCodec), null == n.timeToFirstFrame && i.framesDecoded > 0 && (n.timeToFirstFrame = e - n.startTime);
                    }
                }),
            0 !== u.size && 0 !== d.size && (v(u, d) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
    }
    updateSystemResourceStats() {
        for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats) this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let n = null == e ? void 0 : e.rtp.outbound.find((e) => 'video' === e.type);
        this.videoEffectDuration.value = (null == n ? void 0 : n.type) === 'video' && null != n.filter;
    }
    constructor(e, n = d.Z_) {
        super(),
            g(this, 'connection', void 0),
            g(this, 'timestampProducer', void 0),
            g(this, 'networkQuality', void 0),
            g(this, 'paused', void 0),
            g(this, 'pausedCount', void 0),
            g(this, 'zeroReceivers', void 0),
            g(this, 'videoStopped', void 0),
            g(this, 'videoEffectDuration', void 0),
            g(this, 'hqSimulcastStreamEncoded', void 0),
            g(this, 'lqSimulcastStreamEncoded', void 0),
            g(this, 'bothSimulcastStreamsEncoded', void 0),
            g(this, 'hqSimulcastStreamWatched', void 0),
            g(this, 'lqSimulcastStreamWatched', void 0),
            g(this, 'hqSimulcastStreamEligible', void 0),
            g(this, 'lqSimulcastStreamEligible', void 0),
            g(this, 'simulcastQualityChanges', void 0),
            g(this, 'windowOccluded', void 0),
            g(this, 'videoStoppedForOcclusion', void 0),
            g(this, 'numWindowOcclusionChanges', void 0),
            g(this, 'outboundStats', void 0),
            g(this, 'inboundStats', void 0),
            g(this, 'streamStart', void 0),
            g(this, 'streamEnd', void 0),
            g(this, 'symmetricCodecUpdates', void 0),
            g(this, 'asymmetricCodecUpdates', void 0),
            g(this, 'bandwidthLimitedFramerate', void 0),
            g(this, 'bandwidthLimitedResolution', void 0),
            g(this, 'videoEntropy', void 0),
            g(this, 'statCollectionPausedUsers', void 0),
            g(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.timestampProducer = n),
            (this.networkQuality = new _.Z()),
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
                let n = this.timestampProducer.now();
                if ((this.networkQuality.incrementNetworkStats(n), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e)) return;
                let r = this.connection.getStreamParameters();
                this.receivedStats(n, e, r);
            }),
            (this.paused = new y(!1, n)),
            (this.zeroReceivers = new y(!1, n)),
            (this.videoStopped = new y(!1, n)),
            (this.videoEffectDuration = new y(!1, n)),
            (this.hqSimulcastStreamEncoded = new y(!1, n)),
            (this.lqSimulcastStreamEncoded = new y(!1, n)),
            (this.bothSimulcastStreamsEncoded = new y(!1, n)),
            (this.hqSimulcastStreamWatched = new y(!1, n)),
            (this.lqSimulcastStreamWatched = new y(!1, n)),
            (this.hqSimulcastStreamEligible = new y(!1, n)),
            (this.lqSimulcastStreamEligible = new y(!1, n)),
            (this.windowOccluded = new y(!1, n)),
            (this.videoStoppedForOcclusion = new y(!1, n)),
            (this.bandwidthLimitedFramerate = new y(!1, n)),
            (this.bandwidthLimitedResolution = new y(!1, n)),
            (this.videoEntropy = new h.b());
    }
}
