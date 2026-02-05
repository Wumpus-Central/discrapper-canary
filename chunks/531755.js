n.d(t, { A: () => u });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    r = n(158954),
    s = n(427262),
    o = n(228053),
    d = n(985018),
    c = n(401775);
function u(e) {
    let { wishlist: t, analyticsLocations: n, user: l, isOwner: u, className: g } = e;
    return (0, i.jsxs)("div", {
        className: a()(c.k, g),
        children: [
            (0, i.jsx)(r.EYj, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: u
                    ? d.intl.string(d.t["+GB8Kt"])
                    : d.intl.formatToPlainString(d.t["D/FWJf"], { username: s.Ay.getName(l) }),
            }),
            (0, i.jsx)(o.A, {
                wishlist: t,
                className: c.V,
                analyticsLocations: n,
                numWishlistItemsToRecommend: 15,
                maxWishlistItemsToShow: 6,
            }),
        ],
    });
}
