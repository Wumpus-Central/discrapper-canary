n.d(t, {
    M0: () => E,
    YX: () => m,
    tT: () => g
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(1561),
    l = n(981729),
    c = n(641419);
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
let m = {
        TERTIARY: c.tertiary,
        SECONDARY: c.secondary,
        PRIMARY: c.primary
    },
    g = {
        SIZE_24: c.size24,
        SIZE_32: c.size32,
        SIZE_36: c.size36
    },
    E = i.forwardRef(function (e, t) {
        let { className: n, tooltip: i, color: o, size: u = g.SIZE_32, icon: f, onMouseDown: h, onClick: m, disabled: E, focusProps: b } = e;
        return (0, r.jsx)(l.u, {
            text: i,
            shouldShow: !E,
            children: (e) => {
                var { onClick: l } = e,
                    g = p(e, ['onClick']);
                return (0, r.jsx)(
                    s.P,
                    _(d({}, g), {
                        innerRef: t,
                        'aria-label': i,
                        'aria-disabled': E,
                        className: a()(n, c.button, o, u, { [c.disabled]: E }),
                        onMouseDown: h,
                        onClick: (e) => {
                            null == l || l(), m(e);
                        },
                        focusProps: b,
                        children: f
                    })
                );
            }
        });
    });
