n.d(t, { z: () => h }), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(803997),
    a = n.n(o),
    s = n(928873),
    l = n(780900);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e, t) {
    let n = (0, l.G6)(e);
    return i.forwardRef(function (o, c) {
        var { children: d, className: p, dir: h = 'ltr', orientation: m = 'vertical', paddingFix: g = !0, fade: E = !1, onScroll: b, style: y } = o,
            v = _(o, ['children', 'className', 'dir', 'orientation', 'paddingFix', 'fade', 'onScroll', 'style']);
        let O = i.useRef(null),
            I = (0, l.tT)({
                paddingFix: g,
                orientation: m,
                dir: h,
                className: p,
                scrollerRef: O,
                specs: n
            });
        return (0, r.jsx)(
            'div',
            f(
                u(
                    {
                        ref: (e) => {
                            'function' == typeof c ? c(e) : null != c && (c.current = e), (O.current = e);
                        },
                        className: a()(p, {
                            [e]: !0,
                            [t]: E
                        }),
                        style: (0, l.uT)(y, m),
                        dir: h
                    },
                    v
                ),
                {
                    children: (0, r.jsxs)(s.Jc, {
                        containerRef: O,
                        children: [d, I]
                    })
                }
            )
        );
    });
}
