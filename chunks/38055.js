n.d(t, { b: () => D }), n(388685);
var r = n(392711),
    i = n.n(r),
    o = n(674466),
    a = n(798681),
    s = n(581567),
    l = n(569545),
    c = n(450109),
    u = n(361291),
    d = n(592125),
    f = n(131951),
    _ = n(19780),
    p = n(936349),
    h = n(944486),
    m = n(959457),
    g = n(704806),
    E = n(626135),
    b = n(12647),
    y = n(848479),
    v = n(785141),
    O = n(981631),
    I = n(65154);
function S(e) {
    var t;
    let n = c.Z.getConnectionStats(e);
    return null == n ? null : null != (t = n.stats.rtp.outbound.find((e) => 'video' === e.type)) ? t : null;
}
function T(e, t) {
    var n;
    if (null == t) return null;
    let r = c.Z.getConnectionStats(e);
    if (null == r) return null;
    let i = r.stats.rtp.inbound[t];
    return null == i ? null : null != (n = i.find((e) => 'video' === e.type)) ? n : null;
}
function N(e, t, n) {
    return e ? S(t) : T(t, n);
}
function A(e) {
    var t, n;
    return null != (n = null == (t = c.Z.getConnectionStats(e)) ? void 0 : t.stats.transport.outboundBitrateEstimate) ? n : null;
}
function C(e) {
    var t, n;
    return null != (n = null == (t = c.Z.getConnectionStats(e)) ? void 0 : t.stats.transport.inboundBitrateEstimate) ? n : null;
}
function R(e) {
    let t = c.Z.getConnectionStats(e),
        n = c.Z.getLastConnectionStats(e);
    if (null == t || null == n) return null;
    let r = {};
    for (let e of ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames']) {
        var i, o, a, s;
        let l = null != (a = null == (i = n.stats.screenshare) ? void 0 : i[e]) ? a : 0,
            c = null != (s = null == (o = t.stats.screenshare) ? void 0 : o[e]) ? s : 0;
        r[e] = c - l;
    }
    let l = -1,
        u = null;
    for (let [e, t] of Object.entries(r)) t > l && ((l = t), (u = e));
    return l > 0 ? u : null;
}
function P(e) {
    var t, n;
    let r = h.Z.getVoiceChannelId();
    return null != (n = null != (t = 'channelId' in e ? e.channelId : void 0) ? t : r) ? n : null;
}
function w(e, t, n) {
    var r, i, o, a;
    return e ? (null != (i = null == (r = S(t)) ? void 0 : r.frameRateEncode) ? i : null) : null != (a = null == (o = T(t, n)) ? void 0 : o.frameRateDecode) ? a : null;
}
function D(e, t) {
    var n, r, c, h, D;
    let L,
        x = (0, v.hp)(e),
        M = P(t),
        k = d.Z.getChannel(M),
        j = 'streamKey' in t ? t.streamKey : void 0,
        U = 'mediaContext' in t ? t.mediaContext : void 0,
        G = 'underlyingError' in t ? t.underlyingError : void 0,
        B = 'errorMessage' in t ? t.errorMessage : void 0,
        V = 'mediaSessionId' in t ? t.mediaSessionId : void 0,
        F = 'rtcConnectionId' in t ? t.rtcConnectionId : void 0,
        Z = 'videoCodec' in t ? t.videoCodec : void 0,
        H = 'videoEncoder' in t ? t.videoEncoder : void 0,
        W = 'videoDecoder' in t ? t.videoDecoder : void 0,
        Y = 'audioCaptureSampleRateMismatchPercent' in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        K = 'audioInputDeviceName' in t ? t.audioInputDeviceName : void 0,
        z = 'audioOutputDeviceName' in t ? t.audioOutputDeviceName : void 0,
        q = 'videoDeviceName' in t ? t.videoDeviceName : void 0,
        Q = 'userId' in t ? t.userId : void 0,
        X = null != j ? (0, l.my)(j) : null,
        J = null != j ? m.Z.getRTCConnection(j) : null,
        $ = null != j ? J : _.ZP.getRTCConnection(),
        ee = null != j ? (null == J || null == (n = J.analyticsContext) ? void 0 : n.streamApplication) : null,
        { resolution: et, fps: en } = u.Z.getState(),
        { gameName: er, gameId: ei, exe: eo, distributor: ea } = (0, s.G8)(ee),
        es = x.isErrorOutbound,
        el = null != U ? U : I.Yn.DEFAULT,
        ec = null != X ? X.ownerId : Q,
        eu = null != J ? (null == J ? void 0 : J.getVoiceParticipantType()) : es ? 'sender' : 'receiver',
        ed = null != (r = null == $ ? void 0 : $.getMediaEngineConnectionId()) ? r : null;
    (L = null != j && null != X ? (es ? (null == $ || null == (c = $.getOutboundStats()) ? void 0 : c.find((e) => e.quality === I.y7)) : null == $ ? void 0 : $.getInboundStats(X.ownerId)) : es ? (null != (D = i().maxBy(null != (h = null == $ ? void 0 : $.getOutboundStats()) ? h : [], (e) => e.num_frames)) ? D : null) : null != ec ? (null == $ ? void 0 : $.getInboundStats(ec)) : null),
        (0, g.q)().then((t) => {
            var n, r, i, s, l, c, u, d, h, m, g, v, P, D, j, Q, ee, ef, e_, ep, eh, em, eg, eE, eb, ey, ev, eO, eI, eS, eT, eN, eA, eC, eR, eP, ew, eD, eL, ex, eM, ek, ej, eU, eG, eB, eV, eF, eZ;
            let eH = {
                error_name: e.valueOf(),
                error_code: x.errorCode,
                error_severity: x.severity,
                error_category: x.category,
                underlying_error: null != G ? G : null,
                error_message: null != B ? B : null,
                guild_id: null != (D = null == k ? void 0 : k.guild_id) ? D : null,
                channel_id: null != M ? M : null,
                channel_type: null != (j = null == k ? void 0 : k.type) ? j : null,
                rtc_connection_id: null != F ? F : null,
                media_session_id: null != (Q = null != V ? V : _.ZP.getMediaSessionId()) ? Q : null,
                parent_media_session_id: null != (ee = null == J ? void 0 : J.parentMediaSessionId) ? ee : null,
                context: null != U ? U : null,
                voice_backend_version: null != (ef = null == (n = _.ZP.getRTCConnection()) ? void 0 : n.getVoiceVersion()) ? ef : null,
                rtc_worker_backend_version: null != (e_ = null == (r = _.ZP.getRTCConnection()) ? void 0 : r.getRtcWorkerVersion()) ? e_ : null,
                guild_region: null != (ep = p.Z.getRegion(_.ZP.getHostname())) ? ep : null,
                hostname: null != (eh = _.ZP.getHostname()) ? eh : null,
                duration: null != (em = null == $ ? void 0 : $.getDurationSeconds()) ? em : null,
                participant_type: null != eu ? eu : null,
                num_frames: null != (eg = null == L ? void 0 : L.num_frames) ? eg : 0,
                num_packets: null != (eE = null == L ? void 0 : L.num_packets) ? eE : 0,
                num_bytes: null != (eb = null == L ? void 0 : L.num_bytes) ? eb : 0,
                num_packets_lost: null != (ey = null == (i = N(es, ed, ec)) ? void 0 : i.packetsLost) ? ey : 0,
                video_codec: null != (ev = null != Z ? Z : (0, o.bU)(null == (s = N(es, ed, ec)) ? void 0 : s.codec.name)) ? ev : null,
                video_encoder: null != (eO = null != H ? H : (0, o.lG)(null == (l = S(ed)) ? void 0 : l.encoderImplementationName)) ? eO : null,
                video_decoder: null != (eI = null != W ? W : (0, o.z_)(null == (c = T(ed, ec)) ? void 0 : c.decoderImplementationName)) ? eI : null,
                audio_capture_sample_rate_mismatch_percent: null != Y ? Y : null,
                incoming_video_stopped_for_occlusion: !a.w.isIncomingVideoEnabled(),
                bitrate: null != (eS = null == (u = N(es, ed, ec)) ? void 0 : u.bitrate) ? eS : null,
                target_bitrate: es && null != (eT = null == (d = S(ed)) ? void 0 : d.bitrateTarget) ? eT : null,
                fps: null != (eN = w(es, el, ec)) ? eN : null,
                target_fps: el === I.Yn.STREAM && es ? en : null,
                sender_user_id: null != (eA = null == X ? void 0 : X.ownerId) ? eA : null,
                stream_region: null != (eC = null == J ? void 0 : J.getRegion()) ? eC : null,
                stream_source_type: es && null != (eR = null == J || null == (h = J.analyticsContext) ? void 0 : h.streamSourceType) ? eR : null,
                num_stream_viewers: null != (eP = null == J || null == (m = J.analyticsContext) ? void 0 : m.numViewers) ? eP : null,
                video_input_resolution_height: es && null != et ? et : null,
                video_input_frame_rate: es && null != en ? en : null,
                screenshare_capture_method: R(ed),
                share_application_name: null != er ? er : null,
                share_application_id: null != ei ? ei : null,
                share_application_executable: null != eo ? eo : null,
                share_application_distributor: null != ea ? ea : null,
                cpu_brand: null != (ew = null == t ? void 0 : t.cpu_brand) ? ew : null,
                cpu_vendor: null != (eD = null == t ? void 0 : t.cpu_vendor) ? eD : null,
                cpu_memory: null != (eL = null == t ? void 0 : t.cpu_memory) ? eL : null,
                gpu_brand: null != (ex = null == t ? void 0 : t.gpu_brand) ? ex : null,
                gpu_count: null != (eM = null == t ? void 0 : t.gpu_count) ? eM : null,
                gpu_memory: null != (ek = null == t ? void 0 : t.gpu_memory) ? ek : null,
                gpu_device_vendor_id: null != (ej = null == t ? void 0 : t.gpu_device_vendor_id) ? ej : null,
                gpu_device_device_id: null != (eU = null == t ? void 0 : t.gpu_device_device_id) ? eU : null,
                gpu_device_sub_sys_id: null != (eG = null == t ? void 0 : t.gpu_device_sub_sys_id) ? eG : null,
                gpu_device_revision: null != (eB = null == t ? void 0 : t.gpu_device_revision) ? eB : null,
                gpu_driver_version: null != (eV = null == t ? void 0 : t.gpu_driver_version) ? eV : null,
                cpu_usage: null != (eF = y.Z.getCurrentCPUUsagePercent()) ? eF : null,
                memory_usage: null != (eZ = y.Z.getCurrentMemoryUsageKB()) ? eZ : null,
                outbound_bitrate_estimate: A(ed),
                inbound_bitrate_estimate: C(ed),
                hardware_enabled: f.Z.getHardwareEncoding(),
                audio_input_device_name: null != K ? K : null == (g = f.Z.getInputDevices()[f.Z.getInputDeviceId()]) ? void 0 : g.name,
                audio_output_device_name: null != z ? z : null == (v = f.Z.getOutputDevices()[f.Z.getOutputDeviceId()]) ? void 0 : v.name,
                video_device_name: null != q ? q : null == (P = f.Z.getVideoDevices()[f.Z.getVideoDeviceId()]) ? void 0 : P.name,
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
                app_hardware_acceleration_enabled: b.Z.getAppHardwareAccelerationEnabled()
            };
            E.default.track(O.rMx.AV_ERROR_REPORTED, eH);
        });
}
