n.d(t, { Y: () => _ });
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
                    d: 'M2 20.59V19.4a1 1 0 0 1 .3-.7l2.4-2.42a1 1 0 0 1 .71-.29H6l9-9-.85-.85a1 1 0 0 1-.23-.34l-1.49-3.73a.5.5 0 0 1 .65-.65l3.73 1.5a1 1 0 0 1 .34.22l.64.64a1 1 0 0 1 1.42 0l1 1a1 1 0 0 1 0 1.42l1.58 1.58a1 1 0 0 1 0 1.42l-1.58 1.58a1 1 0 0 1-1.42 0L17 9l-9 9v.59a1 1 0 0 1-.3.7l-2.4 2.42a1 1 0 0 1-.71.29H3.4a1 1 0 0 1-.7-.3l-.42-.4a1 1 0 0 1-.29-.71Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    d: 'M8.23 10.23c.2.2.51.2.7 0l1.3-1.3a.5.5 0 0 0 0-.7L6.5 4.5l.3-.3a1 1 0 0 0 0-1.4l-.5-.5c-.2-.2-.45-.3-.7-.22-.43.14-1.17.49-2.1 1.42a5.37 5.37 0 0 0-1.42 2.1c-.08.25.03.5.21.7l.5.5a1 1 0 0 0 1.42 0l.29-.3 3.73 3.73ZM13.77 15.06a.5.5 0 0 0 0 .7l1.73 1.74 1.44 2.4a1 1 0 0 0 .15.19l1.73 1.73c.1.1.26.1.36 0l2.64-2.64c.1-.1.1-.26 0-.36L20.1 17.1a1 1 0 0 0-.2-.15L17.5 15.5l-1.73-1.73a.5.5 0 0 0-.7 0l-1.3 1.3Z',
                    className: p
                })
            ]
        })
    );
};
