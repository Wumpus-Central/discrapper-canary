n.d(t, {
    UD: () => A,
    ZL: () => S,
    ao: () => C,
    kZ: () => O,
    lr: () => y,
    ny: () => v,
    zL: () => b,
}),
    n(388685),
    n(539854);
var r = n(647438),
    i = n(685816),
    a = n(482820),
    o = n(442837),
    s = n(597688),
    l = n(884697),
    c = n(223143),
    u = n(364111),
    d = n(998030),
    f = n(621853),
    _ = n(46841),
    p = n(277511),
    h = n(607550),
    m = n(541699),
    g = n(981631),
    E = n(215023);
let b = 6;
var y = (function (e) {
    return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
})({});
function O(e, t) {
    let n = (0, _.S)({ location: "UserProfileModalV2" }),
        [i, a, s, l] = (0, o.Wu)([h.Z], () =>
            null != e && n
                ? [h.Z.getWishlist(e), h.Z.isFetching(e), h.Z.getError(e), h.Z.getUpdatedAt(e)]
                : [null, !1, void 0, void 0],
        ),
        c = (0, o.e7)([f.Z], () => {
            var n;
            if (null != e && null != t) return null == (n = f.Z.getWishlistSettings(t, e)) ? void 0 : n.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            null != e && !a && n && null == s && (null == i || (null != c && l !== c)) && p.Z.fetchWishlist(e, c);
        }, [e, i, a, n, c, l, s]),
        {
            wishlist: i,
            isFetching: a,
            error: s,
        }
    );
}
function v(e, t) {
    return (0, o.e7)([h.Z], () => null != e && h.Z.hasSkuId(e, t));
}
function I(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = {
        sku_id: e.skuId,
        sku_name: e.name,
        sku_product_line: g.POd.COLLECTIBLES,
        collectibles_item: e.items[0],
    };
    return m.Z.fromServer(t);
}
function T(e) {
    var t, n;
    let r = e.find((e) => e.type === i.z.FEED);
    if (null == r) return [];
    let o = [];
    for (let e of null != (n = null == (t = r.sortedSkuIds) ? void 0 : t[a.m.POPULAR]) ? n : r.rankedSkuIds) {
        if (o.length >= b) break;
        let t = s.Z.getProduct(e);
        null == t || (0, l.x6)(t) || o.push(t);
    }
    return o;
}
function S(e) {
    let { defaultWishlistId: t } = (0, o.cj)([f.Z], () => ({ defaultWishlistId: f.Z.getFirstWishlistId(e.id) })),
        { wishlist: n, isFetching: i, error: a } = O(t),
        s = r.useMemo(() => null != n && n.items.filter(m.Q).length >= b, [n]),
        {
            shopBlocks: l,
            isFetchingShopHome: d,
            fetchShopHomeError: _,
        } = (0, u.E)(E.AW.HOME, {
            includeBundles: !0,
            includePopularPicks: !0,
            includeDynamicBlocks: !0,
        }),
        { isFetchingCategories: p } = (0, c.ZP)();
    return {
        defaultWishlistId: t,
        wishlist: n,
        popularCollectiblesProducts: r.useMemo(() => (s || null == l || d ? [] : T(l)), [s, l, d]),
        isFetchingWishlist: i,
        isFetchingShopHome: !s && d,
        isFetchingCategories: p,
        wishlistError: a,
        fetchShopHomeError: s ? void 0 : _,
    };
}
function A(e) {
    let { wishlist: t, popularCollectiblesProducts: n, wishlistError: i, fetchShopHomeError: a } = e;
    return r.useMemo(() => {
        var e;
        if (null != i || null != a)
            return {
                displayItems: [],
                wishlistLength: 0,
            };
        let r = (null != (e = null == t ? void 0 : t.items) ? e : []).slice(0, b),
            o = r.length,
            s = [];
        if (
            (s.push(
                ...r.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            s.length < b)
        ) {
            let e = new Set(r.map((e) => e.skuId)),
                t = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && s.length < b; e++) {
                let n = I(t[e]);
                null !== n &&
                    s.push({
                        item: n,
                        source: "popular",
                    });
            }
        }
        return {
            displayItems: s,
            wishlistLength: o,
        };
    }, [t, i, n, a]);
}
function C(e) {
    let { location: t, isGift: n, giftRecipient: i } = e,
        a = (0, d.yc)({ location: t }),
        s = (0, d.hS)({ location: t }),
        l = (0, o.e7)([f.Z], () => ((null == i ? void 0 : i.id) == null ? null : f.Z.getFirstWishlistId(i.id))),
        { wishlist: c } = O(a && null != l && n && null != i ? l : null, null == i ? void 0 : i.id);
    return r.useMemo(() => {
        var e;
        return (
            !0 === n &&
            null != i &&
            !!a &&
            ((null != (e = null == c ? void 0 : c.items.filter(m.Q)) ? e : []).length > 0 || s)
        );
    }, [n, i, a, c, s]);
}
