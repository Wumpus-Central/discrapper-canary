n.d(t, {
    q: () => D,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(166929),
    o = n(808180),
    s = n(973522),
    l = n(652896),
    c = n(624694),
    u = n(929921),
    d = n(734057),
    f = n(430452),
    p = n(383501),
    _ = n(873985),
    h = n(309010),
    m = n(162605),
    g = n(851581),
    E = n(954571),
    y = n(353835),
    b = n(321034),
    O = n(709710),
    v = n(652215),
    A = n(731854);

function I(e) {
    var t;
    let n = c.A.getConnectionStats(e);
    return null == n ? null : null != (t = n.stats.rtp.outbound.find((e) => "video" === e.type)) ? t : null;
}

function S(e, t) {
    var n;
    if (null == t) return null;
    let r = c.A.getConnectionStats(e);
    if (null == r) return null;
    let i = r.stats.rtp.inbound[t];
    return null == i ? null : null != (n = i.find((e) => "video" === e.type)) ? n : null;
}

function T(e, t, n) {
    return e ? I(t) : S(t, n);
}

function C(e) {
    var t, n;
    return null != (t = null == (n = c.A.getConnectionStats(e)) ? void 0 : n.stats.transport.outboundBitrateEstimate)
        ? t
        : null;
}

function N(e) {
    var t, n;
    return null != (t = null == (n = c.A.getConnectionStats(e)) ? void 0 : n.stats.transport.inboundBitrateEstimate)
        ? t
        : null;
}

function w(e) {
    let t = c.A.getConnectionStats(e),
        n = c.A.getLastConnectionStats(e);
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
        var i, a, o, s;
        let l = null != (i = null == (o = n.stats.screenshare) ? void 0 : o[e]) ? i : 0,
            c = null != (a = null == (s = t.stats.screenshare) ? void 0 : s[e]) ? a : 0;
        r[e] = c - l;
    }
    let l = -1,
        u = null;
    for (let [e, t] of Object.entries(r)) t > l && ((l = t), (u = e));
    return l > 0 ? u : null;
}

function R(e) {
    var t, n;
    let r = h.A.getVoiceChannelId();
    return null != (t = null != (n = "channelId" in e ? e.channelId : void 0) ? n : r) ? t : null;
}

function P(e, t, n) {
    var r, i, a, o;
    return e
        ? null != (r = null == (i = I(t)) ? void 0 : i.frameRateEncode)
            ? r
            : null
        : null != (a = null == (o = S(t, n)) ? void 0 : o.frameRateDecode)
          ? a
          : null;
}

function D(e, t) {
    var n, r, c, h, D;
    let L,
        x = (0, O.B1)(e),
        M = R(t),
        j = d.A.getChannel(M),
        k = "streamKey" in t ? t.streamKey : void 0,
        U = "mediaContext" in t ? t.mediaContext : void 0,
        G = "underlyingError" in t ? t.underlyingError : void 0,
        F = "errorMessage" in t ? t.errorMessage : void 0,
        V = "mediaSessionId" in t ? t.mediaSessionId : void 0,
        B = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
        H = "videoCodec" in t ? t.videoCodec : void 0,
        Y = "videoEncoder" in t ? t.videoEncoder : void 0,
        W = "videoDecoder" in t ? t.videoDecoder : void 0,
        K = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        z = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
        q = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
        Z = "videoDeviceName" in t ? t.videoDeviceName : void 0,
        Q = "userId" in t ? t.userId : void 0,
        X = null != k ? (0, l.Iy)(k) : null,
        J = null != k ? m.A.getRTCConnection(k) : null,
        $ = null != k ? J : p.A.getRTCConnection(),
        ee = null != k ? (null == J || null == (r = J.analyticsContext) ? void 0 : r.streamApplication) : null,
        { resolution: et, fps: en } = u.A.getState(),
        { gameName: er, gameId: ei, exe: ea, distributor: eo } = (0, s.wH)(ee),
        es = x.isErrorOutbound,
        el = null != U ? U : A.x.DEFAULT,
        ec = null != X ? X.ownerId : Q,
        eu = null != J ? (null == J ? void 0 : J.getVoiceParticipantType()) : es ? "sender" : "receiver",
        ed = null != (n = null == $ ? void 0 : $.getMediaEngineConnectionId()) ? n : null;
    (L =
        null != k && null != X
            ? es
                ? null == $ || null == (c = $.getOutboundStats())
                    ? void 0
                    : c.find((e) => e.quality === A.Y4)
                : null == $
                  ? void 0
                  : $.getInboundStats(X.ownerId)
            : es
              ? null !=
                (h = i().maxBy(null != (D = null == $ ? void 0 : $.getOutboundStats()) ? D : [], (e) => e.num_frames))
                  ? h
                  : null
              : null != ec
                ? null == $
                    ? void 0
                    : $.getInboundStats(ec)
                : null),
        (0, g.w)().then((t) => {
            var n,
                r,
                i,
                s,
                l,
                c,
                u,
                d,
                h,
                m,
                g,
                O,
                R,
                D,
                k,
                Q,
                ee,
                ef,
                ep,
                e_,
                eh,
                em,
                eg,
                eE,
                ey,
                eb,
                eO,
                ev,
                eA,
                eI,
                eS,
                eT,
                eC,
                eN,
                ew,
                eR,
                eP,
                eD,
                eL,
                ex,
                eM,
                ej,
                ek,
                eU,
                eG,
                eF,
                eV,
                eB,
                eH,
                eY,
                eW;
            let eK = {
                error_name: e.valueOf(),
                error_code: x.errorCode,
                error_severity: x.severity,
                error_category: x.category,
                underlying_error: null != G ? G : null,
                error_message: null != F ? F : null,
                guild_id: null != (n = null == j ? void 0 : j.guild_id) ? n : null,
                channel_id: null != M ? M : null,
                channel_type: null != (r = null == j ? void 0 : j.type) ? r : null,
                rtc_connection_id: null != B ? B : null,
                media_session_id: null != (i = null != V ? V : p.A.getMediaSessionId()) ? i : null,
                parent_media_session_id: null != (s = null == J ? void 0 : J.parentMediaSessionId) ? s : null,
                context: null != U ? U : null,
                voice_backend_version:
                    null != (l = null == (eL = p.A.getRTCConnection()) ? void 0 : eL.getVoiceVersion()) ? l : null,
                rtc_worker_backend_version:
                    null != (c = null == (ex = p.A.getRTCConnection()) ? void 0 : ex.getRtcWorkerVersion()) ? c : null,
                guild_region: null != (u = _.A.getRegion(p.A.getHostname())) ? u : null,
                hostname: null != (d = p.A.getHostname()) ? d : null,
                duration: null != (h = null == $ ? void 0 : $.getDurationSeconds()) ? h : null,
                participant_type: null != eu ? eu : null,
                num_frames: null != (m = null == L ? void 0 : L.num_frames) ? m : 0,
                num_packets: null != (g = null == L ? void 0 : L.num_packets) ? g : 0,
                num_bytes: null != (O = null == L ? void 0 : L.num_bytes) ? O : 0,
                num_packets_lost: null != (R = null == (eM = T(es, ed, ec)) ? void 0 : eM.packetsLost) ? R : 0,
                video_codec:
                    null != (D = null != H ? H : (0, a.aV)(null == (ej = T(es, ed, ec)) ? void 0 : ej.codec.name))
                        ? D
                        : null,
                video_encoder:
                    null !=
                    (k = null != Y ? Y : (0, a.kZ)(null == (ek = I(ed)) ? void 0 : ek.encoderImplementationName))
                        ? k
                        : null,
                video_decoder:
                    null !=
                    (Q = null != W ? W : (0, a.s7)(null == (eU = S(ed, ec)) ? void 0 : eU.decoderImplementationName))
                        ? Q
                        : null,
                audio_capture_sample_rate_mismatch_percent: null != K ? K : null,
                incoming_video_stopped_for_occlusion: !o.X.isIncomingVideoEnabled(),
                bitrate: null != (ee = null == (eG = T(es, ed, ec)) ? void 0 : eG.bitrate) ? ee : null,
                target_bitrate: es && null != (ef = null == (eF = I(ed)) ? void 0 : eF.bitrateTarget) ? ef : null,
                fps: null != (ep = P(es, el, ec)) ? ep : null,
                target_fps: el === A.x.STREAM && es ? en : null,
                sender_user_id: null != (e_ = null == X ? void 0 : X.ownerId) ? e_ : null,
                stream_region: null != (eh = null == J ? void 0 : J.getRegion()) ? eh : null,
                stream_source_type:
                    es && null != (em = null == J || null == (eV = J.analyticsContext) ? void 0 : eV.streamSourceType)
                        ? em
                        : null,
                num_stream_viewers:
                    null != (eg = null == J || null == (eB = J.analyticsContext) ? void 0 : eB.numViewers) ? eg : null,
                video_input_resolution_height: es && null != et ? et : null,
                video_input_frame_rate: es && null != en ? en : null,
                screenshare_capture_method: w(ed),
                share_application_name: null != er ? er : null,
                share_application_id: null != ei ? ei : null,
                share_application_executable: null != ea ? ea : null,
                share_application_distributor: null != eo ? eo : null,
                cpu_brand: null != (eE = null == t ? void 0 : t.cpu_brand) ? eE : null,
                cpu_vendor: null != (ey = null == t ? void 0 : t.cpu_vendor) ? ey : null,
                cpu_memory: null != (eb = null == t ? void 0 : t.cpu_memory) ? eb : null,
                gpu_brand: null != (eO = null == t ? void 0 : t.gpu_brand) ? eO : null,
                gpu_count: null != (ev = null == t ? void 0 : t.gpu_count) ? ev : null,
                gpu_memory: null != (eA = null == t ? void 0 : t.gpu_memory) ? eA : null,
                gpu_device_vendor_id: null != (eI = null == t ? void 0 : t.gpu_device_vendor_id) ? eI : null,
                gpu_device_device_id: null != (eS = null == t ? void 0 : t.gpu_device_device_id) ? eS : null,
                gpu_device_sub_sys_id: null != (eT = null == t ? void 0 : t.gpu_device_sub_sys_id) ? eT : null,
                gpu_device_revision: null != (eC = null == t ? void 0 : t.gpu_device_revision) ? eC : null,
                gpu_driver_version: null != (eN = null == t ? void 0 : t.gpu_driver_version) ? eN : null,
                cpu_usage: null != (ew = b.A.getCurrentCPUUsagePercent()) ? ew : null,
                memory_usage: null != (eR = b.A.getCurrentMemoryUsageKB()) ? eR : null,
                outbound_bitrate_estimate: C(ed),
                inbound_bitrate_estimate: N(ed),
                hardware_enabled: f.A.getHardwareEncoding(),
                audio_input_device_name:
                    null != z ? z : null == (eH = f.A.getInputDevices()[f.A.getInputDeviceId()]) ? void 0 : eH.name,
                audio_output_device_name:
                    null != q ? q : null == (eY = f.A.getOutputDevices()[f.A.getOutputDeviceId()]) ? void 0 : eY.name,
                video_device_name:
                    null != Z ? Z : null == (eW = f.A.getVideoDevices()[f.A.getVideoDeviceId()]) ? void 0 : eW.name,
                audio_subsystem: f.A.getMediaEngine().getAudioSubsystem(),
                automatic_audio_subsystem: f.A.getSettings().automaticAudioSubsystem,
                audio_layer: f.A.getMediaEngine().getAudioLayer(),
                audio_input_mode: f.A.getSettings().mode,
                automatic_audio_input_sensitivity_enabled: f.A.getSettings().modeOptions.autoThreshold,
                audio_input_sensitivity: f.A.getSettings().modeOptions.threshold,
                echo_cancellation_enabled: f.A.getEchoCancellation(),
                noise_suppression_enabled: f.A.getNoiseSuppression(),
                noise_cancellation_enabled: f.A.getNoiseCancellation(),
                automatic_gain_control_enabled: f.A.getAutomaticGainControl(),
                sidechain_compression_enabled: f.A.getSidechainCompression(),
                input_volume: f.A.getInputVolume(),
                output_volume: f.A.getOutputVolume(),
                audio_input_device_count: Object.keys(f.A.getInputDevices()).length,
                audio_output_device_count: Object.keys(f.A.getOutputDevices()).length,
                app_hardware_acceleration_enabled: y.A.getAppHardwareAccelerationEnabled(),
                input_device_os_muted: null != (eP = f.A.getInputDeviceOSMuted()) ? eP : null,
                input_device_os_volume: null != (eD = f.A.getInputDeviceOSVolume()) ? eD : null,
            };
            E.default.track(v.HAw.AV_ERROR_REPORTED, eK);
        });
}
