"use strict";
n.d(t, { M: () => E });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(975571),
    l = n(927578),
    u = n(816252),
    c = n(473702),
    d = n(916974),
    _ = n(788868),
    f = n(652215),
    p = n(985018),
    h = n(333291),
    m = n(303930),
    g = n(398932);
let E = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            premiumSubscription: E,
            setStep: A,
            applyOffer: I,
            churnUserDiscountOffer: T,
            discountedPrice: y,
            fullPrice: S,
        } = (0, d.X)(),
        [v, C] = (0, i.useState)(!1),
        [b, N] = (0, i.useState)(!1),
        R = async () => {
            if (null === T) return void N(!0);
            C(!0), N(!1);
            try {
                await I(), A(c.g.DISCOUNT_APPLIED);
            } catch (e) {
                N(!0), C(!1);
            }
        };
    if (null === T || null === y) return (0, r.jsx)("div", { className: h.dc, children: (0, r.jsx)(s.y$y, {}) });
    let O = n === _.PremiumTypes.TIER_2,
        D = [
            { text: p.intl.string(p.t.zl7LZp), onClick: () => t(), variant: "secondary", disabled: v },
            {
                text: p.intl.string(p.t.CKSuZJ),
                onClick: () => R(),
                variant: "primary",
                icon: s.tvc,
                loading: v,
                disabled: v,
            },
        ];
    return (0, r.jsxs)(a.ExpressiveModal, {
        graphic: { type: "image", src: O ? g.A : m },
        gradientColor: O ? "nitro-pink" : "nitro-green",
        transitionState: e,
        title:
            E.status === f.Dmq.CANCELED
                ? p.intl.string(p.t["2Otzti"])
                : `${p.intl.format(p.t.q9Vxu4, { percent: T.discount.amount })}`,
        actions: D,
        onClose: async () => t(),
        children: [
            (0, r.jsx)("div", {
                className: h.TA,
                children: (0, r.jsx)(u._, { userDiscountOffer: T, offerState: u.b.CONFIRMING }),
            }),
            (0, r.jsx)("div", {
                className: h.V6,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children:
                        E.status === f.Dmq.CANCELED
                            ? p.intl.format(p.t.mY3ysK, {
                                  discountedPrice: y,
                                  billingPeriod: (0, l.Ke)(T.discount.user_usage_limit_interval),
                                  numMonths: T.discount.user_usage_limit,
                                  fullPrice: S,
                                  paidURL: o.A.getArticleURL(f.MVz.PAID_TERMS),
                              })
                            : p.intl.format(p.t.hrGTjG, {
                                  discountedPrice: y,
                                  billingPeriod: (0, l.Ke)(T.discount.user_usage_limit_interval),
                                  numMonths: T.discount.user_usage_limit,
                                  fullPrice: S,
                                  helpdeskArticle: o.A.getArticleURL(f.MVz.PAID_TERMS),
                              }),
                }),
            }),
            b ? (0, r.jsx)(a.wx6, { type: "critical", children: p.intl.string(p.t["5mlOCW"]) }) : null,
        ],
    });
};
