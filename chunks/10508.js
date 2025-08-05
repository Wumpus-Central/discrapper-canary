n.d(t, {
    o: () => u,
    w: () => d
});
var i,
    r = n(255367);
n(73800);
var s = n(793030),
    a = n(594135),
    l = n(388032),
    o = n(930280),
    c = n(947866),
    d = (((i = {}).NONE = 'none'), (i.CONFIRMING = 'confirming'), (i.APPLIED = 'applied'), i);
let u = (e) => {
        let { userDiscountOffer: t, offerState: n = 'none' } = e;
        return (0, r.jsxs)('div', {
            className: o.discountOfferContainer,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: c,
                    className: o.nitroIcon
                }),
                (0, r.jsxs)('div', {
                    className: o.discountOfferContent,
                    children: [
                        (0, r.jsx)(s.xv, {
                            variant: 'text-md/semibold',
                            children: l.intl.format(l.t.tQvNlp, { numMonths: t.discount.user_usage_limit })
                        }),
                        (0, r.jsx)(m, {
                            userDiscountOffer: t,
                            offerState: n
                        })
                    ]
                })
            ]
        });
    },
    m = (e) => {
        let { userDiscountOffer: t, offerState: n } = e,
            { discountedPrice: i, fullPrice: o } = (0, a.a)();
        switch (n) {
            case 'applied':
                return (0, r.jsx)(s.xv, {
                    variant: 'text-md/normal',
                    color: 'text-secondary',
                    children: l.intl.formatToPlainString(l.t.gPzMHR, {
                        numMonths: t.discount.user_usage_limit,
                        discountedPrice: i,
                        regularPrice: o
                    })
                });
            case 'confirming':
                return (0, r.jsx)(s.xv, {
                    variant: 'text-md/normal',
                    color: 'text-secondary',
                    children: l.intl.formatToPlainString(l.t.Eq1RHB, {
                        percent: t.discount.amount,
                        numMonths: t.discount.user_usage_limit,
                        price: o
                    })
                });
            default:
                return (0, r.jsx)(s.xv, {
                    variant: 'text-md/normal',
                    color: 'text-secondary',
                    children: l.intl.formatToPlainString(l.t['2gem09'], {
                        percent: t.discount.amount,
                        numMonths: t.discount.user_usage_limit
                    })
                });
        }
    };
