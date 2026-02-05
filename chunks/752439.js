"use strict";
n.d(t, { d: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(426333),
    l = n(842867),
    u = n(219293);
function c(e, t) {
    let n = new Map(),
        a = new t((e) => {
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
                fade: g = !1,
                customTheme: E = !1,
                style: A,
                ...I
            } = t,
            T = i.useRef(null),
            y = i.useRef(null),
            [S, v] = i.useState(!1),
            { scrollerRef: C, getScrollerState: b } = (0, l.s$)(),
            N = (0, l.kR)(C);
        i.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => C.current,
                isScrolling: () => null != T.current,
                getScrollerState: b,
                ...(0, l.cJ)(C, b, N),
            }),
            [C, b, N],
        );
        let R = i.useCallback(
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
            (0, l.Bb)({ ref: C, key: "container", onUpdate: f, resizeObserver: a, listenerMap: n }),
            (0, l.Bb)({ ref: y, key: "content", onUpdate: f, resizeObserver: a, listenerMap: n }),
            (0, r.jsx)("div", {
                ref: C,
                className: s()(_, { [u.Rv]: g, [u.D8]: E, [e]: !0, [u.fs]: !0, [u.qw]: S && g }),
                style: A,
                dir: m,
                onScroll: R,
                ...I,
                children: (0, r.jsx)(o.xp, {
                    containerRef: y,
                    children: (0, r.jsxs)("div", {
                        ref: y,
                        className: s()(p, u.Qs),
                        children: [d, S && (0, r.jsx)("div", { className: u.X3 })],
                    }),
                }),
            })
        );
    });
}
