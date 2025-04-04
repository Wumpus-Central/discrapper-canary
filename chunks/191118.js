n.d(t, { S: () => _ });
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
                    d: 'M12.81 13.23c-.3.4-.7.6-1.18.6-.4 0-.71-.14-.93-.42-.2-.27-.3-.67-.3-1.17 0-.63.15-1.14.46-1.53.32-.4.71-.6 1.2-.6.38 0 .68.14.9.42.21.27.32.66.32 1.17 0 .62-.15 1.14-.47 1.53Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    fillRule: 'evenodd',
                    d: 'M4.56 4.22A2.83 2.83 0 0 0 3 6.75v3.03c0 5.6 3.3 10.69 8.42 12.96.37.17.79.17 1.16 0A14.18 14.18 0 0 0 21 9.78V6.75c0-1.07-.6-2.05-1.56-2.53l-6.1-3.05a3 3 0 0 0-2.68 0l-6.1 3.05Zm10.37 5.47a.5.5 0 0 0-.5-.57h-.22a.5.5 0 0 0-.47.34l-.14.4c-.14-.28-.36-.5-.64-.67a2.7 2.7 0 0 0-2.58.18c-.44.27-.79.67-1.04 1.18-.24.5-.37 1.09-.37 1.74 0 .85.2 1.52.62 2s.98.72 1.67.72c.45 0 .86-.1 1.23-.28.37-.2.65-.45.82-.76.05.3.2.55.44.75.25.19.57.29.97.29a3 3 0 0 0 1.7-.5c.5-.34.88-.81 1.16-1.42.28-.6.42-1.3.42-2.07a4.66 4.66 0 0 0-2.68-4.38 6.4 6.4 0 0 0-2.9-.64c-1.18 0-2.26.25-3.24.76a5.72 5.72 0 0 0-2.33 2.18A6.36 6.36 0 0 0 6 12.28c0 1.08.21 2.05.64 2.92a4.74 4.74 0 0 0 1.98 2.04c.9.5 2 .76 3.31.76.78 0 1.53-.08 2.28-.25a6.94 6.94 0 0 0 1.47-.5.46.46 0 0 0 .21-.61l-.1-.21c-.12-.27-.44-.37-.7-.26a7.5 7.5 0 0 1-3.04.58c-1.06 0-1.94-.2-2.64-.6a3.67 3.67 0 0 1-1.5-1.6 5.3 5.3 0 0 1-.46-2.26c0-1.01.22-1.9.66-2.66A4.5 4.5 0 0 1 9.9 7.87a5.23 5.23 0 0 1 2.55-.62c.82 0 1.55.15 2.18.47a3.5 3.5 0 0 1 1.48 1.34c.35.58.53 1.26.53 2.04 0 .52-.08.99-.24 1.41-.14.42-.35.75-.61.99s-.53.36-.82.36c-.34 0-.52-.2-.52-.61 0-.09 0-.15.02-.2l.46-3.36Z',
                    clipRule: 'evenodd',
                    className: p
                })
            ]
        })
    );
};
