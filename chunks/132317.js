n.d(t, { b: () => _ });
var r = n(54381);
n(473749);
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = (e) => {
    var t,
        n,
        { size: s = "md", width: c, height: f, color: _ = i.Z.colors.INTERACTIVE_NORMAL, colorClass: p = "" } = e,
        h = d(e, ["size", "width", "height", "color", "colorClass"]);
    let m = (0, o.m)(s),
        g = null != (t = null == m ? void 0 : m.width) ? t : c,
        E = null != (n = null == m ? void 0 : m.height) ? n : f;
    return (0, r.jsxs)(
        "svg",
        u(l({}, (0, a.Z)(h)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                (0, r.jsx)("path", {
                    fill: "string" == typeof _ ? _ : _.css,
                    d: "M17.05 8.76a4.7 4.7 0 0 1-1.29-.88c-.36-.33-.7-.73-.88-1.13-.33-.73-.16-.77-1.08-.77h-3.64c-.91 0-.74.04-1.08.77a4.94 4.94 0 0 1-2.17 2.01c-.74.33-.85.14-.86.82 0 .88-.22 3.34 1.78 5.19a13.68 13.68 0 0 0 3.98 2.47c.09.03.08.04.17.04.09 0 .08 0 .17-.04.76-.25 2.67-1.25 3.98-2.47 2-1.85 1.78-4.3 1.78-5.19-.01-.68-.12-.49-.86-.82Z",
                    className: p,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof _ ? _ : _.css,
                    d: "M19.91 5.41c-.84 0-1.52-.65-1.52-1.46v-.3c0-.9-.77-1.65-1.71-1.65H7.31c-.94 0-1.71.74-1.71 1.65v.3c0 .81-.68 1.46-1.52 1.46H3.7c-.94 0-1.7.73-1.7 1.64v3.52l.01.49c.05 3.11.94 4.69 2.92 6.63C6.72 19.46 11.58 22 11.99 22c.41 0 5.27-2.54 7.06-4.31 1.98-1.95 2.92-3.53 2.92-6.63L22 7.05c0-.9-.76-1.64-1.7-1.64h-.39Zm-2.18 10.74a21.76 21.76 0 0 1-5.58 3.38c-.1.03-.2.03-.31 0a21.76 21.76 0 0 1-5.58-3.38c-1.15-1.08-2.12-2.37-2.12-5.29v-.33l.03-2.57c0-.31.26-.57.59-.57a2.88 2.88 0 0 0 2.89-2.8v-.03c0-.3.26-.55.59-.55h7.56c.32 0 .59.25.59.55v.03c0 1.53 1.3 2.77 2.89 2.8.32 0 .59.26.59.57l.03 2.57v.34c0 2.92-.98 4.2-2.14 5.28h-.03Z",
                    className: p,
                }),
            ],
        }),
    );
};
