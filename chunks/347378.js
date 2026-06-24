n.d(e, { E: () => h });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(189213),
    o = n(683071),
    u = n(428262),
    c = n(580630),
    d = n(735164),
    m = n(458785),
    f = n(916974),
    g = n(375708),
    p = n(690073);
let h = () => {
    let {
            transitionState: t,
            planId: e,
            renewalInvoice: n,
            onClose: l,
            handleCancellation: h,
            renewalInvoiceDetails: x,
            fullPrice: P,
        } = (0, f.X)(),
        [C, y] = r.useState(!1),
        [E, v] = r.useState(!1);
    if (null == n) return null;
    async function D() {
        y(!0), v(!1);
        try {
            await h(), l();
        } catch (t) {
            v(!0), y(!1);
        }
    }
    let j = [
        { text: g.intl.string(g.t.rzVN6j), onClick: () => l(), variant: "secondary" },
        {
            text: `${g.intl.format(g.t.yxFzdO, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${e}`) })}`,
            onClick: D,
            disabled: C,
            variant: "critical-primary",
            loading: C,
        },
    ];
    if (null == x) return null;
    let { intervalType: S, intervalCount: A } = x,
        N = (0, c.CE)(`${P}`, S, A);
    return (0, i.jsxs)(s.Modal, {
        size: "md",
        transitionState: t,
        title: `${g.intl.format(g.t.LZunzZ, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${e}`) })}`,
        subtitle:
            0 !== n.total
                ? g.intl.format(g.t.ycyeBx, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, c.CE)((0, c.$g)(n.total, n.currency), S, A),
                  })
                : g.intl.format(g.t["+y0Tjy"], { renewalDate: n.subscriptionPeriodStart }),
        actions: j,
        onClose: async () => l(),
        children: [
            (0, i.jsxs)(d.Yx, {
                isPremiumRebrand: !0,
                className: a()({ [p.JD]: E }),
                children: [
                    (0, i.jsx)(d.Xd, { children: g.intl.string(g.t.iqhIp4) }),
                    (0, i.jsx)(d.oR, {
                        label: g.intl.formatToPlainString(g.t.r3jVZq, { planName: u.Ay.getDisplayName(`${e}`) }),
                        value: `${N}`,
                        className: p.aD,
                    }),
                    (0, i.jsx)(d.pK, {}),
                    (0, i.jsx)(m.m0, { renewalInvoice: n, isUpdate: !0 }),
                ],
            }),
            E ? (0, i.jsx)(o.w, { type: "critical", children: g.intl.string(g.t["5mlOCW"]) }) : null,
        ],
    });
};
