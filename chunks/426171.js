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
    o = r(493773),
    s = r(607070),
    a = r(100527),
    c = r(906732),
    u = r(597688),
    d = r(328347),
    p = r(429368),
    f = r(410127),
    b = r(237031),
    h = r(956472),
    m = r(981631);
let C = ''.concat('#').concat('itemSkuId', '='),
    g = new RegExp('^'.concat(C, '(\\d+)$')),
    v = [m.Z5c.COLLECTIBLES_SHOP, m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    x = (e) => {
        let t = (0, l.TH)();
        n.useEffect(() => {
            if (null != e && v.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(C) && window.location.replace('#');
                };
        }, [e, t.pathname]);
    },
    j = (e) => {
        let { productSkuId: t, analyticsLocations: r, analyticsSource: n, initialItemCardRef: l, reducedMotion: i = !1, tab: o } = e,
            s = u.Z.getProduct(t),
            a = u.Z.getCategoryForProduct(t);
        if (null != s && null != a) {
            var c;
            null === (c = l.current) ||
                void 0 === c ||
                c.scrollIntoView({
                    behavior: i ? 'instant' : 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            let e = s,
                d = (0, h.oQ)({
                    product: s,
                    tab: o
                }),
                f = setTimeout(
                    () => {
                        let i = document.getElementById('shop-item-'.concat(e.skuId));
                        if ((i !== document.activeElement && (null == i || i.focus()), null != s.variantGroupStoreListingId)) {
                            let r = u.Z.getProductByStoreListingId(s.variantGroupStoreListingId);
                            if (null != r) {
                                var c;
                                e = r;
                                let n = null === (c = r.variants) || void 0 === c ? void 0 : c.findIndex((e) => e.skuId === t);
                                null != n && n > -1 && (0, p.$)(r, n);
                            }
                        }
                        (0, b.T)({
                            product: e,
                            category: a,
                            analyticsSource: n,
                            analyticsLocations: r,
                            returnRef: l,
                            tab: o,
                            shouldCheckoutWithOrbs: d
                        });
                    },
                    750 * (null != l.current)
                );
            return () => clearTimeout(f);
        }
        return () => {};
    },
    _ = (e) => {
        let { isFetchingCategories: t, isLayer: r, initialItemCardRef: u } = e,
            p = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            b = n.useRef(null),
            h = (0, l.TH)(),
            C = h.pathname === m.Z5c.COLLECTIBLES_SHOP ? a.Z.HOME_PAGE_SHOP_TAB : h.pathname === m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? a.Z.COLLECTIBLES_SHOP_FULLSCREEN : a.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: v } = (0, c.ZP)(C),
            x = (0, f.Z)();
        (0, o.ZP)(() => {
            if (r) return;
            let e = g.exec(h.hash);
            if (null != e) {
                let t = e[1];
                b.current = t;
            }
        });
        let _ = (0, i.e7)([d.Z], () => d.Z.initialProductSkuId);
        n.useEffect(() => {
            if (t) return;
            let e = null;
            if ((r && null != _ && (e = _), r || null == b.current || (e = b.current), null != e)) {
                let t = [],
                    r = setTimeout(() => {
                        let r = j({
                            productSkuId: e,
                            analyticsLocations: v,
                            analyticsSource: C,
                            initialItemCardRef: u,
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
        }, [r, v, C, t, _, u, p, x]);
    },
    y = (e) => {
        let t = n.useRef({}),
            r = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            l = (0, i.e7)([u.Z], () => u.Z.isFetchingCategories),
            [o, a] = n.useState(null),
            c = n.useCallback((e, r) => {
                t.current[e] = r;
            }, []),
            d = n.useCallback(
                (n) => {
                    if (l) a(n);
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
                [e, r, l, a]
            );
        return (
            n.useEffect(() => {
                l || null == o || (d(o), a(null));
            }, [l, d, o, a]),
            {
                setCategoryRef: c,
                handleScrollToCategory: d
            }
        );
    };
