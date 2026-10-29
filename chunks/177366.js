t.d(u, { XU: () => k, Yr: () => S, k0: () => m });
var l = t(582128),
    n = t(806163),
    r = t(17928),
    c = t(775602),
    a = t(793574),
    s = t(688810),
    i = t(870216),
    o = t(238184),
    d = t(722258),
    f = t(652215);
let h = "#itemSkuId=",
    p = RegExp(`^${h}(\\d+)$`),
    E = [f.BVt.COLLECTIBLES_SHOP];
function S(e) {
    let u = (0, n.zy)();
    l.useEffect(() => {
        if (null != e && E.includes(u.pathname))
            return () => {
                window.location.hash.startsWith(h) && window.location.replace("#");
            };
    }, [e, u.pathname]);
}
function k(e) {
    let u = l.useRef(null),
        t = (0, n.zy)(),
        c = t.pathname === f.BVt.COLLECTIBLES_SHOP ? a.A.HOME_PAGE_SHOP_TAB : a.A.COLLECTIBLES_SHOP,
        { analyticsLocations: h } = (0, s.Ay)(c),
        E = (0, o.A)();
    l.useEffect(() => {
        let e = p.exec(t.hash);
        null != e ? (u.current = e[1]) : (u.current = null);
    }, [E, t.hash]);
    let S = (0, r.bG)([i.A], () => i.A.initialProductSkuId);
    l.useEffect(() => {
        let t = null;
        if ((null != S ? (t = S) : null != u.current && (t = u.current), null != t)) {
            let u = setTimeout(() => {
                (0, d.B)({ skuId: t, analyticsLocations: h, analyticsSource: c, tab: E, sessionId: e });
            }, 250);
            return () => clearTimeout(u);
        }
    }, [h, c, S, E, e]);
}
function m(e) {
    let u = l.useRef({}),
        t = (0, r.bG)([c.Ay], () => c.Ay.useReducedMotion),
        n = l.useRef(null),
        a = l.useRef(null),
        s = l.useCallback(
            (l) => {
                setTimeout(() => {
                    let r = u.current[l],
                        c = e.current;
                    null != r &&
                        null != c &&
                        n.current === l &&
                        ((n.current = null),
                        c.scrollIntoViewNode({ node: r, padding: 40, animate: !t, shouldScrollToStart: !0 }),
                        r.focus({ preventScroll: !0 }));
                }, 100);
            },
            [e, t],
        ),
        i = l.useCallback(
            (e, t) => {
                ((u.current[e] = t), null != t && n.current === e && s(e));
            },
            [s],
        ),
        o = l.useCallback(
            (e) => {
                ((n.current = e),
                    null != a.current && clearTimeout(a.current),
                    (a.current = setTimeout(() => {
                        n.current === e && (n.current = null);
                    }, 1e4)),
                    s(e));
            },
            [s],
        );
    return (
        l.useEffect(
            () => () => {
                null != a.current && clearTimeout(a.current);
            },
            [],
        ),
        { setCategoryRef: i, handleScrollToCategory: o }
    );
}
