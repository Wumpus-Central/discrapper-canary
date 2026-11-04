var i = t(477900);
t(582128);
var r = t(855986),
    s = t(477782),
    o = t(192308),
    d = t(49229),
    l = t(994500),
    u = t(287809),
    a = t(652215),
    c = t(792996);
t.d(
    n,
    {},
    {
        A: function (e) {
            let {
                    user: n,
                    guildId: g,
                    channelId: p,
                    onBlock: h,
                    onIgnore: k,
                    onUnignore: b,
                    location: A = "ContextMenu",
                    appContext: I = a.BRT.APP,
                } = e,
                { id: f } = n,
                w = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.id === f, [f]),
                { isIgnored: B, isBlocked: C } = (0, r.cf)(
                    [l.A],
                    () => ({ isIgnored: l.A.isIgnored(f), isBlocked: l.A.isBlocked(f) }),
                    [f],
                );
            return w || C
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "ignore",
                      label: B ? c.intl.string(c.t["8wXU9B"]) : c.intl.string(c.t.ytCpKs),
                      action: B
                          ? () => {
                                (b?.(), d.A.unignoreUser(f, A ?? "use-ignore-user-item-web", p ?? void 0));
                            }
                          : () => {
                                (0, o.mM)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            t.e(337375),
                                            t.e(847727),
                                            t.e(283887),
                                            t.e(363618),
                                            t.e(600607),
                                            t.e(512755),
                                            t.e(826696),
                                        ]).then(t.bind(t, 143547));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                guildId: g,
                                                channelId: p,
                                                user: n,
                                                onIgnore: k,
                                                onBlock: h,
                                                location: A,
                                            });
                                    },
                                    { contextKey: (0, o.TI)(I) },
                                );
                            },
                  });
        },
    },
);
