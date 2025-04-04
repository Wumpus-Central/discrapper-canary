n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(981729);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function f(e) {
    var { mouseLeaveDelay: t = 100 } = e,
        n = u(e, ['mouseLeaveDelay']);
    let { children: a, className: l } = n,
        d = u(n, ['children', 'className']),
        f = i.useRef(0),
        [_, p] = i.useState(!1);
    function h() {
        clearTimeout(f.current), p(!0);
    }
    function m() {
        clearTimeout(f.current), (f.current = setTimeout(() => p(!1), t));
    }
    return (0, r.jsx)('div', {
        className: l,
        onMouseEnter: 0 !== t ? h : () => {},
        onMouseLeave: 0 !== t ? m : () => {},
        children: (0, r.jsx)(
            o.u,
            c(
                s(
                    {
                        forceOpen: _,
                        disableTooltipPointerEvents: !1
                    },
                    d
                ),
                { children: a }
            )
        )
    });
}
