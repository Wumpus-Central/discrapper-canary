n.d(t, { AW: () => E, Mk: () => b, UU: () => R, Vm: () => y, gZ: () => h, ql: () => k, v3: () => _ });
var r,
    i = n(582128),
    s = n(575593),
    l = n(702841),
    a = n(793574),
    o = n(688810),
    u = n(821925),
    d = n(174459),
    c = n(440938),
    I = n(590180),
    f = n(161918),
    p = n(295586),
    g = n(986630),
    A = n(572595),
    v = n(722258),
    x = n(57020),
    C = n(758836),
    m = n(652215);
let _ = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
function h() {
    return i.useContext(_).prioritizedCurrency;
}
var E =
    (((r = {}).NONE = "none"),
    (r.NEW = "new"),
    (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
    (r.LIMITED_TIME = "limited_time"),
    (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
    (r.BADGE_OVERRIDE = "badge_override"),
    (r.DYNAMIC = "dynamic"),
    r);
function b(e) {
    return e === C.G2.ORBS ? C.Hi.ORBS : void 0;
}
function R(e, t, n) {
    return (r) => {
        d.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === C.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === C.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === C.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: s.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: r,
        });
    };
}
function k(e, t, n) {
    let r = (0, f.Mk)(),
        s = r?.tab,
        u = (0, c.uM)(),
        { standalonePreview: d, flattenProductVariants: p } = i.useContext(_),
        { analyticsLocations: g } = (0, o.Ay)(a.A.COLLECTIBLES_SHOP_CARD),
        C = (0, l.bG)([I.A], () => I.A.getCategoryForProduct(e.skuId)),
        m = i.useRef(null);
    return i.useCallback(
        (r) => {
            let i = (0, x.A)({ product: e });
            ((m.current = r.currentTarget), n?.(), d)
                ? (0, v.B)({
                      skuId: e.skuId,
                      flattenVariants: p,
                      analyticsLocations: g,
                      analyticsSource: t,
                      shouldCheckoutWithOrbs: i,
                      tab: s,
                      returnRef: m,
                      cardId: u?.cardId,
                      sessionId: u?.sessionId,
                      tilePosition: u?.tilePosition,
                  })
                : null != C &&
                  (0, A.t)({
                      product: e,
                      category: C,
                      shouldCheckoutWithOrbs: i,
                      analyticsLocations: g,
                      analyticsSource: t,
                      returnRef: m,
                      tab: s,
                      cardId: u?.cardId,
                      sessionId: u?.sessionId,
                      tilePosition: u?.tilePosition,
                  });
        },
        [e, s, C, d, p, t, g, n, u?.cardId, u?.sessionId, u?.tilePosition],
    );
}
function y(e) {
    let { flattenProductVariants: t, productOverride: n } = i.useContext(_),
        { legacyProduct: r, storefrontProduct: s } = (0, l.cf)(
            [I.A, u.A],
            () => {
                if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                let r =
                    !0 === t ? I.A.getProduct(e) : I.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                return { legacyProduct: r, storefrontProduct: null == r ? u.A.getProductsForSku(e)?.[0] : void 0 };
            },
            [e, t, n],
        ),
        a = null == n && null == r && null == s;
    i.useEffect(() => {
        a && "" !== e && p.p.requestProducts([e]);
    }, [a, e]);
    let o = i.useMemo(
        () =>
            null != s
                ? (g.A.fromStorefrontProductRecord(s, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                : void 0,
        [s, t, e],
    );
    return n ?? r ?? o;
}
