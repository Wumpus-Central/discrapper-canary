r.d(t, { AW: () => T, Hi: () => R, Mk: () => k, UU: () => m, Vm: () => v, gZ: () => A, ql: () => O, v3: () => S });
var n,
    l,
    i = r(64700),
    s = r(575593),
    o = r(702841),
    a = r(793574),
    u = r(688810),
    c = r(174459),
    d = r(440938),
    f = r(590180),
    C = r(161918),
    _ = r(940980),
    p = r(572595),
    h = r(722258),
    E = r(57020),
    I = r(758836),
    g = r(652215);
let S = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function A() {
    return i.useContext(S).prioritizedCurrency;
}
var T =
        (((n = {}).NONE = "none"),
        (n.NEW = "new"),
        (n.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (n.LIMITED_TIME = "limited_time"),
        (n.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (n.EARLY_ACCESS = "early_access"),
        (n.BADGE_OVERRIDE = "badge_override"),
        n),
    R = (((l = {}).FIAT = "fiat"), (l.ORBS = "orbs"), l);
function k(e, t) {
    let r = (0, _.W)(t);
    return e === I.G2.ORBS ? "orbs" : r ? "fiat" : void 0;
}
function m(e, t, r) {
    return (n) => {
        c.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: r?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: r?.pageSection,
            page_category: t === I.G2.HOME ? void 0 : r?.pageCategory,
            page_index: t === I.G2.CATALOG ? r?.pageIndex : void 0,
            page_size: t === I.G2.CATALOG ? r?.pageSize : void 0,
            tile_type: s.R[e.type],
            tile_position: String(r?.tilePosition),
            cta_name: n,
        });
    };
}
function O(e, t, r) {
    let n = (0, C.Mk)(),
        l = n?.tab,
        s = (0, d.uM)(),
        { standalonePreview: c } = i.useContext(S),
        { analyticsLocations: _ } = (0, u.Ay)(a.A.COLLECTIBLES_SHOP_CARD),
        I = (0, o.bG)([f.A], () => f.A.getCategoryForProduct(e.skuId)),
        g = i.useRef(null);
    return i.useCallback(
        (n) => {
            let i = (0, E.A)({ product: e });
            ((g.current = n.currentTarget), r?.(), c)
                ? (0, h.B)({
                      skuId: e.skuId,
                      analyticsLocations: _,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: i,
                      tab: l,
                      returnRef: g,
                      cardId: s?.cardId,
                      sessionId: s?.sessionId,
                      tilePosition: s?.tilePosition,
                  })
                : null != I &&
                  (0, p.t)({
                      product: e,
                      category: I,
                      shouldCheckoutWithOrbs: i,
                      analyticsLocations: _,
                      analyticsSource: t,
                      returnRef: g,
                      tab: l,
                      cardId: s?.cardId,
                      sessionId: s?.sessionId,
                      tilePosition: s?.tilePosition,
                  });
        },
        [e, l, I, c, t, _, r, s?.cardId, s?.sessionId, s?.tilePosition],
    );
}
function v(e) {
    let { flattenProductVariants: t, productOverride: r } = i.useContext(S);
    return (0, o.bG)([f.A], () =>
        null != r ? r : t ? f.A.getProduct(e) : f.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
    );
}
