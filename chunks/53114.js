n.d(t, {
    S: () => y,
    d: () => b,
}),
    n(388685),
    n(642613),
    n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(843991),
    o = n(47770),
    s = n(46973),
    l = n(379649),
    c = n(358085),
    u = n(709054),
    d = n(909766),
    f = n(140828),
    p = n(674466);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function g(e, t) {
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
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
var b = (function (e) {
    return (e.FpsUpdate = "fps-update"), e;
})({});
class y extends o.Z {
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
        null == this.outboundStats[e] && (this.outboundStats[e] = new p.nt(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return (
            null == this.inboundStats[e] && (this.inboundStats[e] = new p.m7(this.timestampProducer)),
            this.inboundStats[e]
        );
    }
    updateCallUserIdsCount(e) {
        this.callUserIdsCount = e;
    }
    setInboundUser(e, t) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === t, p.Mq.SenderStopped);
    }
    setUserVideoDisabled(e, t) {
        let n = this.getOrCreateInboundStats(e);
        n.setVideoStopped(t, p.Mq.ClientSideDisableVideo),
            !t &&
                n.statsWindow.length > 0 &&
                0 === n.statsWindow[0].packets &&
                (n.startTime = this.timestampProducer.now());
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
        this.connection.off(s.Sh.Stats, this.sampleStats),
            (this.streamEnd = this.timestampProducer.now()),
            this.removeAllListeners();
    }
    setViewedSimulcastQuality(e) {
        e !== this.hqSimulcastStreamWatched.value &&
            (this.hqSimulcastStreamWatched.totalDuration() > 0 || this.lqSimulcastStreamWatched.totalDuration() > 0) &&
            this.simulcastQualityChanges++,
            (this.hqSimulcastStreamWatched.value = e),
            (this.lqSimulcastStreamWatched.value = !e);
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
                n.set(i, E(this.outboundStats[t].codecBuckets[i])), e.set(parseInt(t), n);
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
                n.set(i, E(this.inboundStats[t].codecBuckets[i])), e.set(t, n);
            }
        }
        return e;
    }
    getCodecUsageStats(e, t) {
        var n, r, i, a, o, s, l, c, u, d, f, _;
        let m = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            h = new Map();
        if ("sender" === e || "streamer" === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let t = [...e.keys()].sort()[0];
                h = e.get(t);
            }
            return {
                codec_asymmetric_session: m,
                codec_h264_encode_duration_sec: null != (n = h.get(p.u7.H264)) ? n : 0,
                codec_h265_encode_duration_sec: null != (r = h.get(p.u7.H265)) ? r : 0,
                codec_vp8_encode_duration_sec: null != (i = h.get(p.u7.VP8)) ? i : 0,
                codec_vp9_encode_duration_sec: null != (a = h.get(p.u7.VP9)) ? a : 0,
                codec_av1_encode_duration_sec: null != (o = h.get(p.u7.AV1)) ? o : 0,
                codec_unknown_encode_duration_sec: null != (s = h.get(p.u7.UNKNOWN)) ? s : 0,
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(t) && (h = e.get(t)),
                {
                    codec_asymmetric_session: m,
                    codec_h264_decode_duration_sec: null != (l = h.get(p.u7.H264)) ? l : 0,
                    codec_h265_decode_duration_sec: null != (c = h.get(p.u7.H265)) ? c : 0,
                    codec_vp8_decode_duration_sec: null != (u = h.get(p.u7.VP8)) ? u : 0,
                    codec_vp9_decode_duration_sec: null != (d = h.get(p.u7.VP9)) ? d : 0,
                    codec_av1_decode_duration_sec: null != (f = h.get(p.u7.AV1)) ? f : 0,
                    codec_unknown_decode_duration_sec: null != (_ = h.get(p.u7.UNKNOWN)) ? _ : 0,
                }
            );
        }
    }
    getCameraDurationStats() {
        return {
            camera_enabled_duration: Math.round(this.cameraDuration.totalDurationSeconds()),
            camera_send_opportunity_duration: Math.round(this.cameraOpportunityDuration.totalDurationSeconds()),
            camera_send_duration: Math.round(this.cameraSendDuration.totalDurationSeconds()),
            num_camera_on_toggles: this.cameraToggles,
        };
    }
    getOutboundStats() {
        let e = [];
        return (
            i().forEach(this.outboundStats, (t, n) => {
                var r, i, a, o, s;
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
                    f = t.vmafHistogram.getReport(u),
                    _ = t.psnrHistogram.getReport(u),
                    h = t.targetBitrateHistogram.getReport(d),
                    b = t.outboundBandwidthSurplus.getReport(d),
                    y = this.videoEntropy.getReport(d),
                    O = t.aggregationDuration / 1000;
                e.push(
                    g(m({}, this.getStats(t)), {
                        target_fps: O > 0 ? Math.round((null != (i = t.targetFrames) ? i : 0) / O) : 0,
                        target_bitrate_network:
                            O > 0 ? Math.round(((null != (a = t.targetBytesNetwork) ? a : 0) * 8) / O) : 0,
                        target_bitrate_network_percentile1: h.count > 0 ? h.percentiles[1] : null,
                        target_bitrate_network_percentile5: h.count > 0 ? h.percentiles[5] : null,
                        target_bitrate_network_percentile10: h.count > 0 ? h.percentiles[10] : null,
                        target_bitrate_network_percentile25: h.count > 0 ? h.percentiles[25] : null,
                        target_bitrate_network_percentile50: h.count > 0 ? h.percentiles[50] : null,
                        target_bitrate_network_percentile75: h.count > 0 ? h.percentiles[75] : null,
                        target_bitrate_network_percentile99: h.count > 0 ? h.percentiles[99] : null,
                        target_bitrate_max: O > 0 ? Math.round(((null != (o = t.targetBytesMax) ? o : 0) * 8) / O) : 0,
                        outbound_bandwidth_estimate:
                            O > 0 ? Math.round(((null != (s = t.outboundBytesAvailable) ? s : 0) * 8) / O) : 0,
                        outbound_bandwidth_surplus_percentile1: b.count > 0 ? b.percentiles[1] : null,
                        outbound_bandwidth_surplus_percentile5: b.count > 0 ? b.percentiles[5] : null,
                        outbound_bandwidth_surplus_percentile10: b.count > 0 ? b.percentiles[10] : null,
                        outbound_bandwidth_surplus_percentile25: b.count > 0 ? b.percentiles[25] : null,
                        outbound_bandwidth_surplus_percentile50: b.count > 0 ? b.percentiles[50] : null,
                        outbound_bandwidth_surplus_percentile75: b.count > 0 ? b.percentiles[75] : null,
                        outbound_bandwidth_surplus_percentile99: b.count > 0 ? b.percentiles[99] : null,
                        duration_encoder_nvidia_cuda: E(t.encoderBuckets[p.Su.NVIDIA_CUDA]),
                        duration_encoder_nvidia_direct3d: E(t.encoderBuckets[p.Su.NVIDIA_DIRECT_3D]),
                        duration_encoder_openh264: E(t.encoderBuckets[p.Su.OPENH264]),
                        duration_encoder_videotoolbox: E(t.encoderBuckets[p.Su.VIDEOTOOLBOX]),
                        duration_encoder_amd_direct3d: E(t.encoderBuckets[p.Su.AMD_DIRECT_3D]),
                        duration_encoder_amd_vaapi: E(t.encoderBuckets[p.Su.AMD_VAAPI]),
                        duration_encoder_intel: E(t.encoderBuckets[p.Su.INTEL]),
                        duration_encoder_intel_direct3d: E(t.encoderBuckets[p.Su.INTEL_DIRECT_3D]),
                        duration_encoder_vp8_libvpx: E(t.encoderBuckets[p.Su.VP8_LIBVPX]),
                        duration_encoder_uncategorized: E(t.encoderBuckets[p.Su.UNCATEGORIZED]),
                        duration_encoder_unknown: E(t.encoderBuckets[p.Su.UNKNOWN]),
                        quality: l,
                        average_encode_time_ms: t.averageEncodeTime,
                        average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
                        encoder_vmaf_score_percentile1: f.count > 0 ? f.percentiles[1] : null,
                        encoder_vmaf_score_percentile5: f.count > 0 ? f.percentiles[5] : null,
                        encoder_vmaf_score_percentile10: f.count > 0 ? f.percentiles[10] : null,
                        encoder_vmaf_score_percentile25: f.count > 0 ? f.percentiles[25] : null,
                        encoder_vmaf_score_percentile50: f.count > 0 ? f.percentiles[50] : null,
                        encoder_vmaf_score_percentile75: f.count > 0 ? f.percentiles[75] : null,
                        average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
                        encoder_psnr_db_percentile1: _.count > 0 ? _.percentiles[1] : null,
                        encoder_psnr_db_percentile5: _.count > 0 ? _.percentiles[5] : null,
                        encoder_psnr_db_percentile10: _.count > 0 ? _.percentiles[10] : null,
                        encoder_psnr_db_percentile25: _.count > 0 ? _.percentiles[25] : null,
                        encoder_psnr_db_percentile50: _.count > 0 ? _.percentiles[50] : null,
                        encoder_psnr_db_percentile75: _.count > 0 ? _.percentiles[75] : null,
                        average_outbound_want:
                            t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
                        frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
                        frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
                        frames_dropped_congestion_window: t.framesDroppedCongestionWindow,
                        frames_dropped_encoder: t.framesDroppedEncoder,
                        duration_hq_simulcast_stream_encoded: E(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                        duration_lq_simulcast_stream_encoded: E(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                        duration_both_simulcast_streams_encoded: E(
                            this.bothSimulcastStreamsEncoded.totalDurationSeconds(),
                        ),
                        duration_fps_bandwidth_limited: E(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                        duration_resolution_bandwidth_limited: E(
                            this.bandwidthLimitedResolution.totalDurationSeconds(),
                        ),
                        video_entropy_percentile1: y.count > 0 ? y.percentiles[1] : null,
                        video_entropy_percentile5: y.count > 0 ? y.percentiles[5] : null,
                        video_entropy_percentile10: y.count > 0 ? y.percentiles[10] : null,
                        video_entropy_percentile25: y.count > 0 ? y.percentiles[25] : null,
                        video_entropy_percentile50: y.count > 0 ? y.percentiles[50] : null,
                        video_entropy_percentile75: y.count > 0 ? y.percentiles[75] : null,
                        video_entropy_percentile99: y.count > 0 ? y.percentiles[99] : null,
                        duration_encoder_exynos: E(t.encoderBuckets[p.Su.EXYNOS]),
                        duration_encoder_qualcomm: E(t.encoderBuckets[p.Su.QUALCOMM]),
                        duration_encoder_mediatek: E(t.encoderBuckets[p.Su.MEDIATEK]),
                        duration_encoder_wmf_sw: E(t.encoderBuckets[p.Su.WMF_SW]),
                    }),
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
        return u.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused),
            null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let t = this.paused.value || this.zeroReceivers.value,
            n = this.videoStopped.value;
        (this.videoStopped.value = t), t !== n && i().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        var t;
        if (null == e) return null;
        let n = Number(this.streamStart),
            r = (null != this.streamEnd ? this.streamEnd - n : this.timestampProducer.now() - n) / 1000,
            i = Math.max(e.aggregationDuration, 0) / 1000,
            a = [1, 5, 10, 25, 50, 75],
            o = [1, 5, 10, 25, 50, 75, 99],
            s = [1, 5, 10, 25, 50, 75, 99],
            l = [1, 5, 10, 25, 50, 75, 90, 95],
            c = e.fpsHistogram.getReport(a),
            u = e.bitrateHistogram.getReport(o),
            d = e.resolutionHistogram.getReport(a),
            f = e.inboundBitrateEstimateHistogram.getReport(s),
            _ = e.localWantHistogram.getReport(l),
            h = e.systemResources.getStats(),
            b = m(
                {
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
                    avg_minor_resolution:
                        e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                    avg_major_resolution:
                        e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
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
                    duration_incoming_video_stopped_for_occlusion: E(
                        this.videoStoppedForOcclusion.totalDurationSeconds(),
                    ),
                    num_window_occlusion_changes: this.numWindowOcclusionChanges,
                    fps_percentile1: c.percentiles[1],
                    fps_percentile5: c.percentiles[5],
                    fps_percentile10: c.percentiles[10],
                    fps_percentile25: c.percentiles[25],
                    fps_percentile50: c.percentiles[50],
                    fps_percentile75: c.percentiles[75],
                    bitrate_percentile1: u.percentiles[1],
                    bitrate_percentile5: u.percentiles[5],
                    bitrate_percentile10: u.percentiles[10],
                    bitrate_percentile25: u.percentiles[25],
                    bitrate_percentile50: u.percentiles[50],
                    bitrate_percentile75: u.percentiles[75],
                    bitrate_percentile99: u.percentiles[99],
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
                    duration_video_effect: E(this.videoEffectDuration.totalDuration() / 1000),
                    cryptor_max_attempts: e.cryptorMaxAttempts,
                    duration_decoder_ffmpeg: E(e.decoderBuckets[p.gr.FFMPEG]),
                    duration_decoder_dav1d: E(e.decoderBuckets[p.gr.DAV1D]),
                    duration_decoder_vp8_libvpx: E(e.decoderBuckets[p.gr.VP8_LIBVPX]),
                    duration_decoder_electron: E(e.decoderBuckets[p.gr.ELECTRON]),
                    duration_decoder_videotoolbox: E(e.decoderBuckets[p.gr.VIDEOTOOLBOX]),
                    duration_decoder_uncategorized: E(e.decoderBuckets[p.gr.UNCATEGORIZED]),
                    duration_decoder_unknown: E(e.decoderBuckets[p.gr.UNKNOWN]),
                    duration_decoder_exynos: E(e.decoderBuckets[p.gr.EXYNOS]),
                    duration_decoder_webrtc: E(e.decoderBuckets[p.gr.WEBRTC]),
                    duration_decoder_qualcomm: E(e.decoderBuckets[p.gr.QUALCOMM]),
                    duration_decoder_mediatek: E(e.decoderBuckets[p.gr.MEDIATEK]),
                },
                h,
            ),
            {
                bytes: y,
                framesDropped: O,
                framesCodecError: v,
                framesCodec: S,
                framesNetwork: I,
                packets: T,
                packetsLost: A,
                nackCount: C,
                pliCount: N,
                qpSum: P,
                pauseCount: R,
                freezeCount: w,
                totalPausesDuration: D,
                totalFreezesDuration: x,
                totalFramesDuration: L,
                keyframes: j,
                passthroughCount: M,
                cryptorSuccessCount: k,
                cryptorFailureCount: U,
                cryptorDuration: G,
                cryptorAttempts: Z,
                cryptorMissingKeyCount: B,
                cryptorInvalidNonceCount: F,
                qualityDecodeErrors: V,
                qualityDecoderReboots: H,
                qualityScoreErrors: Y,
                qualityFrameDrops: W,
                qualitySizeMismatches: K,
            } = e.aggregatedProperties,
            z = (null != U ? U : 0) - (null != (t = e.cryptorFailureBeforeSuccessCount) ? t : 0);
        return (
            e instanceof p.nt
                ? ((b.sender_freeze_count = w),
                  (b.sender_total_freezes_duration = x),
                  (b.sender_total_frames_duration = L))
                : ((b.receiver_freeze_count = w),
                  (b.receiver_total_freezes_duration = x),
                  (b.receiver_total_frames_duration = L),
                  (b.receiver_pause_count = R),
                  (b.receiver_total_pauses_duration = D)),
            g(m({}, b), {
                avg_bitrate: i > 0 ? Math.round(((null != y ? y : 0) * 8) / i) : 0,
                avg_fps: i > 0 ? Math.round((null != S ? S : 0) / i) : 0,
                num_bytes: y,
                num_packets_lost: A,
                num_packets: T,
                num_frames: I,
                num_frames_codec_error: v,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: O,
                num_nacks: C,
                num_plis: N,
                qp_sum: P,
                num_keyframes: j,
                cryptor_passthrough_count: M,
                cryptor_success_count: k,
                cryptor_failure_count: U,
                cryptor_duration: G,
                cryptor_attempts: Z,
                cryptor_missing_key_count: B,
                cryptor_invalid_nonce_count: F,
                cryptor_failure_after_success_count: z,
                encoder_quality_decode_errors: V,
                encoder_quality_decoder_reboots: H,
                encoder_quality_score_errors: Y,
                encoder_quality_frame_drops: W,
                encoder_quality_size_mismatches: K,
            })
        );
    }
    receivedStats(e, t, n) {
        var r, o;
        let l = t.transport,
            u = (0, c.isWeb)() ? 1 : null != (o = null == (r = l.receiverReports) ? void 0 : r.length) ? o : 0,
            d = new Set(),
            f = new Set();
        this.updateSendState({ receivers: u });
        let _ = this.cameraDuration.value;
        (this.cameraDuration.value = this.connection.context === s.Yn.DEFAULT && null != t.camera),
            (this.cameraOpportunityDuration.value =
                this.connection.context === s.Yn.DEFAULT && null != t.camera && this.callUserIdsCount > 1),
            (this.cameraSendDuration.value = this.connection.context === s.Yn.DEFAULT && null != t.camera && u > 0),
            this.cameraDuration.value && !_ && this.cameraToggles++;
        let m = i().max(n.map((e) => e.quality)),
            h = t.rtp.outbound.filter((e) => "video" === e.type && (null == e ? void 0 : e.videoEntropy) != null)[0],
            g = null == h ? void 0 : h.videoEntropy;
        t.rtp.outbound
            .filter((e) => "video" === e.type)
            .forEach((t) => {
                let r = t;
                if (null != r) {
                    let t = r.ssrc,
                        I = this.outboundStats[t];
                    null == I &&
                        (console.warn("Unknown outbound video stream with SSRC: ".concat(t)),
                        (I = new p.nt(this.timestampProducer)),
                        (this.outboundStats[t] = I)),
                        null == I.timeToFirstFrame &&
                            (r.framesEncoded > 0 || (null != (i = r.frameRateInput) ? i : 0) > 0) &&
                            (I.timeToFirstFrame = Math.max(0, e - I.startTime)),
                        null != g && g >= 0 && this.videoEntropy.addSample(g);
                    let T = n.find((e) => e.ssrc === t);
                    var i,
                        a,
                        o,
                        c,
                        u,
                        f,
                        _,
                        h,
                        E,
                        b,
                        y,
                        O,
                        v = !0;
                    if (this.connection.context === s.Yn.STREAM) {
                        var S = this.connection.getRemoteVideoSinkWants(t);
                        (null == S || 0 === S) &&
                            (null == T ? void 0 : T.quality) === m &&
                            (S = this.connection.getRemoteVideoSinkWants("any")),
                            (v = (null != S ? S : 0) > 0);
                    }
                    let A = this.videoStopped.value || !v;
                    if ((A !== I.isVideoStopped && I.setVideoStopped(A, p.Mq.SenderStopped), !A)) {
                        I.appendAndIncrementStats(p.z4.parseOutboundStats(r, e)),
                            I.encoderCodec !== p.u7.UNKNOWN && d.add(I.encoderCodec);
                        let t = null == T ? void 0 : T.maxBitrate;
                        I.appendTargetRates(
                            null == T ? void 0 : T.maxFrameRate,
                            null != (o = r.bitrateTarget)
                                ? o
                                : Math.min(null != (a = l.availableOutgoingBitrate) ? a : 0, null != t ? t : 0),
                            t,
                            l.availableOutgoingBitrate,
                        ),
                            (I.averageEncodeTime = null != (c = r.averageEncodeTime) ? c : 0),
                            (I.framesDroppedRateLimiter = null != (u = r.framesDroppedRateLimiter) ? u : null),
                            (I.framesDroppedEncoderQueue = null != (f = r.framesDroppedEncoderQueue) ? f : null),
                            (I.framesDroppedCongestionWindow =
                                null != (_ = r.framesDroppedCongestionWindow) ? _ : null),
                            (I.framesDroppedEncoder = null != (h = r.framesDroppedEncoder) ? h : null),
                            (this.hqSimulcastStreamEncoded.value = null != (E = r.hqSimulcastStreamEncoded) && E),
                            (this.lqSimulcastStreamEncoded.value = null != (b = r.lqSimulcastStreamEncoded) && b),
                            (this.bothSimulcastStreamsEncoded.value =
                                this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value),
                            (this.bandwidthLimitedResolution.value = null != (y = r.bandwidthLimitedResolution) && y),
                            (this.bandwidthLimitedFramerate.value = null != (O = r.bandwidthLimitedFrameRate) && O);
                    }
                }
            }),
            this.paused.value ||
                i().forEach(t.rtp.inbound, (t, n) => {
                    let r = t.find((e) => "video" === e.type);
                    if (null != r) {
                        let t = this.inboundStats[n];
                        null == t &&
                            (console.warn("Unknown inbound video stream for user: ".concat(n)),
                            (t = new p.m7(this.timestampProducer)),
                            (this.inboundStats[n] = t));
                        let i = p.z4.parseInboundStats(r, e);
                        this.statCollectionPausedUsers.has(n) ||
                            (t.appendAndIncrementStats(i), t.appendTransportStats(l)),
                            i.packets > 0 && this.emit("fps-update", n, i.framesCodec, i.timestamp),
                            t.decoderCodec !== p.u7.UNKNOWN && f.add(t.decoderCodec),
                            null == t.timeToFirstFrame && r.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                    }
                }),
            0 !== d.size &&
                0 !== f.size &&
                ((0, a.O)(d, f) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
    }
    updateSystemResourceStats() {
        for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats) this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let t = null == e ? void 0 : e.rtp.outbound.find((e) => "video" === e.type);
        this.videoEffectDuration.value = (null == t ? void 0 : t.type) === "video" && null != t.filter;
    }
    constructor(e, t = l.Z_) {
        super(),
            _(this, "connection", void 0),
            _(this, "timestampProducer", void 0),
            _(this, "networkQuality", void 0),
            _(this, "paused", void 0),
            _(this, "pausedCount", void 0),
            _(this, "zeroReceivers", void 0),
            _(this, "videoStopped", void 0),
            _(this, "videoEffectDuration", void 0),
            _(this, "hqSimulcastStreamEncoded", void 0),
            _(this, "lqSimulcastStreamEncoded", void 0),
            _(this, "bothSimulcastStreamsEncoded", void 0),
            _(this, "hqSimulcastStreamWatched", void 0),
            _(this, "lqSimulcastStreamWatched", void 0),
            _(this, "hqSimulcastStreamEligible", void 0),
            _(this, "lqSimulcastStreamEligible", void 0),
            _(this, "simulcastQualityChanges", void 0),
            _(this, "cameraToggles", void 0),
            _(this, "callUserIdsCount", void 0),
            _(this, "cameraDuration", void 0),
            _(this, "cameraOpportunityDuration", void 0),
            _(this, "cameraSendDuration", void 0),
            _(this, "windowOccluded", void 0),
            _(this, "videoStoppedForOcclusion", void 0),
            _(this, "numWindowOcclusionChanges", void 0),
            _(this, "outboundStats", void 0),
            _(this, "inboundStats", void 0),
            _(this, "streamStart", void 0),
            _(this, "streamEnd", void 0),
            _(this, "symmetricCodecUpdates", void 0),
            _(this, "asymmetricCodecUpdates", void 0),
            _(this, "bandwidthLimitedFramerate", void 0),
            _(this, "bandwidthLimitedResolution", void 0),
            _(this, "videoEntropy", void 0),
            _(this, "statCollectionPausedUsers", void 0),
            _(this, "sampleStats", void 0),
            (this.connection = e),
            (this.timestampProducer = t),
            (this.networkQuality = new f.Z()),
            (this.pausedCount = 0),
            (this.simulcastQualityChanges = 0),
            (this.cameraToggles = 0),
            (this.callUserIdsCount = 0),
            (this.numWindowOcclusionChanges = 0),
            (this.outboundStats = {}),
            (this.inboundStats = {}),
            (this.symmetricCodecUpdates = 0),
            (this.asymmetricCodecUpdates = 0),
            (this.statCollectionPausedUsers = new Set()),
            (this.sampleStats = (e) => {
                if (null == e) return;
                let t = this.timestampProducer.now();
                if (
                    (this.networkQuality.incrementNetworkStats(t),
                    this.updateSystemResourceStats(),
                    this.updateVideoEffectStats(e),
                    null == e)
                )
                    return;
                let n = this.connection.getStreamParameters();
                this.receivedStats(t, e, n);
            }),
            (this.paused = new l.sX(!1, t)),
            (this.zeroReceivers = new l.sX(!1, t)),
            (this.videoStopped = new l.sX(!1, t)),
            (this.videoEffectDuration = new l.sX(!1, t)),
            (this.hqSimulcastStreamEncoded = new l.sX(!1, t)),
            (this.lqSimulcastStreamEncoded = new l.sX(!1, t)),
            (this.bothSimulcastStreamsEncoded = new l.sX(!1, t)),
            (this.hqSimulcastStreamWatched = new l.sX(!1, t)),
            (this.lqSimulcastStreamWatched = new l.sX(!1, t)),
            (this.hqSimulcastStreamEligible = new l.sX(!1, t)),
            (this.lqSimulcastStreamEligible = new l.sX(!1, t)),
            (this.windowOccluded = new l.sX(!1, t)),
            (this.videoStoppedForOcclusion = new l.sX(!1, t)),
            (this.bandwidthLimitedFramerate = new l.sX(!1, t)),
            (this.bandwidthLimitedResolution = new l.sX(!1, t)),
            (this.cameraDuration = new l.sX(!1, t)),
            (this.cameraOpportunityDuration = new l.sX(!1, t)),
            (this.cameraSendDuration = new l.sX(!1, t)),
            (this.videoEntropy = new d.b());
    }
}
