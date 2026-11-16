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
    y = e(792996),
    p = e(95068);
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
                    handleCancellation: C,
                    renewalInvoiceDetails: g,
                    fullPrice: h,
                } = (0, f.X)(),
                [P, x] = r.useState(!1),
                [v, E] = r.useState(!1);
            if (null == e) return null;
            let D = [
                { text: y.intl.string(y.t.rzVN6j), onClick: () => l(), variant: "secondary" },
                {
                    text: `${y.intl.format(y.t.yxFzdO, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${n}`) })}`,
                    onClick: async function () {
                        (x(!0), E(!1));
                        try {
                            (await C(), l());
                        } catch (t) {
                            (E(!0), x(!1));
                        }
                    },
                    disabled: P,
                    variant: "critical-primary",
                    loading: P,
                },
            ];
            if (null == g) return null;
            let { intervalType: b, intervalCount: A } = g,
                N = null != h ? (0, c.CE)(`${h}`, b, A) : "";
            return (0, i.jsxs)(s.a, {
                size: "md",
                transitionState: t,
                title: `${y.intl.format(y.t.LZunzZ, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${n}`) })}`,
                subtitle:
                    0 !== e.total
                        ? y.intl.format(y.t.ycyeBx, {
                              renewalDate: e.subscriptionPeriodStart,
                              rate: (0, c.CE)((0, c.$g)(e.total, e.currency), b, A),
                          })
                        : y.intl.format(y.t["+y0Tjy"], { renewalDate: e.subscriptionPeriodStart }),
                actions: D,
                onClose: async () => l(),
                children: [
                    (0, i.jsxs)(d.Yx, {
                        isPremiumRebrand: !0,
                        className: a()({ [p.JD]: v }),
                        children: [
                            (0, i.jsx)(d.Xd, { children: y.intl.string(y.t.iqhIp4) }),
                            (0, i.jsx)(d.oR, {
                                label: y.intl.formatToPlainString(y.t.r3jVZq, {
                                    planName: u.Ay.getDisplayName(`${n}`),
                                }),
                                value: `${N}`,
                                className: p.aD,
                            }),
                            (0, i.jsx)(d.pK, {}),
                            (0, i.jsx)(m.Hc, { renewalInvoice: e, isUpdate: !0 }),
                        ],
                    }),
                    v
                        ? (0, i.jsx)(o.w, { type: "critical", message: y.intl.string(y.t["5mlOCW"]), role: "alert" })
                        : null,
                ],
            });
        },
    },
);
