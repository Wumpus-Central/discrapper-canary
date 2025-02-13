n.d(t, { $: () => c }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(84735),
    l = n(780900),
    u = n(626526);
function c(e, t) {
    let n = new Map(),
        a = new t((e) => {
            e.forEach((e) => {
                var t;
                let { target: i } = e;
                null === (t = n.get(i)) || void 0 === t || t(e);
            });
        });
    return r.forwardRef(function (t, c) {
        let { children: d, className: f, onResize: _, contentClassName: p, onScroll: h, dir: m = 'ltr', fade: g = !1, customTheme: E = !1, style: v, ...y } = t,
            I = r.useRef(null),
            T = r.useRef(null),
            [b, S] = r.useState(!1),
            { scrollerRef: A, getScrollerState: N } = (0, l.Ke)(),
            C = (0, l.t2)(A);
        r.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => A.current,
                isScrolling: () => null != I.current,
                getScrollerState: N,
                ...(0, l.Ue)(A, N, C)
            }),
            [A, N, C]
        );
        let R = r.useCallback(
            (e) => {
                null == I.current ? S(!0) : clearTimeout(I.current),
                    (I.current = setTimeout(() => {
                        (I.current = null), S(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h]
        );
        return (
            r.useEffect(() => () => clearTimeout(I.current), []),
            (0, l.zn)({
                ref: A,
                key: 'container',
                onUpdate: _,
                resizeObserver: a,
                listenerMap: n
            }),
            (0, l.zn)({
                ref: T,
                key: 'content',
                onUpdate: _,
                resizeObserver: a,
                listenerMap: n
            }),
            (0, i.jsx)('div', {
                ref: A,
                className: s()(f, {
                    [u.fade]: g,
                    [u.customTheme]: E,
                    [e]: !0,
                    [u.managedReactiveScroller]: !0,
                    [u.scrolling]: b && g
                }),
                style: v,
                dir: m,
                onScroll: R,
                ...y,
                children: (0, i.jsx)(o.J, {
                    containerRef: T,
                    children: (0, i.jsxs)('div', {
                        ref: T,
                        className: s()(p, u.content),
                        children: [d, b && (0, i.jsx)('div', { className: u.pointerCover })]
                    })
                })
            })
        );
    });
}
