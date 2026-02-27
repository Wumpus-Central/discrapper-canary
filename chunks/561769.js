n.d(t, { AW: () => f, Hi: () => C, UU: () => T, Vm: () => S, gZ: () => I, nY: () => E, ql: () => N, v3: () => g });
var i,
    r,
    l = n(64700),
    a = n(575593),
    s = n(417597),
    o = n(793574),
    d = n(688810),
    c = n(954571),
    u = n(590180),
    A = n(161918),
    h = n(572595),
    _ = n(57020),
    m = n(758836),
    p = n(652215);
let g = l.createContext({ flattenProductVariants: void 0, productOverride: void 0, prioritizedCurrency: void 0 });
function E() {
    return l.useContext(g).flattenProductVariants;
}
function I() {
    return l.useContext(g).prioritizedCurrency;
}
var f =
        (((i = {}).NONE = "none"),
        (i.NEW = "new"),
        (i.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (i.LIMITED_TIME = "limited_time"),
        (i.NITRO_EXCLUSIVE = "nitro_exclusive"),
        i),
    C = (((r = {}).FIAT = "fiat"), (r.ORBS = "orbs"), r);
let T = (e, t, n) => (i) => {
        c.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === m.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === m.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === m.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: a.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: i,
        });
    },
    N = (e, t, n) => {
        let i = (0, A.Mk)(),
            r = i?.tab,
            { analyticsLocations: a } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            c = (0, s.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            m = l.useRef(null);
        return l.useCallback(
            (t) => (i) => {
                if (null == c) return;
                let l = (0, _.A)({ product: e });
                (m.current = i.currentTarget),
                    n?.(),
                    (0, h.t)({
                        product: e,
                        category: c,
                        shouldCheckoutWithOrbs: l,
                        analyticsLocations: a,
                        analyticsSource: t,
                        returnRef: m,
                        tab: r,
                    });
            },
            [e, r, c, a, n],
        )(t);
    },
    S = (e) => {
        let { flattenProductVariants: t, productOverride: n } = l.useContext(g);
        return (0, s.bG)([u.A], () =>
            null != n ? n : t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
        );
    };
