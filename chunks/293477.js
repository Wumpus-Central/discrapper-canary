n.d(t, { B: () => m });
var r = n(627968),
    i = n(834730),
    l = n(366174),
    a = n(337817),
    s = n(219103),
    o = n(818348),
    c = n(375708),
    u = n(752274);
function d(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: l } = e,
        a = n ? c.intl.string(c.t.wu4gyV) : c.intl.string(c.t.eFNRzU),
        o = n || !l;
    return (0, r.jsxs)("div", {
        className: u.eg,
        children: [
            (0, r.jsx)("div", {
                className: u.zR,
                children: (0, r.jsx)(i.E, { variant: "text-xs/normal", className: o ? u.r9 : void 0, children: a }),
            }),
            (0, r.jsx)(s.x, { priceAmount: t.amount, priceCurrency: t.currency, className: o ? u.r9 : void 0 }),
        ],
    });
}
function m(e) {
    let {
            prices: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: c,
            product: m,
            hasSufficientOrbs: R,
            onTrackClick: N,
            isProductDisabled: A,
            discountOfferAmount: h,
        } = e,
        _ = null != h;
    return 0 === t.length
        ? null
        : t[0].currency === o.Yr.DISCORD_ORB
          ? (0, r.jsx)(d, { orbPrice: t[0], isProductDisabled: A, hasSufficientOrbs: R })
          : (0, r.jsxs)("div", {
                className: u.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: u.pw,
                        children: [
                            (0, r.jsx)(l.A, {
                                product: m,
                                discount: c,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n || _,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: h,
                            }),
                            n || _ ? null : (0, r.jsx)(a.A, { product: m, onTrackClick: N }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === o.Yr.DISCORD_ORB &&
                        (0, r.jsx)(s.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: A || !R ? u.r9 : void 0,
                        }),
                ],
            });
}
