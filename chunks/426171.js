n.d(t, {
    Kp: () => O,
    u9: () => S,
    xV: () => v,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var r = n(647438),
    l = n(843611),
    a = n(442837),
    s = n(607070),
    i = n(100527),
    o = n(906732),
    c = n(819640),
    u = n(597688),
    d = n(328347),
    g = n(429368),
    p = n(410127),
    f = n(237031),
    m = n(258939),
    _ = n(956472),
    h = n(981631);
let b = "".concat("#").concat("itemSkuId", "="),
    C = new RegExp("^".concat(b, "(\\d+)$")),
    E = [h.Z5c.COLLECTIBLES_SHOP, h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    S = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && E.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(b) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    O = () => {
        let e = (0, a.e7)([c.Z], () => c.Z.getLayers().includes(h.S9g.COLLECTIBLES_SHOP)),
            t = (0, m.R)(),
            n = r.useRef(null),
            s = (0, l.TH)(),
            b =
                s.pathname === h.Z5c.COLLECTIBLES_SHOP
                    ? i.Z.HOME_PAGE_SHOP_TAB
                    : s.pathname === h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
                      ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN
                      : i.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: E } = (0, o.ZP)(b),
            S = (0, p.Z)();
        r.useEffect(() => {
            if (e) return;
            let t = C.exec(s.hash);
            null != t ? (n.current = t[1]) : (n.current = null);
        }, [S, e, s.hash]);
        let O = (0, a.e7)([d.Z], () => d.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != (r = e ? O : n.current)) {
                let e = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: l } = e,
                            a = u.Z.getProduct(t),
                            s = u.Z.getCategoryForProduct(t);
                        if (null != a && null != s) {
                            let e = a,
                                o = (0, _.oQ)({ product: a }),
                                c = document.getElementById("shop-item-".concat(e.skuId));
                            if (
                                (c !== document.activeElement && (null == c || c.focus()),
                                null != a.variantGroupStoreListingId)
                            ) {
                                let n = u.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                                if (null != n) {
                                    var i;
                                    e = n;
                                    let r = null == (i = n.variants) ? void 0 : i.findIndex((e) => e.skuId === t);
                                    null != r && r > -1 && (0, g.$)(n, r);
                                }
                            }
                            (0, f.T)({
                                product: e,
                                category: s,
                                analyticsSource: r,
                                analyticsLocations: n,
                                tab: l,
                                shouldCheckoutWithOrbs: o,
                            });
                        }
                    })({
                        productSkuId: r,
                        analyticsLocations: E,
                        analyticsSource: b,
                        tab: S,
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [e, E, b, t, O, S]);
    },
    v = (e) => {
        let t = r.useRef({}),
            n = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
            l = (0, a.e7)([u.Z], () => u.Z.isFetchingCategories),
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
