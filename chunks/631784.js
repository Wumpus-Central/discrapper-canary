"use strict";
i.d(t, { r: () => g });
var n = i(64700),
    s = i(311907),
    r = i(20424),
    l = i(622543),
    a = i(950191),
    o = i(927813),
    d = i(403362),
    c = i(808247),
    u = i(133025),
    _ = i(310209),
    m = i(594832),
    I = i(652215),
    f = i(188275);
let p = 30 * o.A.Millis.MINUTE;
function g(e) {
    let { userId: t, numItems: i = m.pl, source: o = m.B5.USER_PROFILE, location: g } = e,
        h = (0, a.Ay)(t),
        { defaultWishlistId: S } = (0, s.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(t) })),
        A = (0, r.A)({ displayProfile: h, location: g }),
        {
            wishlistAndRecommendations: T,
            skusToUserAndReason: b,
            status: L,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, numItems: i = m.pl, applicationIds: r, source: l = m.B5.USER_PROFILE } = e,
                a = (function (e) {
                    let { userIds: t, numItems: i, applicationIds: r } = e,
                        l = (0, s.bG)([u.A], () => u.A.getRecommendations(t, r));
                    return (
                        n.useEffect(() => {
                            let e = u.A.getRecommendations(t, r);
                            (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - p)) ||
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
                    wishlistSkuIdToSku: I,
                    wishlistSkusToUserAndReasonMap: f,
                    wishlistsAreFetching: g,
                    wishlistErrors: h,
                } = (function (e) {
                    let { userIdsAndWishlistIds: t, source: i } = e,
                        { wishlists: s, isFetching: r, errors: l } = (0, m.sv)({ wishlistIdsAndUsers: t, source: i }),
                        a = n.useMemo(() => {
                            let e = s.filter(d.Vq),
                                t = {};
                            for (let i of e)
                                for (let e of i.items)
                                    null == e.sku ||
                                        e.isOwned ||
                                        (t[e.skuId] = {
                                            ...(null != t[e.skuId] ? t[e.skuId] : {}),
                                            [i.userId]: _.j.WISHLIST,
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
                { filteredRecommendations: S, skusToUserAndReasonRecommendations: A } = n.useMemo(
                    () =>
                        null == a || "success" !== a.state
                            ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                            : {
                                  filteredRecommendations: a.data.skus.filter((e) => !(e.id in I)),
                                  skusToUserAndReasonRecommendations: a.data.skusToUserAndReason,
                              },
                    [a, I],
                ),
                { combinedSkus: T, combinedSkusToUserAndReason: b } = n.useMemo(() => {
                    let e = { ...A };
                    for (let [t, i] of Object.entries(f)) e[t] = { ...e[t], ...i };
                    return { combinedSkus: [...o, ...S], combinedSkusToUserAndReason: e };
                }, [o, S, f, A]);
            return {
                wishlistAndRecommendations: T,
                skusToUserAndReason: b,
                status: n.useMemo(
                    () =>
                        g || null == a || (null != a && "loading" === a.state)
                            ? "loading"
                            : h.filter(d.Vq).length > 0 || "error" === a.state
                              ? "error"
                              : "success",
                    [g, a, h],
                ),
            };
        })({
            userIdsAndWishlistIds: n.useMemo(() => [{ userId: t, wishlistId: S }], [t, S]),
            applicationIds: n.useMemo(() => (A ? [I.FYj, f.XR] : [I.FYj]), [A]),
            numItems: i,
            source: o,
        }),
        C = n.useMemo(() => T.filter((e) => null != b[e.id] && b[e.id][t] === _.j.WISHLIST).length, [T, t, b]);
    return {
        wishlistAndRecommendations: n.useMemo(() => T.slice(0, i), [T, i]),
        skusToUserAndReason: b,
        status: L,
        defaultWishlistId: S,
        totalUnownedWishlistItemCount: C,
    };
}
