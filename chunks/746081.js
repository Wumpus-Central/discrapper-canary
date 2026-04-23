n.d(t, { m: () => i });
var l = n(64700),
    a = n(310209);
function i(e) {
    let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: i, numItems: r } = e;
    return {
        totalUnownedWishlistItemCount: l.useMemo(
            () => t.filter((e) => null != n[e.id] && n[e.id][i] === a.j.WISHLIST).length,
            [t, i, n],
        ),
        slicedWishlistAndRecommendations: l.useMemo(() => t.slice(0, r), [t, r]),
    };
}
