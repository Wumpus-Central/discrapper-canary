n.d(t, { n: () => _ });
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
    return (0, r.jsx)(
        'svg',
        u(l({}, (0, o.Z)(h)), {
            xmlns: 'http://www.w3.org/2000/svg',
            width: g,
            height: E,
            fill: 'none',
            viewBox: '0 0 24 24',
            children: (0, r.jsx)('path', {
                fill: 'string' == typeof _ ? _ : _.css,
                d: 'M9.54 3.28a3 3 0 0 0-.37.74c-.19.52.28.98.83.98h4c.55 0 1.02-.46.83-.98a2.96 2.96 0 0 0-.37-.74c.23-.16.56-.28.99-.28a1 1 0 1 0 0-2c-1 0-2.01.4-2.68 1.1a3 3 0 0 0-1.54 0A3.76 3.76 0 0 0 8.55 1a1 1 0 0 0 0 2c.43 0 .76.12 1 .28ZM18.01 18.85c-.04.1-.03.22.05.3l1.51 1.5a1 1 0 0 1-1.41 1.42l-1.18-1.18a.26.26 0 0 0-.37 0 6.7 6.7 0 0 1-2.8 1.82c-.42.14-.83-.2-.86-.64l-.42-8.57a.53.53 0 0 0-1.05 0l-.43 8.57c-.03.45-.44.78-.87.64A6.7 6.7 0 0 1 7.4 20.9a.26.26 0 0 0-.37-.01l-1.18 1.18a1 1 0 0 1-1.41-1.41l1.51-1.51c.08-.08.1-.2.05-.3-.47-.94-.78-2-.92-3.12a.25.25 0 0 0-.25-.23H3a1 1 0 1 1 0-2h1.82c.13 0 .24-.1.25-.23.14-1.13.45-2.18.92-3.12a.25.25 0 0 0-.05-.3l-1.51-1.5a1 1 0 1 1 1.41-1.42L7.02 8.1c.1.1.27.1.37 0a6.66 6.66 0 0 1 2.95-1.87c.38-.11.75.14.85.52l.57 2.27c.06.25.42.25.48 0l.57-2.27c.1-.38.47-.63.85-.52 1.1.33 2.11.98 2.95 1.86.1.1.26.11.37.01l1.18-1.18a1 1 0 1 1 1.41 1.41l-1.51 1.51c-.08.08-.1.2-.05.3.47.94.78 2 .92 3.12.01.13.12.23.25.23H21a1 1 0 1 1 0 2h-1.82c-.13 0-.24.1-.25.23a9.68 9.68 0 0 1-.92 3.12Z',
                className: p
            })
        })
    );
};
