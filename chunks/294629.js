n.d(t, {
    Z: () => d,
    b: () => c
});
var i = n(442837),
    r = n(160404),
    a = n(314897),
    s = n(131951),
    o = n(496675),
    l = n(979651),
    u = n(981631);
function c(e) {
    var t;
    let { channel: n, authenticationStore: i = a.default, voiceStateStore: c = l.Z, mediaEngineStore: d = s.Z, permissionStore: f = o.Z, impersonateStore: _ = r.Z } = e,
        p = null != n ? c.getVoiceState(n.getGuildId(), i.getId()) : null,
        h = d.isSelfMute() || d.isSelfMutedTemporarily(),
        m = null == n ? void 0 : n.getGuildId(),
        g = _.isViewingRoles(m) && !f.can(u.Plq.SPEAK, n);
    return {
        selfMute: h,
        suppress: (null == p ? void 0 : p.suppress) || g,
        mute: null !== (t = null == p ? void 0 : p.mute) && void 0 !== t && t
    };
}
function d(e) {
    return (0, i.cj)([a.default, l.Z, s.Z, o.Z, r.Z], () =>
        c({
            channel: e,
            authenticationStore: a.default,
            voiceStateStore: l.Z,
            mediaEngineStore: s.Z,
            permissionStore: o.Z,
            impersonateStore: r.Z
        })
    );
}
