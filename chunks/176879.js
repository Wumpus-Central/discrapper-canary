n.d(t, {
    QX: () => h,
    ZP: () => m,
    fA: () => _,
});
var r = n(473749),
    i = n(164670),
    a = n(765907),
    o = n(927613),
    s = n(125742),
    l = n(896010),
    c = n(687158),
    u = n(321947),
    d = n(602733),
    f = n(582113),
    p = n(388032);
let _ = 4;
function m(e) {
    let { user: t, numItems: n = d.zL, location: p, source: _ } = e,
        m = (0, c.ZP)(t.id),
        h = (0, s.R)({ location: p }),
        { showRecommendations: g } = (0, l.E)({ location: p }),
        E = r.useMemo(() => (_ === d.bd.POPOUT ? g : _ !== d.bd.DM_SIDE_PANEL || h), [_, h, g]),
        b = r.useMemo(() => (_ === d.bd.POPOUT ? d.Yw.POPOUT : d.Yw.USER_PROFILE), [_]),
        {
            defaultWishlistId: y,
            wishlist: O,
            popularCollectiblesProducts: v,
            isFetchingWishlist: S,
            isValidatingPopularProducts: I,
            isFetchingPopularProducts: T,
            wishlistError: C,
        } = (0, d.ZL)({
            giftRecipient: t,
            minNumItems: E ? n : 0,
            source: b,
        }),
        { isDisplayProfileSocialLayerStorefrontEligible: A } = (0, a.Z)({
            displayProfile: m,
            location: p,
        }),
        N = r.useMemo(() => [t.id], [t.id]),
        { recommendations: P } = (0, o.Z)({
            guildId: (0, i.ac)(),
            numWishlistItems: E ? Math.max(n, d.zL) : 0,
            location: p,
            applicationId: f.t9,
            userIds: N,
            includeWishlists: !0,
        }),
        R = r.useMemo(() => {
            var e;
            return E &&
                ((null != (e = null == O ? void 0 : O.items) ? e : []).filter((e) => !0 !== e.isOwned && (0, u.F)(e))
                    .length > 0 ||
                    A)
                ? P
                : [];
        }, [null == O ? void 0 : O.items, A, E, P]),
        {
            displayItems: w,
            hasMoreItems: D,
            totalWishlistItemCount: x,
            wishlistItemCountToBeDisplayed: L,
        } = (0, d.UD)({
            wishlist: O,
            popularCollectiblesProducts: v,
            popularSocialLayerStorefrontItems: R,
            wishlistError: C,
            numItems: n,
        });
    return {
        displayItems: w,
        hasMoreItems: D,
        totalWishlistItemCount: x,
        wishlistItemCountToBeDisplayed: L,
        fetchState: r.useMemo(
            () =>
                S || I || T
                    ? { status: "loading" }
                    : null != C
                      ? {
                            status: "error",
                            error: C,
                        }
                      : { status: "success" },
            [S, I, T, C],
        ),
        defaultWishlistId: y,
        wishlist: O,
    };
}
function h(e) {
    let { user: t, numItems: n = d.zL, source: i, location: a } = e,
        {
            displayItems: o,
            defaultWishlistId: s,
            wishlist: l,
        } = m({
            user: t,
            numItems: n,
            source: i,
            location: a,
        }),
        { displayedWishlistItems: c, title: u } = r.useMemo(() => {
            let e = null == l ? void 0 : l.items.filter((e) => !0 !== e.isOwned);
            return null == e || 0 === e.length
                ? {
                      displayedWishlistItems: null,
                      title: null,
                  }
                : e.length > 1 && e.length < n && o.length > e.length
                  ? {
                        displayedWishlistItems: o,
                        title: p.intl.string(p.t.BCi1gT),
                    }
                  : {
                        displayedWishlistItems: e.map((e) => ({
                            item: e,
                            source: d.lr.WISHLIST,
                        })),
                        title: p.intl.string(p.t["7lZ31J"]),
                    };
        }, [o, l, n]);
    return {
        defaultWishlistId: s,
        displayedWishlistItems: c,
        title: u,
    };
}
