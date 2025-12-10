n.d(t, { b: () => p });
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
    return (0, r.jsx)(
        "svg",
        u(l({}, (0, a.Z)(m)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                fillRule: "evenodd",
                d: "M12 1C5.94 1 1 5.94 1 12s4.94 11 11 11 11-4.94 11-11S18.06 1 12 1Zm4.8 15.79a.68.68 0 0 1-.95.23c-2.57-1.58-5.8-1.93-9.62-1.06a.68.68 0 0 1-.3-1.33c4.17-.95 7.75-.54 10.64 1.22.32.2.42.62.22.94Zm1.33-2.98a.85.85 0 0 1-1.17.28c-2.94-1.81-7.43-2.34-10.91-1.28a.86.86 0 0 1-.5-1.63c3.98-1.2 8.92-.62 12.3 1.45.4.25.53.78.28 1.18Zm1.52-3.47c-.29.49-.92.65-1.4.36C14.72 8.6 8.9 8.41 5.53 9.44a1.02 1.02 0 1 1-.6-1.96C8.8 6.3 15.23 6.53 19.3 8.94c.5.29.65.92.36 1.4Z",
                clipRule: "evenodd",
                className: _,
            }),
        }),
    );
};
