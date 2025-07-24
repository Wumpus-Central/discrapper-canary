(n.d(e, { U: () => I }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(544891),
    a = n(434333),
    s = n(667202),
    l = n(481060),
    c = n(63063),
    u = n(74538),
    d = n(937615),
    m = n(230916),
    _ = n(10508),
    p = n(45474),
    f = n(594135),
    C = n(474936),
    h = n(981631),
    x = n(388032),
    y = n(735912),
    b = n(997892),
    g = n(234286);
let I = () => {
    let { transitionState: t, onClose: e, premiumType: n, setStep: I, premiumSubscription: j, churnUserDiscountOffer: P } = (0, f.a)(),
        [v, T] = (0, i.useState)(!1),
        [E, O] = (0, i.useState)(!1),
        S = (0, m._)(j, C.Xh.PREMIUM_MONTH_TIER_2, P),
        N = (0, u.aS)(C.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: j.currency,
            paymentSourceId: j.paymentSourceId
        }),
        R = (0, d.T4)(N.amount, N.currency),
        D = async () => {
            if (null === P) return void O(!0);
            (T(!0), O(!1));
            try {
                (await o.tn.post({
                    url: h.ANM.USER_OFFER_REDEEM,
                    body: { user_discount_offer_id: P.id },
                    rejectWithError: !0
                }),
                    I(p.R.DISCOUNT_APPLIED));
            } catch (t) {
                (O(!0), T(!1));
            }
        };
    if (null === P) return null;
    let w = n === C.p9.TIER_2,
        A = [
            {
                text: x.intl.string(x.t.zl7LZm),
                onClick: () => e(),
                variant: 'secondary',
                disabled: v
            },
            {
                text: x.intl.string(x.t.CKSuZG),
                onClick: () => D(),
                variant: 'primary',
                icon: l.SrA,
                loading: v,
                disabled: v
            }
        ];
    return (0, r.jsxs)(s.I, {
        graphic: { src: w ? g : b },
        gradientColor: w ? 'nitro-pink' : 'nitro-green',
        transitionState: t,
        title: ''.concat(x.intl.format(x.t.q9Vxu7, { percent: P.discount.amount })),
        actions: A,
        onClose: async () => e(),
        children: [
            (0, r.jsx)('div', {
                className: y.offerDetailContainer,
                children: (0, r.jsx)(_.o, {
                    userDiscountOffer: P,
                    offerState: _.w.CONFIRMING
                })
            }),
            (0, r.jsx)('div', {
                className: y.legalContainer,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    children: x.intl.format(x.t.hrGTjI, {
                        discountedPrice: S,
                        billingPeriod: (0, u.JP)(P.discount.user_usage_limit_interval),
                        numMonths: P.discount.user_usage_limit,
                        fullPrice: R,
                        helpdeskArticle: c.Z.getArticleURL(h.BhN.PAID_TERMS)
                    })
                })
            }),
            E ? (0, r.jsx)(a.k, { children: x.intl.string(x.t['5mlOCQ']) }) : null
        ]
    });
};
