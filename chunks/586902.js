n.d(t, {
    O: () => u,
    Z: () => c,
}),
    n(388685);
var r = n(442837),
    i = n(763296),
    a = n(944486),
    o = n(606304),
    s = n(979651);
function l(e, t, n) {
    return e || t || n;
}
function c(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: c = !0, checkIsMuted: u = !1, context: d } = e,
        f = (0, r.e7)([s.Z, a.Z], () => {
            let e = a.Z.getVoiceChannelId();
            return null != e ? s.Z.getVoiceStateForChannel(e, t) : null;
        }),
        p = u && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)),
        _ = (0, r.e7)([o.Z], () => o.Z.isSpeaking(t, d) && !p),
        m = (0, r.e7)([o.Z], () => o.Z.isSoundSharing(t) && n);
    return l(
        _,
        (0, r.e7)([i.Z], () => i.Z.isUserPlayingSounds(t) && c),
        m,
    );
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: r = !0, checkIsMuted: c = !1, context: u } = e,
        [d, f, p, _] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, a.Z, o.Z, i.Z],
        m = f.getVoiceChannelId(),
        h = null != m ? d.getVoiceStateForChannel(m, t) : null,
        g = c && ((null == h ? void 0 : h.mute) || (null == h ? void 0 : h.selfMute)),
        E = p.isSpeaking(t, u) && !g,
        b = p.isSoundSharing(t) && n;
    return l(E, _.isUserPlayingSounds(t) && r, b);
}
