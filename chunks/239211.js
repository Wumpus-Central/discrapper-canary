var l = n(477900);
n(582128);
var o = n(855986),
    a = n(477782),
    i = n(192308),
    d = n(49229),
    r = n(662502),
    s = n(994500),
    c = n(287809),
    u = n(652215),
    b = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    user: t,
                    guildId: k,
                    channelId: h,
                    onBlock: p,
                    onIgnore: f,
                    onUnblock: g,
                    location: A = "ContextMenu",
                    appContext: v = u.BRT.APP,
                } = e,
                { id: w } = t,
                x = (0, o.bG)([c.default], () => c.default.getCurrentUser()?.id === w, [w]),
                C = (0, o.bG)([s.A], () => s.A.isBlocked(w), [w]);
            return x
                ? null
                : (0, l.jsx)(a.Dr, {
                      id: "block",
                      color: (C ? "default" : "danger") ?? "default",
                      label: C ? b.intl.string(b.t.XyHpKH) : b.intl.string(b.t.l4Emac),
                      action: C
                          ? () => {
                                (g?.(),
                                    d.A.unblockUser(w, { location: A }, h ?? void 0),
                                    r.A.showUnblockSuccessToast(w, h ?? void 0));
                            }
                          : () => {
                                (0, i.mM)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e(337375),
                                            n.e(847727),
                                            n.e(283887),
                                            n.e(363618),
                                            n.e(820683),
                                            n.e(600607),
                                            n.e(512755),
                                            n.e(164501),
                                            n.e(826696),
                                        ]).then(n.bind(n, 796788));
                                        return (n) =>
                                            (0, l.jsx)(e, {
                                                ...n,
                                                user: t,
                                                guildId: k,
                                                channelId: h,
                                                onBlock: p,
                                                onIgnore: f,
                                                location: A,
                                            });
                                    },
                                    { contextKey: (0, i.TI)(v) },
                                );
                            },
                  });
        },
    },
);
