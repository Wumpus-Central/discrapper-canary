n.d(t, { AW: () => b, Mk: () => k, UU: () => R, Vm: () => j, gZ: () => C, ql: () => y, v3: () => E });
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
    v = n(298072),
    p = n(986630),
    g = n(623373),
    x = n(572595),
    A = n(722258),
    m = n(57020),
    _ = n(758836),
    h = n(652215);
let E = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function C() {
    return i.useContext(E).prioritizedCurrency;
}
var b =
    (((r = {}).NONE = "none"),
    (r.NEW = "new"),
    (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
    (r.LIMITED_TIME = "limited_time"),
    (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
    (r.BADGE_OVERRIDE = "badge_override"),
    (r.DYNAMIC = "dynamic"),
    r);
function k(e) {
    return e === _.G2.ORBS ? _.Hi.ORBS : void 0;
}
function R(e, t, n) {
    return (r) => {
        o.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
}
function y(e, t, n) {
    let r = (0, I.Mk)(),
        s = r?.tab,
        u = (0, d.uM)(),
        { standalonePreview: o, flattenProductVariants: f } = i.useContext(E),
        { analyticsLocations: p } = (0, l.Ay)(t),
        _ = (0, a.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
        h = (0, v.Q)(e),
        C = (0, g.rb)(e, h).skuId,
        b = i.useRef(null);
    return i.useCallback(
        (r) => {
            let i = (0, m.A)({ product: e });
            ((b.current = r.currentTarget), n?.(), o)
                ? (0, A.B)({
                      skuId: e.skuId,
                      flattenVariants: f,
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
                : null != _ &&
                  (0, x.t)({
                      product: e,
                      category: _,
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
        [e, C, s, _, o, f, t, p, n, u?.cardId, u?.sessionId, u?.tilePosition],
    );
}
function j(e) {
    let { flattenProductVariants: t, productOverride: n } = i.useContext(E),
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
                ? (p.A.fromStorefrontProductRecord(s, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                : void 0,
        [s, t, e],
    );
    return n ?? r ?? o;
}
