"use strict";
i.d(e, { m: () => r });
var n = i(64700),
    s = i(310209);
function r(t) {
    let { wishlistAndRecommendations: e, skusToUserAndReason: i, userId: r, numItems: l } = t;
    return {
        totalUnownedWishlistItemCount: n.useMemo(
            () => e.filter((t) => null != i[t.id] && i[t.id][r] === s.j.WISHLIST).length,
            [e, r, i],
        ),
        slicedWishlistAndRecommendations: n.useMemo(() => e.slice(0, l), [e, l]),
    };
}
