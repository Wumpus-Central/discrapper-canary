n.d(t, {
    Kp: () => S,
    u9: () => v,
    xV: () => _,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var r = n(473749),
    l = n(828700),
    a = n(442837),
    s = n(607070),
    o = n(100527),
    i = n(906732),
    c = n(597688),
    u = n(328347),
    d = n(429368),
    f = n(410127),
    g = n(237031),
    b = n(258939),
    p = n(956472),
    m = n(981631);
let h = "".concat("#").concat("itemSkuId", "="),
    C = new RegExp("^".concat(h, "(\\d+)$")),
    E = [m.Z5c.COLLECTIBLES_SHOP],
    v = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && E.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(h) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    S = () => {
        let e = (0, b.R)(),
            t = r.useRef(null),
            n = (0, l.TH)(),
            s = n.pathname === m.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: h } = (0, i.ZP)(s),
            E = (0, f.Z)();
        r.useEffect(() => {
            let e = C.exec(n.hash);
            null != e ? (t.current = e[1]) : (t.current = null);
        }, [E, n.hash]);
        let v = (0, a.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (e) return;
            let n = null;
            if ((null != v ? (n = v) : null != t.current && (n = t.current), null != n)) {
                let e = setTimeout(() => {
                    ((e) => {
                        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: l } = e,
                            a = c.Z.getProduct(t),
                            s = c.Z.getCategoryForProduct(t);
                        if (null != a && null != s) {
                            let e = a,
                                i = (0, p.oQ)({ product: a }),
                                u = document.getElementById("shop-item-".concat(e.skuId));
                            if (
                                (u !== document.activeElement && (null == u || u.focus()),
                                null != a.variantGroupStoreListingId)
                            ) {
                                let n = c.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                                if (null != n) {
                                    var o;
                                    e = n;
                                    let r = null == (o = n.variants) ? void 0 : o.findIndex((e) => e.skuId === t);
                                    null != r && r > -1 && (0, d.$)(n, r);
                                }
                            }
                            (0, g.T)({
                                product: e,
                                category: s,
                                analyticsSource: r,
                                analyticsLocations: n,
                                tab: l,
                                shouldCheckoutWithOrbs: i,
                            });
                        }
                    })({
                        productSkuId: n,
                        analyticsLocations: h,
                        analyticsSource: s,
                        tab: E,
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [h, s, e, v, E]);
    },
    _ = (e) => {
        let t = r.useRef({}),
            n = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
            l = (0, a.e7)([c.Z], () => c.Z.isFetchingCategories),
            [o, i] = r.useState(null),
            u = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            d = r.useCallback(
                (r) => {
                    l
                        ? i(r)
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
                [e, n, l, i],
            );
        return (
            r.useEffect(() => {
                l || null == o || (d(o), i(null));
            }, [l, d, o, i]),
            {
                setCategoryRef: u,
                handleScrollToCategory: d,
            }
        );
    };
