n.d(t, { A: () => g });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    r = n(178213),
    o = n(427262),
    c = n(228053),
    d = n(985018),
    u = n(401775);
function g(e) {
    let { wishlist: t, analyticsLocations: n, user: l, isOwner: g, className: m } = e,
        x = (0, r.G)("social_layer_wishlist_recommendations_on_profile");
    return (0, i.jsxs)("div", {
        className: a()(u.kL, m),
        children: [
            (0, i.jsx)(s.EYj, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: g
                    ? d.intl.string(d.t["+GB8Kt"])
                    : d.intl.formatToPlainString(d.t["D/FWJf"], { username: o.Ay.getName(l) }),
            }),
            (0, i.jsx)(c.A, {
                wishlist: t,
                className: a()(u.Vg, { [u.e6]: x }),
                analyticsLocations: n,
                numWishlistItemsToRecommend: 15,
                maxWishlistItemsToShow: 6,
            }),
        ],
    });
}
