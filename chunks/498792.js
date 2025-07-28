n.d(t, { x: () => f });
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
                fillRule: 'evenodd',
                d: 'M4.5 3.92A11.03 11.03 0 0 1 11.99 1v.02a11.06 11.06 0 0 1 9.87 6.09 10.96 10.96 0 0 1-5.9 15.15A10.99 10.99 0 0 1 1.4 15l4.22 1.74a3.12 3.12 0 0 0 6.17-.62v-.14l3.75-2.67h.08a4.16 4.16 0 0 0 2.95-7.08 4.15 4.15 0 0 0-7.1 2.94v.05l-2.62 3.8h-.18c-.62 0-1.23.19-1.75.54L1 11.1a10.96 10.96 0 0 1 3.5-7.2Zm3.4 13.76-1.35-.55a2.35 2.35 0 0 0 3.45.9 2.32 2.32 0 0 0 .33-3.54 2.34 2.34 0 0 0-2.5-.55l1.4.58a1.72 1.72 0 0 1-1.33 3.17ZM17.91 7.63a2.76 2.76 0 0 1-3.84 3.83 2.8 2.8 0 0 1-1.19-2.84 2.75 2.75 0 0 1 3.78-2.01c.5.22.94.57 1.24 1.02h.01Zm-4.03.38a2.09 2.09 0 1 0 3.66 1.96c.16-.38.2-.8.11-1.2-.08-.4-.28-.77-.57-1.07a2.1 2.1 0 0 0-3.2.32Z',
                clipRule: 'evenodd',
                className: p
            })
        })
    );
};
