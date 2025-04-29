n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    s = n(313201),
    a = n(723047),
    o = n(727843),
    c = n(290348),
    u = n(164000),
    d = n(783454),
    m = n(862319),
    g = n(140285),
    p = n(390583),
    h = n(641249),
    f = n(574085),
    x = n(293810),
    b = n(388032),
    j = n(301849);
function _(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: _ } = (0, o.N)(),
        [v, O] = c.UE(n),
        [C, y] = c.R7(n),
        N = i.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: I } = (0, u.Z)(_),
        E = (0, s.Dt)(),
        S = (0, a.mY)();
    return (0, r.jsxs)(d.Z, {
        title: b.intl.string(b.t.YNw2Sk),
        description: b.intl.string(b.t.zMW5r6),
        children: [
            (0, r.jsxs)(l.hjN, {
                title: b.intl.string(b.t.DFlDaG),
                disabled: S,
                children: [
                    (0, r.jsx)(l.R94, {
                        type: l.R94.Types.DESCRIPTION,
                        className: j.formDescription,
                        disabled: S,
                        children: b.intl.string(b.t.kHalVF)
                    }),
                    (0, r.jsx)(m.Z, {
                        channelBenefits: v,
                        intangibleBenefits: C,
                        subscriptionListings: N,
                        onImport: function (e, t) {
                            O((t) => t.concat(e)), y((e) => e.concat(t));
                        }
                    }),
                    (0, r.jsx)(l.LZC, { size: 8 }),
                    (0, r.jsx)(m.w, {
                        guildId: _,
                        onImport: function (e) {
                            O((t) => {
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
                                            ref_type: x.Qs.CHANNEL
                                        }))
                                ];
                            });
                        },
                        disabled: S
                    })
                ]
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsxs)(l.hjN, {
                title: b.intl.string(b.t.S2kKzM),
                titleId: E,
                disabled: S,
                children: [
                    (0, r.jsx)(l.R94, {
                        type: l.R94.Types.DESCRIPTION,
                        className: j.formDescription,
                        disabled: S,
                        children: b.intl.string(b.t['5a4Axc'])
                    }),
                    I &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(g.Z, {
                                    'aria-labelledby': E,
                                    disabled: S
                                }),
                                (0, r.jsx)(l.LZC, { size: 8 })
                            ]
                        }),
                    (0, r.jsx)(p.Z, {})
                ]
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsxs)(l.hjN, {
                title: b.intl.string(b.t.RdwKw8),
                disabled: S,
                children: [
                    (0, r.jsx)(l.R94, {
                        type: l.R94.Types.DESCRIPTION,
                        className: j.formDescription,
                        disabled: S,
                        children: b.intl.string(b.t.zAww7e)
                    }),
                    (0, r.jsx)(f.Z, {})
                ]
            }),
            (0, r.jsx)(l.LZC, { size: 24 }),
            (0, r.jsx)(h.Z, {})
        ]
    });
}
