(n.d(t, {
    Kp: () => _,
    u9: () => j,
    xV: () => w
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685));
var r = n(73800),
    i = n(114858),
    a = n(442837),
    l = n(607070),
    s = n(100527),
    o = n(906732),
    c = n(819640),
    u = n(597688),
    d = n(328347),
    m = n(429368),
    f = n(410127),
    p = n(237031),
    h = n(258939),
    v = n(956472),
    P = n(981631);
let b = ''.concat('#').concat('itemSkuId', '='),
    g = new RegExp('^'.concat(b, '(\\d+)$')),
    x = [P.Z5c.COLLECTIBLES_SHOP, P.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    j = (e) => {
        let t = (0, i.TH)();
        r.useEffect(() => {
            if (null != e && x.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(b) && window.location.replace('#');
                };
        }, [e, t.pathname]);
    },
    C = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: i } = e,
            a = u.Z.getProduct(t),
            l = u.Z.getCategoryForProduct(t);
        if (null != a && null != l) {
            let e = a,
                o = (0, v.oQ)({ product: a }),
                c = document.getElementById('shop-item-'.concat(e.skuId));
            if ((c !== document.activeElement && (null == c || c.focus()), null != a.variantGroupStoreListingId)) {
                let n = u.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                if (null != n) {
                    var s;
                    e = n;
                    let r = null == (s = n.variants) ? void 0 : s.findIndex((e) => e.skuId === t);
                    null != r && r > -1 && (0, m.$)(n, r);
                }
            }
            (0, p.T)({
                product: e,
                category: l,
                analyticsSource: r,
                analyticsLocations: n,
                tab: i,
                shouldCheckoutWithOrbs: o
            });
        }
    },
    _ = () => {
        let e = (0, a.e7)([c.Z], () => c.Z.getLayers().includes(P.S9g.COLLECTIBLES_SHOP)),
            t = (0, h.R)(),
            n = r.useRef(null),
            l = (0, i.TH)(),
            u = l.pathname === P.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : l.pathname === P.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN : s.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: m } = (0, o.ZP)(u),
            p = (0, f.Z)();
        r.useEffect(() => {
            if (e) return;
            let t = g.exec(l.hash);
            null != t ? (n.current = t[1]) : (n.current = null);
        }, [p, e, l.hash]);
        let v = (0, a.e7)([d.Z], () => d.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != (r = e ? v : n.current)) {
                let e = setTimeout(() => {
                    C({
                        productSkuId: r,
                        analyticsLocations: m,
                        analyticsSource: u,
                        tab: p
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [e, m, u, t, v, p]);
    },
    w = (e) => {
        let t = r.useRef({}),
            n = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
            i = (0, a.e7)([u.Z], () => u.Z.isFetchingCategories),
            [s, o] = r.useState(null),
            c = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            d = r.useCallback(
                (r) => {
                    i
                        ? o(r)
                        : setTimeout(() => {
                              let i = t.current[r];
                              null != i &&
                                  (null == e ||
                                      e.scrollIntoViewNode({
                                          node: i,
                                          padding: 48,
                                          animate: !n,
                                          shouldScrollToStart: !0
                                      }));
                          }, 100);
                },
                [e, n, i, o]
            );
        return (
            r.useEffect(() => {
                i || null == s || (d(s), o(null));
            }, [i, d, s, o]),
            {
                setCategoryRef: c,
                handleScrollToCategory: d
            }
        );
    };
