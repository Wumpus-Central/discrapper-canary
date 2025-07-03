(n.d(t, {
    Kp: () => C,
    u9: () => x,
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
    a = n(442837),
    l = n(607070),
    s = n(100527),
    o = n(906732),
    c = n(597688),
    u = n(328347),
    d = n(429368),
    m = n(410127),
    p = n(237031),
    f = n(956472),
    h = n(981631);
let v = ''.concat('#').concat('itemSkuId', '='),
    b = new RegExp('^'.concat(v, '(\\d+)$')),
    P = [h.Z5c.COLLECTIBLES_SHOP, h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    x = (e) => {
        let t = (0, i.TH)();
        r.useEffect(() => {
            if (null != e && P.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(v) && window.location.replace('#');
                };
        }, [e, t.pathname]);
    },
    g = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, initialItemCardRef: i, reducedMotion: a = !1, tab: l } = e,
            s = c.Z.getProduct(t),
            o = c.Z.getCategoryForProduct(t);
        if (null != s && null != o) {
            var u;
            null == (u = i.current) ||
                u.scrollIntoView({
                    behavior: a ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = s,
                m = (0, f.oQ)({ product: s }),
                h = setTimeout(
                    () => {
                        let a = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((a !== document.activeElement && (null == a || a.focus()), null != s.variantGroupStoreListingId)) {
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
                            tab: l,
                            shouldCheckoutWithOrbs: m
                        });
                    },
                    750 * (null != i.current)
                );
            return () => clearTimeout(h);
        }
        return () => {};
    },
    C = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: c } = e,
            d = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
            p = r.useRef(null),
            f = (0, i.TH)(),
            v = f.pathname === h.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : f.pathname === h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN : s.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: P } = (0, o.ZP)(v),
            x = (0, m.Z)();
        r.useEffect(() => {
            if (n) return;
            let e = b.exec(f.hash);
            null != e ? (p.current = e[1]) : (p.current = null);
        }, [x, n, f.hash]);
        let C = (0, a.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let e = null;
            if (null != (e = n ? C : p.current)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = g({
                            productSkuId: e,
                            analyticsLocations: P,
                            analyticsSource: v,
                            initialItemCardRef: c,
                            reducedMotion: d,
                            tab: x
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
        }, [n, P, v, t, C, c, d, x]);
    },
    _ = (e) => {
        let t = r.useRef({}),
            n = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
            i = (0, a.e7)([c.Z], () => c.Z.isFetchingCategories),
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
