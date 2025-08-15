n.d(t, { U: () => _ }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(434333),
    a = n(667202),
    l = n(481060),
    o = n(63063),
    c = n(74538),
    d = n(10508),
    u = n(45474),
    m = n(594135),
    p = n(474936),
    g = n(981631),
    h = n(388032),
    f = n(950728),
    b = n(997892),
    x = n(234286);
let _ = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            premiumSubscription: _,
            setStep: j,
            applyOffer: E,
            churnUserDiscountOffer: C,
            discountedPrice: O,
            fullPrice: v,
        } = (0, m.a)(),
        [S, T] = (0, r.useState)(!1),
        [N, I] = (0, r.useState)(!1),
        y = async () => {
            if (null === C) return void I(!0);
            T(!0), I(!1);
            try {
                await E(), j(u.R.DISCOUNT_APPLIED);
            } catch (e) {
                I(!0), T(!1);
            }
        };
    if (null === C) return null;
    let A = n === p.p9.TIER_2,
        P = [
            {
                text: h.intl.string(h.t.zl7LZm),
                onClick: () => t(),
                variant: "secondary",
                disabled: S,
            },
            {
                text: h.intl.string(h.t.CKSuZG),
                onClick: () => y(),
                variant: "primary",
                icon: l.SrA,
                loading: S,
                disabled: S,
            },
        ];
    return (0, i.jsxs)(a.I, {
        graphic: {
            type: "image",
            src: A ? x : b,
        },
        gradientColor: A ? "nitro-pink" : "nitro-green",
        transitionState: e,
        title:
            null != _.canceledAt
                ? h.intl.string(h.t["2Otztr"])
                : "".concat(h.intl.format(h.t.q9Vxu7, { percent: C.discount.amount })),
        actions: P,
        onClose: async () => t(),
        children: [
            (0, i.jsx)("div", {
                className: f.offerDetailContainer,
                children: (0, i.jsx)(d.o, {
                    userDiscountOffer: C,
                    offerState: d.w.CONFIRMING,
                }),
            }),
            (0, i.jsx)("div", {
                className: f.legalContainer,
                children: (0, i.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children:
                        null != _.canceledAt
                            ? h.intl.format(h.t.mY3ysL, {
                                  discountedPrice: O,
                                  billingPeriod: (0, c.JP)(C.discount.user_usage_limit_interval),
                                  numMonths: C.discount.user_usage_limit,
                                  fullPrice: v,
                                  paidURL: o.Z.getArticleURL(g.BhN.PAID_TERMS),
                              })
                            : h.intl.format(h.t.hrGTjI, {
                                  discountedPrice: O,
                                  billingPeriod: (0, c.JP)(C.discount.user_usage_limit_interval),
                                  numMonths: C.discount.user_usage_limit,
                                  fullPrice: v,
                                  helpdeskArticle: o.Z.getArticleURL(g.BhN.PAID_TERMS),
                              }),
                }),
            }),
            N ? (0, i.jsx)(s.k, { children: h.intl.string(h.t["5mlOCQ"]) }) : null,
        ],
    });
};
