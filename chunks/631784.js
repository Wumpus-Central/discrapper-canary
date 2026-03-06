"use strict";
i.d(e, { r: () => _ });
var n = i(64700),
    s = i(311907),
    r = i(20424),
    l = i(622543),
    a = i(950191),
    o = i(927813),
    u = i(403362),
    c = i(808247),
    d = i(133025),
    g = i(310209),
    I = i(321902),
    m = i(594832),
    A = i(746081);
let f = 30 * o.A.Millis.MINUTE;
function _(t) {
    let { userId: e, numItems: i, source: o = m.B5.USER_PROFILE } = t,
        _ = (0, a.Ay)(e),
        { defaultWishlistId: p } = (0, s.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(e) })),
        S = (0, r.A)({ displayProfile: _ }),
        {
            wishlistAndRecommendations: T,
            skusToUserAndReason: h,
            status: E,
        } = (function (t) {
            let { userIdsAndWishlistIds: e, numItems: i, applicationIds: r, source: l = m.B5.USER_PROFILE } = t,
                a = (function (t) {
                    let { userIds: e, numItems: i, applicationIds: r } = t,
                        l = (0, s.bG)([d.A], () => d.A.getRecommendations(e, r));
                    return (
                        n.useEffect(() => {
                            let t = d.A.getRecommendations(e, r);
                            (null != t && ("loading" === t.state || t.fetchedAt >= Date.now() - f)) ||
                                c.A.fetchWishlistRecommendations(r, e, i);
                        }, [e, r, i]),
                        l
                    );
                })({
                    userIds: n.useMemo(
                        () =>
                            e.map((t) => {
                                let { userId: e } = t;
                                return e;
                            }),
                        [e],
                    ),
                    numItems: i,
                    applicationIds: r,
                }),
                {
                    sortedWishlistSkus: o,
                    wishlistSkuIdToSku: I,
                    wishlistSkusToUserAndReasonMap: A,
                    wishlistsAreFetching: _,
                    wishlistErrors: p,
                } = (function (t) {
                    let { userIdsAndWishlistIds: e, source: i } = t,
                        { wishlists: s, isFetching: r, errors: l } = (0, m.sv)({ wishlistIdsAndUsers: e, source: i }),
                        a = n.useMemo(() => {
                            let t = s.filter(u.Vq),
                                e = {};
                            for (let i of t)
                                for (let t of i.items)
                                    null == t.sku ||
                                        t.isOwned ||
                                        (e[t.skuId] = {
                                            ...(null != e[t.skuId] ? e[t.skuId] : {}),
                                            [i.userId]: g.j.WISHLIST,
                                        });
                            return e;
                        }, [s]),
                        o = n.useMemo(
                            () =>
                                Object.fromEntries(
                                    s
                                        .filter(u.Vq)
                                        .flatMap((t) => t.items)
                                        .filter((t) => null != t && null != t.sku && !t.isOwned)
                                        .map((t) => [t.skuId, t.sku]),
                                ),
                            [s],
                        );
                    return {
                        sortedWishlistSkus: n.useMemo(
                            () =>
                                Object.keys(o)
                                    .sort((t, e) => Object.keys(a[e] ?? {}).length - Object.keys(a[t] ?? {}).length)
                                    .map((t) => o[t]),
                            [o, a],
                        ),
                        wishlistSkuIdToSku: o,
                        wishlistSkusToUserAndReasonMap: a,
                        wishlistsAreFetching: r,
                        wishlistErrors: l,
                    };
                })({ userIdsAndWishlistIds: e, source: l }),
                { filteredRecommendations: S, skusToUserAndReasonRecommendations: T } = n.useMemo(
                    () =>
                        null == a || "success" !== a.state
                            ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                            : {
                                  filteredRecommendations: a.data.skus.filter((t) => !(t.id in I)),
                                  skusToUserAndReasonRecommendations: a.data.skusToUserAndReason,
                              },
                    [a, I],
                ),
                { combinedSkus: h, combinedSkusToUserAndReason: E } = n.useMemo(() => {
                    let t = { ...T };
                    for (let [e, i] of Object.entries(A)) t[e] = { ...t[e], ...i };
                    return { combinedSkus: [...o, ...S], combinedSkusToUserAndReason: t };
                }, [o, S, A, T]);
            return {
                wishlistAndRecommendations: h,
                skusToUserAndReason: E,
                status: n.useMemo(
                    () =>
                        _ || null == a || (null != a && "loading" === a.state)
                            ? "loading"
                            : p.filter(u.Vq).length > 0 || "error" === a.state
                              ? "error"
                              : "success",
                    [_, a, p],
                ),
            };
        })({
            userIdsAndWishlistIds: n.useMemo(() => [{ userId: e, wishlistId: p }], [e, p]),
            applicationIds: (0, I.T)(S),
            numItems: i,
            source: o,
        }),
        { totalUnownedWishlistItemCount: C, slicedWishlistAndRecommendations: O } = (0, A.m)({
            wishlistAndRecommendations: T,
            skusToUserAndReason: h,
            userId: e,
            numItems: i,
        });
    return {
        wishlistAndRecommendations: O,
        skusToUserAndReason: h,
        status: E,
        defaultWishlistId: p,
        totalUnownedWishlistItemCount: C,
    };
}
