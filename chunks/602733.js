n.d(t, {
    UD: () => N,
    ZL: () => C,
    ao: () => R,
    kZ: () => I,
    lr: () => v,
    ny: () => T,
    zL: () => y,
}),
    n(388685),
    n(539854);
var r = n(647438),
    i = n(685816),
    a = n(482820),
    o = n(442837),
    s = n(335131),
    l = n(597688),
    c = n(884697),
    u = n(223143),
    d = n(364111),
    f = n(998030),
    _ = n(621853),
    p = n(46841),
    h = n(277511),
    m = n(607550),
    g = n(541699),
    E = n(981631),
    b = n(215023);
let y = 6,
    O = 50;
var v = (function (e) {
    return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
})({});
function I(e, t) {
    let n = (0, p.S)({ location: "UserProfileModalV2" }),
        [i, a, s, l] = (0, o.Wu)([m.Z], () =>
            null != e && n
                ? [m.Z.getWishlist(e), m.Z.isFetching(e), m.Z.getError(e), m.Z.getUpdatedAt(e)]
                : [null, !1, void 0, void 0],
        ),
        c = (0, o.e7)([_.Z], () => {
            var n;
            if (null != e && null != t) return null == (n = _.Z.getWishlistSettings(t, e)) ? void 0 : n.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            !(null == e || m.Z.isFetching(e)) &&
                n &&
                null == s &&
                (null == i || (null != c && l !== c)) &&
                h.Z.fetchWishlist(e, c);
        }, [e, i, n, c, l, s]),
        {
            wishlist: i,
            isFetching: a,
            error: s,
        }
    );
}
function T(e, t) {
    return (0, o.e7)([m.Z], () => null != e && m.Z.hasSkuId(e, t));
}
function S(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = {
        sku_id: e.skuId,
        sku_name: e.name,
        sku_product_line: E.POd.COLLECTIBLES,
        collectibles_item: e.items[0],
    };
    return g.Z.fromServer(t);
}
function A(e) {
    var t, n;
    let r = e.find((e) => e.type === i.z.FEED);
    if (null == r) return [];
    let o = [];
    for (let e of null != (n = null == (t = r.sortedSkuIds) ? void 0 : t[a.m.POPULAR]) ? n : r.rankedSkuIds) {
        if (o.length >= O) break;
        let t = l.Z.getProduct(e);
        null == t || (0, c.x6)(t) || o.push(t);
    }
    return o;
}
function C(e) {
    let { defaultWishlistId: t } = (0, o.cj)([_.Z], () => ({ defaultWishlistId: _.Z.getFirstWishlistId(e.id) })),
        { wishlist: n, isFetching: i, error: a } = I(t),
        l = r.useMemo(() => null != n && n.items.filter((e) => !0 !== e.isOwned).length >= y, [n]),
        {
            shopBlocks: c,
            isFetchingShopHome: f,
            fetchShopHomeError: p,
        } = (0, d.E)(b.AW.HOME, {
            includeBundles: !0,
            includePopularPicks: !0,
            includeDynamicBlocks: !0,
        }),
        { isFetchingCategories: h } = (0, u.ZP)(),
        m = r.useMemo(() => (l || null == c || f ? [] : A(c)), [l, c, f]),
        [g, E] = r.useState([]),
        [O, v] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (0 === m.length) {
                E([]), v(!1);
                return;
            }
            let t = !1;
            v(!0);
            let n = m.map((e) => e.skuId);
            return (
                (0, s._o)(e.id, n).then((e) => {
                    t ||
                        (E(
                            m.filter((t) => {
                                var n;
                                return (null == (n = e[t.skuId]) ? void 0 : n.valid) === !0;
                            }),
                        ),
                        v(!1));
                }),
                () => {
                    t = !0;
                }
            );
        }, [m, e.id]),
        {
            defaultWishlistId: t,
            wishlist: n,
            popularCollectiblesProducts: g,
            isFetchingWishlist: i,
            isFetchingShopHome: !l && f,
            isFetchingCategories: h,
            isValidatingPopularProducts: !l && O,
            wishlistError: a,
            fetchShopHomeError: l ? void 0 : p,
        }
    );
}
function N(e) {
    let { wishlist: t, popularCollectiblesProducts: n, wishlistError: i, fetchShopHomeError: a } = e;
    return r.useMemo(() => {
        var e, r;
        if (null != i || null != a)
            return {
                displayItems: [],
                wishlistItemCountToBeDisplayed: 0,
                hasMoreItems: !1,
                totalWishlistItemCount: 0,
            };
        let o = (null != (e = null == t ? void 0 : t.items) ? e : []).filter((e) => !0 !== e.isOwned),
            s = o.slice(0, y),
            l = [];
        if (
            (l.push(
                ...s.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            l.length < y)
        ) {
            let e = new Set(s.map((e) => e.skuId)),
                t = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && l.length < y; e++) {
                let n = S(t[e]);
                null !== n &&
                    l.push({
                        item: n,
                        source: "popular",
                    });
            }
        }
        return {
            displayItems: l,
            wishlistItemCountToBeDisplayed: s.length,
            hasMoreItems: o.length > y,
            totalWishlistItemCount: null != (r = null == t ? void 0 : t.items.length) ? r : 0,
        };
    }, [t, i, n, a]);
}
function R(e) {
    let { location: t, isGift: n, giftRecipient: i } = e,
        a = (0, f.yc)({ location: t }),
        s = (0, f.hS)({ location: t }),
        l = (0, o.e7)([_.Z], () => ((null == i ? void 0 : i.id) == null ? null : _.Z.getFirstWishlistId(i.id))),
        { wishlist: c } = I(a && null != l && n && null != i ? l : null, null == i ? void 0 : i.id);
    return r.useMemo(() => {
        var e;
        return (
            !0 === n &&
            null != i &&
            !!a &&
            ((null != (e = null == c ? void 0 : c.items.filter((e) => !0 !== e.isOwned)) ? e : []).length > 0 || s)
        );
    }, [n, i, a, c, s]);
}
