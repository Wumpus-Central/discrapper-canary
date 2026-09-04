r.d(t, { AW: () => R, Hi: () => k, Mk: () => b, UU: () => y, Vm: () => L, gZ: () => x, ql: () => S, v3: () => h });
var n,
    i,
    s = r(582128),
    l = r(575593),
    a = r(702841),
    o = r(793574),
    u = r(688810),
    c = r(821925),
    d = r(174459),
    p = r(440938),
    g = r(590180),
    f = r(161918),
    I = r(295586),
    _ = r(986630),
    A = r(572595),
    C = r(722258),
    m = r(57020),
    v = r(758836),
    E = r(652215);
let h = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function x() {
    return s.useContext(h).prioritizedCurrency;
}
var R =
        (((n = {}).NONE = "none"),
        (n.NEW = "new"),
        (n.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (n.LIMITED_TIME = "limited_time"),
        (n.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (n.EARLY_ACCESS = "early_access"),
        (n.BADGE_OVERRIDE = "badge_override"),
        (n.DYNAMIC = "dynamic"),
        n),
    k = (((i = {}).FIAT = "fiat"), (i.ORBS = "orbs"), i);
function b(e) {
    return e === v.G2.ORBS ? "orbs" : void 0;
}
function y(e, t, r) {
    return (n) => {
        d.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: r?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: r?.pageSection,
            page_category: t === v.G2.HOME ? void 0 : r?.pageCategory,
            page_index: t === v.G2.CATALOG ? r?.pageIndex : void 0,
            page_size: t === v.G2.CATALOG ? r?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(r?.tilePosition),
            cta_name: n,
        });
    };
}
function S(e, t, r) {
    let n = (0, f.Mk)(),
        i = n?.tab,
        l = (0, p.uM)(),
        { standalonePreview: c, flattenProductVariants: d } = s.useContext(h),
        { analyticsLocations: I } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
        _ = (0, a.bG)([g.A], () => g.A.getCategoryForProduct(e.skuId)),
        v = s.useRef(null);
    return s.useCallback(
        (n) => {
            let s = (0, m.A)({ product: e });
            ((v.current = n.currentTarget), r?.(), c)
                ? (0, C.B)({
                      skuId: e.skuId,
                      flattenVariants: d,
                      analyticsLocations: I,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: s,
                      tab: i,
                      returnRef: v,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  })
                : null != _ &&
                  (0, A.t)({
                      product: e,
                      category: _,
                      shouldCheckoutWithOrbs: s,
                      analyticsLocations: I,
                      analyticsSource: t,
                      returnRef: v,
                      tab: i,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  });
        },
        [e, i, _, c, d, t, I, r, l?.cardId, l?.sessionId, l?.tilePosition],
    );
}
function L(e) {
    let { flattenProductVariants: t, productOverride: r } = s.useContext(h),
        { legacyProduct: n, storefrontProduct: i } = (0, a.cf)([g.A, c.A], () => {
            if (null != r) return { legacyProduct: void 0, storefrontProduct: void 0 };
            let n = !0 === t ? g.A.getProduct(e) : g.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
            return { legacyProduct: n, storefrontProduct: null == n ? c.A.getProductsForSku(e)?.[0] : void 0 };
        }, [e, t, r]),
        l = null == r && null == n && null == i;
    s.useEffect(() => {
        l && "" !== e && I.p.requestProducts([e]);
    }, [l, e]);
    let o = s.useMemo(
        () =>
            null != i
                ? (_.A.fromStorefrontProductRecord(i, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                : void 0,
        [i, t, e],
    );
    return r ?? n ?? o;
}
