n.d(t, { y: () => _ });
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
                d: 'M21.7 2.3a1 1 0 0 1 0 1.4l-4.92 4.93c-.12.12-.33.09-.41-.06-.23-.42-.52-.8-.85-1.13a.26.26 0 0 1-.01-.36l4.78-4.79a1 1 0 0 1 1.42 0ZM20 20.6c0 .26.36.45.55.27l1.16-1.16a1 1 0 0 0-1.42-1.42l-.4.41a.25.25 0 0 0-.07.24c.12.53.18 1.09.18 1.66ZM4 20.6c0 .2.02.4.05.6a.26.26 0 0 1-.07.23l-.27.28a1 1 0 0 1-1.42-1.42l1.35-1.34c.19-.19.53.01.48.27-.08.45-.12.91-.12 1.38ZM16.7 3.7l-2.58 2.6a.26.26 0 0 1-.28.05A4.99 4.99 0 0 0 12 6c-.15 0-.23-.18-.13-.29L15.3 2.3a1 1 0 1 1 1.42 1.42ZM7 11c0-.15-.18-.23-.29-.13L2.3 15.3a1 1 0 1 0 1.42 1.42l3.58-3.6c.08-.06.1-.17.06-.27A4.99 4.99 0 0 1 7 11ZM18.23 15.36c-.1.1-.1.24-.02.35.32.37.6.77.83 1.2.09.14.29.18.41.05l2.26-2.25a1 1 0 0 0-1.42-1.42l-2.06 2.07ZM21.7 9.7l-4.62 4.64a.26.26 0 0 1-.33.03l-.45-.3a.27.27 0 0 1-.09-.37c.38-.6.64-1.27.74-2 0-.05.03-.1.07-.14L20.3 8.3a1 1 0 1 1 1.42 1.42ZM11.7 2.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4-1.4l8-8a1 1 0 0 1 1.4 0ZM6.7 3.7a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 1.4 1.4l3-3ZM15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6 20.6c0-3.1 2.5-5.6 5.6-5.6h.8c3.1 0 5.6 2.5 5.6 5.6 0 .77-.63 1.4-1.4 1.4a.17.17 0 0 1-.16-.12c-.19-.7-.44-1.36-.68-1.89-.11-.24-.43-.15-.4.12l.08.8a1 1 0 0 1-1 1.09H9.55a1 1 0 0 1-.99-1.1l.08-.79c.03-.27-.29-.36-.4-.12-.24.53-.5 1.19-.68 1.89a.17.17 0 0 1-.16.12A1.4 1.4 0 0 1 6 20.6Z',
                className: p
            })
        })
    );
};
