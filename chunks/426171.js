(n.d(t, {
    Kp: () => y,
    u9: () => C,
    xV: () => O
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685));
var r = n(73800),
    a = n(114858),
    i = n(442837),
    o = n(607070),
    c = n(100527),
    s = n(906732),
    l = n(819640),
    u = n(597688),
    d = n(328347),
    p = n(429368),
    m = n(410127),
    _ = n(237031),
    f = n(258939),
    g = n(956472),
    b = n(981631);
let h = ''.concat('#').concat('itemSkuId', '='),
    v = new RegExp('^'.concat(h, '(\\d+)$')),
    P = [b.Z5c.COLLECTIBLES_SHOP, b.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, a.TH)();
        r.useEffect(() => {
            if (null != e && P.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(h) && window.location.replace('#');
                };
        }, [e, t.pathname]);
    },
    x = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: a } = e,
            i = u.Z.getProduct(t),
            o = u.Z.getCategoryForProduct(t);
        if (null != i && null != o) {
            let e = i,
                s = (0, g.oQ)({ product: i }),
                l = document.getElementById('shop-item-'.concat(e.skuId));
            if ((l !== document.activeElement && (null == l || l.focus()), null != i.variantGroupStoreListingId)) {
                let n = u.Z.getProductByStoreListingId(i.variantGroupStoreListingId);
                if (null != n) {
                    var c;
                    e = n;
                    let r = null == (c = n.variants) ? void 0 : c.findIndex((e) => e.skuId === t);
                    null != r && r > -1 && (0, p.$)(n, r);
                }
            }
            (0, _.T)({
                product: e,
                category: o,
                analyticsSource: r,
                analyticsLocations: n,
                tab: a,
                shouldCheckoutWithOrbs: s
            });
        }
    },
    y = () => {
        let e = (0, i.e7)([l.Z], () => l.Z.getLayers().includes(b.S9g.COLLECTIBLES_SHOP)),
            t = (0, f.R)(),
            n = r.useRef(null),
            o = (0, a.TH)(),
            u = o.pathname === b.Z5c.COLLECTIBLES_SHOP ? c.Z.HOME_PAGE_SHOP_TAB : o.pathname === b.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? c.Z.COLLECTIBLES_SHOP_FULLSCREEN : c.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: p } = (0, s.ZP)(u),
            _ = (0, m.Z)();
        r.useEffect(() => {
            if (e) return;
            let t = v.exec(o.hash);
            null != t ? (n.current = t[1]) : (n.current = null);
        }, [_, e, o.hash]);
        let g = (0, i.e7)([d.Z], () => d.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != (r = e ? g : n.current)) {
                let e = setTimeout(() => {
                    x({
                        productSkuId: r,
                        analyticsLocations: p,
                        analyticsSource: u,
                        tab: _
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [e, p, u, t, g, _]);
    },
    O = (e) => {
        let t = r.useRef({}),
            n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
            a = (0, i.e7)([u.Z], () => u.Z.isFetchingCategories),
            [c, s] = r.useState(null),
            l = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            d = r.useCallback(
                (r) => {
                    a
                        ? s(r)
                        : setTimeout(() => {
                              let a = t.current[r];
                              null != a &&
                                  (null == e ||
                                      e.scrollIntoViewNode({
                                          node: a,
                                          padding: 48,
                                          animate: !n,
                                          shouldScrollToStart: !0
                                      }));
                          }, 100);
                },
                [e, n, a, s]
            );
        return (
            r.useEffect(() => {
                a || null == c || (d(c), s(null));
            }, [a, d, c, s]),
            {
                setCategoryRef: l,
                handleScrollToCategory: d
            }
        );
    };
