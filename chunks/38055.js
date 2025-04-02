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
    v = n(848479),
    y = n(785141),
    O = n(981631),
    I = n(65154);
function S(e) {
    var t;
    let n = c.Z.getConnectionStats().find((t) => t.context === e);
    return null == n ? null : null !== (t = n.stats.rtp.outbound.find((e) => 'video' === e.type)) && void 0 !== t ? t : null;
}
function T(e, t) {
    var n;
    if (null == t) return null;
    let r = c.Z.getConnectionStats().find((t) => t.context === e);
    if (null == r) return null;
    let i = r.stats.rtp.inbound[t];
    return null == i ? null : null !== (n = i.find((e) => 'video' === e.type)) && void 0 !== n ? n : null;
}
function N(e, t, n) {
    return e ? S(t) : T(t, n);
}
function A(e) {
    var t, n;
    return null !== (n = null === (t = c.Z.getFirstConnectionStatsByContext(e)) || void 0 === t ? void 0 : t.stats.transport.outboundBitrateEstimate) && void 0 !== n ? n : null;
}
function C(e) {
    var t, n;
    return null !== (n = null === (t = c.Z.getFirstConnectionStatsByContext(e)) || void 0 === t ? void 0 : t.stats.transport.inboundBitrateEstimate) && void 0 !== n ? n : null;
}
function R() {
    if (0 === c.Z.getConnectionStats().length || 0 === c.Z.getLastConnectionStats().length) return null;
    let e = {};
    for (let s of ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames']) {
        var t, n, r, i, o, a;
        let l = null !== (o = null === (n = c.Z.getLastConnectionStats().find((e) => e.context === I.Yn.STREAM)) || void 0 === n ? void 0 : null === (t = n.stats.screenshare) || void 0 === t ? void 0 : t[s]) && void 0 !== o ? o : 0,
            u = null !== (a = null === (i = c.Z.getFirstConnectionStatsByContext(I.Yn.STREAM)) || void 0 === i ? void 0 : null === (r = i.stats.screenshare) || void 0 === r ? void 0 : r[s]) && void 0 !== a ? a : 0;
        e[s] = u - l;
    }
    let s = -1,
        l = null;
    for (let [t, n] of Object.entries(e)) n > s && ((s = n), (l = t));
    return s > 0 ? l : null;
}
function P(e) {
    var t;
    return 'streamKey' in e && null != e.streamKey && null !== (t = m.Z.getRTCConnection(e.streamKey)) && void 0 !== t ? t : null;
}
function w(e) {
    var t, n;
    let r = h.Z.getVoiceChannelId();
    return null !== (n = null !== (t = 'channelId' in e ? e.channelId : void 0) && void 0 !== t ? t : r) && void 0 !== n ? n : null;
}
function D(e, t, n) {
    var r, i, o, a;
    return e ? (null !== (i = null === (r = S(t)) || void 0 === r ? void 0 : r.frameRateEncode) && void 0 !== i ? i : null) : null !== (a = null === (o = T(t, n)) || void 0 === o ? void 0 : o.frameRateDecode) && void 0 !== a ? a : null;
}
function L(e, t) {
    var n, r, c, h;
    let m;
    let L = (0, y.hp)(e),
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
        J = null != k ? X : _.Z.getRTCConnection(),
        $ = null != k ? (null == X ? void 0 : null === (n = X.analyticsContext) || void 0 === n ? void 0 : n.streamApplication) : null,
        { resolution: ee, fps: et } = u.Z.getState(),
        { gameName: en, gameId: er, exe: ei, distributor: eo } = (0, s.G8)($),
        ea = L.isErrorOutbound,
        es = null != j ? j : I.Yn.DEFAULT,
        el = null != Q ? Q.ownerId : q,
        ec = null != Q ? (null == J ? void 0 : J.getVoiceParticipantType()) : ea ? 'sender' : 'receiver';
    (m = null != k && null != Q ? (ea ? (null == J ? void 0 : null === (r = J.getOutboundStats()) || void 0 === r ? void 0 : r.find((e) => e.quality === I.y7)) : null == J ? void 0 : J.getInboundStats(Q.ownerId)) : ea ? (null !== (h = i().maxBy(null !== (c = null == J ? void 0 : J.getOutboundStats()) && void 0 !== c ? c : [], (e) => e.num_frames)) && void 0 !== h ? h : null) : null != el ? (null == J ? void 0 : J.getInboundStats(el)) : null),
        (0, g.q)().then((t) => {
            var n, r, i, s, l, c, u, d, h, g, y, P, w, k, q, $, eu, ed, ef, e_, ep, eh, em, eg, eE, eb, ev, ey, eO, eI, eS, eT, eN, eA, eC, eR, eP, ew, eD, eL, ex, eM, ek, ej, eU, eG, eB, eF, eV;
            let eZ = {
                error_name: e.valueOf(),
                error_code: L.errorCode,
                error_severity: L.severity,
                error_category: L.category,
                underlying_error: null != U ? U : null,
                error_message: null != G ? G : null,
                guild_id: null !== (k = null == M ? void 0 : M.guild_id) && void 0 !== k ? k : null,
                channel_id: null != x ? x : null,
                channel_type: null !== (q = null == M ? void 0 : M.type) && void 0 !== q ? q : null,
                rtc_connection_id: null != F ? F : null,
                media_session_id: null !== ($ = null != B ? B : _.Z.getMediaSessionId()) && void 0 !== $ ? $ : null,
                parent_media_session_id: null !== (eu = null == X ? void 0 : X.parentMediaSessionId) && void 0 !== eu ? eu : null,
                context: null != j ? j : null,
                voice_backend_version: null !== (ed = null === (n = _.Z.getRTCConnection()) || void 0 === n ? void 0 : n.getVoiceVersion()) && void 0 !== ed ? ed : null,
                rtc_worker_backend_version: null !== (ef = null === (r = _.Z.getRTCConnection()) || void 0 === r ? void 0 : r.getRtcWorkerVersion()) && void 0 !== ef ? ef : null,
                guild_region: null !== (e_ = p.Z.getRegion(_.Z.getHostname())) && void 0 !== e_ ? e_ : null,
                hostname: null !== (ep = _.Z.getHostname()) && void 0 !== ep ? ep : null,
                duration: null !== (eh = null == J ? void 0 : J.getDurationSeconds()) && void 0 !== eh ? eh : null,
                participant_type: null != ec ? ec : null,
                num_frames: null !== (em = null == m ? void 0 : m.num_frames) && void 0 !== em ? em : 0,
                num_packets: null !== (eg = null == m ? void 0 : m.num_packets) && void 0 !== eg ? eg : 0,
                num_bytes: null !== (eE = null == m ? void 0 : m.num_bytes) && void 0 !== eE ? eE : 0,
                num_packets_lost: null !== (eb = null === (i = N(ea, es, el)) || void 0 === i ? void 0 : i.packetsLost) && void 0 !== eb ? eb : 0,
                video_codec: null !== (ev = null != V ? V : (0, o.bU)(null === (s = N(ea, es, el)) || void 0 === s ? void 0 : s.codec.name)) && void 0 !== ev ? ev : null,
                video_encoder: null !== (ey = null != Z ? Z : (0, o.lG)(null === (l = S(es)) || void 0 === l ? void 0 : l.encoderImplementationName)) && void 0 !== ey ? ey : null,
                video_decoder: null !== (eO = null != H ? H : (0, o.z_)(null === (c = T(es, el)) || void 0 === c ? void 0 : c.decoderImplementationName)) && void 0 !== eO ? eO : null,
                audio_capture_sample_rate_mismatch_percent: null != W ? W : null,
                incoming_video_stopped_for_occlusion: !a.w.isIncomingVideoEnabled(),
                bitrate: null !== (eI = null === (u = N(ea, es, el)) || void 0 === u ? void 0 : u.bitrate) && void 0 !== eI ? eI : null,
                target_bitrate: ea && null !== (eS = null === (d = S(es)) || void 0 === d ? void 0 : d.bitrateTarget) && void 0 !== eS ? eS : null,
                fps: null !== (eT = D(ea, es, el)) && void 0 !== eT ? eT : null,
                target_fps: es === I.Yn.STREAM && ea ? et : null,
                sender_user_id: null !== (eN = null == Q ? void 0 : Q.ownerId) && void 0 !== eN ? eN : null,
                stream_region: null !== (eA = null == X ? void 0 : X.getRegion()) && void 0 !== eA ? eA : null,
                stream_source_type: ea && null !== (eC = null == X ? void 0 : null === (h = X.analyticsContext) || void 0 === h ? void 0 : h.streamSourceType) && void 0 !== eC ? eC : null,
                num_stream_viewers: null !== (eR = null == X ? void 0 : null === (g = X.analyticsContext) || void 0 === g ? void 0 : g.numViewers) && void 0 !== eR ? eR : null,
                video_input_resolution_height: ea && null != ee ? ee : null,
                video_input_frame_rate: ea && null != et ? et : null,
                screenshare_capture_method: R(),
                share_application_name: null != en ? en : null,
                share_application_id: null != er ? er : null,
                share_application_executable: null != ei ? ei : null,
                share_application_distributor: null != eo ? eo : null,
                cpu_brand: null !== (eP = null == t ? void 0 : t.cpu_brand) && void 0 !== eP ? eP : null,
                cpu_vendor: null !== (ew = null == t ? void 0 : t.cpu_vendor) && void 0 !== ew ? ew : null,
                cpu_memory: null !== (eD = null == t ? void 0 : t.cpu_memory) && void 0 !== eD ? eD : null,
                gpu_brand: null !== (eL = null == t ? void 0 : t.gpu_brand) && void 0 !== eL ? eL : null,
                gpu_count: null !== (ex = null == t ? void 0 : t.gpu_count) && void 0 !== ex ? ex : null,
                gpu_memory: null !== (eM = null == t ? void 0 : t.gpu_memory) && void 0 !== eM ? eM : null,
                gpu_device_vendor_id: null !== (ek = null == t ? void 0 : t.gpu_device_vendor_id) && void 0 !== ek ? ek : null,
                gpu_device_device_id: null !== (ej = null == t ? void 0 : t.gpu_device_device_id) && void 0 !== ej ? ej : null,
                gpu_device_sub_sys_id: null !== (eU = null == t ? void 0 : t.gpu_device_sub_sys_id) && void 0 !== eU ? eU : null,
                gpu_device_revision: null !== (eG = null == t ? void 0 : t.gpu_device_revision) && void 0 !== eG ? eG : null,
                gpu_driver_version: null !== (eB = null == t ? void 0 : t.gpu_driver_version) && void 0 !== eB ? eB : null,
                cpu_usage: null !== (eF = v.Z.getCurrentCPUUsagePercent()) && void 0 !== eF ? eF : null,
                memory_usage: null !== (eV = v.Z.getCurrentMemoryUsageKB()) && void 0 !== eV ? eV : null,
                outbound_bitrate_estimate: A(es),
                inbound_bitrate_estimate: C(es),
                hardware_enabled: f.Z.getHardwareEncoding(),
                audio_input_device_name: null != Y ? Y : null === (y = f.Z.getInputDevices()[f.Z.getInputDeviceId()]) || void 0 === y ? void 0 : y.name,
                audio_output_device_name: null != K ? K : null === (P = f.Z.getOutputDevices()[f.Z.getOutputDeviceId()]) || void 0 === P ? void 0 : P.name,
                video_device_name: null != z ? z : null === (w = f.Z.getVideoDevices()[f.Z.getVideoDeviceId()]) || void 0 === w ? void 0 : w.name,
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
