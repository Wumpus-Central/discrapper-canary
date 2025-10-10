n.d(e, { U: () => C }), n(388685);
var i = n(951288),
    r = n(647438),
    a = n(793030),
    l = n(434333),
    s = n(481060),
    o = n(63063),
    c = n(74538),
    u = n(10508),
    d = n(45474),
    m = n(594135),
    f = n(474936),
    p = n(981631),
    g = n(388032),
    h = n(950728),
    x = n(997892),
    P = n(288541);
let C = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            premiumSubscription: C,
            setStep: v,
            applyOffer: y,
            churnUserDiscountOffer: T,
            discountedPrice: E,
            fullPrice: S,
        } = (0, m.a)(),
        [_, N] = (0, r.useState)(!1),
        [j, D] = (0, r.useState)(!1),
        A = async () => {
            if (null === T) return void D(!0);
            N(!0), D(!1);
            try {
                await y(), v(d.R.DISCOUNT_APPLIED);
            } catch (t) {
                D(!0), N(!1);
            }
        };
    if (null === T || null === E)
        return (0, i.jsx)("div", {
            className: h.spinnerContainer,
            children: (0, i.jsx)(s.$jN, {}),
        });
    let O = n === f.PremiumTypes.TIER_2,
        R = [
            {
                text: g.intl.string(g.t.zl7LZm),
                onClick: () => e(),
                variant: "secondary",
                disabled: _,
            },
            {
                text: g.intl.string(g.t.CKSuZG),
                onClick: () => A(),
                variant: "primary",
                icon: s.SrA,
                loading: _,
                disabled: _,
            },
        ];
    return (0, i.jsxs)(a.ExpressiveModal, {
        graphic: {
            type: "image",
            src: O ? P.Z : x,
        },
        gradientColor: O ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            C.status === p.O0b.CANCELED
                ? g.intl.string(g.t["2Otztr"])
                : "".concat(g.intl.format(g.t.q9Vxu7, { percent: T.discount.amount })),
        actions: R,
        onClose: async () => e(),
        children: [
            (0, i.jsx)("div", {
                className: h.offerDetailContainer,
                children: (0, i.jsx)(u.o, {
                    userDiscountOffer: T,
                    offerState: u.w.CONFIRMING,
                }),
            }),
            (0, i.jsx)("div", {
                className: h.legalContainer,
                children: (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children:
                        C.status === p.O0b.CANCELED
                            ? g.intl.format(g.t.mY3ysL, {
                                  discountedPrice: E,
                                  billingPeriod: (0, c.JP)(T.discount.user_usage_limit_interval),
                                  numMonths: T.discount.user_usage_limit,
                                  fullPrice: S,
                                  paidURL: o.Z.getArticleURL(p.BhN.PAID_TERMS),
                              })
                            : g.intl.format(g.t.hrGTjI, {
                                  discountedPrice: E,
                                  billingPeriod: (0, c.JP)(T.discount.user_usage_limit_interval),
                                  numMonths: T.discount.user_usage_limit,
                                  fullPrice: S,
                                  helpdeskArticle: o.Z.getArticleURL(p.BhN.PAID_TERMS),
                              }),
                }),
            }),
            j ? (0, i.jsx)(l.k, { children: g.intl.string(g.t["5mlOCQ"]) }) : null,
        ],
    });
};
