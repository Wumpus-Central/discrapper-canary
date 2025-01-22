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
    o = r(314897),
    s = r(131951),
    l = r(496675),
    u = r(979651),
    c = r(981631);
function d(e) {
    var n;
    let { channel: r, authenticationStore: i = o.default, voiceStateStore: d = u.Z, mediaEngineStore: f = s.Z, permissionStore: p = l.Z, impersonateStore: h = a.Z } = e,
        _ = null != r ? d.getVoiceState(r.getGuildId(), i.getId()) : null,
        m = f.isSelfMute() || f.isSelfMutedTemporarily(),
        g = null == r ? void 0 : r.getGuildId(),
        E = h.isViewingRoles(g) && !p.can(c.Plq.SPEAK, r);
    return {
        selfMute: m,
        suppress: (null == _ ? void 0 : _.suppress) || E,
        mute: null !== (n = null == _ ? void 0 : _.mute) && void 0 !== n && n
    };
}
function f(e) {
    return (0, i.cj)([o.default, u.Z, s.Z, l.Z, a.Z], () =>
        d({
            channel: e,
            authenticationStore: o.default,
            voiceStateStore: u.Z,
            mediaEngineStore: s.Z,
            permissionStore: l.Z,
            impersonateStore: a.Z
        })
    );
}
