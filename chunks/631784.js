n.d(t, { Ul: () => C, XQ: () => I, rg: () => E });
var a = n(64700),
    l = n(735438),
    i = n(311907),
    r = n(435658),
    s = n(622543),
    o = n(576622),
    d = n(961350),
    c = n(927813),
    u = n(403362),
    m = n(808247),
    _ = n(133025),
    h = n(310209),
    f = n(321902),
    g = n(594832),
    p = n(746081);
let x = 30 * c.A.Millis.MINUTE,
    b = { state: "success", data: new h.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function A(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: s,
            source: o = g.B5.USER_PROFILE,
            filterByApplicationIds: c = !1,
        } = e,
        f = (function (e) {
            let { userIds: t, numItems: n, applicationIds: l } = e,
                r = (0, i.bG)([_.A], () => _.A.getRecommendations(t, l));
            return (a.useEffect(() => {
                if (0 === t.length || 0 === l.length) return;
                let e = _.A.getRecommendations(t, l);
                if (null != e) {
                    if ("loading" === e.state) return;
                    let t = e.fetchedAt < Date.now() - x,
                        a = "success" === e.state && e.data.skus.length >= n;
                    if (!t && a) return;
                }
                m.A.fetchWishlistRecommendations(l, t, n);
            }, [t, l, n]),
            0 === t.length || 0 === l.length)
                ? b
                : r;
        })({
            userIds: a.useMemo(
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
            sortedWishlistSkus: p,
            wishlistSkuIdToSku: A,
            wishlistSkusToUserAndReasonMap: v,
            wishlistsAreFetching: E,
            wishlistErrors: I,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: l } = e,
                r = (0, i.bG)([d.default], () => d.default.getId()),
                { wishlists: s, isFetching: o, errors: c } = (0, g.sv)({ wishlistIdsAndUsers: t, source: n }),
                m = a.useMemo(() => {
                    let e = s.filter(u.Vq),
                        t = {};
                    for (let n of e)
                        for (let e of n.items)
                            null != e.sku &&
                                !e.isOwned &&
                                (null == l || l.includes(e.sku.applicationId)) &&
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: h.j.WISHLIST });
                    return t;
                }, [s, l]),
                _ = a.useMemo(
                    () =>
                        Object.fromEntries(
                            s
                                .filter(u.Vq)
                                .flatMap((e) => e.items)
                                .filter(
                                    (e) =>
                                        null != e &&
                                        null != e.sku &&
                                        !e.isOwned &&
                                        (null == l || l.includes(e.sku.applicationId)),
                                )
                                .map((e) => [e.skuId, e.sku]),
                        ),
                    [s, l],
                );
            return {
                sortedWishlistSkus: a.useMemo(
                    () =>
                        Object.keys(_)
                            .sort((e, t) => {
                                let n = m[t] ?? {},
                                    a = m[e] ?? {},
                                    l = Object.keys(n).length - Object.keys(a).length;
                                if (0 !== l) return l;
                                let i = !!n[r];
                                return Number(!!a[r]) - Number(i);
                            })
                            .map((e) => _[e]),
                    [r, _, m],
                ),
                wishlistSkuIdToSku: _,
                wishlistSkusToUserAndReasonMap: m,
                wishlistsAreFetching: o,
                wishlistErrors: c,
            };
        })({ userIdsAndWishlistIds: t, source: o, applicationIdsFilter: c ? s : void 0 }),
        { filteredRecommendations: C, skusToUserAndReasonRecommendations: N } = a.useMemo(
            () =>
                null == f || "success" !== f.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: f.data.skus.filter((e) => !(e.id in A)),
                          skusToUserAndReasonRecommendations: f.data.skusToUserAndReason,
                      },
            [f, A],
        ),
        { combinedSkus: j, combinedSkusToUserAndReason: y } = a.useMemo(() => {
            let e = { ...N };
            for (let [t, n] of Object.entries(v)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...p, ...C], combinedSkusToUserAndReason: e };
        }, [p, C, v, N]),
        S = a.useMemo(
            () =>
                E || null == f || (null != f && "loading" === f.state)
                    ? "loading"
                    : I.filter(u.Vq).length > 0 || "error" === f.state
                      ? "error"
                      : "success",
            [E, f, I],
        ),
        R = a.useMemo(() => (0, l.uniq)([...C.map((e) => e.id), ...j.map((e) => e.id)]), [C, j]);
    return (
        (0, r.j)({ skuIds: R, location: "useWishlistRecommendationsWithWishlists" }),
        { recommendations: C, wishlistAndRecommendations: j, skusToUserAndReason: y, status: S }
    );
}
function v(e) {
    a.useEffect(() => {
        (0, o.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, i.cf)([s.A], () => ({ defaultWishlistId: s.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: a.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function E(e) {
    let { userId: t, numItems: n, source: a = g.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: l, defaultWishlistId: i } = v(t),
        {
            wishlistAndRecommendations: r,
            skusToUserAndReason: s,
            status: o,
        } = A({ userIdsAndWishlistIds: l, applicationIds: (0, f.T)(t), numItems: n, source: a }),
        { totalUnownedWishlistItemCount: d, slicedWishlistAndRecommendations: c } = (0, p.m)({
            wishlistAndRecommendations: r,
            skusToUserAndReason: s,
            userId: t,
            numItems: n,
        });
    return {
        wishlistAndRecommendations: c,
        skusToUserAndReason: s,
        status: o,
        defaultWishlistId: i,
        totalUnownedWishlistItemCount: d,
    };
}
function I(e) {
    var t;
    let n,
        { applicationIds: l, userIds: r, numItems: d, source: c = g.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: u,
            skusToUserAndReason: m,
            status: _,
        } = A({
            userIdsAndWishlistIds:
                ((t = a.useMemo(() => r?.slice(0, 5), [r])),
                a.useEffect(() => {
                    t.forEach((e) => {
                        (0, o.A)(e);
                    });
                }, [t]),
                (n = (0, i.yK)([s.A], () => t.map((e) => s.A.getFirstWishlistId(e) ?? null))),
                a.useMemo(() => t.map((e, t) => ({ userId: e, wishlistId: n[t] })), [t, n])),
            applicationIds: l,
            numItems: d,
            source: c,
            filterByApplicationIds: !0,
        });
    return { recommendations: a.useMemo(() => u.slice(0, d), [u, d]), skusToUserAndReason: m, status: _ };
}
function C(e) {
    let { userId: t, numItems: n, source: l = g.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: i } = v(t),
        {
            recommendations: r,
            skusToUserAndReason: s,
            status: o,
        } = A({ userIdsAndWishlistIds: i, applicationIds: (0, f.T)(t), numItems: n, source: l });
    return { recommendations: a.useMemo(() => r.slice(0, n), [r, n]), skusToUserAndReason: s, status: o };
}
