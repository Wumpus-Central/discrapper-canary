"use strict";
n.d(t, { Ul: () => b, XQ: () => O, rg: () => R });
var r = n(64700),
    i = n(311907),
    s = n(20424),
    a = n(622543),
    o = n(950191),
    l = n(576622),
    u = n(961350),
    c = n(927813),
    d = n(403362),
    _ = n(808247),
    f = n(133025),
    p = n(310209),
    h = n(321902),
    m = n(594832),
    E = n(746081);
let g = 30 * c.A.Millis.MINUTE,
    A = 5,
    I = { state: "success", data: new p.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function T(e) {
    let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: s } = e,
        a = (0, i.bG)([u.default], () => u.default.getId()),
        { wishlists: o, isFetching: l, errors: c } = (0, m.sv)({ wishlistIdsAndUsers: t, source: n }),
        _ = r.useMemo(() => {
            let e = o.filter(d.Vq),
                t = {};
            for (let n of e)
                for (let e of n.items)
                    null != e.sku &&
                        !e.isOwned &&
                        (null == s || s.includes(e.sku.applicationId)) &&
                        (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: p.j.WISHLIST });
            return t;
        }, [o, s]),
        f = r.useMemo(
            () =>
                Object.fromEntries(
                    o
                        .filter(d.Vq)
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
            [o, s],
        );
    return {
        sortedWishlistSkus: r.useMemo(
            () =>
                Object.keys(f)
                    .sort((e, t) => {
                        let n = _[t] ?? {},
                            r = _[e] ?? {},
                            i = Object.keys(n).length - Object.keys(r).length;
                        if (0 !== i) return i;
                        let s = !!n[a];
                        return Number(!!r[a]) - Number(s);
                    })
                    .map((e) => f[e]),
            [a, f, _],
        ),
        wishlistSkuIdToSku: f,
        wishlistSkusToUserAndReasonMap: _,
        wishlistsAreFetching: l,
        wishlistErrors: c,
    };
}
function S(e) {
    let { userIds: t, numItems: n, applicationIds: s } = e,
        a = (0, i.bG)([f.A], () => f.A.getRecommendations(t, s));
    return (r.useEffect(() => {
        if (0 === t.length || 0 === s.length) return;
        let e = f.A.getRecommendations(t, s);
        (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - g)) ||
            _.A.fetchWishlistRecommendations(s, t, n);
    }, [t, s, n]),
    0 === t.length || 0 === s.length)
        ? I
        : a;
}
function y(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: i,
            source: s = m.B5.USER_PROFILE,
            filterByApplicationIds: a = !1,
        } = e,
        o = S({
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
            wishlistSkusToUserAndReasonMap: c,
            wishlistsAreFetching: _,
            wishlistErrors: f,
        } = T({ userIdsAndWishlistIds: t, source: s, applicationIdsFilter: a ? i : void 0 }),
        { filteredRecommendations: p, skusToUserAndReasonRecommendations: h } = r.useMemo(
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
            let e = { ...h };
            for (let [t, n] of Object.entries(c)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...l, ...p], combinedSkusToUserAndReason: e };
        }, [l, p, c, h]);
    return {
        recommendations: p,
        wishlistAndRecommendations: E,
        skusToUserAndReason: g,
        status: r.useMemo(
            () =>
                _ || null == o || (null != o && "loading" === o.state)
                    ? "loading"
                    : f.filter(d.Vq).length > 0 || "error" === o.state
                      ? "error"
                      : "success",
            [_, o, f],
        ),
    };
}
function v(e) {
    let t = (0, o.Ay)(e),
        n = (0, s.A)({ displayProfile: t });
    return (0, h.T)(n);
}
function N(e) {
    let { defaultWishlistId: t } = (0, i.cf)([a.A], () => ({ defaultWishlistId: a.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: r.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function C(e) {
    r.useEffect(() => {
        e.forEach((e) => {
            (0, l.A)(e);
        });
    }, [e]);
    let t = (0, i.yK)([a.A], () => e.map((e) => a.A.getFirstWishlistId(e) ?? null));
    return r.useMemo(() => e.map((e, n) => ({ userId: e, wishlistId: t[n] })), [e, t]);
}
function R(e) {
    let { userId: t, numItems: n, source: r = m.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: i, defaultWishlistId: s } = N(t),
        {
            wishlistAndRecommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = y({ userIdsAndWishlistIds: i, applicationIds: v(t), numItems: n, source: r }),
        { totalUnownedWishlistItemCount: u, slicedWishlistAndRecommendations: c } = (0, E.m)({
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
function O(e) {
    let { applicationIds: t, userIds: n, numItems: i, source: s = m.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = y({
            userIdsAndWishlistIds: C(r.useMemo(() => n?.slice(0, A), [n])),
            applicationIds: t,
            numItems: i,
            source: s,
            filterByApplicationIds: !0,
        });
    return { recommendations: r.useMemo(() => a.slice(0, i), [a, i]), skusToUserAndReason: o, status: l };
}
function b(e) {
    let { userId: t, numItems: n, source: i = m.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: s } = N(t),
        {
            recommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = y({ userIdsAndWishlistIds: s, applicationIds: v(t), numItems: n, source: i });
    return { recommendations: r.useMemo(() => a.slice(0, n), [a, n]), skusToUserAndReason: o, status: l };
}
