n.d(t, {
    Z: () => d,
    b: () => u
});
var r = n(442837),
    i = n(160404),
    o = n(314897),
    a = n(131951),
    s = n(496675),
    l = n(979651),
    c = n(981631);
function u(e) {
    var t;
    let { channel: n, authenticationStore: r = o.default, voiceStateStore: u = l.Z, mediaEngineStore: d = a.Z, permissionStore: f = s.Z, impersonateStore: p = i.Z } = e,
        _ = null != n ? u.getVoiceState(n.getGuildId(), r.getId()) : null,
        h = d.isSelfMute() || d.isSelfMutedTemporarily(),
        m = null == n ? void 0 : n.getGuildId(),
        g = p.isViewingRoles(m) && !f.can(c.Plq.SPEAK, n);
    return {
        selfMute: h,
        suppress: (null == _ ? void 0 : _.suppress) || g,
        mute: null !== (t = null == _ ? void 0 : _.mute) && void 0 !== t && t
    };
}
function d(e) {
    return (0, r.cj)([o.default, l.Z, a.Z, s.Z, i.Z], () =>
        u({
            channel: e,
            authenticationStore: o.default,
            voiceStateStore: l.Z,
            mediaEngineStore: a.Z,
            permissionStore: s.Z,
            impersonateStore: i.Z
        })
    );
}
