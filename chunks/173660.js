n.d(t, {
    A: () => d,
    k: () => u,
});
var r = n(311907),
    i = n(164956),
    a = n(961350),
    s = n(430452),
    o = n(576705),
    l = n(977997),
    c = n(652215);

function u(e) {
    var t;
    let {
            channel: n,
            authenticationStore: r = a.default,
            voiceStateStore: u = l.A,
            mediaEngineStore: d = s.A,
            permissionStore: f = o.A,
            impersonateStore: p = i.A,
        } = e,
        _ = null != n ? u.getVoiceState(n.getGuildId(), r.getId()) : null,
        h = d.isSelfMute() || d.isSelfMutedTemporarily(),
        m = null == n ? void 0 : n.getGuildId(),
        g = p.isViewingRoles(m) && !f.can(c.xBc.SPEAK, n);
    return {
        selfMute: h,
        suppress: (null == _ ? void 0 : _.suppress) || g,
        mute: null != (t = null == _ ? void 0 : _.mute) && t,
    };
}

function d(e) {
    return (0, r.cf)([a.default, l.A, s.A, o.A, i.A], () =>
        u({
            channel: e,
            authenticationStore: a.default,
            voiceStateStore: l.A,
            mediaEngineStore: s.A,
            permissionStore: o.A,
            impersonateStore: i.A,
        }),
    );
}
