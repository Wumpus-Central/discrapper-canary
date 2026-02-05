n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(993408),
    s = n(506742),
    c = n(219103),
    o = n(652215),
    d = n(258470);
function u(e) {
    let {
            product: t,
            isPremiumUser: n,
            discount: i,
            className: u,
            discountOfferAmount: m,
            hideStrikethroughPrice: x = !1,
            nitroIconType: h,
            nitroIconSize: p = "md",
        } = e,
        f = (0, l.yt)(t, o.lid.DEFAULT);
    if (null == f) return null;
    if (f.amount <= 0)
        return (0, r.jsx)("div", {
            className: a()(d.kG, u),
            children: (0, r.jsx)(c.x, { priceAmount: f.amount, priceCurrency: f.currency }),
        });
    let A = (0, l.yt)(t, o.lid.PREMIUM_TIER_2),
        g = (0, l.aw)(t) && n ? { ...f, amount: i.original } : f,
        _ = n && null != A,
        v = _ ? A : g;
    return (0, r.jsxs)("div", {
        className: a()(d.kG, u),
        children: [
            x ? null : (0, r.jsx)(s.a, { price: g, className: d.q9 }),
            (0, r.jsx)(c.x, {
                priceAmount: v.amount,
                priceCurrency: v.currency,
                discount: i,
                className: a()({ [d.q9]: null == m }),
                nitroIconType: _ ? h : void 0,
                nitroIconSize: p,
                discountOfferAmount: m,
            }),
        ],
    });
}
