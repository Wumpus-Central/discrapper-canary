n.d(t, { o: () => _ });
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
                    d: "m18.01 4.79-.04.04-2.18-.02a1.1 1.1 0 0 0-.77 1.87c.2.2.48.32.77.32h4.82a1.1 1.1 0 0 0 1.09-1.1V1.1a1.1 1.1 0 1 0-2.19 0v2.19l-.02.02a11.47 11.47 0 1 0-7.45 20.17v-.02a11.47 11.47 0 0 0 11.16-8.92 1.04 1.04 0 1 0-2.04-.46 9.39 9.39 0 1 1-3.15-9.29Z",
                    fill: "string" == typeof _ ? _ : _.css,
                    className: p,
                }),
                (0, r.jsx)("path", {
                    d: "M8.98 10.58c-.3.65-.84 1.01-1.64 1.1v-1.65c.35-.04.68-.17.99-.38.31-.22.53-.49.65-.8h1.48v6.9H8.98v-5.17Z",
                    fill: "string" == typeof _ ? _ : _.css,
                    className: p,
                }),
                (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M14.16 15.89c-.5 0-.94-.13-1.34-.39-.4-.27-.72-.67-.95-1.2a5.05 5.05 0 0 1-.35-2c0-.8.12-1.46.35-1.99.23-.54.55-.94.95-1.2.4-.27.85-.4 1.34-.4.5 0 .94.13 1.34.4.4.26.72.66.95 1.2.23.53.35 1.2.35 1.99 0 .8-.12 1.46-.35 2-.23.53-.55.93-.95 1.2-.4.26-.85.39-1.34.39Zm0-1.26c.4 0 .7-.18.9-.54.2-.37.3-.96.3-1.79 0-.83-.1-1.42-.3-1.78a.95.95 0 0 0-.9-.55c-.4 0-.71.18-.91.55a4 4 0 0 0-.29 1.78c0 .83.1 1.42.29 1.79.2.36.5.54.91.54Z",
                    clipRule: "evenodd",
                    fill: "string" == typeof _ ? _ : _.css,
                    className: p,
                }),
            ],
        }),
    );
};
