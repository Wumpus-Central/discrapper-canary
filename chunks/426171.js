n.d(t, {
    Kp: () => _,
    u9: () => x,
    xV: () => v
}),
    n(757143),
    n(653041),
    n(47120);
var l = n(192379),
    r = n(512969),
    i = n(442837),
    s = n(493773),
    a = n(607070),
    o = n(100527),
    d = n(906732),
    c = n(597688),
    u = n(328347),
    C = n(429368),
    h = n(237031),
    p = n(981631);
let m = ''.concat('#').concat('itemSkuId', '='),
    f = new RegExp('^'.concat(m, '(\\d+)$')),
    g = [p.Z5c.COLLECTIBLES_SHOP, p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    x = (e) => {
        let t = (0, r.TH)();
        l.useEffect(() => {
            if (null != e && g.includes(t.pathname))
                return (
                    window.location.replace(''.concat(m).concat(e)),
                    () => {
                        window.location.hash.startsWith(m) && window.location.replace('#');
                    }
                );
        }, [e, t.pathname]);
    },
    b = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: l, initialItemCardRef: r, reducedMotion: i = !1 } = e,
            s = c.Z.getProduct(t),
            a = c.Z.getCategoryForProduct(t);
        if (null != s && null != a) {
            var o;
            null === (o = r.current) ||
                void 0 === o ||
                o.scrollIntoView({
                    behavior: i ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = s,
                d = setTimeout(
                    () => {
                        let i = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((i !== document.activeElement && (null == i || i.focus()), null != s.variantGroupStoreListingId)) {
                            let n = c.Z.getProductByStoreListingId(s.variantGroupStoreListingId);
                            if (null != n) {
                                var o;
                                e = n;
                                let l = null === (o = n.variants) || void 0 === o ? void 0 : o.findIndex((e) => e.skuId === t);
                                null != l && l > -1 && (0, C.$)(n, l);
                            }
                        }
                        (0, h.T)({
                            product: e,
                            category: a,
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
    _ = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: c } = e,
            C = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
            h = l.useRef(null),
            m = (0, r.TH)(),
            g = m.pathname === p.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : m.pathname === p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: x } = (0, d.ZP)(g);
        (0, s.ZP)(() => {
            if (n) return;
            let e = f.exec(m.hash);
            if (null != e) {
                let t = e[1];
                h.current = t;
            }
        });
        let _ = (0, i.e7)([u.Z], () => u.Z.initialProductSkuId);
        l.useEffect(() => {
            if (t) return;
            let e = null;
            if ((n && null != _ && (e = _), n || null == h.current || (e = h.current), null != e)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = b({
                            productSkuId: e,
                            analyticsLocations: x,
                            analyticsSource: g,
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
        }, [n, x, g, t, _, c, C]);
    },
    v = (e) => {
        let t = l.useRef({}),
            n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
            r = (0, i.e7)([c.Z], () => c.Z.isFetchingCategories),
            [s, o] = l.useState(null),
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
                r || null == s || (u(s), o(null));
            }, [r, u, s, o]),
            {
                setCategoryRef: d,
                handleScrollToCategory: u
            }
        );
    };
