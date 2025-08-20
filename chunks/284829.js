n.d(t, { U: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(434333),
    o = n(667202),
    s = n(481060),
    l = n(63063),
    c = n(74538),
    u = n(10508),
    d = n(45474),
    f = n(594135),
    _ = n(474936),
    p = n(981631),
    h = n(388032),
    m = n(950728),
    g = n(997892),
    E = n(234286);
let b = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            premiumSubscription: b,
            setStep: y,
            applyOffer: O,
            churnUserDiscountOffer: v,
            discountedPrice: I,
            fullPrice: T,
        } = (0, f.a)(),
        [S, A] = (0, i.useState)(!1),
        [C, N] = (0, i.useState)(!1),
        R = async () => {
            if (null === v) return void N(!0);
            A(!0), N(!1);
            try {
                await O(), y(d.R.DISCOUNT_APPLIED);
            } catch (e) {
                N(!0), A(!1);
            }
        };
    if (null === v) return null;
    let P = n === _.p9.TIER_2,
        w = [
            {
                text: h.intl.string(h.t.zl7LZm),
                onClick: () => t(),
                variant: "secondary",
                disabled: S,
            },
            {
                text: h.intl.string(h.t.CKSuZG),
                onClick: () => R(),
                variant: "primary",
                icon: s.SrA,
                loading: S,
                disabled: S,
            },
        ];
    return (0, r.jsxs)(o.I, {
        graphic: {
            type: "image",
            src: P ? E : g,
        },
        gradientColor: P ? "nitro-pink" : "nitro-green",
        transitionState: e,
        title:
            b.status === p.O0b.CANCELED
                ? h.intl.string(h.t["2Otztr"])
                : "".concat(h.intl.format(h.t.q9Vxu7, { percent: v.discount.amount })),
        actions: w,
        onClose: async () => t(),
        children: [
            (0, r.jsx)("div", {
                className: m.offerDetailContainer,
                children: (0, r.jsx)(u.o, {
                    userDiscountOffer: v,
                    offerState: u.w.CONFIRMING,
                }),
            }),
            (0, r.jsx)("div", {
                className: m.legalContainer,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children:
                        b.status === p.O0b.CANCELED
                            ? h.intl.format(h.t.mY3ysL, {
                                  discountedPrice: I,
                                  billingPeriod: (0, c.JP)(v.discount.user_usage_limit_interval),
                                  numMonths: v.discount.user_usage_limit,
                                  fullPrice: T,
                                  paidURL: l.Z.getArticleURL(p.BhN.PAID_TERMS),
                              })
                            : h.intl.format(h.t.hrGTjI, {
                                  discountedPrice: I,
                                  billingPeriod: (0, c.JP)(v.discount.user_usage_limit_interval),
                                  numMonths: v.discount.user_usage_limit,
                                  fullPrice: T,
                                  helpdeskArticle: l.Z.getArticleURL(p.BhN.PAID_TERMS),
                              }),
                }),
            }),
            C ? (0, r.jsx)(a.k, { children: h.intl.string(h.t["5mlOCQ"]) }) : null,
        ],
    });
};
