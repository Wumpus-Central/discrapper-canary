n.d(t, { d: () => _ });
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
                d: 'M12.1 22.5c-1.8 0-3.3-.37-4.53-1.11A7.95 7.95 0 0 1 4.9 18.8a.46.46 0 0 1 .1-.6l1.38-1.16a.5.5 0 0 1 .73.12 7.44 7.44 0 0 0 1.92 2.04 5.8 5.8 0 0 0 3.22.81c1.36 0 2.42-.3 3.16-.9a3.13 3.13 0 0 0 1.14-2.6c0-1.02-.42-1.79-1.26-2.32a9.65 9.65 0 0 0-2.15-.94H2.5a.5.5 0 0 1-.5-.5v-1.5c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5h-3.16l.1.15c.57.76.86 1.75.86 2.96a5.6 5.6 0 0 1-1.93 4.5c-1.29 1.1-3.04 1.64-5.27 1.64ZM5.7 8.36c.09.39.45.64.85.64h2.1c.18 0 .28-.25.15-.4a2.46 2.46 0 0 1-.56-1.66c0-.96.36-1.69 1.08-2.2a4.94 4.94 0 0 1 2.93-.78c1.11 0 2.03.22 2.75.67.62.38 1.24 1 1.86 1.82.17.23.49.28.7.1l1.22-1.02a.46.46 0 0 0 .1-.6 7.76 7.76 0 0 0-6.63-3.43c-1.23 0-2.35.22-3.36.67a5.03 5.03 0 0 0-3.3 4.86c-.01.47.03.92.12 1.33Z',
                className: p
            })
        })
    );
};
