"use strict";
n.d(t, { AW: () => g, Hi: () => A, UU: () => I, Vm: () => S, gZ: () => E, nY: () => m, ql: () => T, v3: () => h });
var r = n(64700),
    i = n(575593),
    s = n(417597),
    a = n(793574),
    o = n(688810),
    l = n(954571),
    u = n(590180),
    c = n(161918),
    d = n(572595),
    _ = n(57020),
    f = n(758836),
    p = n(652215);
let h = r.createContext({ flattenProductVariants: void 0, productOverride: void 0, prioritizedCurrency: void 0 });
function m() {
    return r.useContext(h).flattenProductVariants;
}
function E() {
    return r.useContext(h).prioritizedCurrency;
}
var g = (function (e) {
        return (
            (e.NONE = "none"),
            (e.NEW = "new"),
            (e.ORBS_EXCLUSIVE = "orbs_exclusive"),
            (e.LIMITED_TIME = "limited_time"),
            (e.NITRO_EXCLUSIVE = "nitro_exclusive"),
            e
        );
    })({}),
    A = (function (e) {
        return (e.FIAT = "fiat"), (e.ORBS = "orbs"), e;
    })({});
let I = (e, t, n) => (r) => {
        l.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === f.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === f.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === f.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: i.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    },
    T = (e, t, n) => {
        let i = (0, c.Mk)(),
            l = i?.tab,
            { analyticsLocations: f } = (0, o.Ay)(a.A.COLLECTIBLES_SHOP_CARD),
            p = (0, s.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            h = r.useRef(null);
        return r.useCallback(
            (t) => (r) => {
                if (null == p) return;
                let i = (0, _.A)({ product: e });
                (h.current = r.currentTarget),
                    n?.(),
                    (0, d.t)({
                        product: e,
                        category: p,
                        shouldCheckoutWithOrbs: i,
                        analyticsLocations: f,
                        analyticsSource: t,
                        returnRef: h,
                        tab: l,
                    });
            },
            [e, l, p, f, n],
        )(t);
    },
    S = (e) => {
        let { flattenProductVariants: t, productOverride: n } = r.useContext(h);
        return (0, s.bG)([u.A], () =>
            null != n ? n : t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
        );
    };
