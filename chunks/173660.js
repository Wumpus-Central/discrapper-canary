var i = n(855986),
    r = n(164956),
    a = n(46653),
    s = n(988468),
    l = n(576705),
    o = n(977997),
    d = n(652215);
function c(e) {
    let {
            channel: t,
            AuthenticationStore: n = a.default,
            VoiceStateStore: i = o.A,
            MediaEngineStore: c = s.Ay,
            PermissionStore: u = l.A,
            ImpersonateStore: _ = r.A,
        } = e,
        E = null != t ? i.getVoiceState(t.getGuildId(), n.getId()) : null,
        A = c.isSelfMute() || c.isSelfMutedTemporarily(),
        f = t?.getGuildId(),
        h = _.isViewingRoles(f) && !u.can(d.xBc.SPEAK, t);
    return { selfMute: A, suppress: E?.suppress || h, mute: E?.mute ?? !1 };
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.cf)([a.default, o.A, s.Ay, l.A, r.A], () =>
                c({
                    channel: e,
                    AuthenticationStore: a.default,
                    VoiceStateStore: o.A,
                    MediaEngineStore: s.Ay,
                    PermissionStore: l.A,
                    ImpersonateStore: r.A,
                }),
            );
        },
        k: c,
    },
);
