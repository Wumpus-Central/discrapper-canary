var r,
    i = n(582128),
    s = n(575593),
    a = n(164636),
    l = n(688810),
    u = n(821925),
    o = n(129230),
    d = n(857512),
    c = n(590180),
    I = n(161918),
    v = n(295586),
    f = n(298072),
    p = n(986630),
    m = n(623373),
    g = n(572595),
    x = n(722258),
    h = n(57020),
    A = n(758836),
    _ = n(652215);
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
    r);
n.d(
    t,
    {},
    {
        AW: C,
        Mk: function (e) {
            return e === A.G2.ORBS ? A.Hi.ORBS : void 0;
        },
        UU: function (e, t, n) {
            return (r) => {
                o.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    sku_id: e.skuId,
                    page_type: t,
                    page_section: n?.pageSection,
                    page_category: t === A.G2.HOME ? void 0 : n?.pageCategory,
                    page_index: t === A.G2.CATALOG ? n?.pageIndex : void 0,
                    page_size: t === A.G2.CATALOG ? n?.pageSize : void 0,
                    tile_type: s.R[e.type],
                    tile_position: String(n?.tilePosition),
                    cta_name: r,
                });
            };
        },
        Vm: function (e) {
            let { flattenProductVariants: t, productOverride: n } = i.useContext(E),
                { legacyProduct: r, storefrontProduct: s } = (0, a.cf)(
                    [c.A, u.A],
                    () => {
                        if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                        let r =
                            !0 === t
                                ? c.A.getProduct(e)
                                : c.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                        return {
                            legacyProduct: r,
                            storefrontProduct: null == r ? u.A.getProductsForSku(e)?.[0] : void 0,
                        };
                    },
                    [e, t, n],
                ),
                l = null == n && null == r && null == s;
            i.useEffect(() => {
                l && "" !== e && v.p.requestProducts([e]);
            }, [l, e]);
            let o = i.useMemo(
                () =>
                    null != s
                        ? (p.A.fromStorefrontProductRecord(s, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                        : void 0,
                [s, t, e],
            );
            return n ?? r ?? o;
        },
        gZ: function () {
            return i.useContext(E).prioritizedCurrency;
        },
        ql: function (e, t, n) {
            let r = (0, I.Mk)(),
                s = r?.tab,
                u = (0, d.uM)(),
                { standalonePreview: o, flattenProductVariants: v } = i.useContext(E),
                { analyticsLocations: p } = (0, l.Ay)(t),
                A = (0, a.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
                _ = (0, f.Q)(e),
                C = (0, m.rb)(e, _).skuId,
                b = i.useRef(null);
            return i.useCallback(
                (r) => {
                    let i = (0, h.A)({ product: e });
                    ((b.current = r.currentTarget), n?.(), o)
                        ? (0, x.B)({
                              skuId: e.skuId,
                              flattenVariants: v,
                              analyticsLocations: p,
                              analyticsSource: t,
                              shouldCheckoutWithOrbs: i,
                              tab: s,
                              returnRef: b,
                              initialVariantSkuId: C,
                              cardId: u?.cardId,
                              sessionId: u?.sessionId,
                              tilePosition: u?.tilePosition,
                          })
                        : null != A &&
                          (0, g.t)({
                              product: e,
                              category: A,
                              shouldCheckoutWithOrbs: i,
                              analyticsLocations: p,
                              analyticsSource: t,
                              returnRef: b,
                              tab: s,
                              cardId: u?.cardId,
                              sessionId: u?.sessionId,
                              tilePosition: u?.tilePosition,
                          });
                },
                [e, C, s, A, o, v, t, p, n, u?.cardId, u?.sessionId, u?.tilePosition],
            );
        },
        v3: E,
    },
);
