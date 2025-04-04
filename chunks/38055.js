n.d(t, { b: () => L }), n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(255914),
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
    let n = c.Z.getConnectionStats().find((t) => t.context === e);
    return null == n ? null : null != (t = n.stats.rtp.outbound.find((e) => 'video' === e.type)) ? t : null;
}
function T(e, t) {
    var n;
    if (null == t) return null;
    let r = c.Z.getConnectionStats().find((t) => t.context === e);
    if (null == r) return null;
    let i = r.stats.rtp.inbound[t];
    return null == i ? null : null != (n = i.find((e) => 'video' === e.type)) ? n : null;
}
function N(e, t, n) {
    return e ? S(t) : T(t, n);
}
function A(e) {
    var t, n;
    return null != (n = null == (t = c.Z.getFirstConnectionStatsByContext(e)) ? void 0 : t.stats.transport.outboundBitrateEstimate) ? n : null;
}
function C(e) {
    var t, n;
    return null != (n = null == (t = c.Z.getFirstConnectionStatsByContext(e)) ? void 0 : t.stats.transport.inboundBitrateEstimate) ? n : null;
}
function R() {
    if (0 === c.Z.getConnectionStats().length || 0 === c.Z.getLastConnectionStats().length) return null;
    let e = {};
    for (let s of ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames']) {
        var t, n, r, i, o, a;
        let l = null != (o = null == (n = c.Z.getLastConnectionStats().find((e) => e.context === I.Yn.STREAM)) || null == (t = n.stats.screenshare) ? void 0 : t[s]) ? o : 0,
            u = null != (a = null == (i = c.Z.getFirstConnectionStatsByContext(I.Yn.STREAM)) || null == (r = i.stats.screenshare) ? void 0 : r[s]) ? a : 0;
        e[s] = u - l;
    }
    let s = -1,
        l = null;
    for (let [t, n] of Object.entries(e)) n > s && ((s = n), (l = t));
    return s > 0 ? l : null;
}
function P(e) {
    var t;
    return 'streamKey' in e && null != e.streamKey && null != (t = m.Z.getRTCConnection(e.streamKey)) ? t : null;
}
function w(e) {
    var t, n;
    let r = h.Z.getVoiceChannelId();
    return null != (n = null != (t = 'channelId' in e ? e.channelId : void 0) ? t : r) ? n : null;
}
function D(e, t, n) {
    var r, i, o, a;
    return e ? (null != (i = null == (r = S(t)) ? void 0 : r.frameRateEncode) ? i : null) : null != (a = null == (o = T(t, n)) ? void 0 : o.frameRateDecode) ? a : null;
}
function L(e, t) {
    var n, r, c, h;
    let m,
        L = (0, v.hp)(e),
        x = w(t),
        M = d.Z.getChannel(x),
        k = 'streamKey' in t ? t.streamKey : void 0,
        j = 'mediaContext' in t ? t.mediaContext : void 0,
        U = 'underlyingError' in t ? t.underlyingError : void 0,
        G = 'errorMessage' in t ? t.errorMessage : void 0,
        B = 'mediaSessionId' in t ? t.mediaSessionId : void 0,
        F = 'rtcConnectionId' in t ? t.rtcConnectionId : void 0,
        V = 'videoCodec' in t ? t.videoCodec : void 0,
        Z = 'videoEncoder' in t ? t.videoEncoder : void 0,
        H = 'videoDecoder' in t ? t.videoDecoder : void 0,
        W = 'audioCaptureSampleRateMismatchPercent' in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        Y = 'audioInputDeviceName' in t ? t.audioInputDeviceName : void 0,
        K = 'audioOutputDeviceName' in t ? t.audioOutputDeviceName : void 0,
        z = 'videoDeviceName' in t ? t.videoDeviceName : void 0,
        q = 'userId' in t ? t.userId : void 0,
        Q = null != k ? (0, l.my)(k) : null,
        X = P(t),
        J = null != k ? X : _.ZP.getRTCConnection(),
        $ = null != k ? (null == X || null == (n = X.analyticsContext) ? void 0 : n.streamApplication) : null,
        { resolution: ee, fps: et } = u.Z.getState(),
        { gameName: en, gameId: er, exe: ei, distributor: eo } = (0, s.G8)($),
        ea = L.isErrorOutbound,
        es = null != j ? j : I.Yn.DEFAULT,
        el = null != Q ? Q.ownerId : q,
        ec = null != Q ? (null == J ? void 0 : J.getVoiceParticipantType()) : ea ? 'sender' : 'receiver';
    (m = null != k && null != Q ? (ea ? (null == J || null == (r = J.getOutboundStats()) ? void 0 : r.find((e) => e.quality === I.y7)) : null == J ? void 0 : J.getInboundStats(Q.ownerId)) : ea ? (null != (h = i().maxBy(null != (c = null == J ? void 0 : J.getOutboundStats()) ? c : [], (e) => e.num_frames)) ? h : null) : null != el ? (null == J ? void 0 : J.getInboundStats(el)) : null),
        (0, g.q)().then((t) => {
            var n, r, i, s, l, c, u, d, h, g, v, P, w, k, q, $, eu, ed, ef, e_, ep, eh, em, eg, eE, eb, ey, ev, eO, eI, eS, eT, eN, eA, eC, eR, eP, ew, eD, eL, ex, eM, ek, ej, eU, eG, eB, eF, eV;
            let eZ = {
                error_name: e.valueOf(),
                error_code: L.errorCode,
                error_severity: L.severity,
                error_category: L.category,
                underlying_error: null != U ? U : null,
                error_message: null != G ? G : null,
                guild_id: null != (k = null == M ? void 0 : M.guild_id) ? k : null,
                channel_id: null != x ? x : null,
                channel_type: null != (q = null == M ? void 0 : M.type) ? q : null,
                rtc_connection_id: null != F ? F : null,
                media_session_id: null != ($ = null != B ? B : _.ZP.getMediaSessionId()) ? $ : null,
                parent_media_session_id: null != (eu = null == X ? void 0 : X.parentMediaSessionId) ? eu : null,
                context: null != j ? j : null,
                voice_backend_version: null != (ed = null == (n = _.ZP.getRTCConnection()) ? void 0 : n.getVoiceVersion()) ? ed : null,
                rtc_worker_backend_version: null != (ef = null == (r = _.ZP.getRTCConnection()) ? void 0 : r.getRtcWorkerVersion()) ? ef : null,
                guild_region: null != (e_ = p.Z.getRegion(_.ZP.getHostname())) ? e_ : null,
                hostname: null != (ep = _.ZP.getHostname()) ? ep : null,
                duration: null != (eh = null == J ? void 0 : J.getDurationSeconds()) ? eh : null,
                participant_type: null != ec ? ec : null,
                num_frames: null != (em = null == m ? void 0 : m.num_frames) ? em : 0,
                num_packets: null != (eg = null == m ? void 0 : m.num_packets) ? eg : 0,
                num_bytes: null != (eE = null == m ? void 0 : m.num_bytes) ? eE : 0,
                num_packets_lost: null != (eb = null == (i = N(ea, es, el)) ? void 0 : i.packetsLost) ? eb : 0,
                video_codec: null != (ey = null != V ? V : (0, o.bU)(null == (s = N(ea, es, el)) ? void 0 : s.codec.name)) ? ey : null,
                video_encoder: null != (ev = null != Z ? Z : (0, o.lG)(null == (l = S(es)) ? void 0 : l.encoderImplementationName)) ? ev : null,
                video_decoder: null != (eO = null != H ? H : (0, o.z_)(null == (c = T(es, el)) ? void 0 : c.decoderImplementationName)) ? eO : null,
                audio_capture_sample_rate_mismatch_percent: null != W ? W : null,
                incoming_video_stopped_for_occlusion: !a.w.isIncomingVideoEnabled(),
                bitrate: null != (eI = null == (u = N(ea, es, el)) ? void 0 : u.bitrate) ? eI : null,
                target_bitrate: ea && null != (eS = null == (d = S(es)) ? void 0 : d.bitrateTarget) ? eS : null,
                fps: null != (eT = D(ea, es, el)) ? eT : null,
                target_fps: es === I.Yn.STREAM && ea ? et : null,
                sender_user_id: null != (eN = null == Q ? void 0 : Q.ownerId) ? eN : null,
                stream_region: null != (eA = null == X ? void 0 : X.getRegion()) ? eA : null,
                stream_source_type: ea && null != (eC = null == X || null == (h = X.analyticsContext) ? void 0 : h.streamSourceType) ? eC : null,
                num_stream_viewers: null != (eR = null == X || null == (g = X.analyticsContext) ? void 0 : g.numViewers) ? eR : null,
                video_input_resolution_height: ea && null != ee ? ee : null,
                video_input_frame_rate: ea && null != et ? et : null,
                screenshare_capture_method: R(),
                share_application_name: null != en ? en : null,
                share_application_id: null != er ? er : null,
                share_application_executable: null != ei ? ei : null,
                share_application_distributor: null != eo ? eo : null,
                cpu_brand: null != (eP = null == t ? void 0 : t.cpu_brand) ? eP : null,
                cpu_vendor: null != (ew = null == t ? void 0 : t.cpu_vendor) ? ew : null,
                cpu_memory: null != (eD = null == t ? void 0 : t.cpu_memory) ? eD : null,
                gpu_brand: null != (eL = null == t ? void 0 : t.gpu_brand) ? eL : null,
                gpu_count: null != (ex = null == t ? void 0 : t.gpu_count) ? ex : null,
                gpu_memory: null != (eM = null == t ? void 0 : t.gpu_memory) ? eM : null,
                gpu_device_vendor_id: null != (ek = null == t ? void 0 : t.gpu_device_vendor_id) ? ek : null,
                gpu_device_device_id: null != (ej = null == t ? void 0 : t.gpu_device_device_id) ? ej : null,
                gpu_device_sub_sys_id: null != (eU = null == t ? void 0 : t.gpu_device_sub_sys_id) ? eU : null,
                gpu_device_revision: null != (eG = null == t ? void 0 : t.gpu_device_revision) ? eG : null,
                gpu_driver_version: null != (eB = null == t ? void 0 : t.gpu_driver_version) ? eB : null,
                cpu_usage: null != (eF = y.Z.getCurrentCPUUsagePercent()) ? eF : null,
                memory_usage: null != (eV = y.Z.getCurrentMemoryUsageKB()) ? eV : null,
                outbound_bitrate_estimate: A(es),
                inbound_bitrate_estimate: C(es),
                hardware_enabled: f.Z.getHardwareEncoding(),
                audio_input_device_name: null != Y ? Y : null == (v = f.Z.getInputDevices()[f.Z.getInputDeviceId()]) ? void 0 : v.name,
                audio_output_device_name: null != K ? K : null == (P = f.Z.getOutputDevices()[f.Z.getOutputDeviceId()]) ? void 0 : P.name,
                video_device_name: null != z ? z : null == (w = f.Z.getVideoDevices()[f.Z.getVideoDeviceId()]) ? void 0 : w.name,
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
            E.default.track(O.rMx.AV_ERROR_REPORTED, eZ);
        });
}
