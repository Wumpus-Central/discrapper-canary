n.d(t, { E: () => h }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(927578),
    c = n(580630),
    u = n(735164),
    d = n(692440),
    f = n(916974),
    p = n(985018),
    _ = n(600834);
let h = () => {
    let {
            transitionState: e,
            planId: t,
            renewalInvoice: n,
            onClose: a,
            handleCancellation: h,
            renewalInvoiceDetails: m,
            fullPrice: g,
            premiumSubscription: E,
        } = (0, f.X)(),
        [b, y] = i.useState(!1),
        [O, A] = i.useState(!1);
    if (null == n) return null;
    let v = async () => {
            y(!0), A(!1);
            try {
                await h(), a();
            } catch (e) {
                A(!0), y(!1);
            }
        },
        S = [
            {
                text: p.intl.string(p.t.h9tkAK),
                onClick: () => a(),
                variant: "secondary",
            },
            {
                text: "".concat(
                    p.intl.format(p.t.yxFzdO, { planPremiumType: l.Ay.getTierDisplayNameByPlanId("".concat(t)) }),
                ),
                onClick: v,
                disabled: b,
                variant: "critical-primary",
                loading: b,
            },
        ];
    if (null == m) return null;
    let { intervalType: I, intervalCount: T } = m,
        C = (0, c.CE)("".concat(g), I, T);
    return (0, r.jsxs)(o.Modal, {
        size: "md",
        transitionState: e,
        title: "".concat(p.intl.format(p.t.LZunzZ, { planPremiumType: l.Ay.getTierDisplayNameByPlanId("".concat(t)) })),
        subtitle:
            0 !== n.total
                ? p.intl.format(p.t.ycyeBx, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, c.CE)((0, c.$g)(n.total, n.currency), I, T),
                  })
                : p.intl.format(p.t["+y0Tjy"], { renewalDate: n.subscriptionPeriodStart }),
        actions: S,
        onClose: async () => a(),
        children: [
            (0, r.jsxs)(u.Yx, {
                isPremiumRebrand: !0,
                className: s()({ [_.JD]: O }),
                children: [
                    (0, r.jsx)(u.Xd, { children: p.intl.string(p.t.iqhIp4) }),
                    (0, r.jsx)(u.oR, {
                        label: p.intl.formatToPlainString(p.t.r3jVZq, { planName: l.Ay.getDisplayName("".concat(t)) }),
                        value: "".concat(C),
                        className: _.aD,
                    }),
                    (0, r.jsx)(u.pK, {}),
                    (0, r.jsx)(d.m0, {
                        premiumSubscription: E,
                        renewalInvoice: n,
                        isUpdate: !0,
                    }),
                ],
            }),
            O
                ? (0, r.jsx)(o.wx6, {
                      type: "critical",
                      children: p.intl.string(p.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
