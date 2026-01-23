i.d(t, {
    AW: () => I,
    Hi: () => y,
    UU: () => C,
    Vm: () => v,
    ql: () => j,
    sC: () => O,
    v3: () => b,
});
var n,
    r,
    l = i(64700),
    s = i(575593),
    o = i(417597),
    a = i(793574),
    c = i(688810),
    u = i(954571),
    d = i(590180),
    p = i(161918),
    m = i(572595),
    g = i(57020),
    h = i(940622),
    f = i(758836),
    _ = i(652215);
let b = l.createContext({
    flattenProductVariants: !1,
});

function O() {
    return l.useContext(b).rentalDuration;
}
var I =
        (((n = {}).NONE = "none"),
        (n.NEW = "new"),
        (n.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (n.LIMITED_TIME = "limited_time"),
        (n.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (n.THREE_DAY_RENTAL = "three_day_rental"),
        (n.SEVEN_DAY_RENTAL = "seven_day_rental"),
        (n.RENTAL = "rental"),
        n),
    y = (((r = {}).FIAT = "fiat"), (r.ORBS = "orbs"), r);
let C = (e, t, i) => (n) => {
        u.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == i ? void 0 : i.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == i ? void 0 : i.pageSection,
            page_category: t === f.G2.HOME || null == i ? void 0 : i.pageCategory,
            page_index: t === f.G2.CATALOG ? (null == i ? void 0 : i.pageIndex) : void 0,
            page_size: t === f.G2.CATALOG ? (null == i ? void 0 : i.pageSize) : void 0,
            tile_type: s.R[e.type],
            tile_position: String(null == i ? void 0 : i.tilePosition),
            cta_name: n,
        });
    },
    j = (e, t, i, n) => {
        let r = (0, p.Mk)(),
            s = null == r ? void 0 : r.tab,
            { analyticsLocations: u } = (0, c.Ay)(a.A.COLLECTIBLES_SHOP_CARD),
            h = (0, o.bG)([d.A], () => d.A.getCategoryForProduct(e.skuId)),
            f = l.useRef(null);
        return l.useCallback(
            (t) => (r) => {
                if (null == h) return;
                let l = (0, g.Ak)({
                    product: e,
                });
                (f.current = r.currentTarget),
                    null == i || i(),
                    (0, m.t)({
                        product: e,
                        category: h,
                        shouldCheckoutWithOrbs: l,
                        analyticsLocations: u,
                        analyticsSource: t,
                        returnRef: f,
                        tab: s,
                        rentalDuration: n,
                    });
            },
            [e, s, h, u, i, n],
        )(t);
    },
    v = (e) => {
        let t = l.useContext(b).flattenProductVariants,
            i = (0, o.bG)([d.A], () => {
                var i;
                return t
                    ? d.A.getProduct(e)
                    : null == (i = d.A.getCategoryForProduct(e))
                      ? void 0
                      : i.products.find((t) => t.skuId === e);
            });
        return (0, h.Iv)(i);
    };
