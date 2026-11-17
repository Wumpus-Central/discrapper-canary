var i = e(477900),
    r = e(582128),
    l = e(503698),
    a = e.n(l),
    s = e(189213),
    o = e(683071),
    u = e(448645),
    c = e(580630),
    d = e(735164),
    m = e(24659),
    f = e(916974),
    p = e(792996),
    y = e(95068);
e.d(
    n,
    {},
    {
        E: () => {
            let {
                    transitionState: t,
                    planId: n,
                    renewalInvoice: e,
                    onClose: l,
                    handleCancellation: P,
                    renewalInvoiceDetails: g,
                    fullPrice: h,
                } = (0, f.X)(),
                [x, C] = r.useState(!1),
                [v, E] = r.useState(!1);
            if (null == e) return null;
            let b = [
                { text: p.intl.string(p.t.rzVN6j), onClick: () => l(), variant: "secondary" },
                {
                    text: `${p.intl.format(p.t.yxFzdO, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${n}`) })}`,
                    onClick: async function () {
                        (C(!0), E(!1));
                        try {
                            (await P(), l());
                        } catch (t) {
                            (E(!0), C(!1));
                        }
                    },
                    disabled: x,
                    variant: "critical-primary",
                    loading: x,
                },
            ];
            if (null == g) return null;
            let { intervalType: D, intervalCount: j } = g,
                N = null != h ? (0, c.CE)(`${h}`, D, j) : "";
            return (0, i.jsxs)(s.a, {
                size: "md",
                transitionState: t,
                title: `${p.intl.format(p.t.LZunzZ, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${n}`) })}`,
                subtitle:
                    0 !== e.total
                        ? p.intl.format(p.t.ycyeBx, {
                              renewalDate: e.subscriptionPeriodStart,
                              rate: (0, c.CE)((0, c.$g)(e.total, e.currency), D, j),
                          })
                        : p.intl.format(p.t["+y0Tjy"], { renewalDate: e.subscriptionPeriodStart }),
                actions: b,
                onClose: async () => l(),
                children: [
                    (0, i.jsxs)(d.Yx, {
                        isPremiumRebrand: !0,
                        className: a()({ [y.JD]: v }),
                        children: [
                            (0, i.jsx)(d.Xd, { children: p.intl.string(p.t.iqhIp4) }),
                            (0, i.jsx)(d.oR, {
                                label: p.intl.formatToPlainString(p.t.r3jVZq, {
                                    planName: u.Ay.getDisplayName(`${n}`),
                                }),
                                value: `${N}`,
                                className: y.aD,
                            }),
                            (0, i.jsx)(d.pK, {}),
                            (0, i.jsx)(m.Hc, { renewalInvoice: e, isUpdate: !0 }),
                        ],
                    }),
                    v
                        ? (0, i.jsx)(o.w, { type: "critical", message: p.intl.string(p.t["5mlOCW"]), role: "alert" })
                        : null,
                ],
            });
        },
    },
);
