n.d(t, {
    O: () => u,
    Z: () => c
});
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
        p = u && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)),
        _ = (0, r.e7)([a.Z], () => a.Z.isSpeaking(t, d) && !p),
        h = (0, r.e7)([a.Z], () => a.Z.isSoundSharing(t) && n);
    return l(
        _,
        (0, r.e7)([i.Z], () => i.Z.isUserPlayingSounds(t) && c),
        h
    );
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: r = !0, checkIsMuted: c = !1, context: u } = e,
        d = o.Z.getVoiceChannelId(),
        f = null != d ? s.Z.getVoiceStateForChannel(d, t) : null,
        p = c && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)),
        _ = a.Z.isSpeaking(t, u) && !p,
        h = a.Z.isSoundSharing(t) && n;
    return l(_, i.Z.isUserPlayingSounds(t) && r, h);
}
