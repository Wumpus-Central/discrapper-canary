n.d(t, { AW: () => v, Hi: () => _, Mk: () => h, UU: () => E, Vm: () => y, gZ: () => k, ql: () => R, v3: () => m });
var r,
    i,
    s = n(64700),
    l = n(575593),
    a = n(702841),
    o = n(793574),
    u = n(688810),
    c = n(174459),
    d = n(440938),
    C = n(590180),
    p = n(161918),
    f = n(572595),
    I = n(722258),
    g = n(57020),
    x = n(758836),
    A = n(652215);
let m = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function k() {
    return s.useContext(m).prioritizedCurrency;
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
    return e === x.G2.ORBS ? "orbs" : void 0;
}
function E(e, t, n) {
    return (r) => {
        c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === x.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === x.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === x.G2.CATALOG ? n?.pageSize : void 0,
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
        { standalonePreview: c } = s.useContext(m),
        { analyticsLocations: x } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
        A = (0, a.bG)([C.A], () => C.A.getCategoryForProduct(e.skuId)),
        k = s.useRef(null);
    return s.useCallback(
        (r) => {
            let s = (0, g.A)({ product: e });
            ((k.current = r.currentTarget), n?.(), c)
                ? (0, I.B)({
                      skuId: e.skuId,
                      analyticsLocations: x,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: s,
                      tab: i,
                      returnRef: k,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  })
                : null != A &&
                  (0, f.t)({
                      product: e,
                      category: A,
                      shouldCheckoutWithOrbs: s,
                      analyticsLocations: x,
                      analyticsSource: t,
                      returnRef: k,
                      tab: i,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  });
        },
        [e, i, A, c, t, x, n, l?.cardId, l?.sessionId, l?.tilePosition],
    );
}
function y(e) {
    let { flattenProductVariants: t, productOverride: n } = s.useContext(m);
    return (0, a.bG)([C.A], () =>
        null != n ? n : t ? C.A.getProduct(e) : C.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
    );
}
