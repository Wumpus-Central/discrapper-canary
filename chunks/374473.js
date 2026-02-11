"use strict";
n.d(t, { q: () => x });
var r = n(735438),
    i = n.n(r),
    a = n(166929),
    s = n(808180),
    o = n(973522),
    l = n(652896),
    u = n(624694),
    c = n(929921),
    d = n(734057),
    _ = n(430452),
    f = n(383501),
    h = n(873985),
    p = n(309010),
    g = n(162605),
    E = n(851581),
    A = n(954571),
    I = n(353835),
    T = n(321034),
    y = n(709710),
    S = n(652215),
    v = n(731854);
function C(e) {
    let t = u.A.getConnectionStats(e);
    return null == t ? null : (t.stats.rtp.outbound.find((e) => "video" === e.type) ?? null);
}
function b(e, t) {
    if (null == t) return null;
    let n = u.A.getConnectionStats(e);
    if (null == n) return null;
    let r = n.stats.rtp.inbound[t];
    return null == r ? null : (r.find((e) => "video" === e.type) ?? null);
}
function N(e, t, n) {
    return e ? C(t) : b(t, n);
}
function R(e) {
    return u.A.getConnectionStats(e)?.stats.transport.outboundBitrateEstimate ?? null;
}
function O(e) {
    return u.A.getConnectionStats(e)?.stats.transport.inboundBitrateEstimate ?? null;
}
function D(e) {
    let t = u.A.getConnectionStats(e),
        n = u.A.getLastConnectionStats(e);
    if (null == t || null == n) return null;
    let r = {};
    for (let e of [
        "videohookFrames",
        "hybridDxgiFrames",
        "hybridGdiFrames",
        "hybridVideohookFrames",
        "hybridGraphicsCaptureFrames",
        "hybridGdiBitBltFrames",
        "hybridGdiPrintWindowFrames",
        "quartzFrames",
        "screenCaptureKitFrames",
    ]) {
        let i = n.stats.screenshare?.[e] ?? 0,
            a = t.stats.screenshare?.[e] ?? 0;
        r[e] = a - i;
    }
    let i = -1,
        a = null;
    for (let [e, t] of Object.entries(r)) t > i && ((i = t), (a = e));
    return i > 0 ? a : null;
}
function L(e) {
    let t = p.A.getVoiceChannelId();
    return ("channelId" in e ? e.channelId : void 0) ?? t ?? null;
}
function w(e, t, n) {
    return e ? (C(t)?.frameRateEncode ?? null) : (b(t, n)?.frameRateDecode ?? null);
}
function x(e, t) {
    let n,
        r = (0, y.B1)(e),
        u = L(t),
        p = d.A.getChannel(u),
        x = "streamKey" in t ? t.streamKey : void 0,
        P = "mediaContext" in t ? t.mediaContext : void 0,
        M = "underlyingError" in t ? t.underlyingError : void 0,
        k = "errorMessage" in t ? t.errorMessage : void 0,
        U = "mediaSessionId" in t ? t.mediaSessionId : void 0,
        G = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
        F = "videoCodec" in t ? t.videoCodec : void 0,
        V = "videoEncoder" in t ? t.videoEncoder : void 0,
        B = "videoDecoder" in t ? t.videoDecoder : void 0,
        j = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        H = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
        Y = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
        W = "videoDeviceName" in t ? t.videoDeviceName : void 0,
        K = "userId" in t ? t.userId : void 0,
        $ = null != x ? (0, l.Iy)(x) : null,
        z = null != x ? g.A.getRTCConnection(x) : null,
        q = null != x ? z : f.A.getRTCConnection(),
        X = null != x ? z?.analyticsContext?.streamApplication : null,
        { resolution: Z, fps: Q } = c.A.getState(),
        { gameName: J, gameId: ee, exe: et, distributor: en } = (0, o.wH)(X),
        er = r.isErrorOutbound,
        ei = P ?? v.x.DEFAULT,
        ea = null != $ ? $.ownerId : K,
        es = null != z ? z?.getVoiceParticipantType() : er ? "sender" : "receiver",
        eo = q?.getMediaEngineConnectionId() ?? null;
    (n =
        null != x && null != $
            ? er
                ? q?.getOutboundStats()?.find((e) => e.quality === v.Y4)
                : q?.getInboundStats($.ownerId)
            : er
              ? (i().maxBy(q?.getOutboundStats() ?? [], (e) => e.num_frames) ?? null)
              : null != ea
                ? q?.getInboundStats(ea)
                : null),
        (0, E.w)().then((t) => {
            let i = {
                error_name: e.valueOf(),
                error_code: r.errorCode,
                error_severity: r.severity,
                error_category: r.category,
                underlying_error: M ?? null,
                error_message: k ?? null,
                guild_id: p?.guild_id ?? null,
                channel_id: u ?? null,
                channel_type: p?.type ?? null,
                rtc_connection_id: G ?? null,
                media_session_id: U ?? f.A.getMediaSessionId() ?? null,
                parent_media_session_id: z?.parentMediaSessionId ?? null,
                context: P ?? null,
                voice_backend_version: f.A.getRTCConnection()?.getVoiceVersion() ?? null,
                rtc_worker_backend_version: f.A.getRTCConnection()?.getRtcWorkerVersion() ?? null,
                guild_region: h.A.getRegion(f.A.getHostname()) ?? null,
                hostname: f.A.getHostname() ?? null,
                duration: q?.getDurationSeconds() ?? null,
                participant_type: es ?? null,
                num_frames: n?.num_frames ?? 0,
                num_packets: n?.num_packets ?? 0,
                num_bytes: n?.num_bytes ?? 0,
                num_packets_lost: N(er, eo, ea)?.packetsLost ?? 0,
                video_codec: F ?? (0, a.aV)(N(er, eo, ea)?.codec.name) ?? null,
                video_encoder: V ?? (0, a.kZ)(C(eo)?.encoderImplementationName) ?? null,
                video_decoder: B ?? (0, a.s7)(b(eo, ea)?.decoderImplementationName) ?? null,
                audio_capture_sample_rate_mismatch_percent: j ?? null,
                incoming_video_stopped_for_occlusion: !s.X.isIncomingVideoEnabled(),
                bitrate: N(er, eo, ea)?.bitrate ?? null,
                target_bitrate: er ? (C(eo)?.bitrateTarget ?? null) : null,
                fps: w(er, ei, ea) ?? null,
                target_fps: ei === v.x.STREAM && er ? Q : null,
                sender_user_id: $?.ownerId ?? null,
                stream_region: z?.getRegion() ?? null,
                stream_source_type: er ? (z?.analyticsContext?.streamSourceType ?? null) : null,
                num_stream_viewers: z?.analyticsContext?.numViewers ?? null,
                video_input_resolution_height: er ? (Z ?? null) : null,
                video_input_frame_rate: er ? (Q ?? null) : null,
                screenshare_capture_method: D(eo),
                share_application_name: J ?? null,
                share_application_id: ee ?? null,
                share_application_executable: et ?? null,
                share_application_distributor: en ?? null,
                cpu_brand: t?.cpu_brand ?? null,
                cpu_vendor: t?.cpu_vendor ?? null,
                cpu_memory: t?.cpu_memory ?? null,
                gpu_brand: t?.gpu_brand ?? null,
                gpu_count: t?.gpu_count ?? null,
                gpu_memory: t?.gpu_memory ?? null,
                gpu_device_vendor_id: t?.gpu_device_vendor_id ?? null,
                gpu_device_device_id: t?.gpu_device_device_id ?? null,
                gpu_device_sub_sys_id: t?.gpu_device_sub_sys_id ?? null,
                gpu_device_revision: t?.gpu_device_revision ?? null,
                gpu_driver_version: t?.gpu_driver_version ?? null,
                cpu_usage: T.A.getCurrentCPUUsagePercent() ?? null,
                memory_usage: T.A.getCurrentMemoryUsageKB() ?? null,
                outbound_bitrate_estimate: R(eo),
                inbound_bitrate_estimate: O(eo),
                hardware_enabled: _.Ay.getHardwareEncoding(),
                audio_input_device_name: H ?? _.Ay.getInputDevices()[_.Ay.getInputDeviceId()]?.name,
                audio_output_device_name: Y ?? _.Ay.getOutputDevices()[_.Ay.getOutputDeviceId()]?.name,
                video_device_name: W ?? _.Ay.getVideoDevices()[_.Ay.getVideoDeviceId()]?.name,
                audio_subsystem: _.Ay.getMediaEngine().getAudioSubsystem(),
                automatic_audio_subsystem: _.Ay.getSettings().automaticAudioSubsystem,
                audio_layer: _.Ay.getMediaEngine().getAudioLayer(),
                audio_input_mode: _.Ay.getSettings().mode,
                automatic_audio_input_sensitivity_enabled: _.Ay.getSettings().modeOptions.autoThreshold,
                audio_input_sensitivity: _.Ay.getSettings().modeOptions.threshold,
                echo_cancellation_enabled: _.Ay.getEchoCancellation(),
                noise_suppression_enabled: _.Ay.getNoiseSuppression(),
                noise_cancellation_enabled: _.Ay.getNoiseCancellation(),
                automatic_gain_control_enabled: _.Ay.getAutomaticGainControl(),
                sidechain_compression_enabled: _.Ay.getSidechainCompression(),
                input_volume: _.Ay.getInputVolume(),
                output_volume: _.Ay.getOutputVolume(),
                audio_input_device_count: Object.keys(_.Ay.getInputDevices()).length,
                audio_output_device_count: Object.keys(_.Ay.getOutputDevices()).length,
                app_hardware_acceleration_enabled: I.A.getAppHardwareAccelerationEnabled(),
                input_device_os_muted: _.Ay.getInputDeviceOSMuted() ?? null,
                input_device_os_volume: _.Ay.getInputDeviceOSVolume() ?? null,
            };
            A.default.track(S.HAw.AV_ERROR_REPORTED, i);
        });
}
