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
    p = n(981631),
    _ = n(388032),
    m = n(950728),
    h = n(997892),
    g = n(21299);
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
            fullPrice: S,
        } = (0, d.a)(),
        [I, T] = (0, i.useState)(!1),
        [C, A] = (0, i.useState)(!1),
        N = async () => {
            if (null === O) return void A(!0);
            T(!0), A(!1);
            try {
                await y(), b(u.R.DISCOUNT_APPLIED);
            } catch (e) {
                A(!0), T(!1);
            }
        };
    if (null === O || null === v)
        return (0, r.jsx)("div", {
            className: m.spinnerContainer,
            children: (0, r.jsx)(o.$jN, {}),
        });
    let P = n === f.PremiumTypes.TIER_2,
        R = [
            {
                text: _.intl.string(_.t.zl7LZp),
                onClick: () => t(),
                variant: "secondary",
                disabled: I,
            },
            {
                text: _.intl.string(_.t.CKSuZJ),
                onClick: () => N(),
                variant: "primary",
                icon: o.SrA,
                loading: I,
                disabled: I,
            },
        ];
    return (0, r.jsxs)(a.ExpressiveModal, {
        graphic: {
            type: "image",
            src: P ? g.Z : h,
        },
        gradientColor: P ? "nitro-pink" : "nitro-green",
        transitionState: e,
        title:
            E.status === p.O0b.CANCELED
                ? _.intl.string(_.t["2Otzti"])
                : "".concat(_.intl.format(_.t.q9Vxu4, { percent: O.discount.amount })),
        actions: R,
        onClose: async () => t(),
        children: [
            (0, r.jsx)("div", {
                className: m.offerDetailContainer,
                children: (0, r.jsx)(c.o, {
                    userDiscountOffer: O,
                    offerState: c.w.CONFIRMING,
                }),
            }),
            (0, r.jsx)("div", {
                className: m.legalContainer,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children:
                        E.status === p.O0b.CANCELED
                            ? _.intl.format(_.t.mY3ysK, {
                                  discountedPrice: v,
                                  billingPeriod: (0, l.JP)(O.discount.user_usage_limit_interval),
                                  numMonths: O.discount.user_usage_limit,
                                  fullPrice: S,
                                  paidURL: s.Z.getArticleURL(p.BhN.PAID_TERMS),
                              })
                            : _.intl.format(_.t.hrGTjG, {
                                  discountedPrice: v,
                                  billingPeriod: (0, l.JP)(O.discount.user_usage_limit_interval),
                                  numMonths: O.discount.user_usage_limit,
                                  fullPrice: S,
                                  helpdeskArticle: s.Z.getArticleURL(p.BhN.PAID_TERMS),
                              }),
                }),
            }),
            C
                ? (0, r.jsx)(a.M14, {
                      type: "critical",
                      children: _.intl.string(_.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
