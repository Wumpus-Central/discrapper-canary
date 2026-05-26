n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(993408),
    s = n(834730),
    o = n(140735),
    c = n(580630),
    u = n(375708),
    d = n(252955);
let m = (e) => {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: a = "heading-md/semibold",
        } = e,
        m = (0, c.RS)(t, n);
    return (0, r.jsxs)(s.E, {
        variant: a,
        className: l()(d.v, i),
        children: [
            (0, r.jsx)(o.A, { children: u.intl.format(u.t["2CEGln"], { price: m }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: m }),
        ],
    });
};
var R = n(219103),
    N = n(469215);
function A(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: s,
            className: o,
            discountOfferAmount: c,
            hideStrikethroughPrice: u = !1,
            discountIconDisplayMode: d,
            discountIconSize: A = "md",
        } = e,
        h = (0, a.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == h) return null;
    let { defaultPrice: _, showDefaultPriceOnly: v } = h;
    if (v)
        return (0, r.jsx)("div", {
            className: l()(N.kG, o),
            children: (0, r.jsx)(R.x, { priceAmount: _.amount, priceCurrency: _.currency }),
        });
    let { showDiscountPrice: g, originalPrice: E, finalPrice: x } = h;
    return (0, r.jsxs)("div", {
        className: l()(N.kG, o),
        children: [
            u ? null : (0, r.jsx)(m, { price: E, className: N.q9 }),
            (0, r.jsx)(R.x, {
                priceAmount: x.amount,
                priceCurrency: x.currency,
                discount: s,
                className: l()({ [N.q9]: null == c }),
                discountIconConfig: g && null != d ? { displayMode: d, source: i ?? a.D0.NITRO, size: A } : void 0,
                discountOfferAmount: c,
            }),
        ],
    });
}
