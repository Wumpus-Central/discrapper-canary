r.d(t, { AW: () => b, Hi: () => f, Mk: () => R, UU: () => S, Vm: () => m, gZ: () => _, ql: () => k, v3: () => E });
var n,
    i,
    a = r(64700),
    l = r(575593),
    s = r(702841),
    o = r(793574),
    u = r(688810),
    d = r(174459),
    c = r(440938),
    p = r(590180),
    g = r(161918),
    C = r(940980),
    A = r(572595),
    I = r(57020),
    h = r(758836),
    v = r(652215);
let E = a.createContext({ flattenProductVariants: void 0, productOverride: void 0, prioritizedCurrency: void 0 });
function _() {
    return a.useContext(E).prioritizedCurrency;
}
var b =
        (((n = {}).NONE = "none"),
        (n.NEW = "new"),
        (n.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (n.LIMITED_TIME = "limited_time"),
        (n.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (n.EARLY_ACCESS = "early_access"),
        (n.BADGE_OVERRIDE = "badge_override"),
        n),
    f = (((i = {}).FIAT = "fiat"), (i.ORBS = "orbs"), i);
let R = (e, t) => {
        let r = (0, C.W)(t);
        return e === h.G2.ORBS ? "orbs" : r ? "fiat" : void 0;
    },
    S = (e, t, r) => (n) => {
        d.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: r?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: r?.pageSection,
            page_category: t === h.G2.HOME ? void 0 : r?.pageCategory,
            page_index: t === h.G2.CATALOG ? r?.pageIndex : void 0,
            page_size: t === h.G2.CATALOG ? r?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(r?.tilePosition),
            cta_name: n,
        });
    },
    k = (e, t, r) => {
        let n = (0, g.Mk)(),
            i = n?.tab,
            l = (0, c.uM)(),
            { analyticsLocations: d } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            C = (0, s.bG)([p.A], () => p.A.getCategoryForProduct(e.skuId)),
            h = a.useRef(null);
        return a.useCallback(
            (t) => (n) => {
                if (null == C) return;
                let a = (0, I.A)({ product: e });
                (h.current = n.currentTarget),
                    r?.(),
                    (0, A.t)({
                        product: e,
                        category: C,
                        shouldCheckoutWithOrbs: a,
                        analyticsLocations: d,
                        analyticsSource: t,
                        returnRef: h,
                        tab: i,
                        cardId: l?.cardId,
                        sessionId: l?.sessionId,
                        tilePosition: l?.tilePosition,
                    });
            },
            [e, i, C, d, r, l?.cardId, l?.sessionId, l?.tilePosition],
        )(t);
    },
    m = (e) => {
        let { flattenProductVariants: t, productOverride: r } = a.useContext(E);
        return (0, s.bG)([p.A], () =>
            null != r ? r : t ? p.A.getProduct(e) : p.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
        );
    };
