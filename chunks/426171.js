(n.d(t, {
    Kp: () => S,
    u9: () => v,
    xV: () => x
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685));
var r = n(73800),
    l = n(114858),
    o = n(442837),
    a = n(607070),
    i = n(100527),
    s = n(906732),
    c = n(819640),
    u = n(597688),
    d = n(328347),
    p = n(429368),
    g = n(410127),
    f = n(237031),
    h = n(258939),
    b = n(956472),
    m = n(981631);
let _ = ''.concat('#').concat('itemSkuId', '='),
    C = new RegExp('^'.concat(_, '(\\d+)$')),
    O = [m.Z5c.COLLECTIBLES_SHOP, m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    v = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && O.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(_) && window.location.replace('#');
                };
        }, [e, t.pathname]);
    },
    E = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: l } = e,
            o = u.Z.getProduct(t),
            a = u.Z.getCategoryForProduct(t);
        if (null != o && null != a) {
            let e = o,
                s = (0, b.oQ)({ product: o }),
                c = document.getElementById('shop-item-'.concat(e.skuId));
            if ((c !== document.activeElement && (null == c || c.focus()), null != o.variantGroupStoreListingId)) {
                let n = u.Z.getProductByStoreListingId(o.variantGroupStoreListingId);
                if (null != n) {
                    var i;
                    e = n;
                    let r = null == (i = n.variants) ? void 0 : i.findIndex((e) => e.skuId === t);
                    null != r && r > -1 && (0, p.$)(n, r);
                }
            }
            (0, f.T)({
                product: e,
                category: a,
                analyticsSource: r,
                analyticsLocations: n,
                tab: l,
                shouldCheckoutWithOrbs: s
            });
        }
    },
    S = () => {
        let e = (0, o.e7)([c.Z], () => c.Z.getLayers().includes(m.S9g.COLLECTIBLES_SHOP)),
            t = (0, h.R)(),
            n = r.useRef(null),
            a = (0, l.TH)(),
            u = a.pathname === m.Z5c.COLLECTIBLES_SHOP ? i.Z.HOME_PAGE_SHOP_TAB : a.pathname === m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN : i.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: p } = (0, s.ZP)(u),
            f = (0, g.Z)();
        r.useEffect(() => {
            if (e) return;
            let t = C.exec(a.hash);
            null != t ? (n.current = t[1]) : (n.current = null);
        }, [f, e, a.hash]);
        let b = (0, o.e7)([d.Z], () => d.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != (r = e ? b : n.current)) {
                let e = setTimeout(() => {
                    E({
                        productSkuId: r,
                        analyticsLocations: p,
                        analyticsSource: u,
                        tab: f
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [e, p, u, t, b, f]);
    },
    x = (e) => {
        let t = r.useRef({}),
            n = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
            l = (0, o.e7)([u.Z], () => u.Z.isFetchingCategories),
            [i, s] = r.useState(null),
            c = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            d = r.useCallback(
                (r) => {
                    l
                        ? s(r)
                        : setTimeout(() => {
                              let l = t.current[r];
                              null != l &&
                                  (null == e ||
                                      e.scrollIntoViewNode({
                                          node: l,
                                          padding: 48,
                                          animate: !n,
                                          shouldScrollToStart: !0
                                      }));
                          }, 100);
                },
                [e, n, l, s]
            );
        return (
            r.useEffect(() => {
                l || null == i || (d(i), s(null));
            }, [l, d, i, s]),
            {
                setCategoryRef: c,
                handleScrollToCategory: d
            }
        );
    };
