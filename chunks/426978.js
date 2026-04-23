"use strict";
n.d(t, { F: () => E, X: () => m }), n(321073);
var r,
    i = n(735438),
    s = n.n(i),
    a = n(357758),
    o = n(972347),
    l = n(205693),
    u = n(499979),
    c = n(723702),
    d = n(661191),
    _ = n(687658),
    f = n(167127),
    p = n(166929);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
var E = (((r = {}).FpsUpdate = "fps-update"), r);
class m extends o.A {
    connection;
    timestampProducer;
    networkQuality = new f.A();
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
    constructor(e, t = u.TF) {
        super(),
            (this.connection = e),
            (this.timestampProducer = t),
            (this.paused = new u.w6(!1, t)),
            (this.zeroReceivers = new u.w6(!1, t)),
            (this.videoStopped = new u.w6(!1, t)),
            (this.videoEffectDuration = new u.w6(!1, t)),
            (this.hqSimulcastStreamEncoded = new u.w6(!1, t)),
            (this.lqSimulcastStreamEncoded = new u.w6(!1, t)),
            (this.bothSimulcastStreamsEncoded = new u.w6(!1, t)),
            (this.hqSimulcastStreamWatched = new u.w6(!1, t)),
            (this.lqSimulcastStreamWatched = new u.w6(!1, t)),
            (this.hqSimulcastStreamEligible = new u.w6(!1, t)),
            (this.lqSimulcastStreamEligible = new u.w6(!1, t)),
            (this.windowOccluded = new u.w6(!1, t)),
            (this.videoStoppedForOcclusion = new u.w6(!1, t)),
            (this.bandwidthLimitedFramerate = new u.w6(!1, t)),
            (this.bandwidthLimitedResolution = new u.w6(!1, t)),
            (this.cameraDuration = new u.w6(!1, t)),
            (this.cameraOpportunityDuration = new u.w6(!1, t)),
            (this.cameraSendDuration = new u.w6(!1, t)),
            (this.videoEntropy = new _.d());
    }
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        (this.streamStart = this.timestampProducer.now()), this.connection.on(l.yq.Stats, this.sampleStats);
    }
    setOutboundSsrc(e) {
        null == this.outboundStats[e] && (this.outboundStats[e] = new p.ET(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return (
            null == this.inboundStats[e] && (this.inboundStats[e] = new p.dg(this.timestampProducer)),
            this.inboundStats[e]
        );
    }
    updateCallUserIdsCount(e) {
        this.callUserIdsCount = e;
    }
    setInboundUser(e, t) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === t, p.iF.SenderStopped);
    }
    setUserVideoDisabled(e, t) {
        let n = this.getOrCreateInboundStats(e);
        n.setVideoStopped(t, p.iF.ClientSideDisableVideo),
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
            s().forEach(this.outboundStats, (e) => {
                e.statsWindow = [];
            }),
            s().forEach(this.inboundStats, (e) => {
                e.statsWindow = [];
            }),
            this.updateSendState({ paused: !0 });
    }
    resume() {
        this.updateSendState({ paused: !1 });
    }
    stop() {
        this.connection.off(l.yq.Stats, this.sampleStats),
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
                n.set(i, h(this.outboundStats[t].codecBuckets[i])), e.set(parseInt(t), n);
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
                n.set(i, h(this.inboundStats[t].codecBuckets[i])), e.set(t, n);
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
                codec_h264_encode_duration_sec: r.get(p.Wn.H264) ?? 0,
                codec_h265_encode_duration_sec: r.get(p.Wn.H265) ?? 0,
                codec_vp8_encode_duration_sec: r.get(p.Wn.VP8) ?? 0,
                codec_vp9_encode_duration_sec: r.get(p.Wn.VP9) ?? 0,
                codec_av1_encode_duration_sec: r.get(p.Wn.AV1) ?? 0,
                codec_unknown_encode_duration_sec: r.get(p.Wn.UNKNOWN) ?? 0,
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(t) && (r = e.get(t)),
                {
                    codec_asymmetric_session: n,
                    codec_h264_decode_duration_sec: r.get(p.Wn.H264) ?? 0,
                    codec_h265_decode_duration_sec: r.get(p.Wn.H265) ?? 0,
                    codec_vp8_decode_duration_sec: r.get(p.Wn.VP8) ?? 0,
                    codec_vp9_decode_duration_sec: r.get(p.Wn.VP9) ?? 0,
                    codec_av1_decode_duration_sec: r.get(p.Wn.AV1) ?? 0,
                    codec_unknown_decode_duration_sec: r.get(p.Wn.UNKNOWN) ?? 0,
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
            s().forEach(this.outboundStats, (t, n) => {
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
                    duration_encoder_nvidia_cuda: h(t.encoderBuckets[p.yo.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: h(t.encoderBuckets[p.yo.NVIDIA_DIRECT_3D]),
                    duration_encoder_nvidia_vulkan: h(t.encoderBuckets[p.yo.NVIDIA_VULKAN]),
                    duration_encoder_openh264: h(t.encoderBuckets[p.yo.OPENH264]),
                    duration_encoder_videotoolbox: h(t.encoderBuckets[p.yo.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: h(t.encoderBuckets[p.yo.AMD_DIRECT_3D]),
                    duration_encoder_amd_vaapi: h(t.encoderBuckets[p.yo.AMD_VAAPI]),
                    duration_encoder_intel: h(t.encoderBuckets[p.yo.INTEL]),
                    duration_encoder_intel_direct3d: h(t.encoderBuckets[p.yo.INTEL_DIRECT_3D]),
                    duration_encoder_intel_vaapi: h(t.encoderBuckets[p.yo.INTEL_VAAPI]),
                    duration_encoder_vp8_libvpx: h(t.encoderBuckets[p.yo.VP8_LIBVPX]),
                    duration_encoder_uncategorized: h(t.encoderBuckets[p.yo.UNCATEGORIZED]),
                    duration_encoder_wmf_chrome: h(t.encoderBuckets[p.yo.WMF_CHROME]),
                    duration_encoder_unknown: h(t.encoderBuckets[p.yo.UNKNOWN]),
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
                    duration_hq_simulcast_stream_encoded: h(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_lq_simulcast_stream_encoded: h(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_both_simulcast_streams_encoded: h(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
                    duration_fps_bandwidth_limited: h(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                    duration_resolution_bandwidth_limited: h(this.bandwidthLimitedResolution.totalDurationSeconds()),
                    video_entropy_percentile1: d.count > 0 ? d.percentiles[1] : null,
                    video_entropy_percentile5: d.count > 0 ? d.percentiles[5] : null,
                    video_entropy_percentile10: d.count > 0 ? d.percentiles[10] : null,
                    video_entropy_percentile25: d.count > 0 ? d.percentiles[25] : null,
                    video_entropy_percentile50: d.count > 0 ? d.percentiles[50] : null,
                    video_entropy_percentile75: d.count > 0 ? d.percentiles[75] : null,
                    video_entropy_percentile99: d.count > 0 ? d.percentiles[99] : null,
                    duration_encoder_exynos: h(t.encoderBuckets[p.yo.EXYNOS]),
                    duration_encoder_qualcomm: h(t.encoderBuckets[p.yo.QUALCOMM]),
                    duration_encoder_mediatek: h(t.encoderBuckets[p.yo.MEDIATEK]),
                    duration_encoder_wmf_sw: h(t.encoderBuckets[p.yo.WMF_SW]),
                    duration_encoder_wmf_hw: h(t.encoderBuckets[p.yo.WMF_HW]),
                    duration_encoder_wmf_direct3d: h(t.encoderBuckets[p.yo.WMF_DIRECT_3D]),
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
        return d.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused),
            null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let t = this.paused.value || this.zeroReceivers.value,
            n = this.videoStopped.value;
        (this.videoStopped.value = t), t !== n && s().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        if (null == e) return null;
        let t = Number(this.streamStart),
            n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t,
            r = Math.max(e.aggregationDuration, 0) / 1e3,
            i = [1, 5, 10, 25, 50, 75],
            s = e.fpsHistogram.getReport(i),
            a = e.bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
            o = e.resolutionHistogram.getReport(i),
            l = e.inboundBitrateEstimateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
            u = e.localWantHistogram.getReport([1, 5, 10, 25, 50, 75, 90, 95]),
            c = e.systemResources.getStats(),
            d = {
                duration: Math.floor(n / 1e3),
                duration_aggregation: h(r),
                duration_stopped_receiving: h(e.videoStoppedDuration.asSeconds()),
                duration_stream_under_8mbps: h(e.bitrateBuckets[8e6]),
                duration_stream_under_7mbps: h(e.bitrateBuckets[7e6]),
                duration_stream_under_6mbps: h(e.bitrateBuckets[6e6]),
                duration_stream_under_5mbps: h(e.bitrateBuckets[5e6]),
                duration_stream_under_4mbps: h(e.bitrateBuckets[4e6]),
                duration_stream_under_3mbps: h(e.bitrateBuckets[3e6]),
                duration_stream_under_2mbps: h(e.bitrateBuckets[2e6]),
                duration_stream_under_1_5mbps: h(e.bitrateBuckets[15e5]),
                duration_stream_under_1mbps: h(e.bitrateBuckets[1e6]),
                duration_stream_under_0_5mbps: h(e.bitrateBuckets[5e5]),
                duration_stream_at_0mbps: h(e.bitrateBuckets[0]),
                duration_fps_under_60: h(e.fpsBuckets[60]),
                duration_fps_under_55: h(e.fpsBuckets[55]),
                duration_fps_under_50: h(e.fpsBuckets[50]),
                duration_fps_under_45: h(e.fpsBuckets[45]),
                duration_fps_under_40: h(e.fpsBuckets[40]),
                duration_fps_under_35: h(e.fpsBuckets[35]),
                duration_fps_under_30: h(e.fpsBuckets[30]),
                duration_fps_under_25: h(e.fpsBuckets[25]),
                duration_fps_under_20: h(e.fpsBuckets[20]),
                duration_fps_under_15: h(e.fpsBuckets[15]),
                duration_fps_under_10: h(e.fpsBuckets[10]),
                duration_fps_under_5: h(e.fpsBuckets[5]),
                duration_fps_at_0: h(e.fpsBuckets[0]),
                avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                min_resolution_width: e.minWidth ?? null,
                min_resolution_height: e.minHeight ?? null,
                duration_resolution_under_720: h(e.resolutionBuckets[720]),
                duration_resolution_under_480: h(e.resolutionBuckets[480]),
                duration_resolution_under_360: h(e.resolutionBuckets[360]),
                num_pauses: this.pausedCount,
                duration_paused: h(this.paused.totalDuration() / 1e3),
                duration_zero_receivers: h(this.zeroReceivers.totalDuration() / 1e3),
                duration_video_stopped: h(this.videoStopped.totalDuration() / 1e3),
                duration_hq_simulcast_stream_watched: h(this.hqSimulcastStreamWatched.totalDurationSeconds()),
                duration_lq_simulcast_stream_watched: h(this.lqSimulcastStreamWatched.totalDurationSeconds()),
                duration_hq_simulcast_stream_eligible: h(this.hqSimulcastStreamEligible.totalDurationSeconds()),
                duration_lq_simulcast_stream_eligible: h(this.lqSimulcastStreamEligible.totalDurationSeconds()),
                num_quality_changes: this.simulcastQualityChanges,
                duration_window_occluded: h(this.windowOccluded.totalDurationSeconds()),
                duration_incoming_video_stopped_for_occlusion: h(this.videoStoppedForOcclusion.totalDurationSeconds()),
                num_window_occlusion_changes: this.numWindowOcclusionChanges,
                fps_percentile1: s.percentiles[1],
                fps_percentile5: s.percentiles[5],
                fps_percentile10: s.percentiles[10],
                fps_percentile25: s.percentiles[25],
                fps_percentile50: s.percentiles[50],
                fps_percentile75: s.percentiles[75],
                bitrate_percentile1: a.percentiles[1],
                bitrate_percentile5: a.percentiles[5],
                bitrate_percentile10: a.percentiles[10],
                bitrate_percentile25: a.percentiles[25],
                bitrate_percentile50: a.percentiles[50],
                bitrate_percentile75: a.percentiles[75],
                bitrate_percentile99: a.percentiles[99],
                resolution_percentile1: o.percentiles[1],
                resolution_percentile5: o.percentiles[5],
                resolution_percentile10: o.percentiles[10],
                resolution_percentile25: o.percentiles[25],
                resolution_percentile50: o.percentiles[50],
                resolution_percentile75: o.percentiles[75],
                inbound_bitrate_estimate_percentile1: l.percentiles[1],
                inbound_bitrate_estimate_percentile5: l.percentiles[5],
                inbound_bitrate_estimate_percentile10: l.percentiles[10],
                inbound_bitrate_estimate_percentile25: l.percentiles[25],
                inbound_bitrate_estimate_percentile50: l.percentiles[50],
                inbound_bitrate_estimate_percentile75: l.percentiles[75],
                inbound_bitrate_estimate_percentile99: l.percentiles[99],
                local_want_percentile1: u.percentiles[1],
                local_want_percentile5: u.percentiles[5],
                local_want_percentile10: u.percentiles[10],
                local_want_percentile25: u.percentiles[25],
                local_want_percentile50: u.percentiles[50],
                local_want_percentile75: u.percentiles[75],
                local_want_percentile90: u.percentiles[90],
                local_want_percentile95: u.percentiles[95],
                average_local_want: u.mean,
                duration_video_effect: h(this.videoEffectDuration.totalDuration() / 1e3),
                cryptor_max_attempts: e.cryptorMaxAttempts,
                duration_decoder_ffmpeg: h(e.decoderBuckets[p.eq.FFMPEG]),
                duration_decoder_dav1d: h(e.decoderBuckets[p.eq.DAV1D]),
                duration_decoder_vp8_libvpx: h(e.decoderBuckets[p.eq.VP8_LIBVPX]),
                duration_decoder_electron: h(e.decoderBuckets[p.eq.ELECTRON]),
                duration_decoder_videotoolbox: h(e.decoderBuckets[p.eq.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: h(e.decoderBuckets[p.eq.UNCATEGORIZED]),
                duration_decoder_unknown: h(e.decoderBuckets[p.eq.UNKNOWN]),
                duration_decoder_exynos: h(e.decoderBuckets[p.eq.EXYNOS]),
                duration_decoder_webrtc: h(e.decoderBuckets[p.eq.WEBRTC]),
                duration_decoder_qualcomm: h(e.decoderBuckets[p.eq.QUALCOMM]),
                duration_decoder_mediatek: h(e.decoderBuckets[p.eq.MEDIATEK]),
                duration_decoder_d3d11videodecoder: h(e.decoderBuckets[p.eq.D3D11VIDEODECODER]),
                ...c,
            },
            {
                bytes: _,
                framesDropped: f,
                framesCodecError: E,
                framesCodec: m,
                framesNetwork: g,
                packets: A,
                packetsLost: I,
                nackCount: T,
                pliCount: S,
                qpSum: y,
                pauseCount: N,
                freezeCount: v,
                totalPausesDuration: C,
                totalFreezesDuration: O,
                totalFramesDuration: R,
                keyframes: b,
                passthroughCount: D,
                cryptorSuccessCount: L,
                cryptorFailureCount: w,
                cryptorDuration: M,
                cryptorAttempts: P,
                cryptorMissingKeyCount: x,
                cryptorInvalidNonceCount: k,
                qualityDecodeErrors: U,
                qualityDecoderReboots: G,
                qualityScoreErrors: F,
                qualityFrameDrops: V,
                qualitySizeMismatches: B,
            } = e.aggregatedProperties,
            H = (w ?? 0) - (e.cryptorFailureBeforeSuccessCount ?? 0);
        return (
            e instanceof p.ET
                ? ((d.sender_freeze_count = v),
                  (d.sender_total_freezes_duration = O),
                  (d.sender_total_frames_duration = R),
                  (d.consecutive_static_color_frames_max = e.consecutiveStaticColorFramesMax))
                : ((d.receiver_freeze_count = v),
                  (d.receiver_total_freezes_duration = O),
                  (d.receiver_total_frames_duration = R),
                  (d.receiver_pause_count = N),
                  (d.receiver_total_pauses_duration = C)),
            {
                ...d,
                avg_bitrate: r > 0 ? Math.round(((_ ?? 0) * 8) / r) : 0,
                avg_fps: r > 0 ? Math.round((m ?? 0) / r) : 0,
                num_bytes: _,
                num_packets_lost: I,
                num_packets: A,
                num_frames: g,
                num_frames_codec_error: E,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: f,
                num_nacks: T,
                num_plis: S,
                qp_sum: y,
                num_keyframes: b,
                cryptor_passthrough_count: D,
                cryptor_success_count: L,
                cryptor_failure_count: w,
                cryptor_duration: M,
                cryptor_attempts: P,
                cryptor_missing_key_count: x,
                cryptor_invalid_nonce_count: k,
                cryptor_failure_after_success_count: H,
                encoder_quality_decode_errors: U,
                encoder_quality_decoder_reboots: G,
                encoder_quality_score_errors: F,
                encoder_quality_frame_drops: V,
                encoder_quality_size_mismatches: B,
            }
        );
    }
    receivedStats(e, t, n) {
        let r = t.transport,
            i = (0, c.isWeb)() ? 1 : (r.receiverReports?.length ?? 0),
            o = new Set(),
            u = new Set();
        this.updateSendState({ receivers: i });
        let d = this.cameraDuration.value;
        (this.cameraDuration.value = this.connection.context === l.x.DEFAULT && null != t.camera),
            (this.cameraOpportunityDuration.value =
                this.connection.context === l.x.DEFAULT && null != t.camera && this.callUserIdsCount > 1),
            (this.cameraSendDuration.value = this.connection.context === l.x.DEFAULT && null != t.camera && i > 0),
            this.cameraDuration.value && !d && this.cameraToggles++;
        let _ = s().max(n.map((e) => e.quality)),
            f = t.rtp.outbound.filter((e) => "video" === e.type && e?.videoEntropy != null)[0],
            h = f?.videoEntropy;
        t.rtp.outbound
            .filter((e) => "video" === e.type)
            .forEach((t) => {
                if (null != t) {
                    let a = t.ssrc,
                        u = this.outboundStats[a];
                    null == u &&
                        (console.warn(`Unknown outbound video stream with SSRC: ${a}`),
                        (u = new p.ET(this.timestampProducer)),
                        (this.outboundStats[a] = u)),
                        null == u.timeToFirstFrame &&
                            (t.framesEncoded > 0 || (t.frameRateInput ?? 0) > 0) &&
                            (u.timeToFirstFrame = Math.max(0, e - u.startTime)),
                        null != h && h >= 0 && this.videoEntropy.addSample(h);
                    let c = n.find((e) => e.ssrc === a);
                    var i = !0;
                    if (this.connection.context === l.x.STREAM) {
                        var s = this.connection.getRemoteVideoSinkWants(a);
                        (null == s || 0 === s) &&
                            c?.quality === _ &&
                            (s = this.connection.getRemoteVideoSinkWants("any")),
                            (i = (s ?? 0) > 0);
                    }
                    let d = this.videoStopped.value || !i;
                    if ((d !== u.isVideoStopped && u.setVideoStopped(d, p.iF.SenderStopped), !d)) {
                        u.appendAndIncrementStats(p.tH.parseOutboundStats(t, e)),
                            null != t.minResolutionWidth &&
                                t.minResolutionWidth > 0 &&
                                (null == u.minWidth || t.minResolutionWidth < u.minWidth) &&
                                (u.minWidth = t.minResolutionWidth),
                            null != t.minResolutionHeight &&
                                t.minResolutionHeight > 0 &&
                                (null == u.minHeight || t.minResolutionHeight < u.minHeight) &&
                                (u.minHeight = t.minResolutionHeight),
                            u.encoderCodec !== p.Wn.UNKNOWN && o.add(u.encoderCodec);
                        let n = c?.maxBitrate;
                        u.appendTargetRates(
                            c?.maxFrameRate,
                            t.bitrateTarget ?? Math.min(r.availableOutgoingBitrate ?? 0, n ?? 0),
                            n,
                            r.availableOutgoingBitrate,
                        ),
                            (u.averageEncodeTime = t.averageEncodeTime ?? 0),
                            (u.framesDroppedRateLimiter = t.framesDroppedRateLimiter ?? null),
                            (u.framesDroppedEncoderQueue = t.framesDroppedEncoderQueue ?? null),
                            (u.framesDroppedCongestionWindow = t.framesDroppedCongestionWindow ?? null),
                            (u.framesDroppedEncoder = t.framesDroppedEncoder ?? null),
                            (this.hqSimulcastStreamEncoded.value = t.hqSimulcastStreamEncoded ?? !1),
                            (this.lqSimulcastStreamEncoded.value = t.lqSimulcastStreamEncoded ?? !1),
                            (this.bothSimulcastStreamsEncoded.value =
                                this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value),
                            (this.bandwidthLimitedResolution.value = t.bandwidthLimitedResolution ?? !1),
                            (this.bandwidthLimitedFramerate.value = t.bandwidthLimitedFrameRate ?? !1);
                    }
                }
            }),
            this.paused.value ||
                s().forEach(t.rtp.inbound, (t, n) => {
                    let i = t.find((e) => "video" === e.type);
                    if (null != i) {
                        let t = this.inboundStats[n];
                        null == t &&
                            (console.warn(`Unknown inbound video stream for user: ${n}`),
                            (t = new p.dg(this.timestampProducer)),
                            (this.inboundStats[n] = t));
                        let s = p.tH.parseInboundStats(i, e);
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
                            t.decoderCodec !== p.Wn.UNKNOWN && u.add(t.decoderCodec),
                            null == t.timeToFirstFrame && i.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                    }
                }),
            0 !== o.size &&
                0 !== u.size &&
                ((0, a._)(o, u) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
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
