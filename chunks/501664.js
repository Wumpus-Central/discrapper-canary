n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(993408),
    s = n(506742),
    c = n(219103),
    o = n(469215);
function d(e) {
    let {
            product: t,
            isPremiumUser: n,
            discount: i,
            className: d,
            discountOfferAmount: u,
            hideStrikethroughPrice: _ = !1,
            nitroIconType: m,
            nitroIconSize: p = "md",
        } = e,
        h = (0, l.WD)(t, { isPremiumUser: n, discount: i });
    if (null == h) return null;
    let { defaultPrice: f, showDefaultPriceOnly: E } = h;
    if (E)
        return (0, r.jsx)("div", {
            className: a()(o.kG, d),
            children: (0, r.jsx)(c.x, { priceAmount: f.amount, priceCurrency: f.currency }),
        });
    let { showNitroPrice: A, originalPrice: v, finalPrice: I } = h;
    return (0, r.jsxs)("div", {
        className: a()(o.kG, d),
        children: [
            _ ? null : (0, r.jsx)(s.a, { price: v, className: o.q9 }),
            (0, r.jsx)(c.x, {
                priceAmount: I.amount,
                priceCurrency: I.currency,
                discount: i,
                className: a()({ [o.q9]: null == u }),
                nitroIconType: A ? m : void 0,
                nitroIconSize: p,
                discountOfferAmount: u,
            }),
        ],
    });
}
