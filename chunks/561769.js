"use strict";
n.d(t, { AW: () => A, Hi: () => I, UU: () => T, Vm: () => S, nY: () => E, ql: () => y, v3: () => g });
var r = n(64700),
    i = n(575593),
    a = n(417597),
    s = n(793574),
    o = n(688810),
    l = n(954571),
    u = n(590180),
    c = n(161918),
    d = n(572595),
    _ = n(57020),
    f = n(940622),
    h = n(758836),
    p = n(652215);
let g = r.createContext({ flattenProductVariants: !1 });
function E() {
    return r.useContext(g).flattenProductVariants;
}
var A = (function (e) {
        return (
            (e.NONE = "none"),
            (e.NEW = "new"),
            (e.ORBS_EXCLUSIVE = "orbs_exclusive"),
            (e.LIMITED_TIME = "limited_time"),
            (e.NITRO_EXCLUSIVE = "nitro_exclusive"),
            e
        );
    })({}),
    I = (function (e) {
        return (e.FIAT = "fiat"), (e.ORBS = "orbs"), e;
    })({});
let T = (e, t, n) => (r) => {
        l.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === h.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === h.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === h.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: i.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    },
    y = (e, t, n) => {
        let i = (0, c.Mk)(),
            l = i?.tab,
            { analyticsLocations: f } = (0, o.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            h = (0, a.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            p = r.useRef(null);
        return r.useCallback(
            (t) => (r) => {
                if (null == h) return;
                let i = (0, _.A)({ product: e });
                (p.current = r.currentTarget),
                    n?.(),
                    (0, d.t)({
                        product: e,
                        category: h,
                        shouldCheckoutWithOrbs: i,
                        analyticsLocations: f,
                        analyticsSource: t,
                        returnRef: p,
                        tab: l,
                    });
            },
            [e, l, h, f, n],
        )(t);
    },
    S = (e) => {
        let t = E(),
            n = (0, a.bG)([u.A], () =>
                t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
            );
        return (0, f.Iv)(n);
    };
