r.d(n, {
    $: function () {
        return f;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(803997),
    l = r.n(o),
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
    return s.forwardRef(function (n, o) {
        let { children: f, className: _, onResize: h, contentClassName: p, onScroll: m, dir: g = 'ltr', fade: E = !1, customTheme: v = !1, style: I, ...T } = n,
            b = s.useRef(null),
            y = s.useRef(null),
            [S, A] = s.useState(!1),
            { scrollerRef: N, getScrollerState: C } = (0, c.Ke)(),
            R = (0, c.t2)(N);
        s.useImperativeHandle(
            o,
            () => ({
                getScrollerNode: () => N.current,
                isScrolling: () => null != b.current,
                getScrollerState: C,
                ...(0, c.Ue)(N, C, R)
            }),
            [N, C, R]
        );
        let O = s.useCallback(
            (e) => {
                null == b.current ? A(!0) : clearTimeout(b.current),
                    (b.current = setTimeout(() => {
                        (b.current = null), A(!1);
                    }, 200)),
                    null != m && m(e);
            },
            [m]
        );
        return (
            s.useEffect(() => () => clearTimeout(b.current), []),
            (0, c.zn)({
                ref: N,
                key: 'container',
                onUpdate: h,
                resizeObserver: i,
                listenerMap: r
            }),
            (0, c.zn)({
                ref: y,
                key: 'content',
                onUpdate: h,
                resizeObserver: i,
                listenerMap: r
            }),
            (0, a.jsx)('div', {
                ref: N,
                className: l()(_, {
                    [d.fade]: E,
                    [d.customTheme]: v,
                    [e]: !0,
                    [d.managedReactiveScroller]: !0,
                    [d.scrolling]: S && E
                }),
                style: I,
                dir: g,
                onScroll: O,
                ...T,
                children: (0, a.jsx)(u.J, {
                    containerRef: y,
                    children: (0, a.jsxs)('div', {
                        ref: y,
                        className: l()(p, d.content),
                        children: [f, S && (0, a.jsx)('div', { className: d.pointerCover })]
                    })
                })
            })
        );
    });
}
