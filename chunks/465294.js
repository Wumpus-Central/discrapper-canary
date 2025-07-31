n.d(t, { j: () => f });
var r = n(255367);
n(73800);
var i = n(692547),
    a = n(331595),
    o = n(267843);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let f = (e) => {
    var t,
        n,
        { size: s = 'md', width: c, height: _, color: f = i.Z.colors.INTERACTIVE_NORMAL, colorClass: p = '' } = e,
        h = d(e, ['size', 'width', 'height', 'color', 'colorClass']);
    let m = (0, o.m)(s),
        g = null != (t = null == m ? void 0 : m.width) ? t : c,
        E = null != (n = null == m ? void 0 : m.height) ? n : _;
    return (0, r.jsxs)(
        'svg',
        u(l({}, (0, a.Z)(h)), {
            xmlns: 'http://www.w3.org/2000/svg',
            width: g,
            height: E,
            fill: 'none',
            viewBox: '0 0 24 24',
            children: [
                (0, r.jsx)('path', {
                    fill: 'string' == typeof f ? f : f.css,
                    d: 'M10.89 11.79A3 3 0 1 0 13.1 6.2a3 3 0 0 0-2.22 5.58Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof f ? f : f.css,
                    fillRule: 'evenodd',
                    d: 'M11.91 16.43a.66.66 0 0 0-.16.08 3.16 3.16 0 0 1-2.85.27 3.14 3.14 0 0 1-1.88-2.16.67.67 0 0 0-.5-.49A3.14 3.14 0 0 1 4.5 9.45a.67.67 0 0 0 0-.7 3.14 3.14 0 0 1 1.88-4.73.67.67 0 0 0 .49-.5 3.14 3.14 0 0 1 4.68-2.02c.22.13.5.13.7 0a3.14 3.14 0 0 1 4.73 1.88c.07.24.26.44.5.49a3.14 3.14 0 0 1 2.02 4.68.67.67 0 0 0 0 .7 3.14 3.14 0 0 1-1.88 4.73.67.67 0 0 0-.49.5 3.14 3.14 0 0 1-4.68 2.02.66.66 0 0 0-.54-.07Zm-1.76-2.79a5 5 0 1 0 3.7-9.28 5 5 0 0 0-3.7 9.28Z',
                    clipRule: 'evenodd',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof f ? f : f.css,
                    d: 'M12.11 17.46a4.13 4.13 0 0 1-5.35-1.1l-.57 5.5a1 1 0 0 0 1.47.99l4.1-2.22a.5.5 0 0 1 .48 0l4.1 2.22a1 1 0 0 0 1.47-.98l-.56-5.42a4.12 4.12 0 0 1-5.14 1Z',
                    className: p
                })
            ]
        })
    );
};
