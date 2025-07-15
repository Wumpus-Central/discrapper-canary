(r.d(t, {
    Kp: () => S,
    u9: () => v,
    xV: () => y
}),
    r(413496),
    r(433524),
    r(35282),
    r(704826),
    r(388685));
var n = r(73800),
    l = r(114858),
    o = r(442837),
    i = r(607070),
    a = r(100527),
    s = r(906732),
    c = r(819640),
    u = r(597688),
    d = r(328347),
    p = r(429368),
    f = r(410127),
    g = r(237031),
    h = r(258939),
    b = r(956472),
    m = r(981631);
let _ = ''.concat('#').concat('itemSkuId', '='),
    O = new RegExp('^'.concat(_, '(\\d+)$')),
    C = [m.Z5c.COLLECTIBLES_SHOP, m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    v = (e) => {
        let t = (0, l.TH)();
        n.useEffect(() => {
            if (null != e && C.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(_) && window.location.replace('#');
                };
        }, [e, t.pathname]);
    },
    E = (e) => {
        let { productSkuId: t, analyticsLocations: r, analyticsSource: n, tab: l } = e,
            o = u.Z.getProduct(t),
            i = u.Z.getCategoryForProduct(t);
        if (null != o && null != i) {
            let e = o,
                s = (0, b.oQ)({ product: o }),
                c = document.getElementById('shop-item-'.concat(e.skuId));
            if ((c !== document.activeElement && (null == c || c.focus()), null != o.variantGroupStoreListingId)) {
                let r = u.Z.getProductByStoreListingId(o.variantGroupStoreListingId);
                if (null != r) {
                    var a;
                    e = r;
                    let n = null == (a = r.variants) ? void 0 : a.findIndex((e) => e.skuId === t);
                    null != n && n > -1 && (0, p.$)(r, n);
                }
            }
            (0, g.T)({
                product: e,
                category: i,
                analyticsSource: n,
                analyticsLocations: r,
                tab: l,
                shouldCheckoutWithOrbs: s
            });
        }
    },
    S = () => {
        let e = (0, o.e7)([c.Z], () => c.Z.getLayers().includes(m.S9g.COLLECTIBLES_SHOP)),
            t = (0, h.R)(),
            r = n.useRef(null),
            i = (0, l.TH)(),
            u = i.pathname === m.Z5c.COLLECTIBLES_SHOP ? a.Z.HOME_PAGE_SHOP_TAB : i.pathname === m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? a.Z.COLLECTIBLES_SHOP_FULLSCREEN : a.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: p } = (0, s.ZP)(u),
            g = (0, f.Z)();
        n.useEffect(() => {
            if (e) return;
            let t = O.exec(i.hash);
            null != t ? (r.current = t[1]) : (r.current = null);
        }, [g, e, i.hash]);
        let b = (0, o.e7)([d.Z], () => d.Z.initialProductSkuId);
        n.useEffect(() => {
            if (t) return;
            let n = null;
            if (null != (n = e ? b : r.current)) {
                let e = setTimeout(() => {
                    E({
                        productSkuId: n,
                        analyticsLocations: p,
                        analyticsSource: u,
                        tab: g
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [e, p, u, t, b, g]);
    },
    y = (e) => {
        let t = n.useRef({}),
            r = (0, o.e7)([i.Z], () => i.Z.useReducedMotion),
            l = (0, o.e7)([u.Z], () => u.Z.isFetchingCategories),
            [a, s] = n.useState(null),
            c = n.useCallback((e, r) => {
                t.current[e] = r;
            }, []),
            d = n.useCallback(
                (n) => {
                    l
                        ? s(n)
                        : setTimeout(() => {
                              let l = t.current[n];
                              null != l &&
                                  (null == e ||
                                      e.scrollIntoViewNode({
                                          node: l,
                                          padding: 48,
                                          animate: !r,
                                          shouldScrollToStart: !0
                                      }));
                          }, 100);
                },
                [e, r, l, s]
            );
        return (
            n.useEffect(() => {
                l || null == a || (d(a), s(null));
            }, [l, d, a, s]),
            {
                setCategoryRef: c,
                handleScrollToCategory: d
            }
        );
    };
