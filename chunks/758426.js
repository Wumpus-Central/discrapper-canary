n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(960259),
    o = n(381708),
    a = n(325767);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = (0, i.hN)(
    function (e) {
        var { width: t = 6, height: n = 11, color: i = 'currentColor', foreground: o } = e,
            s = d(e, ['width', 'height', 'color', 'foreground']);
        return (0, r.jsx)(
            'svg',
            u(l({}, (0, a.Z)(s)), {
                width: t,
                height: n,
                viewBox: '0 0 6 11',
                children: (0, r.jsx)('path', {
                    fill: i,
                    className: o,
                    d: 'M3 0.625244L0 3.62524V7.62524L3 10.6252L6 7.62524V3.62524L3 0.625244ZM5 7.24524L3 9.24524L1 7.24524V4.04524L3 2.04524L5 4.04524V7.24524Z'
                })
            })
        );
    },
    o.M,
    void 0,
    { size: 11 }
);
