n.d(t, { M: () => _ });
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
                d: 'M10.9 22.95c-1.7-.16-3.4-.77-4.88-1.73-1.24-.8-1.52-1.13-1.52-1.8 0-1.32 1.46-3.65 3.96-6.3 1.42-1.5 3.4-3.26 3.61-3.22.42.1 3.74 3.33 4.98 4.86 1.97 2.4 2.87 4.38 2.41 5.26-.35.67-2.51 1.98-4.1 2.48-1.32.42-3.04.6-4.46.45Zm-8.06-4.9a11.4 11.4 0 0 1-1.8-5.37A8.59 8.59 0 0 1 1.23 10c.3-1.9 1.38-4.08 2.67-5.43.56-.57.6-.59 1.28-.36.81.27 1.69.88 3.04 2.1l.79.71-.43.53c-2 2.46-4.12 5.94-4.91 8.1-.43 1.17-.6 2.34-.42 2.83.12.34 0 .21-.41-.43Zm18.01.26c.1-.5-.03-1.4-.33-2.32-.65-1.98-2.82-5.67-4.82-8.18l-.63-.8.68-.62c.89-.81 1.5-1.3 2.17-1.71a4.18 4.18 0 0 1 1.6-.62c.2 0 .9.73 1.46 1.52a11.51 11.51 0 0 1 1.85 4.26c.21 1 .23 3.15.03 4.14-.16.82-.5 1.89-.82 2.6-.25.55-.86 1.6-1.13 1.94-.14.17-.14.17-.06-.2ZM11.08 3.68a13.7 13.7 0 0 0-3.12-1.1 5.74 5.74 0 0 0-1.05-.06c-.65.03-.62 0 .42-.5.87-.4 1.59-.64 2.57-.84 1.1-.24 3.17-.24 4.25-.01 1.17.25 2.55.76 3.33 1.24l.23.14-.53-.03c-1.06-.05-2.59.37-4.24 1.17-.5.25-.92.44-.96.43-.03 0-.43-.2-.9-.44Z',
                className: p
            })
        })
    );
};
