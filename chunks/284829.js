n.d(e, { U: () => P }), n(388685);
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
    C = n(288541);
let P = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            premiumSubscription: P,
            setStep: v,
            applyOffer: y,
            churnUserDiscountOffer: E,
            discountedPrice: S,
            fullPrice: _,
        } = (0, m.a)(),
        [N, j] = (0, r.useState)(!1),
        [D, T] = (0, r.useState)(!1),
        A = async () => {
            if (null === E) return void T(!0);
            j(!0), T(!1);
            try {
                await y(), v(d.R.DISCOUNT_APPLIED);
            } catch (t) {
                T(!0), j(!1);
            }
        };
    if (null === E || null === S)
        return (0, i.jsx)("div", {
            className: h.spinnerContainer,
            children: (0, i.jsx)(s.$jN, {}),
        });
    let O = n === f.p9.TIER_2,
        R = [
            {
                text: g.intl.string(g.t.zl7LZm),
                onClick: () => e(),
                variant: "secondary",
                disabled: N,
            },
            {
                text: g.intl.string(g.t.CKSuZG),
                onClick: () => A(),
                variant: "primary",
                icon: s.SrA,
                loading: N,
                disabled: N,
            },
        ];
    return (0, i.jsxs)(a.ExpressiveModal, {
        graphic: {
            type: "image",
            src: O ? C.Z : x,
        },
        gradientColor: O ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            P.status === p.O0b.CANCELED
                ? g.intl.string(g.t["2Otztr"])
                : "".concat(g.intl.format(g.t.q9Vxu7, { percent: E.discount.amount })),
        actions: R,
        onClose: async () => e(),
        children: [
            (0, i.jsx)("div", {
                className: h.offerDetailContainer,
                children: (0, i.jsx)(u.o, {
                    userDiscountOffer: E,
                    offerState: u.w.CONFIRMING,
                }),
            }),
            (0, i.jsx)("div", {
                className: h.legalContainer,
                children: (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children:
                        P.status === p.O0b.CANCELED
                            ? g.intl.format(g.t.mY3ysL, {
                                  discountedPrice: S,
                                  billingPeriod: (0, c.JP)(E.discount.user_usage_limit_interval),
                                  numMonths: E.discount.user_usage_limit,
                                  fullPrice: _,
                                  paidURL: o.Z.getArticleURL(p.BhN.PAID_TERMS),
                              })
                            : g.intl.format(g.t.hrGTjI, {
                                  discountedPrice: S,
                                  billingPeriod: (0, c.JP)(E.discount.user_usage_limit_interval),
                                  numMonths: E.discount.user_usage_limit,
                                  fullPrice: _,
                                  helpdeskArticle: o.Z.getArticleURL(p.BhN.PAID_TERMS),
                              }),
                }),
            }),
            D ? (0, i.jsx)(l.k, { children: g.intl.string(g.t["5mlOCQ"]) }) : null,
        ],
    });
};
