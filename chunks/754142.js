n.d(t, { b: () => w }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(674466),
    o = n(798681),
    s = n(581567),
    l = n(569545),
    c = n(450109),
    u = n(361291),
    d = n(592125),
    f = n(131951),
    p = n(19780),
    _ = n(936349),
    m = n(944486),
    h = n(959457),
    g = n(704806),
    E = n(626135),
    b = n(12647),
    y = n(848479),
    O = n(458725),
    v = n(981631),
    S = n(65154);
function I(e) {
    var t;
    let n = c.Z.getConnectionStats(e);
    return null == n ? null : null != (t = n.stats.rtp.outbound.find((e) => "video" === e.type)) ? t : null;
}
function T(e, t) {
    var n;
    if (null == t) return null;
    let r = c.Z.getConnectionStats(e);
    if (null == r) return null;
    let i = r.stats.rtp.inbound[t];
    return null == i ? null : null != (n = i.find((e) => "video" === e.type)) ? n : null;
}
function A(e, t, n) {
    return e ? I(t) : T(t, n);
}
function C(e) {
    var t, n;
    return null != (n = null == (t = c.Z.getConnectionStats(e)) ? void 0 : t.stats.transport.outboundBitrateEstimate)
        ? n
        : null;
}
function N(e) {
    var t, n;
    return null != (n = null == (t = c.Z.getConnectionStats(e)) ? void 0 : t.stats.transport.inboundBitrateEstimate)
        ? n
        : null;
}
function P(e) {
    let t = c.Z.getConnectionStats(e),
        n = c.Z.getLastConnectionStats(e);
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
        let l = null != (o = null == (i = n.stats.screenshare) ? void 0 : i[e]) ? o : 0,
            c = null != (s = null == (a = t.stats.screenshare) ? void 0 : a[e]) ? s : 0;
        r[e] = c - l;
    }
    let l = -1,
        u = null;
    for (let [e, t] of Object.entries(r)) t > l && ((l = t), (u = e));
    return l > 0 ? u : null;
}
function R(e) {
    var t, n;
    let r = m.Z.getVoiceChannelId();
    return null != (n = null != (t = "channelId" in e ? e.channelId : void 0) ? t : r) ? n : null;
}
function D(e, t, n) {
    var r, i, a, o;
    return e
        ? null != (i = null == (r = I(t)) ? void 0 : r.frameRateEncode)
            ? i
            : null
        : null != (o = null == (a = T(t, n)) ? void 0 : a.frameRateDecode)
          ? o
          : null;
}
function w(e, t) {
    var n, r, c, m, w;
    let x,
        L = (0, O.hp)(e),
        j = R(t),
        M = d.Z.getChannel(j),
        k = "streamKey" in t ? t.streamKey : void 0,
        U = "mediaContext" in t ? t.mediaContext : void 0,
        G = "underlyingError" in t ? t.underlyingError : void 0,
        Z = "errorMessage" in t ? t.errorMessage : void 0,
        B = "mediaSessionId" in t ? t.mediaSessionId : void 0,
        F = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
        V = "videoCodec" in t ? t.videoCodec : void 0,
        H = "videoEncoder" in t ? t.videoEncoder : void 0,
        Y = "videoDecoder" in t ? t.videoDecoder : void 0,
        W = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        K = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
        z = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
        q = "videoDeviceName" in t ? t.videoDeviceName : void 0,
        Q = "userId" in t ? t.userId : void 0,
        X = null != k ? (0, l.my)(k) : null,
        J = null != k ? h.Z.getRTCConnection(k) : null,
        $ = null != k ? J : p.Z.getRTCConnection(),
        ee = null != k ? (null == J || null == (n = J.analyticsContext) ? void 0 : n.streamApplication) : null,
        { resolution: et, fps: en } = u.Z.getState(),
        { gameName: er, gameId: ei, exe: ea, distributor: eo } = (0, s.G8)(ee),
        es = L.isErrorOutbound,
        el = null != U ? U : S.Yn.DEFAULT,
        ec = null != X ? X.ownerId : Q,
        eu = null != J ? (null == J ? void 0 : J.getVoiceParticipantType()) : es ? "sender" : "receiver",
        ed = null != (r = null == $ ? void 0 : $.getMediaEngineConnectionId()) ? r : null;
    (x =
        null != k && null != X
            ? es
                ? null == $ || null == (c = $.getOutboundStats())
                    ? void 0
                    : c.find((e) => e.quality === S.y7)
                : null == $
                  ? void 0
                  : $.getInboundStats(X.ownerId)
            : es
              ? null !=
                (w = i().maxBy(null != (m = null == $ ? void 0 : $.getOutboundStats()) ? m : [], (e) => e.num_frames))
                  ? w
                  : null
              : null != ec
                ? null == $
                    ? void 0
                    : $.getInboundStats(ec)
                : null),
        (0, g.q)().then((t) => {
            var n,
                r,
                i,
                s,
                l,
                c,
                u,
                d,
                m,
                h,
                g,
                O,
                R,
                w,
                k,
                Q,
                ee,
                ef,
                ep,
                e_,
                em,
                eh,
                eg,
                eE,
                eb,
                ey,
                eO,
                ev,
                eS,
                eI,
                eT,
                eA,
                eC,
                eN,
                eP,
                eR,
                eD,
                ew,
                ex,
                eL,
                ej,
                eM,
                ek,
                eU,
                eG,
                eZ,
                eB,
                eF,
                eV;
            let eH = {
                error_name: e.valueOf(),
                error_code: L.errorCode,
                error_severity: L.severity,
                error_category: L.category,
                underlying_error: null != G ? G : null,
                error_message: null != Z ? Z : null,
                guild_id: null != (w = null == M ? void 0 : M.guild_id) ? w : null,
                channel_id: null != j ? j : null,
                channel_type: null != (k = null == M ? void 0 : M.type) ? k : null,
                rtc_connection_id: null != F ? F : null,
                media_session_id: null != (Q = null != B ? B : p.Z.getMediaSessionId()) ? Q : null,
                parent_media_session_id: null != (ee = null == J ? void 0 : J.parentMediaSessionId) ? ee : null,
                context: null != U ? U : null,
                voice_backend_version:
                    null != (ef = null == (n = p.Z.getRTCConnection()) ? void 0 : n.getVoiceVersion()) ? ef : null,
                rtc_worker_backend_version:
                    null != (ep = null == (r = p.Z.getRTCConnection()) ? void 0 : r.getRtcWorkerVersion()) ? ep : null,
                guild_region: null != (e_ = _.Z.getRegion(p.Z.getHostname())) ? e_ : null,
                hostname: null != (em = p.Z.getHostname()) ? em : null,
                duration: null != (eh = null == $ ? void 0 : $.getDurationSeconds()) ? eh : null,
                participant_type: null != eu ? eu : null,
                num_frames: null != (eg = null == x ? void 0 : x.num_frames) ? eg : 0,
                num_packets: null != (eE = null == x ? void 0 : x.num_packets) ? eE : 0,
                num_bytes: null != (eb = null == x ? void 0 : x.num_bytes) ? eb : 0,
                num_packets_lost: null != (ey = null == (i = A(es, ed, ec)) ? void 0 : i.packetsLost) ? ey : 0,
                video_codec:
                    null != (eO = null != V ? V : (0, a.bU)(null == (s = A(es, ed, ec)) ? void 0 : s.codec.name))
                        ? eO
                        : null,
                video_encoder:
                    null != (ev = null != H ? H : (0, a.lG)(null == (l = I(ed)) ? void 0 : l.encoderImplementationName))
                        ? ev
                        : null,
                video_decoder:
                    null !=
                    (eS = null != Y ? Y : (0, a.z_)(null == (c = T(ed, ec)) ? void 0 : c.decoderImplementationName))
                        ? eS
                        : null,
                audio_capture_sample_rate_mismatch_percent: null != W ? W : null,
                incoming_video_stopped_for_occlusion: !o.w.isIncomingVideoEnabled(),
                bitrate: null != (eI = null == (u = A(es, ed, ec)) ? void 0 : u.bitrate) ? eI : null,
                target_bitrate: es && null != (eT = null == (d = I(ed)) ? void 0 : d.bitrateTarget) ? eT : null,
                fps: null != (eA = D(es, el, ec)) ? eA : null,
                target_fps: el === S.Yn.STREAM && es ? en : null,
                sender_user_id: null != (eC = null == X ? void 0 : X.ownerId) ? eC : null,
                stream_region: null != (eN = null == J ? void 0 : J.getRegion()) ? eN : null,
                stream_source_type:
                    es && null != (eP = null == J || null == (m = J.analyticsContext) ? void 0 : m.streamSourceType)
                        ? eP
                        : null,
                num_stream_viewers:
                    null != (eR = null == J || null == (h = J.analyticsContext) ? void 0 : h.numViewers) ? eR : null,
                video_input_resolution_height: es && null != et ? et : null,
                video_input_frame_rate: es && null != en ? en : null,
                screenshare_capture_method: P(ed),
                share_application_name: null != er ? er : null,
                share_application_id: null != ei ? ei : null,
                share_application_executable: null != ea ? ea : null,
                share_application_distributor: null != eo ? eo : null,
                cpu_brand: null != (eD = null == t ? void 0 : t.cpu_brand) ? eD : null,
                cpu_vendor: null != (ew = null == t ? void 0 : t.cpu_vendor) ? ew : null,
                cpu_memory: null != (ex = null == t ? void 0 : t.cpu_memory) ? ex : null,
                gpu_brand: null != (eL = null == t ? void 0 : t.gpu_brand) ? eL : null,
                gpu_count: null != (ej = null == t ? void 0 : t.gpu_count) ? ej : null,
                gpu_memory: null != (eM = null == t ? void 0 : t.gpu_memory) ? eM : null,
                gpu_device_vendor_id: null != (ek = null == t ? void 0 : t.gpu_device_vendor_id) ? ek : null,
                gpu_device_device_id: null != (eU = null == t ? void 0 : t.gpu_device_device_id) ? eU : null,
                gpu_device_sub_sys_id: null != (eG = null == t ? void 0 : t.gpu_device_sub_sys_id) ? eG : null,
                gpu_device_revision: null != (eZ = null == t ? void 0 : t.gpu_device_revision) ? eZ : null,
                gpu_driver_version: null != (eB = null == t ? void 0 : t.gpu_driver_version) ? eB : null,
                cpu_usage: null != (eF = y.Z.getCurrentCPUUsagePercent()) ? eF : null,
                memory_usage: null != (eV = y.Z.getCurrentMemoryUsageKB()) ? eV : null,
                outbound_bitrate_estimate: C(ed),
                inbound_bitrate_estimate: N(ed),
                hardware_enabled: f.Z.getHardwareEncoding(),
                audio_input_device_name:
                    null != K ? K : null == (g = f.Z.getInputDevices()[f.Z.getInputDeviceId()]) ? void 0 : g.name,
                audio_output_device_name:
                    null != z ? z : null == (O = f.Z.getOutputDevices()[f.Z.getOutputDeviceId()]) ? void 0 : O.name,
                video_device_name:
                    null != q ? q : null == (R = f.Z.getVideoDevices()[f.Z.getVideoDeviceId()]) ? void 0 : R.name,
                audio_subsystem: f.Z.getMediaEngine().getAudioSubsystem(),
                automatic_audio_subsystem: f.Z.getSettings().automaticAudioSubsystem,
                audio_layer: f.Z.getMediaEngine().getAudioLayer(),
                audio_input_mode: f.Z.getSettings().mode,
                automatic_audio_input_sensitivity_enabled: f.Z.getSettings().modeOptions.autoThreshold,
                audio_input_sensitivity: f.Z.getSettings().modeOptions.threshold,
                echo_cancellation_enabled: f.Z.getEchoCancellation(),
                noise_suppression_enabled: f.Z.getNoiseSuppression(),
                noise_cancellation_enabled: f.Z.getNoiseCancellation(),
                automatic_gain_control_enabled: f.Z.getAutomaticGainControl(),
                sidechain_compression_enabled: f.Z.getSidechainCompression(),
                input_volume: f.Z.getInputVolume(),
                output_volume: f.Z.getOutputVolume(),
                audio_input_device_count: Object.keys(f.Z.getInputDevices()).length,
                audio_output_device_count: Object.keys(f.Z.getOutputDevices()).length,
                app_hardware_acceleration_enabled: b.Z.getAppHardwareAccelerationEnabled(),
            };
            E.default.track(v.rMx.AV_ERROR_REPORTED, eH);
        });
}
