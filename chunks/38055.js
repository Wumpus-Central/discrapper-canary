n.d(t, { b: () => w }), n(47120);
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
    b = n(848479),
    v = n(785141),
    y = n(981631),
    O = n(65154);
function I(e) {
    var t, n;
    return null !== (n = null === (t = c.Z.getConnectionStats().find((t) => t.connection.context === e)) || void 0 === t ? void 0 : t.stats.transport.outboundBitrateEstimate) && void 0 !== n ? n : null;
}
function S(e) {
    var t, n;
    return null !== (n = null === (t = c.Z.getConnectionStats().find((t) => t.connection.context === e)) || void 0 === t ? void 0 : t.stats.transport.inboundBitrateEstimate) && void 0 !== n ? n : null;
}
function T() {
    if (0 === c.Z.getConnectionStats().length || 0 === c.Z.getLastConnectionStats().length) return null;
    let e = {};
    for (let s of ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames']) {
        var t, n, r, i, o, a;
        let l = null !== (o = null === (n = c.Z.getLastConnectionStats().find((e) => e.connection.context === O.Yn.STREAM)) || void 0 === n ? void 0 : null === (t = n.stats.screenshare) || void 0 === t ? void 0 : t[s]) && void 0 !== o ? o : 0,
            u = null !== (a = null === (i = c.Z.getConnectionStats().find((e) => e.connection.context === O.Yn.STREAM)) || void 0 === i ? void 0 : null === (r = i.stats.screenshare) || void 0 === r ? void 0 : r[s]) && void 0 !== a ? a : 0;
        e[s] = u - l;
    }
    let s = -1,
        l = null;
    for (let [t, n] of Object.entries(e)) n > s && ((s = n), (l = t));
    return s > 0 ? l : null;
}
function A(e) {
    let t = c.Z.getConnectionStats().find((t) => t.connection.context === e);
    if (null == t) return null;
    let n = t.stats.rtp.outbound.find((e) => 'video' === e.type);
    return null == n ? null : (0, o.lG)(null == n ? void 0 : n.encoderImplementationName);
}
function N(e, t) {
    if (null == t) return null;
    let n = c.Z.getConnectionStats().find((t) => t.connection.context === e);
    if (null == n) return null;
    let r = n.stats.rtp.inbound[t];
    if (null == r) return null;
    let i = r.find((e) => 'video' === e.type);
    return (0, o.z_)(null == i ? void 0 : i.decoderImplementationName);
}
function C(e, t, n) {
    var r, i, a, s;
    let l = null === (r = c.Z.getConnectionStats().find((t) => t.connection.context === e)) || void 0 === r ? void 0 : r.stats.rtp,
        u = null;
    return t ? (u = null !== (i = null == l ? void 0 : l.outbound.find((e) => 'video' === e.type)) && void 0 !== i ? i : null) : null != n && (u = null !== (s = null == l ? void 0 : null === (a = l.inbound[n]) || void 0 === a ? void 0 : a.find((e) => 'video' === e.type)) && void 0 !== s ? s : null), (0, o.bU)(null == u ? void 0 : u.codec.name);
}
function R(e) {
    var t;
    return null != e.streamKey && null !== (t = m.Z.getRTCConnection(e.streamKey)) && void 0 !== t ? t : null;
}
function P(e) {
    var t, n;
    return null !== (n = null !== (t = e.channelId) && void 0 !== t ? t : h.Z.getVoiceChannelId()) && void 0 !== n ? n : null;
}
function w(e, t) {
    var n, r, o, c, h;
    let m;
    let w = (0, v.hp)(e),
        D = P(t),
        L = d.Z.getChannel(D),
        x = null != t.streamKey ? (0, l.my)(t.streamKey) : null,
        M = R(t),
        k = null != t.streamKey ? M : _.Z.getRTCConnection(),
        j = null != t.streamKey ? (null == M ? void 0 : null === (n = M.analyticsContext) || void 0 === n ? void 0 : n.streamApplication) : null,
        { resolution: U, fps: G } = u.Z.getState(),
        { gameName: B, gameId: F, exe: V, distributor: Z } = (0, s.G8)(j),
        H = w.isErrorOutbound,
        W = null !== (r = t.mediaContext) && void 0 !== r ? r : O.Yn.DEFAULT,
        Y = null != x ? x.ownerId : t.userId,
        K = null != x ? (null == k ? void 0 : k.getVoiceParticipantType()) : H ? 'sender' : 'receiver';
    (m = null != t.streamKey && null != x ? (H ? (null == k ? void 0 : null === (o = k.getOutboundStats()) || void 0 === o ? void 0 : o.find((e) => e.quality === O.y7)) : null == k ? void 0 : k.getInboundStats(x.ownerId)) : H ? (null !== (h = i().maxBy(null !== (c = null == k ? void 0 : k.getOutboundStats()) && void 0 !== c ? c : [], (e) => e.num_frames)) && void 0 !== h ? h : null) : null != t.userId ? (null == k ? void 0 : k.getInboundStats(t.userId)) : null),
        (0, g.q)().then((n) => {
            var r, i, o, s, l, c, u, d, h, g, v, O, R, P, j, z, q, Q, X, J, $, ee, et, en, er, ei, eo, ea, es, el, ec, eu, ed, ef, e_, ep, eh, em, eg, eE, eb, ev, ey, eO, eI, eS, eT, eA, eN, eC;
            let eR = {
                error_name: e.valueOf(),
                error_code: w.errorCode,
                error_severity: w.severity,
                error_category: w.category,
                underlying_error: null !== (d = t.underlyingError) && void 0 !== d ? d : null,
                error_message: null !== (h = t.errorMessage) && void 0 !== h ? h : null,
                guild_id: null !== (g = null == L ? void 0 : L.guild_id) && void 0 !== g ? g : null,
                channel_id: null != D ? D : null,
                channel_type: null !== (v = null == L ? void 0 : L.type) && void 0 !== v ? v : null,
                rtc_connection_id: null !== (O = t.rtcConnectionId) && void 0 !== O ? O : null,
                media_session_id: null !== (P = null !== (R = t.mediaSessionId) && void 0 !== R ? R : _.Z.getMediaSessionId()) && void 0 !== P ? P : null,
                parent_media_session_id: null !== (j = null == M ? void 0 : M.parentMediaSessionId) && void 0 !== j ? j : null,
                context: null !== (z = t.mediaContext) && void 0 !== z ? z : null,
                voice_backend_version: null !== (q = null === (r = _.Z.getRTCConnection()) || void 0 === r ? void 0 : r.getVoiceVersion()) && void 0 !== q ? q : null,
                rtc_worker_backend_version: null !== (Q = null === (i = _.Z.getRTCConnection()) || void 0 === i ? void 0 : i.getRtcWorkerVersion()) && void 0 !== Q ? Q : null,
                guild_region: null !== (X = p.Z.getRegion(_.Z.getHostname())) && void 0 !== X ? X : null,
                hostname: null !== (J = _.Z.getHostname()) && void 0 !== J ? J : null,
                duration: null !== ($ = null == k ? void 0 : k.getDurationSeconds()) && void 0 !== $ ? $ : null,
                participant_type: null != K ? K : null,
                num_frames: null !== (ee = null == m ? void 0 : m.num_frames) && void 0 !== ee ? ee : 0,
                num_packets: null !== (et = null == m ? void 0 : m.num_packets) && void 0 !== et ? et : 0,
                num_bytes: null !== (en = null == m ? void 0 : m.num_bytes) && void 0 !== en ? en : 0,
                video_codec: null !== (er = t.videoCodec) && void 0 !== er ? er : C(W, H, Y),
                video_encoder: null !== (eo = null !== (ei = t.videoEncoder) && void 0 !== ei ? ei : A(W)) && void 0 !== eo ? eo : null,
                video_decoder: null !== (es = null !== (ea = t.videoDecoder) && void 0 !== ea ? ea : N(W, Y)) && void 0 !== es ? es : null,
                audio_capture_sample_rate_mismatch_percent: null !== (el = t.audioCaptureSampleRateMismatchPercent) && void 0 !== el ? el : null,
                incoming_video_stopped_for_occlusion: !a.w.isIncomingVideoEnabled(),
                sender_user_id: null !== (ec = null == x ? void 0 : x.ownerId) && void 0 !== ec ? ec : null,
                stream_region: null !== (eu = null == M ? void 0 : M.getRegion()) && void 0 !== eu ? eu : null,
                stream_source_type: H && null !== (ed = null == M ? void 0 : null === (o = M.analyticsContext) || void 0 === o ? void 0 : o.streamSourceType) && void 0 !== ed ? ed : null,
                num_stream_viewers: null !== (ef = null == M ? void 0 : null === (s = M.analyticsContext) || void 0 === s ? void 0 : s.numViewers) && void 0 !== ef ? ef : null,
                video_input_resolution_height: H && null != U ? U : null,
                video_input_frame_rate: H && null != G ? G : null,
                screenshare_capture_method: T(),
                share_application_name: null != B ? B : null,
                share_application_id: null != F ? F : null,
                share_application_executable: null != V ? V : null,
                share_application_distributor: null != Z ? Z : null,
                cpu_brand: null !== (e_ = null == n ? void 0 : n.cpu_brand) && void 0 !== e_ ? e_ : null,
                cpu_vendor: null !== (ep = null == n ? void 0 : n.cpu_vendor) && void 0 !== ep ? ep : null,
                cpu_memory: null !== (eh = null == n ? void 0 : n.cpu_memory) && void 0 !== eh ? eh : null,
                gpu_brand: null !== (em = null == n ? void 0 : n.gpu_brand) && void 0 !== em ? em : null,
                gpu_count: null !== (eg = null == n ? void 0 : n.gpu_count) && void 0 !== eg ? eg : null,
                gpu_memory: null !== (eE = null == n ? void 0 : n.gpu_memory) && void 0 !== eE ? eE : null,
                gpu_device_vendor_id: null !== (eb = null == n ? void 0 : n.gpu_device_vendor_id) && void 0 !== eb ? eb : null,
                gpu_device_device_id: null !== (ev = null == n ? void 0 : n.gpu_device_device_id) && void 0 !== ev ? ev : null,
                gpu_device_sub_sys_id: null !== (ey = null == n ? void 0 : n.gpu_device_sub_sys_id) && void 0 !== ey ? ey : null,
                gpu_device_revision: null !== (eO = null == n ? void 0 : n.gpu_device_revision) && void 0 !== eO ? eO : null,
                gpu_driver_version: null !== (eI = null == n ? void 0 : n.gpu_driver_version) && void 0 !== eI ? eI : null,
                cpu_usage: null !== (eS = b.Z.getCurrentCPUUsagePercent()) && void 0 !== eS ? eS : null,
                memory_usage: null !== (eT = b.Z.getCurrentMemoryUsageKB()) && void 0 !== eT ? eT : null,
                outbound_bitrate_estimate: I(W),
                inbound_bitrate_estimate: S(W),
                hardware_enabled: f.Z.getHardwareEncoding(),
                audio_input_device_name: null !== (eA = t.audioInputDeviceName) && void 0 !== eA ? eA : null === (l = f.Z.getInputDevices()[f.Z.getInputDeviceId()]) || void 0 === l ? void 0 : l.name,
                audio_output_device_name: null !== (eN = t.audioOutputDeviceName) && void 0 !== eN ? eN : null === (c = f.Z.getOutputDevices()[f.Z.getOutputDeviceId()]) || void 0 === c ? void 0 : c.name,
                video_device_name: null !== (eC = t.videoDeviceName) && void 0 !== eC ? eC : null === (u = f.Z.getVideoDevices()[f.Z.getVideoDeviceId()]) || void 0 === u ? void 0 : u.name,
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
                output_volume: f.Z.getOutputVolume()
            };
            E.default.track(y.rMx.AV_ERROR_REPORTED, eR);
        });
}
