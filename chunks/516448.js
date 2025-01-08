n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(313201),
    s = n(723047),
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
function _(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: _ } = (0, o.N)(),
        [N, I] = c.UE(n),
        [T, j] = c.R7(n),
        b = r.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: S } = (0, d.Z)(_),
        E = (0, a.Dt)(),
        R = (0, s.mY)();
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
                        channelBenefits: N,
                        intangibleBenefits: T,
                        subscriptionListings: b,
                        onImport: function (e, t) {
                            I((t) => t.concat(e)), j((e) => e.concat(t));
                        }
                    }),
                    (0, i.jsx)(l.Spacer, { size: 8 }),
                    (0, i.jsx)(m.w, {
                        guildId: _,
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
                titleId: E,
                disabled: R,
                children: [
                    (0, i.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: v.formDescription,
                        disabled: R,
                        children: C.intl.string(C.t['5a4Axc'])
                    }),
                    S &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(h.Z, {
                                    'aria-labelledby': E,
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
