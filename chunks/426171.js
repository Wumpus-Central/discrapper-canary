n.d(t, {
    Kp: () => x,
    u9: () => v,
    xV: () => E,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var r = n(473749),
    l = n(828700),
    i = n(442837),
    a = n(607070),
    s = n(100527),
    o = n(906732),
    c = n(597688),
    u = n(328347),
    d = n(429368),
    f = n(410127),
    g = n(237031),
    p = n(258939),
    m = n(956472),
    h = n(981631);
let C = "".concat("#").concat("itemSkuId", "="),
    _ = new RegExp("^".concat(C, "(\\d+)$")),
    b = [h.Z5c.COLLECTIBLES_SHOP],
    v = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && b.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(C) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    x = () => {
        let e = (0, p.R)(),
            t = r.useRef(null),
            n = (0, l.TH)(),
            a = n.pathname === h.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : s.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: C } = (0, o.ZP)(a),
            b = (0, f.Z)();
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
                            a = c.Z.getCategoryForProduct(t);
                        if (null != i && null != a) {
                            let e = i,
                                o = (0, m.oQ)({ product: i }),
                                u = document.getElementById("shop-item-".concat(e.skuId));
                            if (
                                (u !== document.activeElement && (null == u || u.focus()),
                                null != i.variantGroupStoreListingId)
                            ) {
                                let n = c.Z.getProductByStoreListingId(i.variantGroupStoreListingId);
                                if (null != n) {
                                    var s;
                                    e = n;
                                    let r = null == (s = n.variants) ? void 0 : s.findIndex((e) => e.skuId === t);
                                    null != r && r > -1 && (0, d.$)(n, r);
                                }
                            }
                            (0, g.T)({
                                product: e,
                                category: a,
                                analyticsSource: r,
                                analyticsLocations: n,
                                tab: l,
                                shouldCheckoutWithOrbs: o,
                            });
                        }
                    })({
                        productSkuId: n,
                        analyticsLocations: C,
                        analyticsSource: a,
                        tab: b,
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [C, a, e, v, b]);
    },
    E = (e) => {
        let t = r.useRef({}),
            n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
            l = (0, i.e7)([c.Z], () => c.Z.isFetchingCategories),
            [s, o] = r.useState(null),
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
                l || null == s || (d(s), o(null));
            }, [l, d, s, o]),
            {
                setCategoryRef: u,
                handleScrollToCategory: d,
            }
        );
    };
