var r,
    i = n(582128),
    l = n(575593),
    s = n(164636),
    a = n(688810),
    u = n(821925),
    o = n(129230),
    d = n(857512),
    c = n(590180),
    f = n(161918),
    I = n(295586),
    v = n(298072),
    m = n(986630),
    p = n(623373),
    g = n(572595),
    A = n(722258),
    E = n(57020),
    x = n(758836),
    h = n(652215);
let _ = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
var C =
    (((r = {}).NONE = "none"),
    (r.NEW = "new"),
    (r.ORBS_EXCLUSIVE = "orbs_exclusive"),
    (r.LIMITED_TIME = "limited_time"),
    (r.NITRO_EXCLUSIVE = "nitro_exclusive"),
    (r.BADGE_OVERRIDE = "badge_override"),
    (r.DYNAMIC = "dynamic"),
    r);
n.d(
    t,
    {},
    {
        AW: C,
        Mk: function (e) {
            return e === x.G2.ORBS ? x.Hi.ORBS : void 0;
        },
        UU: function (e, t, n) {
            return (r) => {
                o.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    sku_id: e.skuId,
                    page_type: t,
                    page_section: n?.pageSection,
                    page_category: t === x.G2.HOME ? void 0 : n?.pageCategory,
                    page_index: t === x.G2.CATALOG ? n?.pageIndex : void 0,
                    page_size: t === x.G2.CATALOG ? n?.pageSize : void 0,
                    tile_type: l.R[e.type],
                    tile_position: String(n?.tilePosition),
                    cta_name: r,
                });
            };
        },
        Vm: function (e) {
            let { flattenProductVariants: t, productOverride: n } = i.useContext(_),
                { legacyProduct: r, storefrontProduct: l } = (0, s.cf)(
                    [c.A, u.A],
                    () => {
                        if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                        let r =
                            !0 === t
                                ? c.A.getProduct(e)
                                : c.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                        return {
                            legacyProduct: r,
                            storefrontProduct: null == r ? u.A.getProductsForSku(e)?.[0] : void 0,
                        };
                    },
                    [e, t, n],
                ),
                a = null == n && null == r && null == l;
            i.useEffect(() => {
                a && "" !== e && I.p.requestProducts([e]);
            }, [a, e]);
            let o = i.useMemo(
                () =>
                    null != l
                        ? (m.A.fromStorefrontProductRecord(l, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                        : void 0,
                [l, t, e],
            );
            return n ?? r ?? o;
        },
        gZ: function () {
            return i.useContext(_).prioritizedCurrency;
        },
        ql: function (e, t, n) {
            let r = (0, f.Mk)(),
                l = r?.tab,
                u = (0, d.uM)(),
                { standalonePreview: o, flattenProductVariants: I } = i.useContext(_),
                { analyticsLocations: m } = (0, a.Ay)(t),
                x = (0, s.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
                h = (0, v.Q)(e),
                C = (0, p.rb)(e, h).skuId,
                b = i.useRef(null);
            return i.useCallback(
                (r) => {
                    let i = (0, E.A)({ product: e });
                    ((b.current = r.currentTarget), n?.(), o)
                        ? (0, A.B)({
                              skuId: e.skuId,
                              flattenVariants: I,
                              analyticsLocations: m,
                              analyticsSource: t,
                              shouldCheckoutWithOrbs: i,
                              tab: l,
                              returnRef: b,
                              initialVariantSkuId: C,
                              cardId: u?.cardId,
                              sessionId: u?.sessionId,
                              tilePosition: u?.tilePosition,
                          })
                        : null != x &&
                          (0, g.t)({
                              product: e,
                              category: x,
                              shouldCheckoutWithOrbs: i,
                              analyticsLocations: m,
                              analyticsSource: t,
                              returnRef: b,
                              tab: l,
                              cardId: u?.cardId,
                              sessionId: u?.sessionId,
                              tilePosition: u?.tilePosition,
                          });
                },
                [e, C, l, x, o, I, t, m, n, u?.cardId, u?.sessionId, u?.tilePosition],
            );
        },
        v3: _,
    },
);
