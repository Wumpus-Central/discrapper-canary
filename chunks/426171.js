(n.d(t, {
    Kp: () => v,
    u9: () => C,
    xV: () => E
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(539854),
    n(388685));
var r = n(73800),
    l = n(114858),
    o = n(442837),
    a = n(607070),
    i = n(100527),
    s = n(906732),
    c = n(597688),
    u = n(328347),
    d = n(429368),
    p = n(410127),
    g = n(237031),
    f = n(956472),
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
    O = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, initialItemCardRef: l, reducedMotion: o = !1, tab: a } = e,
            i = c.Z.getProduct(t),
            s = c.Z.getCategoryForProduct(t);
        if (null != i && null != s) {
            var u;
            null == (u = l.current) ||
                u.scrollIntoView({
                    behavior: o ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = i,
                p = (0, f.oQ)({ product: i }),
                h = setTimeout(
                    () => {
                        let o = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((o !== document.activeElement && (null == o || o.focus()), null != i.variantGroupStoreListingId)) {
                            let n = c.Z.getProductByStoreListingId(i.variantGroupStoreListingId);
                            if (null != n) {
                                var u;
                                e = n;
                                let r = null == (u = n.variants) ? void 0 : u.findIndex((e) => e.skuId === t);
                                null != r && r > -1 && (0, d.$)(n, r);
                            }
                        }
                        (0, g.T)({
                            product: e,
                            category: s,
                            analyticsSource: r,
                            analyticsLocations: n,
                            returnRef: l,
                            tab: a,
                            shouldCheckoutWithOrbs: p
                        });
                    },
                    750 * (null != l.current)
                );
            return () => clearTimeout(h);
        }
        return () => {};
    },
    v = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: c } = e,
            d = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
            g = r.useRef(null),
            f = (0, l.TH)(),
            b = f.pathname === h.Z5c.COLLECTIBLES_SHOP ? i.Z.HOME_PAGE_SHOP_TAB : f.pathname === h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? i.Z.COLLECTIBLES_SHOP_FULLSCREEN : i.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: _ } = (0, s.ZP)(b),
            C = (0, p.Z)();
        r.useEffect(() => {
            if (n) return;
            let e = m.exec(f.hash);
            null != e ? (g.current = e[1]) : (g.current = null);
        }, [C, n, f.hash]);
        let v = (0, o.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let e = null;
            if (null != (e = n ? v : g.current)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = O({
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
        }, [n, _, b, t, v, c, d, C]);
    },
    E = (e) => {
        let t = r.useRef({}),
            n = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
            l = (0, o.e7)([c.Z], () => c.Z.isFetchingCategories),
            [i, s] = r.useState(null),
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
                setCategoryRef: u,
                handleScrollToCategory: d
            }
        );
    };
