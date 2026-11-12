var l = t(855986),
    n = t(963027),
    r = t(262763),
    s = t(976860),
    i = t(734057),
    u = t(977997),
    o = t(499211),
    c = t(652215);
t.d(
    a,
    {},
    {
        A: function (e, a) {
            let t = (0, l.bG)([i.A], () => i.A.getChannel(a)),
                { needSubscriptionToAccess: h } = (0, o.A)(t?.id);
            if (null == t || h || t.isObfuscated()) return null;
            let d = t.isGuildVocal();
            return {
                navigateToChannel: function () {
                    null != t &&
                        (d
                            ? r.A.handleVoiceConnect({
                                  channel: t,
                                  connected: u.A.isInChannel(t.id),
                                  needSubscriptionToAccess: !1,
                                  routeDirectlyToChannel: !0,
                              })
                            : (0, s.pX)(c.BVt.CHANNEL(e, t.id)));
                },
                ariaLabel: (0, n.Ay)({ channel: t }),
            };
        },
    },
);
