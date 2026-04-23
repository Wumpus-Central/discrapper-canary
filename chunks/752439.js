n.d(t, { d: () => m });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(187322),
    o = n(536804),
    c = n(662246),
    d = n(584648),
    u = n(448539),
    h = n(45596);
function m(e, t) {
    let n = new Map(),
        a = new t((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                n.get(t)?.(e);
            });
        });
    return l.forwardRef(function (t, m) {
        let {
                children: A,
                className: g,
                onResize: _,
                contentClassName: p,
                onScroll: f,
                dir: E = "ltr",
                fade: C = !1,
                customTheme: x = !1,
                style: S,
                ...I
            } = t,
            v = l.useRef(null),
            N = l.useRef(null),
            [T, y] = l.useState(!1),
            { scrollerRef: b, getScrollerState: j } = (0, o.A)(),
            R = (0, c.A)(b);
        l.useImperativeHandle(
            m,
            () => ({
                getScrollerNode: () => b.current,
                isScrolling: () => null != v.current,
                getScrollerState: j,
                ...(0, d.A)(b, j, R),
            }),
            [b, j, R],
        );
        let M = l.useCallback(
            (e) => {
                null == v.current ? y(!0) : clearTimeout(v.current),
                    (v.current = setTimeout(() => {
                        (v.current = null), y(!1);
                    }, 200)),
                    null != f && f(e);
            },
            [f],
        );
        return (
            l.useEffect(() => () => clearTimeout(v.current), []),
            (0, u.A)({ ref: b, key: "container", onUpdate: _, resizeObserver: a, listenerMap: n }),
            (0, u.A)({ ref: N, key: "content", onUpdate: _, resizeObserver: a, listenerMap: n }),
            (0, i.jsx)("div", {
                ref: b,
                className: s()(g, { [h.Rv]: C, [h.D8]: x, [e]: !0, [h.fs]: !0, [h.qw]: T && C }),
                style: S,
                dir: E,
                onScroll: M,
                ...I,
                children: (0, i.jsx)(r.xp, {
                    containerRef: N,
                    children: (0, i.jsxs)("div", {
                        ref: N,
                        className: s()(p, h.Qs),
                        children: [A, T && (0, i.jsx)("div", { className: h.X3 })],
                    }),
                }),
            })
        );
    });
}
