n.d(t, {
    Kp: () => E,
    u9: () => v,
    xV: () => x,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var r = n(647438),
    l = n(843611),
    i = n(442837),
    s = n(607070),
    a = n(100527),
    o = n(906732),
    c = n(597688),
    u = n(328347),
    d = n(429368),
    p = n(410127),
    g = n(237031),
    f = n(258939),
    h = n(956472),
    C = n(981631);
let m = "".concat("#").concat("itemSkuId", "="),
    _ = new RegExp("^".concat(m, "(\\d+)$")),
    b = [C.Z5c.COLLECTIBLES_SHOP],
    v = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && b.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(m) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    E = () => {
        let e = (0, f.R)(),
            t = r.useRef(null),
            n = (0, l.TH)(),
            s = n.pathname === C.Z5c.COLLECTIBLES_SHOP ? a.Z.HOME_PAGE_SHOP_TAB : a.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: m } = (0, o.ZP)(s),
            b = (0, p.Z)();
        r.useEffect(() => {
            let e = _.exec(n.hash);
            null != e ? (t.current = e[1]) : (t.current = null);
        }, [b, n.hash]);
        let v = (0, i.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (e) return;
            let n = null;
            if ((null != v ? (n = v) : null != t.current && (n = t.current), null != n)) {
                let e = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: l } = e,
                            i = c.Z.getProduct(t),
                            s = c.Z.getCategoryForProduct(t);
                        if (null != i && null != s) {
                            let e = i,
                                o = (0, h.oQ)({ product: i }),
                                u = document.getElementById("shop-item-".concat(e.skuId));
                            if (
                                (u !== document.activeElement && (null == u || u.focus()),
                                null != i.variantGroupStoreListingId)
                            ) {
                                let n = c.Z.getProductByStoreListingId(i.variantGroupStoreListingId);
                                if (null != n) {
                                    var a;
                                    e = n;
                                    let r = null == (a = n.variants) ? void 0 : a.findIndex((e) => e.skuId === t);
                                    null != r && r > -1 && (0, d.$)(n, r);
                                }
                            }
                            (0, g.T)({
                                product: e,
                                category: s,
                                analyticsSource: r,
                                analyticsLocations: n,
                                tab: l,
                                shouldCheckoutWithOrbs: o,
                            });
                        }
                    })({
                        productSkuId: n,
                        analyticsLocations: m,
                        analyticsSource: s,
                        tab: b,
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [m, s, e, v, b]);
    },
    x = (e) => {
        let t = r.useRef({}),
            n = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            l = (0, i.e7)([c.Z], () => c.Z.isFetchingCategories),
            [a, o] = r.useState(null),
            u = r.useCallback((e, n) => {
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
                l || null == a || (d(a), o(null));
            }, [l, d, a, o]),
            {
                setCategoryRef: u,
                handleScrollToCategory: d,
            }
        );
    };
