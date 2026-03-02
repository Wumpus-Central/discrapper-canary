i.d(t, { m: () => r });
var n = i(64700),
    s = i(310209);
function r(e) {
    let { wishlistAndRecommendations: t, skusToUserAndReason: i, userId: r, numItems: a } = e;
    return {
        totalUnownedWishlistItemCount: n.useMemo(
            () => t.filter((e) => null != i[e.id] && i[e.id][r] === s.j.WISHLIST).length,
            [t, r, i],
        ),
        slicedWishlistAndRecommendations: n.useMemo(() => t.slice(0, a), [t, a]),
    };
}
