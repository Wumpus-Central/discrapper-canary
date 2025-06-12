n.d(t, {
    O: () => u,
    Z: () => c
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
        _ = (0, r.e7)([s.Z, a.Z], () => {
            let e = a.Z.getVoiceChannelId();
            return null != e ? s.Z.getVoiceStateForChannel(e, t) : null;
        }),
        f = u && ((null == _ ? void 0 : _.mute) || (null == _ ? void 0 : _.selfMute)),
        p = (0, r.e7)([o.Z], () => o.Z.isSpeaking(t, d) && !f),
        h = (0, r.e7)([o.Z], () => o.Z.isSoundSharing(t) && n);
    return l(
        p,
        (0, r.e7)([i.Z], () => i.Z.isUserPlayingSounds(t) && c),
        h
    );
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: r = !0, checkIsMuted: c = !1, context: u } = e,
        [d, _, f, p] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, a.Z, o.Z, i.Z],
        h = _.getVoiceChannelId(),
        m = null != h ? d.getVoiceStateForChannel(h, t) : null,
        g = c && ((null == m ? void 0 : m.mute) || (null == m ? void 0 : m.selfMute)),
        E = f.isSpeaking(t, u) && !g,
        b = f.isSoundSharing(t) && n;
    return l(E, p.isUserPlayingSounds(t) && r, b);
}
