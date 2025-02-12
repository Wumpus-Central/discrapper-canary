n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(313201),
    a = n(723047),
    o = n(727843),
    c = n(290348),
    d = n(164000),
    u = n(783454),
    m = n(862319),
    h = n(140285),
    g = n(390583),
    x = n(641249),
    p = n(574085),
    _ = n(293810),
    C = n(388032),
    f = n(270614);
function v(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: v } = (0, o.N)(),
        [N, j] = c.UE(n),
        [I, E] = c.R7(n),
        b = r.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: T } = (0, d.Z)(v),
        S = (0, s.Dt)(),
        R = (0, a.mY)();
    return (0, i.jsxs)(u.Z, {
        title: C.intl.string(C.t.YNw2Sk),
        description: C.intl.string(C.t.zMW5r6),
        children: [
            (0, i.jsxs)(l.hjN, {
                title: C.intl.string(C.t.DFlDaG),
                disabled: R,
                children: [
                    (0, i.jsx)(l.R94, {
                        type: l.R94.Types.DESCRIPTION,
                        className: f.formDescription,
                        disabled: R,
                        children: C.intl.string(C.t.kHalVF)
                    }),
                    (0, i.jsx)(m.Z, {
                        channelBenefits: N,
                        intangibleBenefits: I,
                        subscriptionListings: b,
                        onImport: function (e, t) {
                            j((t) => t.concat(e)), E((e) => e.concat(t));
                        }
                    }),
                    (0, i.jsx)(l.LZC, { size: 8 }),
                    (0, i.jsx)(m.w, {
                        guildId: v,
                        onImport: function (e) {
                            j((t) => {
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
                                            ref_type: _.Qs.CHANNEL
                                        }))
                                ];
                            });
                        },
                        disabled: R
                    })
                ]
            }),
            (0, i.jsx)(l.LZC, { size: 24 }),
            (0, i.jsxs)(l.hjN, {
                title: C.intl.string(C.t.S2kKzM),
                titleId: S,
                disabled: R,
                children: [
                    (0, i.jsx)(l.R94, {
                        type: l.R94.Types.DESCRIPTION,
                        className: f.formDescription,
                        disabled: R,
                        children: C.intl.string(C.t['5a4Axc'])
                    }),
                    T &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(h.Z, {
                                    'aria-labelledby': S,
                                    disabled: R
                                }),
                                (0, i.jsx)(l.LZC, { size: 8 })
                            ]
                        }),
                    (0, i.jsx)(g.Z, {})
                ]
            }),
            (0, i.jsx)(l.LZC, { size: 24 }),
            (0, i.jsxs)(l.hjN, {
                title: C.intl.string(C.t.RdwKw8),
                disabled: R,
                children: [
                    (0, i.jsx)(l.R94, {
                        type: l.R94.Types.DESCRIPTION,
                        className: f.formDescription,
                        disabled: R,
                        children: C.intl.string(C.t.zAww7e)
                    }),
                    (0, i.jsx)(p.Z, {})
                ]
            }),
            (0, i.jsx)(l.LZC, { size: 24 }),
            (0, i.jsx)(x.Z, {})
        ]
    });
}
