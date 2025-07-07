(n.d(t, {
    Kp: () => C,
    u9: () => b,
    xV: () => _
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(539854),
    n(388685));
var r = n(73800),
    i = n(114858),
    l = n(442837),
    a = n(607070),
    s = n(100527),
    o = n(906732),
    c = n(597688),
    u = n(328347),
    d = n(429368),
    m = n(410127),
    p = n(237031),
    h = n(956472),
    f = n(981631);
let v = ''.concat('#').concat('itemSkuId', '='),
    P = new RegExp('^'.concat(v, '(\\d+)$')),
    x = [f.Z5c.COLLECTIBLES_SHOP, f.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    b = (e) => {
        let t = (0, i.TH)();
        r.useEffect(() => {
            if (null != e && x.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(v) && window.location.replace('#');
                };
        }, [e, t.pathname]);
    },
    g = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, initialItemCardRef: i, reducedMotion: l = !1, tab: a } = e,
            s = c.Z.getProduct(t),
            o = c.Z.getCategoryForProduct(t);
        if (null != s && null != o) {
            var u;
            null == (u = i.current) ||
                u.scrollIntoView({
                    behavior: l ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = s,
                m = (0, h.oQ)({ product: s }),
                f = setTimeout(
                    () => {
                        let l = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((l !== document.activeElement && (null == l || l.focus()), null != s.variantGroupStoreListingId)) {
                            let n = c.Z.getProductByStoreListingId(s.variantGroupStoreListingId);
                            if (null != n) {
                                var u;
                                e = n;
                                let r = null == (u = n.variants) ? void 0 : u.findIndex((e) => e.skuId === t);
                                null != r && r > -1 && (0, d.$)(n, r);
                            }
                        }
                        (0, p.T)({
                            product: e,
                            category: o,
                            analyticsSource: r,
                            analyticsLocations: n,
                            returnRef: i,
                            tab: a,
                            shouldCheckoutWithOrbs: m
                        });
                    },
                    750 * (null != i.current)
                );
            return () => clearTimeout(f);
        }
        return () => {};
    },
    C = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: c } = e,
            d = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
            p = r.useRef(null),
            h = (0, i.TH)(),
            v = h.pathname === f.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : h.pathname === f.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN : s.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: x } = (0, o.ZP)(v),
            b = (0, m.Z)();
        r.useEffect(() => {
            if (n) return;
            let e = P.exec(h.hash);
            null != e ? (p.current = e[1]) : (p.current = null);
        }, [b, n, h.hash]);
        let C = (0, l.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let e = null;
            if (null != (e = n ? C : p.current)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = g({
                            productSkuId: e,
                            analyticsLocations: x,
                            analyticsSource: v,
                            initialItemCardRef: c,
                            reducedMotion: d,
                            tab: b
                        });
                        t.push(n);
                    }, 250);
                return (
                    t.push(() => clearTimeout(n)),
                    () => {
                        t.forEach((e) => e());
                    }
                );
            }
        }, [n, x, v, t, C, c, d, b]);
    },
    _ = (e) => {
        let t = r.useRef({}),
            n = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
            i = (0, l.e7)([c.Z], () => c.Z.isFetchingCategories),
            [s, o] = r.useState(null),
            u = r.useCallback((e, n) => {
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
                setCategoryRef: u,
                handleScrollToCategory: d
            }
        );
    };
