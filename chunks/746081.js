n.d(t, { m: () => i });
var a = n(64700),
    l = n(310209);
function i(e) {
    let { wishlistAndRecommendations: t, skusToUserAndReason: n, userId: i, numItems: r } = e;
    return {
        totalUnownedWishlistItemCount: a.useMemo(
            () => t.filter((e) => null != n[e.id] && n[e.id][i] === l.j.WISHLIST).length,
            [t, i, n],
        ),
        slicedWishlistAndRecommendations: a.useMemo(() => t.slice(0, r), [t, r]),
    };
}
