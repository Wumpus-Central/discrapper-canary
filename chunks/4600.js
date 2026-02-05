"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(11351),
    a = n(306444),
    o = n(922975),
    d = n(389025),
    c = n(963175),
    u = n(600292),
    m = n(280433),
    g = n(179895),
    x = n(862651),
    h = n(585632),
    _ = n(2242),
    A = n(985018);
function p(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: p } = (0, a.O)(),
        [f, j] = o.lZ(n),
        [N, E] = o.$O(n),
        b = s.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: T } = (0, d.A)(p),
        C = (0, r.gN)();
    return (0, i.jsx)(c.A, {
        title: A.intl.string(A.t.YNw2Sm),
        description: A.intl.string(A.t.zMW5r0),
        children: (0, i.jsxs)(l.BJc, {
            gap: 24,
            children: [
                (0, i.jsxs)(l.D0$, {
                    disabled: C,
                    label: A.intl.string(A.t.DFlDaE),
                    description: A.intl.string(A.t.kHalVA),
                    children: [
                        (0, i.jsx)(u.A, {
                            channelBenefits: f,
                            intangibleBenefits: N,
                            subscriptionListings: b,
                            onImport: function (e, t) {
                                j((t) => t.concat(e)), E((e) => e.concat(t));
                            },
                        }),
                        (0, i.jsx)(u.q, {
                            guildId: p,
                            onImport: function (e) {
                                j((t) => {
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
                                            .map((e) => ({ ref_id: e, ref_type: _.bN.CHANNEL })),
                                    ];
                                });
                            },
                            disabled: C,
                        }),
                    ],
                }),
                (0, i.jsx)(l.D0$, {
                    label: A.intl.string(A.t.S2kKzP),
                    description: A.intl.string(A.t["5a4AxV"]),
                    disabled: C,
                    children: (e) =>
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                T &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(m.A, { "aria-labelledby": e.labelId, disabled: C }),
                                            (0, i.jsx)(l.hKd, { size: 8 }),
                                        ],
                                    }),
                                (0, i.jsx)(g.A, {}),
                            ],
                        }),
                }),
                (0, i.jsx)(l.D0$, {
                    label: A.intl.string(A.t.RdwKw7),
                    description: A.intl.string(A.t.zAww7V),
                    disabled: C,
                    children: (0, i.jsx)(h.A, {}),
                }),
                (0, i.jsx)(x.A, {}),
            ],
        }),
    });
}
