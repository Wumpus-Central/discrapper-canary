n.d(t, { AW: () => v, Hi: () => h, Mk: () => E, UU: () => R, Vm: () => j, gZ: () => _, ql: () => y, v3: () => k });
var r,
    i,
    s = n(64700),
    l = n(575593),
    a = n(702841),
    o = n(793574),
    u = n(688810),
    c = n(174459),
    d = n(440938),
    p = n(590180),
    C = n(161918),
    I = n(940980),
    f = n(572595),
    g = n(722258),
    x = n(57020),
    m = n(758836),
    A = n(652215);
let k = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function _() {
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
    h = (((i = {}).FIAT = "fiat"), (i.ORBS = "orbs"), i);
function E(e, t) {
    let n = (0, I.W)(t);
    return e === m.G2.ORBS ? "orbs" : n ? "fiat" : void 0;
}
function R(e, t, n) {
    return (r) => {
        c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === m.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === m.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === m.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    };
}
function y(e, t, n) {
    let r = (0, C.Mk)(),
        i = r?.tab,
        l = (0, d.uM)(),
        { standalonePreview: c } = s.useContext(k),
        { analyticsLocations: I } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
        m = (0, a.bG)([p.A], () => p.A.getCategoryForProduct(e.skuId)),
        A = s.useRef(null);
    return s.useCallback(
        (r) => {
            let s = (0, x.A)({ product: e });
            ((A.current = r.currentTarget), n?.(), c)
                ? (0, g.B)({
                      skuId: e.skuId,
                      analyticsLocations: I,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: s,
                      tab: i,
                      returnRef: A,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  })
                : null != m &&
                  (0, f.t)({
                      product: e,
                      category: m,
                      shouldCheckoutWithOrbs: s,
                      analyticsLocations: I,
                      analyticsSource: t,
                      returnRef: A,
                      tab: i,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  });
        },
        [e, i, m, c, t, I, n, l?.cardId, l?.sessionId, l?.tilePosition],
    );
}
function j(e) {
    let { flattenProductVariants: t, productOverride: n } = s.useContext(k);
    return (0, a.bG)([p.A], () =>
        null != n ? n : t ? p.A.getProduct(e) : p.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
    );
}
