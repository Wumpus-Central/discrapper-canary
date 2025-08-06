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
    f = n(735912),
    b = n(997892),
    x = n(234286);
let _ = () => {
    let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            setStep: _,
            applyOffer: j,
            churnUserDiscountOffer: E,
            discountedPrice: C,
            fullPrice: O,
        } = (0, m.a)(),
        [v, S] = (0, r.useState)(!1),
        [T, I] = (0, r.useState)(!1),
        N = async () => {
            if (null === E) return void I(!0);
            S(!0), I(!1);
            try {
                await j(), _(u.R.DISCOUNT_APPLIED);
            } catch (e) {
                I(!0), S(!1);
            }
        };
    if (null === E) return null;
    let y = n === p.p9.TIER_2,
        A = [
            {
                text: h.intl.string(h.t.zl7LZm),
                onClick: () => t(),
                variant: "secondary",
                disabled: v,
            },
            {
                text: h.intl.string(h.t.CKSuZG),
                onClick: () => N(),
                variant: "primary",
                icon: l.SrA,
                loading: v,
                disabled: v,
            },
        ];
    return (0, i.jsxs)(a.I, {
        graphic: {
            type: "image",
            src: y ? x : b,
        },
        gradientColor: y ? "nitro-pink" : "nitro-green",
        transitionState: e,
        title: "".concat(h.intl.format(h.t.q9Vxu7, { percent: E.discount.amount })),
        actions: A,
        onClose: async () => t(),
        children: [
            (0, i.jsx)("div", {
                className: f.offerDetailContainer,
                children: (0, i.jsx)(d.o, {
                    userDiscountOffer: E,
                    offerState: d.w.CONFIRMING,
                }),
            }),
            (0, i.jsx)("div", {
                className: f.legalContainer,
                children: (0, i.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    color: "text-secondary",
                    children: h.intl.format(h.t.hrGTjI, {
                        discountedPrice: C,
                        billingPeriod: (0, c.JP)(E.discount.user_usage_limit_interval),
                        numMonths: E.discount.user_usage_limit,
                        fullPrice: O,
                        helpdeskArticle: o.Z.getArticleURL(g.BhN.PAID_TERMS),
                    }),
                }),
            }),
            T ? (0, i.jsx)(s.k, { children: h.intl.string(h.t["5mlOCQ"]) }) : null,
        ],
    });
};
