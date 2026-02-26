n.d(t, { A: () => u });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    r = n(178213),
    o = n(228053),
    c = n(985018),
    d = n(308581);
function u(e) {
    let { wishlist: t, analyticsLocations: n, className: l } = e,
        u = (0, r.G)("social_layer_wishlist_recommendations_on_profile");
    return (0, i.jsxs)("div", {
        className: a()(d.kL, l),
        children: [
            (0, i.jsx)(s.EYj, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: c.intl.string(c.t["+GB8Kt"]),
            }),
            (0, i.jsx)(o.A, {
                wishlist: t,
                className: a()(d.Vg, { [d.e6]: u }),
                analyticsLocations: n,
                numWishlistItemsToRecommend: 15,
                maxWishlistItemsToShow: 6,
            }),
        ],
    });
}
