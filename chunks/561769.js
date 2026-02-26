n.d(t, { AW: () => O, Hi: () => E, UU: () => P, Vm: () => y, nY: () => _, ql: () => m, v3: () => A });
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
    f = n(758836),
    h = n(652215);
let A = a.createContext({ flattenProductVariants: !1, productOverride: void 0 });
function _() {
    return a.useContext(A).flattenProductVariants;
}
var O =
        (((r = {}).NONE = "none"),
        (r.NEW = "new"),
        (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (r.LIMITED_TIME = "limited_time"),
        (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
        r),
    E = (((l = {}).FIAT = "fiat"), (l.ORBS = "orbs"), l);
let P = (e, t, n) => (r) => {
        c.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    m = (e, t, n) => {
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
    y = (e) => {
        let { flattenProductVariants: t, productOverride: n } = a.useContext(A);
        return (0, u.bG)([d.A], () =>
            null != n ? n : t ? d.A.getProduct(e) : d.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
        );
    };
