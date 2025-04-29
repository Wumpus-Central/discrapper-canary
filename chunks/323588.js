n.d(t, { g: () => _ });
var r = n(200651);
n(192379);
var i = n(692547),
    o = n(331595),
    a = n(267843);
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
let _ = (e) => {
    var t,
        n,
        { size: s = 'md', width: c, height: f, color: _ = i.Z.colors.INTERACTIVE_NORMAL, colorClass: p = '' } = e,
        h = d(e, ['size', 'width', 'height', 'color', 'colorClass']);
    let m = (0, a.m)(s),
        g = null != (t = null == m ? void 0 : m.width) ? t : c,
        E = null != (n = null == m ? void 0 : m.height) ? n : f;
    return (0, r.jsxs)(
        'svg',
        u(l({}, (0, o.Z)(h)), {
            xmlns: 'http://www.w3.org/2000/svg',
            width: g,
            height: E,
            fill: 'none',
            viewBox: '0 0 24 24',
            children: [
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    fillRule: 'evenodd',
                    d: 'M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
                    clipRule: 'evenodd',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    d: 'M17.25 8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    fillRule: 'evenodd',
                    d: 'M7.86 2.07a7.3 7.3 0 0 0-2.43.47A4.9 4.9 0 0 0 3.66 3.7a4.9 4.9 0 0 0-1.15 1.77 7.35 7.35 0 0 0-.46 2.43C2.01 8.96 2 9.3 2 12.02c0 2.71.02 3.06.07 4.12.05 1.07.22 1.8.47 2.43.26.66.6 1.21 1.16 1.77.55.55 1.11.9 1.77 1.15.64.24 1.36.41 2.43.46 1.06.04 1.4.05 4.12.05 2.71 0 3.06-.02 4.12-.07a6.14 6.14 0 0 0 4.2-1.63 6.15 6.15 0 0 0 1.6-4.2c.05-1.06.06-1.4.06-4.12 0-2.71-.02-3.05-.07-4.12a6.15 6.15 0 0 0-1.63-4.2 6.14 6.14 0 0 0-4.2-1.6C15.04 2 14.7 2 11.98 2c-2.71 0-3.05.02-4.12.07Zm.1 2c-.88.04-1.39.17-1.8.33a2.9 2.9 0 0 0-1.08.7 2.9 2.9 0 0 0-.7 1.09c-.16.4-.29.92-.33 1.8A68.6 68.6 0 0 0 4 12.01c0 2.7.02 3 .07 4.03.04.87.17 1.38.33 1.79.17.42.36.73.7 1.08.35.34.67.54 1.09.7.41.16.92.29 1.8.33 1.01.04 1.32.05 4.03.05 2.7 0 3-.02 4.03-.07 1.28-.06 2.23-.4 2.87-1.04.64-.64.97-1.6 1.03-2.87.04-1.02.05-1.33.05-4.04 0-2.7-.02-3-.07-4.03-.06-1.28-.4-2.23-1.04-2.87-.64-.64-1.6-.97-2.87-1.03A69.44 69.44 0 0 0 11.98 4c-2.7 0-3 .02-4.02.07Z',
                    clipRule: 'evenodd',
                    className: p
                })
            ]
        })
    );
};
