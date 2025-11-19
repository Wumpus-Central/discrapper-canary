n.d(t, { U: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(63063),
    l = n(74538),
    c = n(10508),
    u = n(45474),
    d = n(594135),
    f = n(474936),
    _ = n(981631),
    p = n(388032),
    h = n(950728),
    m = n(997892),
    g = n(288541);
let E = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            premiumSubscription: E,
            setStep: b,
            applyOffer: y,
            churnUserDiscountOffer: O,
            discountedPrice: v,
            fullPrice: I,
        } = (0, d.a)(),
        [T, S] = (0, i.useState)(!1),
        [A, C] = (0, i.useState)(!1),
        N = async () => {
            if (null === O) return void C(!0);
            S(!0), C(!1);
            try {
                await y(), b(u.R.DISCOUNT_APPLIED);
            } catch (e) {
                C(!0), S(!1);
            }
        };
    if (null === O || null === v)
        return (0, r.jsx)("div", {
            className: h.spinnerContainer,
            children: (0, r.jsx)(o.$jN, {}),
        });
    let R = n === f.PremiumTypes.TIER_2,
        P = [
            {
                text: p.intl.string(p.t.zl7LZp),
                onClick: () => t(),
                variant: "secondary",
                disabled: T,
            },
            {
                text: p.intl.string(p.t.CKSuZJ),
                onClick: () => N(),
                variant: "primary",
                icon: o.SrA,
                loading: T,
                disabled: T,
            },
        ];
    return (0, r.jsxs)(a.ExpressiveModal, {
        graphic: {
            type: "image",
            src: R ? g.Z : m,
        },
        gradientColor: R ? "nitro-pink" : "nitro-green",
        transitionState: e,
        title:
            E.status === _.O0b.CANCELED
                ? p.intl.string(p.t["2Otzti"])
                : "".concat(p.intl.format(p.t.q9Vxu4, { percent: O.discount.amount })),
        actions: P,
        onClose: async () => t(),
        children: [
            (0, r.jsx)("div", {
                className: h.offerDetailContainer,
                children: (0, r.jsx)(c.o, {
                    userDiscountOffer: O,
                    offerState: c.w.CONFIRMING,
                }),
            }),
            (0, r.jsx)("div", {
                className: h.legalContainer,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children:
                        E.status === _.O0b.CANCELED
                            ? p.intl.format(p.t.mY3ysK, {
                                  discountedPrice: v,
                                  billingPeriod: (0, l.JP)(O.discount.user_usage_limit_interval),
                                  numMonths: O.discount.user_usage_limit,
                                  fullPrice: I,
                                  paidURL: s.Z.getArticleURL(_.BhN.PAID_TERMS),
                              })
                            : p.intl.format(p.t.hrGTjG, {
                                  discountedPrice: v,
                                  billingPeriod: (0, l.JP)(O.discount.user_usage_limit_interval),
                                  numMonths: O.discount.user_usage_limit,
                                  fullPrice: I,
                                  helpdeskArticle: s.Z.getArticleURL(_.BhN.PAID_TERMS),
                              }),
                }),
            }),
            A
                ? (0, r.jsx)(a.M14, {
                      type: "critical",
                      children: p.intl.string(p.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
