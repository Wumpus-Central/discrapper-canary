n.d(t, {
    UD: () => I,
    ZL: () => y,
    kZ: () => E,
    lr: () => O,
    ny: () => v,
    zL: () => _,
}),
    n(388685),
    n(539854);
var r,
    i = n(647438),
    l = n(685816),
    a = n(482820),
    o = n(442837),
    s = n(597688),
    c = n(223143),
    u = n(364111),
    d = n(621853),
    p = n(46841),
    f = n(277511),
    h = n(607550),
    g = n(541699),
    m = n(981631),
    b = n(215023);
let _ = 6;
var O = (((r = {}).WISHLIST = "wishlist"), (r.POPULAR = "popular"), r);
function E(e, t) {
    let n = (0, p.S)({ location: "UserProfileModalV2" }),
        [r, l, a, s] = (0, o.Wu)([h.Z], () =>
            null != e && n
                ? [h.Z.getWishlist(e), h.Z.isFetching(e), h.Z.getError(e), h.Z.getUpdatedAt(e)]
                : [null, !1, void 0, void 0],
        ),
        c = (0, o.e7)([d.Z], () => {
            var n;
            if (null != e && null != t) return null == (n = d.Z.getWishlistSettings(t, e)) ? void 0 : n.updated_at;
        });
    return (
        (0, i.useEffect)(() => {
            null != e && !l && n && null == a && (null == r || (null != c && s !== c)) && f.Z.fetchWishlist(e, c);
        }, [e, r, l, n, c, s, a]),
        {
            wishlist: r,
            isFetching: l,
            error: a,
        }
    );
}
function v(e, t) {
    return (0, o.e7)([h.Z], () => null != e && h.Z.hasSkuId(e, t));
}
function y(e) {
    let { defaultWishlistId: t } = (0, o.cj)([d.Z], () => ({ defaultWishlistId: d.Z.getFirstWishlistId(e.id) })),
        { wishlist: n, isFetching: r, error: p } = E(t),
        f = i.useMemo(() => null != n && n.items.filter(g.Q).length >= _, [n]),
        {
            shopBlocks: h,
            isFetchingShopHome: m,
            fetchShopHomeError: O,
        } = (0, u.E)(b.AW.HOME, {
            includeBundles: !0,
            includePopularPicks: !0,
            includeDynamicBlocks: !0,
        }),
        { isFetchingCategories: v } = (0, c.ZP)();
    return {
        defaultWishlistId: t,
        wishlist: n,
        popularProducts: i.useMemo(
            () =>
                f || null == h || m
                    ? []
                    : (function (e) {
                          var t, n;
                          let r = e.find((e) => e.type === l.z.FEED);
                          if (null == r) return [];
                          let i = [];
                          for (let e of null != (n = null == (t = r.sortedSkuIds) ? void 0 : t[a.m.POPULAR])
                              ? n
                              : r.rankedSkuIds) {
                              if (i.length >= _) break;
                              let t = s.Z.getProduct(e);
                              null != t && i.push(t);
                          }
                          return i;
                      })(h),
            [f, h, m],
        ),
        isFetchingWishlist: r,
        isFetchingShopHome: !f && m,
        isFetchingCategories: v,
        wishlistError: p,
        fetchShopHomeError: f ? void 0 : O,
    };
}
function I(e) {
    let { wishlist: t, defaultWishlistId: n, popularProducts: r, wishlistError: l, fetchShopHomeError: a } = e;
    return i.useMemo(() => {
        if (null == t || null == n || null != l || null != a)
            return {
                displayItems: [],
                wishlistLength: 0,
            };
        let e = t.items.filter(g.Q),
            i = [],
            o = e.slice(0, _),
            s = o.length;
        if (
            (i.push(
                ...o.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            i.length < _)
        ) {
            let e = new Set(o.map((e) => e.skuId)),
                t = r.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && i.length < _; e++) {
                let n = (function (e) {
                    if (null == e.items || 0 === e.items.length) return null;
                    let t = {
                        sku_id: e.skuId,
                        sku_name: e.name,
                        sku_product_line: m.POd.COLLECTIBLES,
                        collectibles_item: e.items[0],
                    };
                    return g.Z.fromServer(t);
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
