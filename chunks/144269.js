n.d(t, { u: () => p });
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
        { size: s = "md", width: c, height: f, color: p = i.Z.colors.INTERACTIVE_NORMAL, colorClass: _ = "" } = e,
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
                    d: "M15.5 18.08a.74.74 0 0 1 1.04 1.04l-.57.58a1.7 1.7 0 0 0 2.4 2.4l.57-.58a.74.74 0 0 1 1.04 1.04l-.58.57a3.17 3.17 0 0 1-4.47-4.47l.57-.58Z",
                    fill: "string" == typeof p ? p : p.css,
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M15.49 2.43c.34-.34.85-.5 1.35-.4l2.94.63c.7.15 1.19.77 1.19 1.47 0 .17.08.35.24.43.55.28.9.8 1.04 1.41.25 1.08.63 3.07.73 5.78 0 .37-.37.62-.72.53a4.94 4.94 0 0 0-4.76 1.28l-1.74 1.74c-.22.22-.6.17-.9.05-.21-.1-.46-.12-.7-.06-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.11-1 .1-1.23.55l-1.76 3.51A3.1 3.1 0 0 1 1 17.97v-4.9c0-3.39.46-5.86.75-7.1.15-.6.49-1.13 1.04-1.41a.47.47 0 0 0 .24-.43c0-.7.48-1.32 1.2-1.47l2.93-.63c.5-.1 1 .06 1.35.4.36.34.79.71 1.28.69a42.42 42.42 0 0 1 4.42 0c.5.02.92-.35 1.28-.7ZM6 6.06a1 1 0 0 0-1 1v.5a.5.5 0 0 1-.5.5H4a1 1 0 0 0 0 2h.5c.28 0 .5.23.5.5v.5a1 1 0 0 0 2 0v-.5c0-.27.22-.5.5-.5H8a1 1 0 0 0 0-2h-.5a.5.5 0 0 1-.5-.5v-.5a1 1 0 0 0-1-1Zm9.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm3-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
                    clipRule: "evenodd",
                    fill: "string" == typeof p ? p : p.css,
                    className: _,
                }),
                (0, r.jsx)("path", {
                    d: "M19.43 17.58a.74.74 0 0 1 1.05 1.05l-1.91 1.91a.74.74 0 0 1-1.05-1.04l1.91-1.92Z",
                    fill: "string" == typeof p ? p : p.css,
                    className: _,
                }),
                (0, r.jsx)("path", {
                    d: "M18.6 14.99a3.17 3.17 0 0 1 4.47 4.48l-.57.57A.74.74 0 0 1 21.46 19l.57-.57a1.7 1.7 0 0 0-2.4-2.4l-.57.58a.74.74 0 0 1-1.04-1.05l.57-.57Z",
                    fill: "string" == typeof p ? p : p.css,
                    className: _,
                }),
            ],
        }),
    );
};
