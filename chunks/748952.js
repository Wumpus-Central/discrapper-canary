n.d(t, { w: () => _ });
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
                    d: 'M7.89 13.46a1 1 0 0 1-1.78-.9L7 13l-.9-.45.01-.01.01-.02a2.42 2.42 0 0 1 .14-.23c.1-.14.23-.31.4-.5.37-.36.98-.79 1.84-.79.86 0 1.47.43 1.83.8a3.28 3.28 0 0 1 .55.72v.02h.01v.01L10 13l.9-.45a1 1 0 0 1-1.79.9 1.28 1.28 0 0 0-.19-.25c-.14-.13-.28-.2-.42-.2-.14 0-.28.07-.42.2a1.28 1.28 0 0 0-.19.25ZM13.55 13.9a1 1 0 0 0 1.34-.44c0-.02.02-.04.04-.06.03-.05.08-.13.15-.2.14-.13.28-.2.42-.2.14 0 .28.07.42.2a1.28 1.28 0 0 1 .19.25 1 1 0 0 0 1.78-.9L17 13l.9-.45-.01-.01-.01-.02a2.26 2.26 0 0 0-.14-.23 3.28 3.28 0 0 0-.4-.5c-.37-.36-.98-.79-1.84-.79-.86 0-1.47.43-1.83.8a3.28 3.28 0 0 0-.55.72v.02h-.01v.01L14 13l-.9-.45a1 1 0 0 0 .45 1.34Z',
                    className: p
                }),
                (0, r.jsx)('path', {
                    fill: 'string' == typeof _ ? _ : _.css,
                    fillRule: 'evenodd',
                    d: 'M12 21c5.52 0 10-1.86 10-6 0-5.59-2.8-10.07-4.26-11.67a1 1 0 1 0-1.48 1.34 14.8 14.8 0 0 1 2.35 3.86A10.23 10.23 0 0 0 12 6C9.47 6 7.15 7.02 5.4 8.53a14.8 14.8 0 0 1 2.34-3.86 1 1 0 1 0-1.48-1.34A18.65 18.65 0 0 0 2 15c0 4.14 4.48 6 10 6Zm0-12c3.87 0 7 2 7 4.2S15.87 17 12 17s-7-1.6-7-3.8C5 11 8.13 9 12 9Z',
                    clipRule: 'evenodd',
                    className: p
                })
            ]
        })
    );
};
