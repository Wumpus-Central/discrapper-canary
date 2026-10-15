n.d(t, { AW: () => h, Mk: () => E, UU: () => b, Vm: () => k, gZ: () => _, ql: () => R, v3: () => C });
var r,
    i = n(582128),
    s = n(575593),
    l = n(702841),
    a = n(688810),
    o = n(821925),
    u = n(174459),
    d = n(440938),
    c = n(590180),
    I = n(161918),
    f = n(295586),
    p = n(986630),
    g = n(572595),
    v = n(722258),
    x = n(57020),
    A = n(758836),
    m = n(652215);
let C = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function _() {
    return i.useContext(C).prioritizedCurrency;
}
var h =
    (((r = {}).NONE = "none"),
    (r.NEW = "new"),
    (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
    (r.LIMITED_TIME = "limited_time"),
    (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
    (r.BADGE_OVERRIDE = "badge_override"),
    (r.DYNAMIC = "dynamic"),
    r);
function E(e) {
    return e === A.G2.ORBS ? A.Hi.ORBS : void 0;
}
function b(e, t, n) {
    return (r) => {
        u.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        o = (0, d.uM)(),
        { standalonePreview: u, flattenProductVariants: f } = i.useContext(C),
        { analyticsLocations: p } = (0, a.Ay)(t),
        A = (0, l.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
        m = i.useRef(null);
    return i.useCallback(
        (r) => {
            let i = (0, x.A)({ product: e });
            ((m.current = r.currentTarget), n?.(), u)
                ? (0, v.B)({
                      skuId: e.skuId,
                      flattenVariants: f,
                      analyticsLocations: p,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: i,
                      tab: s,
                      returnRef: m,
                      cardId: o?.cardId,
                      sessionId: o?.sessionId,
                      tilePosition: o?.tilePosition,
                  })
                : null != A &&
                  (0, g.t)({
                      product: e,
                      category: A,
                      shouldCheckoutWithOrbs: i,
                      analyticsLocations: p,
                      analyticsSource: t,
                      returnRef: m,
                      tab: s,
                      cardId: o?.cardId,
                      sessionId: o?.sessionId,
                      tilePosition: o?.tilePosition,
                  });
        },
        [e, s, A, u, f, t, p, n, o?.cardId, o?.sessionId, o?.tilePosition],
    );
}
function k(e) {
    let { flattenProductVariants: t, productOverride: n } = i.useContext(C),
        { legacyProduct: r, storefrontProduct: s } = (0, l.cf)(
            [c.A, o.A],
            () => {
                if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                let r =
                    !0 === t ? c.A.getProduct(e) : c.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                return { legacyProduct: r, storefrontProduct: null == r ? o.A.getProductsForSku(e)?.[0] : void 0 };
            },
            [e, t, n],
        ),
        a = null == n && null == r && null == s;
    i.useEffect(() => {
        a && "" !== e && f.p.requestProducts([e]);
    }, [a, e]);
    let u = i.useMemo(
        () =>
            null != s
                ? (p.A.fromStorefrontProductRecord(s, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                : void 0,
        [s, t, e],
    );
    return n ?? r ?? u;
}
