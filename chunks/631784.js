"use strict";
n.d(t, { Ul: () => C, XQ: () => N, rg: () => v });
var r = n(64700),
    i = n(311907),
    s = n(622543),
    a = n(576622),
    o = n(961350),
    l = n(927813),
    u = n(403362),
    c = n(808247),
    d = n(133025),
    _ = n(310209),
    f = n(321902),
    p = n(594832),
    h = n(746081);
let m = 30 * l.A.Millis.MINUTE,
    E = 5,
    g = { state: "success", data: new _.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function A(e) {
    let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: s } = e,
        a = (0, i.bG)([o.default], () => o.default.getId()),
        { wishlists: l, isFetching: c, errors: d } = (0, p.sv)({ wishlistIdsAndUsers: t, source: n }),
        f = r.useMemo(() => {
            let e = l.filter(u.Vq),
                t = {};
            for (let n of e)
                for (let e of n.items)
                    null != e.sku &&
                        !e.isOwned &&
                        (null == s || s.includes(e.sku.applicationId)) &&
                        (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: _.j.WISHLIST });
            return t;
        }, [l, s]),
        h = r.useMemo(
            () =>
                Object.fromEntries(
                    l
                        .filter(u.Vq)
                        .flatMap((e) => e.items)
                        .filter(
                            (e) =>
                                null != e &&
                                null != e.sku &&
                                !e.isOwned &&
                                (null == s || s.includes(e.sku.applicationId)),
                        )
                        .map((e) => [e.skuId, e.sku]),
                ),
            [l, s],
        );
    return {
        sortedWishlistSkus: r.useMemo(
            () =>
                Object.keys(h)
                    .sort((e, t) => {
                        let n = f[t] ?? {},
                            r = f[e] ?? {},
                            i = Object.keys(n).length - Object.keys(r).length;
                        if (0 !== i) return i;
                        let s = !!n[a];
                        return Number(!!r[a]) - Number(s);
                    })
                    .map((e) => h[e]),
            [a, h, f],
        ),
        wishlistSkuIdToSku: h,
        wishlistSkusToUserAndReasonMap: f,
        wishlistsAreFetching: c,
        wishlistErrors: d,
    };
}
function I(e) {
    let { userIds: t, numItems: n, applicationIds: s } = e,
        a = (0, i.bG)([d.A], () => d.A.getRecommendations(t, s));
    return (r.useEffect(() => {
        if (0 === t.length || 0 === s.length) return;
        let e = d.A.getRecommendations(t, s);
        (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - m)) ||
            c.A.fetchWishlistRecommendations(s, t, n);
    }, [t, s, n]),
    0 === t.length || 0 === s.length)
        ? g
        : a;
}
function T(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: i,
            source: s = p.B5.USER_PROFILE,
            filterByApplicationIds: a = !1,
        } = e,
        o = I({
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
            wishlistSkuIdToSku: c,
            wishlistSkusToUserAndReasonMap: d,
            wishlistsAreFetching: _,
            wishlistErrors: f,
        } = A({ userIdsAndWishlistIds: t, source: s, applicationIdsFilter: a ? i : void 0 }),
        { filteredRecommendations: h, skusToUserAndReasonRecommendations: m } = r.useMemo(
            () =>
                null == o || "success" !== o.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: o.data.skus.filter((e) => !(e.id in c)),
                          skusToUserAndReasonRecommendations: o.data.skusToUserAndReason,
                      },
            [o, c],
        ),
        { combinedSkus: E, combinedSkusToUserAndReason: g } = r.useMemo(() => {
            let e = { ...m };
            for (let [t, n] of Object.entries(d)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...l, ...h], combinedSkusToUserAndReason: e };
        }, [l, h, d, m]);
    return {
        recommendations: h,
        wishlistAndRecommendations: E,
        skusToUserAndReason: g,
        status: r.useMemo(
            () =>
                _ || null == o || (null != o && "loading" === o.state)
                    ? "loading"
                    : f.filter(u.Vq).length > 0 || "error" === o.state
                      ? "error"
                      : "success",
            [_, o, f],
        ),
    };
}
function S(e) {
    r.useEffect(() => {
        (0, a.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, i.cf)([s.A], () => ({ defaultWishlistId: s.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: r.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function y(e) {
    r.useEffect(() => {
        e.forEach((e) => {
            (0, a.A)(e);
        });
    }, [e]);
    let t = (0, i.yK)([s.A], () => e.map((e) => s.A.getFirstWishlistId(e) ?? null));
    return r.useMemo(() => e.map((e, n) => ({ userId: e, wishlistId: t[n] })), [e, t]);
}
function v(e) {
    let { userId: t, numItems: n, source: r = p.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: i, defaultWishlistId: s } = S(t),
        {
            wishlistAndRecommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = T({ userIdsAndWishlistIds: i, applicationIds: (0, f.T)(t), numItems: n, source: r }),
        { totalUnownedWishlistItemCount: u, slicedWishlistAndRecommendations: c } = (0, h.m)({
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
function N(e) {
    let { applicationIds: t, userIds: n, numItems: i, source: s = p.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = T({
            userIdsAndWishlistIds: y(r.useMemo(() => n?.slice(0, E), [n])),
            applicationIds: t,
            numItems: i,
            source: s,
            filterByApplicationIds: !0,
        });
    return { recommendations: r.useMemo(() => a.slice(0, i), [a, i]), skusToUserAndReason: o, status: l };
}
function C(e) {
    let { userId: t, numItems: n, source: i = p.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: s } = S(t),
        {
            recommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = T({ userIdsAndWishlistIds: s, applicationIds: (0, f.T)(t), numItems: n, source: i });
    return { recommendations: r.useMemo(() => a.slice(0, n), [a, n]), skusToUserAndReason: o, status: l };
}
