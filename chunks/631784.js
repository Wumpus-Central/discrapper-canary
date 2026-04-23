n.d(t, { Ul: () => j, XQ: () => b, rg: () => I });
var l = n(64700),
    a = n(735438),
    i = n(311907),
    r = n(435658),
    s = n(622543),
    o = n(576622),
    c = n(961350),
    d = n(927813),
    u = n(403362),
    m = n(808247),
    h = n(133025),
    f = n(310209),
    _ = n(321902),
    g = n(594832),
    p = n(746081);
let x = 30 * d.A.Millis.MINUTE,
    E = { state: "success", data: new f.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function A(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: s,
            source: o = g.B5.USER_PROFILE,
            filterByApplicationIds: d = !1,
        } = e,
        _ = (function (e) {
            let { userIds: t, numItems: n, applicationIds: a } = e,
                r = (0, i.bG)([h.A], () => h.A.getRecommendations(t, a));
            return (l.useEffect(() => {
                if (0 === t.length || 0 === a.length) return;
                let e = h.A.getRecommendations(t, a);
                if (null != e) {
                    if ("loading" === e.state) return;
                    let t = e.fetchedAt < Date.now() - x,
                        l = "success" === e.state && e.data.skus.length >= n;
                    if (!t && l) return;
                }
                m.A.fetchWishlistRecommendations(a, t, n);
            }, [t, a, n]),
            0 === t.length || 0 === a.length)
                ? E
                : r;
        })({
            userIds: l.useMemo(
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
            wishlistsAreFetching: I,
            wishlistErrors: b,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: a } = e,
                r = (0, i.bG)([c.default], () => c.default.getId()),
                { wishlists: s, isFetching: o, errors: d } = (0, g.sv)({ wishlistIdsAndUsers: t, source: n }),
                m = l.useMemo(() => {
                    let e = s.filter(u.Vq),
                        t = {};
                    for (let n of e)
                        for (let e of n.items)
                            null != e.sku &&
                                !e.isOwned &&
                                (null == a || a.includes(e.sku.applicationId)) &&
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: f.j.WISHLIST });
                    return t;
                }, [s, a]),
                h = l.useMemo(
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
                                        (null == a || a.includes(e.sku.applicationId)),
                                )
                                .map((e) => [e.skuId, e.sku]),
                        ),
                    [s, a],
                );
            return {
                sortedWishlistSkus: l.useMemo(
                    () =>
                        Object.keys(h)
                            .sort((e, t) => {
                                let n = m[t] ?? {},
                                    l = m[e] ?? {},
                                    a = Object.keys(n).length - Object.keys(l).length;
                                if (0 !== a) return a;
                                let i = !!n[r];
                                return Number(!!l[r]) - Number(i);
                            })
                            .map((e) => h[e]),
                    [r, h, m],
                ),
                wishlistSkuIdToSku: h,
                wishlistSkusToUserAndReasonMap: m,
                wishlistsAreFetching: o,
                wishlistErrors: d,
            };
        })({ userIdsAndWishlistIds: t, source: o, applicationIdsFilter: d ? s : void 0 }),
        { filteredRecommendations: j, skusToUserAndReasonRecommendations: N } = l.useMemo(
            () =>
                null == _ || "success" !== _.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: _.data.skus.filter((e) => !(e.id in A)),
                          skusToUserAndReasonRecommendations: _.data.skusToUserAndReason,
                      },
            [_, A],
        ),
        { combinedSkus: C, combinedSkusToUserAndReason: S } = l.useMemo(() => {
            let e = { ...N };
            for (let [t, n] of Object.entries(v)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...p, ...j], combinedSkusToUserAndReason: e };
        }, [p, j, v, N]),
        y = l.useMemo(
            () =>
                I || null == _ || (null != _ && "loading" === _.state)
                    ? "loading"
                    : b.filter(u.Vq).length > 0 || "error" === _.state
                      ? "error"
                      : "success",
            [I, _, b],
        ),
        R = l.useMemo(() => (0, a.uniq)([...j.map((e) => e.id), ...C.map((e) => e.id)]), [j, C]);
    return (
        (0, r.j)({ skuIds: R, location: "useWishlistRecommendationsWithWishlists" }),
        { recommendations: j, wishlistAndRecommendations: C, skusToUserAndReason: S, status: y }
    );
}
function v(e) {
    l.useEffect(() => {
        (0, o.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, i.cf)([s.A], () => ({ defaultWishlistId: s.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: l.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function I(e) {
    let { userId: t, numItems: n, source: l = g.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: a, defaultWishlistId: i } = v(t),
        {
            wishlistAndRecommendations: r,
            skusToUserAndReason: s,
            status: o,
        } = A({ userIdsAndWishlistIds: a, applicationIds: (0, _.T)(t), numItems: n, source: l }),
        { totalUnownedWishlistItemCount: c, slicedWishlistAndRecommendations: d } = (0, p.m)({
            wishlistAndRecommendations: r,
            skusToUserAndReason: s,
            userId: t,
            numItems: n,
        });
    return {
        wishlistAndRecommendations: d,
        skusToUserAndReason: s,
        status: o,
        defaultWishlistId: i,
        totalUnownedWishlistItemCount: c,
    };
}
function b(e) {
    var t;
    let n,
        { applicationIds: a, userIds: r, numItems: c, source: d = g.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: u,
            skusToUserAndReason: m,
            status: h,
        } = A({
            userIdsAndWishlistIds:
                ((t = l.useMemo(() => r?.slice(0, 5), [r])),
                l.useEffect(() => {
                    t.forEach((e) => {
                        (0, o.A)(e);
                    });
                }, [t]),
                (n = (0, i.yK)([s.A], () => t.map((e) => s.A.getFirstWishlistId(e) ?? null))),
                l.useMemo(() => t.map((e, t) => ({ userId: e, wishlistId: n[t] })), [t, n])),
            applicationIds: a,
            numItems: c,
            source: d,
            filterByApplicationIds: !0,
        });
    return { recommendations: l.useMemo(() => u.slice(0, c), [u, c]), skusToUserAndReason: m, status: h };
}
function j(e) {
    let { userId: t, numItems: n, source: a = g.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: i } = v(t),
        {
            recommendations: r,
            skusToUserAndReason: s,
            status: o,
        } = A({ userIdsAndWishlistIds: i, applicationIds: (0, _.T)(t), numItems: n, source: a });
    return { recommendations: l.useMemo(() => r.slice(0, n), [r, n]), skusToUserAndReason: s, status: o };
}
