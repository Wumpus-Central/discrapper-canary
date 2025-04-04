n.d(t, {
    O: () => u,
    Z: () => c
}),
    n(47120);
var r = n(442837),
    i = n(763296),
    o = n(944486),
    a = n(606304),
    s = n(979651);
function l(e, t, n) {
    return e || t || n;
}
function c(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: c = !0, checkIsMuted: u = !1, context: d } = e,
        f = (0, r.e7)([s.Z, o.Z], () => {
            let e = o.Z.getVoiceChannelId();
            return null != e ? s.Z.getVoiceStateForChannel(e, t) : null;
        }),
        _ = u && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)),
        p = (0, r.e7)([a.Z], () => a.Z.isSpeaking(t, d) && !_),
        h = (0, r.e7)([a.Z], () => a.Z.isSoundSharing(t) && n);
    return l(
        p,
        (0, r.e7)([i.Z], () => i.Z.isUserPlayingSounds(t) && c),
        h
    );
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: r = !0, checkIsMuted: c = !1, context: u } = e,
        [d, f, _, p] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, o.Z, a.Z, i.Z],
        h = f.getVoiceChannelId(),
        m = null != h ? d.getVoiceStateForChannel(h, t) : null,
        g = c && ((null == m ? void 0 : m.mute) || (null == m ? void 0 : m.selfMute)),
        E = _.isSpeaking(t, u) && !g,
        b = _.isSoundSharing(t) && n;
    return l(E, p.isUserPlayingSounds(t) && r, b);
}
