n.d(t, {
    Kp: () => _,
    u9: () => x,
    xV: () => v
}),
    n(757143),
    n(653041),
    n(47120);
var r = n(192379),
    l = n(512969),
    a = n(442837),
    i = n(493773),
    s = n(607070),
    o = n(100527),
    d = n(906732),
    c = n(597688),
    u = n(328347),
    C = n(429368),
    h = n(237031),
    p = n(981631);
let m = ''.concat('#').concat('itemSkuId', '='),
    g = new RegExp('^'.concat(m, '(\\d+)$')),
    f = [p.Z5c.COLLECTIBLES_SHOP, p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    x = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && f.includes(t.pathname))
                return (
                    window.location.replace(''.concat(m).concat(e)),
                    () => {
                        window.location.hash.startsWith(m) && window.location.replace('#');
                    }
                );
        }, [e, t.pathname]);
    },
    b = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, initialItemCardRef: l, reducedMotion: a = !1 } = e,
            i = c.Z.getProduct(t),
            s = c.Z.getCategoryForProduct(t);
        if (null != i && null != s) {
            var o;
            null === (o = l.current) ||
                void 0 === o ||
                o.scrollIntoView({
                    behavior: a ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = i,
                d = setTimeout(
                    () => {
                        let a = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((a !== document.activeElement && (null == a || a.focus()), null != i.variantGroupStoreListingId)) {
                            let n = c.Z.getProductByStoreListingId(i.variantGroupStoreListingId);
                            if (null != n) {
                                var o;
                                e = n;
                                let r = null === (o = n.variants) || void 0 === o ? void 0 : o.findIndex((e) => e.skuId === t);
                                null != r && r > -1 && (0, C.$)(n, r);
                            }
                        }
                        (0, h.T)({
                            product: e,
                            category: s,
                            analyticsSource: r,
                            analyticsLocations: n,
                            returnRef: l
                        });
                    },
                    null != l.current ? 750 : 0
                );
            return () => clearTimeout(d);
        }
        return () => {};
    },
    _ = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: c } = e,
            C = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
            h = r.useRef(null),
            m = (0, l.TH)(),
            f = m.pathname === p.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : m.pathname === p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: x } = (0, d.ZP)(f);
        (0, i.ZP)(() => {
            if (n) return;
            let e = g.exec(m.hash);
            if (null != e) {
                let t = e[1];
                h.current = t;
            }
        });
        let _ = (0, a.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let e = null;
            if ((n && null != _ && (e = _), n || null == h.current || (e = h.current), null != e)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = b({
                            productSkuId: e,
                            analyticsLocations: x,
                            analyticsSource: f,
                            initialItemCardRef: c,
                            reducedMotion: C
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
        }, [n, x, f, t, _, c, C]);
    },
    v = (e) => {
        let t = r.useRef({}),
            n = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
            l = (0, a.e7)([c.Z], () => c.Z.isFetchingCategories),
            [i, o] = r.useState(null),
            d = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            u = r.useCallback(
                (r) => {
                    if (l) o(r);
                    else {
                        let l = t.current[r];
                        null != l &&
                            (null == e ||
                                e.scrollIntoViewNode({
                                    node: l,
                                    padding: 12,
                                    animate: !n,
                                    shouldScrollToStart: !0
                                }));
                    }
                },
                [e, n, l, o]
            );
        return (
            r.useEffect(() => {
                l || null == i || (u(i), o(null));
            }, [l, u, i, o]),
            {
                setCategoryRef: d,
                handleScrollToCategory: u
            }
        );
    };
