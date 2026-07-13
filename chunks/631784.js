n.d(t, { Ul: () => T, XQ: () => _, rg: () => I });
var i = n(64700),
    l = n(735438),
    s = n(17928),
    a = n(435658),
    r = n(321191),
    o = n(903209),
    d = n(280450),
    c = n(927813),
    u = n(403362),
    h = n(808247),
    m = n(133025),
    p = n(310209),
    g = n(321902),
    f = n(561794),
    A = n(746081);
let x = 30 * c.A.Millis.MINUTE,
    v = { state: "success", data: new p.A({ skus: [], skus_to_user_and_reason: {}, applications: [] }), fetchedAt: 0 };
function E(e) {
    let {
            userIdsAndWishlistIds: t,
            numItems: n,
            applicationIds: r,
            source: o = f.B5.USER_PROFILE,
            filterByApplicationIds: c = !1,
        } = e,
        g = (function (e) {
            let { userIds: t, numItems: n, applicationIds: l } = e,
                a = (0, s.bG)([m.A], () => m.A.getRecommendations(t, l));
            return (i.useEffect(() => {
                if (0 === t.length || 0 === l.length) return;
                let e = m.A.getRecommendations(t, l);
                if (null != e) {
                    if ("loading" === e.state) return;
                    let t = e.fetchedAt < Date.now() - x,
                        i = "success" === e.state && e.data.skus.length >= n;
                    if (!t && i) return;
                }
                h.A.fetchWishlistRecommendations(l, t, n);
            }, [t, l, n]),
            0 === t.length || 0 === l.length)
                ? v
                : a;
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
            applicationIds: r,
        }),
        {
            sortedWishlistSkus: A,
            wishlistSkuIdToSku: E,
            wishlistSkusToUserAndReasonMap: C,
            wishlistsAreFetching: I,
            wishlistErrors: _,
        } = (function (e) {
            let { userIdsAndWishlistIds: t, source: n, applicationIdsFilter: l } = e,
                a = (0, s.bG)([d.default], () => d.default.getId()),
                { wishlists: r, isFetching: o, errors: c } = (0, f.sv)({ wishlistIdsAndUsers: t, source: n }),
                h = i.useMemo(() => {
                    let e = r.filter(u.Vq),
                        t = {};
                    for (let n of e)
                        for (let e of n.items)
                            null != e.sku &&
                                !e.isOwned &&
                                (null == l || l.includes(e.sku.applicationId)) &&
                                (t[e.skuId] = { ...(null != t[e.skuId] ? t[e.skuId] : {}), [n.userId]: p.j.WISHLIST });
                    return t;
                }, [r, l]),
                m = i.useMemo(
                    () =>
                        Object.fromEntries(
                            r
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
                    [r, l],
                );
            return {
                sortedWishlistSkus: i.useMemo(
                    () =>
                        Object.keys(m)
                            .sort((e, t) => {
                                let n = h[t] ?? {},
                                    i = h[e] ?? {},
                                    l = Object.keys(n).length - Object.keys(i).length;
                                if (0 !== l) return l;
                                let s = !!n[a];
                                return Number(!!i[a]) - Number(s);
                            })
                            .map((e) => m[e]),
                    [a, m, h],
                ),
                wishlistSkuIdToSku: m,
                wishlistSkusToUserAndReasonMap: h,
                wishlistsAreFetching: o,
                wishlistErrors: c,
            };
        })({ userIdsAndWishlistIds: t, source: o, applicationIdsFilter: c ? r : void 0 }),
        { filteredRecommendations: T, skusToUserAndReasonRecommendations: j } = i.useMemo(
            () =>
                null == g || "success" !== g.state
                    ? { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} }
                    : {
                          filteredRecommendations: g.data.skus.filter((e) => !(e.id in E)),
                          skusToUserAndReasonRecommendations: g.data.skusToUserAndReason,
                      },
            [g, E],
        ),
        { combinedSkus: S, combinedSkusToUserAndReason: N } = i.useMemo(() => {
            let e = { ...j };
            for (let [t, n] of Object.entries(C)) e[t] = { ...e[t], ...n };
            return { combinedSkus: [...A, ...T], combinedSkusToUserAndReason: e };
        }, [A, T, C, j]),
        y = i.useMemo(
            () =>
                I || null == g || (null != g && "loading" === g.state)
                    ? "loading"
                    : _.filter(u.Vq).length > 0 || "error" === g.state
                      ? "error"
                      : "success",
            [I, g, _],
        ),
        b = i.useMemo(() => (0, l.uniq)([...T.map((e) => e.id), ...S.map((e) => e.id)]), [T, S]);
    return (
        (0, a.j)({ skuIds: b }),
        { recommendations: T, wishlistAndRecommendations: S, skusToUserAndReason: N, status: y }
    );
}
function C(e) {
    i.useEffect(() => {
        (0, o.A)(e);
    }, [e]);
    let { defaultWishlistId: t } = (0, s.cf)([r.A], () => ({ defaultWishlistId: r.A.getFirstWishlistId(e) }));
    return { userIdsAndWishlistIds: i.useMemo(() => [{ userId: e, wishlistId: t }], [e, t]), defaultWishlistId: t };
}
function I(e) {
    let { userId: t, numItems: n, source: i = f.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: l, defaultWishlistId: s } = C(t),
        {
            wishlistAndRecommendations: a,
            skusToUserAndReason: r,
            status: o,
        } = E({ userIdsAndWishlistIds: l, applicationIds: (0, g.T)(t), numItems: n, source: i }),
        { totalUnownedWishlistItemCount: d, slicedWishlistAndRecommendations: c } = (0, A.m)({
            wishlistAndRecommendations: a,
            skusToUserAndReason: r,
            userId: t,
            numItems: n,
        });
    return {
        wishlistAndRecommendations: c,
        skusToUserAndReason: r,
        status: o,
        defaultWishlistId: s,
        totalUnownedWishlistItemCount: d,
    };
}
function _(e) {
    var t;
    let n,
        { applicationIds: l, userIds: a, numItems: d, source: c = f.B5.USER_PROFILE } = e,
        {
            wishlistAndRecommendations: u,
            skusToUserAndReason: h,
            status: m,
        } = E({
            userIdsAndWishlistIds:
                ((t = i.useMemo(() => a?.slice(0, 5), [a])),
                i.useEffect(() => {
                    t.forEach((e) => {
                        (0, o.A)(e);
                    });
                }, [t]),
                (n = (0, s.yK)([r.A], () => t.map((e) => r.A.getFirstWishlistId(e) ?? null))),
                i.useMemo(() => t.map((e, t) => ({ userId: e, wishlistId: n[t] })), [t, n])),
            applicationIds: l,
            numItems: d,
            source: c,
            filterByApplicationIds: !0,
        });
    return { recommendations: i.useMemo(() => u.slice(0, d), [u, d]), skusToUserAndReason: h, status: m };
}
function T(e) {
    let { userId: t, numItems: n, source: l = f.B5.USER_PROFILE } = e,
        { userIdsAndWishlistIds: s } = C(t),
        {
            recommendations: a,
            skusToUserAndReason: r,
            status: o,
        } = E({ userIdsAndWishlistIds: s, applicationIds: (0, g.T)(t), numItems: n, source: l });
    return { recommendations: i.useMemo(() => a.slice(0, n), [a, n]), skusToUserAndReason: r, status: o };
}
