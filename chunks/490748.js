n.d(t, { W: () => _ });
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
                d: 'M4 8.5C4 4.36 7.58 1 12 1s8 3.36 8 7.5c0 2.64-.98 4.02-1.9 5.33-.49.7-.96 1.38-1.27 2.2C16.45 17.09 15.6 18 14.5 18h-1a.5.5 0 0 1-.5-.5v-5.77c0-.32.3-.56.6-.44.29.12.53.27.72.44a1 1 0 0 0 1.36-1.46A5.46 5.46 0 0 0 12 9c-1.3 0-2.72.37-3.68 1.27a1 1 0 1 0 1.36 1.46c.19-.17.43-.32.73-.44s.59.12.59.44v5.77a.5.5 0 0 1-.5.5h-1c-1.1 0-1.95-.92-2.33-1.96-.3-.83-.78-1.5-1.27-2.2C4.98 12.51 4 11.13 4 8.5ZM15.1 19c.5 0 .9.4.9.9 0 .7-.28 1.38-.78 1.88l-.34.34a3 3 0 0 1-2.12.88h-1.52a3 3 0 0 1-2.12-.88l-.34-.34c-.5-.5-.78-1.18-.78-1.89 0-.5.4-.89.9-.89h6.2Z',
                className: p
            })
        })
    );
};
