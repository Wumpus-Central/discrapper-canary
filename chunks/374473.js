"use strict";
n.d(t, { q: () => w });
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
    p = n(873985),
    h = n(309010),
    m = n(162605),
    g = n(851581),
    E = n(954571),
    A = n(353835),
    I = n(321034),
    T = n(709710),
    y = n(652215),
    S = n(731854);
function v(e) {
    let t = u.A.getConnectionStats(e);
    return null == t ? null : (t.stats.rtp.outbound.find((e) => "video" === e.type) ?? null);
}
function C(e, t) {
    if (null == t) return null;
    let n = u.A.getConnectionStats(e);
    if (null == n) return null;
    let r = n.stats.rtp.inbound[t];
    return null == r ? null : (r.find((e) => "video" === e.type) ?? null);
}
function b(e, t, n) {
    return e ? v(t) : C(t, n);
}
function N(e) {
    return u.A.getConnectionStats(e)?.stats.transport.outboundBitrateEstimate ?? null;
}
function R(e) {
    return u.A.getConnectionStats(e)?.stats.transport.inboundBitrateEstimate ?? null;
}
function O(e) {
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
function D(e) {
    let t = h.A.getVoiceChannelId();
    return ("channelId" in e ? e.channelId : void 0) ?? t ?? null;
}
function L(e, t, n) {
    return e ? (v(t)?.frameRateEncode ?? null) : (C(t, n)?.frameRateDecode ?? null);
}
function w(e, t) {
    let n,
        r = (0, T.B1)(e),
        u = D(t),
        h = d.A.getChannel(u),
        w = "streamKey" in t ? t.streamKey : void 0,
        x = "mediaContext" in t ? t.mediaContext : void 0,
        P = "underlyingError" in t ? t.underlyingError : void 0,
        M = "errorMessage" in t ? t.errorMessage : void 0,
        k = "mediaSessionId" in t ? t.mediaSessionId : void 0,
        U = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
        G = "videoCodec" in t ? t.videoCodec : void 0,
        V = "videoEncoder" in t ? t.videoEncoder : void 0,
        F = "videoDecoder" in t ? t.videoDecoder : void 0,
        B = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        j = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
        H = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
        Y = "videoDeviceName" in t ? t.videoDeviceName : void 0,
        W = "userId" in t ? t.userId : void 0,
        K = null != w ? (0, l.Iy)(w) : null,
        z = null != w ? m.A.getRTCConnection(w) : null,
        $ = null != w ? z : f.A.getRTCConnection(),
        q = null != w ? z?.analyticsContext?.streamApplication : null,
        { resolution: Z, fps: Q } = c.A.getState(),
        { gameName: X, gameId: J, exe: ee, distributor: et } = (0, o.wH)(q),
        en = r.isErrorOutbound,
        er = x ?? S.x.DEFAULT,
        ei = null != K ? K.ownerId : W,
        ea = null != z ? z?.getVoiceParticipantType() : en ? "sender" : "receiver",
        es = $?.getMediaEngineConnectionId() ?? null;
    (n =
        null != w && null != K
            ? en
                ? $?.getOutboundStats()?.find((e) => e.quality === S.Y4)
                : $?.getInboundStats(K.ownerId)
            : en
              ? (i().maxBy($?.getOutboundStats() ?? [], (e) => e.num_frames) ?? null)
              : null != ei
                ? $?.getInboundStats(ei)
                : null),
        (0, g.w)().then((t) => {
            let i = {
                error_name: e.valueOf(),
                error_code: r.errorCode,
                error_severity: r.severity,
                error_category: r.category,
                underlying_error: P ?? null,
                error_message: M ?? null,
                guild_id: h?.guild_id ?? null,
                channel_id: u ?? null,
                channel_type: h?.type ?? null,
                rtc_connection_id: U ?? null,
                media_session_id: k ?? f.A.getMediaSessionId() ?? null,
                parent_media_session_id: z?.parentMediaSessionId ?? null,
                context: x ?? null,
                voice_backend_version: f.A.getRTCConnection()?.getVoiceVersion() ?? null,
                rtc_worker_backend_version: f.A.getRTCConnection()?.getRtcWorkerVersion() ?? null,
                guild_region: p.A.getRegion(f.A.getHostname()) ?? null,
                hostname: f.A.getHostname() ?? null,
                duration: $?.getDurationSeconds() ?? null,
                participant_type: ea ?? null,
                num_frames: n?.num_frames ?? 0,
                num_packets: n?.num_packets ?? 0,
                num_bytes: n?.num_bytes ?? 0,
                num_packets_lost: b(en, es, ei)?.packetsLost ?? 0,
                video_codec: G ?? (0, a.aV)(b(en, es, ei)?.codec.name) ?? null,
                video_encoder: V ?? (0, a.kZ)(v(es)?.encoderImplementationName) ?? null,
                video_decoder: F ?? (0, a.s7)(C(es, ei)?.decoderImplementationName) ?? null,
                audio_capture_sample_rate_mismatch_percent: B ?? null,
                incoming_video_stopped_for_occlusion: !s.X.isIncomingVideoEnabled(),
                bitrate: b(en, es, ei)?.bitrate ?? null,
                target_bitrate: en ? (v(es)?.bitrateTarget ?? null) : null,
                fps: L(en, er, ei) ?? null,
                target_fps: er === S.x.STREAM && en ? Q : null,
                sender_user_id: K?.ownerId ?? null,
                stream_region: z?.getRegion() ?? null,
                stream_source_type: en ? (z?.analyticsContext?.streamSourceType ?? null) : null,
                num_stream_viewers: z?.analyticsContext?.numViewers ?? null,
                video_input_resolution_height: en ? (Z ?? null) : null,
                video_input_frame_rate: en ? (Q ?? null) : null,
                screenshare_capture_method: O(es),
                share_application_name: X ?? null,
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
                outbound_bitrate_estimate: N(es),
                inbound_bitrate_estimate: R(es),
                hardware_enabled: _.A.getHardwareEncoding(),
                audio_input_device_name: j ?? _.A.getInputDevices()[_.A.getInputDeviceId()]?.name,
                audio_output_device_name: H ?? _.A.getOutputDevices()[_.A.getOutputDeviceId()]?.name,
                video_device_name: Y ?? _.A.getVideoDevices()[_.A.getVideoDeviceId()]?.name,
                audio_subsystem: _.A.getMediaEngine().getAudioSubsystem(),
                automatic_audio_subsystem: _.A.getSettings().automaticAudioSubsystem,
                audio_layer: _.A.getMediaEngine().getAudioLayer(),
                audio_input_mode: _.A.getSettings().mode,
                automatic_audio_input_sensitivity_enabled: _.A.getSettings().modeOptions.autoThreshold,
                audio_input_sensitivity: _.A.getSettings().modeOptions.threshold,
                echo_cancellation_enabled: _.A.getEchoCancellation(),
                noise_suppression_enabled: _.A.getNoiseSuppression(),
                noise_cancellation_enabled: _.A.getNoiseCancellation(),
                automatic_gain_control_enabled: _.A.getAutomaticGainControl(),
                sidechain_compression_enabled: _.A.getSidechainCompression(),
                input_volume: _.A.getInputVolume(),
                output_volume: _.A.getOutputVolume(),
                audio_input_device_count: Object.keys(_.A.getInputDevices()).length,
                audio_output_device_count: Object.keys(_.A.getOutputDevices()).length,
                app_hardware_acceleration_enabled: A.A.getAppHardwareAccelerationEnabled(),
                input_device_os_muted: _.A.getInputDeviceOSMuted() ?? null,
                input_device_os_volume: _.A.getInputDeviceOSVolume() ?? null,
            };
            E.default.track(y.HAw.AV_ERROR_REPORTED, i);
        });
}
