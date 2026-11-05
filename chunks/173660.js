var i = n(855986),
    r = n(164956),
    a = n(46653),
    s = n(754712),
    l = n(576705),
    o = n(977997),
    d = n(652215);
function c(e) {
    let {
            channel: t,
            authenticationStore: n = a.default,
            voiceStateStore: i = o.A,
            mediaEngineStore: c = s.Ay,
            permissionStore: u = l.A,
            impersonateStore: _ = r.A,
        } = e,
        E = null != t ? i.getVoiceState(t.getGuildId(), n.getId()) : null,
        A = c.isSelfMute() || c.isSelfMutedTemporarily(),
        h = t?.getGuildId(),
        f = _.isViewingRoles(h) && !u.can(d.xBc.SPEAK, t);
    return { selfMute: A, suppress: E?.suppress || f, mute: E?.mute ?? !1 };
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.cf)([a.default, o.A, s.Ay, l.A, r.A], () =>
                c({
                    channel: e,
                    authenticationStore: a.default,
                    voiceStateStore: o.A,
                    mediaEngineStore: s.Ay,
                    permissionStore: l.A,
                    impersonateStore: r.A,
                }),
            );
        },
        k: c,
    },
);
