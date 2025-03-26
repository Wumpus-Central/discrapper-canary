n.d(t, { b: () => P }), n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(255914),
    a = n(581567),
    s = n(569545),
    l = n(450109),
    c = n(361291),
    u = n(592125),
    d = n(131951),
    f = n(19780),
    _ = n(936349),
    p = n(944486),
    h = n(959457),
    m = n(704806),
    g = n(626135),
    E = n(848479),
    b = n(785141),
    v = n(981631),
    y = n(65154);
function O(e) {
    var t, n;
    return null !== (n = null === (t = l.Z.getConnectionStats().find((t) => t.connection.context === e)) || void 0 === t ? void 0 : t.stats.transport.outboundBitrateEstimate) && void 0 !== n ? n : null;
}
function I(e) {
    var t, n;
    return null !== (n = null === (t = l.Z.getConnectionStats().find((t) => t.connection.context === e)) || void 0 === t ? void 0 : t.stats.transport.inboundBitrateEstimate) && void 0 !== n ? n : null;
}
function S() {
    if (0 === l.Z.getConnectionStats().length || 0 === l.Z.getLastConnectionStats().length) return null;
    let e = {};
    for (let s of ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames']) {
        var t, n, r, i, o, a;
        let c = null !== (o = null === (n = l.Z.getLastConnectionStats().find((e) => e.connection.context === y.Yn.STREAM)) || void 0 === n ? void 0 : null === (t = n.stats.screenshare) || void 0 === t ? void 0 : t[s]) && void 0 !== o ? o : 0,
            u = null !== (a = null === (i = l.Z.getConnectionStats().find((e) => e.connection.context === y.Yn.STREAM)) || void 0 === i ? void 0 : null === (r = i.stats.screenshare) || void 0 === r ? void 0 : r[s]) && void 0 !== a ? a : 0;
        e[s] = u - c;
    }
    let s = -1,
        c = null;
    for (let [t, n] of Object.entries(e)) n > s && ((s = n), (c = t));
    return s > 0 ? c : null;
}
function T(e) {
    let t = l.Z.getConnectionStats().find((t) => t.connection.context === e);
    if (null == t) return null;
    let n = t.stats.rtp.outbound.find((e) => 'video' === e.type);
    return null == n ? null : (0, o.lG)(null == n ? void 0 : n.encoderImplementationName);
}
function A(e, t) {
    if (null == t) return null;
    let n = l.Z.getConnectionStats().find((t) => t.connection.context === e);
    if (null == n) return null;
    let r = n.stats.rtp.inbound[t];
    if (null == r) return null;
    let i = r.find((e) => 'video' === e.type);
    return (0, o.z_)(null == i ? void 0 : i.decoderImplementationName);
}
function N(e, t, n) {
    var r, i, a, s;
    let c = null === (r = l.Z.getConnectionStats().find((t) => t.connection.context === e)) || void 0 === r ? void 0 : r.stats.rtp,
        u = null;
    return t ? (u = null !== (i = null == c ? void 0 : c.outbound.find((e) => 'video' === e.type)) && void 0 !== i ? i : null) : null != n && (u = null !== (s = null == c ? void 0 : null === (a = c.inbound[n]) || void 0 === a ? void 0 : a.find((e) => 'video' === e.type)) && void 0 !== s ? s : null), (0, o.bU)(null == u ? void 0 : u.codec.name);
}
function C(e) {
    var t;
    return null != e.streamKey && null !== (t = h.Z.getRTCConnection(e.streamKey)) && void 0 !== t ? t : null;
}
function R(e) {
    var t, n;
    return null !== (n = null !== (t = e.channelId) && void 0 !== t ? t : p.Z.getVoiceChannelId()) && void 0 !== n ? n : null;
}
function P(e, t) {
    var n, r, o, l, p;
    let h;
    let P = (0, b.hp)(e),
        w = R(t),
        D = u.Z.getChannel(w),
        L = null != t.streamKey ? (0, s.my)(t.streamKey) : null,
        x = C(t),
        M = null != t.streamKey ? x : f.Z.getRTCConnection(),
        k = null != t.streamKey ? (null == x ? void 0 : null === (n = x.analyticsContext) || void 0 === n ? void 0 : n.streamApplication) : null,
        { resolution: j, fps: U } = c.Z.getState(),
        { gameName: G, gameId: B, exe: F, distributor: V } = (0, a.G8)(k),
        Z = P.isErrorOutbound,
        H = null !== (r = t.mediaContext) && void 0 !== r ? r : y.Yn.DEFAULT,
        W = null != L ? L.ownerId : t.userId,
        Y = null != L ? (null == M ? void 0 : M.getVoiceParticipantType()) : Z ? 'sender' : 'receiver';
    (h = null != t.streamKey && null != L ? (Z ? (null == M ? void 0 : null === (o = M.getOutboundStats()) || void 0 === o ? void 0 : o.find((e) => e.quality === y.y7)) : null == M ? void 0 : M.getInboundStats(L.ownerId)) : Z ? (null !== (p = i().maxBy(null !== (l = null == M ? void 0 : M.getOutboundStats()) && void 0 !== l ? l : [], (e) => e.num_frames)) && void 0 !== p ? p : null) : null != t.userId ? (null == M ? void 0 : M.getInboundStats(t.userId)) : null),
        (0, m.q)().then((n) => {
            var r, i, o, a, s, l, c, u, p, m, b, y, C, R, k, K, z, q, Q, X, J, $, ee, et, en, er, ei, eo, ea, es, el, ec, eu, ed, ef, e_, ep, eh, em, eg, eE, eb, ev, ey, eO, eI, eS, eT, eA, eN;
            let eC = {
                error_name: e.valueOf(),
                error_code: P.errorCode,
                error_severity: P.severity,
                error_category: P.category,
                underlying_error: null !== (u = t.underlyingError) && void 0 !== u ? u : null,
                error_message: null !== (p = t.errorMessage) && void 0 !== p ? p : null,
                guild_id: null !== (m = null == D ? void 0 : D.guild_id) && void 0 !== m ? m : null,
                channel_id: null != w ? w : null,
                channel_type: null !== (b = null == D ? void 0 : D.type) && void 0 !== b ? b : null,
                rtc_connection_id: null !== (y = t.rtcConnectionId) && void 0 !== y ? y : null,
                media_session_id: null !== (R = null !== (C = t.mediaSessionId) && void 0 !== C ? C : f.Z.getMediaSessionId()) && void 0 !== R ? R : null,
                parent_media_session_id: null !== (k = null == x ? void 0 : x.parentMediaSessionId) && void 0 !== k ? k : null,
                context: null !== (K = t.mediaContext) && void 0 !== K ? K : null,
                voice_backend_version: null !== (z = null === (r = f.Z.getRTCConnection()) || void 0 === r ? void 0 : r.getVoiceVersion()) && void 0 !== z ? z : null,
                rtc_worker_backend_version: null !== (q = null === (i = f.Z.getRTCConnection()) || void 0 === i ? void 0 : i.getRtcWorkerVersion()) && void 0 !== q ? q : null,
                guild_region: null !== (Q = _.Z.getRegion(f.Z.getHostname())) && void 0 !== Q ? Q : null,
                hostname: null !== (X = f.Z.getHostname()) && void 0 !== X ? X : null,
                duration: null !== (J = null == M ? void 0 : M.getDurationSeconds()) && void 0 !== J ? J : null,
                participant_type: null != Y ? Y : null,
                num_frames: null !== ($ = null == h ? void 0 : h.num_frames) && void 0 !== $ ? $ : 0,
                num_packets: null !== (ee = null == h ? void 0 : h.num_packets) && void 0 !== ee ? ee : 0,
                num_bytes: null !== (et = null == h ? void 0 : h.num_bytes) && void 0 !== et ? et : 0,
                video_codec: null !== (en = t.videoCodec) && void 0 !== en ? en : N(H, Z, W),
                video_encoder: null !== (ei = null !== (er = t.videoEncoder) && void 0 !== er ? er : T(H)) && void 0 !== ei ? ei : null,
                video_decoder: null !== (ea = null !== (eo = t.videoDecoder) && void 0 !== eo ? eo : A(H, W)) && void 0 !== ea ? ea : null,
                audio_capture_sample_rate_mismatch_percent: null !== (es = t.audioCaptureSampleRateMismatchPercent) && void 0 !== es ? es : null,
                sender_user_id: null !== (el = null == L ? void 0 : L.ownerId) && void 0 !== el ? el : null,
                stream_region: null !== (ec = null == x ? void 0 : x.getRegion()) && void 0 !== ec ? ec : null,
                stream_source_type: Z && null !== (eu = null == x ? void 0 : null === (o = x.analyticsContext) || void 0 === o ? void 0 : o.streamSourceType) && void 0 !== eu ? eu : null,
                num_stream_viewers: null !== (ed = null == x ? void 0 : null === (a = x.analyticsContext) || void 0 === a ? void 0 : a.numViewers) && void 0 !== ed ? ed : null,
                video_input_resolution_height: Z && null != j ? j : null,
                video_input_frame_rate: Z && null != U ? U : null,
                screenshare_capture_method: S(),
                share_application_name: null != G ? G : null,
                share_application_id: null != B ? B : null,
                share_application_executable: null != F ? F : null,
                share_application_distributor: null != V ? V : null,
                cpu_brand: null !== (ef = null == n ? void 0 : n.cpu_brand) && void 0 !== ef ? ef : null,
                cpu_vendor: null !== (e_ = null == n ? void 0 : n.cpu_vendor) && void 0 !== e_ ? e_ : null,
                cpu_memory: null !== (ep = null == n ? void 0 : n.cpu_memory) && void 0 !== ep ? ep : null,
                gpu_brand: null !== (eh = null == n ? void 0 : n.gpu_brand) && void 0 !== eh ? eh : null,
                gpu_count: null !== (em = null == n ? void 0 : n.gpu_count) && void 0 !== em ? em : null,
                gpu_memory: null !== (eg = null == n ? void 0 : n.gpu_memory) && void 0 !== eg ? eg : null,
                gpu_device_vendor_id: null !== (eE = null == n ? void 0 : n.gpu_device_vendor_id) && void 0 !== eE ? eE : null,
                gpu_device_device_id: null !== (eb = null == n ? void 0 : n.gpu_device_device_id) && void 0 !== eb ? eb : null,
                gpu_device_sub_sys_id: null !== (ev = null == n ? void 0 : n.gpu_device_sub_sys_id) && void 0 !== ev ? ev : null,
                gpu_device_revision: null !== (ey = null == n ? void 0 : n.gpu_device_revision) && void 0 !== ey ? ey : null,
                gpu_driver_version: null !== (eO = null == n ? void 0 : n.gpu_driver_version) && void 0 !== eO ? eO : null,
                cpu_usage: null !== (eI = E.Z.getCurrentCPUUsagePercent()) && void 0 !== eI ? eI : null,
                memory_usage: null !== (eS = E.Z.getCurrentMemoryUsageKB()) && void 0 !== eS ? eS : null,
                outbound_bitrate_estimate: O(H),
                inbound_bitrate_estimate: I(H),
                hardware_enabled: d.Z.getHardwareEncoding(),
                audio_input_device_name: null !== (eT = t.audioInputDeviceName) && void 0 !== eT ? eT : null === (s = d.Z.getInputDevices()[d.Z.getInputDeviceId()]) || void 0 === s ? void 0 : s.name,
                audio_output_device_name: null !== (eA = t.audioOutputDeviceName) && void 0 !== eA ? eA : null === (l = d.Z.getOutputDevices()[d.Z.getOutputDeviceId()]) || void 0 === l ? void 0 : l.name,
                video_device_name: null !== (eN = t.videoDeviceName) && void 0 !== eN ? eN : null === (c = d.Z.getVideoDevices()[d.Z.getVideoDeviceId()]) || void 0 === c ? void 0 : c.name,
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
            g.default.track(v.rMx.AV_ERROR_REPORTED, eC);
        });
}
