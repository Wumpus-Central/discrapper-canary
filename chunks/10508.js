n.d(t, {
    o: () => f,
    w: () => p
});
var r,
    i = n(255367);
n(73800);
var o = n(793030),
    a = n(74538),
    s = n(937615),
    l = n(230916),
    c = n(594135),
    u = n(474936),
    d = n(388032),
    m = n(930280),
    _ = n(947866),
    p = (((r = {}).NONE = 'none'), (r.CONFIRMING = 'confirming'), (r.APPLIED = 'applied'), r);
let f = (e) => {
        let { userDiscountOffer: t, offerState: n = 'none' } = e;
        return (0, i.jsxs)('div', {
            className: m.discountOfferContainer,
            children: [
                (0, i.jsx)('img', {
                    alt: '',
                    src: _,
                    className: m.nitroIcon
                }),
                (0, i.jsxs)('div', {
                    className: m.discountOfferContent,
                    children: [
                        (0, i.jsx)(o.xv, {
                            variant: 'text-md/semibold',
                            children: d.intl.format(d.t.tQvNlp, { numMonths: t.discount.user_usage_limit })
                        }),
                        (0, i.jsx)(C, {
                            userDiscountOffer: t,
                            offerState: n
                        })
                    ]
                })
            ]
        });
    },
    C = (e) => {
        let { userDiscountOffer: t, offerState: n } = e,
            { premiumSubscription: r } = (0, c.a)(),
            m = (0, l._)(r, u.Xh.PREMIUM_MONTH_TIER_2, t),
            _ = (0, a.aS)(u.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
                currency: r.currency,
                paymentSourceId: r.paymentSourceId
            }),
            p = (0, s.T4)(_.amount, _.currency);
        switch (n) {
            case 'applied':
                return (0, i.jsx)(o.xv, {
                    variant: 'text-md/normal',
                    color: 'text-secondary',
                    children: d.intl.formatToPlainString(d.t.gPzMHR, {
                        numMonths: t.discount.user_usage_limit,
                        discountedPrice: m,
                        regularPrice: p
                    })
                });
            case 'confirming':
                return (0, i.jsx)(o.xv, {
                    variant: 'text-md/normal',
                    color: 'text-secondary',
                    children: d.intl.formatToPlainString(d.t.Eq1RHB, {
                        percent: t.discount.amount,
                        numMonths: t.discount.user_usage_limit,
                        price: p
                    })
                });
            default:
                return (0, i.jsx)(o.xv, {
                    variant: 'text-md/normal',
                    color: 'text-secondary',
                    children: d.intl.formatToPlainString(d.t['2gem09'], {
                        percent: t.discount.amount,
                        numMonths: t.discount.user_usage_limit
                    })
                });
        }
    };
