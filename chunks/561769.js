"use strict";
n.d(t, { AW: () => A, Hi: () => I, UU: () => T, Vm: () => S, ql: () => y, sC: () => E, v3: () => m });
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
    p = n(758836),
    h = n(652215);
let m = r.createContext({ flattenProductVariants: !1 });
function g() {
    return r.useContext(m).flattenProductVariants;
}
function E() {
    return r.useContext(m).rentalDuration;
}
var A = (function (e) {
        return (
            (e.NONE = "none"),
            (e.NEW = "new"),
            (e.ORBS_EXCLUSIVE = "orbs_exclusive"),
            (e.LIMITED_TIME = "limited_time"),
            (e.NITRO_EXCLUSIVE = "nitro_exclusive"),
            (e.THREE_DAY_RENTAL = "three_day_rental"),
            (e.SEVEN_DAY_RENTAL = "seven_day_rental"),
            (e.RENTAL = "rental"),
            e
        );
    })({}),
    I = (function (e) {
        return (e.FIAT = "fiat"), (e.ORBS = "orbs"), e;
    })({});
let T = (e, t, n) => (r) => {
        l.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === p.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === p.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === p.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: i.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    },
    y = (e, t, n, i) => {
        let l = (0, c.Mk)(),
            f = l?.tab,
            { analyticsLocations: p } = (0, o.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            h = (0, a.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            m = r.useRef(null);
        return r.useCallback(
            (t) => (r) => {
                if (null == h) return;
                let a = (0, _.Ak)({ product: e });
                (m.current = r.currentTarget),
                    n?.(),
                    (0, d.t)({
                        product: e,
                        category: h,
                        shouldCheckoutWithOrbs: a,
                        analyticsLocations: p,
                        analyticsSource: t,
                        returnRef: m,
                        tab: f,
                        rentalDuration: i,
                    });
            },
            [e, f, h, p, n, i],
        )(t);
    },
    S = (e) => {
        let t = g(),
            n = (0, a.bG)([u.A], () =>
                t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
            );
        return (0, f.Iv)(n);
    };
