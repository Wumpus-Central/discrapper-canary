n.d(t, {
    U: () => L,
    b: () => D
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(46973),
    a = n(255914),
    s = n(581567),
    l = n(569545),
    c = n(361291),
    u = n(592125),
    d = n(131951),
    f = n(19780),
    _ = n(936349),
    p = n(704806),
    h = n(626135),
    m = n(848479),
    g = n(785141),
    E = n(981631),
    v = n(65154);
let b = !1,
    y = [],
    O = [];
function I(e) {
    (O = y), (y = e);
}
function S(e) {
    var t, n;
    return null !== (n = null == y ? void 0 : null === (t = y.find((t) => t.connection.context === e)) || void 0 === t ? void 0 : t.stats.transport.outboundBitrateEstimate) && void 0 !== n ? n : null;
}
function T(e) {
    var t, n;
    return null !== (n = null === (t = y.find((t) => t.connection.context === e)) || void 0 === t ? void 0 : t.stats.transport.inboundBitrateEstimate) && void 0 !== n ? n : null;
}
function N() {
    if (0 === y.length || 0 === O.length) return null;
    let e = {};
    for (let s of ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames']) {
        var t, n, r, i, o, a;
        let l = null !== (o = null === (n = O.find((e) => e.connection.context === v.Yn.STREAM)) || void 0 === n ? void 0 : null === (t = n.stats.screenshare) || void 0 === t ? void 0 : t[s]) && void 0 !== o ? o : 0,
            c = null !== (a = null === (i = y.find((e) => e.connection.context === v.Yn.STREAM)) || void 0 === i ? void 0 : null === (r = i.stats.screenshare) || void 0 === r ? void 0 : r[s]) && void 0 !== a ? a : 0;
        e[s] = c - l;
    }
    let s = -1,
        l = null;
    for (let [t, n] of Object.entries(e)) n > s && ((s = n), (l = t));
    return s > 0 ? l : null;
}
function A(e) {
    let t = y.find((t) => t.connection.context === e);
    if (null == t) return null;
    let n = t.stats.rtp.outbound.find((e) => 'video' === e.type);
    return null == n ? null : (0, a.lG)(null == n ? void 0 : n.encoderImplementationName);
}
function C(e, t) {
    if (null == t) return null;
    let n = y.find((t) => t.connection.context === e);
    if (null == n) return null;
    let r = n.stats.rtp.inbound[t];
    if (null == r) return null;
    let i = r.find((e) => 'video' === e.type);
    return (0, a.z_)(null == i ? void 0 : i.decoderImplementationName);
}
function R(e, t, n) {
    var r, i, o;
    let s = null === (r = y.find((t) => t.connection.context === e)) || void 0 === r ? void 0 : r.stats.rtp,
        l = null;
    return t ? (l = null !== (i = null == s ? void 0 : s.outbound.find((e) => 'video' === e.type)) && void 0 !== i ? i : null) : null != n && (l = null !== (o = null == s ? void 0 : s.inbound[n].find((e) => 'video' === e.type)) && void 0 !== o ? o : null), (0, a.bU)(null == l ? void 0 : l.codec.name);
}
function P(e) {
    let t = n(959457).Z;
    return null != e.streamKey ? t.getRTCConnection(e.streamKey) : null;
}
function w(e) {
    var t;
    let r = n(944486).Z;
    return null !== (t = e.channelId) && void 0 !== t ? t : r.getVoiceChannelId();
}
function D(e, t) {
    var n, r, o, a, b;
    let y;
    let O = (0, g.hp)(e),
        I = w(t),
        D = u.Z.getChannel(I),
        L = null != t.streamKey ? (0, l.my)(t.streamKey) : null,
        x = P(t),
        M = null != t.streamKey ? x : f.Z.getRTCConnection(),
        k = null != t.streamKey ? (null == x ? void 0 : null === (n = x.analyticsContext) || void 0 === n ? void 0 : n.streamApplication) : null,
        { resolution: j, fps: U } = c.Z.getState(),
        { gameName: G, gameId: B, exe: V, distributor: F } = (0, s.G8)(k),
        Z = O.isErrorOutbound,
        H = null !== (r = t.mediaContext) && void 0 !== r ? r : v.Yn.DEFAULT,
        W = null != L ? L.ownerId : t.userId,
        Y = null != L ? (null == M ? void 0 : M.getVoiceParticipantType()) : Z ? 'sender' : 'receiver';
    (y = null != t.streamKey && null != L ? (Z ? (null == M ? void 0 : null === (o = M.getOutboundStats()) || void 0 === o ? void 0 : o.find((e) => e.quality === v.y7)) : null == M ? void 0 : M.getInboundStats(L.ownerId)) : Z ? (null !== (b = i().maxBy(null !== (a = null == M ? void 0 : M.getOutboundStats()) && void 0 !== a ? a : [], (e) => e.num_frames)) && void 0 !== b ? b : null) : null != t.userId ? (null == M ? void 0 : M.getInboundStats(t.userId)) : null),
        (0, p.q)().then((n) => {
            var r, i, o, a, s, l, c, u, p, g, v, b, P, w, k, K, z, q, Q, X, J, $, ee, et, en, er, ei, eo, ea, es, el, ec, eu, ed, ef, e_, ep, eh, em, eg, eE;
            let ev = {
                error_name: e.valueOf(),
                error_code: O.errorCode,
                error_severity: O.severity,
                error_category: O.category,
                underlying_error: null !== (u = t.underlyingError) && void 0 !== u ? u : null,
                error_message: null !== (p = t.errorMessage) && void 0 !== p ? p : null,
                guild_id: null !== (g = null == D ? void 0 : D.guild_id) && void 0 !== g ? g : null,
                channel_id: null != I ? I : null,
                channel_type: null !== (v = null == D ? void 0 : D.type) && void 0 !== v ? v : null,
                rtc_connection_id: null !== (b = t.rtcConnectionId) && void 0 !== b ? b : null,
                media_session_id: null !== (w = null !== (P = t.mediaSessionId) && void 0 !== P ? P : f.Z.getMediaSessionId()) && void 0 !== w ? w : null,
                parent_media_session_id: null !== (k = t.parentMediaSessionId) && void 0 !== k ? k : null,
                context: null !== (K = t.mediaContext) && void 0 !== K ? K : null,
                voice_backend_version: null !== (z = null === (r = f.Z.getRTCConnection()) || void 0 === r ? void 0 : r.getVoiceVersion()) && void 0 !== z ? z : null,
                rtc_worker_backend_version: null !== (q = null === (i = f.Z.getRTCConnection()) || void 0 === i ? void 0 : i.getRtcWorkerVersion()) && void 0 !== q ? q : null,
                guild_region: null !== (Q = _.Z.getRegion(f.Z.getHostname())) && void 0 !== Q ? Q : null,
                hostname: null !== (X = f.Z.getHostname()) && void 0 !== X ? X : null,
                duration: null !== (J = null == M ? void 0 : M.getDurationSeconds()) && void 0 !== J ? J : null,
                participant_type: null != Y ? Y : null,
                num_frames: null !== ($ = null == y ? void 0 : y.num_frames) && void 0 !== $ ? $ : 0,
                num_packets: null !== (ee = null == y ? void 0 : y.num_packets) && void 0 !== ee ? ee : 0,
                num_bytes: null !== (et = null == y ? void 0 : y.num_bytes) && void 0 !== et ? et : 0,
                video_codec: R(H, Z, W),
                video_encoder: null !== (en = A(H)) && void 0 !== en ? en : null,
                video_decoder: null !== (er = C(H, W)) && void 0 !== er ? er : null,
                sender_user_id: null !== (ei = null == L ? void 0 : L.ownerId) && void 0 !== ei ? ei : null,
                stream_region: null !== (eo = null == x ? void 0 : x.getRegion()) && void 0 !== eo ? eo : null,
                stream_source_type: Z && null !== (ea = null == x ? void 0 : null === (o = x.analyticsContext) || void 0 === o ? void 0 : o.streamSourceType) && void 0 !== ea ? ea : null,
                num_stream_viewers: null !== (es = null == x ? void 0 : null === (a = x.analyticsContext) || void 0 === a ? void 0 : a.numViewers) && void 0 !== es ? es : null,
                video_input_resolution_height: Z && null != j ? j : null,
                video_input_frame_rate: Z && null != U ? U : null,
                screenshare_capture_method: N(),
                share_application_name: null != G ? G : null,
                share_application_id: null != B ? B : null,
                share_application_executable: null != V ? V : null,
                share_application_distributor: null != F ? F : null,
                cpu_brand: null !== (el = null == n ? void 0 : n.cpu_brand) && void 0 !== el ? el : null,
                cpu_vendor: null !== (ec = null == n ? void 0 : n.cpu_vendor) && void 0 !== ec ? ec : null,
                cpu_memory: null !== (eu = null == n ? void 0 : n.cpu_memory) && void 0 !== eu ? eu : null,
                gpu_brand: null !== (ed = null == n ? void 0 : n.gpu_brand) && void 0 !== ed ? ed : null,
                gpu_count: null !== (ef = null == n ? void 0 : n.gpu_count) && void 0 !== ef ? ef : null,
                gpu_memory: null !== (e_ = null == n ? void 0 : n.gpu_memory) && void 0 !== e_ ? e_ : null,
                cpu_usage: null !== (ep = m.Z.getCurrentCPUUsagePercent()) && void 0 !== ep ? ep : null,
                memory_usage: null !== (eh = m.Z.getCurrentMemoryUsageKB()) && void 0 !== eh ? eh : null,
                outbound_bitrate_estimate: S(H),
                inbound_bitrate_estimate: T(H),
                hardware_enabled: d.Z.getHardwareEncoding(),
                audio_input_device_name: null !== (em = t.audioInputDeviceName) && void 0 !== em ? em : null === (s = d.Z.getInputDevices()[d.Z.getInputDeviceId()]) || void 0 === s ? void 0 : s.name,
                audio_output_device_name: null !== (eg = t.audioOutputDeviceName) && void 0 !== eg ? eg : null === (l = d.Z.getOutputDevices()[d.Z.getOutputDeviceId()]) || void 0 === l ? void 0 : l.name,
                video_device_name: null !== (eE = t.videoDeviceName) && void 0 !== eE ? eE : null === (c = d.Z.getVideoDevices()[d.Z.getVideoDeviceId()]) || void 0 === c ? void 0 : c.name,
                audio_subsystem: d.Z.getMediaEngine().getAudioSubsystem(),
                automatic_audio_subsystem: d.Z.getSettings().automaticAudioSubsystem,
                audio_layer: d.Z.getMediaEngine().getAudioLayer(),
                audio_input_mode: d.Z.getSettings().mode,
                automatic_audio_input_sensitivity_enabled: d.Z.getSettings().modeOptions.autoThreshold,
                audio_input_sensitivity: d.Z.getSettings().modeOptions.threshold,
                echo_cancellation_enabled: d.Z.getEchoCancellation(),
                noise_suppression_enabled: d.Z.getNoiseSuppression(),
                noise_cancellation_enabled: d.Z.getNoiseCancellation(),
                automatic_gain_control_enabled: d.Z.getAutomaticGainControl(),
                sidechain_compression_enabled: d.Z.getSidechainCompression(),
                input_volume: d.Z.getInputVolume(),
                output_volume: d.Z.getOutputVolume()
            };
            h.default.track(E.rMx.AV_ERROR_REPORTED, ev);
        });
}
function L() {
    if (b) return;
    let e = d.Z.getMediaEngine();
    e.on(o.aB.ConnectionStats, I), e.on(o.aB.Destroy, () => e.off(o.aB.ConnectionStats, I)), (b = !0);
}
