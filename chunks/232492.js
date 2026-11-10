var l = n(855986),
    o = n(963027),
    i = n(262763),
    r = n(976860),
    u = n(734057),
    a = n(977997),
    s = n(499211),
    c = n(652215);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, l.bG)([u.A], () => u.A.getChannel(t)),
                { needSubscriptionToAccess: d } = (0, s.A)(n?.id);
            if (null == n || d || n.isObfuscated()) return null;
            let C = n.isGuildVocal();
            return {
                navigateToChannel: function () {
                    null != n &&
                        (C
                            ? i.A.handleVoiceConnect({
                                  channel: n,
                                  connected: a.A.isInChannel(n.id),
                                  needSubscriptionToAccess: !1,
                                  routeDirectlyToChannel: !0,
                              })
                            : (0, r.pX)(c.BVt.CHANNEL(e, n.id)));
                },
                ariaLabel: (0, o.Ay)({ channel: n }),
            };
        },
    },
);
