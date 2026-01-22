n.d(t, {
    q: () => D,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(166929),
    s = n(808180),
    o = n(973522),
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
    b = n(353835),
    y = n(321034),
    O = n(487329),
    A = n(652215),
    v = n(731854);

function S(e) {
    var t;
    let n = c.A.getConnectionStats(e);
    return null == n ? null : null != (t = n.stats.rtp.outbound.find((e) => "video" === e.type)) ? t : null;
}

function I(e, t) {
    var n;
    if (null == t) return null;
    let r = c.A.getConnectionStats(e);
    if (null == r) return null;
    let i = r.stats.rtp.inbound[t];
    return null == i ? null : null != (n = i.find((e) => "video" === e.type)) ? n : null;
}

function T(e, t, n) {
    return e ? S(t) : I(t, n);
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

function R(e) {
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
        var i, a, s, o;
        let l = null != (i = null == (s = n.stats.screenshare) ? void 0 : s[e]) ? i : 0,
            c = null != (a = null == (o = t.stats.screenshare) ? void 0 : o[e]) ? a : 0;
        r[e] = c - l;
    }
    let l = -1,
        u = null;
    for (let [e, t] of Object.entries(r)) t > l && ((l = t), (u = e));
    return l > 0 ? u : null;
}

function w(e) {
    var t, n;
    let r = h.A.getVoiceChannelId();
    return null != (t = null != (n = "channelId" in e ? e.channelId : void 0) ? n : r) ? t : null;
}

function P(e, t, n) {
    var r, i, a, s;
    return e
        ? null != (r = null == (i = S(t)) ? void 0 : i.frameRateEncode)
            ? r
            : null
        : null != (a = null == (s = I(t, n)) ? void 0 : s.frameRateDecode)
          ? a
          : null;
}

function D(e, t) {
    var n, r, c, h, D;
    let x,
        L = (0, O.B1)(e),
        j = w(t),
        M = d.A.getChannel(j),
        k = "streamKey" in t ? t.streamKey : void 0,
        U = "mediaContext" in t ? t.mediaContext : void 0,
        G = "underlyingError" in t ? t.underlyingError : void 0,
        V = "errorMessage" in t ? t.errorMessage : void 0,
        F = "mediaSessionId" in t ? t.mediaSessionId : void 0,
        B = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
        H = "videoCodec" in t ? t.videoCodec : void 0,
        Y = "videoEncoder" in t ? t.videoEncoder : void 0,
        W = "videoDecoder" in t ? t.videoDecoder : void 0,
        K = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        z = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
        q = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
        X = "videoDeviceName" in t ? t.videoDeviceName : void 0,
        Z = "userId" in t ? t.userId : void 0,
        Q = null != k ? (0, l.Iy)(k) : null,
        $ = null != k ? m.A.getRTCConnection(k) : null,
        J = null != k ? $ : p.A.getRTCConnection(),
        ee = null != k ? (null == $ || null == (r = $.analyticsContext) ? void 0 : r.streamApplication) : null,
        { resolution: et, fps: en } = u.A.getState(),
        { gameName: er, gameId: ei, exe: ea, distributor: es } = (0, o.wH)(ee),
        eo = L.isErrorOutbound,
        el = null != U ? U : v.x.DEFAULT,
        ec = null != Q ? Q.ownerId : Z,
        eu = null != $ ? (null == $ ? void 0 : $.getVoiceParticipantType()) : eo ? "sender" : "receiver",
        ed = null != (n = null == J ? void 0 : J.getMediaEngineConnectionId()) ? n : null;
    (x =
        null != k && null != Q
            ? eo
                ? null == J || null == (c = J.getOutboundStats())
                    ? void 0
                    : c.find((e) => e.quality === v.Y4)
                : null == J
                  ? void 0
                  : J.getInboundStats(Q.ownerId)
            : eo
              ? null !=
                (h = i().maxBy(null != (D = null == J ? void 0 : J.getOutboundStats()) ? D : [], (e) => e.num_frames))
                  ? h
                  : null
              : null != ec
                ? null == J
                    ? void 0
                    : J.getInboundStats(ec)
                : null),
        (0, g.w)().then((t) => {
            var n,
                r,
                i,
                o,
                l,
                c,
                u,
                d,
                h,
                m,
                g,
                O,
                w,
                D,
                k,
                Z,
                ee,
                ef,
                ep,
                e_,
                eh,
                em,
                eg,
                eE,
                eb,
                ey,
                eO,
                eA,
                ev,
                eS,
                eI,
                eT,
                eC,
                eN,
                eR,
                ew,
                eP,
                eD,
                ex,
                eL,
                ej,
                eM,
                ek,
                eU,
                eG,
                eV,
                eF,
                eB,
                eH;
            let eY = {
                error_name: e.valueOf(),
                error_code: L.errorCode,
                error_severity: L.severity,
                error_category: L.category,
                underlying_error: null != G ? G : null,
                error_message: null != V ? V : null,
                guild_id: null != (n = null == M ? void 0 : M.guild_id) ? n : null,
                channel_id: null != j ? j : null,
                channel_type: null != (r = null == M ? void 0 : M.type) ? r : null,
                rtc_connection_id: null != B ? B : null,
                media_session_id: null != (i = null != F ? F : p.A.getMediaSessionId()) ? i : null,
                parent_media_session_id: null != (o = null == $ ? void 0 : $.parentMediaSessionId) ? o : null,
                context: null != U ? U : null,
                voice_backend_version:
                    null != (l = null == (eP = p.A.getRTCConnection()) ? void 0 : eP.getVoiceVersion()) ? l : null,
                rtc_worker_backend_version:
                    null != (c = null == (eD = p.A.getRTCConnection()) ? void 0 : eD.getRtcWorkerVersion()) ? c : null,
                guild_region: null != (u = _.A.getRegion(p.A.getHostname())) ? u : null,
                hostname: null != (d = p.A.getHostname()) ? d : null,
                duration: null != (h = null == J ? void 0 : J.getDurationSeconds()) ? h : null,
                participant_type: null != eu ? eu : null,
                num_frames: null != (m = null == x ? void 0 : x.num_frames) ? m : 0,
                num_packets: null != (g = null == x ? void 0 : x.num_packets) ? g : 0,
                num_bytes: null != (O = null == x ? void 0 : x.num_bytes) ? O : 0,
                num_packets_lost: null != (w = null == (ex = T(eo, ed, ec)) ? void 0 : ex.packetsLost) ? w : 0,
                video_codec:
                    null != (D = null != H ? H : (0, a.aV)(null == (eL = T(eo, ed, ec)) ? void 0 : eL.codec.name))
                        ? D
                        : null,
                video_encoder:
                    null !=
                    (k = null != Y ? Y : (0, a.kZ)(null == (ej = S(ed)) ? void 0 : ej.encoderImplementationName))
                        ? k
                        : null,
                video_decoder:
                    null !=
                    (Z = null != W ? W : (0, a.s7)(null == (eM = I(ed, ec)) ? void 0 : eM.decoderImplementationName))
                        ? Z
                        : null,
                audio_capture_sample_rate_mismatch_percent: null != K ? K : null,
                incoming_video_stopped_for_occlusion: !s.X.isIncomingVideoEnabled(),
                bitrate: null != (ee = null == (ek = T(eo, ed, ec)) ? void 0 : ek.bitrate) ? ee : null,
                target_bitrate: eo && null != (ef = null == (eU = S(ed)) ? void 0 : eU.bitrateTarget) ? ef : null,
                fps: null != (ep = P(eo, el, ec)) ? ep : null,
                target_fps: el === v.x.STREAM && eo ? en : null,
                sender_user_id: null != (e_ = null == Q ? void 0 : Q.ownerId) ? e_ : null,
                stream_region: null != (eh = null == $ ? void 0 : $.getRegion()) ? eh : null,
                stream_source_type:
                    eo && null != (em = null == $ || null == (eG = $.analyticsContext) ? void 0 : eG.streamSourceType)
                        ? em
                        : null,
                num_stream_viewers:
                    null != (eg = null == $ || null == (eV = $.analyticsContext) ? void 0 : eV.numViewers) ? eg : null,
                video_input_resolution_height: eo && null != et ? et : null,
                video_input_frame_rate: eo && null != en ? en : null,
                screenshare_capture_method: R(ed),
                share_application_name: null != er ? er : null,
                share_application_id: null != ei ? ei : null,
                share_application_executable: null != ea ? ea : null,
                share_application_distributor: null != es ? es : null,
                cpu_brand: null != (eE = null == t ? void 0 : t.cpu_brand) ? eE : null,
                cpu_vendor: null != (eb = null == t ? void 0 : t.cpu_vendor) ? eb : null,
                cpu_memory: null != (ey = null == t ? void 0 : t.cpu_memory) ? ey : null,
                gpu_brand: null != (eO = null == t ? void 0 : t.gpu_brand) ? eO : null,
                gpu_count: null != (eA = null == t ? void 0 : t.gpu_count) ? eA : null,
                gpu_memory: null != (ev = null == t ? void 0 : t.gpu_memory) ? ev : null,
                gpu_device_vendor_id: null != (eS = null == t ? void 0 : t.gpu_device_vendor_id) ? eS : null,
                gpu_device_device_id: null != (eI = null == t ? void 0 : t.gpu_device_device_id) ? eI : null,
                gpu_device_sub_sys_id: null != (eT = null == t ? void 0 : t.gpu_device_sub_sys_id) ? eT : null,
                gpu_device_revision: null != (eC = null == t ? void 0 : t.gpu_device_revision) ? eC : null,
                gpu_driver_version: null != (eN = null == t ? void 0 : t.gpu_driver_version) ? eN : null,
                cpu_usage: null != (eR = y.A.getCurrentCPUUsagePercent()) ? eR : null,
                memory_usage: null != (ew = y.A.getCurrentMemoryUsageKB()) ? ew : null,
                outbound_bitrate_estimate: C(ed),
                inbound_bitrate_estimate: N(ed),
                hardware_enabled: f.A.getHardwareEncoding(),
                audio_input_device_name:
                    null != z ? z : null == (eF = f.A.getInputDevices()[f.A.getInputDeviceId()]) ? void 0 : eF.name,
                audio_output_device_name:
                    null != q ? q : null == (eB = f.A.getOutputDevices()[f.A.getOutputDeviceId()]) ? void 0 : eB.name,
                video_device_name:
                    null != X ? X : null == (eH = f.A.getVideoDevices()[f.A.getVideoDeviceId()]) ? void 0 : eH.name,
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
                app_hardware_acceleration_enabled: b.A.getAppHardwareAccelerationEnabled(),
            };
            E.default.track(A.HAw.AV_ERROR_REPORTED, eY);
        });
}
