"use strict";
n.d(t, { F: () => h, X: () => m }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(357758),
    a = n(972347),
    o = n(205693),
    l = n(499979),
    u = n(723702),
    c = n(661191),
    d = n(687658),
    _ = n(167127),
    f = n(166929);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
var h = (function (e) {
    return (e.FpsUpdate = "fps-update"), e;
})({});
class m extends a.A {
    connection;
    timestampProducer;
    networkQuality = new _.A();
    paused;
    pausedCount = 0;
    zeroReceivers;
    videoStopped;
    videoEffectDuration;
    hqSimulcastStreamEncoded;
    lqSimulcastStreamEncoded;
    bothSimulcastStreamsEncoded;
    hqSimulcastStreamWatched;
    lqSimulcastStreamWatched;
    hqSimulcastStreamEligible;
    lqSimulcastStreamEligible;
    simulcastQualityChanges = 0;
    cameraToggles = 0;
    callUserIdsCount = 0;
    cameraDuration;
    cameraOpportunityDuration;
    cameraSendDuration;
    windowOccluded;
    videoStoppedForOcclusion;
    numWindowOcclusionChanges = 0;
    outboundStats = {};
    inboundStats = {};
    streamStart;
    streamEnd;
    symmetricCodecUpdates = 0;
    asymmetricCodecUpdates = 0;
    bandwidthLimitedFramerate;
    bandwidthLimitedResolution;
    videoEntropy;
    statCollectionPausedUsers = new Set();
    constructor(e, t = l.TF) {
        super(),
            (this.connection = e),
            (this.timestampProducer = t),
            (this.paused = new l.w6(!1, t)),
            (this.zeroReceivers = new l.w6(!1, t)),
            (this.videoStopped = new l.w6(!1, t)),
            (this.videoEffectDuration = new l.w6(!1, t)),
            (this.hqSimulcastStreamEncoded = new l.w6(!1, t)),
            (this.lqSimulcastStreamEncoded = new l.w6(!1, t)),
            (this.bothSimulcastStreamsEncoded = new l.w6(!1, t)),
            (this.hqSimulcastStreamWatched = new l.w6(!1, t)),
            (this.lqSimulcastStreamWatched = new l.w6(!1, t)),
            (this.hqSimulcastStreamEligible = new l.w6(!1, t)),
            (this.lqSimulcastStreamEligible = new l.w6(!1, t)),
            (this.windowOccluded = new l.w6(!1, t)),
            (this.videoStoppedForOcclusion = new l.w6(!1, t)),
            (this.bandwidthLimitedFramerate = new l.w6(!1, t)),
            (this.bandwidthLimitedResolution = new l.w6(!1, t)),
            (this.cameraDuration = new l.w6(!1, t)),
            (this.cameraOpportunityDuration = new l.w6(!1, t)),
            (this.cameraSendDuration = new l.w6(!1, t)),
            (this.videoEntropy = new d.d());
    }
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        (this.streamStart = this.timestampProducer.now()), this.connection.on(o.yq.Stats, this.sampleStats);
    }
    setOutboundSsrc(e) {
        null == this.outboundStats[e] && (this.outboundStats[e] = new f.ET(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return (
            null == this.inboundStats[e] && (this.inboundStats[e] = new f.dg(this.timestampProducer)),
            this.inboundStats[e]
        );
    }
    updateCallUserIdsCount(e) {
        this.callUserIdsCount = e;
    }
    setInboundUser(e, t) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === t, f.iF.SenderStopped);
    }
    setUserVideoDisabled(e, t) {
        let n = this.getOrCreateInboundStats(e);
        n.setVideoStopped(t, f.iF.ClientSideDisableVideo),
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
        this.connection.off(o.yq.Stats, this.sampleStats),
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
                n.set(i, p(this.outboundStats[t].codecBuckets[i])), e.set(parseInt(t), n);
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
                n.set(i, p(this.inboundStats[t].codecBuckets[i])), e.set(t, n);
            }
        }
        return e;
    }
    getCodecUsageStats(e, t) {
        let n = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            r = new Map();
        if ("sender" === e || "streamer" === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let t = [...e.keys()].sort()[0];
                r = e.get(t);
            }
            return {
                codec_asymmetric_session: n,
                codec_h264_encode_duration_sec: r.get(f.Wn.H264) ?? 0,
                codec_h265_encode_duration_sec: r.get(f.Wn.H265) ?? 0,
                codec_vp8_encode_duration_sec: r.get(f.Wn.VP8) ?? 0,
                codec_vp9_encode_duration_sec: r.get(f.Wn.VP9) ?? 0,
                codec_av1_encode_duration_sec: r.get(f.Wn.AV1) ?? 0,
                codec_unknown_encode_duration_sec: r.get(f.Wn.UNKNOWN) ?? 0,
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(t) && (r = e.get(t)),
                {
                    codec_asymmetric_session: n,
                    codec_h264_decode_duration_sec: r.get(f.Wn.H264) ?? 0,
                    codec_h265_decode_duration_sec: r.get(f.Wn.H265) ?? 0,
                    codec_vp8_decode_duration_sec: r.get(f.Wn.VP8) ?? 0,
                    codec_vp9_decode_duration_sec: r.get(f.Wn.VP9) ?? 0,
                    codec_av1_decode_duration_sec: r.get(f.Wn.AV1) ?? 0,
                    codec_unknown_decode_duration_sec: r.get(f.Wn.UNKNOWN) ?? 0,
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
                let r,
                    i = this.connection?.getStreamParameters();
                i.length > 1 &&
                    i.forEach((e) => {
                        parseInt(n) === e.ssrc && (r = e.quality ?? 50);
                    });
                let s = [1, 5, 10, 25, 50, 75],
                    a = [1, 5, 10, 25, 50, 75, 99],
                    o = t.vmafHistogram.getReport(s),
                    l = t.psnrHistogram.getReport(s),
                    u = t.targetBitrateHistogram.getReport(a),
                    c = t.outboundBandwidthSurplus.getReport(a),
                    d = this.videoEntropy.getReport(a),
                    _ = t.aggregationDuration / 1e3;
                e.push({
                    ...this.getStats(t),
                    target_fps: _ > 0 ? Math.round((t.targetFrames ?? 0) / _) : 0,
                    target_bitrate_network: _ > 0 ? Math.round(((t.targetBytesNetwork ?? 0) * 8) / _) : 0,
                    target_bitrate_network_percentile1: u.count > 0 ? u.percentiles[1] : null,
                    target_bitrate_network_percentile5: u.count > 0 ? u.percentiles[5] : null,
                    target_bitrate_network_percentile10: u.count > 0 ? u.percentiles[10] : null,
                    target_bitrate_network_percentile25: u.count > 0 ? u.percentiles[25] : null,
                    target_bitrate_network_percentile50: u.count > 0 ? u.percentiles[50] : null,
                    target_bitrate_network_percentile75: u.count > 0 ? u.percentiles[75] : null,
                    target_bitrate_network_percentile99: u.count > 0 ? u.percentiles[99] : null,
                    target_bitrate_max: _ > 0 ? Math.round(((t.targetBytesMax ?? 0) * 8) / _) : 0,
                    outbound_bandwidth_estimate: _ > 0 ? Math.round(((t.outboundBytesAvailable ?? 0) * 8) / _) : 0,
                    outbound_bandwidth_surplus_percentile1: c.count > 0 ? c.percentiles[1] : null,
                    outbound_bandwidth_surplus_percentile5: c.count > 0 ? c.percentiles[5] : null,
                    outbound_bandwidth_surplus_percentile10: c.count > 0 ? c.percentiles[10] : null,
                    outbound_bandwidth_surplus_percentile25: c.count > 0 ? c.percentiles[25] : null,
                    outbound_bandwidth_surplus_percentile50: c.count > 0 ? c.percentiles[50] : null,
                    outbound_bandwidth_surplus_percentile75: c.count > 0 ? c.percentiles[75] : null,
                    outbound_bandwidth_surplus_percentile99: c.count > 0 ? c.percentiles[99] : null,
                    duration_encoder_nvidia_cuda: p(t.encoderBuckets[f.yo.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: p(t.encoderBuckets[f.yo.NVIDIA_DIRECT_3D]),
                    duration_encoder_openh264: p(t.encoderBuckets[f.yo.OPENH264]),
                    duration_encoder_videotoolbox: p(t.encoderBuckets[f.yo.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: p(t.encoderBuckets[f.yo.AMD_DIRECT_3D]),
                    duration_encoder_amd_vaapi: p(t.encoderBuckets[f.yo.AMD_VAAPI]),
                    duration_encoder_intel: p(t.encoderBuckets[f.yo.INTEL]),
                    duration_encoder_intel_direct3d: p(t.encoderBuckets[f.yo.INTEL_DIRECT_3D]),
                    duration_encoder_vp8_libvpx: p(t.encoderBuckets[f.yo.VP8_LIBVPX]),
                    duration_encoder_uncategorized: p(t.encoderBuckets[f.yo.UNCATEGORIZED]),
                    duration_encoder_wmf_chrome: p(t.encoderBuckets[f.yo.WMF_CHROME]),
                    duration_encoder_unknown: p(t.encoderBuckets[f.yo.UNKNOWN]),
                    quality: r,
                    average_encode_time_ms: t.averageEncodeTime,
                    average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
                    encoder_vmaf_score_percentile1: o.count > 0 ? o.percentiles[1] : null,
                    encoder_vmaf_score_percentile5: o.count > 0 ? o.percentiles[5] : null,
                    encoder_vmaf_score_percentile10: o.count > 0 ? o.percentiles[10] : null,
                    encoder_vmaf_score_percentile25: o.count > 0 ? o.percentiles[25] : null,
                    encoder_vmaf_score_percentile50: o.count > 0 ? o.percentiles[50] : null,
                    encoder_vmaf_score_percentile75: o.count > 0 ? o.percentiles[75] : null,
                    average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
                    encoder_psnr_db_percentile1: l.count > 0 ? l.percentiles[1] : null,
                    encoder_psnr_db_percentile5: l.count > 0 ? l.percentiles[5] : null,
                    encoder_psnr_db_percentile10: l.count > 0 ? l.percentiles[10] : null,
                    encoder_psnr_db_percentile25: l.count > 0 ? l.percentiles[25] : null,
                    encoder_psnr_db_percentile50: l.count > 0 ? l.percentiles[50] : null,
                    encoder_psnr_db_percentile75: l.count > 0 ? l.percentiles[75] : null,
                    average_outbound_want:
                        t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
                    frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
                    frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
                    frames_dropped_congestion_window: t.framesDroppedCongestionWindow,
                    frames_dropped_encoder: t.framesDroppedEncoder,
                    duration_hq_simulcast_stream_encoded: p(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_lq_simulcast_stream_encoded: p(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_both_simulcast_streams_encoded: p(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
                    duration_fps_bandwidth_limited: p(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                    duration_resolution_bandwidth_limited: p(this.bandwidthLimitedResolution.totalDurationSeconds()),
                    video_entropy_percentile1: d.count > 0 ? d.percentiles[1] : null,
                    video_entropy_percentile5: d.count > 0 ? d.percentiles[5] : null,
                    video_entropy_percentile10: d.count > 0 ? d.percentiles[10] : null,
                    video_entropy_percentile25: d.count > 0 ? d.percentiles[25] : null,
                    video_entropy_percentile50: d.count > 0 ? d.percentiles[50] : null,
                    video_entropy_percentile75: d.count > 0 ? d.percentiles[75] : null,
                    video_entropy_percentile99: d.count > 0 ? d.percentiles[99] : null,
                    duration_encoder_exynos: p(t.encoderBuckets[f.yo.EXYNOS]),
                    duration_encoder_qualcomm: p(t.encoderBuckets[f.yo.QUALCOMM]),
                    duration_encoder_mediatek: p(t.encoderBuckets[f.yo.MEDIATEK]),
                    duration_encoder_wmf_sw: p(t.encoderBuckets[f.yo.WMF_SW]),
                    duration_encoder_wmf_hw: p(t.encoderBuckets[f.yo.WMF_HW]),
                    duration_encoder_wmf_direct3d: p(t.encoderBuckets[f.yo.WMF_DIRECT_3D]),
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
        return c.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused),
            null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let t = this.paused.value || this.zeroReceivers.value,
            n = this.videoStopped.value;
        (this.videoStopped.value = t), t !== n && i().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        if (null == e) return null;
        let t = Number(this.streamStart),
            n = (null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t) / 1e3,
            r = Math.max(e.aggregationDuration, 0) / 1e3,
            i = [1, 5, 10, 25, 50, 75],
            s = [1, 5, 10, 25, 50, 75, 99],
            a = [1, 5, 10, 25, 50, 75, 99],
            o = [1, 5, 10, 25, 50, 75, 90, 95],
            l = e.fpsHistogram.getReport(i),
            u = e.bitrateHistogram.getReport(s),
            c = e.resolutionHistogram.getReport(i),
            d = e.inboundBitrateEstimateHistogram.getReport(a),
            _ = e.localWantHistogram.getReport(o),
            h = e.systemResources.getStats(),
            m = {
                duration: Math.floor(n),
                duration_aggregation: p(r),
                duration_stopped_receiving: p(e.videoStoppedDuration.asSeconds()),
                duration_stream_under_8mbps: p(e.bitrateBuckets[8e6]),
                duration_stream_under_7mbps: p(e.bitrateBuckets[7e6]),
                duration_stream_under_6mbps: p(e.bitrateBuckets[6e6]),
                duration_stream_under_5mbps: p(e.bitrateBuckets[5e6]),
                duration_stream_under_4mbps: p(e.bitrateBuckets[4e6]),
                duration_stream_under_3mbps: p(e.bitrateBuckets[3e6]),
                duration_stream_under_2mbps: p(e.bitrateBuckets[2e6]),
                duration_stream_under_1_5mbps: p(e.bitrateBuckets[15e5]),
                duration_stream_under_1mbps: p(e.bitrateBuckets[1e6]),
                duration_stream_under_0_5mbps: p(e.bitrateBuckets[5e5]),
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
                min_resolution_width: e.minWidth ?? null,
                min_resolution_height: e.minHeight ?? null,
                duration_resolution_under_720: p(e.resolutionBuckets[720]),
                duration_resolution_under_480: p(e.resolutionBuckets[480]),
                duration_resolution_under_360: p(e.resolutionBuckets[360]),
                num_pauses: this.pausedCount,
                duration_paused: p(this.paused.totalDuration() / 1e3),
                duration_zero_receivers: p(this.zeroReceivers.totalDuration() / 1e3),
                duration_video_stopped: p(this.videoStopped.totalDuration() / 1e3),
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
                duration_video_effect: p(this.videoEffectDuration.totalDuration() / 1e3),
                cryptor_max_attempts: e.cryptorMaxAttempts,
                duration_decoder_ffmpeg: p(e.decoderBuckets[f.eq.FFMPEG]),
                duration_decoder_dav1d: p(e.decoderBuckets[f.eq.DAV1D]),
                duration_decoder_vp8_libvpx: p(e.decoderBuckets[f.eq.VP8_LIBVPX]),
                duration_decoder_electron: p(e.decoderBuckets[f.eq.ELECTRON]),
                duration_decoder_videotoolbox: p(e.decoderBuckets[f.eq.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: p(e.decoderBuckets[f.eq.UNCATEGORIZED]),
                duration_decoder_unknown: p(e.decoderBuckets[f.eq.UNKNOWN]),
                duration_decoder_exynos: p(e.decoderBuckets[f.eq.EXYNOS]),
                duration_decoder_webrtc: p(e.decoderBuckets[f.eq.WEBRTC]),
                duration_decoder_qualcomm: p(e.decoderBuckets[f.eq.QUALCOMM]),
                duration_decoder_mediatek: p(e.decoderBuckets[f.eq.MEDIATEK]),
                duration_decoder_d3d11videodecoder: p(e.decoderBuckets[f.eq.D3D11VIDEODECODER]),
                ...h,
            },
            {
                bytes: E,
                framesDropped: g,
                framesCodecError: A,
                framesCodec: I,
                framesNetwork: T,
                packets: S,
                packetsLost: y,
                nackCount: v,
                pliCount: N,
                qpSum: C,
                pauseCount: R,
                freezeCount: O,
                totalPausesDuration: b,
                totalFreezesDuration: D,
                totalFramesDuration: L,
                keyframes: w,
                passthroughCount: M,
                cryptorSuccessCount: P,
                cryptorFailureCount: x,
                cryptorDuration: k,
                cryptorAttempts: U,
                cryptorMissingKeyCount: G,
                cryptorInvalidNonceCount: F,
                qualityDecodeErrors: V,
                qualityDecoderReboots: B,
                qualityScoreErrors: H,
                qualityFrameDrops: j,
                qualitySizeMismatches: Y,
            } = e.aggregatedProperties,
            W = (x ?? 0) - (e.cryptorFailureBeforeSuccessCount ?? 0);
        return (
            e instanceof f.ET
                ? ((m.sender_freeze_count = O),
                  (m.sender_total_freezes_duration = D),
                  (m.sender_total_frames_duration = L),
                  (m.consecutive_static_color_frames_max = e.consecutiveStaticColorFramesMax))
                : ((m.receiver_freeze_count = O),
                  (m.receiver_total_freezes_duration = D),
                  (m.receiver_total_frames_duration = L),
                  (m.receiver_pause_count = R),
                  (m.receiver_total_pauses_duration = b)),
            {
                ...m,
                avg_bitrate: r > 0 ? Math.round(((E ?? 0) * 8) / r) : 0,
                avg_fps: r > 0 ? Math.round((I ?? 0) / r) : 0,
                num_bytes: E,
                num_packets_lost: y,
                num_packets: S,
                num_frames: T,
                num_frames_codec_error: A,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: g,
                num_nacks: v,
                num_plis: N,
                qp_sum: C,
                num_keyframes: w,
                cryptor_passthrough_count: M,
                cryptor_success_count: P,
                cryptor_failure_count: x,
                cryptor_duration: k,
                cryptor_attempts: U,
                cryptor_missing_key_count: G,
                cryptor_invalid_nonce_count: F,
                cryptor_failure_after_success_count: W,
                encoder_quality_decode_errors: V,
                encoder_quality_decoder_reboots: B,
                encoder_quality_score_errors: H,
                encoder_quality_frame_drops: j,
                encoder_quality_size_mismatches: Y,
            }
        );
    }
    receivedStats(e, t, n) {
        let r = t.transport,
            a = (0, u.isWeb)() ? 1 : (r.receiverReports?.length ?? 0),
            l = new Set(),
            c = new Set();
        this.updateSendState({ receivers: a });
        let d = this.cameraDuration.value;
        (this.cameraDuration.value = this.connection.context === o.x.DEFAULT && null != t.camera),
            (this.cameraOpportunityDuration.value =
                this.connection.context === o.x.DEFAULT && null != t.camera && this.callUserIdsCount > 1),
            (this.cameraSendDuration.value = this.connection.context === o.x.DEFAULT && null != t.camera && a > 0),
            this.cameraDuration.value && !d && this.cameraToggles++;
        let _ = i().max(n.map((e) => e.quality)),
            p = t.rtp.outbound.filter((e) => "video" === e.type && e?.videoEntropy != null)[0],
            h = p?.videoEntropy;
        t.rtp.outbound
            .filter((e) => "video" === e.type)
            .forEach((t) => {
                let i = t;
                if (null != i) {
                    let t = i.ssrc,
                        u = this.outboundStats[t];
                    null == u &&
                        (console.warn(`Unknown outbound video stream with SSRC: ${t}`),
                        (u = new f.ET(this.timestampProducer)),
                        (this.outboundStats[t] = u)),
                        null == u.timeToFirstFrame &&
                            (i.framesEncoded > 0 || (i.frameRateInput ?? 0) > 0) &&
                            (u.timeToFirstFrame = Math.max(0, e - u.startTime)),
                        null != h && h >= 0 && this.videoEntropy.addSample(h);
                    let c = n.find((e) => e.ssrc === t);
                    var s = !0;
                    if (this.connection.context === o.x.STREAM) {
                        var a = this.connection.getRemoteVideoSinkWants(t);
                        (null == a || 0 === a) &&
                            c?.quality === _ &&
                            (a = this.connection.getRemoteVideoSinkWants("any")),
                            (s = (a ?? 0) > 0);
                    }
                    let d = this.videoStopped.value || !s;
                    if ((d !== u.isVideoStopped && u.setVideoStopped(d, f.iF.SenderStopped), !d)) {
                        u.appendAndIncrementStats(f.tH.parseOutboundStats(i, e)),
                            null != i.minResolutionWidth &&
                                i.minResolutionWidth > 0 &&
                                (null == u.minWidth || i.minResolutionWidth < u.minWidth) &&
                                (u.minWidth = i.minResolutionWidth),
                            null != i.minResolutionHeight &&
                                i.minResolutionHeight > 0 &&
                                (null == u.minHeight || i.minResolutionHeight < u.minHeight) &&
                                (u.minHeight = i.minResolutionHeight),
                            u.encoderCodec !== f.Wn.UNKNOWN && l.add(u.encoderCodec);
                        let t = c?.maxBitrate;
                        u.appendTargetRates(
                            c?.maxFrameRate,
                            i.bitrateTarget ?? Math.min(r.availableOutgoingBitrate ?? 0, t ?? 0),
                            t,
                            r.availableOutgoingBitrate,
                        ),
                            (u.averageEncodeTime = i.averageEncodeTime ?? 0),
                            (u.framesDroppedRateLimiter = i.framesDroppedRateLimiter ?? null),
                            (u.framesDroppedEncoderQueue = i.framesDroppedEncoderQueue ?? null),
                            (u.framesDroppedCongestionWindow = i.framesDroppedCongestionWindow ?? null),
                            (u.framesDroppedEncoder = i.framesDroppedEncoder ?? null),
                            (this.hqSimulcastStreamEncoded.value = i.hqSimulcastStreamEncoded ?? !1),
                            (this.lqSimulcastStreamEncoded.value = i.lqSimulcastStreamEncoded ?? !1),
                            (this.bothSimulcastStreamsEncoded.value =
                                this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value),
                            (this.bandwidthLimitedResolution.value = i.bandwidthLimitedResolution ?? !1),
                            (this.bandwidthLimitedFramerate.value = i.bandwidthLimitedFrameRate ?? !1);
                    }
                }
            }),
            this.paused.value ||
                i().forEach(t.rtp.inbound, (t, n) => {
                    let i = t.find((e) => "video" === e.type);
                    if (null != i) {
                        let t = this.inboundStats[n];
                        null == t &&
                            (console.warn(`Unknown inbound video stream for user: ${n}`),
                            (t = new f.dg(this.timestampProducer)),
                            (this.inboundStats[n] = t));
                        let s = f.tH.parseInboundStats(i, e);
                        this.statCollectionPausedUsers.has(n) ||
                            (t.appendAndIncrementStats(s), t.appendTransportStats(r)),
                            null != i.minResolutionWidth &&
                                i.minResolutionWidth > 0 &&
                                (null == t.minWidth || i.minResolutionWidth < t.minWidth) &&
                                (t.minWidth = i.minResolutionWidth),
                            null != i.minResolutionHeight &&
                                i.minResolutionHeight > 0 &&
                                (null == t.minHeight || i.minResolutionHeight < t.minHeight) &&
                                (t.minHeight = i.minResolutionHeight),
                            s.packets > 0 && this.emit("fps-update", n, s.framesCodec, s.timestamp),
                            t.decoderCodec !== f.Wn.UNKNOWN && c.add(t.decoderCodec),
                            null == t.timeToFirstFrame && i.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                    }
                }),
            0 !== l.size &&
                0 !== c.size &&
                ((0, s._)(l, c) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
    }
    sampleStats = (e) => {
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
    };
    updateSystemResourceStats() {
        for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats) this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let t = e?.rtp.outbound.find((e) => "video" === e.type);
        this.videoEffectDuration.value = t?.type === "video" && null != t.filter;
    }
}
