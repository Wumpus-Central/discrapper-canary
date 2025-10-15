n.d(t, {
    UD: () => C,
    ZL: () => I,
    kZ: () => v,
    lr: () => E,
    ny: () => y,
    zL: () => O,
}),
    n(388685),
    n(539854);
var r,
    i = n(647438),
    l = n(685816),
    a = n(482820),
    o = n(442837),
    s = n(597688),
    c = n(884697),
    u = n(223143),
    d = n(364111),
    p = n(621853),
    f = n(46841),
    h = n(277511),
    g = n(607550),
    m = n(541699),
    b = n(981631),
    _ = n(215023);
let O = 6;
var E = (((r = {}).WISHLIST = "wishlist"), (r.POPULAR = "popular"), r);
function v(e, t) {
    let n = (0, f.S)({ location: "UserProfileModalV2" }),
        [r, l, a, s] = (0, o.Wu)([g.Z], () =>
            null != e && n
                ? [g.Z.getWishlist(e), g.Z.isFetching(e), g.Z.getError(e), g.Z.getUpdatedAt(e)]
                : [null, !1, void 0, void 0],
        ),
        c = (0, o.e7)([p.Z], () => {
            var n;
            if (null != e && null != t) return null == (n = p.Z.getWishlistSettings(t, e)) ? void 0 : n.updated_at;
        });
    return (
        (0, i.useEffect)(() => {
            null != e && !l && n && null == a && (null == r || (null != c && s !== c)) && h.Z.fetchWishlist(e, c);
        }, [e, r, l, n, c, s, a]),
        {
            wishlist: r,
            isFetching: l,
            error: a,
        }
    );
}
function y(e, t) {
    return (0, o.e7)([g.Z], () => null != e && g.Z.hasSkuId(e, t));
}
function I(e) {
    let { defaultWishlistId: t } = (0, o.cj)([p.Z], () => ({ defaultWishlistId: p.Z.getFirstWishlistId(e.id) })),
        { wishlist: n, isFetching: r, error: f } = v(t),
        h = i.useMemo(() => null != n && n.items.filter(m.Q).length >= O, [n]),
        {
            shopBlocks: g,
            isFetchingShopHome: b,
            fetchShopHomeError: E,
        } = (0, d.E)(_.AW.HOME, {
            includeBundles: !0,
            includePopularPicks: !0,
            includeDynamicBlocks: !0,
        }),
        { isFetchingCategories: y } = (0, u.ZP)();
    return {
        defaultWishlistId: t,
        wishlist: n,
        popularProducts: i.useMemo(
            () =>
                h || null == g || b
                    ? []
                    : (function (e) {
                          var t, n;
                          let r = e.find((e) => e.type === l.z.FEED);
                          if (null == r) return [];
                          let i = [];
                          for (let e of null != (n = null == (t = r.sortedSkuIds) ? void 0 : t[a.m.POPULAR])
                              ? n
                              : r.rankedSkuIds) {
                              if (i.length >= O) break;
                              let t = s.Z.getProduct(e);
                              null == t || (0, c.x6)(t) || i.push(t);
                          }
                          return i;
                      })(g),
            [h, g, b],
        ),
        isFetchingWishlist: r,
        isFetchingShopHome: !h && b,
        isFetchingCategories: y,
        wishlistError: f,
        fetchShopHomeError: h ? void 0 : E,
    };
}
function C(e) {
    let { wishlist: t, defaultWishlistId: n, popularProducts: r, wishlistError: l, fetchShopHomeError: a } = e;
    return i.useMemo(() => {
        if (null == t || null == n || null != l || null != a)
            return {
                displayItems: [],
                wishlistLength: 0,
            };
        let e = t.items.filter(m.Q),
            i = [],
            o = e.slice(0, O),
            s = o.length;
        if (
            (i.push(
                ...o.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            i.length < O)
        ) {
            let e = new Set(o.map((e) => e.skuId)),
                t = r.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && i.length < O; e++) {
                let n = (function (e) {
                    if (null == e.items || 0 === e.items.length) return null;
                    let t = {
                        sku_id: e.skuId,
                        sku_name: e.name,
                        sku_product_line: b.POd.COLLECTIBLES,
                        collectibles_item: e.items[0],
                    };
                    return m.Z.fromServer(t);
                })(t[e]);
                null !== n &&
                    i.push({
                        item: n,
                        source: "popular",
                    });
            }
        }
        return {
            displayItems: i,
            wishlistLength: s,
        };
    }, [t, n, l, r, a]);
}
