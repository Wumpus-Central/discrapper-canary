e.d(n, { E: () => g });
var i = e(477900),
    r = e(582128),
    l = e(503698),
    a = e.n(l),
    s = e(189213),
    o = e(683071),
    u = e(158045),
    c = e(580630),
    d = e(735164),
    m = e(692440),
    f = e(916974),
    p = e(375708),
    C = e(95068);
let g = () => {
    let {
            transitionState: t,
            planId: n,
            renewalInvoice: e,
            onClose: l,
            handleCancellation: g,
            renewalInvoiceDetails: h,
            fullPrice: x,
        } = (0, f.X)(),
        [y, P] = r.useState(!1),
        [v, E] = r.useState(!1);
    if (null == e) return null;
    async function D() {
        P(!0), E(!1);
        try {
            await g(), l();
        } catch (t) {
            E(!0), P(!1);
        }
    }
    let j = [
        { text: p.intl.string(p.t.rzVN6j), onClick: () => l(), variant: "secondary" },
        {
            text: `${p.intl.format(p.t.yxFzdO, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${n}`) })}`,
            onClick: D,
            disabled: y,
            variant: "critical-primary",
            loading: y,
        },
    ];
    if (null == h) return null;
    let { intervalType: S, intervalCount: T } = h,
        A = null != x ? (0, c.CE)(`${x}`, S, T) : "";
    return (0, i.jsxs)(s.Modal, {
        size: "md",
        transitionState: t,
        title: `${p.intl.format(p.t.LZunzZ, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${n}`) })}`,
        subtitle:
            0 !== e.total
                ? p.intl.format(p.t.ycyeBx, {
                      renewalDate: e.subscriptionPeriodStart,
                      rate: (0, c.CE)((0, c.$g)(e.total, e.currency), S, T),
                  })
                : p.intl.format(p.t["+y0Tjy"], { renewalDate: e.subscriptionPeriodStart }),
        actions: j,
        onClose: async () => l(),
        children: [
            (0, i.jsxs)(d.Yx, {
                isPremiumRebrand: !0,
                className: a()({ [C.JD]: v }),
                children: [
                    (0, i.jsx)(d.Xd, { children: p.intl.string(p.t.iqhIp4) }),
                    (0, i.jsx)(d.oR, {
                        label: p.intl.formatToPlainString(p.t.r3jVZq, { planName: u.Ay.getDisplayName(`${n}`) }),
                        value: `${A}`,
                        className: C.aD,
                    }),
                    (0, i.jsx)(d.pK, {}),
                    (0, i.jsx)(m.Hc, { renewalInvoice: e, isUpdate: !0 }),
                ],
            }),
            v ? (0, i.jsx)(o.w, { type: "critical", children: p.intl.string(p.t["5mlOCW"]) }) : null,
        ],
    });
};
