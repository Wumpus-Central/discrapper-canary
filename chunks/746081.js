"use strict";
n.d(t, { m: () => a });
var i = n(64700),
    r = n(310209);
function a(e) {
    let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: a, numItems: s } = e;
    return {
        totalUnownedWishlistItemCount: i.useMemo(
            () => t.filter((e) => null != n[e.id] && n[e.id][a] === r.j.WISHLIST).length,
            [t, a, n],
        ),
        slicedWishlistAndRecommendations: i.useMemo(() => t.slice(0, s), [t, s]),
    };
}
