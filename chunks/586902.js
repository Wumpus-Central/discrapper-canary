r.d(n, {
    O: function () {
        return d;
    },
    Z: function () {
        return c;
    }
});
var i = r(442837),
    a = r(763296),
    o = r(944486),
    s = r(606304),
    l = r(979651);
function u(e, n, r) {
    return e || n || r;
}
function c(e) {
    let { userId: n, checkSoundSharing: r = !1, checkSoundboardSounds: c = !0, checkIsMuted: d = !1, context: f } = e,
        p = (0, i.e7)([l.Z, o.Z], () => {
            let e = o.Z.getVoiceChannelId();
            return null != e ? l.Z.getVoiceStateForChannel(e, n) : null;
        }),
        h = d && ((null == p ? void 0 : p.mute) || (null == p ? void 0 : p.selfMute)),
        _ = (0, i.e7)([s.Z], () => s.Z.isSpeaking(n, f) && !h),
        m = (0, i.e7)([s.Z], () => s.Z.isSoundSharing(n) && r);
    return u(
        _,
        (0, i.e7)([a.Z], () => a.Z.isUserPlayingSounds(n) && c),
        m
    );
}
function d(e) {
    let { userId: n, checkSoundSharing: r = !1, checkSoundboardSounds: i = !0, checkIsMuted: c = !1, context: d } = e,
        f = o.Z.getVoiceChannelId(),
        p = null != f ? l.Z.getVoiceStateForChannel(f, n) : null,
        h = c && ((null == p ? void 0 : p.mute) || (null == p ? void 0 : p.selfMute)),
        _ = s.Z.isSpeaking(n, d) && !h,
        m = s.Z.isSoundSharing(n) && r;
    return u(_, a.Z.isUserPlayingSounds(n) && i, m);
}
