n.d(t, {
    Kp: () => v,
    u9: () => S,
    xV: () => x,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var r = n(647438),
    l = n(843611),
    s = n(442837),
    a = n(607070),
    i = n(100527),
    o = n(906732),
    c = n(819640),
    u = n(597688),
    d = n(328347),
    g = n(429368),
    p = n(410127),
    f = n(237031),
    C = n(258939),
    h = n(956472),
    _ = n(981631);
let m = "".concat("#").concat("itemSkuId", "="),
    b = new RegExp("^".concat(m, "(\\d+)$")),
    E = [_.Z5c.COLLECTIBLES_SHOP, _.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    S = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && E.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(m) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    v = () => {
        let e = (0, s.e7)([c.Z], () => c.Z.getLayers().includes(_.S9g.COLLECTIBLES_SHOP)),
            t = (0, C.R)(),
            n = r.useRef(null),
            a = (0, l.TH)(),
            m =
                a.pathname === _.Z5c.COLLECTIBLES_SHOP
                    ? i.Z.HOME_PAGE_SHOP_TAB
                    : a.pathname === _.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
                      ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN
                      : i.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: E } = (0, o.ZP)(m),
            S = (0, p.Z)();
        r.useEffect(() => {
            if (e) return;
            let t = b.exec(a.hash);
            null != t ? (n.current = t[1]) : (n.current = null);
        }, [S, e, a.hash]);
        let v = (0, s.e7)([d.Z], () => d.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != (r = e ? v : n.current)) {
                let e = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: l } = e,
                            s = u.Z.getProduct(t),
                            a = u.Z.getCategoryForProduct(t);
                        if (null != s && null != a) {
                            let e = s,
                                o = (0, h.oQ)({ product: s }),
                                c = document.getElementById("shop-item-".concat(e.skuId));
                            if (
                                (c !== document.activeElement && (null == c || c.focus()),
                                null != s.variantGroupStoreListingId)
                            ) {
                                let n = u.Z.getProductByStoreListingId(s.variantGroupStoreListingId);
                                if (null != n) {
                                    var i;
                                    e = n;
                                    let r = null == (i = n.variants) ? void 0 : i.findIndex((e) => e.skuId === t);
                                    null != r && r > -1 && (0, g.$)(n, r);
                                }
                            }
                            (0, f.T)({
                                product: e,
                                category: a,
                                analyticsSource: r,
                                analyticsLocations: n,
                                tab: l,
                                shouldCheckoutWithOrbs: o,
                            });
                        }
                    })({
                        productSkuId: r,
                        analyticsLocations: E,
                        analyticsSource: m,
                        tab: S,
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [e, E, m, t, v, S]);
    },
    x = (e) => {
        let t = r.useRef({}),
            n = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
            l = (0, s.e7)([u.Z], () => u.Z.isFetchingCategories),
            [i, o] = r.useState(null),
            c = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            d = r.useCallback(
                (r) => {
                    l
                        ? o(r)
                        : setTimeout(() => {
                              let l = t.current[r];
                              null != l &&
                                  (null == e ||
                                      e.scrollIntoViewNode({
                                          node: l,
                                          padding: 48,
                                          animate: !n,
                                          shouldScrollToStart: !0,
                                      }));
                          }, 100);
                },
                [e, n, l, o],
            );
        return (
            r.useEffect(() => {
                l || null == i || (d(i), o(null));
            }, [l, d, i, o]),
            {
                setCategoryRef: c,
                handleScrollToCategory: d,
            }
        );
    };
