"use strict";
n.d(t, { Ul: () => O, XQ: () => R, rg: () => C });
var r = n(64700),
    i = n(735438),
    s = n(311907),
    a = n(435658),
    o = n(622543),
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
    let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: i } = e,
        a = (0, s.bG)([u.default], () => u.default.getId()),
        { wishlists: o, isFetching: l, errors: c } = (0, m.sv)({ wishlistIdsAndUsers: t, source: n }),
        _ = r.useMemo(() => {
            let e = o.filter(d.Vq),
                t = {};
            for (let n of e)
                for (let e of n.items)
                    null != e.sku &&
                        !e.isOwned &&
                        (null == i || i.includes(e.sku.applicationId)) &&
                        (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: p.j.WISHLIST });
            return t;
        }, [o, i]),
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
                                (null == i || i.includes(e.sku.applicationId)),
                        )
                        .map((e) => [e.skuId, e.sku]),
                ),
            [o, i],
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
    let { userIds: t, numItems: n, applicationIds: i } = e,
        a = (0, s.bG)([f.A], () => f.A.getRecommendations(t, i));
    return (r.useEffect(() => {
        if (0 === t.length || 0 === i.length) return;
        let e = f.A.getRecommendations(t, i);
        (null != e && ("loading" === e.state || e.fetchedAt >= Date.now() - g)) ||
            _.A.fetchWishlistRecommendations(i, t, n);
    }, [t, i, n]),
    0 === t.length || 0 === i.length)
        ? I
        : a;
}
function y(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: s,
            source: o = m.B5.USER_PROFILE,
            filterByApplicationIds: l = !1,
        } = e,
        u = S({
            userIds: r.useMemo(
                () =>
                    t.map((e) => {
                        let { userId: t } = e;
                        return t;
                    }),
                [t],
            ),
            numItems: n,
            applicationIds: s,
        }),
        {
            sortedWishlistSkus: c,
            wishlistSkuIdToSku: _,
            wishlistSkusToUserAndReasonMap: f,
            wishlistsAreFetching: p,
            wishlistErrors: h,
        } = T({ userIdsAndWishlistIds: t, source: o, applicationIdsFilter: l ? s : void 0 }),
        { filteredRecommendations: E, skusToUserAndReasonRecommendations: g } = r.useMemo(
            () =>
                null == u || "success" !== u.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: u.data.skus.filter((e) => !(e.id in _)),
                          skusToUserAndReasonRecommendations: u.data.skusToUserAndReason,
                      },
            [u, _],
        ),
        { combinedSkus: A, combinedSkusToUserAndReason: I } = r.useMemo(() => {
            let e = { ...g };
            for (let [t, n] of Object.entries(f)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...c, ...E], combinedSkusToUserAndReason: e };
        }, [c, E, f, g]),
        y = r.useMemo(
            () =>
                p || null == u || (null != u && "loading" === u.state)
                    ? "loading"
                    : h.filter(d.Vq).length > 0 || "error" === u.state
                      ? "error"
                      : "success",
            [p, u, h],
        ),
        v = r.useMemo(() => (0, i.uniq)([...E.map((e) => e.id), ...A.map((e) => e.id)]), [E, A]);
    return (
        (0, a.j)({ skuIds: v, location: "useWishlistRecommendationsWithWishlists" }),
        { recommendations: E, wishlistAndRecommendations: A, skusToUserAndReason: I, status: y }
    );
}
function v(e) {
    r.useEffect(() => {
        (0, l.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, s.cf)([o.A], () => ({ defaultWishlistId: o.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: r.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function N(e) {
    r.useEffect(() => {
        e.forEach((e) => {
            (0, l.A)(e);
        });
    }, [e]);
    let t = (0, s.yK)([o.A], () => e.map((e) => o.A.getFirstWishlistId(e) ?? null));
    return r.useMemo(() => e.map((e, n) => ({ userId: e, wishlistId: t[n] })), [e, t]);
}
function C(e) {
    let { userId: t, numItems: n, source: r = m.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: i, defaultWishlistId: s } = v(t),
        {
            wishlistAndRecommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = y({ userIdsAndWishlistIds: i, applicationIds: (0, h.T)(t), numItems: n, source: r }),
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
function R(e) {
    let { applicationIds: t, userIds: n, numItems: i, source: s = m.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = y({
            userIdsAndWishlistIds: N(r.useMemo(() => n?.slice(0, A), [n])),
            applicationIds: t,
            numItems: i,
            source: s,
            filterByApplicationIds: !0,
        });
    return { recommendations: r.useMemo(() => a.slice(0, i), [a, i]), skusToUserAndReason: o, status: l };
}
function O(e) {
    let { userId: t, numItems: n, source: i = m.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: s } = v(t),
        {
            recommendations: a,
            skusToUserAndReason: o,
            status: l,
        } = y({ userIdsAndWishlistIds: s, applicationIds: (0, h.T)(t), numItems: n, source: i });
    return { recommendations: r.useMemo(() => a.slice(0, n), [a, n]), skusToUserAndReason: o, status: l };
}
