n.d(t, { AW: () => E, Hi: () => P, UU: () => m, Vm: () => I, nY: () => O, ql: () => y, v3: () => _ });
var r,
    l,
    a = n(64700),
    i = n(575593),
    u = n(417597),
    o = n(793574),
    s = n(688810),
    c = n(954571),
    d = n(590180),
    p = n(161918),
    C = n(572595),
    g = n(57020),
    f = n(940622),
    h = n(758836),
    A = n(652215);
let _ = a.createContext({ flattenProductVariants: !1, productOverride: void 0 });
function O() {
    return a.useContext(_).flattenProductVariants;
}
var E =
        (((r = {}).NONE = "none"),
        (r.NEW = "new"),
        (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (r.LIMITED_TIME = "limited_time"),
        (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
        r),
    P = (((l = {}).FIAT = "fiat"), (l.ORBS = "orbs"), l);
let m = (e, t, n) => (r) => {
        c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        let r = (0, p.Mk)(),
            l = r?.tab,
            { analyticsLocations: i } = (0, s.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            c = (0, u.bG)([d.A], () => d.A.getCategoryForProduct(e.skuId)),
            f = a.useRef(null);
        return a.useCallback(
            (t) => (r) => {
                if (null == c) return;
                let a = (0, g.A)({ product: e });
                (f.current = r.currentTarget),
                    n?.(),
                    (0, C.t)({
                        product: e,
                        category: c,
                        shouldCheckoutWithOrbs: a,
                        analyticsLocations: i,
                        analyticsSource: t,
                        returnRef: f,
                        tab: l,
                    });
            },
            [e, l, c, i, n],
        )(t);
    },
    I = (e) => {
        let { flattenProductVariants: t, productOverride: n } = a.useContext(_),
            r = (0, u.bG)([d.A], () =>
                null != n
                    ? n
                    : t
                      ? d.A.getProduct(e)
                      : d.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
            );
        return (0, f.Iv)(r);
    };
