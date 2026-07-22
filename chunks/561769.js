n.d(t, { AW: () => _, Hi: () => h, Mk: () => E, UU: () => R, Vm: () => j, gZ: () => v, ql: () => y, v3: () => k });
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
    f = n(940980),
    g = n(572595),
    I = n(722258),
    x = n(57020),
    A = n(758836),
    m = n(652215);
let k = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function v() {
    return s.useContext(k).prioritizedCurrency;
}
var _ =
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
    let n = (0, f.W)(t);
    return e === A.G2.ORBS ? "orbs" : n ? "fiat" : void 0;
}
function R(e, t, n) {
    return (r) => {
        c.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === A.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === A.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === A.G2.CATALOG ? n?.pageSize : void 0,
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
        { analyticsLocations: f } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
        A = (0, a.bG)([p.A], () => p.A.getCategoryForProduct(e.skuId)),
        m = s.useRef(null);
    return s.useCallback(
        (r) => {
            let s = (0, x.A)({ product: e });
            ((m.current = r.currentTarget), n?.(), c)
                ? (0, I.B)({
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
                  (0, g.t)({
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
function j(e) {
    let { flattenProductVariants: t, productOverride: n } = s.useContext(k);
    return (0, a.bG)([p.A], () =>
        null != n ? n : t ? p.A.getProduct(e) : p.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
    );
}
