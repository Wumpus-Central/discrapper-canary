n.d(t, { S: () => p });
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
let p = (e) => {
    var t,
        n,
        { size: s = "md", width: c, height: f, color: p = i.Z.colors.INTERACTIVE_ICON_DEFAULT, colorClass: _ = "" } = e,
        m = d(e, ["size", "width", "height", "color", "colorClass"]);
    let h = (0, o.m)(s),
        g = null != (t = null == h ? void 0 : h.width) ? t : c,
        E = null != (n = null == h ? void 0 : h.height) ? n : f;
    return (0, r.jsxs)(
        "svg",
        u(l({}, (0, a.Z)(m)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M11.9 9.16c-.54 0-.98.22-1.33.67a2.66 2.66 0 0 0-.53 1.71c0 .57.12 1.01.35 1.32.24.31.6.47 1.04.47.54 0 .99-.22 1.34-.67.35-.45.53-1.02.53-1.73 0-.57-.12-1.01-.36-1.31a1.22 1.22 0 0 0-1.03-.47v.01Z",
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M20.3 5.41h-.38c-.84 0-1.52-.65-1.52-1.46v-.3c0-.9-.77-1.65-1.71-1.65H7.3c-.94 0-1.7.74-1.7 1.65v.3c0 .81-.69 1.46-1.53 1.46H3.7c-.94 0-1.7.73-1.7 1.64v4.01c.05 3.11.94 4.69 2.92 6.63 1.8 1.77 6.65 4.31 7.06 4.31.42 0 5.28-2.54 7.07-4.31 1.98-1.95 2.92-3.53 2.92-6.63L22 7.05c0-.9-.76-1.64-1.7-1.64Zm-2.2 7.1a3.4 3.4 0 0 1-3.21 2.15 1.7 1.7 0 0 1-1.08-.33 1.3 1.3 0 0 1-.5-.84c-.2.35-.5.64-.91.86-.43.21-.89.31-1.39.31-.78 0-1.4-.27-1.88-.81a3.35 3.35 0 0 1-.69-2.24c0-.74.14-1.39.41-1.96.3-.57.68-1.01 1.17-1.32a3.05 3.05 0 0 1 1.7-.48c.49 0 .89.09 1.2.28.33.19.57.44.73.75l.15-.44a.56.56 0 0 1 .53-.38h.25c.34 0 .6.3.56.64l-.52 3.79a1.1 1.1 0 0 0-.02.22c0 .46.19.69.58.69.33 0 .64-.13.92-.4.3-.27.53-.64.69-1.11a4.5 4.5 0 0 0 .26-1.59c0-.87-.2-1.64-.6-2.29A3.98 3.98 0 0 0 14.8 6.5a5.49 5.49 0 0 0-2.45-.53 5.9 5.9 0 0 0-2.88.7 5.04 5.04 0 0 0-2 1.98 5.9 5.9 0 0 0-.75 2.99c0 .93.18 1.78.53 2.54.35.75.91 1.35 1.68 1.81.78.45 1.77.67 2.97.67a9.24 9.24 0 0 0 3.42-.65c.3-.13.67-.01.8.29l.1.24c.13.26.04.57-.22.7a7.7 7.7 0 0 1-1.66.56c-.83.19-1.7.28-2.56.28a7.42 7.42 0 0 1-3.72-.86 5.27 5.27 0 0 1-2.22-2.29 7.36 7.36 0 0 1-.72-3.29c0-1.44.32-2.7.96-3.75A6.5 6.5 0 0 1 8.7 5.44a7.8 7.8 0 0 1 3.65-.86c1.22 0 2.3.24 3.26.72.96.47 1.7 1.13 2.22 1.99.53.85.79 1.83.79 2.93a5.5 5.5 0 0 1-.48 2.34l-.03-.05Z",
                    className: _,
                }),
            ],
        }),
    );
};
