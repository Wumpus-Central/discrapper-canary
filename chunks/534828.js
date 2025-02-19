n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    o = n(397963),
    a = n(987817),
    s = n(581737);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = (0, o.iS)((e) =>
        (0, r.jsxs)('div', {
            className: s.wrapper,
            children: [
                (0, r.jsx)('div', {
                    className: s.saturation,
                    children: (0, r.jsx)(a.Saturation, c({}, e))
                }),
                (0, r.jsx)('div', {
                    className: s.hue,
                    children: (0, r.jsx)(a.Hue, d(c({}, e), { direction: 'horizontal' }))
                })
            ]
        })
    ),
    p = i.memo(f);
