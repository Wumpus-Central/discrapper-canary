"use strict";
n.d(t, { Ul: () => C, XQ: () => N, rg: () => S });
var i = n(64700),
    r = n(735438),
    a = n(17928),
    s = n(435658),
    l = n(321191),
    o = n(903209),
    d = n(280450),
    c = n(927813),
    u = n(403362),
    _ = n(808247),
    E = n(133025),
    A = n(310209),
    h = n(321902),
    I = n(561794),
    f = n(746081);
let p = 30 * c.A.Millis.MINUTE,
    T = { state: "success", data: new A.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function m(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: l,
            source: o = I.B5.USER_PROFILE,
            filterByApplicationIds: c = !1,
        } = e,
        h = (function (e) {
            let { userIds: t, numItems: n, applicationIds: r } = e,
                s = (0, a.bG)([E.A], () => E.A.getRecommendations(t, r));
            return (i.useEffect(() => {
                if (0 === t.length || 0 === r.length) return;
                let e = E.A.getRecommendations(t, r);
                if (null != e) {
                    if ("loading" === e.state) return;
                    let t = e.fetchedAt < Date.now() - p,
                        i = "success" === e.state && e.data.skus.length >= n;
                    if (!t && i) return;
                }
                _.A.fetchWishlistRecommendations(r, t, n);
            }, [t, r, n]),
            0 === t.length || 0 === r.length)
                ? T
                : s;
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
            applicationIds: l,
        }),
        {
            sortedWishlistSkus: f,
            wishlistSkuIdToSku: m,
            wishlistSkusToUserAndReasonMap: g,
            wishlistsAreFetching: S,
            wishlistErrors: N,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: r } = e,
                s = (0, a.bG)([d.default], () => d.default.getId()),
                { wishlists: l, isFetching: o, errors: c } = (0, I.sv)({ wishlistIdsAndUsers: t, source: n }),
                _ = i.useMemo(() => {
                    let e = l.filter(u.Vq),
                        t = {};
                    for (let n of e)
                        for (let e of n.items)
                            null != e.sku &&
                                !e.isOwned &&
                                (null == r || r.includes(e.sku.applicationId)) &&
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: A.j.WISHLIST });
                    return t;
                }, [l, r]),
                E = i.useMemo(
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
                                        (null == r || r.includes(e.sku.applicationId)),
                                )
                                .map((e) => [e.skuId, e.sku]),
                        ),
                    [l, r],
                );
            return {
                sortedWishlistSkus: i.useMemo(
                    () =>
                        Object.keys(E)
                            .sort((e, t) => {
                                let n = _[t] ?? {},
                                    i = _[e] ?? {},
                                    r = Object.keys(n).length - Object.keys(i).length;
                                if (0 !== r) return r;
                                let a = !!n[s];
                                return Number(!!i[s]) - Number(a);
                            })
                            .map((e) => E[e]),
                    [s, E, _],
                ),
                wishlistSkuIdToSku: E,
                wishlistSkusToUserAndReasonMap: _,
                wishlistsAreFetching: o,
                wishlistErrors: c,
            };
        })({ userIdsAndWishlistIds: t, source: o, applicationIdsFilter: c ? l : void 0 }),
        { filteredRecommendations: C, skusToUserAndReasonRecommendations: O } = i.useMemo(
            () =>
                null == h || "success" !== h.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: h.data.skus.filter((e) => !(e.id in m)),
                          skusToUserAndReasonRecommendations: h.data.skusToUserAndReason,
                      },
            [h, m],
        ),
        { combinedSkus: R, combinedSkusToUserAndReason: L } = i.useMemo(() => {
            let e = { ...O };
            for (let [t, n] of Object.entries(g)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...f, ...C], combinedSkusToUserAndReason: e };
        }, [f, C, g, O]),
        D = i.useMemo(
            () =>
                S || null == h || (null != h && "loading" === h.state)
                    ? "loading"
                    : N.filter(u.Vq).length > 0 || "error" === h.state
                      ? "error"
                      : "success",
            [S, h, N],
        ),
        y = i.useMemo(() => (0, r.uniq)([...C.map((e) => e.id), ...R.map((e) => e.id)]), [C, R]);
    return (
        (0, s.j)({ skuIds: y }),
        { recommendations: C, wishlistAndRecommendations: R, skusToUserAndReason: L, status: D }
    );
}
function g(e) {
    i.useEffect(() => {
        (0, o.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, a.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: i.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function S(e) {
    let { userId: t, numItems: n, source: i = I.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: r, defaultWishlistId: a } = g(t),
        {
            wishlistAndRecommendations: s,
            skusToUserAndReason: l,
            status: o,
        } = m({ userIdsAndWishlistIds: r, applicationIds: (0, h.T)(t), numItems: n, source: i }),
        { totalUnownedWishlistItemCount: d, slicedWishlistAndRecommendations: c } = (0, f.m)({
            wishlistAndRecommendations: s,
            skusToUserAndReason: l,
            userId: t,
            numItems: n,
        });
    return {
        wishlistAndRecommendations: c,
        skusToUserAndReason: l,
        status: o,
        defaultWishlistId: a,
        totalUnownedWishlistItemCount: d,
    };
}
function N(e) {
    var t;
    let n,
        { applicationIds: r, userIds: s, numItems: d, source: c = I.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: u,
            skusToUserAndReason: _,
            status: E,
        } = m({
            userIdsAndWishlistIds:
                ((t = i.useMemo(() => s?.slice(0, 5), [s])),
                i.useEffect(() => {
                    t.forEach((e) => {
                        (0, o.A)(e);
                    });
                }, [t]),
                (n = (0, a.yK)([l.A], () => t.map((e) => l.A.getFirstWishlistId(e) ?? null))),
                i.useMemo(() => t.map((e, t) => ({ userId: e, wishlistId: n[t] })), [t, n])),
            applicationIds: r,
            numItems: d,
            source: c,
            filterByApplicationIds: !0,
        });
    return { recommendations: i.useMemo(() => u.slice(0, d), [u, d]), skusToUserAndReason: _, status: E };
}
function C(e) {
    let { userId: t, numItems: n, source: r = I.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: a } = g(t),
        {
            recommendations: s,
            skusToUserAndReason: l,
            status: o,
        } = m({ userIdsAndWishlistIds: a, applicationIds: (0, h.T)(t), numItems: n, source: r });
    return { recommendations: i.useMemo(() => s.slice(0, n), [s, n]), skusToUserAndReason: l, status: o };
}
