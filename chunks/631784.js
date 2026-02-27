i.d(t, { r: () => p });
var n = i(64700),
    s = i(311907),
    r = i(20424),
    l = i(622543),
    a = i(950191),
    o = i(927813),
    d = i(403362),
    c = i(808247),
    u = i(133025),
    m = i(310209),
    _ = i(321902),
    f = i(594832);
let h = 30 * o.A.Millis.MINUTE;
function p(e) {
    let { userId: t, numItems: i, source: o = f.B5.USER_PROFILE, location: p } = e,
        I = (0, a.Ay)(t),
        { defaultWishlistId: g } = (0, s.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(t) })),
        S = (0, r.A)({ displayProfile: I, location: p }),
        {
            wishlistAndRecommendations: C,
            skusToUserAndReason: A,
            status: b,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, numItems: i, applicationIds: r, source: l = f.B5.USER_PROFILE } = e,
                a = (function (e) {
                    let { userIds: t, numItems: i, applicationIds: r } = e,
                        l = (0, s.bG)([u.A], () => u.A.getRecommendations(t, r));
                    return (
                        n.useEffect(() => {
                            let e = u.A.getRecommendations(t, r);
                            (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - h)) ||
                                c.A.fetchWishlistRecommendations(r, t, i);
                        }, [t, r, i]),
                        l
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
                    wishlistSkusToUserAndReasonMap: p,
                    wishlistsAreFetching: I,
                    wishlistErrors: g,
                } = (function (e) {
                    let { userIdsAndWishlistIds: t, source: i } = e,
                        { wishlists: s, isFetching: r, errors: l } = (0, f.sv)({ wishlistIdsAndUsers: t, source: i }),
                        a = n.useMemo(() => {
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
                                    .sort((e, t) => Object.keys(a[t] ?? {}).length - Object.keys(a[e] ?? {}).length)
                                    .map((e) => o[e]),
                            [o, a],
                        ),
                        wishlistSkuIdToSku: o,
                        wishlistSkusToUserAndReasonMap: a,
                        wishlistsAreFetching: r,
                        wishlistErrors: l,
                    };
                })({ userIdsAndWishlistIds: t, source: l }),
                { filteredRecommendations: S, skusToUserAndReasonRecommendations: C } = n.useMemo(
                    () =>
                        null == a || "success" !== a.state
                            ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                            : {
                                  filteredRecommendations: a.data.skus.filter((e) => !(e.id in _)),
                                  skusToUserAndReasonRecommendations: a.data.skusToUserAndReason,
                              },
                    [a, _],
                ),
                { combinedSkus: A, combinedSkusToUserAndReason: b } = n.useMemo(() => {
                    let e = { ...C };
                    for (let [t, i] of Object.entries(p)) e[t] = { ...e[t], ...i };
                    return { combinedSkus: [...o, ...S], combinedSkusToUserAndReason: e };
                }, [o, S, p, C]);
            return {
                wishlistAndRecommendations: A,
                skusToUserAndReason: b,
                status: n.useMemo(
                    () =>
                        I || null == a || (null != a && "loading" === a.state)
                            ? "loading"
                            : g.filter(d.Vq).length > 0 || "error" === a.state
                              ? "error"
                              : "success",
                    [I, a, g],
                ),
            };
        })({
            userIdsAndWishlistIds: n.useMemo(() => [{ userId: t, wishlistId: g }], [t, g]),
            applicationIds: (0, _.T)(S),
            numItems: i,
            source: o,
        }),
        x = n.useMemo(() => C.filter((e) => null != A[e.id] && A[e.id][t] === m.j.WISHLIST).length, [C, t, A]);
    return {
        wishlistAndRecommendations: n.useMemo(() => C.slice(0, i), [C, i]),
        skusToUserAndReason: A,
        status: b,
        defaultWishlistId: g,
        totalUnownedWishlistItemCount: x,
    };
}
