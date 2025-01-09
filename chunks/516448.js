n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
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
    f = n(293810),
    C = n(388032),
    v = n(83701);
function N(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: N } = (0, o.N)(),
        [_, I] = c.UE(n),
        [T, j] = c.R7(n),
        b = r.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: E } = (0, d.Z)(N),
        S = (0, s.Dt)(),
        R = (0, a.mY)();
    return (0, i.jsxs)(u.Z, {
        title: C.intl.string(C.t.YNw2Sk),
        description: C.intl.string(C.t.zMW5r6),
        children: [
            (0, i.jsxs)(l.FormSection, {
                title: C.intl.string(C.t.DFlDaG),
                disabled: R,
                children: [
                    (0, i.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: v.formDescription,
                        disabled: R,
                        children: C.intl.string(C.t.kHalVF)
                    }),
                    (0, i.jsx)(m.Z, {
                        channelBenefits: _,
                        intangibleBenefits: T,
                        subscriptionListings: b,
                        onImport: function (e, t) {
                            I((t) => t.concat(e)), j((e) => e.concat(t));
                        }
                    }),
                    (0, i.jsx)(l.Spacer, { size: 8 }),
                    (0, i.jsx)(m.w, {
                        guildId: N,
                        onImport: function (e) {
                            I((t) => {
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
                                            ref_type: f.Qs.CHANNEL
                                        }))
                                ];
                            });
                        },
                        disabled: R
                    })
                ]
            }),
            (0, i.jsx)(l.Spacer, { size: 24 }),
            (0, i.jsxs)(l.FormSection, {
                title: C.intl.string(C.t.S2kKzM),
                titleId: S,
                disabled: R,
                children: [
                    (0, i.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: v.formDescription,
                        disabled: R,
                        children: C.intl.string(C.t['5a4Axc'])
                    }),
                    E &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(h.Z, {
                                    'aria-labelledby': S,
                                    disabled: R
                                }),
                                (0, i.jsx)(l.Spacer, { size: 8 })
                            ]
                        }),
                    (0, i.jsx)(g.Z, {})
                ]
            }),
            (0, i.jsx)(l.Spacer, { size: 24 }),
            (0, i.jsxs)(l.FormSection, {
                title: C.intl.string(C.t.RdwKw8),
                disabled: R,
                children: [
                    (0, i.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: v.formDescription,
                        disabled: R,
                        children: C.intl.string(C.t.zAww7e)
                    }),
                    (0, i.jsx)(p.Z, {})
                ]
            }),
            (0, i.jsx)(l.Spacer, { size: 24 }),
            (0, i.jsx)(x.Z, {})
        ]
    });
}
