r.d(n, {
    Z: function () {
        return f;
    },
    b: function () {
        return d;
    }
});
var i = r(442837),
    a = r(160404),
    s = r(314897),
    o = r(131951),
    l = r(496675),
    u = r(979651),
    c = r(981631);
function d(e) {
    var n;
    let { channel: r, authenticationStore: i = s.default, voiceStateStore: d = u.Z, mediaEngineStore: f = o.Z, permissionStore: _ = l.Z, impersonateStore: h = a.Z } = e,
        p = null != r ? d.getVoiceState(r.getGuildId(), i.getId()) : null,
        m = f.isSelfMute() || f.isSelfMutedTemporarily(),
        g = null == r ? void 0 : r.getGuildId(),
        E = h.isViewingRoles(g) && !_.can(c.Plq.SPEAK, r);
    return {
        selfMute: m,
        suppress: (null == p ? void 0 : p.suppress) || E,
        mute: null !== (n = null == p ? void 0 : p.mute) && void 0 !== n && n
    };
}
function f(e) {
    return (0, i.cj)([s.default, u.Z, o.Z, l.Z, a.Z], () =>
        d({
            channel: e,
            authenticationStore: s.default,
            voiceStateStore: u.Z,
            mediaEngineStore: o.Z,
            permissionStore: l.Z,
            impersonateStore: a.Z
        })
    );
}
