e.d(n, {
    o: () => f,
    w: () => m,
});
var i,
    r = e(951288);
e(647438);
var a = e(793030),
    l = e(74538),
    s = e(594135),
    o = e(981631),
    c = e(388032),
    u = e(623361),
    d = e(947866),
    m = (((i = {}).NONE = "none"), (i.CONFIRMING = "confirming"), (i.APPLIED = "applied"), i);
let f = (t) => {
        let { userDiscountOffer: n, offerState: e = "none" } = t,
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
                                    ? c.intl.format(c.t["DC+nPD"], {
                                          numMonths: n.discount.user_usage_limit,
                                          discountedPrice: i,
                                      })
                                    : c.intl.format(c.t.tQvNlp, { numMonths: n.discount.user_usage_limit }),
                        }),
                        (0, r.jsx)(p, {
                            userDiscountOffer: n,
                            offerState: e,
                        }),
                    ],
                }),
            ],
        });
    },
    p = (t) => {
        let { userDiscountOffer: n, offerState: e } = t,
            { discountedPrice: i, fullPrice: u, premiumSubscription: d } = (0, s.a)();
        switch (e) {
            case "applied":
                if (d.status === o.O0b.CANCELED)
                    return (0, r.jsx)(a.xvT, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: c.intl.formatToPlainString(c.t.h2g1IS, {
                            billingPeriod: (0, l.JP)(n.discount.user_usage_limit_interval),
                            numMonths: n.discount.user_usage_limit,
                            fullPrice: u,
                        }),
                    });
                return (0, r.jsx)(a.xvT, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: c.intl.formatToPlainString(c.t.gPzMHR, {
                        numMonths: n.discount.user_usage_limit,
                        discountedPrice: i,
                        regularPrice: u,
                    }),
                });
            case "confirming":
                if (d.status === o.O0b.CANCELED)
                    return (0, r.jsx)(a.xvT, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        children: c.intl.formatToPlainString(c.t.iDFk3t, {
                            billingPeriod: (0, l.JP)(n.discount.user_usage_limit_interval),
                            numMonths: n.discount.user_usage_limit,
                            fullPrice: u,
                        }),
                    });
                return (0, r.jsx)(a.xvT, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: c.intl.formatToPlainString(c.t.Eq1RHB, {
                        percent: n.discount.amount,
                        numMonths: n.discount.user_usage_limit,
                        price: u,
                    }),
                });
            default:
                return (0, r.jsx)(a.xvT, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: c.intl.formatToPlainString(c.t["2gem09"], {
                        percent: n.discount.amount,
                        numMonths: n.discount.user_usage_limit,
                    }),
                });
        }
    };
