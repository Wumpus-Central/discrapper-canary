"use strict";
n.d(t, { Ul: () => O, XQ: () => R, rg: () => C });
var r = n(64700),
    i = n(311907),
    s = n(20424),
    a = n(622543),
    o = n(950191),
    l = n(576622),
    u = n(927813),
    c = n(403362),
    d = n(808247),
    _ = n(133025),
    f = n(310209),
    p = n(321902),
    h = n(594832),
    m = n(746081);
let E = 30 * u.A.Millis.MINUTE,
    g = 5,
    A = { state: "success", data: new f.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function I(e) {
    let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: i } = e,
        { wishlists: s, isFetching: a, errors: o } = (0, h.sv)({ wishlistIdsAndUsers: t, source: n }),
        l = r.useMemo(() => {
            let e = s.filter(c.Vq),
                t = {};
            for (let n of e)
                for (let e of n.items)
                    null != e.sku &&
                        !e.isOwned &&
                        (null == i || i.includes(e.sku.applicationId)) &&
                        (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: f.j.WISHLIST });
            return t;
        }, [s, i]),
        u = r.useMemo(
            () =>
                Object.fromEntries(
                    s
                        .filter(c.Vq)
                        .flatMap((e) => e.items)
                        .filter(
                            (e) =>
                                null != e &&
                                null != e.sku &&
                                !e.isOwned &&
                                (null == i || i.includes(e.sku.applicationId)),
                        )
                        .map((e) => [e.skuId, e.sku]),
                ),
            [s, i],
        );
    return {
        sortedWishlistSkus: r.useMemo(
            () =>
                Object.keys(u)
                    .sort((e, t) => Object.keys(l[t] ?? {}).length - Object.keys(l[e] ?? {}).length)
                    .map((e) => u[e]),
            [u, l],
        ),
        wishlistSkuIdToSku: u,
        wishlistSkusToUserAndReasonMap: l,
        wishlistsAreFetching: a,
        wishlistErrors: o,
    };
}
function T(e) {
    let { userIds: t, numItems: n, applicationIds: s } = e,
        a = (0, i.bG)([_.A], () => _.A.getRecommendations(t, s));
    return (r.useEffect(() => {
        if (0 === t.length || 0 === s.length) return;
        let e = _.A.getRecommendations(t, s);
        (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - E)) ||
            d.A.fetchWishlistRecommendations(s, t, n);
    }, [t, s, n]),
    0 === t.length || 0 === s.length)
        ? A
        : a;
}
function S(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: i,
            source: s = h.B5.USER_PROFILE,
            filterByApplicationIds: a = !1,
        } = e,
        o = T({
            userIds: r.useMemo(
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
            sortedWishlistSkus: l,
            wishlistSkuIdToSku: u,
            wishlistSkusToUserAndReasonMap: d,
            wishlistsAreFetching: _,
            wishlistErrors: f,
        } = I({ userIdsAndWishlistIds: t, source: s, applicationIdsFilter: a ? i : void 0 }),
        { filteredRecommendations: p, skusToUserAndReasonRecommendations: m } = r.useMemo(
            () =>
                null == o || "success" !== o.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: o.data.skus.filter((e) => !(e.id in u)),
                          skusToUserAndReasonRecommendations: o.data.skusToUserAndReason,
                      },
            [o, u],
        ),
        { combinedSkus: E, combinedSkusToUserAndReason: g } = r.useMemo(() => {
            let e = { ...m };
            for (let [t, n] of Object.entries(d)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...l, ...p], combinedSkusToUserAndReason: e };
        }, [l, p, d, m]);
    return {
        recommendations: p,
        wishlistAndRecommendations: E,
        skusToUserAndReason: g,
        status: r.useMemo(
            () =>
                _ || null == o || (null != o && "loading" === o.state)
                    ? "loading"
                    : f.filter(c.Vq).length > 0 || "error" === o.state
                      ? "error"
                      : "success",
            [_, o, f],
        ),
    };
}
function y(e) {
    let t = (0, o.Ay)(e),
        n = (0, s.A)({ displayProfile: t });
    return (0, p.T)(n);
}
function v(e) {
    let { defaultWishlistId: t } = (0, i.cf)([a.A], () => ({ defaultWishlistId: a.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: r.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function N(e) {
    r.useEffect(() => {
        e.forEach((e) => {
            (0, l.A)(e);
        });
    }, [e]);
    let t = (0, i.yK)([a.A], () => e.map((e) => a.A.getFirstWishlistId(e) ?? null));
    return r.useMemo(() => e.map((e, n) => ({ userId: e, wishlistId: t[n] })), [e, t]);
}
function C(e) {
    let { userId: t, numItems: n, source: r = h.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: i, defaultWishlistId: s } = v(t),
        {
            wishlistAndRecommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = S({ userIdsAndWishlistIds: i, applicationIds: y(t), numItems: n, source: r }),
        { totalUnownedWishlistItemCount: u, slicedWishlistAndRecommendations: c } = (0, m.m)({
            wishlistAndRecommendations: a,
            skusToUserAndReason: o,
            userId: t,
            numItems: n,
        });
    return {
        wishlistAndRecommendations: c,
        skusToUserAndReason: o,
        status: l,
        defaultWishlistId: s,
        totalUnownedWishlistItemCount: u,
    };
}
function R(e) {
    let { applicationIds: t, userIds: n, numItems: i, source: s = h.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = S({
            userIdsAndWishlistIds: N(r.useMemo(() => n?.slice(0, g), [n])),
            applicationIds: t,
            numItems: i,
            source: s,
            filterByApplicationIds: !0,
        });
    return { recommendations: r.useMemo(() => a.slice(0, i), [a, i]), skusToUserAndReason: o, status: l };
}
function O(e) {
    let { userId: t, numItems: n, source: i = h.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: s } = v(t),
        {
            recommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = S({ userIdsAndWishlistIds: s, applicationIds: y(t), numItems: n, source: i });
    return { recommendations: r.useMemo(() => a.slice(0, n), [a, n]), skusToUserAndReason: o, status: l };
}
