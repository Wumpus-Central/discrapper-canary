"use strict";
n.d(t, { AW: () => E, Hi: () => I, UU: () => N, Vm: () => S, gZ: () => C, nY: () => x, ql: () => b, v3: () => f });
var i,
    s,
    l = n(64700),
    r = n(575593),
    a = n(417597),
    o = n(793574),
    c = n(688810),
    d = n(954571),
    u = n(440938),
    h = n(590180),
    A = n(161918),
    m = n(572595),
    p = n(57020),
    _ = n(758836),
    g = n(652215);
let f = l.createContext({ flattenProductVariants: void 0, productOverride: void 0, prioritizedCurrency: void 0 });
function x() {
    return l.useContext(f).flattenProductVariants;
}
function C() {
    return l.useContext(f).prioritizedCurrency;
}
var E =
        (((i = {}).NONE = "none"),
        (i.NEW = "new"),
        (i.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (i.LIMITED_TIME = "limited_time"),
        (i.NITRO_EXCLUSIVE = "nitro_exclusive"),
        i),
    I = (((s = {}).FIAT = "fiat"), (s.ORBS = "orbs"), s);
let N = (e, t, n) => (i) => {
        d.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === _.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === _.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === _.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: r.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: i,
        });
    },
    b = (e, t, n) => {
        let i = (0, A.Mk)(),
            s = i?.tab,
            r = (0, u.uM)(),
            { analyticsLocations: d } = (0, c.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            _ = (0, a.bG)([h.A], () => h.A.getCategoryForProduct(e.skuId)),
            g = l.useRef(null);
        return l.useCallback(
            (t) => (i) => {
                if (null == _) return;
                let l = (0, p.A)({ product: e });
                (g.current = i.currentTarget),
                    n?.(),
                    (0, m.t)({
                        product: e,
                        category: _,
                        shouldCheckoutWithOrbs: l,
                        analyticsLocations: d,
                        analyticsSource: t,
                        returnRef: g,
                        tab: s,
                        cardId: r?.cardId,
                        sessionId: r?.sessionId,
                        tilePosition: r?.tilePosition,
                    });
            },
            [e, s, _, d, n, r?.cardId, r?.sessionId, r?.tilePosition],
        )(t);
    },
    S = (e) => {
        let { flattenProductVariants: t, productOverride: n } = l.useContext(f);
        return (0, a.bG)([h.A], () =>
            null != n ? n : t ? h.A.getProduct(e) : h.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
        );
    };
