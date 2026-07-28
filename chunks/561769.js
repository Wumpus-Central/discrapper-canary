n.d(t, { AW: () => v, Hi: () => _, Mk: () => h, UU: () => E, Vm: () => y, gZ: () => m, ql: () => R, v3: () => k });
var r,
    i,
    s = n(582128),
    l = n(575593),
    a = n(702841),
    o = n(793574),
    u = n(688810),
    c = n(174459),
    d = n(440938),
    C = n(590180),
    p = n(161918),
    I = n(572595),
    x = n(722258),
    g = n(57020),
    f = n(758836),
    A = n(652215);
let k = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function m() {
    return s.useContext(k).prioritizedCurrency;
}
var v =
        (((r = {}).NONE = "none"),
        (r.NEW = "new"),
        (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (r.LIMITED_TIME = "limited_time"),
        (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (r.EARLY_ACCESS = "early_access"),
        (r.BADGE_OVERRIDE = "badge_override"),
        (r.DYNAMIC = "dynamic"),
        r),
    _ = (((i = {}).FIAT = "fiat"), (i.ORBS = "orbs"), i);
function h(e) {
    return e === f.G2.ORBS ? "orbs" : void 0;
}
function E(e, t, n) {
    return (r) => {
        c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === f.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === f.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === f.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    };
}
function R(e, t, n) {
    let r = (0, p.Mk)(),
        i = r?.tab,
        l = (0, d.uM)(),
        { standalonePreview: c } = s.useContext(k),
        { analyticsLocations: f } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
        A = (0, a.bG)([C.A], () => C.A.getCategoryForProduct(e.skuId)),
        m = s.useRef(null);
    return s.useCallback(
        (r) => {
            let s = (0, g.A)({ product: e });
            ((m.current = r.currentTarget), n?.(), c)
                ? (0, x.B)({
                      skuId: e.skuId,
                      analyticsLocations: f,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: s,
                      tab: i,
                      returnRef: m,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  })
                : null != A &&
                  (0, I.t)({
                      product: e,
                      category: A,
                      shouldCheckoutWithOrbs: s,
                      analyticsLocations: f,
                      analyticsSource: t,
                      returnRef: m,
                      tab: i,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  });
        },
        [e, i, A, c, t, f, n, l?.cardId, l?.sessionId, l?.tilePosition],
    );
}
function y(e) {
    let { flattenProductVariants: t, productOverride: n } = s.useContext(k);
    return (0, a.bG)([C.A], () =>
        null != n ? n : t ? C.A.getProduct(e) : C.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
    );
}
