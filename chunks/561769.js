n.d(t, {
    AW: () => b,
    Hi: () => y,
    UU: () => O,
    Vm: () => S,
    YW: () => v,
    ql: () => A,
    sC: () => E,
    v3: () => m,
}),
    n(896048);
var r = n(64700),
    i = n(575593),
    a = n(417597),
    s = n(793574),
    o = n(688810),
    l = n(954571),
    c = n(590180),
    u = n(161918),
    d = n(572595),
    f = n(57020),
    p = n(940622),
    _ = n(758836),
    h = n(652215);
let m = r.createContext({
    flattenProductVariants: !1,
});

function g() {
    return r.useContext(m).flattenProductVariants;
}

function E() {
    return r.useContext(m).rentalDuration;
}
var b = (function (e) {
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
    y = (function (e) {
        return (e.FIAT = "fiat"), (e.ORBS = "orbs"), e;
    })({});
let O = (e, t, n) => (r) => {
        l.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == n ? void 0 : n.pageSection,
            page_category: t === _.G2.HOME || null == n ? void 0 : n.pageCategory,
            page_index: t === _.G2.CATALOG ? (null == n ? void 0 : n.pageIndex) : void 0,
            page_size: t === _.G2.CATALOG ? (null == n ? void 0 : n.pageSize) : void 0,
            tile_type: i.R[e.type],
            tile_position: String(null == n ? void 0 : n.tilePosition),
            cta_name: r,
        });
    },
    A = (e, t, n, i) => {
        let l = (0, u.Mk)(),
            p = null == l ? void 0 : l.tab,
            { analyticsLocations: _ } = (0, o.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            h = (0, a.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
            m = r.useRef(null);
        return r.useCallback(
            (t) => (r) => {
                if (null == h) return;
                let a = (0, f.Ak)({
                    product: e,
                });
                (m.current = r.currentTarget),
                    null == n || n(),
                    (0, d.t)({
                        product: e,
                        category: h,
                        shouldCheckoutWithOrbs: a,
                        analyticsLocations: _,
                        analyticsSource: t,
                        returnRef: m,
                        tab: p,
                        rentalDuration: i,
                    });
            },
            [e, p, h, _, n, i],
        )(t);
    },
    v = (e) => {
        if (null == e) return null;
        if (e.type === i.R.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type;
        }
        return e.type;
    },
    S = (e) => {
        let t = g(),
            n = (0, a.bG)([c.A], () => {
                var n;
                return t
                    ? c.A.getProduct(e)
                    : null == (n = c.A.getCategoryForProduct(e))
                      ? void 0
                      : n.products.find((t) => t.skuId === e);
            });
        return (0, p.Iv)(n);
    };
