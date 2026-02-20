"use strict";
a.d(t, { AW: () => v, Hi: () => y, UU: () => _, Vm: () => k, nY: () => j, ql: () => A, v3: () => f });
var l,
    r,
    n = a(64700),
    s = a(575593),
    i = a(417597),
    o = a(793574),
    d = a(688810),
    c = a(954571),
    u = a(590180),
    x = a(161918),
    h = a(572595),
    m = a(57020),
    b = a(940622),
    p = a(758836),
    g = a(652215);
let f = n.createContext({ flattenProductVariants: !1, productOverride: void 0 });
function j() {
    return n.useContext(f).flattenProductVariants;
}
var v =
        (((l = {}).NONE = "none"),
        (l.NEW = "new"),
        (l.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (l.LIMITED_TIME = "limited_time"),
        (l.NITRO_EXCLUSIVE = "nitro_exclusive"),
        l),
    y = (((r = {}).FIAT = "fiat"), (r.ORBS = "orbs"), r);
let _ = (e, t, a) => (l) => {
        c.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: a?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: a?.pageSection,
            page_category: t === p.G2.HOME ? void 0 : a?.pageCategory,
            page_index: t === p.G2.CATALOG ? a?.pageIndex : void 0,
            page_size: t === p.G2.CATALOG ? a?.pageSize : void 0,
            tile_type: s.R[e.type],
            tile_position: String(a?.tilePosition),
            cta_name: l,
        });
    },
    A = (e, t, a) => {
        let l = (0, x.Mk)(),
            r = l?.tab,
            { analyticsLocations: s } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            c = (0, i.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            b = n.useRef(null);
        return n.useCallback(
            (t) => (l) => {
                if (null == c) return;
                let n = (0, m.A)({ product: e });
                (b.current = l.currentTarget),
                    a?.(),
                    (0, h.t)({
                        product: e,
                        category: c,
                        shouldCheckoutWithOrbs: n,
                        analyticsLocations: s,
                        analyticsSource: t,
                        returnRef: b,
                        tab: r,
                    });
            },
            [e, r, c, s, a],
        )(t);
    },
    k = (e) => {
        let { flattenProductVariants: t, productOverride: a } = n.useContext(f),
            l = (0, i.bG)([u.A], () =>
                null != a
                    ? a
                    : t
                      ? u.A.getProduct(e)
                      : u.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
            );
        return (0, b.Iv)(l);
    };
