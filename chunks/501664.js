n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    l = n(993408),
    s = n(506742),
    o = n(219103),
    c = n(258470);
function d(e) {
    let {
            product: t,
            isPremiumUser: n,
            discount: r,
            className: d,
            discountOfferAmount: u,
            hideStrikethroughPrice: m = !1,
            nitroIconType: _,
            nitroIconSize: p = "md",
        } = e,
        g = (0, l.WD)(t, { isPremiumUser: n, discount: r });
    if (null == g) return null;
    let { defaultPrice: h, showDefaultPriceOnly: A } = g;
    if (A)
        return (0, a.jsx)("div", {
            className: i()(c.kG, d),
            children: (0, a.jsx)(o.x, { priceAmount: h.amount, priceCurrency: h.currency }),
        });
    let { showNitroPrice: f, originalPrice: v, finalPrice: x } = g;
    return (0, a.jsxs)("div", {
        className: i()(c.kG, d),
        children: [
            m ? null : (0, a.jsx)(s.a, { price: v, className: c.q9 }),
            (0, a.jsx)(o.x, {
                priceAmount: x.amount,
                priceCurrency: x.currency,
                discount: r,
                className: i()({ [c.q9]: null == u }),
                nitroIconType: f ? _ : void 0,
                nitroIconSize: p,
                discountOfferAmount: u,
            }),
        ],
    });
}
