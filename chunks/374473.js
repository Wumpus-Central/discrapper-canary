"use strict";
n.d(t, { q: () => v });
var r = n(735438),
    i = n.n(r),
    s = n(166929),
    a = n(808180),
    o = n(973522),
    l = n(652896),
    u = n(624694),
    d = n(967347),
    c = n(929921),
    _ = n(734057),
    f = n(430452),
    E = n(383501),
    h = n(873985),
    p = n(309010),
    m = n(162605),
    g = n(954571),
    A = n(353835),
    I = n(321034),
    T = n(487329),
    S = n(652215),
    y = n(731854);
function N(e) {
    let t = u.A.getConnectionStats(e);
    return null == t ? null : (t.stats.rtp.outbound.find((e) => "video" === e.type) ?? null);
}
function O(e, t) {
    if (null == t) return null;
    let n = u.A.getConnectionStats(e);
    if (null == n) return null;
    let r = n.stats.rtp.inbound[t];
    return null == r ? null : (r.find((e) => "video" === e.type) ?? null);
}
function R(e, t, n) {
    return e ? N(t) : O(t, n);
}
function v(e, t) {
    let n,
        r,
        v = (0, T.B1)(e),
        C = ((r = p.A.getVoiceChannelId()), ("channelId" in t ? t.channelId : void 0) ?? r ?? null),
        b = _.A.getChannel(C),
        D = "streamKey" in t ? t.streamKey : void 0,
        L = "mediaContext" in t ? t.mediaContext : void 0,
        w = "underlyingError" in t ? t.underlyingError : void 0,
        M = "errorMessage" in t ? t.errorMessage : void 0,
        P = "mediaSessionId" in t ? t.mediaSessionId : void 0,
        U = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
        k = "videoCodec" in t ? t.videoCodec : void 0,
        x = "videoEncoder" in t ? t.videoEncoder : void 0,
        G = "videoDecoder" in t ? t.videoDecoder : void 0,
        V = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        F = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
        B = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
        H = "videoDeviceName" in t ? t.videoDeviceName : void 0,
        Y = "userId" in t ? t.userId : void 0,
        W = null != D ? (0, l.Iy)(D) : null,
        j = null != D ? m.A.getRTCConnection(D) : null,
        K = null != D ? j : E.A.getRTCConnection(),
        $ = null != D ? j?.analyticsContext?.streamApplication : null,
        { resolution: z, fps: q } = c.A.getState(),
        { gameName: X, gameId: Q, exe: J, distributor: Z } = (0, o.wH)($),
        ee = v.isErrorOutbound,
        et = L ?? y.x.DEFAULT,
        en = null != W ? W.ownerId : Y,
        er = null != j ? j?.getVoiceParticipantType() : ee ? "sender" : "receiver",
        ei = K?.getMediaEngineConnectionId() ?? null;
    (n =
        null != D && null != W
            ? ee
                ? K?.getOutboundStats()?.find((e) => e.quality === y.Y4)
                : K?.getInboundStats(W.ownerId)
            : ee
              ? (i().maxBy(K?.getOutboundStats() ?? [], (e) => e.num_frames) ?? null)
              : null != en
                ? K?.getInboundStats(en)
                : null),
        (0, d.w)().then((t) => {
            let r = {
                error_name: e.valueOf(),
                error_code: v.errorCode,
                error_severity: v.severity,
                error_category: v.category,
                underlying_error: w ?? null,
                error_message: M ?? null,
                guild_id: b?.guild_id ?? null,
                channel_id: C ?? null,
                channel_type: b?.type ?? null,
                rtc_connection_id: U ?? null,
                media_session_id: P ?? E.A.getMediaSessionId() ?? null,
                parent_media_session_id: j?.parentMediaSessionId ?? null,
                context: L ?? null,
                voice_backend_version: E.A.getRTCConnection()?.getVoiceVersion() ?? null,
                rtc_worker_backend_version: E.A.getRTCConnection()?.getRtcWorkerVersion() ?? null,
                guild_region: h.A.getRegion(E.A.getHostname()) ?? null,
                hostname: E.A.getHostname() ?? null,
                duration: K?.getDurationSeconds() ?? null,
                participant_type: er ?? null,
                num_frames: n?.num_frames ?? 0,
                num_packets: n?.num_packets ?? 0,
                num_bytes: n?.num_bytes ?? 0,
                num_packets_lost: R(ee, ei, en)?.packetsLost ?? 0,
                video_codec: k ?? (0, s.aV)(R(ee, ei, en)?.codec.name) ?? null,
                video_encoder: x ?? (0, s.kZ)(N(ei)?.encoderImplementationName) ?? null,
                video_decoder: G ?? (0, s.s7)(O(ei, en)?.decoderImplementationName) ?? null,
                audio_capture_sample_rate_mismatch_percent: V ?? null,
                incoming_video_stopped_for_occlusion: !a.X.isIncomingVideoEnabled(),
                bitrate: R(ee, ei, en)?.bitrate ?? null,
                target_bitrate: ee ? (N(ei)?.bitrateTarget ?? null) : null,
                fps: (ee ? (N(et)?.frameRateEncode ?? null) : (O(et, en)?.frameRateDecode ?? null)) ?? null,
                target_fps: et === y.x.STREAM && ee ? q : null,
                sender_user_id: W?.ownerId ?? null,
                stream_region: j?.getRegion() ?? null,
                stream_source_type: ee ? (j?.analyticsContext?.streamSourceType ?? null) : null,
                num_stream_viewers: j?.analyticsContext?.numViewers ?? null,
                video_input_resolution_height: ee ? (z ?? null) : null,
                video_input_frame_rate: ee ? (q ?? null) : null,
                screenshare_capture_method: (function (e) {
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
                })(ei),
                share_application_name: X ?? null,
                share_application_id: Q ?? null,
                share_application_executable: J ?? null,
                share_application_distributor: Z ?? null,
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
                outbound_bitrate_estimate: u.A.getConnectionStats(ei)?.stats.transport.outboundBitrateEstimate ?? null,
                inbound_bitrate_estimate: u.A.getConnectionStats(ei)?.stats.transport.inboundBitrateEstimate ?? null,
                hardware_enabled: f.Ay.getHardwareEncoding(),
                audio_input_device_name: F ?? f.Ay.getInputDevices()[f.Ay.getInputDeviceId()]?.name,
                audio_output_device_name: B ?? f.Ay.getOutputDevices()[f.Ay.getOutputDeviceId()]?.name,
                video_device_name: H ?? f.Ay.getVideoDevices()[f.Ay.getVideoDeviceId()]?.name,
                audio_subsystem: f.Ay.getMediaEngine().getAudioSubsystem(),
                automatic_audio_subsystem: f.Ay.getSettings().automaticAudioSubsystem,
                audio_layer: f.Ay.getMediaEngine().getAudioLayer(),
                audio_input_mode: f.Ay.getSettings().mode,
                automatic_audio_input_sensitivity_enabled: f.Ay.getSettings().modeOptions.autoThreshold,
                audio_input_sensitivity: f.Ay.getSettings().modeOptions.threshold,
                echo_cancellation_enabled: f.Ay.getEchoCancellation(),
                noise_suppression_enabled: f.Ay.getNoiseSuppression(),
                noise_cancellation_enabled: f.Ay.getNoiseCancellation(),
                automatic_gain_control_enabled: f.Ay.getAutomaticGainControl(),
                sidechain_compression_enabled: f.Ay.getSidechainCompression(),
                input_volume: f.Ay.getInputVolume(),
                output_volume: f.Ay.getOutputVolume(),
                audio_input_device_count: Object.keys(f.Ay.getInputDevices()).length,
                audio_output_device_count: Object.keys(f.Ay.getOutputDevices()).length,
                app_hardware_acceleration_enabled: A.A.getAppHardwareAccelerationEnabled(),
                input_device_os_muted: f.Ay.getInputDeviceOSMuted() ?? null,
                input_device_os_volume: f.Ay.getInputDeviceOSVolume() ?? null,
            };
            g.default.track(S.HAw.AV_ERROR_REPORTED, r);
        });
}
