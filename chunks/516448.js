n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(313201),
    l = n(723047),
    o = n(727843),
    c = n(290348),
    d = n(164000),
    u = n(783454),
    m = n(862319),
    g = n(140285),
    p = n(390583),
    h = n(641249),
    f = n(574085),
    b = n(293810),
    x = n(388032),
    j = n(301849);
function N(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: N } = (0, o.N)(),
        [_, v] = c.UE(n),
        [C, O] = c.R7(n),
        y = i.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: I } = (0, d.Z)(N),
        E = (0, a.Dt)(),
        S = (0, l.mY)();
    return (0, r.jsxs)(u.Z, {
        title: x.NW.string(x.t.YNw2Sk),
        description: x.NW.string(x.t.zMW5r6),
        children: [
            (0, r.jsxs)(s.hjN, {
                title: x.NW.string(x.t.DFlDaG),
                disabled: S,
                children: [
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        className: j.formDescription,
                        disabled: S,
                        children: x.NW.string(x.t.kHalVF)
                    }),
                    (0, r.jsx)(m.Z, {
                        channelBenefits: _,
                        intangibleBenefits: C,
                        subscriptionListings: y,
                        onImport: function (e, t) {
                            v((t) => t.concat(e)), O((e) => e.concat(t));
                        }
                    }),
                    (0, r.jsx)(s.LZC, { size: 8 }),
                    (0, r.jsx)(m.w, {
                        guildId: N,
                        onImport: function (e) {
                            v((t) => {
                                let n = new Set(
                                    t.map((e) => {
                                        let { ref_id: t } = e;
                                        return t;
                                    })
                                );
                                return [
                                    ...t,
                                    ...e
                                        .filter((e) => !n.has(e))
                                        .map((e) => ({
                                            ref_id: e,
                                            ref_type: b.Qs.CHANNEL
                                        }))
                                ];
                            });
                        },
                        disabled: S
                    })
                ]
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsxs)(s.hjN, {
                title: x.NW.string(x.t.S2kKzM),
                titleId: E,
                disabled: S,
                children: [
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        className: j.formDescription,
                        disabled: S,
                        children: x.NW.string(x.t['5a4Axc'])
                    }),
                    I &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(g.Z, {
                                    'aria-labelledby': E,
                                    disabled: S
                                }),
                                (0, r.jsx)(s.LZC, { size: 8 })
                            ]
                        }),
                    (0, r.jsx)(p.Z, {})
                ]
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsxs)(s.hjN, {
                title: x.NW.string(x.t.RdwKw8),
                disabled: S,
                children: [
                    (0, r.jsx)(s.R94, {
                        type: s.R94.Types.DESCRIPTION,
                        className: j.formDescription,
                        disabled: S,
                        children: x.NW.string(x.t.zAww7e)
                    }),
                    (0, r.jsx)(f.Z, {})
                ]
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(h.Z, {})
        ]
    });
}
