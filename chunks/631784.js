n.d(t, { U: () => R, r: () => L });
var s = n(64700),
    r = n(311907),
    i = n(20424),
    l = n(622543),
    o = n(950191),
    u = n(927813),
    d = n(403362),
    a = n(808247),
    c = n(133025),
    m = n(310209),
    I = n(321902),
    h = n(594832),
    f = n(746081);
let S = 30 * u.A.Millis.MINUTE;
function g(e) {
    let { userIdsAndWishlistIds: t, numItems: n, applicationIds: i, source: l = h.B5.USER_PROFILE } = e,
        o = (function (e) {
            let { userIds: t, numItems: n, applicationIds: i } = e,
                l = (0, r.bG)([c.A], () => c.A.getRecommendations(t, i));
            return (
                s.useEffect(() => {
                    let e = c.A.getRecommendations(t, i);
                    (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - S)) ||
                        a.A.fetchWishlistRecommendations(i, t, n);
                }, [t, i, n]),
                l
            );
        })({
            userIds: s.useMemo(
                () =>
                    t.map((e) => {
                        let { userId: t } = e;
                        return t;
                    }),
                [t],
            ),
            numItems: n,
            applicationIds: i,
        }),
        {
            sortedWishlistSkus: u,
            wishlistSkuIdToSku: I,
            wishlistSkusToUserAndReasonMap: f,
            wishlistsAreFetching: g,
            wishlistErrors: A,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: n } = e,
                { wishlists: r, isFetching: i, errors: l } = (0, h.sv)({ wishlistIdsAndUsers: t, source: n }),
                o = s.useMemo(() => {
                    let e = r.filter(d.Vq),
                        t = {};
                    for (let n of e)
                        for (let e of n.items)
                            null == e.sku ||
                                e.isOwned ||
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: m.j.WISHLIST });
                    return t;
                }, [r]),
                u = s.useMemo(
                    () =>
                        Object.fromEntries(
                            r
                                .filter(d.Vq)
                                .flatMap((e) => e.items)
                                .filter((e) => null != e && null != e.sku && !e.isOwned)
                                .map((e) => [e.skuId, e.sku]),
                        ),
                    [r],
                );
            return {
                sortedWishlistSkus: s.useMemo(
                    () =>
                        Object.keys(u)
                            .sort((e, t) => Object.keys(o[t] ?? {}).length - Object.keys(o[e] ?? {}).length)
                            .map((e) => u[e]),
                    [u, o],
                ),
                wishlistSkuIdToSku: u,
                wishlistSkusToUserAndReasonMap: o,
                wishlistsAreFetching: i,
                wishlistErrors: l,
            };
        })({ userIdsAndWishlistIds: t, source: l }),
        { filteredRecommendations: E, skusToUserAndReasonRecommendations: L } = s.useMemo(
            () =>
                null == o || "success" !== o.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: o.data.skus.filter((e) => !(e.id in I)),
                          skusToUserAndReasonRecommendations: o.data.skusToUserAndReason,
                      },
            [o, I],
        ),
        { combinedSkus: R, combinedSkusToUserAndReason: M } = s.useMemo(() => {
            let e = { ...L };
            for (let [t, n] of Object.entries(f)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...u, ...E], combinedSkusToUserAndReason: e };
        }, [u, E, f, L]);
    return {
        recommendations: E,
        wishlistAndRecommendations: R,
        skusToUserAndReason: M,
        status: s.useMemo(
            () =>
                g || null == o || (null != o && "loading" === o.state)
                    ? "loading"
                    : A.filter(d.Vq).length > 0 || "error" === o.state
                      ? "error"
                      : "success",
            [g, o, A],
        ),
    };
}
function A(e) {
    let t = (0, o.Ay)(e),
        n = (0, i.A)({ displayProfile: t });
    return (0, I.T)(n);
}
function E(e) {
    let { defaultWishlistId: t } = (0, r.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: s.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function L(e) {
    let { userId: t, numItems: n, source: s = h.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: r, defaultWishlistId: i } = E(t),
        {
            wishlistAndRecommendations: l,
            skusToUserAndReason: o,
            status: u,
        } = g({ userIdsAndWishlistIds: r, applicationIds: A(t), numItems: n, source: s }),
        { totalUnownedWishlistItemCount: d, slicedWishlistAndRecommendations: a } = (0, f.m)({
            wishlistAndRecommendations: l,
            skusToUserAndReason: o,
            userId: t,
            numItems: n,
        });
    return {
        wishlistAndRecommendations: a,
        skusToUserAndReason: o,
        status: u,
        defaultWishlistId: i,
        totalUnownedWishlistItemCount: d,
    };
}
function R(e) {
    let { userId: t, numItems: n, source: r = h.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: i } = E(t),
        {
            recommendations: l,
            skusToUserAndReason: o,
            status: u,
        } = g({ userIdsAndWishlistIds: i, applicationIds: A(t), numItems: n, source: r });
    return { recommendations: s.useMemo(() => l.slice(0, n), [l, n]), skusToUserAndReason: o, status: u };
}
