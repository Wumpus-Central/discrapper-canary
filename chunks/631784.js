"use strict";
n.d(t, { r: () => S });
var i = n(64700),
    s = n(311907),
    r = n(20424),
    a = n(622543),
    l = n(950191),
    o = n(927813),
    c = n(403362),
    d = n(808247),
    u = n(133025),
    _ = n(310209),
    I = n(321902),
    A = n(594832),
    g = n(746081);
let f = 30 * o.A.Millis.MINUTE;
function S(e) {
    let { userId: t, numItems: n, source: o = A.B5.USER_PROFILE, location: S } = e,
        p = (0, l.Ay)(t),
        { defaultWishlistId: E } = (0, s.cf)([a.A], () => ({ defaultWishlistId: a.A.getFirstWishlistId(t) })),
        m = (0, r.A)({ displayProfile: p, location: S }),
        {
            wishlistAndRecommendations: T,
            skusToUserAndReason: L,
            status: C,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, numItems: n, applicationIds: r, source: a = A.B5.USER_PROFILE } = e,
                l = (function (e) {
                    let { userIds: t, numItems: n, applicationIds: r } = e,
                        a = (0, s.bG)([u.A], () => u.A.getRecommendations(t, r));
                    return (
                        i.useEffect(() => {
                            let e = u.A.getRecommendations(t, r);
                            (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - f)) ||
                                d.A.fetchWishlistRecommendations(r, t, n);
                        }, [t, r, n]),
                        a
                    );
                })({
                    userIds: i.useMemo(
                        () =>
                            t.map((e) => {
                                let { userId: t } = e;
                                return t;
                            }),
                        [t],
                    ),
                    numItems: n,
                    applicationIds: r,
                }),
                {
                    sortedWishlistSkus: o,
                    wishlistSkuIdToSku: I,
                    wishlistSkusToUserAndReasonMap: g,
                    wishlistsAreFetching: S,
                    wishlistErrors: p,
                } = (function (e) {
                    let { userIdsAndWishlistIds: t, source: n } = e,
                        { wishlists: s, isFetching: r, errors: a } = (0, A.sv)({ wishlistIdsAndUsers: t, source: n }),
                        l = i.useMemo(() => {
                            let e = s.filter(c.Vq),
                                t = {};
                            for (let n of e)
                                for (let e of n.items)
                                    null == e.sku ||
                                        e.isOwned ||
                                        (t[e.skuId] = {
                                            ...(null != t[e.skuId] ? t[e.skuId] : {}),
                                            [n.userId]: _.j.WISHLIST,
                                        });
                            return t;
                        }, [s]),
                        o = i.useMemo(
                            () =>
                                Object.fromEntries(
                                    s
                                        .filter(c.Vq)
                                        .flatMap((e) => e.items)
                                        .filter((e) => null != e && null != e.sku && !e.isOwned)
                                        .map((e) => [e.skuId, e.sku]),
                                ),
                            [s],
                        );
                    return {
                        sortedWishlistSkus: i.useMemo(
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
                { filteredRecommendations: E, skusToUserAndReasonRecommendations: m } = i.useMemo(
                    () =>
                        null == l || "success" !== l.state
                            ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                            : {
                                  filteredRecommendations: l.data.skus.filter((e) => !(e.id in I)),
                                  skusToUserAndReasonRecommendations: l.data.skusToUserAndReason,
                              },
                    [l, I],
                ),
                { combinedSkus: T, combinedSkusToUserAndReason: L } = i.useMemo(() => {
                    let e = { ...m };
                    for (let [t, n] of Object.entries(g)) e[t] = { ...e[t], ...n };
                    return { combinedSkus: [...o, ...E], combinedSkusToUserAndReason: e };
                }, [o, E, g, m]);
            return {
                wishlistAndRecommendations: T,
                skusToUserAndReason: L,
                status: i.useMemo(
                    () =>
                        S || null == l || (null != l && "loading" === l.state)
                            ? "loading"
                            : p.filter(c.Vq).length > 0 || "error" === l.state
                              ? "error"
                              : "success",
                    [S, l, p],
                ),
            };
        })({
            userIdsAndWishlistIds: i.useMemo(() => [{ userId: t, wishlistId: E }], [t, E]),
            applicationIds: (0, I.T)(m),
            numItems: n,
            source: o,
        }),
        { totalUnownedWishlistItemCount: O, slicedWishlistAndRecommendations: h } = (0, g.m)({
            wishlistAndRecommendations: T,
            skusToUserAndReason: L,
            userId: t,
            numItems: n,
        });
    return {
        wishlistAndRecommendations: h,
        skusToUserAndReason: L,
        status: C,
        defaultWishlistId: E,
        totalUnownedWishlistItemCount: O,
    };
}
