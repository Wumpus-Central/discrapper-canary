n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(331322),
    r = n(452027),
    a = n(696986),
    o = n(11351),
    d = n(306444),
    c = n(922975),
    u = n(389025),
    m = n(963175),
    g = n(600292),
    h = n(280433),
    x = n(179895),
    _ = n(862651),
    p = n(585632),
    A = n(2242),
    E = n(985018);
function f(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: f } = (0, d.O)(),
        [j, N] = c.lZ(n),
        [I, C] = c.$O(n),
        b = l.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: v } = (0, u.A)(f),
        S = (0, o.gN)();
    return (0, i.jsx)(m.A, {
        title: E.intl.string(E.t.YNw2Sm),
        description: E.intl.string(E.t.zMW5r0),
        children: (0, i.jsxs)(s.B, {
            gap: 24,
            children: [
                (0, i.jsxs)(r.D, {
                    disabled: S,
                    label: E.intl.string(E.t.DFlDaE),
                    description: E.intl.string(E.t.kHalVA),
                    children: [
                        (0, i.jsx)(g.A, {
                            channelBenefits: j,
                            intangibleBenefits: I,
                            subscriptionListings: b,
                            onImport: function (e, t) {
                                N((t) => t.concat(e)), C((e) => e.concat(t));
                            },
                        }),
                        (0, i.jsx)(g.q, {
                            guildId: f,
                            onImport: function (e) {
                                N((t) => {
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
                                            .map((e) => ({ ref_id: e, ref_type: A.bN.CHANNEL })),
                                    ];
                                });
                            },
                            disabled: S,
                        }),
                    ],
                }),
                (0, i.jsx)(r.D, {
                    label: E.intl.string(E.t.S2kKzP),
                    description: E.intl.string(E.t["5a4AxV"]),
                    disabled: S,
                    children: (e) =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                v &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(h.A, { "aria-labelledby": e.labelId, disabled: S }),
                                            (0, i.jsx)(a.h, { size: 8 }),
                                        ],
                                    }),
                                (0, i.jsx)(x.A, {}),
                            ],
                        }),
                }),
                (0, i.jsx)(r.D, {
                    label: E.intl.string(E.t.RdwKw7),
                    description: E.intl.string(E.t.zAww7V),
                    disabled: S,
                    children: (0, i.jsx)(p.A, {}),
                }),
                (0, i.jsx)(_.A, {}),
            ],
        }),
    });
}
