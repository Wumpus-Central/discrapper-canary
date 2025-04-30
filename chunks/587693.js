n.d(t, { i: () => _ });
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
                    d: 'M13.19 2.5c.29-.24.35-.7.06-.94l-.2-.16a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16v-3.5c0-.28-.23-.5-.5-.54-.2-.03-.4-.08-.6-.15-.4-.14-.9.12-.9.54V16c0 .65-.25 1-.32 1.05l-4.36 3.57a.5.5 0 0 1-.64 0l-4.36-3.57C7.25 16.99 7 16.65 7 16V8c0-.65.25-1 .32-1.05l4.52-3.7c.1-.07.23-.07.32 0 .12.1.3.06.39-.07.17-.25.38-.49.64-.69Z',
                    fill: 'string' == typeof _ ? _ : _.css,
                    className: p
                }),
                (0, r.jsx)('path', {
                    d: 'm9.3 8.7 2.35-2.35c.2-.2.5-.2.7 0l2.36 2.36a1 1 0 0 1 .29.7v5.18a1 1 0 0 1-.3.7l-2.35 2.36a.5.5 0 0 1-.7 0l-2.36-2.36a1 1 0 0 1-.29-.7V9.4a1 1 0 0 1 .3-.7ZM17.86.8a1.21 1.21 0 0 1 2.28 0l.5 1.37a2 2 0 0 0 1.19 1.18l1.38.51a1.21 1.21 0 0 1 0 2.28l-1.38.5a2 2 0 0 0-1.18 1.19l-.51 1.38a1.21 1.21 0 0 1-2.28 0l-.5-1.38a2 2 0 0 0-1.19-1.18l-1.38-.51a1.21 1.21 0 0 1 0-2.28l1.38-.5a2 2 0 0 0 1.18-1.19l.51-1.38Z',
                    fill: 'string' == typeof _ ? _ : _.css,
                    className: p
                })
            ]
        })
    );
};
