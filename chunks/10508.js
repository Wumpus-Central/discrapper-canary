n.d(t, {
    o: () => f,
    w: () => d,
});
var r = n(951288);
n(647438);
var i = n(793030),
    a = n(74538),
    o = n(594135),
    s = n(981631),
    l = n(388032),
    c = n(623361),
    u = n(947866),
    d = (function (e) {
        return (e.NONE = "none"), (e.CONFIRMING = "confirming"), (e.APPLIED = "applied"), e;
    })({});
let f = (e) => {
        let { userDiscountOffer: t, offerState: n = "none" } = e,
            { discountedPrice: a, premiumSubscription: d } = (0, o.a)();
        return (0, r.jsxs)("div", {
            className: c.discountOfferContainer,
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    src: u,
                    className: c.nitroIcon,
                }),
                (0, r.jsxs)("div", {
                    className: c.discountOfferContent,
                    children: [
                        (0, r.jsx)(i.xvT, {
                            variant: "text-md/semibold",
                            children:
                                d.status === s.O0b.CANCELED
                                    ? l.intl.format(l.t["DC+nPC"], {
                                          numMonths: t.discount.user_usage_limit,
                                          discountedPrice: a,
                                      })
                                    : l.intl.format(l.t.tQvNll, { numMonths: t.discount.user_usage_limit }),
                        }),
                        (0, r.jsx)(_, {
                            userDiscountOffer: t,
                            offerState: n,
                        }),
                    ],
                }),
            ],
        });
    },
    _ = (e) => {
        let { userDiscountOffer: t, offerState: n } = e,
            { discountedPrice: c, fullPrice: u, premiumSubscription: d } = (0, o.a)();
        switch (n) {
            case "applied":
                if (d.status === s.O0b.CANCELED)
                    return (0, r.jsx)(i.xvT, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: l.intl.formatToPlainString(l.t.h2g1Ia, {
                            billingPeriod: (0, a.JP)(t.discount.user_usage_limit_interval),
                            numMonths: t.discount.user_usage_limit,
                            fullPrice: u,
                        }),
                    });
                return (0, r.jsx)(i.xvT, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: l.intl.formatToPlainString(l.t.gPzMHa, {
                        numMonths: t.discount.user_usage_limit,
                        discountedPrice: c,
                        regularPrice: u,
                    }),
                });
            case "confirming":
                if (d.status === s.O0b.CANCELED)
                    return (0, r.jsx)(i.xvT, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: l.intl.formatToPlainString(l.t.iDFk3v, {
                            billingPeriod: (0, a.JP)(t.discount.user_usage_limit_interval),
                            numMonths: t.discount.user_usage_limit,
                            fullPrice: u,
                        }),
                    });
                return (0, r.jsx)(i.xvT, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: l.intl.formatToPlainString(l.t.Eq1RHL, {
                        percent: t.discount.amount,
                        numMonths: t.discount.user_usage_limit,
                        price: u,
                    }),
                });
            default:
                return (0, r.jsx)(i.xvT, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: l.intl.formatToPlainString(l.t["2gem05"], {
                        percent: t.discount.amount,
                        numMonths: t.discount.user_usage_limit,
                    }),
                });
        }
    };
