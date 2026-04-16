"use strict";
n.d(t, { q: () => w });
var r = n(735438),
    i = n.n(r),
    s = n(166929),
    a = n(808180),
    o = n(973522),
    l = n(652896),
    u = n(624694),
    c = n(929921),
    d = n(734057),
    _ = n(430452),
    f = n(383501),
    p = n(873985),
    h = n(309010),
    m = n(162605),
    E = n(851581),
    g = n(954571),
    A = n(353835),
    I = n(321034),
    T = n(487329),
    S = n(652215),
    y = n(731854);
function v(e) {
    let t = u.A.getConnectionStats(e);
    return null == t ? null : (t.stats.rtp.outbound.find((e) => "video" === e.type) ?? null);
}
function N(e, t) {
    if (null == t) return null;
    let n = u.A.getConnectionStats(e);
    if (null == n) return null;
    let r = n.stats.rtp.inbound[t];
    return null == r ? null : (r.find((e) => "video" === e.type) ?? null);
}
function C(e, t, n) {
    return e ? v(t) : N(t, n);
}
function R(e) {
    return u.A.getConnectionStats(e)?.stats.transport.outboundBitrateEstimate ?? null;
}
function O(e) {
    return u.A.getConnectionStats(e)?.stats.transport.inboundBitrateEstimate ?? null;
}
function b(e) {
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
            s = t.stats.screenshare?.[e] ?? 0;
        r[e] = s - i;
    }
    let i = -1,
        s = null;
    for (let [e, t] of Object.entries(r)) t > i && ((i = t), (s = e));
    return i > 0 ? s : null;
}
function D(e) {
    let t = h.A.getVoiceChannelId();
    return ("channelId" in e ? e.channelId : void 0) ?? t ?? null;
}
function L(e, t, n) {
    return e ? (v(t)?.frameRateEncode ?? null) : (N(t, n)?.frameRateDecode ?? null);
}
function w(e, t) {
    let n,
        r = (0, T.B1)(e),
        u = D(t),
        h = d.A.getChannel(u),
        w = "streamKey" in t ? t.streamKey : void 0,
        M = "mediaContext" in t ? t.mediaContext : void 0,
        P = "underlyingError" in t ? t.underlyingError : void 0,
        x = "errorMessage" in t ? t.errorMessage : void 0,
        k = "mediaSessionId" in t ? t.mediaSessionId : void 0,
        U = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
        G = "videoCodec" in t ? t.videoCodec : void 0,
        F = "videoEncoder" in t ? t.videoEncoder : void 0,
        V = "videoDecoder" in t ? t.videoDecoder : void 0,
        B = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        H = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
        j = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
        Y = "videoDeviceName" in t ? t.videoDeviceName : void 0,
        W = "userId" in t ? t.userId : void 0,
        K = null != w ? (0, l.Iy)(w) : null,
        $ = null != w ? m.A.getRTCConnection(w) : null,
        z = null != w ? $ : f.A.getRTCConnection(),
        q = null != w ? $?.analyticsContext?.streamApplication : null,
        { resolution: Z, fps: X } = c.A.getState(),
        { gameName: Q, gameId: J, exe: ee, distributor: et } = (0, o.wH)(q),
        en = r.isErrorOutbound,
        er = M ?? y.x.DEFAULT,
        ei = null != K ? K.ownerId : W,
        es = null != $ ? $?.getVoiceParticipantType() : en ? "sender" : "receiver",
        ea = z?.getMediaEngineConnectionId() ?? null;
    (n =
        null != w && null != K
            ? en
                ? z?.getOutboundStats()?.find((e) => e.quality === y.Y4)
                : z?.getInboundStats(K.ownerId)
            : en
              ? (i().maxBy(z?.getOutboundStats() ?? [], (e) => e.num_frames) ?? null)
              : null != ei
                ? z?.getInboundStats(ei)
                : null),
        (0, E.w)().then((t) => {
            let i = {
                error_name: e.valueOf(),
                error_code: r.errorCode,
                error_severity: r.severity,
                error_category: r.category,
                underlying_error: P ?? null,
                error_message: x ?? null,
                guild_id: h?.guild_id ?? null,
                channel_id: u ?? null,
                channel_type: h?.type ?? null,
                rtc_connection_id: U ?? null,
                media_session_id: k ?? f.A.getMediaSessionId() ?? null,
                parent_media_session_id: $?.parentMediaSessionId ?? null,
                context: M ?? null,
                voice_backend_version: f.A.getRTCConnection()?.getVoiceVersion() ?? null,
                rtc_worker_backend_version: f.A.getRTCConnection()?.getRtcWorkerVersion() ?? null,
                guild_region: p.A.getRegion(f.A.getHostname()) ?? null,
                hostname: f.A.getHostname() ?? null,
                duration: z?.getDurationSeconds() ?? null,
                participant_type: es ?? null,
                num_frames: n?.num_frames ?? 0,
                num_packets: n?.num_packets ?? 0,
                num_bytes: n?.num_bytes ?? 0,
                num_packets_lost: C(en, ea, ei)?.packetsLost ?? 0,
                video_codec: G ?? (0, s.aV)(C(en, ea, ei)?.codec.name) ?? null,
                video_encoder: F ?? (0, s.kZ)(v(ea)?.encoderImplementationName) ?? null,
                video_decoder: V ?? (0, s.s7)(N(ea, ei)?.decoderImplementationName) ?? null,
                audio_capture_sample_rate_mismatch_percent: B ?? null,
                incoming_video_stopped_for_occlusion: !a.X.isIncomingVideoEnabled(),
                bitrate: C(en, ea, ei)?.bitrate ?? null,
                target_bitrate: en ? (v(ea)?.bitrateTarget ?? null) : null,
                fps: L(en, er, ei) ?? null,
                target_fps: er === y.x.STREAM && en ? X : null,
                sender_user_id: K?.ownerId ?? null,
                stream_region: $?.getRegion() ?? null,
                stream_source_type: en ? ($?.analyticsContext?.streamSourceType ?? null) : null,
                num_stream_viewers: $?.analyticsContext?.numViewers ?? null,
                video_input_resolution_height: en ? (Z ?? null) : null,
                video_input_frame_rate: en ? (X ?? null) : null,
                screenshare_capture_method: b(ea),
                share_application_name: Q ?? null,
                share_application_id: J ?? null,
                share_application_executable: ee ?? null,
                share_application_distributor: et ?? null,
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
                cpu_usage: I.A.getCurrentCPUUsagePercent() ?? null,
                memory_usage: I.A.getCurrentMemoryUsageKB() ?? null,
                outbound_bitrate_estimate: R(ea),
                inbound_bitrate_estimate: O(ea),
                hardware_enabled: _.Ay.getHardwareEncoding(),
                audio_input_device_name: H ?? _.Ay.getInputDevices()[_.Ay.getInputDeviceId()]?.name,
                audio_output_device_name: j ?? _.Ay.getOutputDevices()[_.Ay.getOutputDeviceId()]?.name,
                video_device_name: Y ?? _.Ay.getVideoDevices()[_.Ay.getVideoDeviceId()]?.name,
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
                app_hardware_acceleration_enabled: A.A.getAppHardwareAccelerationEnabled(),
                input_device_os_muted: _.Ay.getInputDeviceOSMuted() ?? null,
                input_device_os_volume: _.Ay.getInputDeviceOSVolume() ?? null,
            };
            g.default.track(S.HAw.AV_ERROR_REPORTED, i);
        });
}
