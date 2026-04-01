n.d(t, { AW: () => E, Hi: () => I, UU: () => C, Vm: () => T, gZ: () => x, ql: () => N, v3: () => f });
var i,
    l,
    s = n(64700),
    a = n(575593),
    r = n(417597),
    o = n(793574),
    d = n(688810),
    c = n(954571),
    u = n(440938),
    h = n(590180),
    A = n(161918),
    _ = n(572595),
    m = n(57020),
    g = n(758836),
    p = n(652215);
let f = s.createContext({ flattenProductVariants: void 0, productOverride: void 0, prioritizedCurrency: void 0 });
function x() {
    return s.useContext(f).prioritizedCurrency;
}
var E =
        (((i = {}).NONE = "none"),
        (i.NEW = "new"),
        (i.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (i.LIMITED_TIME = "limited_time"),
        (i.NITRO_EXCLUSIVE = "nitro_exclusive"),
        i),
    I = (((l = {}).FIAT = "fiat"), (l.ORBS = "orbs"), l);
let C = (e, t, n) => (i) => {
        c.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === g.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === g.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === g.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: a.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: i,
        });
    },
    N = (e, t, n) => {
        let i = (0, A.Mk)(),
            l = i?.tab,
            a = (0, u.uM)(),
            { analyticsLocations: c } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            g = (0, r.bG)([h.A], () => h.A.getCategoryForProduct(e.skuId)),
            p = s.useRef(null);
        return s.useCallback(
            (t) => (i) => {
                if (null == g) return;
                let s = (0, m.A)({ product: e });
                (p.current = i.currentTarget),
                    n?.(),
                    (0, _.t)({
                        product: e,
                        category: g,
                        shouldCheckoutWithOrbs: s,
                        analyticsLocations: c,
                        analyticsSource: t,
                        returnRef: p,
                        tab: l,
                        cardId: a?.cardId,
                        sessionId: a?.sessionId,
                        tilePosition: a?.tilePosition,
                    });
            },
            [e, l, g, c, n, a?.cardId, a?.sessionId, a?.tilePosition],
        )(t);
    },
    T = (e) => {
        let { flattenProductVariants: t, productOverride: n } = s.useContext(f);
        return (0, r.bG)([h.A], () =>
            null != n ? n : t ? h.A.getProduct(e) : h.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
        );
    };
