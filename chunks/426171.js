(n.d(t, {
    Kp: () => O,
    u9: () => C,
    xV: () => S
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(539854),
    n(388685));
var r = n(73800),
    l = n(114858),
    a = n(442837),
    i = n(607070),
    o = n(100527),
    s = n(906732),
    c = n(597688),
    u = n(328347),
    d = n(429368),
    p = n(410127),
    f = n(237031),
    g = n(956472),
    h = n(981631);
let b = ''.concat('#').concat('itemSkuId', '='),
    m = new RegExp('^'.concat(b, '(\\d+)$')),
    _ = [h.Z5c.COLLECTIBLES_SHOP, h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && _.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(b) && window.location.replace('#');
                };
        }, [e, t.pathname]);
    },
    v = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, initialItemCardRef: l, reducedMotion: a = !1, tab: i } = e,
            o = c.Z.getProduct(t),
            s = c.Z.getCategoryForProduct(t);
        if (null != o && null != s) {
            var u;
            null == (u = l.current) ||
                u.scrollIntoView({
                    behavior: a ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = o,
                p = (0, g.oQ)({ product: o }),
                h = setTimeout(
                    () => {
                        let a = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((a !== document.activeElement && (null == a || a.focus()), null != o.variantGroupStoreListingId)) {
                            let n = c.Z.getProductByStoreListingId(o.variantGroupStoreListingId);
                            if (null != n) {
                                var u;
                                e = n;
                                let r = null == (u = n.variants) ? void 0 : u.findIndex((e) => e.skuId === t);
                                null != r && r > -1 && (0, d.$)(n, r);
                            }
                        }
                        (0, f.T)({
                            product: e,
                            category: s,
                            analyticsSource: r,
                            analyticsLocations: n,
                            returnRef: l,
                            tab: i,
                            shouldCheckoutWithOrbs: p
                        });
                    },
                    750 * (null != l.current)
                );
            return () => clearTimeout(h);
        }
        return () => {};
    },
    O = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: c } = e,
            d = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            f = r.useRef(null),
            g = (0, l.TH)(),
            b = g.pathname === h.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : g.pathname === h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: _ } = (0, s.ZP)(b),
            C = (0, p.Z)();
        r.useEffect(() => {
            if (n) return;
            let e = m.exec(g.hash);
            null != e ? (f.current = e[1]) : (f.current = null);
        }, [C, n, g.hash]);
        let O = (0, a.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let e = null;
            if (null != (e = n ? O : f.current)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = v({
                            productSkuId: e,
                            analyticsLocations: _,
                            analyticsSource: b,
                            initialItemCardRef: c,
                            reducedMotion: d,
                            tab: C
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
        }, [n, _, b, t, O, c, d, C]);
    },
    S = (e) => {
        let t = r.useRef({}),
            n = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            l = (0, a.e7)([c.Z], () => c.Z.isFetchingCategories),
            [o, s] = r.useState(null),
            u = r.useCallback((e, n) => {
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
                                          padding: 12,
                                          animate: !n,
                                          shouldScrollToStart: !0
                                      }));
                          }, 100);
                },
                [e, n, l, s]
            );
        return (
            r.useEffect(() => {
                l || null == o || (d(o), s(null));
            }, [l, d, o, s]),
            {
                setCategoryRef: u,
                handleScrollToCategory: d
            }
        );
    };
