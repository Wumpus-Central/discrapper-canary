n.d(t, {
    Kp: function () {
        return v;
    },
    u9: function () {
        return b;
    },
    xV: function () {
        return _;
    }
}),
    n(757143),
    n(653041),
    n(47120);
var r = n(192379),
    i = n(512969),
    l = n(442837),
    s = n(493773),
    a = n(607070),
    o = n(100527),
    c = n(906732),
    d = n(597688),
    u = n(328347),
    C = n(429368),
    h = n(237031),
    p = n(981631);
let f = ''.concat('#').concat('itemSkuId', '='),
    m = new RegExp('^'.concat(f, '(\\d+)$')),
    g = [p.Z5c.COLLECTIBLES_SHOP, p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    b = (e) => {
        let t = (0, i.TH)();
        r.useEffect(() => {
            if (null != e && g.includes(t.pathname))
                return (
                    window.location.replace(''.concat(f).concat(e)),
                    () => {
                        window.location.hash.startsWith(f) && window.location.replace('#');
                    }
                );
        }, [e, t.pathname]);
    },
    x = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, initialItemCardRef: i, reducedMotion: l = !1 } = e,
            s = d.Z.getProduct(t),
            a = d.Z.getCategoryForProduct(t);
        if (null != s && null != a) {
            var o;
            null === (o = i.current) ||
                void 0 === o ||
                o.scrollIntoView({
                    behavior: l ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = s,
                c = setTimeout(
                    () => {
                        let l = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((l !== document.activeElement && (null == l || l.focus()), null != s.variantGroupStoreListingId)) {
                            let n = d.Z.getProductByStoreListingId(s.variantGroupStoreListingId);
                            if (null != n) {
                                var o;
                                e = n;
                                let r = null === (o = n.variants) || void 0 === o ? void 0 : o.findIndex((e) => e.skuId === t);
                                null != r && r > -1 && (0, C.$)(n, r);
                            }
                        }
                        (0, h.T)({
                            product: e,
                            category: a,
                            analyticsSource: r,
                            analyticsLocations: n,
                            returnRef: i
                        });
                    },
                    null != i.current ? 750 : 0
                );
            return () => clearTimeout(c);
        }
        return () => {};
    },
    v = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: d } = e,
            C = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
            h = r.useRef(null),
            f = (0, i.TH)(),
            g = f.pathname === p.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : f.pathname === p.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: b } = (0, c.ZP)(g);
        (0, s.Z)(() => {
            if (n) return;
            let e = m.exec(f.hash);
            if (null != e) {
                let t = e[1];
                h.current = t;
            }
        });
        let v = (0, l.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let e = null;
            if ((n && null != v && (e = v), !n && null != h.current && (e = h.current), null != e)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = x({
                            productSkuId: e,
                            analyticsLocations: b,
                            analyticsSource: g,
                            initialItemCardRef: d,
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
        }, [n, b, g, t, v, d, C]);
    },
    _ = (e) => {
        let t = r.useRef({}),
            n = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
            i = (0, l.e7)([d.Z], () => d.Z.isFetchingCategories),
            [s, o] = r.useState(null),
            c = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            u = r.useCallback(
                (r) => {
                    if (i) o(r);
                    else {
                        let i = t.current[r];
                        null != i &&
                            (null == e ||
                                e.scrollIntoViewNode({
                                    node: i,
                                    padding: 12,
                                    animate: !n,
                                    shouldScrollToStart: !0
                                }));
                    }
                },
                [e, n, i, o]
            );
        return (
            r.useEffect(() => {
                !i && null != s && (u(s), o(null));
            }, [i, u, s, o]),
            {
                setCategoryRef: c,
                handleScrollToCategory: u
            }
        );
    };
