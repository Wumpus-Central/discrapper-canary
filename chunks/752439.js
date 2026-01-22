n.d(t, { d: () => m }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(426333),
    l = n(842867),
    c = n(219293);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function m(e, t) {
    let n = new Map(),
        a = new t((e) => {
            e.forEach((e) => {
                var t;
                let { target: r } = e;
                null == (t = n.get(r)) || t(e);
            });
        });
    return i.forwardRef(function (t, u) {
        let [f, ...h] = [t, u],
            {
                children: m,
                className: g,
                onResize: E,
                contentClassName: b,
                onScroll: y,
                dir: O = "ltr",
                fade: A = !1,
                customTheme: v = !1,
                style: S,
            } = f,
            I = _(f, [
                "children",
                "className",
                "onResize",
                "contentClassName",
                "onScroll",
                "dir",
                "fade",
                "customTheme",
                "style",
            ]),
            [T] = h,
            C = i.useRef(null),
            N = i.useRef(null),
            [R, w] = i.useState(!1),
            { scrollerRef: P, getScrollerState: D } = (0, l.s$)(),
            x = (0, l.kR)(P);
        i.useImperativeHandle(
            T,
            () =>
                d(
                    {
                        getScrollerNode: () => P.current,
                        isScrolling: () => null != C.current,
                        getScrollerState: D,
                    },
                    (0, l.cJ)(P, D, x),
                ),
            [P, D, x],
        );
        let L = i.useCallback(
            (e) => {
                null == C.current ? w(!0) : clearTimeout(C.current),
                    (C.current = setTimeout(() => {
                        (C.current = null), w(!1);
                    }, 200)),
                    null != y && y(e);
            },
            [y],
        );
        return (
            i.useEffect(() => () => clearTimeout(C.current), []),
            (0, l.Bb)({
                ref: P,
                key: "container",
                onUpdate: E,
                resizeObserver: a,
                listenerMap: n,
            }),
            (0, l.Bb)({
                ref: N,
                key: "content",
                onUpdate: E,
                resizeObserver: a,
                listenerMap: n,
            }),
            (0, r.jsx)(
                "div",
                p(
                    d(
                        {
                            ref: P,
                            className: s()(g, {
                                [c.Rv]: A,
                                [c.D8]: v,
                                [e]: !0,
                                [c.fs]: !0,
                                [c.qw]: R && A,
                            }),
                            style: S,
                            dir: O,
                            onScroll: L,
                        },
                        I,
                    ),
                    {
                        children: (0, r.jsx)(o.xp, {
                            containerRef: N,
                            children: (0, r.jsxs)("div", {
                                ref: N,
                                className: s()(b, c.Qs),
                                children: [m, R && (0, r.jsx)("div", { className: c.X3 })],
                            }),
                        }),
                    },
                ),
            )
        );
    });
}
