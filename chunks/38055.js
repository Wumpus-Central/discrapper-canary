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
function N(e) {
    let t = c.Z.getConnectionStats().find((t) => t.connection.context === e);
    if (null == t) return null;
    let n = t.stats.rtp.outbound.find((e) => 'video' === e.type);
    return null == n ? null : (0, o.lG)(null == n ? void 0 : n.encoderImplementationName);
}
function A(e, t) {
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
    return 'streamKey' in e && null !== (t = m.Z.getRTCConnection(e.streamKey)) && void 0 !== t ? t : null;
}
function P(e) {
    var t, n;
    let r = h.Z.getVoiceChannelId();
    return null !== (n = null !== (t = 'channelId' in e ? e.channelId : void 0) && void 0 !== t ? t : r) && void 0 !== n ? n : null;
}
function w(e, t) {
    var n, r, o, c;
    let h;
    let m = (0, v.hp)(e),
        w = P(t),
        D = d.Z.getChannel(w),
        L = 'streamKey' in t ? t.streamKey : void 0,
        x = 'mediaContext' in t ? t.mediaContext : void 0,
        M = 'underlyingError' in t ? t.underlyingError : void 0,
        k = 'errorMessage' in t ? t.errorMessage : void 0,
        j = 'mediaSessionId' in t ? t.mediaSessionId : void 0,
        U = 'rtcConnectionId' in t ? t.rtcConnectionId : void 0,
        G = 'videoCodec' in t ? t.videoCodec : void 0,
        B = 'videoEncoder' in t ? t.videoEncoder : void 0,
        F = 'videoDecoder' in t ? t.videoDecoder : void 0,
        V = 'audioCaptureSampleRateMismatchPercent' in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
        Z = 'audioInputDeviceName' in t ? t.audioInputDeviceName : void 0,
        H = 'audioOutputDeviceName' in t ? t.audioOutputDeviceName : void 0,
        W = 'videoDeviceName' in t ? t.videoDeviceName : void 0,
        Y = null != L ? (0, l.my)(L) : null,
        K = R(t),
        z = null != L ? K : _.Z.getRTCConnection(),
        q = null != L ? (null == K ? void 0 : null === (n = K.analyticsContext) || void 0 === n ? void 0 : n.streamApplication) : null,
        { resolution: Q, fps: X } = u.Z.getState(),
        { gameName: J, gameId: $, exe: ee, distributor: et } = (0, s.G8)(q),
        en = m.isErrorOutbound,
        er = null != x ? x : O.Yn.DEFAULT,
        ei = null != Y ? Y.ownerId : void 0,
        eo = null != Y ? (null == z ? void 0 : z.getVoiceParticipantType()) : en ? 'sender' : 'receiver';
    (h = null != L && null != Y ? (en ? (null == z ? void 0 : null === (r = z.getOutboundStats()) || void 0 === r ? void 0 : r.find((e) => e.quality === O.y7)) : null == z ? void 0 : z.getInboundStats(Y.ownerId)) : en ? (null !== (c = i().maxBy(null !== (o = null == z ? void 0 : z.getOutboundStats()) && void 0 !== o ? o : [], (e) => e.num_frames)) && void 0 !== c ? c : null) : null != ei ? (null == z ? void 0 : z.getInboundStats(ei)) : null),
        (0, g.q)().then((t) => {
            var n, r, i, o, s, l, c, u, d, g, v, O, R, P, L, q, ea, es, el, ec, eu, ed, ef, e_, ep, eh, em, eg, eE, eb, ev, ey, eO, eI, eS, eT, eN, eA;
            let eC = {
                error_name: e.valueOf(),
                error_code: m.errorCode,
                error_severity: m.severity,
                error_category: m.category,
                underlying_error: null != M ? M : null,
                error_message: null != k ? k : null,
                guild_id: null !== (u = null == D ? void 0 : D.guild_id) && void 0 !== u ? u : null,
                channel_id: null != w ? w : null,
                channel_type: null !== (d = null == D ? void 0 : D.type) && void 0 !== d ? d : null,
                rtc_connection_id: null != U ? U : null,
                media_session_id: null !== (g = null != j ? j : _.Z.getMediaSessionId()) && void 0 !== g ? g : null,
                parent_media_session_id: null !== (v = null == K ? void 0 : K.parentMediaSessionId) && void 0 !== v ? v : null,
                context: null != x ? x : null,
                voice_backend_version: null !== (O = null === (n = _.Z.getRTCConnection()) || void 0 === n ? void 0 : n.getVoiceVersion()) && void 0 !== O ? O : null,
                rtc_worker_backend_version: null !== (R = null === (r = _.Z.getRTCConnection()) || void 0 === r ? void 0 : r.getRtcWorkerVersion()) && void 0 !== R ? R : null,
                guild_region: null !== (P = p.Z.getRegion(_.Z.getHostname())) && void 0 !== P ? P : null,
                hostname: null !== (L = _.Z.getHostname()) && void 0 !== L ? L : null,
                duration: null !== (q = null == z ? void 0 : z.getDurationSeconds()) && void 0 !== q ? q : null,
                participant_type: null != eo ? eo : null,
                num_frames: null !== (ea = null == h ? void 0 : h.num_frames) && void 0 !== ea ? ea : 0,
                num_packets: null !== (es = null == h ? void 0 : h.num_packets) && void 0 !== es ? es : 0,
                num_bytes: null !== (el = null == h ? void 0 : h.num_bytes) && void 0 !== el ? el : 0,
                video_codec: null != G ? G : C(er, en, ei),
                video_encoder: null !== (ec = null != B ? B : N(er)) && void 0 !== ec ? ec : null,
                video_decoder: null !== (eu = null != F ? F : A(er, ei)) && void 0 !== eu ? eu : null,
                audio_capture_sample_rate_mismatch_percent: null != V ? V : null,
                incoming_video_stopped_for_occlusion: !a.w.isIncomingVideoEnabled(),
                sender_user_id: null !== (ed = null == Y ? void 0 : Y.ownerId) && void 0 !== ed ? ed : null,
                stream_region: null !== (ef = null == K ? void 0 : K.getRegion()) && void 0 !== ef ? ef : null,
                stream_source_type: en && null !== (e_ = null == K ? void 0 : null === (i = K.analyticsContext) || void 0 === i ? void 0 : i.streamSourceType) && void 0 !== e_ ? e_ : null,
                num_stream_viewers: null !== (ep = null == K ? void 0 : null === (o = K.analyticsContext) || void 0 === o ? void 0 : o.numViewers) && void 0 !== ep ? ep : null,
                video_input_resolution_height: en && null != Q ? Q : null,
                video_input_frame_rate: en && null != X ? X : null,
                screenshare_capture_method: T(),
                share_application_name: null != J ? J : null,
                share_application_id: null != $ ? $ : null,
                share_application_executable: null != ee ? ee : null,
                share_application_distributor: null != et ? et : null,
                cpu_brand: null !== (eh = null == t ? void 0 : t.cpu_brand) && void 0 !== eh ? eh : null,
                cpu_vendor: null !== (em = null == t ? void 0 : t.cpu_vendor) && void 0 !== em ? em : null,
                cpu_memory: null !== (eg = null == t ? void 0 : t.cpu_memory) && void 0 !== eg ? eg : null,
                gpu_brand: null !== (eE = null == t ? void 0 : t.gpu_brand) && void 0 !== eE ? eE : null,
                gpu_count: null !== (eb = null == t ? void 0 : t.gpu_count) && void 0 !== eb ? eb : null,
                gpu_memory: null !== (ev = null == t ? void 0 : t.gpu_memory) && void 0 !== ev ? ev : null,
                gpu_device_vendor_id: null !== (ey = null == t ? void 0 : t.gpu_device_vendor_id) && void 0 !== ey ? ey : null,
                gpu_device_device_id: null !== (eO = null == t ? void 0 : t.gpu_device_device_id) && void 0 !== eO ? eO : null,
                gpu_device_sub_sys_id: null !== (eI = null == t ? void 0 : t.gpu_device_sub_sys_id) && void 0 !== eI ? eI : null,
                gpu_device_revision: null !== (eS = null == t ? void 0 : t.gpu_device_revision) && void 0 !== eS ? eS : null,
                gpu_driver_version: null !== (eT = null == t ? void 0 : t.gpu_driver_version) && void 0 !== eT ? eT : null,
                cpu_usage: null !== (eN = b.Z.getCurrentCPUUsagePercent()) && void 0 !== eN ? eN : null,
                memory_usage: null !== (eA = b.Z.getCurrentMemoryUsageKB()) && void 0 !== eA ? eA : null,
                outbound_bitrate_estimate: I(er),
                inbound_bitrate_estimate: S(er),
                hardware_enabled: f.Z.getHardwareEncoding(),
                audio_input_device_name: null != Z ? Z : null === (s = f.Z.getInputDevices()[f.Z.getInputDeviceId()]) || void 0 === s ? void 0 : s.name,
                audio_output_device_name: null != H ? H : null === (l = f.Z.getOutputDevices()[f.Z.getOutputDeviceId()]) || void 0 === l ? void 0 : l.name,
                video_device_name: null != W ? W : null === (c = f.Z.getVideoDevices()[f.Z.getVideoDeviceId()]) || void 0 === c ? void 0 : c.name,
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
            E.default.track(y.rMx.AV_ERROR_REPORTED, eC);
        });
}
