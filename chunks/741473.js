n.d(t, { D: () => f });
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
    return (0, r.jsx)(
        'svg',
        u(l({}, (0, a.Z)(h)), {
            xmlns: 'http://www.w3.org/2000/svg',
            width: g,
            height: E,
            fill: 'none',
            viewBox: '0 0 24 24',
            children: (0, r.jsx)('path', {
                fill: 'string' == typeof f ? f : f.css,
                d: 'M18.38 8.6A22.71 22.71 0 0 0 7.83 6.8c.2-1.25.64-2.12 1.42-2.28 1.06-.25 2.2.44 3.29 1.7.72.08 1.55.24 2.14.38-2-3.75-4.68-5.84-6.7-5.06-1.57.58-2.35 2.73-2.26 5.56-2 .42-3.6 1.2-4.6 2.29-.05.05-.16.2-.1.27.02.06.13 0 .16-.02 1.17-.81 2.67-1.26 4.6-1.53a22.14 22.14 0 0 0 3.7 10.01c-1.17.48-2.15.5-2.7-.08-.76-.78-.73-2.11-.17-3.7-.28-.67-.56-1.47-.72-2.06-2.26 3.6-2.73 6.96-1.03 8.32 1.28 1.03 3.5.67 5.95-.83 1.36 1.53 2.81 2.5 4.29 2.84.08.02.25.02.3-.03.03-.06-.08-.11-.1-.14a10.36 10.36 0 0 1-3.63-3.23c2.5-1.75 5.2-4.81 6.82-8.21.98.78 1.5 1.61 1.28 2.37-.3 1.03-1.47 1.67-3.12 2-.44.58-1 1.22-1.41 1.67 4.23.14 7.4-1.11 7.73-3.26.25-1.64-1.2-3.36-3.73-4.73.64-1.95.75-3.7.3-5.12-.02-.08-.07-.25-.16-.25-.05 0-.05.11-.05.17.14 1.42-.23 2.92-.95 4.76Zm-7.8 9.02a18.52 18.52 0 0 1-2.8-9.68c3.4-.11 6.84.7 9.8 2.4-1.62 3-4.04 5.59-7 7.28Z',
                className: p
            })
        })
    );
};
