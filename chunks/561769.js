r.d(t, { AW: () => E, Hi: () => f, UU: () => y, Vm: () => S, gZ: () => h, ql: () => O, v3: () => I });
var i,
    n,
    o = r(64700),
    l = r(575593),
    u = r(702841),
    s = r(793574),
    a = r(688810),
    d = r(174459),
    c = r(440938),
    p = r(590180),
    C = r(161918),
    _ = r(572595),
    g = r(57020),
    v = r(758836),
    A = r(652215);
let I = o.createContext({ flattenProductVariants: void 0, productOverride: void 0, prioritizedCurrency: void 0 });
function h() {
    return o.useContext(I).prioritizedCurrency;
}
var E =
        (((i = {}).NONE = "none"),
        (i.NEW = "new"),
        (i.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (i.LIMITED_TIME = "limited_time"),
        (i.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (i.EARLY_ACCESS = "early_access"),
        (i.BADGE_OVERRIDE = "badge_override"),
        i),
    f = (((n = {}).FIAT = "fiat"), (n.ORBS = "orbs"), n);
let y = (e, t, r) => (i) => {
        d.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: r?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: r?.pageSection,
            page_category: t === v.G2.HOME ? void 0 : r?.pageCategory,
            page_index: t === v.G2.CATALOG ? r?.pageIndex : void 0,
            page_size: t === v.G2.CATALOG ? r?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(r?.tilePosition),
            cta_name: i,
        });
    },
    O = (e, t, r) => {
        let i = (0, C.Mk)(),
            n = i?.tab,
            l = (0, c.uM)(),
            { analyticsLocations: d } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            v = (0, u.bG)([p.A], () => p.A.getCategoryForProduct(e.skuId)),
            A = o.useRef(null);
        return o.useCallback(
            (t) => (i) => {
                if (null == v) return;
                let o = (0, g.A)({ product: e });
                (A.current = i.currentTarget),
                    r?.(),
                    (0, _.t)({
                        product: e,
                        category: v,
                        shouldCheckoutWithOrbs: o,
                        analyticsLocations: d,
                        analyticsSource: t,
                        returnRef: A,
                        tab: n,
                        cardId: l?.cardId,
                        sessionId: l?.sessionId,
                        tilePosition: l?.tilePosition,
                    });
            },
            [e, n, v, d, r, l?.cardId, l?.sessionId, l?.tilePosition],
        )(t);
    },
    S = (e) => {
        let { flattenProductVariants: t, productOverride: r } = o.useContext(I);
        return (0, u.bG)([p.A], () =>
            null != r ? r : t ? p.A.getProduct(e) : p.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e),
        );
    };
