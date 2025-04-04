n.d(t, { $: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(803997),
    a = n.n(o),
    s = n(84735),
    l = n(780900),
    c = n(789304);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function _(e, t) {
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e, t) {
    let n = new Map(),
        o = new t((e) => {
            e.forEach((e) => {
                var t;
                let { target: r } = e;
                null == (t = n.get(r)) || t(e);
            });
        });
    return i.forwardRef(function (t, u) {
        var { children: f, className: h, onResize: m, contentClassName: g, onScroll: E, dir: b = 'ltr', fade: y = !1, customTheme: v = !1, style: O } = t,
            I = p(t, ['children', 'className', 'onResize', 'contentClassName', 'onScroll', 'dir', 'fade', 'customTheme', 'style']);
        let S = i.useRef(null),
            T = i.useRef(null),
            [N, A] = i.useState(!1),
            { scrollerRef: C, getScrollerState: R } = (0, l.Ke)(),
            P = (0, l.t2)(C);
        i.useImperativeHandle(
            u,
            () =>
                d(
                    {
                        getScrollerNode: () => C.current,
                        isScrolling: () => null != S.current,
                        getScrollerState: R
                    },
                    (0, l.Ue)(C, R, P)
                ),
            [C, R, P]
        );
        let w = i.useCallback(
            (e) => {
                null == S.current ? A(!0) : clearTimeout(S.current),
                    (S.current = setTimeout(() => {
                        (S.current = null), A(!1);
                    }, 200)),
                    null != E && E(e);
            },
            [E]
        );
        return (
            i.useEffect(() => () => clearTimeout(S.current), []),
            (0, l.zn)({
                ref: C,
                key: 'container',
                onUpdate: m,
                resizeObserver: o,
                listenerMap: n
            }),
            (0, l.zn)({
                ref: T,
                key: 'content',
                onUpdate: m,
                resizeObserver: o,
                listenerMap: n
            }),
            (0, r.jsx)(
                'div',
                _(
                    d(
                        {
                            ref: C,
                            className: a()(h, {
                                [c.fade]: y,
                                [c.customTheme]: v,
                                [e]: !0,
                                [c.managedReactiveScroller]: !0,
                                [c.scrolling]: N && y
                            }),
                            style: O,
                            dir: b,
                            onScroll: w
                        },
                        I
                    ),
                    {
                        children: (0, r.jsx)(s.J, {
                            containerRef: T,
                            children: (0, r.jsxs)('div', {
                                ref: T,
                                className: a()(g, c.content),
                                children: [f, N && (0, r.jsx)('div', { className: c.pointerCover })]
                            })
                        })
                    }
                )
            )
        );
    });
}
