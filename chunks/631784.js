i.d(t, { r: () => I });
var n = i(64700),
    s = i(311907),
    r = i(20424),
    a = i(622543),
    l = i(950191),
    o = i(927813),
    d = i(403362),
    c = i(808247),
    u = i(133025),
    m = i(310209),
    _ = i(321902),
    f = i(594832),
    h = i(746081);
let p = 30 * o.A.Millis.MINUTE;
function I(e) {
    let { userId: t, numItems: i, source: o = f.B5.USER_PROFILE, location: I } = e,
        g = (0, l.Ay)(t),
        { defaultWishlistId: S } = (0, s.cf)([a.A], () => ({ defaultWishlistId: a.A.getFirstWishlistId(t) })),
        C = (0, r.A)({ displayProfile: g, location: I }),
        {
            wishlistAndRecommendations: A,
            skusToUserAndReason: b,
            status: x,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, numItems: i, applicationIds: r, source: a = f.B5.USER_PROFILE } = e,
                l = (function (e) {
                    let { userIds: t, numItems: i, applicationIds: r } = e,
                        a = (0, s.bG)([u.A], () => u.A.getRecommendations(t, r));
                    return (
                        n.useEffect(() => {
                            let e = u.A.getRecommendations(t, r);
                            (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - p)) ||
                                c.A.fetchWishlistRecommendations(r, t, i);
                        }, [t, r, i]),
                        a
                    );
                })({
                    userIds: n.useMemo(
                        () =>
                            t.map((e) => {
                                let { userId: t } = e;
                                return t;
                            }),
                        [t],
                    ),
                    numItems: i,
                    applicationIds: r,
                }),
                {
                    sortedWishlistSkus: o,
                    wishlistSkuIdToSku: _,
                    wishlistSkusToUserAndReasonMap: h,
                    wishlistsAreFetching: I,
                    wishlistErrors: g,
                } = (function (e) {
                    let { userIdsAndWishlistIds: t, source: i } = e,
                        { wishlists: s, isFetching: r, errors: a } = (0, f.sv)({ wishlistIdsAndUsers: t, source: i }),
                        l = n.useMemo(() => {
                            let e = s.filter(d.Vq),
                                t = {};
                            for (let i of e)
                                for (let e of i.items)
                                    null == e.sku ||
                                        e.isOwned ||
                                        (t[e.skuId] = {
                                            ...(null != t[e.skuId] ? t[e.skuId] : {}),
                                            [i.userId]: m.j.WISHLIST,
                                        });
                            return t;
                        }, [s]),
                        o = n.useMemo(
                            () =>
                                Object.fromEntries(
                                    s
                                        .filter(d.Vq)
                                        .flatMap((e) => e.items)
                                        .filter((e) => null != e && null != e.sku && !e.isOwned)
                                        .map((e) => [e.skuId, e.sku]),
                                ),
                            [s],
                        );
                    return {
                        sortedWishlistSkus: n.useMemo(
                            () =>
                                Object.keys(o)
                                    .sort((e, t) => Object.keys(l[t] ?? {}).length - Object.keys(l[e] ?? {}).length)
                                    .map((e) => o[e]),
                            [o, l],
                        ),
                        wishlistSkuIdToSku: o,
                        wishlistSkusToUserAndReasonMap: l,
                        wishlistsAreFetching: r,
                        wishlistErrors: a,
                    };
                })({ userIdsAndWishlistIds: t, source: a }),
                { filteredRecommendations: S, skusToUserAndReasonRecommendations: C } = n.useMemo(
                    () =>
                        null == l || "success" !== l.state
                            ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                            : {
                                  filteredRecommendations: l.data.skus.filter((e) => !(e.id in _)),
                                  skusToUserAndReasonRecommendations: l.data.skusToUserAndReason,
                              },
                    [l, _],
                ),
                { combinedSkus: A, combinedSkusToUserAndReason: b } = n.useMemo(() => {
                    let e = { ...C };
                    for (let [t, i] of Object.entries(h)) e[t] = { ...e[t], ...i };
                    return { combinedSkus: [...o, ...S], combinedSkusToUserAndReason: e };
                }, [o, S, h, C]);
            return {
                wishlistAndRecommendations: A,
                skusToUserAndReason: b,
                status: n.useMemo(
                    () =>
                        I || null == l || (null != l && "loading" === l.state)
                            ? "loading"
                            : g.filter(d.Vq).length > 0 || "error" === l.state
                              ? "error"
                              : "success",
                    [I, l, g],
                ),
            };
        })({
            userIdsAndWishlistIds: n.useMemo(() => [{ userId: t, wishlistId: S }], [t, S]),
            applicationIds: (0, _.T)(C),
            numItems: i,
            source: o,
        }),
        { totalUnownedWishlistItemCount: w, slicedWishlistAndRecommendations: T } = (0, h.m)({
            wishlistAndRecommendations: A,
            skusToUserAndReason: b,
            userId: t,
            numItems: i,
        });
    return {
        wishlistAndRecommendations: T,
        skusToUserAndReason: b,
        status: x,
        defaultWishlistId: S,
        totalUnownedWishlistItemCount: w,
    };
}
