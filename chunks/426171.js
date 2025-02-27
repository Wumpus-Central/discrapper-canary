r.d(t, {
    Kp: () => _,
    u9: () => x,
    xV: () => y
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
    f = r(410127),
    h = r(237031),
    b = r(956472),
    m = r(981631);
let C = ''.concat('#').concat('itemSkuId', '='),
    g = new RegExp('^'.concat(C, '(\\d+)$')),
    v = [m.Z5c.COLLECTIBLES_SHOP, m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    x = (e) => {
        let t = (0, l.TH)();
        n.useEffect(() => {
            if (null != e && v.includes(t.pathname))
                return (
                    window.location.replace(''.concat(C).concat(e)),
                    () => {
                        window.location.hash.startsWith(C) && window.location.replace('#');
                    }
                );
        }, [e, t.pathname]);
    },
    j = (e) => {
        let { productSkuId: t, analyticsLocations: r, analyticsSource: n, initialItemCardRef: l, reducedMotion: i = !1, tab: a } = e,
            o = d.Z.getProduct(t),
            s = d.Z.getCategoryForProduct(t);
        if (null != o && null != s) {
            var c;
            null === (c = l.current) ||
                void 0 === c ||
                c.scrollIntoView({
                    behavior: i ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = o,
                u = (0, b.oQ)({
                    product: o,
                    tab: a
                }),
                f = setTimeout(
                    () => {
                        let i = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((i !== document.activeElement && (null == i || i.focus()), null != o.variantGroupStoreListingId)) {
                            let r = d.Z.getProductByStoreListingId(o.variantGroupStoreListingId);
                            if (null != r) {
                                var c;
                                e = r;
                                let n = null === (c = r.variants) || void 0 === c ? void 0 : c.findIndex((e) => e.skuId === t);
                                null != n && n > -1 && (0, p.$)(r, n);
                            }
                        }
                        (0, h.T)({
                            product: e,
                            category: s,
                            analyticsSource: n,
                            analyticsLocations: r,
                            returnRef: l,
                            tab: a,
                            shouldCheckoutWithOrbs: u
                        });
                    },
                    750 * (null != l.current)
                );
            return () => clearTimeout(f);
        }
        return () => {};
    },
    _ = (e) => {
        let { isFetchingCategories: t, isLayer: r, initialItemCardRef: d } = e,
            p = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
            h = n.useRef(null),
            b = (0, l.TH)(),
            C = b.pathname === m.Z5c.COLLECTIBLES_SHOP ? s.Z.HOME_PAGE_SHOP_TAB : b.pathname === m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? s.Z.COLLECTIBLES_SHOP_FULLSCREEN : s.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: v } = (0, c.ZP)(C),
            x = (0, f.Z)();
        (0, a.ZP)(() => {
            if (r) return;
            let e = g.exec(b.hash);
            if (null != e) {
                let t = e[1];
                h.current = t;
            }
        });
        let _ = (0, i.e7)([u.Z], () => u.Z.initialProductSkuId);
        n.useEffect(() => {
            if (t) return;
            let e = null;
            if ((r && null != _ && (e = _), r || null == h.current || (e = h.current), null != e)) {
                let t = [],
                    r = setTimeout(() => {
                        let r = j({
                            productSkuId: e,
                            analyticsLocations: v,
                            analyticsSource: C,
                            initialItemCardRef: d,
                            reducedMotion: p,
                            tab: x
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
        }, [r, v, C, t, _, d, p, x]);
    },
    y = (e) => {
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
