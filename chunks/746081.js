"use strict";
n.d(t, { m: () => r });
var i = n(64700),
    s = n(310209);
function r(e) {
    let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: r, numItems: a } = e;
    return {
        totalUnownedWishlistItemCount: i.useMemo(
            () => t.filter((e) => null != n[e.id] && n[e.id][r] === s.j.WISHLIST).length,
            [t, r, n],
        ),
        slicedWishlistAndRecommendations: i.useMemo(() => t.slice(0, a), [t, a]),
    };
}
