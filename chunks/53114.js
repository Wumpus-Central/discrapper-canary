r.d(n, {
    S: function () {
        return I;
    },
    d: function () {
        return i;
    }
});
var i,
    a = r(47120);
var s = r(653041);
var o = r(392711),
    l = r.n(o),
    u = r(47770),
    c = r(46973),
    d = r(379649),
    f = r(358085),
    _ = r(709054),
    h = r(140828),
    p = r(255914);
function m(e, n, r) {
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
function g(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : n;
}
function E(e, n) {
    return e.size === n.size && Array.from(e).every((e) => n.has(e));
}
class v {
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
        m(this, 'timestampProducer', void 0), m(this, 'begin', void 0), m(this, 'total', void 0), m(this, 'state', void 0), (this.timestampProducer = n), (this.total = 0), (this.state = e), (this.begin = e ? n.now() : null);
    }
}
!(function (e) {
    e.FpsUpdate = 'fps-update';
})(i || (i = {}));
class I extends u.Z {
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
        null == this.outboundStats[e] && (this.outboundStats[e] = new p.nt(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return null == this.inboundStats[e] && (this.inboundStats[e] = new p.m7(this.timestampProducer)), this.inboundStats[e];
    }
    setInboundUser(e, n) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === n, p.Mq.SenderStopped);
    }
    setUserVideoDisabled(e, n) {
        let r = this.getOrCreateInboundStats(e);
        r.setVideoStopped(n, p.Mq.ClientSideDisableVideo), !n && r.statsWindow.length > 0 && 0 === r.statsWindow[0].packets && (r.startTime = this.timestampProducer.now());
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
                r.set(a, g(this.outboundStats[n].codecBuckets[a])), e.set(parseInt(n), r);
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
                r.set(a, g(this.inboundStats[n].codecBuckets[a])), e.set(n, r);
            }
        }
        return e;
    }
    getCodecUsageStats(e, n) {
        var r, i, a, s, o, l, u, c, d, f;
        let _ = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            h = new Map();
        if ('sender' === e || 'streamer' === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let n = [...e.keys()].sort()[0];
                h = e.get(n);
            }
            return {
                codec_asymmetric_session: _,
                codec_h264_encode_duration_sec: null !== (r = h.get(p.u7.H264)) && void 0 !== r ? r : 0,
                codec_h265_encode_duration_sec: null !== (i = h.get(p.u7.H265)) && void 0 !== i ? i : 0,
                codec_vp8_encode_duration_sec: null !== (a = h.get(p.u7.VP8)) && void 0 !== a ? a : 0,
                codec_vp9_encode_duration_sec: null !== (s = h.get(p.u7.VP9)) && void 0 !== s ? s : 0,
                codec_av1_encode_duration_sec: null !== (o = h.get(p.u7.AV1)) && void 0 !== o ? o : 0
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(n) && (h = e.get(n)),
                {
                    codec_asymmetric_session: _,
                    codec_h264_decode_duration_sec: null !== (l = h.get(p.u7.H264)) && void 0 !== l ? l : 0,
                    codec_h265_decode_duration_sec: null !== (u = h.get(p.u7.H265)) && void 0 !== u ? u : 0,
                    codec_vp8_decode_duration_sec: null !== (c = h.get(p.u7.VP8)) && void 0 !== c ? c : 0,
                    codec_vp9_decode_duration_sec: null !== (d = h.get(p.u7.VP9)) && void 0 !== d ? d : 0,
                    codec_av1_decode_duration_sec: null !== (f = h.get(p.u7.AV1)) && void 0 !== f ? f : 0
                }
            );
        }
    }
    getOutboundStats() {
        let e = [];
        return (
            l().forEach(this.outboundStats, (n, r) => {
                var i, a, s, o, l;
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
                    _ = n.vmafHistogram.getReport(d),
                    h = n.psnrHistogram.getReport(d),
                    m = n.targetBitrateHistogram.getReport(f),
                    E = n.outboundBandwidthSurplus.getReport(f),
                    v = n.aggregationDuration / 1000;
                e.push({
                    ...this.getStats(n),
                    target_fps: v > 0 ? Math.round((null !== (a = n.targetFrames) && void 0 !== a ? a : 0) / v) : 0,
                    target_bitrate_network: v > 0 ? Math.round(((null !== (s = n.targetBytesNetwork) && void 0 !== s ? s : 0) * 8) / v) : 0,
                    target_bitrate_network_percentile1: m.count > 0 ? m.percentiles[1] : null,
                    target_bitrate_network_percentile5: m.count > 0 ? m.percentiles[5] : null,
                    target_bitrate_network_percentile10: m.count > 0 ? m.percentiles[10] : null,
                    target_bitrate_network_percentile25: m.count > 0 ? m.percentiles[25] : null,
                    target_bitrate_network_percentile50: m.count > 0 ? m.percentiles[50] : null,
                    target_bitrate_network_percentile75: m.count > 0 ? m.percentiles[75] : null,
                    target_bitrate_network_percentile99: m.count > 0 ? m.percentiles[99] : null,
                    target_bitrate_max: v > 0 ? Math.round(((null !== (o = n.targetBytesMax) && void 0 !== o ? o : 0) * 8) / v) : 0,
                    outbound_bandwidth_estimate: v > 0 ? Math.round(((null !== (l = n.outboundBytesAvailable) && void 0 !== l ? l : 0) * 8) / v) : 0,
                    outbound_bandwidth_surplus_percentile1: E.count > 0 ? E.percentiles[1] : null,
                    outbound_bandwidth_surplus_percentile5: E.count > 0 ? E.percentiles[5] : null,
                    outbound_bandwidth_surplus_percentile10: E.count > 0 ? E.percentiles[10] : null,
                    outbound_bandwidth_surplus_percentile25: E.count > 0 ? E.percentiles[25] : null,
                    outbound_bandwidth_surplus_percentile50: E.count > 0 ? E.percentiles[50] : null,
                    outbound_bandwidth_surplus_percentile75: E.count > 0 ? E.percentiles[75] : null,
                    outbound_bandwidth_surplus_percentile99: E.count > 0 ? E.percentiles[99] : null,
                    duration_encoder_nvidia_cuda: g(n.encoderBuckets[p.Su.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: g(n.encoderBuckets[p.Su.NVIDIA_DIRECT_3D]),
                    duration_encoder_openh264: g(n.encoderBuckets[p.Su.OPENH264]),
                    duration_encoder_videotoolbox: g(n.encoderBuckets[p.Su.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: g(n.encoderBuckets[p.Su.AMD_DIRECT_3D]),
                    duration_encoder_intel: g(n.encoderBuckets[p.Su.INTEL]),
                    duration_encoder_intel_direct3d: g(n.encoderBuckets[p.Su.INTEL_DIRECT_3D]),
                    duration_encoder_vp8_libvpx: g(n.encoderBuckets[p.Su.VP8_LIBVPX]),
                    duration_encoder_uncategorized: g(n.encoderBuckets[p.Su.UNCATEGORIZED]),
                    duration_encoder_unknown: g(n.encoderBuckets[p.Su.UNKNOWN]),
                    quality: u,
                    average_encode_time_ms: n.averageEncodeTime,
                    average_encoder_vmaf_score: n.vmafScoreNum > 0 ? n.vmafScoreSum / n.vmafScoreNum : null,
                    encoder_vmaf_score_percentile1: _.count > 0 ? _.percentiles[1] : null,
                    encoder_vmaf_score_percentile5: _.count > 0 ? _.percentiles[5] : null,
                    encoder_vmaf_score_percentile10: _.count > 0 ? _.percentiles[10] : null,
                    encoder_vmaf_score_percentile25: _.count > 0 ? _.percentiles[25] : null,
                    encoder_vmaf_score_percentile50: _.count > 0 ? _.percentiles[50] : null,
                    encoder_vmaf_score_percentile75: _.count > 0 ? _.percentiles[75] : null,
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
                    duration_hq_simulcast_stream_encoded: g(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_lq_simulcast_stream_encoded: g(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_both_simulcast_streams_encoded: g(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
                    duration_fps_bandwidth_limited: g(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                    duration_resolution_bandwidth_limited: g(this.bandwidthLimitedResolution.totalDurationSeconds())
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
        return _.default.keys(this.inboundStats);
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
            s = [1, 5, 10, 25, 50, 75, 99],
            o = [1, 5, 10, 25, 50, 75, 99],
            l = [1, 5, 10, 25, 50, 75, 90, 95],
            u = e.fpsHistogram.getReport(a),
            c = e.bitrateHistogram.getReport(s),
            d = e.resolutionHistogram.getReport(a),
            f = e.inboundBitrateEstimateHistogram.getReport(o),
            _ = e.localWantHistogram.getReport(l),
            h = e.systemResources.getStats(),
            m = {
                duration: Math.floor(r),
                duration_aggregation: g(i),
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
                duration_decoder_ffmpeg: g(e.decoderBuckets[p.gr.FFMPEG]),
                duration_decoder_dav1d: g(e.decoderBuckets[p.gr.DAV1D]),
                duration_decoder_vp8_libvpx: g(e.decoderBuckets[p.gr.VP8_LIBVPX]),
                duration_decoder_electron: g(e.decoderBuckets[p.gr.ELECTRON]),
                duration_decoder_videotoolbox: g(e.decoderBuckets[p.gr.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: g(e.decoderBuckets[p.gr.UNCATEGORIZED]),
                duration_decoder_unknown: g(e.decoderBuckets[p.gr.UNKNOWN]),
                ...h
            },
            { bytes: E, framesDropped: v, framesCodecError: I, framesCodec: T, framesNetwork: b, packets: y, packetsLost: S, nackCount: A, pliCount: N, qpSum: C, pauseCount: R, freezeCount: O, totalPausesDuration: D, totalFreezesDuration: L, totalFramesDuration: x, keyframes: w, passthroughCount: P, cryptorSuccessCount: M, cryptorFailureCount: k, cryptorDuration: U, cryptorAttempts: B, cryptorMissingKeyCount: G, cryptorInvalidNonceCount: Z, qualityDecodeErrors: F, qualityDecoderReboots: V, qualityScoreErrors: j, qualityFrameDrops: H, qualitySizeMismatches: Y } = e.aggregatedProperties;
        return (
            e instanceof p.nt ? ((m.sender_freeze_count = O), (m.sender_total_freezes_duration = L), (m.sender_total_frames_duration = x)) : ((m.receiver_freeze_count = O), (m.receiver_total_freezes_duration = L), (m.receiver_total_frames_duration = x), (m.receiver_pause_count = R), (m.receiver_total_pauses_duration = D)),
            {
                ...m,
                avg_bitrate: i > 0 ? Math.round(((null != E ? E : 0) * 8) / i) : 0,
                avg_fps: i > 0 ? Math.round((null != T ? T : 0) / i) : 0,
                num_bytes: E,
                num_packets_lost: S,
                num_packets: y,
                num_frames: b,
                num_frames_codec_error: I,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: v,
                num_nacks: A,
                num_plis: N,
                qp_sum: C,
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
        let s = n.transport,
            o = (0, f.isWeb)() ? 1 : null !== (a = null === (i = s.receiverReports) || void 0 === i ? void 0 : i.length) && void 0 !== a ? a : 0,
            u = new Set(),
            d = new Set();
        this.updateSendState({ receivers: o });
        let _ = l().max(r.map((e) => e.quality));
        n.rtp.outbound
            .filter((e) => 'video' === e.type)
            .forEach((n) => {
                let i = n;
                if (null != i) {
                    let n = i.ssrc,
                        S = this.outboundStats[n];
                    null == S && (console.warn('Unknown outbound video stream with SSRC: '.concat(n)), (S = new p.nt(this.timestampProducer)), (this.outboundStats[n] = S)), null == S.timeToFirstFrame && (i.framesEncoded > 0 || (null !== (a = i.frameRateInput) && void 0 !== a ? a : 0) > 0) && (S.timeToFirstFrame = Math.max(0, e - S.startTime));
                    let A = r.find((e) => e.ssrc === n);
                    var a,
                        o,
                        l,
                        d,
                        f,
                        h,
                        m,
                        g,
                        E,
                        v,
                        I,
                        T,
                        b = !0;
                    if (this.connection.context === c.Yn.STREAM) {
                        var y = this.connection.getRemoteVideoSinkWants(n);
                        (null == y || 0 === y) && (null == A ? void 0 : A.quality) === _ && (y = this.connection.getRemoteVideoSinkWants('any')), (b = (null != y ? y : 0) > 0);
                    }
                    let N = this.videoStopped.value || !b;
                    if ((N !== S.isVideoStopped && S.setVideoStopped(N, p.Mq.SenderStopped), !N)) {
                        S.appendAndIncrementStats(p.z4.parseOutboundStats(i, e)), S.encoderCodec !== p.u7.UNKNOWN && u.add(S.encoderCodec);
                        let n = null == A ? void 0 : A.maxBitrate;
                        S.appendTargetRates(null == A ? void 0 : A.maxFrameRate, null !== (l = i.bitrateTarget) && void 0 !== l ? l : Math.min(null !== (o = s.availableOutgoingBitrate) && void 0 !== o ? o : 0, null != n ? n : 0), n, s.availableOutgoingBitrate), (S.averageEncodeTime = null !== (d = i.averageEncodeTime) && void 0 !== d ? d : 0), (S.framesDroppedRateLimiter = null !== (f = i.framesDroppedRateLimiter) && void 0 !== f ? f : null), (S.framesDroppedEncoderQueue = null !== (h = i.framesDroppedEncoderQueue) && void 0 !== h ? h : null), (S.framesDroppedCongestionWindow = null !== (m = i.framesDroppedCongestionWindow) && void 0 !== m ? m : null), (S.framesDroppedEncoder = null !== (g = i.framesDroppedEncoder) && void 0 !== g ? g : null), (this.hqSimulcastStreamEncoded.value = null !== (E = i.hqSimulcastStreamEncoded) && void 0 !== E && E), (this.lqSimulcastStreamEncoded.value = null !== (v = i.lqSimulcastStreamEncoded) && void 0 !== v && v), (this.bothSimulcastStreamsEncoded.value = this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value), (this.bandwidthLimitedResolution.value = null !== (I = i.bandwidthLimitedResolution) && void 0 !== I && I), (this.bandwidthLimitedFramerate.value = null !== (T = i.bandwidthLimitedFrameRate) && void 0 !== T && T);
                    }
                }
            }),
            !this.paused.value &&
                l().forEach(n.rtp.inbound, (n, r) => {
                    let i = n.find((e) => 'video' === e.type);
                    if (null != i) {
                        let n = this.inboundStats[r];
                        null == n && (console.warn('Unknown inbound video stream for user: '.concat(r)), (n = new p.m7(this.timestampProducer)), (this.inboundStats[r] = n));
                        let a = p.z4.parseInboundStats(i, e);
                        !this.statCollectionPausedUsers.has(r) && (n.appendAndIncrementStats(a), n.appendTransportStats(s)), a.packets > 0 && this.emit('fps-update', r, a.framesCodec, a.timestamp), n.decoderCodec !== p.u7.UNKNOWN && d.add(n.decoderCodec), null == n.timeToFirstFrame && i.framesDecoded > 0 && (n.timeToFirstFrame = e - n.startTime);
                    }
                }),
            0 !== u.size && 0 !== d.size && (E(u, d) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
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
            m(this, 'connection', void 0),
            m(this, 'timestampProducer', void 0),
            m(this, 'networkQuality', void 0),
            m(this, 'paused', void 0),
            m(this, 'pausedCount', void 0),
            m(this, 'zeroReceivers', void 0),
            m(this, 'videoStopped', void 0),
            m(this, 'videoEffectDuration', void 0),
            m(this, 'hqSimulcastStreamEncoded', void 0),
            m(this, 'lqSimulcastStreamEncoded', void 0),
            m(this, 'bothSimulcastStreamsEncoded', void 0),
            m(this, 'hqSimulcastStreamWatched', void 0),
            m(this, 'lqSimulcastStreamWatched', void 0),
            m(this, 'hqSimulcastStreamEligible', void 0),
            m(this, 'lqSimulcastStreamEligible', void 0),
            m(this, 'simulcastQualityChanges', void 0),
            m(this, 'windowOccluded', void 0),
            m(this, 'videoStoppedForOcclusion', void 0),
            m(this, 'numWindowOcclusionChanges', void 0),
            m(this, 'outboundStats', void 0),
            m(this, 'inboundStats', void 0),
            m(this, 'streamStart', void 0),
            m(this, 'streamEnd', void 0),
            m(this, 'symmetricCodecUpdates', void 0),
            m(this, 'asymmetricCodecUpdates', void 0),
            m(this, 'bandwidthLimitedFramerate', void 0),
            m(this, 'bandwidthLimitedResolution', void 0),
            m(this, 'statCollectionPausedUsers', void 0),
            m(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.timestampProducer = n),
            (this.networkQuality = new h.Z()),
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
            (this.paused = new v(!1, n)),
            (this.zeroReceivers = new v(!1, n)),
            (this.videoStopped = new v(!1, n)),
            (this.videoEffectDuration = new v(!1, n)),
            (this.hqSimulcastStreamEncoded = new v(!1, n)),
            (this.lqSimulcastStreamEncoded = new v(!1, n)),
            (this.bothSimulcastStreamsEncoded = new v(!1, n)),
            (this.hqSimulcastStreamWatched = new v(!1, n)),
            (this.lqSimulcastStreamWatched = new v(!1, n)),
            (this.hqSimulcastStreamEligible = new v(!1, n)),
            (this.lqSimulcastStreamEligible = new v(!1, n)),
            (this.windowOccluded = new v(!1, n)),
            (this.videoStoppedForOcclusion = new v(!1, n)),
            (this.bandwidthLimitedFramerate = new v(!1, n)),
            (this.bandwidthLimitedResolution = new v(!1, n));
    }
}
