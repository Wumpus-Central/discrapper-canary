i.d(e, { E: () => p });
var n = i(627968),
    r = i(64700),
    l = i(503698),
    a = i.n(l),
    s = i(158954),
    u = i(927578),
    o = i(580630),
    c = i(735164),
    d = i(692440),
    m = i(916974),
    f = i(985018),
    g = i(600834);
let p = () => {
    let {
            transitionState: t,
            planId: e,
            renewalInvoice: i,
            onClose: l,
            handleCancellation: p,
            renewalInvoiceDetails: x,
            fullPrice: h,
            premiumSubscription: P,
        } = (0, m.X)(),
        [y, C] = r.useState(!1),
        [v, E] = r.useState(!1);
    if (null == i) return null;
    let D = async () => {
            C(!0), E(!1);
            try {
                await p(), l();
            } catch (t) {
                E(!0), C(!1);
            }
        },
        j = [
            { text: f.intl.string(f.t.h9tkAK), onClick: () => l(), variant: "secondary" },
            {
                text: `${f.intl.format(f.t.yxFzdO, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${e}`) })}`,
                onClick: D,
                disabled: y,
                variant: "critical-primary",
                loading: y,
            },
        ];
    if (null == x) return null;
    let { intervalType: _, intervalCount: A } = x,
        S = (0, o.CE)(`${h}`, _, A);
    return (0, n.jsxs)(s.Modal, {
        size: "md",
        transitionState: t,
        title: `${f.intl.format(f.t.LZunzZ, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${e}`) })}`,
        subtitle:
            0 !== i.total
                ? f.intl.format(f.t.ycyeBx, {
                      renewalDate: i.subscriptionPeriodStart,
                      rate: (0, o.CE)((0, o.$g)(i.total, i.currency), _, A),
                  })
                : f.intl.format(f.t["+y0Tjy"], { renewalDate: i.subscriptionPeriodStart }),
        actions: j,
        onClose: async () => l(),
        children: [
            (0, n.jsxs)(c.Yx, {
                isPremiumRebrand: !0,
                className: a()({ [g.JD]: v }),
                children: [
                    (0, n.jsx)(c.Xd, { children: f.intl.string(f.t.iqhIp4) }),
                    (0, n.jsx)(c.oR, {
                        label: f.intl.formatToPlainString(f.t.r3jVZq, { planName: u.Ay.getDisplayName(`${e}`) }),
                        value: `${S}`,
                        className: g.aD,
                    }),
                    (0, n.jsx)(c.pK, {}),
                    (0, n.jsx)(d.m0, { premiumSubscription: P, renewalInvoice: i, isUpdate: !0 }),
                ],
            }),
            v ? (0, n.jsx)(s.wx6, { type: "critical", children: f.intl.string(f.t["5mlOCW"]) }) : null,
        ],
    });
};
