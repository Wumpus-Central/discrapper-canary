n.d(t, { AW: () => _, Hi: () => b, Mk: () => R, UU: () => S, Vm: () => k, gZ: () => h, ql: () => y, v3: () => E });
var r,
    i,
    a = n(64700),
    l = n(575593),
    s = n(702841),
    o = n(793574),
    u = n(688810),
    c = n(174459),
    d = n(440938),
    p = n(590180),
    g = n(161918),
    C = n(940980),
    A = n(572595),
    f = n(57020),
    I = n(758836),
    v = n(652215);
let E = a.createContext({ flattenProductVariants: void 0, productOverride: void 0, prioritizedCurrency: void 0 });
function h() {
    return a.useContext(E).prioritizedCurrency;
}
var _ =
        (((r = {}).NONE = "none"),
        (r.NEW = "new"),
        (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (r.LIMITED_TIME = "limited_time"),
        (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (r.EARLY_ACCESS = "early_access"),
        (r.BADGE_OVERRIDE = "badge_override"),
        r),
    b = (((i = {}).FIAT = "fiat"), (i.ORBS = "orbs"), i);
function R(e, t) {
    let n = (0, C.W)(t);
    return e === I.G2.ORBS ? "orbs" : n ? "fiat" : void 0;
}
function S(e, t, n) {
    return (r) => {
        c.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === I.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === I.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === I.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    };
}
function y(e, t, n) {
    let r = (0, g.Mk)(),
        i = r?.tab,
        l = (0, d.uM)(),
        { analyticsLocations: c } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
        C = (0, s.bG)([p.A], () => p.A.getCategoryForProduct(e.skuId)),
        I = a.useRef(null);
    return a.useCallback(
        (t) => (r) => {
            if (null == C) return;
            let a = (0, f.A)({ product: e });
            (I.current = r.currentTarget),
                n?.(),
                (0, A.t)({
                    product: e,
                    category: C,
                    shouldCheckoutWithOrbs: a,
                    analyticsLocations: c,
                    analyticsSource: t,
                    returnRef: I,
                    tab: i,
                    cardId: l?.cardId,
                    sessionId: l?.sessionId,
                    tilePosition: l?.tilePosition,
                });
        },
        [e, i, C, c, n, l?.cardId, l?.sessionId, l?.tilePosition],
    )(t);
}
function k(e) {
    let { flattenProductVariants: t, productOverride: n } = a.useContext(E);
    return (0, s.bG)([p.A], () =>
        null != n ? n : t ? p.A.getProduct(e) : p.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
    );
}
