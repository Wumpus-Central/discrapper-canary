n.d(t, { m: () => i });
var s = n(64700),
    r = n(310209);
function i(e) {
    let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: i, numItems: l } = e;
    return {
        totalUnownedWishlistItemCount: s.useMemo(
            () => t.filter((e) => null != n[e.id] && n[e.id][i] === r.j.WISHLIST).length,
            [t, i, n],
        ),
        slicedWishlistAndRecommendations: s.useMemo(() => t.slice(0, l), [t, l]),
    };
}
