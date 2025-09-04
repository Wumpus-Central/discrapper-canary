n.d(t, { u: () => _ });
var r = n(951288);
n(647438);
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
                    d: "M15.5 17.86a.74.74 0 0 1 1.04 1.04l-.57.57a1.7 1.7 0 0 0 2.4 2.4l.57-.58a.74.74 0 0 1 1.04 1.05l-.58.57a3.17 3.17 0 0 1-4.47-4.48l.57-.57Z",
                    className: p,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof _ ? _ : _.css,
                    fillRule: "evenodd",
                    d: "M15.49 2.2c.34-.33.85-.5 1.35-.4l2.94.63c.7.15 1.19.78 1.19 1.47 0 .18.08.35.24.43.55.28.9.81 1.04 1.42.25 1.07.63 3.07.73 5.78 0 .36-.37.62-.72.52a4.94 4.94 0 0 0-4.76 1.29l-1.74 1.74c-.22.22-.6.17-.9.05-.21-.1-.46-.12-.7-.06-.57.13-1.36.27-2.16.27s-1.6-.14-2.16-.27c-.49-.12-1 .1-1.23.54l-1.76 3.52A3.1 3.1 0 0 1 1 17.75v-4.91c0-3.38.46-5.85.75-7.1.15-.6.49-1.13 1.04-1.4a.47.47 0 0 0 .24-.44c0-.7.48-1.32 1.2-1.47l2.93-.62c.5-.1 1 .06 1.35.4.36.34.79.7 1.28.68a42.43 42.43 0 0 1 4.42 0c.5.03.92-.34 1.28-.69ZM6 5.84a1 1 0 0 0-1 1v.5a.5.5 0 0 1-.5.5H4a1 1 0 0 0 0 2h.5c.28 0 .5.22.5.5v.5a1 1 0 0 0 2 0v-.5c0-.28.22-.5.5-.5H8a1 1 0 0 0 0-2h-.5a.5.5 0 0 1-.5-.5v-.5a1 1 0 0 0-1-1Zm9.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm3-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
                    clipRule: "evenodd",
                    className: p,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof _ ? _ : _.css,
                    d: "M19.43 17.36a.74.74 0 0 1 1.05 1.05l-1.91 1.9a.74.74 0 0 1-1.05-1.04l1.91-1.91Z",
                    className: p,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof _ ? _ : _.css,
                    d: "M18.6 14.77a3.17 3.17 0 0 1 4.47 4.47l-.57.58a.74.74 0 0 1-1.04-1.04l.57-.58a1.7 1.7 0 0 0-2.4-2.4l-.57.58a.74.74 0 0 1-1.04-1.04l.57-.57Z",
                    className: p,
                }),
            ],
        }),
    );
};
