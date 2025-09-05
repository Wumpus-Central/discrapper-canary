n.d(t, { U: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(434333),
    o = n(667202),
    s = n(481060),
    l = n(63063),
    c = n(74538),
    u = n(219673),
    d = n(10508),
    f = n(45474),
    _ = n(594135),
    p = n(474936),
    h = n(981631),
    m = n(388032),
    g = n(607993),
    E = n(997892),
    b = n(234286),
    y = n(288541);
let O = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            premiumSubscription: O,
            setStep: v,
            applyOffer: I,
            churnUserDiscountOffer: T,
            discountedPrice: S,
            fullPrice: A,
        } = (0, _.a)(),
        [C, N] = (0, i.useState)(!1),
        [R, P] = (0, i.useState)(!1),
        { enabled: w } = u.b.useConfig({ location: "ConfirmDiscountStep" }),
        D = async () => {
            if (null === T) return void P(!0);
            N(!0), P(!1);
            try {
                await I(), v(f.R.DISCOUNT_APPLIED);
            } catch (e) {
                P(!0), N(!1);
            }
        };
    if (null === T || null === S)
        return (0, r.jsx)("div", {
            className: g.spinnerContainer,
            children: (0, r.jsx)(s.$jN, {}),
        });
    let x = n === p.p9.TIER_2,
        L = [
            {
                text: m.intl.string(m.t.zl7LZm),
                onClick: () => t(),
                variant: "secondary",
                disabled: C,
            },
            {
                text: m.intl.string(m.t.CKSuZG),
                onClick: () => D(),
                variant: "primary",
                icon: s.SrA,
                loading: C,
                disabled: C,
            },
        ];
    return (0, r.jsxs)(o.I, {
        graphic: {
            type: "image",
            src: x ? (w ? y.Z : b) : E,
        },
        gradientColor: x ? "nitro-pink" : "nitro-green",
        transitionState: e,
        title:
            O.status === h.O0b.CANCELED
                ? m.intl.string(m.t["2Otztr"])
                : "".concat(m.intl.format(m.t.q9Vxu7, { percent: T.discount.amount })),
        actions: L,
        onClose: async () => t(),
        children: [
            (0, r.jsx)("div", {
                className: g.offerDetailContainer,
                children: (0, r.jsx)(d.o, {
                    userDiscountOffer: T,
                    offerState: d.w.CONFIRMING,
                }),
            }),
            (0, r.jsx)("div", {
                className: g.legalContainer,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children:
                        O.status === h.O0b.CANCELED
                            ? m.intl.format(m.t.mY3ysL, {
                                  discountedPrice: S,
                                  billingPeriod: (0, c.JP)(T.discount.user_usage_limit_interval),
                                  numMonths: T.discount.user_usage_limit,
                                  fullPrice: A,
                                  paidURL: l.Z.getArticleURL(h.BhN.PAID_TERMS),
                              })
                            : m.intl.format(m.t.hrGTjI, {
                                  discountedPrice: S,
                                  billingPeriod: (0, c.JP)(T.discount.user_usage_limit_interval),
                                  numMonths: T.discount.user_usage_limit,
                                  fullPrice: A,
                                  helpdeskArticle: l.Z.getArticleURL(h.BhN.PAID_TERMS),
                              }),
                }),
            }),
            R ? (0, r.jsx)(a.k, { children: m.intl.string(m.t["5mlOCQ"]) }) : null,
        ],
    });
};
