n.d(t, {
    A: () => d,
});
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    a = n(158954),
    s = n(427262),
    o = n(228053),
    c = n(985018),
    u = n(401775);

function d(e) {
    let { wishlist: t, analyticsLocations: n, user: l, isOwner: d, className: f } = e;
    return (0, r.jsxs)("div", {
        className: i()(u.k, f),
        children: [
            (0, r.jsx)(a.EYj, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: d
                    ? c.intl.string(c.t["+GB8Kt"])
                    : c.intl.formatToPlainString(c.t["D/FWJf"], {
                          username: s.Ay.getName(l),
                      }),
            }),
            (0, r.jsx)(o.A, {
                wishlist: t,
                className: u.V,
                analyticsLocations: n,
                numWishlistItemsToRecommend: 15,
                maxWishlistItemsToShow: 6,
            }),
        ],
    });
}
