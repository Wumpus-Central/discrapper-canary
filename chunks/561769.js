n.d(t, { AW: () => b, Mk: () => R, UU: () => k, Vm: () => S, gZ: () => C, ql: () => y, v3: () => x });
var r,
    i = n(582128),
    l = n(575593),
    s = n(702841),
    a = n(688810),
    u = n(821925),
    o = n(174459),
    d = n(440938),
    c = n(590180),
    f = n(161918),
    I = n(295586),
    v = n(298072),
    p = n(986630),
    m = n(623373),
    A = n(572595),
    g = n(722258),
    E = n(57020),
    h = n(758836),
    _ = n(652215);
let x = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function C() {
    return i.useContext(x).prioritizedCurrency;
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
function R(e) {
    return e === h.G2.ORBS ? h.Hi.ORBS : void 0;
}
function k(e, t, n) {
    return (r) => {
        o.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === h.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === h.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === h.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    };
}
function y(e, t, n) {
    let r = (0, f.Mk)(),
        l = r?.tab,
        u = (0, d.uM)(),
        { standalonePreview: o, flattenProductVariants: I } = i.useContext(x),
        { analyticsLocations: p } = (0, a.Ay)(t),
        h = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
        _ = (0, v.Q)(e),
        C = (0, m.rb)(e, _).skuId,
        b = i.useRef(null);
    return i.useCallback(
        (r) => {
            let i = (0, E.A)({ product: e });
            ((b.current = r.currentTarget), n?.(), o)
                ? (0, g.B)({
                      skuId: e.skuId,
                      flattenVariants: I,
                      analyticsLocations: p,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: i,
                      tab: l,
                      returnRef: b,
                      initialVariantSkuId: C,
                      cardId: u?.cardId,
                      sessionId: u?.sessionId,
                      tilePosition: u?.tilePosition,
                  })
                : null != h &&
                  (0, A.t)({
                      product: e,
                      category: h,
                      shouldCheckoutWithOrbs: i,
                      analyticsLocations: p,
                      analyticsSource: t,
                      returnRef: b,
                      tab: l,
                      cardId: u?.cardId,
                      sessionId: u?.sessionId,
                      tilePosition: u?.tilePosition,
                  });
        },
        [e, C, l, h, o, I, t, p, n, u?.cardId, u?.sessionId, u?.tilePosition],
    );
}
function S(e) {
    let { flattenProductVariants: t, productOverride: n } = i.useContext(x),
        { legacyProduct: r, storefrontProduct: l } = (0, s.cf)(
            [c.A, u.A],
            () => {
                if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                let r =
                    !0 === t ? c.A.getProduct(e) : c.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                return { legacyProduct: r, storefrontProduct: null == r ? u.A.getProductsForSku(e)?.[0] : void 0 };
            },
            [e, t, n],
        ),
        a = null == n && null == r && null == l;
    i.useEffect(() => {
        a && "" !== e && I.p.requestProducts([e]);
    }, [a, e]);
    let o = i.useMemo(
        () =>
            null != l
                ? (p.A.fromStorefrontProductRecord(l, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                : void 0,
        [l, t, e],
    );
    return n ?? r ?? o;
}
