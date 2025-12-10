n.d(t, {
    QX: () => f,
    ZP: () => d,
    fA: () => u,
});
var r = n(473749),
    i = n(164670),
    a = n(765907),
    o = n(81939),
    s = n(687158),
    l = n(321947),
    c = n(602733);
let u = 4;
function d(e) {
    let { user: t, numItems: n = c.zL, source: u = c.Yw.USER_PROFILE, location: d } = e,
        f = (0, s.ZP)(t.id),
        {
            defaultWishlistId: p,
            wishlist: _,
            popularCollectiblesProducts: m,
            isFetchingWishlist: h,
            isValidatingPopularProducts: g,
            isFetchingPopularProducts: E,
            wishlistError: b,
        } = (0, c.ZL)(t, n, u),
        { isDisplayProfileSocialLayerStorefrontEligible: y } = (0, a.Z)({
            displayProfile: f,
            location: d,
        }),
        { wishlistItems: O } = (0, o.Z)({
            guildId: (0, i.ac)(),
            numWishlistItems: n,
        }),
        v = r.useMemo(() => {
            var e;
            return (null != (e = null == _ ? void 0 : _.items) ? e : []).filter((e) => !0 !== e.isOwned && (0, l.F)(e))
                .length > 0 || y
                ? O
                : [];
        }, [null == _ ? void 0 : _.items, y, O]),
        {
            displayItems: S,
            hasMoreItems: I,
            totalWishlistItemCount: T,
            wishlistItemCountToBeDisplayed: C,
        } = (0, c.UD)({
            wishlist: _,
            popularCollectiblesProducts: m,
            popularSocialLayerStorefrontItems: v,
            wishlistError: b,
            numItems: n,
        });
    return {
        displayItems: S,
        hasMoreItems: I,
        totalWishlistItemCount: T,
        wishlistItemCountToBeDisplayed: C,
        fetchState: r.useMemo(
            () =>
                h || g || E
                    ? { status: "loading" }
                    : null != b
                      ? {
                            status: "error",
                            error: b,
                        }
                      : { status: "success" },
            [h, g, E, b],
        ),
        defaultWishlistId: p,
        wishlist: _,
    };
}
function f(e) {
    let { user: t, numItems: n = c.zL, source: i = c.Yw.USER_PROFILE, location: a } = e,
        {
            displayItems: o,
            defaultWishlistId: s,
            wishlist: l,
            hasMoreItems: u,
            totalWishlistItemCount: f,
            wishlistItemCountToBeDisplayed: p,
            fetchState: _,
        } = d({
            user: t,
            numItems: n,
            source: i,
            location: a,
        }),
        m = r.useMemo(() => {
            let e = null == l ? void 0 : l.items.filter((e) => !0 !== e.isOwned);
            return null == e || 0 === e.length ? null : e.length > 1 && e.length < n ? o.map((e) => e.item) : e;
        }, [o, l, n]);
    return {
        displayItems: o,
        hasMoreItems: u,
        totalWishlistItemCount: f,
        wishlistItemCountToBeDisplayed: p,
        fetchState: _,
        defaultWishlistId: s,
        wishlist: l,
        displayedWishlistItems: m,
    };
}
