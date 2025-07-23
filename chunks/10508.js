n.d(t, { o: () => _ });
var r = n(255367);
n(73800);
var i = n(793030),
    o = n(74538),
    a = n(937615),
    s = n(230916),
    l = n(594135),
    c = n(474936),
    u = n(388032),
    d = n(930280),
    m = n(947866);
let _ = (e) => {
    let { userDiscountOffer: t, applied: n = !1 } = e,
        { premiumSubscription: _ } = (0, l.a)(),
        p = (0, s._)(_, c.Xh.PREMIUM_MONTH_TIER_2, t),
        f = (0, o.aS)(c.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: _.currency,
            paymentSourceId: _.paymentSourceId
        }),
        C = (0, a.T4)(f.amount, f.currency);
    return (0, r.jsxs)('div', {
        className: d.discountOfferContainer,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: m,
                className: d.nitroIcon
            }),
            (0, r.jsxs)('div', {
                className: d.discountOfferContent,
                children: [
                    (0, r.jsx)(i.xv, {
                        variant: 'text-md/semibold',
                        children: u.intl.format(u.t.tQvNlp, { numMonths: t.discount.user_usage_limit })
                    }),
                    n &&
                        (0, r.jsx)(i.xv, {
                            variant: 'text-md/medium',
                            color: 'text-secondary',
                            children: u.intl.format(u.t.gPzMHR, {
                                numMonths: t.discount.user_usage_limit,
                                discountedPrice: p,
                                regularPrice: C
                            })
                        }),
                    !n &&
                        (0, r.jsx)(i.xv, {
                            variant: 'text-md/medium',
                            color: 'text-secondary',
                            children: u.intl.format(u.t['2gem09'], {
                                percent: t.discount.amount,
                                numMonths: t.discount.user_usage_limit
                            })
                        })
                ]
            })
        ]
    });
};
