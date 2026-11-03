r.d(t, { XU: () => E, Yr: () => d, k0: () => b });
var l = r(582128),
    s = r(806163),
    i = r(17928),
    o = r(775602),
    n = r(793574),
    u = r(688810),
    a = r(870216),
    c = r(238184),
    f = r(722258),
    S = r(652215);
let y = "#itemSkuId=",
    g = RegExp(`^${y}(\\d+)$`),
    h = [S.BVt.COLLECTIBLES_SHOP];
function d(e) {
    let t = (0, s.zy)();
    l.useEffect(() => {
        if (null != e && h.includes(t.pathname))
            return () => {
                window.location.hash.startsWith(y) && window.location.replace("#");
            };
    }, [e, t.pathname]);
}
function E(e) {
    let t = l.useRef(null),
        r = (0, s.zy)(),
        o = r.pathname === S.BVt.COLLECTIBLES_SHOP ? n.A.HOME_PAGE_SHOP_TAB : n.A.COLLECTIBLES_SHOP,
        { analyticsLocations: y } = (0, u.Ay)(o),
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
                (0, f.B)({ skuId: r, analyticsLocations: y, analyticsSource: o, tab: h, sessionId: e });
            }, 250);
            return () => clearTimeout(t);
        }
    }, [y, o, d, h, e]);
}
function b(e) {
    let t = l.useRef({}),
        r = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        s = l.useRef(null),
        n = l.useRef(null),
        u = l.useCallback(
            (l) => {
                setTimeout(() => {
                    let i = t.current[l],
                        o = e.current;
                    null != i &&
                        null != o &&
                        s.current === l &&
                        ((s.current = null),
                        o.scrollIntoViewNode({ node: i, padding: 40, animate: !r, shouldScrollToStart: !0 }),
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
                    null != n.current && clearTimeout(n.current),
                    (n.current = setTimeout(() => {
                        s.current === e && (s.current = null);
                    }, 1e4)),
                    u(e));
            },
            [u],
        );
    return (
        l.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        { setCategoryRef: a, handleScrollToCategory: c }
    );
}
