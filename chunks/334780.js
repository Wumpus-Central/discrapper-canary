n.d(t, { l: () => _ });
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
                    d: 'm17.58 11.07 1-1.37a1 1 0 0 1 .78-.4h1.68a1 1 0 0 0 .77-1.52l-1-1.35a1 1 0 0 1-.14-.87L21.18 4a1 1 0 0 0-1.2-1.21l-1.6.55a1 1 0 0 1-.86-.14l-1.35-1a1 1 0 0 0-1.52.8v1.69a1 1 0 0 1-.4.78l-1.38 1a1 1 0 0 0 .27 1.68l1.6.5a1 1 0 0 1 .63.63l.5 1.6a1 1 0 0 0 1.7.2ZM7 13.1a2.28 2.28 0 0 0-1.63.65L3 16.12A3.44 3.44 0 0 0 7.86 21l2.37-2.36c1.06-1.06.8-2.86-.61-4.27a3.87 3.87 0 0 0-2.63-1.26Zm1.99 4.26c-.32.32-1.1.05-1.75-.6-.65-.65-.92-1.43-.6-1.75.32-.32 1.1 0 1.75.6.65.6.9 1.43.6 1.75ZM13.98 14.5a1.49 1.49 0 1 0 .08 2.97 1.49 1.49 0 0 0-.08-2.97ZM8.2 6.84a7.12 7.12 0 0 0-.79-4.29 1 1 0 1 0-1.79.9c.25.49.43 1.01.54 1.55a2.26 2.26 0 0 0-1 0 2.39 2.39 0 0 0-1.4 3.8 2.37 2.37 0 0 0 3.16.5c.1.53.12 1.07.07 1.61a1 1 0 0 0 2 .23 7.15 7.15 0 0 0-.79-4.3Zm-2.59.84a.36.36 0 0 1-.36-.37.37.37 0 0 1 .36-.37.38.38 0 0 1 .38.37.37.37 0 0 1-.38.37Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    d: 'M13.77 11.83a2 2 0 0 0 .82-1.32 1.01 1.01 0 1 0-2-.3.55.55 0 0 1-.26 0 2 2 0 0 0-1.64.34 2.94 2.94 0 0 0-1 1.91 1 1 0 0 0 1.99.24c0-.23.15-.5.3-.54a2.22 2.22 0 0 0 1.8-.33ZM21.31 14.81a1.39 1.39 0 0 1-.34-1.08l.06-.67a.66.66 0 0 0-1.12-.53l-.47.47a1.38 1.38 0 0 1-1.08.37l-.67-.06a.66.66 0 0 0-.53 1.12l.47.5a1.36 1.36 0 0 1 .35 1.06l-.06.68a.66.66 0 0 0 1.12.53l.49-.47a1.37 1.37 0 0 1 1.06-.38l.68.06a.66.66 0 0 0 .53-1.12l-.49-.48Z',
                    className: p
                })
            ]
        })
    );
};
