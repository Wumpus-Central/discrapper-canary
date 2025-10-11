n.d(e, { U: () => P }), n(388685);
var i = n(951288),
    r = n(647438),
    a = n(793030),
    l = n(481060),
    s = n(63063),
    o = n(74538),
    c = n(10508),
    u = n(45474),
    d = n(594135),
    m = n(474936),
    f = n(981631),
    p = n(388032),
    g = n(950728),
    h = n(997892),
    x = n(288541);
let P = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            premiumSubscription: P,
            setStep: C,
            applyOffer: y,
            churnUserDiscountOffer: v,
            discountedPrice: T,
            fullPrice: E,
        } = (0, d.a)(),
        [S, _] = (0, r.useState)(!1),
        [N, j] = (0, r.useState)(!1),
        D = async () => {
            if (null === v) return void j(!0);
            _(!0), j(!1);
            try {
                await y(), C(u.R.DISCOUNT_APPLIED);
            } catch (t) {
                j(!0), _(!1);
            }
        };
    if (null === v || null === T)
        return (0, i.jsx)("div", {
            className: g.spinnerContainer,
            children: (0, i.jsx)(l.$jN, {}),
        });
    let A = n === m.PremiumTypes.TIER_2,
        O = [
            {
                text: p.intl.string(p.t.zl7LZm),
                onClick: () => e(),
                variant: "secondary",
                disabled: S,
            },
            {
                text: p.intl.string(p.t.CKSuZG),
                onClick: () => D(),
                variant: "primary",
                icon: l.SrA,
                loading: S,
                disabled: S,
            },
        ];
    return (0, i.jsxs)(a.ExpressiveModal, {
        graphic: {
            type: "image",
            src: A ? x.Z : h,
        },
        gradientColor: A ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            P.status === f.O0b.CANCELED
                ? p.intl.string(p.t["2Otztr"])
                : "".concat(p.intl.format(p.t.q9Vxu7, { percent: v.discount.amount })),
        actions: O,
        onClose: async () => e(),
        children: [
            (0, i.jsx)("div", {
                className: g.offerDetailContainer,
                children: (0, i.jsx)(c.o, {
                    userDiscountOffer: v,
                    offerState: c.w.CONFIRMING,
                }),
            }),
            (0, i.jsx)("div", {
                className: g.legalContainer,
                children: (0, i.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children:
                        P.status === f.O0b.CANCELED
                            ? p.intl.format(p.t.mY3ysL, {
                                  discountedPrice: T,
                                  billingPeriod: (0, o.JP)(v.discount.user_usage_limit_interval),
                                  numMonths: v.discount.user_usage_limit,
                                  fullPrice: E,
                                  paidURL: s.Z.getArticleURL(f.BhN.PAID_TERMS),
                              })
                            : p.intl.format(p.t.hrGTjI, {
                                  discountedPrice: T,
                                  billingPeriod: (0, o.JP)(v.discount.user_usage_limit_interval),
                                  numMonths: v.discount.user_usage_limit,
                                  fullPrice: E,
                                  helpdeskArticle: s.Z.getArticleURL(f.BhN.PAID_TERMS),
                              }),
                }),
            }),
            N
                ? (0, i.jsx)(a.M14, {
                      type: "critical",
                      children: p.intl.string(p.t["5mlOCQ"]),
                  })
                : null,
        ],
    });
};
