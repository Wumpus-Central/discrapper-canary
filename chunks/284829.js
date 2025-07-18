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
    let { transitionState: e, onClose: t, premiumType: n, setStep: v, premiumSubscription: j, churnUserDiscountOffer: I } = (0, f.a)(),
        [T, E] = (0, i.useState)(!1),
        [P, O] = (0, i.useState)(!1),
        S = (0, m._)(j, C.Xh.PREMIUM_MONTH_TIER_2, I),
        N = (0, u.aS)(C.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: j.currency,
            paymentSourceId: j.paymentSourceId
        }),
        R = (0, d.T4)(N.amount, N.currency),
        D = async () => {
            if (null === I) return void O(!0);
            (E(!0), O(!1));
            try {
                (await o.tn.post({
                    url: h.ANM.USER_OFFER_REDEEM,
                    body: { user_discount_offer_id: I.id },
                    rejectWithError: !0
                }),
                    v(_.R.DISCOUNT_APPLIED));
            } catch (e) {
                (O(!0), E(!1));
            }
        };
    if (null === I) return null;
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
        graphic: w ? g : b,
        gradientColor: w ? 'nitro-pink' : 'nitro-green',
        transitionState: e,
        title: ''.concat(x.intl.format(x.t.q9Vxu7, { percent: I.discount.amount })),
        actions: A,
        onClose: async () => t(),
        children: [
            (0, r.jsx)('div', {
                className: y.offerDetailContainer,
                children: (0, r.jsx)(p.o, { userDiscountOffer: I })
            }),
            (0, r.jsx)('div', {
                className: y.legalContainer,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    children: x.intl.format(x.t.hrGTjI, {
                        discountedPrice: S,
                        billingPeriod: (0, u.JP)(I.discount.user_usage_limit_interval),
                        numMonths: I.discount.user_usage_limit,
                        fullPrice: R,
                        helpdeskArticle: c.Z.getArticleURL(h.BhN.PAID_TERMS)
                    })
                })
            }),
            P ? (0, r.jsx)(a.k, { children: x.intl.string(x.t['5mlOCQ']) }) : null
        ]
    });
};
