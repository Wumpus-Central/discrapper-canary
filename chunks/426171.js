n.d(t, {
    Kp: () => v,
    u9: () => x,
    xV: () => _
}),
    n(757143),
    n(653041),
    n(47120);
var l = n(192379),
    r = n(512969),
    i = n(442837),
    a = n(493773),
    s = n(607070),
    o = n(100527),
    d = n(906732),
    c = n(597688),
    u = n(328347),
    C = n(429368),
    h = n(237031),
    m = n(981631);
let p = ''.concat('#').concat('itemSkuId', '='),
    g = new RegExp('^'.concat(p, '(\\d+)$')),
    f = [m.Z5c.COLLECTIBLES_SHOP, m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    x = (e) => {
        let t = (0, r.TH)();
        l.useEffect(() => {
            if (null != e && f.includes(t.pathname))
                return (
                    window.location.replace(''.concat(p).concat(e)),
                    () => {
                        window.location.hash.startsWith(p) && window.location.replace('#');
                    }
                );
        }, [e, t.pathname]);
    },
    b = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: l, initialItemCardRef: r, reducedMotion: i = !1 } = e,
            a = c.Z.getProduct(t),
            s = c.Z.getCategoryForProduct(t);
        if (null != a && null != s) {
            var o;
            null === (o = r.current) ||
                void 0 === o ||
                o.scrollIntoView({
                    behavior: i ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = a,
                d = setTimeout(
                    () => {
                        let i = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((i !== document.activeElement && (null == i || i.focus()), null != a.variantGroupStoreListingId)) {
                            let n = c.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                            if (null != n) {
                                var o;
                                e = n;
                                let l = null === (o = n.variants) || void 0 === o ? void 0 : o.findIndex((e) => e.skuId === t);
                                null != l && l > -1 && (0, C.$)(n, l);
                            }
                        }
                        (0, h.T)({
                            product: e,
                            category: s,
                            analyticsSource: l,
                            analyticsLocations: n,
                            returnRef: r
                        });
                    },
                    null != r.current ? 750 : 0
                );
            return () => clearTimeout(d);
        }
        return () => {};
    },
    v = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: c } = e,
            C = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            h = l.useRef(null),
            p = (0, r.TH)(),
            f = p.pathname === m.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : p.pathname === m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: x } = (0, d.ZP)(f);
        (0, a.ZP)(() => {
            if (n) return;
            let e = g.exec(p.hash);
            if (null != e) {
                let t = e[1];
                h.current = t;
            }
        });
        let v = (0, i.e7)([u.Z], () => u.Z.initialProductSkuId);
        l.useEffect(() => {
            if (t) return;
            let e = null;
            if ((n && null != v && (e = v), n || null == h.current || (e = h.current), null != e)) {
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
        }, [n, x, f, t, v, c, C]);
    },
    _ = (e) => {
        let t = l.useRef({}),
            n = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            r = (0, i.e7)([c.Z], () => c.Z.isFetchingCategories),
            [a, o] = l.useState(null),
            d = l.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            u = l.useCallback(
                (l) => {
                    if (r) o(l);
                    else {
                        let r = t.current[l];
                        null != r &&
                            (null == e ||
                                e.scrollIntoViewNode({
                                    node: r,
                                    padding: 12,
                                    animate: !n,
                                    shouldScrollToStart: !0
                                }));
                    }
                },
                [e, n, r, o]
            );
        return (
            l.useEffect(() => {
                r || null == a || (u(a), o(null));
            }, [r, u, a, o]),
            {
                setCategoryRef: d,
                handleScrollToCategory: u
            }
        );
    };
