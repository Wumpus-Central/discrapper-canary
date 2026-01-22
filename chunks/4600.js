n.d(t, { A: () => h }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(11351),
    a = n(306444),
    c = n(922975),
    o = n(389025),
    d = n(963175),
    u = n(600292),
    f = n(280433),
    g = n(179895),
    b = n(862651),
    m = n(585632),
    p = n(2242),
    x = n(985018);
function h(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: h } = (0, a.O)(),
        [j, O] = c.lZ(n),
        [y, v] = c.$O(n),
        A = i.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: E } = (0, o.A)(h),
        N = (0, s.gN)();
    return (0, r.jsx)(d.A, {
        title: x.intl.string(x.t.YNw2Sm),
        description: x.intl.string(x.t.zMW5r0),
        children: (0, r.jsxs)(l.BJc, {
            gap: 24,
            children: [
                (0, r.jsxs)(l.D0$, {
                    disabled: N,
                    label: x.intl.string(x.t.DFlDaE),
                    description: x.intl.string(x.t.kHalVA),
                    children: [
                        (0, r.jsx)(u.A, {
                            channelBenefits: j,
                            intangibleBenefits: y,
                            subscriptionListings: A,
                            onImport: function (e, t) {
                                O((t) => t.concat(e)), v((e) => e.concat(t));
                            },
                        }),
                        (0, r.jsx)(u.q, {
                            guildId: h,
                            onImport: function (e) {
                                O((t) => {
                                    let n = new Set(
                                        t.map((e) => {
                                            let { ref_id: t } = e;
                                            return t;
                                        }),
                                    );
                                    return [
                                        ...t,
                                        ...e
                                            .filter((e) => !n.has(e))
                                            .map((e) => ({
                                                ref_id: e,
                                                ref_type: p.bN.CHANNEL,
                                            })),
                                    ];
                                });
                            },
                            disabled: N,
                        }),
                    ],
                }),
                (0, r.jsx)(l.D0$, {
                    label: x.intl.string(x.t.S2kKzP),
                    description: x.intl.string(x.t["5a4AxV"]),
                    disabled: N,
                    children: (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                E &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(f.A, {
                                                "aria-labelledby": e.labelId,
                                                disabled: N,
                                            }),
                                            (0, r.jsx)(l.hKd, { size: 8 }),
                                        ],
                                    }),
                                (0, r.jsx)(g.A, {}),
                            ],
                        }),
                }),
                (0, r.jsx)(l.D0$, {
                    label: x.intl.string(x.t.RdwKw7),
                    description: x.intl.string(x.t.zAww7V),
                    disabled: N,
                    children: (0, r.jsx)(m.A, {}),
                }),
                (0, r.jsx)(b.A, {}),
            ],
        }),
    });
}
