var r = n(582128),
    i = n(575593),
    l = n(164636),
    a = n(688810),
    s = n(821925),
    u = n(129230),
    o = n(857512),
    c = n(590180),
    d = n(161918),
    I = n(295586),
    f = n(298072),
    p = n(986630),
    g = n(623373),
    m = n(572595),
    v = n(722258),
    x = n(758836),
    C = n(652215);
let _ = r.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0,
    standalonePreview: void 0,
});
n.d(
    t,
    {},
    {
        Mk: function (e) {
            return e === x.G2.ORBS ? x.Hi.ORBS : void 0;
        },
        UU: function (e, t, n) {
            return (r) => {
                u.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: n?.sessionId,
                    sku_id: e.skuId,
                    page_type: t,
                    page_section: n?.pageSection,
                    page_category: t === x.G2.HOME ? void 0 : n?.pageCategory,
                    page_index: t === x.G2.CATALOG ? n?.pageIndex : void 0,
                    page_size: t === x.G2.CATALOG ? n?.pageSize : void 0,
                    tile_type: i.R[e.type],
                    tile_position: String(n?.tilePosition),
                    cta_name: r,
                });
            };
        },
        Vm: function (e) {
            let { flattenProductVariants: t, productOverride: n } = r.useContext(_),
                { legacyProduct: i, storefrontProduct: a } = (0, l.cf)(
                    [c.A, s.A],
                    () => {
                        if (null != n) return { legacyProduct: void 0, storefrontProduct: void 0 };
                        let r =
                            !0 === t
                                ? c.A.getProduct(e)
                                : c.A.getCategoryForProduct(e)?.products.find((t) => t.skuId === e);
                        return {
                            legacyProduct: r,
                            storefrontProduct: null == r ? s.A.getProductsForSku(e)?.[0] : void 0,
                        };
                    },
                    [e, t, n],
                ),
                u = null == n && null == i && null == a;
            r.useEffect(() => {
                u && "" !== e && I.p.requestProducts([e]);
            }, [u, e]);
            let o = r.useMemo(
                () =>
                    null != a
                        ? (p.A.fromStorefrontProductRecord(a, { flattenVariantSkuId: !0 === t ? e : void 0 }) ?? void 0)
                        : void 0,
                [a, t, e],
            );
            return n ?? i ?? o;
        },
        gZ: function () {
            return r.useContext(_).prioritizedCurrency;
        },
        ql: function (e, t, n) {
            let i = (0, d.Mk)(),
                s = i?.tab,
                u = (0, o.uM)(),
                { standalonePreview: I, flattenProductVariants: p } = r.useContext(_),
                { analyticsLocations: x } = (0, a.Ay)(t),
                C = (0, l.bG)([c.A], () => c.A.getCategoryForProduct(e.skuId)),
                h = (0, f.Q)(e),
                E = (0, g.rb)(e, h).skuId,
                A = r.useRef(null);
            return r.useCallback(
                (r) => {
                    ((A.current = r.currentTarget), n?.(), I)
                        ? (0, v.B)({
                              skuId: e.skuId,
                              flattenVariants: p,
                              analyticsLocations: x,
                              analyticsSource: t,
                              tab: s,
                              returnRef: A,
                              initialVariantSkuId: E,
                              cardId: u?.cardId,
                              sessionId: u?.sessionId,
                              tilePosition: u?.tilePosition,
                          })
                        : null != C &&
                          (0, m.t)({
                              product: e,
                              category: C,
                              analyticsLocations: x,
                              analyticsSource: t,
                              returnRef: A,
                              tab: s,
                              cardId: u?.cardId,
                              sessionId: u?.sessionId,
                              tilePosition: u?.tilePosition,
                          });
                },
                [e, E, s, C, I, p, t, x, n, u?.cardId, u?.sessionId, u?.tilePosition],
            );
        },
        v3: _,
    },
);
