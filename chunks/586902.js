n.d(t, {
    O: () => c,
    Z: () => u
});
var i = n(442837),
    r = n(763296),
    a = n(944486),
    s = n(606304),
    o = n(979651);
function l(e, t, n) {
    return e || t || n;
}
function u(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: u = !0, checkIsMuted: c = !1, context: d } = e,
        f = (0, i.e7)([o.Z, a.Z], () => {
            let e = a.Z.getVoiceChannelId();
            return null != e ? o.Z.getVoiceStateForChannel(e, t) : null;
        }),
        _ = c && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)),
        p = (0, i.e7)([s.Z], () => s.Z.isSpeaking(t, d) && !_),
        h = (0, i.e7)([s.Z], () => s.Z.isSoundSharing(t) && n);
    return l(
        p,
        (0, i.e7)([r.Z], () => r.Z.isUserPlayingSounds(t) && u),
        h
    );
}
function c(e) {
    let { userId: t, checkSoundSharing: n = !1, checkSoundboardSounds: i = !0, checkIsMuted: u = !1, context: c } = e,
        d = a.Z.getVoiceChannelId(),
        f = null != d ? o.Z.getVoiceStateForChannel(d, t) : null,
        _ = u && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)),
        p = s.Z.isSpeaking(t, c) && !_,
        h = s.Z.isSoundSharing(t) && n;
    return l(p, r.Z.isUserPlayingSounds(t) && i, h);
}
