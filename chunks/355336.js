r.d(n, {
    $: function () {
        return f;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(803997),
    l = r.n(s),
    u = r(84735),
    c = r(780900),
    d = r(553624);
function f(e, n) {
    let r = new Map(),
        i = new n((e) => {
            e.forEach((e) => {
                var n;
                let { target: i } = e;
                null === (n = r.get(i)) || void 0 === n || n(e);
            });
        });
    return o.forwardRef(function (n, s) {
        let { children: f, className: p, onResize: h, contentClassName: _, onScroll: m, dir: g = 'ltr', fade: E = !1, customTheme: v = !1, style: y, ...b } = n,
            I = o.useRef(null),
            T = o.useRef(null),
            [S, A] = o.useState(!1),
            { scrollerRef: C, getScrollerState: N } = (0, c.Ke)(),
            R = (0, c.t2)(C);
        o.useImperativeHandle(
            s,
            () => ({
                getScrollerNode: () => C.current,
                isScrolling: () => null != I.current,
                getScrollerState: N,
                ...(0, c.Ue)(C, N, R)
            }),
            [C, N, R]
        );
        let O = o.useCallback(
            (e) => {
                null == I.current ? A(!0) : clearTimeout(I.current),
                    (I.current = setTimeout(() => {
                        (I.current = null), A(!1);
                    }, 200)),
                    null != m && m(e);
            },
            [m]
        );
        return (
            o.useEffect(() => () => clearTimeout(I.current), []),
            (0, c.zn)({
                ref: C,
                key: 'container',
                onUpdate: h,
                resizeObserver: i,
                listenerMap: r
            }),
            (0, c.zn)({
                ref: T,
                key: 'content',
                onUpdate: h,
                resizeObserver: i,
                listenerMap: r
            }),
            (0, a.jsx)('div', {
                ref: C,
                className: l()(p, {
                    [d.fade]: E,
                    [d.customTheme]: v,
                    [e]: !0,
                    [d.managedReactiveScroller]: !0,
                    [d.scrolling]: S && E
                }),
                style: y,
                dir: g,
                onScroll: O,
                ...b,
                children: (0, a.jsx)(u.J, {
                    containerRef: T,
                    children: (0, a.jsxs)('div', {
                        ref: T,
                        className: l()(_, d.content),
                        children: [f, S && (0, a.jsx)('div', { className: d.pointerCover })]
                    })
                })
            })
        );
    });
}
