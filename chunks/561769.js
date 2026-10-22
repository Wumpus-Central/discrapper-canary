n.d(t, { AW: () => E, Mk: () => C, UU: () => b, Vm: () => k, gZ: () => h, ql: () => R, v3: () => _ });
var r,
    i = n(582128),
    s = n(575593),
    a = n(702841),
    l = n(688810),
    u = n(821925),
    o = n(174459),
    d = n(440938),
    c = n(590180),
    I = n(161918),
    f = n(295586),
    v = n(986630),
    p = n(572595),
    g = n(722258),
    x = n(57020),
    A = n(758836),
    m = n(652215);
let _ = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function h() {
    return i.useContext(_).prioritizedCurrency;
}
var E =
    (((r = {}).NONE = "none"),
    (r.NEW = "new"),
    (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
    (r.LIMITED_TIME = "limited_time"),
    (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
    (r.BADGE_OVERRIDE = "badge_override"),
    (r.DYNAMIC = "dynamic"),
    r);
function C(e) {
    return e === A.G2.ORBS ? A.Hi.ORBS : void 0;
}
function b(e, t, n) {
    return (r) => {
        o.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
}
function R(e, t, n) {
    let r = (0, I.Mk)(),
        s = r?.tab,
        u = (0, d.uM)(),
        { standalonePreview: o, flattenProductVariants: f } = i.useContext(_),
        { analyticsLocations: v } = (0, l.Ay)(t),
        A = (0, a.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
        m = i.useRef(null);
    return i.useCallback(
        (r) => {
            let i = (0, x.A)({ product: e });
            ((m.current = r.currentTarget), n?.(), o)
                ? (0, g.B)({
                      skuId: e.skuId,
                      flattenVariants: f,
                      analyticsLocations: v,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: i,
                      tab: s,
                      returnRef: m,
                      cardId: u?.cardId,
                      sessionId: u?.sessionId,
                      tilePosition: u?.tilePosition,
                  })
                : null != A &&
                  (0, p.t)({
                      product: e,
                      category: A,
                      shouldCheckoutWithOrbs: i,
                      analyticsLocations: v,
                      analyticsSource: t,
                      returnRef: m,
                      tab: s,
                      cardId: u?.cardId,
                      sessionId: u?.sessionId,
                      tilePosition: u?.tilePosition,
                  });
        },
        [e, s, A, o, f, t, v, n, u?.cardId, u?.sessionId, u?.tilePosition],
    );
}
function k(e) {
    let { flattenProductVariants: t, productOverride: n } = i.useContext(_),
        { legacyProduct: r, storefrontProduct: s } = (0, a.cf)(
            [c.A, u.A],
            () => {
                if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                let r =
                    !0 === t ? c.A.getProduct(e) : c.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                return { legacyProduct: r, storefrontProduct: null == r ? u.A.getProductsForSku(e)?.[0] : void 0 };
            },
            [e, t, n],
        ),
        l = null == n && null == r && null == s;
    i.useEffect(() => {
        l && "" !== e && f.p.requestProducts([e]);
    }, [l, e]);
    let o = i.useMemo(
        () =>
            null != s
                ? (v.A.fromStorefrontProductRecord(s, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                : void 0,
        [s, t, e],
    );
    return n ?? r ?? o;
}
