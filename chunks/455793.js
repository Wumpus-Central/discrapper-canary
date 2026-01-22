n.d(t, { t: () => p });
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(996682),
    s = n(27989);
function o(e, t, n) {
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
                o(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let p = (e) => {
    var t, n;
    let { size: o = "md", width: c, height: f, color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT, colorClass: _ = "" } = e,
        h = d(e, ["size", "width", "height", "color", "colorClass"]),
        m = (0, s.J)(o),
        g = null != (t = null == m ? void 0 : m.width) ? t : c,
        E = null != (n = null == m ? void 0 : m.height) ? n : f;
    return (0, r.jsx)(
        "svg",
        u(l({}, (0, a.A)(h)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof p ? p : p.css,
                fillRule: "evenodd",
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.03 13.7c.5.3 1.1.45 1.75.45.64 0 1.19-.13 1.66-.4.47-.25.85-.63 1.11-1.13l-1.14-.89a1.83 1.83 0 0 1-1.63 1.03 1.7 1.7 0 0 1-1.6-1.08 3.2 3.2 0 0 1-.25-1.3c0-.5.08-.94.24-1.3.16-.36.38-.63.67-.81a1.75 1.75 0 0 1 1.9 0c.28.18.5.43.67.75l1.14-.89c-.54-1.01-1.46-1.52-2.77-1.52-.66 0-1.24.15-1.75.46-.51.3-.91.73-1.2 1.3a4.39 4.39 0 0 0-.43 2c0 .78.14 1.45.43 2.01.29.57.69 1 1.2 1.32Zm6.74 0c.51.3 1.1.45 1.76.45.63 0 1.19-.13 1.66-.4.47-.25.84-.63 1.1-1.13l-1.14-.89a1.83 1.83 0 0 1-1.62 1.03 1.7 1.7 0 0 1-1.6-1.08 3.2 3.2 0 0 1-.25-1.3c0-.5.08-.94.24-1.3a1.7 1.7 0 0 1 1.6-1.1 1.86 1.86 0 0 1 1.63 1.03l1.15-.88c-.54-1.01-1.46-1.52-2.77-1.52-.66 0-1.25.15-1.76.46-.5.3-.9.73-1.2 1.3a4.39 4.39 0 0 0-.42 2c0 .78.14 1.45.43 2.01.28.57.68 1 1.2 1.32Z",
                clipRule: "evenodd",
                className: _,
            }),
        }),
    );
};
