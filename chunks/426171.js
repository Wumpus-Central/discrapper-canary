n.d(t, {
    Kp: () => O,
    u9: () => C,
    xV: () => x
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(539854),
    n(388685);
var r = n(192379),
    l = n(512969),
    a = n(442837),
    i = n(607070),
    o = n(100527),
    s = n(906732),
    c = n(597688),
    u = n(328347),
    d = n(429368),
    b = n(410127),
    p = n(237031),
    f = n(956472),
    g = n(981631);
let h = ''.concat('#').concat('itemSkuId', '='),
    m = new RegExp('^'.concat(h, '(\\d+)$')),
    _ = [g.Z5c.COLLECTIBLES_SHOP, g.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    C = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && _.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(h) && window.location.replace('#');
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
                b = (0, f.oQ)({
                    product: o,
                    tab: i
                }),
                g = setTimeout(
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
                        (0, p.T)({
                            product: e,
                            category: s,
                            analyticsSource: r,
                            analyticsLocations: n,
                            returnRef: l,
                            tab: i,
                            shouldCheckoutWithOrbs: b
                        });
                    },
                    750 * (null != l.current)
                );
            return () => clearTimeout(g);
        }
        return () => {};
    },
    O = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: c } = e,
            d = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            p = r.useRef(null),
            f = (0, l.TH)(),
            h = f.pathname === g.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : f.pathname === g.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: _ } = (0, s.ZP)(h),
            C = (0, b.Z)();
        r.useEffect(() => {
            if (n) return;
            let e = m.exec(f.hash);
            null != e ? (p.current = e[1]) : (p.current = null);
        }, [C, n, f.hash]);
        let O = (0, a.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let e = null;
            if (null != (e = n ? O : p.current)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = v({
                            productSkuId: e,
                            analyticsLocations: _,
                            analyticsSource: h,
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
        }, [n, _, h, t, O, c, d, C]);
    },
    x = (e) => {
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
