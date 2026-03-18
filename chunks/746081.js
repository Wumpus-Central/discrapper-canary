"use strict";
n.d(t, { m: () => s });
var r = n(64700),
    i = n(310209);
function s(e) {
    let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: s, numItems: a } = e;
    return {
        totalUnownedWishlistItemCount: r.useMemo(
            () => t.filter((e) => null != n[e.id] && n[e.id][s] === i.j.WISHLIST).length,
            [t, s, n],
        ),
        slicedWishlistAndRecommendations: r.useMemo(() => t.slice(0, a), [t, a]),
    };
}
