n.d(t, {
    Kp: () => S,
    u9: () => O,
    xV: () => y,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826),
    n(388685);
var r = n(73800),
    l = n(114858),
    a = n(442837),
    i = n(607070),
    o = n(100527),
    s = n(906732),
    c = n(819640),
    u = n(597688),
    d = n(328347),
    p = n(429368),
    g = n(410127),
    f = n(237031),
    b = n(258939),
    h = n(956472),
    m = n(981631);
let _ = "".concat("#").concat("itemSkuId", "="),
    v = new RegExp("^".concat(_, "(\\d+)$")),
    C = [m.Z5c.COLLECTIBLES_SHOP, m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
    O = (e) => {
        let t = (0, l.TH)();
        r.useEffect(() => {
            if (null != e && C.includes(t.pathname))
                return () => {
                    window.location.hash.startsWith(_) && window.location.replace("#");
                };
        }, [e, t.pathname]);
    },
    E = (e) => {
        let { productSkuId: t, analyticsLocations: n, analyticsSource: r, tab: l } = e,
            a = u.Z.getProduct(t),
            i = u.Z.getCategoryForProduct(t);
        if (null != a && null != i) {
            let e = a,
                s = (0, h.oQ)({ product: a }),
                c = document.getElementById("shop-item-".concat(e.skuId));
            if ((c !== document.activeElement && (null == c || c.focus()), null != a.variantGroupStoreListingId)) {
                let n = u.Z.getProductByStoreListingId(a.variantGroupStoreListingId);
                if (null != n) {
                    var o;
                    e = n;
                    let r = null == (o = n.variants) ? void 0 : o.findIndex((e) => e.skuId === t);
                    null != r && r > -1 && (0, p.$)(n, r);
                }
            }
            (0, f.T)({
                product: e,
                category: i,
                analyticsSource: r,
                analyticsLocations: n,
                tab: l,
                shouldCheckoutWithOrbs: s,
            });
        }
    },
    S = () => {
        let e = (0, a.e7)([c.Z], () => c.Z.getLayers().includes(m.S9g.COLLECTIBLES_SHOP)),
            t = (0, b.R)(),
            n = r.useRef(null),
            i = (0, l.TH)(),
            u =
                i.pathname === m.Z5c.COLLECTIBLES_SHOP
                    ? o.Z.HOME_PAGE_SHOP_TAB
                    : i.pathname === m.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
                      ? o.Z.COLLECTIBLES_SHOP_FULLSCREEN
                      : o.Z.COLLECTIBLES_SHOP,
            { analyticsLocations: p } = (0, s.ZP)(u),
            f = (0, g.Z)();
        r.useEffect(() => {
            if (e) return;
            let t = v.exec(i.hash);
            null != t ? (n.current = t[1]) : (n.current = null);
        }, [f, e, i.hash]);
        let h = (0, a.e7)([d.Z], () => d.Z.initialProductSkuId);
        r.useEffect(() => {
            if (t) return;
            let r = null;
            if (null != (r = e ? h : n.current)) {
                let e = setTimeout(() => {
                    E({
                        productSkuId: r,
                        analyticsLocations: p,
                        analyticsSource: u,
                        tab: f,
                    });
                }, 250);
                return () => clearTimeout(e);
            }
        }, [e, p, u, t, h, f]);
    },
    y = (e) => {
        let t = r.useRef({}),
            n = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
            l = (0, a.e7)([u.Z], () => u.Z.isFetchingCategories),
            [o, s] = r.useState(null),
            c = r.useCallback((e, n) => {
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
                                          shouldScrollToStart: !0,
                                      }));
                          }, 100);
                },
                [e, n, l, s],
            );
        return (
            r.useEffect(() => {
                l || null == o || (d(o), s(null));
            }, [l, d, o, s]),
            {
                setCategoryRef: c,
                handleScrollToCategory: d,
            }
        );
    };
