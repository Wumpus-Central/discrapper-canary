n.d(t, {
    Kp: function () {
        return x;
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
    a = n(512969),
    i = n(442837),
    l = n(493773),
    s = n(607070),
    o = n(100527),
    c = n(906732),
    d = n(597688),
    u = n(328347),
    m = n(429368),
    h = n(237031),
    g = n(981631);
let p = ''.concat('#').concat('itemSkuId', '='),
    f = new RegExp('^'.concat(p, '(\\d+)$')),
    C = [g.Z5c.COLLECTIBLES_SHOP, g.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    b = (e) => {
        let t = (0, a.TH)();
        r.useEffect(() => {
            if (null != e && C.includes(t.pathname))
                return (
                    window.location.replace(''.concat(p).concat(e)),
                    () => {
                        window.location.hash.startsWith(p) && window.location.replace('#');
                    }
                );
        }, [e, t]);
    },
    v = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, initialItemCardRef: a, reducedMotion: i = !1 } = e,
            l = d.Z.getProduct(t),
            s = d.Z.getCategoryForProduct(t);
        if (null != l && null != s) {
            var o;
            null === (o = a.current) ||
                void 0 === o ||
                o.scrollIntoView({
                    behavior: i ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = l,
                c = setTimeout(
                    () => {
                        let i = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((i !== document.activeElement && (null == i || i.focus()), null != l.variantGroupStoreListingId)) {
                            let n = d.Z.getProductByStoreListingId(l.variantGroupStoreListingId);
                            if (null != n) {
                                var o;
                                e = n;
                                let r = null === (o = n.variants) || void 0 === o ? void 0 : o.findIndex((e) => e.skuId === t);
                                null != r && r > -1 && (0, m.$)(n, r);
                            }
                        }
                        (0, h.T)({
                            product: e,
                            category: s,
                            analyticsSource: r,
                            analyticsLocations: n,
                            returnRef: a
                        });
                    },
                    null != a.current ? 750 : 0
                );
            return () => clearTimeout(c);
        }
        return () => {};
    },
    x = (e) => {
        let { isFetchingCategories: t, isLayer: n, initialItemCardRef: d } = e,
            m = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            h = r.useRef(null),
            p = (0, a.TH)(),
            C = p.pathname === g.Z5c.COLLECTIBLES_SHOP ? o.Z.HOME_PAGE_SHOP_TAB : p.pathname === g.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: b } = (0, c.ZP)(C);
        (0, l.Z)(() => {
            if (n) return;
            let e = f.exec(p.hash);
            if (null != e) {
                let t = e[1];
                h.current = t;
            }
        });
        let x = (0, i.e7)([u.Z], () => u.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let e = null;
            if ((n && null != x && (e = x), !n && null != h.current && (e = h.current), null != e)) {
                let t = [],
                    n = setTimeout(() => {
                        let n = v({
                            productSkuId: e,
                            analyticsLocations: b,
                            analyticsSource: C,
                            initialItemCardRef: d,
                            reducedMotion: m
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
        }, [n, b, C, t, x, d, m]);
    },
    _ = (e) => {
        let t = r.useRef({}),
            n = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            a = (0, i.e7)([d.Z], () => d.Z.isFetchingCategories),
            [l, o] = r.useState(null),
            c = r.useCallback((e, n) => {
                t.current[e] = n;
            }, []),
            u = r.useCallback(
                (r) => {
                    if (a) o(r);
                    else {
                        let a = t.current[r];
                        null != a &&
                            (null == e ||
                                e.scrollIntoViewNode({
                                    node: a,
                                    padding: 12,
                                    animate: !n,
                                    shouldScrollToStart: !0
                                }));
                    }
                },
                [e, n, a, o]
            );
        return (
            r.useEffect(() => {
                !a && null != l && (u(l), o(null));
            }, [a, u, l, o]),
            {
                setCategoryRef: c,
                handleScrollToCategory: u
            }
        );
    };
