n.d(t, {
    A: () => c,
    R: () => u,
}),
    n(896048);
var r = n(311907),
    i = n(209932),
    a = n(309010),
    s = n(485296),
    o = n(977997);
function l(e, t, n) {
    return e || t || n;
}
function c(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: c = !0, checkIsMuted: u = !1, context: d } = e,
        f = (0, r.bG)([o.A, a.A], () => {
            let e = a.A.getVoiceChannelId();
            return null != e ? o.A.getVoiceStateForChannel(e, t) : null;
        }),
        p = u && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)),
        _ = (0, r.bG)([s.A], () => s.A.isSpeaking(t, d) && !p),
        h = (0, r.bG)([s.A], () => s.A.isSoundSharing(t) && n);
    return l(
        _,
        (0, r.bG)([i.A], () => i.A.isUserPlayingSounds(t) && c),
        h,
    );
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: r = !0, checkIsMuted: c = !1, context: u } = e,
        [d, f, p, _] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A, a.A, s.A, i.A],
        h = f.getVoiceChannelId(),
        m = null != h ? d.getVoiceStateForChannel(h, t) : null,
        g = c && ((null == m ? void 0 : m.mute) || (null == m ? void 0 : m.selfMute)),
        E = p.isSpeaking(t, u) && !g,
        b = p.isSoundSharing(t) && n;
    return l(E, _.isUserPlayingSounds(t) && r, b);
}
