n.d(e, {
    o: () => f,
    w: () => m,
});
var i,
    r = n(951288);
n(647438);
var a = n(793030),
    l = n(74538),
    s = n(594135),
    o = n(981631),
    c = n(388032),
    u = n(623361),
    d = n(947866),
    m = (((i = {}).NONE = "none"), (i.CONFIRMING = "confirming"), (i.APPLIED = "applied"), i);
let f = (t) => {
        let { userDiscountOffer: e, offerState: n = "none" } = t,
            { discountedPrice: i, premiumSubscription: l } = (0, s.a)();
        return (0, r.jsxs)("div", {
            className: u.discountOfferContainer,
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    src: d,
                    className: u.nitroIcon,
                }),
                (0, r.jsxs)("div", {
                    className: u.discountOfferContent,
                    children: [
                        (0, r.jsx)(a.xvT, {
                            variant: "text-md/semibold",
                            children:
                                l.status === o.O0b.CANCELED
                                    ? c.intl.format(c.t["DC+nPC"], {
                                          numMonths: e.discount.user_usage_limit,
                                          discountedPrice: i,
                                      })
                                    : c.intl.format(c.t.tQvNll, { numMonths: e.discount.user_usage_limit }),
                        }),
                        (0, r.jsx)(p, {
                            userDiscountOffer: e,
                            offerState: n,
                        }),
                    ],
                }),
            ],
        });
    },
    p = (t) => {
        let { userDiscountOffer: e, offerState: n } = t,
            { discountedPrice: i, fullPrice: u, premiumSubscription: d } = (0, s.a)();
        switch (n) {
            case "applied":
                if (d.status === o.O0b.CANCELED)
                    return (0, r.jsx)(a.xvT, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: c.intl.formatToPlainString(c.t.h2g1Ia, {
                            billingPeriod: (0, l.JP)(e.discount.user_usage_limit_interval),
                            numMonths: e.discount.user_usage_limit,
                            fullPrice: u,
                        }),
                    });
                return (0, r.jsx)(a.xvT, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: c.intl.formatToPlainString(c.t.gPzMHa, {
                        numMonths: e.discount.user_usage_limit,
                        discountedPrice: i,
                        regularPrice: u,
                    }),
                });
            case "confirming":
                if (d.status === o.O0b.CANCELED)
                    return (0, r.jsx)(a.xvT, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: c.intl.formatToPlainString(c.t.iDFk3v, {
                            billingPeriod: (0, l.JP)(e.discount.user_usage_limit_interval),
                            numMonths: e.discount.user_usage_limit,
                            fullPrice: u,
                        }),
                    });
                return (0, r.jsx)(a.xvT, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: c.intl.formatToPlainString(c.t.Eq1RHL, {
                        percent: e.discount.amount,
                        numMonths: e.discount.user_usage_limit,
                        price: u,
                    }),
                });
            default:
                return (0, r.jsx)(a.xvT, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: c.intl.formatToPlainString(c.t["2gem05"], {
                        percent: e.discount.amount,
                        numMonths: e.discount.user_usage_limit,
                    }),
                });
        }
    };
