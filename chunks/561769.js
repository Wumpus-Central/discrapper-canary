n.d(t, { AW: () => b, Hi: () => R, Mk: () => k, UU: () => y, Vm: () => S, gZ: () => E, ql: () => T, v3: () => h });
var r,
    i,
    s = n(582128),
    l = n(575593),
    a = n(702841),
    o = n(793574),
    u = n(688810),
    d = n(821925),
    c = n(174459),
    I = n(440938),
    f = n(590180),
    p = n(161918),
    g = n(295586),
    A = n(986630),
    v = n(572595),
    x = n(722258),
    C = n(57020),
    m = n(758836),
    _ = n(652215);
let h = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function E() {
    return s.useContext(h).prioritizedCurrency;
}
var b =
        (((r = {}).NONE = "none"),
        (r.NEW = "new"),
        (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
        (r.LIMITED_TIME = "limited_time"),
        (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
        (r.BADGE_OVERRIDE = "badge_override"),
        (r.DYNAMIC = "dynamic"),
        r),
    R = (((i = {}).FIAT = "fiat"), (i.ORBS = "orbs"), i);
function k(e) {
    return e === m.G2.ORBS ? "orbs" : void 0;
}
function y(e, t, n) {
    return (r) => {
        c.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === m.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === m.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === m.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    };
}
function T(e, t, n) {
    let r = (0, p.Mk)(),
        i = r?.tab,
        l = (0, I.uM)(),
        { standalonePreview: d, flattenProductVariants: c } = s.useContext(h),
        { analyticsLocations: g } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
        A = (0, a.bG)([f.A], () => f.A.getCategoryForProduct(e.skuId)),
        m = s.useRef(null);
    return s.useCallback(
        (r) => {
            let s = (0, C.A)({ product: e });
            ((m.current = r.currentTarget), n?.(), d)
                ? (0, x.B)({
                      skuId: e.skuId,
                      flattenVariants: c,
                      analyticsLocations: g,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: s,
                      tab: i,
                      returnRef: m,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  })
                : null != A &&
                  (0, v.t)({
                      product: e,
                      category: A,
                      shouldCheckoutWithOrbs: s,
                      analyticsLocations: g,
                      analyticsSource: t,
                      returnRef: m,
                      tab: i,
                      cardId: l?.cardId,
                      sessionId: l?.sessionId,
                      tilePosition: l?.tilePosition,
                  });
        },
        [e, i, A, d, c, t, g, n, l?.cardId, l?.sessionId, l?.tilePosition],
    );
}
function S(e) {
    let { flattenProductVariants: t, productOverride: n } = s.useContext(h),
        { legacyProduct: r, storefrontProduct: i } = (0, a.cf)(
            [f.A, d.A],
            () => {
                if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                let r =
                    !0 === t ? f.A.getProduct(e) : f.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                return { legacyProduct: r, storefrontProduct: null == r ? d.A.getProductsForSku(e)?.[0] : void 0 };
            },
            [e, t, n],
        ),
        l = null == n && null == r && null == i;
    s.useEffect(() => {
        l && "" !== e && g.p.requestProducts([e]);
    }, [l, e]);
    let o = s.useMemo(
        () =>
            null != i
                ? (A.A.fromStorefrontProductRecord(i, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                : void 0,
        [i, t, e],
    );
    return n ?? r ?? o;
}
