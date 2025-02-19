n.d(t, {
    M0: () => g,
    YX: () => h,
    tT: () => m
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(1561),
    s = n(981729),
    l = n(673707);
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = {
        TERTIARY: l.tertiary,
        SECONDARY: l.secondary,
        PRIMARY: l.primary
    },
    m = {
        SIZE_24: l.size24,
        SIZE_32: l.size32,
        SIZE_36: l.size36
    };
function g(e) {
    let { className: t, tooltip: n, color: i, size: c = m.SIZE_32, icon: d, onMouseDown: _, onClick: h, disabled: g, focusProps: E } = e;
    return (0, r.jsx)(s.u, {
        text: n,
        shouldShow: !g,
        children: (e) => {
            var { onClick: s } = e,
                m = p(e, ['onClick']);
            return (0, r.jsx)(
                a.P,
                f(u({}, m), {
                    'aria-label': n,
                    'aria-disabled': g,
                    className: o()(t, l.button, i, c, { [l.disabled]: g }),
                    onMouseDown: _,
                    onClick: (e) => {
                        null == s || s(), h(e);
                    },
                    focusProps: E,
                    children: d
                })
            );
        }
    });
}
