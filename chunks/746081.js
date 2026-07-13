n.d(e, { m: () => o });
var i = n(64700),
    l = n(310209);
function o(t) {
    let { wishlistAndRecommendations: e, skusToUserAndReason: n, userId: o, numItems: r } = t;
    return {
        totalUnownedWishlistItemCount: i.useMemo(
            () => e.filter((t) => null != n[t.id] && n[t.id][o] === l.j.WISHLIST).length,
            [e, o, n],
        ),
        slicedWishlistAndRecommendations: i.useMemo(() => e.slice(0, r), [e, r]),
    };
}
