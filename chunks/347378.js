"use strict";
n.d(t, { E: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(927578),
    u = n(580630),
    c = n(735164),
    d = n(692440),
    _ = n(916974),
    f = n(985018),
    p = n(600834);
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
        } = (0, _.X)(),
        [A, I] = i.useState(!1),
        [T, y] = i.useState(!1);
    if (null == n) return null;
    let S = async () => {
            I(!0), y(!1);
            try {
                await h(), a();
            } catch (e) {
                y(!0), I(!1);
            }
        },
        v = [
            { text: f.intl.string(f.t.h9tkAK), onClick: () => a(), variant: "secondary" },
            {
                text: `${f.intl.format(f.t.yxFzdO, { planPremiumType: l.Ay.getTierDisplayNameByPlanId(`${t}`) })}`,
                onClick: S,
                disabled: A,
                variant: "critical-primary",
                loading: A,
            },
        ];
    if (null == m) return null;
    let { intervalType: C, intervalCount: b } = m,
        N = (0, u.CE)(`${g}`, C, b);
    return (0, r.jsxs)(o.Modal, {
        size: "md",
        transitionState: e,
        title: `${f.intl.format(f.t.LZunzZ, { planPremiumType: l.Ay.getTierDisplayNameByPlanId(`${t}`) })}`,
        subtitle:
            0 !== n.total
                ? f.intl.format(f.t.ycyeBx, {
                      renewalDate: n.subscriptionPeriodStart,
                      rate: (0, u.CE)((0, u.$g)(n.total, n.currency), C, b),
                  })
                : f.intl.format(f.t["+y0Tjy"], { renewalDate: n.subscriptionPeriodStart }),
        actions: v,
        onClose: async () => a(),
        children: [
            (0, r.jsxs)(c.Yx, {
                isPremiumRebrand: !0,
                className: s()({ [p.JD]: T }),
                children: [
                    (0, r.jsx)(c.Xd, { children: f.intl.string(f.t.iqhIp4) }),
                    (0, r.jsx)(c.oR, {
                        label: f.intl.formatToPlainString(f.t.r3jVZq, { planName: l.Ay.getDisplayName(`${t}`) }),
                        value: `${N}`,
                        className: p.aD,
                    }),
                    (0, r.jsx)(c.pK, {}),
                    (0, r.jsx)(d.m0, { premiumSubscription: E, renewalInvoice: n, isUpdate: !0 }),
                ],
            }),
            T ? (0, r.jsx)(o.wx6, { type: "critical", children: f.intl.string(f.t["5mlOCW"]) }) : null,
        ],
    });
};
