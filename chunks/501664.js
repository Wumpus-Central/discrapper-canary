n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(993408),
    l = n(506742),
    o = n(219103),
    c = n(137935);
function d(e) {
    let {
            product: t,
            isPremiumUser: n,
            discount: a,
            className: d,
            discountOfferAmount: u,
            hideStrikethroughPrice: m = !1,
            nitroIconType: p,
            nitroIconSize: h = "md",
        } = e,
        x = (0, s.WD)(t, { isPremiumUser: n, discount: a });
    if (null == x) return null;
    let { defaultPrice: f, showDefaultPriceOnly: v } = x;
    if (v)
        return (0, r.jsx)("div", {
            className: i()(c.kG, d),
            children: (0, r.jsx)(o.x, { priceAmount: f.amount, priceCurrency: f.currency }),
        });
    let { showNitroPrice: g, originalPrice: _, finalPrice: A } = x;
    return (0, r.jsxs)("div", {
        className: i()(c.kG, d),
        children: [
            m ? null : (0, r.jsx)(l.a, { price: _, className: c.q9 }),
            (0, r.jsx)(o.x, {
                priceAmount: A.amount,
                priceCurrency: A.currency,
                discount: a,
                className: i()({ [c.q9]: null == u }),
                nitroIconType: g ? p : void 0,
                nitroIconSize: h,
                discountOfferAmount: u,
            }),
        ],
    });
}
