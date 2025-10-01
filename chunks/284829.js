n.d(e, { U: () => y }), n(388685);
var i = n(951288),
    r = n(647438),
    a = n(434333),
    l = n(667202),
    s = n(481060),
    o = n(63063),
    c = n(74538),
    u = n(219673),
    d = n(10508),
    m = n(45474),
    f = n(594135),
    p = n(474936),
    g = n(981631),
    h = n(388032),
    x = n(950728),
    C = n(997892),
    P = n(234286),
    v = n(288541);
let y = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            premiumSubscription: y,
            setStep: S,
            applyOffer: E,
            churnUserDiscountOffer: _,
            discountedPrice: D,
            fullPrice: N,
        } = (0, f.a)(),
        [j, T] = (0, r.useState)(!1),
        [b, A] = (0, r.useState)(!1),
        { enabled: O } = u.b.useConfig({ location: "ConfirmDiscountStep" }),
        R = async () => {
            if (null === _) return void A(!0);
            T(!0), A(!1);
            try {
                await E(), S(m.R.DISCOUNT_APPLIED);
            } catch (t) {
                A(!0), T(!1);
            }
        };
    if (null === _ || null === D)
        return (0, i.jsx)("div", {
            className: x.spinnerContainer,
            children: (0, i.jsx)(s.$jN, {}),
        });
    let I = n === p.p9.TIER_2,
        k = [
            {
                text: h.intl.string(h.t.zl7LZm),
                onClick: () => e(),
                variant: "secondary",
                disabled: j,
            },
            {
                text: h.intl.string(h.t.CKSuZG),
                onClick: () => R(),
                variant: "primary",
                icon: s.SrA,
                loading: j,
                disabled: j,
            },
        ];
    return (0, i.jsxs)(l.ExpressiveModal, {
        graphic: {
            type: "image",
            src: I ? (O ? v.Z : P) : C,
        },
        gradientColor: I ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title:
            y.status === g.O0b.CANCELED
                ? h.intl.string(h.t["2Otztr"])
                : "".concat(h.intl.format(h.t.q9Vxu7, { percent: _.discount.amount })),
        actions: k,
        onClose: async () => e(),
        children: [
            (0, i.jsx)("div", {
                className: x.offerDetailContainer,
                children: (0, i.jsx)(d.o, {
                    userDiscountOffer: _,
                    offerState: d.w.CONFIRMING,
                }),
            }),
            (0, i.jsx)("div", {
                className: x.legalContainer,
                children: (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children:
                        y.status === g.O0b.CANCELED
                            ? h.intl.format(h.t.mY3ysL, {
                                  discountedPrice: D,
                                  billingPeriod: (0, c.JP)(_.discount.user_usage_limit_interval),
                                  numMonths: _.discount.user_usage_limit,
                                  fullPrice: N,
                                  paidURL: o.Z.getArticleURL(g.BhN.PAID_TERMS),
                              })
                            : h.intl.format(h.t.hrGTjI, {
                                  discountedPrice: D,
                                  billingPeriod: (0, c.JP)(_.discount.user_usage_limit_interval),
                                  numMonths: _.discount.user_usage_limit,
                                  fullPrice: N,
                                  helpdeskArticle: o.Z.getArticleURL(g.BhN.PAID_TERMS),
                              }),
                }),
            }),
            b ? (0, i.jsx)(a.k, { children: h.intl.string(h.t["5mlOCQ"]) }) : null,
        ],
    });
};
