var l = r(582128),
    s = r(806163),
    i = r(855986),
    n = r(775602),
    o = r(793574),
    u = r(688810),
    a = r(870216),
    c = r(238184),
    f = r(722258),
    S = r(652215);
let y = "#itemSkuId=",
    g = RegExp(`^${y}(\\d+)$`),
    h = [S.BVt.COLLECTIBLES_SHOP];
r.d(
    t,
    {},
    {
        XU: function (e) {
            let t = l.useRef(null),
                r = (0, s.zy)(),
                n = r.pathname === S.BVt.COLLECTIBLES_SHOP ? o.A.HOME_PAGE_SHOP_TAB : o.A.COLLECTIBLES_SHOP,
                { analyticsLocations: y } = (0, u.Ay)(n),
                h = (0, c.A)();
            l.useEffect(() => {
                let e = g.exec(r.hash);
                null != e ? (t.current = e[1]) : (t.current = null);
            }, [h, r.hash]);
            let d = (0, i.bG)([a.A], () => a.A.initialProductSkuId);
            l.useEffect(() => {
                let r = null;
                if ((null != d ? (r = d) : null != t.current && (r = t.current), null != r)) {
                    let t = setTimeout(() => {
                        (0, f.B)({ skuId: r, analyticsLocations: y, analyticsSource: n, tab: h, sessionId: e });
                    }, 250);
                    return () => clearTimeout(t);
                }
            }, [y, n, d, h, e]);
        },
        Yr: function (e) {
            let t = (0, s.zy)();
            l.useEffect(() => {
                if (null != e && h.includes(t.pathname))
                    return () => {
                        window.location.hash.startsWith(y) && window.location.replace("#");
                    };
            }, [e, t.pathname]);
        },
        k0: function (e) {
            let t = l.useRef({}),
                r = (0, i.bG)([n.Ay], () => n.Ay.useReducedMotion),
                s = l.useRef(null),
                o = l.useRef(null),
                u = l.useCallback(
                    (l) => {
                        setTimeout(() => {
                            let i = t.current[l],
                                n = e.current;
                            null != i &&
                                null != n &&
                                s.current === l &&
                                ((s.current = null),
                                n.scrollIntoViewNode({ node: i, padding: 40, animate: !r, shouldScrollToStart: !0 }),
                                i.focus({ preventScroll: !0 }));
                        }, 100);
                    },
                    [e, r],
                ),
                a = l.useCallback(
                    (e, r) => {
                        ((t.current[e] = r), null != r && s.current === e && u(e));
                    },
                    [u],
                ),
                c = l.useCallback(
                    (e) => {
                        ((s.current = e),
                            null != o.current && clearTimeout(o.current),
                            (o.current = setTimeout(() => {
                                s.current === e && (s.current = null);
                            }, 1e4)),
                            u(e));
                    },
                    [u],
                );
            return (
                l.useEffect(
                    () => () => {
                        null != o.current && clearTimeout(o.current);
                    },
                    [],
                ),
                { setCategoryRef: a, handleScrollToCategory: c }
            );
        },
    },
);
