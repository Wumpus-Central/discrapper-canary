"use strict";
n.d(t, { d: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(426333),
    l = n(842867),
    u = n(45596);
function c(e, t) {
    let n = new Map(),
        s = new t((e) => {
            e.forEach((e) => {
                let { target: t } = e;
                n.get(t)?.(e);
            });
        });
    return i.forwardRef(function (t, c) {
        let {
                children: d,
                className: _,
                onResize: f,
                contentClassName: p,
                onScroll: h,
                dir: m = "ltr",
                fade: E = !1,
                customTheme: g = !1,
                style: A,
                ...I
            } = t,
            T = i.useRef(null),
            S = i.useRef(null),
            [y, v] = i.useState(!1),
            { scrollerRef: N, getScrollerState: C } = (0, l.s$)(),
            R = (0, l.kR)(N);
        i.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => N.current,
                isScrolling: () => null != T.current,
                getScrollerState: C,
                ...(0, l.cJ)(N, C, R),
            }),
            [N, C, R],
        );
        let O = i.useCallback(
            (e) => {
                null == T.current ? v(!0) : clearTimeout(T.current),
                    (T.current = setTimeout(() => {
                        (T.current = null), v(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h],
        );
        return (
            i.useEffect(() => () => clearTimeout(T.current), []),
            (0, l.Bb)({ ref: N, key: "container", onUpdate: f, resizeObserver: s, listenerMap: n }),
            (0, l.Bb)({ ref: S, key: "content", onUpdate: f, resizeObserver: s, listenerMap: n }),
            (0, r.jsx)("div", {
                ref: N,
                className: a()(_, { [u.Rv]: E, [u.D8]: g, [e]: !0, [u.fs]: !0, [u.qw]: y && E }),
                style: A,
                dir: m,
                onScroll: O,
                ...I,
                children: (0, r.jsx)(o.xp, {
                    containerRef: S,
                    children: (0, r.jsxs)("div", {
                        ref: S,
                        className: a()(p, u.Qs),
                        children: [d, y && (0, r.jsx)("div", { className: u.X3 })],
                    }),
                }),
            })
        );
    });
}
