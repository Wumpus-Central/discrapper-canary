n.d(t, {
    M: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(975571),
    l = n(927578),
    c = n(816252),
    u = n(473702),
    d = n(916974),
    f = n(788868),
    p = n(652215),
    _ = n(985018),
    h = n(555672),
    m = n(303930),
    g = n(398932);
let E = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            premiumSubscription: E,
            setStep: b,
            applyOffer: y,
            churnUserDiscountOffer: O,
            discountedPrice: A,
            fullPrice: v,
        } = (0, d.X)(),
        [S, I] = (0, i.useState)(!1),
        [T, C] = (0, i.useState)(!1),
        N = async () => {
            if (null === O) return void C(!0);
            I(!0), C(!1);
            try {
                await y(), b(u.g.DISCOUNT_APPLIED);
            } catch (e) {
                C(!0), I(!1);
            }
        };
    if (null === O || null === A)
        return (0, r.jsx)("div", {
            className: h.dc,
            children: (0, r.jsx)(s.y$y, {}),
        });
    let R = n === f.PremiumTypes.TIER_2,
        w = [
            {
                text: _.intl.string(_.t.zl7LZp),
                onClick: () => t(),
                variant: "secondary",
                disabled: S,
            },
            {
                text: _.intl.string(_.t.CKSuZJ),
                onClick: () => N(),
                variant: "primary",
                icon: s.tvc,
                loading: S,
                disabled: S,
            },
        ];
    return (0, r.jsxs)(a.ExpressiveModal, {
        graphic: {
            type: "image",
            src: R ? g.A : m,
        },
        gradientColor: R ? "nitro-pink" : "nitro-green",
        transitionState: e,
        title:
            E.status === p.Dmq.CANCELED
                ? _.intl.string(_.t["2Otzti"])
                : "".concat(
                      _.intl.format(_.t.q9Vxu4, {
                          percent: O.discount.amount,
                      }),
                  ),
        actions: w,
        onClose: async () => t(),
        children: [
            (0, r.jsx)("div", {
                className: h.TA,
                children: (0, r.jsx)(c._, {
                    userDiscountOffer: O,
                    offerState: c.b.CONFIRMING,
                }),
            }),
            (0, r.jsx)("div", {
                className: h.V6,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children:
                        E.status === p.Dmq.CANCELED
                            ? _.intl.format(_.t.mY3ysK, {
                                  discountedPrice: A,
                                  billingPeriod: (0, l.Ke)(O.discount.user_usage_limit_interval),
                                  numMonths: O.discount.user_usage_limit,
                                  fullPrice: v,
                                  paidURL: o.A.getArticleURL(p.MVz.PAID_TERMS),
                              })
                            : _.intl.format(_.t.hrGTjG, {
                                  discountedPrice: A,
                                  billingPeriod: (0, l.Ke)(O.discount.user_usage_limit_interval),
                                  numMonths: O.discount.user_usage_limit,
                                  fullPrice: v,
                                  helpdeskArticle: o.A.getArticleURL(p.MVz.PAID_TERMS),
                              }),
                }),
            }),
            T
                ? (0, r.jsx)(a.wx6, {
                      type: "critical",
                      children: _.intl.string(_.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
