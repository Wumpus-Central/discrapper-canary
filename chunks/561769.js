var r,
    i = n(582128),
    s = n(575593),
    a = n(164636),
    l = n(688810),
    o = n(821925),
    u = n(129230),
    d = n(857512),
    c = n(590180),
    I = n(161918),
    v = n(295586),
    f = n(298072),
    p = n(986630),
    m = n(623373),
    g = n(572595),
    x = n(722258),
    _ = n(758836),
    A = n(652215);
let E = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
var C =
    (((r = {}).NONE = "none"),
    (r.NEW = "new"),
    (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
    (r.LIMITED_TIME = "limited_time"),
    (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
    (r.BADGE_OVERRIDE = "badge_override"),
    (r.DYNAMIC = "dynamic"),
    (r.PROMO_DISCOUNT = "promo_discount"),
    (r.PROMO_ORBS_BACK = "promo_orbs_back"),
    r);
n.d(
    t,
    {},
    {
        AW: C,
        Mk: function (e) {
            return e === _.G2.ORBS ? _.Hi.ORBS : void 0;
        },
        UU: function (e, t, n) {
            return (r) => {
                u.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    sku_id: e.skuId,
                    page_type: t,
                    page_section: n?.pageSection,
                    page_category: t === _.G2.HOME ? void 0 : n?.pageCategory,
                    page_index: t === _.G2.CATALOG ? n?.pageIndex : void 0,
                    page_size: t === _.G2.CATALOG ? n?.pageSize : void 0,
                    tile_type: s.R[e.type],
                    tile_position: String(n?.tilePosition),
                    cta_name: r,
                });
            };
        },
        Vm: function (e) {
            let { flattenProductVariants: t, productOverride: n } = i.useContext(E),
                { legacyProduct: r, storefrontProduct: s } = (0, a.cf)(
                    [c.A, o.A],
                    () => {
                        if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                        let r =
                            !0 === t
                                ? c.A.getProduct(e)
                                : c.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                        return {
                            legacyProduct: r,
                            storefrontProduct: null == r ? o.A.getProductsForSku(e)?.[0] : void 0,
                        };
                    },
                    [e, t, n],
                ),
                l = null == n && null == r && null == s;
            i.useEffect(() => {
                l && "" !== e && v.p.requestProducts([e]);
            }, [l, e]);
            let u = i.useMemo(
                () =>
                    null != s
                        ? (p.A.fromStorefrontProductRecord(s, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                        : void 0,
                [s, t, e],
            );
            return n ?? r ?? u;
        },
        gZ: function () {
            return i.useContext(E).prioritizedCurrency;
        },
        ql: function (e, t, n) {
            let r = (0, I.Mk)(),
                s = r?.tab,
                o = (0, d.uM)(),
                { standalonePreview: u, flattenProductVariants: v } = i.useContext(E),
                { analyticsLocations: p } = (0, l.Ay)(t),
                _ = (0, a.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
                A = (0, f.Q)(e),
                C = (0, m.rb)(e, A).skuId,
                h = i.useRef(null);
            return i.useCallback(
                (r) => {
                    ((h.current = r.currentTarget), n?.(), u)
                        ? (0, x.B)({
                              skuId: e.skuId,
                              flattenVariants: v,
                              analyticsLocations: p,
                              analyticsSource: t,
                              tab: s,
                              returnRef: h,
                              initialVariantSkuId: C,
                              cardId: o?.cardId,
                              sessionId: o?.sessionId,
                              tilePosition: o?.tilePosition,
                          })
                        : null != _ &&
                          (0, g.t)({
                              product: e,
                              category: _,
                              analyticsLocations: p,
                              analyticsSource: t,
                              returnRef: h,
                              tab: s,
                              cardId: o?.cardId,
                              sessionId: o?.sessionId,
                              tilePosition: o?.tilePosition,
                          });
                },
                [e, C, s, _, u, v, t, p, n, o?.cardId, o?.sessionId, o?.tilePosition],
            );
        },
        v3: E,
    },
);
