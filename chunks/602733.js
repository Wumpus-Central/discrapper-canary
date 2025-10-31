n.d(t, {
    UD: () => T,
    ZL: () => I,
    ao: () => S,
    kZ: () => g,
    lr: () => m,
    ny: () => E,
    zL: () => h,
}),
    n(388685),
    n(539854);
var r = n(647438),
    i = n(442837),
    a = n(335131),
    o = n(597688),
    s = n(998030),
    l = n(621853),
    c = n(46841),
    u = n(277511),
    d = n(607550),
    f = n(541699),
    _ = n(981631),
    p = n(215023);
let h = 6;
var m = (function (e) {
    return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
})({});
function g(e, t) {
    let n = (0, c.S)({ location: "UserProfileModalV2" }),
        [a, o, s, f] = (0, i.Wu)([d.Z], () =>
            null != e && n
                ? [d.Z.getWishlist(e), d.Z.isFetching(e), d.Z.getError(e), d.Z.getUpdatedAt(e)]
                : [null, !1, void 0, void 0],
        ),
        _ = (0, i.e7)([l.Z], () => {
            var n;
            if (null != e && null != t) return null == (n = l.Z.getWishlistSettings(t, e)) ? void 0 : n.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            !(null == e || d.Z.isFetching(e)) &&
                n &&
                null == s &&
                (null == a || (null != _ && f !== _)) &&
                u.Z.fetchWishlist(e, _);
        }, [e, a, n, _, f, s]),
        {
            wishlist: a,
            isFetching: o,
            error: s,
        }
    );
}
function E(e, t) {
    return (0, i.e7)([d.Z], () => null != e && d.Z.hasSkuId(e, t));
}
function b(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = {
        sku_id: e.skuId,
        sku_name: e.name,
        sku_product_line: _.POd.COLLECTIBLES,
        collectibles_item: e.items[0],
    };
    return f.Z.fromServer(t);
}
function y(e) {
    let [t, n] = r.useState([]),
        [i, o] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = !1;
            o(!0);
            let r = p.gj.map((e) => e);
            return (
                (0, a._o)(e, r).then((e) => {
                    t ||
                        (n(
                            r.filter((t) => {
                                var n;
                                return (null == (n = e[t]) ? void 0 : n.valid) === !0;
                            }),
                        ),
                        o(!1));
                }),
                () => {
                    t = !0;
                }
            );
        }, [e]),
        {
            validatedSkuIds: t,
            isValidating: i,
        }
    );
}
function O(e) {
    let t = e.slice(0, h),
        n = (0, i.e7)([o.Z], () => t.some((e) => o.Z.isFetchingProduct(e)));
    return (
        r.useEffect(() => {
            if (0 !== t.length)
                for (let e of t) {
                    let t = o.Z.getProduct(e),
                        n = o.Z.isFetchingProduct(e);
                    null != t || n || (0, a.jr)(e);
                }
        }, [t]),
        { isFetching: n }
    );
}
function v() {
    let e = [];
    for (let t of p.gj) {
        let n = o.Z.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}
function I(e) {
    let { defaultWishlistId: t } = (0, i.cj)([l.Z], () => ({ defaultWishlistId: l.Z.getFirstWishlistId(e.id) })),
        { wishlist: n, isFetching: a, error: o } = g(t),
        s = r.useMemo(() => null != n && n.items.filter((e) => !0 !== e.isOwned).length >= h, [n]),
        { validatedSkuIds: c, isValidating: u } = y(e.id),
        { isFetching: d } = O(c);
    return {
        defaultWishlistId: t,
        wishlist: n,
        popularCollectiblesProducts: s ? [] : v(),
        isFetchingWishlist: a,
        isValidatingPopularProducts: !s && u,
        isFetchingPopularProducts: !s && d,
        wishlistError: o,
    };
}
function T(e) {
    let { wishlist: t, popularCollectiblesProducts: n, wishlistError: i } = e;
    return r.useMemo(() => {
        var e, r;
        if (null != i)
            return {
                displayItems: [],
                wishlistItemCountToBeDisplayed: 0,
                hasMoreItems: !1,
                totalWishlistItemCount: 0,
            };
        let a = (null != (e = null == t ? void 0 : t.items) ? e : []).filter((e) => !0 !== e.isOwned),
            o = a.slice(0, h),
            s = [];
        if (
            (s.push(
                ...o.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            s.length < h)
        ) {
            let e = new Set(o.map((e) => e.skuId)),
                t = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && s.length < h; e++) {
                let n = b(t[e]);
                null !== n &&
                    s.push({
                        item: n,
                        source: "popular",
                    });
            }
        }
        return {
            displayItems: s,
            wishlistItemCountToBeDisplayed: o.length,
            hasMoreItems: a.length > h,
            totalWishlistItemCount: null != (r = null == t ? void 0 : t.items.length) ? r : 0,
        };
    }, [t, i, n]);
}
function S(e) {
    let { location: t, isGift: n, giftRecipient: a } = e,
        o = (0, s.yc)({ location: t }),
        c = (0, s.hS)({ location: t }),
        u = (0, i.e7)([l.Z], () => ((null == a ? void 0 : a.id) == null ? null : l.Z.getFirstWishlistId(a.id))),
        { wishlist: d } = g(o && null != u && n && null != a ? u : null, null == a ? void 0 : a.id);
    return r.useMemo(() => {
        var e;
        return (
            !0 === n &&
            null != a &&
            !!o &&
            ((null != (e = null == d ? void 0 : d.items.filter((e) => !0 !== e.isOwned)) ? e : []).length > 0 || c)
        );
    }, [n, a, o, d, c]);
}
