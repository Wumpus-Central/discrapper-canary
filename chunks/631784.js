"use strict";
i.d(t, { r: () => I });
var n = i(64700),
    s = i(311907),
    r = i(20424),
    l = i(622543),
    a = i(950191),
    o = i(927813),
    d = i(403362),
    u = i(808247),
    c = i(133025),
    m = i(310209),
    h = i(594832),
    _ = i(652215),
    f = i(188275);
let p = 30 * o.A.Millis.MINUTE;
function I(e) {
    let { userId: t, numItems: i, source: o = h.B5.USER_PROFILE, location: I } = e,
        g = (0, a.Ay)(t),
        { defaultWishlistId: S } = (0, s.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(t) })),
        C = (0, r.A)({ displayProfile: g, location: I }),
        {
            wishlistAndRecommendations: A,
            skusToUserAndReason: w,
            status: x,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, numItems: i, applicationIds: r, source: l = h.B5.USER_PROFILE } = e,
                a = (function (e) {
                    let { userIds: t, numItems: i, applicationIds: r } = e,
                        l = (0, s.bG)([c.A], () => c.A.getRecommendations(t, r));
                    return (
                        n.useEffect(() => {
                            let e = c.A.getRecommendations(t, r);
                            (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - p)) ||
                                u.A.fetchWishlistRecommendations(r, t, i);
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
                    wishlistSkusToUserAndReasonMap: f,
                    wishlistsAreFetching: I,
                    wishlistErrors: g,
                } = (function (e) {
                    let { userIdsAndWishlistIds: t, source: i } = e,
                        { wishlists: s, isFetching: r, errors: l } = (0, h.sv)({ wishlistIdsAndUsers: t, source: i }),
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
                { combinedSkus: A, combinedSkusToUserAndReason: w } = n.useMemo(() => {
                    let e = { ...C };
                    for (let [t, i] of Object.entries(f)) e[t] = { ...e[t], ...i };
                    return { combinedSkus: [...o, ...S], combinedSkusToUserAndReason: e };
                }, [o, S, f, C]);
            return {
                wishlistAndRecommendations: A,
                skusToUserAndReason: w,
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
            userIdsAndWishlistIds: n.useMemo(() => [{ userId: t, wishlistId: S }], [t, S]),
            applicationIds: n.useMemo(() => (C ? [_.FYj, f.XR] : [_.FYj]), [C]),
            numItems: i,
            source: o,
        }),
        b = n.useMemo(() => A.filter((e) => null != w[e.id] && w[e.id][t] === m.j.WISHLIST).length, [A, t, w]);
    return {
        wishlistAndRecommendations: n.useMemo(() => A.slice(0, i), [A, i]),
        skusToUserAndReason: w,
        status: x,
        defaultWishlistId: S,
        totalUnownedWishlistItemCount: b,
    };
}
