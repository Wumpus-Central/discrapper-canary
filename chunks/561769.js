o.d(t, { AW: () => O, Hi: () => S, UU: () => f, Vm: () => k, gZ: () => L, ql: () => T, v3: () => g });
var i,
    n,
    r = o(64700),
    s = o(575593),
    a = o(702841),
    l = o(793574),
    d = o(688810),
    c = o(954571),
    u = o(440938),
    C = o(590180),
    p = o(161918),
    _ = o(572595),
    E = o(57020),
    I = o(758836),
    A = o(652215);
let g = r.createContext({ flattenProductVariants: void 0, productOverride: void 0, prioritizedCurrency: void 0 });
function L() {
    return r.useContext(g).prioritizedCurrency;
}
var O =
        (((i = {}).NONE = "none"),
        (i.NEW = "new"),
        (i.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (i.LIMITED_TIME = "limited_time"),
        (i.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (i.EARLY_ACCESS = "early_access"),
        i),
    S = (((n = {}).FIAT = "fiat"), (n.ORBS = "orbs"), n);
let f = (e, t, o) => (i) => {
        c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: o?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: o?.pageSection,
            page_category: t === I.G2.HOME ? void 0 : o?.pageCategory,
            page_index: t === I.G2.CATALOG ? o?.pageIndex : void 0,
            page_size: t === I.G2.CATALOG ? o?.pageSize : void 0,
            tile_type: s.R[e.type],
            tile_position: String(o?.tilePosition),
            cta_name: i,
        });
    },
    T = (e, t, o) => {
        let i = (0, p.Mk)(),
            n = i?.tab,
            s = (0, u.uM)(),
            { analyticsLocations: c } = (0, d.Ay)(l.A.COLLECTIBLES_SHOP_CARD),
            I = (0, a.bG)([C.A], () => C.A.getCategoryForProduct(e.skuId)),
            A = r.useRef(null);
        return r.useCallback(
            (t) => (i) => {
                if (null == I) return;
                let r = (0, E.A)({ product: e });
                (A.current = i.currentTarget),
                    o?.(),
                    (0, _.t)({
                        product: e,
                        category: I,
                        shouldCheckoutWithOrbs: r,
                        analyticsLocations: c,
                        analyticsSource: t,
                        returnRef: A,
                        tab: n,
                        cardId: s?.cardId,
                        sessionId: s?.sessionId,
                        tilePosition: s?.tilePosition,
                    });
            },
            [e, n, I, c, o, s?.cardId, s?.sessionId, s?.tilePosition],
        )(t);
    },
    k = (e) => {
        let { flattenProductVariants: t, productOverride: o } = r.useContext(g);
        return (0, a.bG)([C.A], () =>
            null != o ? o : t ? C.A.getProduct(e) : C.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
        );
    };
