r.d(t, {
    Kp: () => x,
    u9: () => g,
    xV: () => _
}),
    r(474991),
    r(398202),
    r(301563),
    r(757143),
    r(653041),
    r(47120);
var n = r(192379),
    l = r(512969),
    i = r(442837),
    a = r(493773),
    o = r(607070),
    s = r(100527),
    c = r(906732),
    d = r(597688),
    u = r(328347),
    p = r(429368),
    f = r(237031),
    h = r(981631);
let C = ''.concat('#').concat('itemSkuId', '='),
    m = new RegExp('^'.concat(C, '(\\d+)$')),
    b = [h.Z5c.COLLECTIBLES_SHOP, h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    g = (e) => {
        let t = (0, l.TH)();
        n.useEffect(() => {
            if (null != e && b.includes(t.pathname))
                return (
                    window.location.replace(''.concat(C).concat(e)),
                    () => {
                        window.location.hash.startsWith(C) && window.location.replace('#');
                    }
                );
        }, [e, t.pathname]);
    },
    v = (e) => {
        let { productSkuId: t, analyticsLocations: r, analyticsSource: n, initialItemCardRef: l, reducedMotion: i = !1 } = e,
            a = d.Z.getProduct(t),
            o = d.Z.getCategoryForProduct(t);
        if (null != a && null != o) {
            var s;
            null === (s = l.current) ||
                void 0 === s ||
                s.scrollIntoView({
                    behavior: i ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = a,
                c = setTimeout(
                    () => {
                        let i = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((i !== document.activeElement && (null == i || i.focus()), null != a.variantGroupStoreListingId)) {
                            let r = d.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                            if (null != r) {
                                var s;
                                e = r;
                                let n = null === (s = r.variants) || void 0 === s ? void 0 : s.findIndex((e) => e.skuId === t);
                                null != n && n > -1 && (0, p.$)(r, n);
                            }
                        }
                        (0, f.T)({
                            product: e,
                            category: o,
                            analyticsSource: n,
                            analyticsLocations: r,
                            returnRef: l
                        });
                    },
                    750 * (null != l.current)
                );
            return () => clearTimeout(c);
        }
        return () => {};
    },
    x = (e) => {
        let { isFetchingCategories: t, isLayer: r, initialItemCardRef: d } = e,
            p = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
            f = n.useRef(null),
            C = (0, l.TH)(),
            b = C.pathname === h.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : C.pathname === h.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN : s.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: g } = (0, c.ZP)(b);
        (0, a.ZP)(() => {
            if (r) return;
            let e = m.exec(C.hash);
            if (null != e) {
                let t = e[1];
                f.current = t;
            }
        });
        let x = (0, i.e7)([u.Z], () => u.Z.initialProductSkuId);
        n.useEffect(() => {
            if (t) return;
            let e = null;
            if ((r && null != x && (e = x), r || null == f.current || (e = f.current), null != e)) {
                let t = [],
                    r = setTimeout(() => {
                        let r = v({
                            productSkuId: e,
                            analyticsLocations: g,
                            analyticsSource: b,
                            initialItemCardRef: d,
                            reducedMotion: p
                        });
                        t.push(r);
                    }, 250);
                return (
                    t.push(() => clearTimeout(r)),
                    () => {
                        t.forEach((e) => e());
                    }
                );
            }
        }, [r, g, b, t, x, d, p]);
    },
    _ = (e) => {
        let t = n.useRef({}),
            r = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
            l = (0, i.e7)([d.Z], () => d.Z.isFetchingCategories),
            [a, s] = n.useState(null),
            c = n.useCallback((e, r) => {
                t.current[e] = r;
            }, []),
            u = n.useCallback(
                (n) => {
                    if (l) s(n);
                    else {
                        let l = t.current[n];
                        null != l &&
                            (null == e ||
                                e.scrollIntoViewNode({
                                    node: l,
                                    padding: 12,
                                    animate: !r,
                                    shouldScrollToStart: !0
                                }));
                    }
                },
                [e, r, l, s]
            );
        return (
            n.useEffect(() => {
                l || null == a || (u(a), s(null));
            }, [l, u, a, s]),
            {
                setCategoryRef: c,
                handleScrollToCategory: u
            }
        );
    };
