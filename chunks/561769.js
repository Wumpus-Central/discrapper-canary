n.d(t, { AW: () => h, Hi: () => v, Mk: () => x, UU: () => R, Vm: () => k, gZ: () => E, ql: () => b, v3: () => m });
var r,
    i,
    s = n(582128),
    l = n(575593),
    a = n(702841),
    o = n(793574),
    u = n(688810),
    c = n(174459),
    d = n(440938),
    p = n(590180),
    g = n(161918),
    I = n(572595),
    _ = n(722258),
    f = n(57020),
    C = n(758836),
    A = n(652215);
let m = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function E() {
    return s.useContext(m).prioritizedCurrency;
}
var h =
        (((r = {}).NONE = "none"),
        (r.NEW = "new"),
        (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (r.LIMITED_TIME = "limited_time"),
        (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (r.EARLY_ACCESS = "early_access"),
        (r.BADGE_OVERRIDE = "badge_override"),
        (r.DYNAMIC = "dynamic"),
        r),
    v = (((i = {}).FIAT = "fiat"), (i.ORBS = "orbs"), i);
function x(e) {
    return e === C.G2.ORBS ? "orbs" : void 0;
}
function R(e, t, n) {
    return (r) => {
        c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === C.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === C.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === C.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    };
}
function b(e, t, n) {
    let r = (0, g.Mk)(),
        i = r?.tab,
        l = (0, d.uM)(),
        { standalonePreview: c } = s.useContext(m),
        { analyticsLocations: C } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
        A = (0, a.bG)([p.A], () => p.A.getCategoryForProduct(e.skuId)),
        E = s.useRef(null);
    return s.useCallback(
        (r) => {
            let s = (0, f.A)({ product: e });
            ((E.current = r.currentTarget), n?.(), c)
                ? (0, _.B)({
                      skuId: e.skuId,
                      analyticsLocations: C,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: s,
                      tab: i,
                      returnRef: E,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  })
                : null != A &&
                  (0, I.t)({
                      product: e,
                      category: A,
                      shouldCheckoutWithOrbs: s,
                      analyticsLocations: C,
                      analyticsSource: t,
                      returnRef: E,
                      tab: i,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  });
        },
        [e, i, A, c, t, C, n, l?.cardId, l?.sessionId, l?.tilePosition],
    );
}
function k(e) {
    let { flattenProductVariants: t, productOverride: n } = s.useContext(m);
    return (0, a.bG)([p.A], () =>
        null != n ? n : t ? p.A.getProduct(e) : p.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
    );
}
