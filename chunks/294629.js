n.d(t, {
    Z: () => d,
    b: () => u,
});
var r = n(442837),
    i = n(160404),
    a = n(314897),
    o = n(131951),
    s = n(496675),
    l = n(979651),
    c = n(981631);
function u(e) {
    var t;
    let {
            channel: n,
            authenticationStore: r = a.default,
            voiceStateStore: u = l.Z,
            mediaEngineStore: d = o.Z,
            permissionStore: f = s.Z,
            impersonateStore: p = i.Z,
        } = e,
        _ = null != n ? u.getVoiceState(n.getGuildId(), r.getId()) : null,
        m = d.isSelfMute() || d.isSelfMutedTemporarily(),
        h = null == n ? void 0 : n.getGuildId(),
        g = p.isViewingRoles(h) && !f.can(c.Plq.SPEAK, n);
    return {
        selfMute: m,
        suppress: (null == _ ? void 0 : _.suppress) || g,
        mute: null != (t = null == _ ? void 0 : _.mute) && t,
    };
}
function d(e) {
    return (0, r.cj)([a.default, l.Z, o.Z, s.Z, i.Z], () =>
        u({
            channel: e,
            authenticationStore: a.default,
            voiceStateStore: l.Z,
            mediaEngineStore: o.Z,
            permissionStore: s.Z,
            impersonateStore: i.Z,
        }),
    );
}
