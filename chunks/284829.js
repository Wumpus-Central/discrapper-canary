(n.d(t, { U: () => v }), n(388685));
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
    p = n(10508),
    _ = n(45474),
    f = n(594135),
    C = n(474936),
    h = n(981631),
    x = n(388032),
    y = n(735912),
    b = n(997892),
    g = n(234286);
let v = () => {
    let { transitionState: e, onClose: t, premiumType: n, setStep: v, premiumSubscription: I, churnUserDiscountOffer: j } = (0, f.a)(),
        [T, E] = (0, i.useState)(!1),
        [P, O] = (0, i.useState)(!1),
        S = (0, m._)(I, C.Xh.PREMIUM_MONTH_TIER_2, j),
        N = (0, u.aS)(C.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: I.currency,
            paymentSourceId: I.paymentSourceId
        }),
        R = (0, d.T4)(N.amount, N.currency),
        D = async () => {
            if (null === j) return void O(!0);
            (E(!0), O(!1));
            try {
                (await o.tn.post({
                    url: h.ANM.USER_OFFER_REDEEM,
                    body: { user_discount_offer_id: j.id },
                    rejectWithError: !0
                }),
                    v(_.R.DISCOUNT_APPLIED));
            } catch (e) {
                (O(!0), E(!1));
            }
        };
    if (null === j) return null;
    let w = n === C.p9.TIER_2,
        A = [
            {
                text: x.intl.string(x.t.zl7LZm),
                onClick: () => t(),
                variant: 'secondary',
                disabled: T
            },
            {
                text: x.intl.string(x.t.CKSuZG),
                onClick: () => D(),
                variant: 'primary',
                loading: T,
                disabled: T
            }
        ];
    return (0, r.jsxs)(s.I, {
        graphic: { src: w ? g : b },
        gradientColor: w ? 'nitro-pink' : 'nitro-green',
        transitionState: e,
        title: ''.concat(x.intl.format(x.t.q9Vxu7, { percent: j.discount.amount })),
        actions: A,
        onClose: async () => t(),
        children: [
            (0, r.jsx)('div', {
                className: y.offerDetailContainer,
                children: (0, r.jsx)(p.o, { userDiscountOffer: j })
            }),
            (0, r.jsx)('div', {
                className: y.legalContainer,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    children: x.intl.format(x.t.hrGTjI, {
                        discountedPrice: S,
                        billingPeriod: (0, u.JP)(j.discount.user_usage_limit_interval),
                        numMonths: j.discount.user_usage_limit,
                        fullPrice: R,
                        helpdeskArticle: c.Z.getArticleURL(h.BhN.PAID_TERMS)
                    })
                })
            }),
            P ? (0, r.jsx)(a.k, { children: x.intl.string(x.t['5mlOCQ']) }) : null
        ]
    });
};
