(n.d(t, {
    Kp: () => _,
    u9: () => C,
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
    o = n(100527),
    s = n(906732),
    c = n(819640),
    u = n(597688),
    d = n(328347),
    m = n(429368),
    f = n(410127),
    p = n(237031),
    h = n(258939),
    v = n(956472),
    b = n(981631);
let P = ''.concat('#').concat('itemSkuId', '='),
    x = new RegExp('^'.concat(P, '(\\d+)$')),
    g = [b.Z5c.COLLECTIBLES_SHOP, b.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, i.TH)();
        r.useEffect(() => {
            if (null != e && g.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(P) && window.location.replace('#');
                };
        }, [e, t.pathname]);
    },
    j = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: i } = e,
            a = u.Z.getProduct(t),
            l = u.Z.getCategoryForProduct(t);
        if (null != a && null != l) {
            let e = a,
                s = (0, v.oQ)({ product: a }),
                c = document.getElementById('shop-item-'.concat(e.skuId));
            if ((c !== document.activeElement && (null == c || c.focus()), null != a.variantGroupStoreListingId)) {
                let n = u.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                if (null != n) {
                    var o;
                    e = n;
                    let r = null == (o = n.variants) ? void 0 : o.findIndex((e) => e.skuId === t);
                    null != r && r > -1 && (0, m.$)(n, r);
                }
            }
            (0, p.T)({
                product: e,
                category: l,
                analyticsSource: r,
                analyticsLocations: n,
                tab: i,
                shouldCheckoutWithOrbs: s
            });
        }
    },
    _ = () => {
        let e = (0, a.e7)([c.Z], () => c.Z.getLayers().includes(b.S9g.COLLECTIBLES_SHOP)),
            t = (0, h.R)(),
            n = r.useRef(null),
            l = (0, i.TH)(),
            u = l.pathname === b.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : l.pathname === b.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: m } = (0, s.ZP)(u),
            p = (0, f.Z)();
        r.useEffect(() => {
            if (e) return;
            let t = x.exec(l.hash);
            null != t ? (n.current = t[1]) : (n.current = null);
        }, [p, e, l.hash]);
        let v = (0, a.e7)([d.Z], () => d.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != (r = e ? v : n.current)) {
                let e = setTimeout(() => {
                    j({
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
            [o, s] = r.useState(null),
            c = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            d = r.useCallback(
                (r) => {
                    i
                        ? s(r)
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
                [e, n, i, s]
            );
        return (
            r.useEffect(() => {
                i || null == o || (d(o), s(null));
            }, [i, d, o, s]),
            {
                setCategoryRef: c,
                handleScrollToCategory: d
            }
        );
    };
