n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(331595),
    o = n(267843);
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
    var t,
        n,
        { size: a = 'sm', color: l = '#FF73FA', width: d, height: f } = e,
        _ = u(e, ['size', 'color', 'width', 'height']);
    let p = (0, o.m)(a),
        h = null != (t = null == p ? void 0 : p.width) ? t : d,
        m = null != (n = null == p ? void 0 : p.height) ? n : f;
    return (0, r.jsxs)(
        'svg',
        c(
            s(
                {
                    width: h,
                    height: m,
                    viewBox: '0 0 10 16',
                    fill: 'string' == typeof l ? l : l.css
                },
                (0, i.Z)(_)
            ),
            {
                xmlns: 'http://www.w3.org/2000/svg',
                children: [(0, r.jsx)('path', { d: 'M5 0.5L0 5.5V10.5L5 15.5L10 10.5V5.5L5 0.5ZM8.75 9.9875L5 13.7375L1.25 9.9875V6.0125L5 2.2625L8.75 6.0125V9.9875Z' }), (0, r.jsx)('path', { d: 'M2.5 6.53751V9.46251L5 11.9625L7.5 9.46251V6.53751L5 4.03751L2.5 6.53751Z' })]
            }
        )
    );
}
