n.d(e, { E: () => g });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    s = n(189213),
    o = n(683071),
    u = n(24482),
    c = n(580630),
    d = n(735164),
    m = n(264725),
    f = n(916974),
    p = n(105292),
    C = n(95068);
let g = () => {
    let {
            transitionState: t,
            planId: e,
            renewalInvoice: n,
            onClose: l,
            handleCancellation: g,
            renewalInvoiceDetails: x,
            fullPrice: h,
        } = (0, f.X)(),
        [y, P] = r.useState(!1),
        [v, E] = r.useState(!1);
    if (null == n) return null;
    async function D() {
        (P(!0), E(!1));
        try {
            (await g(), l());
        } catch (t) {
            (E(!0), P(!1));
        }
    }
    let j = [
        { text: p.intl.string(p.t.rzVN6j), onClick: () => l(), variant: "secondary" },
        {
            text: `${p.intl.format(p.t.yxFzdO, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${e}`) })}`,
            onClick: D,
            disabled: y,
            variant: "critical-primary",
            loading: y,
        },
    ];
    if (null == x) return null;
    let { intervalType: S, intervalCount: T } = x,
        A = null != h ? (0, c.CE)(`${h}`, S, T) : "";
    return (0, i.jsxs)(s.a, {
        size: "md",
        transitionState: t,
        title: `${p.intl.format(p.t.LZunzZ, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${e}`) })}`,
        subtitle:
            0 !== n.total
                ? p.intl.format(p.t.ycyeBx, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, c.CE)((0, c.$g)(n.total, n.currency), S, T),
                  })
                : p.intl.format(p.t["+y0Tjy"], { renewalDate: n.subscriptionPeriodStart }),
        actions: j,
        onClose: async () => l(),
        children: [
            (0, i.jsxs)(d.Yx, {
                isPremiumRebrand: !0,
                className: a()({ [C.JD]: v }),
                children: [
                    (0, i.jsx)(d.Xd, { children: p.intl.string(p.t.iqhIp4) }),
                    (0, i.jsx)(d.oR, {
                        label: p.intl.formatToPlainString(p.t.r3jVZq, { planName: u.Ay.getDisplayName(`${e}`) }),
                        value: `${A}`,
                        className: C.aD,
                    }),
                    (0, i.jsx)(d.pK, {}),
                    (0, i.jsx)(m.Hc, { renewalInvoice: n, isUpdate: !0 }),
                ],
            }),
            v ? (0, i.jsx)(o.w, { type: "critical", message: p.intl.string(p.t["5mlOCW"]), role: "alert" }) : null,
        ],
    });
};
