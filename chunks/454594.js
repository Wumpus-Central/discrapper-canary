n.d(t, { l: () => _ });
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
                    d: "m3.83 1.23.53 1.41 1.41.53c.3.12.3.54 0 .66l-1.41.53-.53 1.41c-.12.3-.54.3-.66 0l-.53-1.41-1.41-.53a.35.35 0 0 1 0-.66l1.41-.53.53-1.41c.12-.3.54-.3.66 0Z",
                    className: p,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof _ ? _ : _.css,
                    fillRule: "evenodd",
                    d: "M12 4a8 8 0 0 0-7.67 5.7c-2.88 2.8-4.11 5.97-2.82 8.12 1.23 2.04 4.43 2.64 8.16 1.84a8 8 0 0 0 10-5.36c2.88-2.8 4.11-5.97 2.82-8.12-1.23-2.04-4.43-2.64-8.16-1.84A8 8 0 0 0 12 4Zm8.06 6.7c1.14-1.78 1.05-2.93.72-3.48-.36-.59-1.38-1.24-3.49-1.22.8.71 1.47 1.58 1.94 2.57l-.24.4a16.52 16.52 0 0 1-5.91 5.21 17.33 17.33 0 0 1-7.7 2.32 7.95 7.95 0 0 1-1.3-3.41l-.14.21c-1.14 1.78-1.05 2.93-.72 3.48.36.6 1.43 1.27 3.65 1.22 2.12-.05 4.8-.78 7.46-2.26a16.02 16.02 0 0 0 5.73-5.04ZM13.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                    clipRule: "evenodd",
                    className: p,
                }),
            ],
        }),
    );
};
