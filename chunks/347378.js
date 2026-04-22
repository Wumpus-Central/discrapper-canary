i.d(e, { E: () => x });
var n = i(627968),
    r = i(64700),
    l = i(503698),
    a = i.n(l),
    s = i(189213),
    u = i(683071),
    o = i(927578),
    c = i(580630),
    d = i(735164),
    m = i(692440),
    f = i(916974),
    p = i(985018),
    g = i(690073);
let x = () => {
    let {
            transitionState: t,
            planId: e,
            renewalInvoice: i,
            onClose: l,
            handleCancellation: x,
            renewalInvoiceDetails: h,
            fullPrice: C,
            premiumSubscription: P,
        } = (0, f.X)(),
        [y, v] = r.useState(!1),
        [E, j] = r.useState(!1);
    if (null == i) return null;
    let _ = async () => {
            v(!0), j(!1);
            try {
                await x(), l();
            } catch (t) {
                j(!0), v(!1);
            }
        },
        D = [
            { text: p.intl.string(p.t.rzVN6j), onClick: () => l(), variant: "secondary" },
            {
                text: `${p.intl.format(p.t.yxFzdO, { planPremiumType: o.Ay.getTierDisplayNameByPlanId(`${e}`) })}`,
                onClick: _,
                disabled: y,
                variant: "critical-primary",
                loading: y,
            },
        ];
    if (null == h) return null;
    let { intervalType: N, intervalCount: S } = h,
        A = (0, c.CE)(`${C}`, N, S);
    return (0, n.jsxs)(s.Modal, {
        size: "md",
        transitionState: t,
        title: `${p.intl.format(p.t.LZunzZ, { planPremiumType: o.Ay.getTierDisplayNameByPlanId(`${e}`) })}`,
        subtitle:
            0 !== i.total
                ? p.intl.format(p.t.ycyeBx, {
                      renewalDate: i.subscriptionPeriodStart,
                      rate: (0, c.CE)((0, c.$g)(i.total, i.currency), N, S),
                  })
                : p.intl.format(p.t["+y0Tjy"], { renewalDate: i.subscriptionPeriodStart }),
        actions: D,
        onClose: async () => l(),
        children: [
            (0, n.jsxs)(d.Yx, {
                isPremiumRebrand: !0,
                className: a()({ [g.JD]: E }),
                children: [
                    (0, n.jsx)(d.Xd, { children: p.intl.string(p.t.iqhIp4) }),
                    (0, n.jsx)(d.oR, {
                        label: p.intl.formatToPlainString(p.t.r3jVZq, { planName: o.Ay.getDisplayName(`${e}`) }),
                        value: `${A}`,
                        className: g.aD,
                    }),
                    (0, n.jsx)(d.pK, {}),
                    (0, n.jsx)(m.m0, { premiumSubscription: P, renewalInvoice: i, isUpdate: !0 }),
                ],
            }),
            E ? (0, n.jsx)(u.w, { type: "critical", children: p.intl.string(p.t["5mlOCW"]) }) : null,
        ],
    });
};
