n.d(t, { L: () => p });
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
                d: "M3.75 5c.14 0 .25-.11.26-.25A3 3 0 0 1 7 2h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-2.99-2.75.27.27 0 0 0-.26-.25H3a1 1 0 1 1 0-2h.75c.14 0 .25-.11.25-.25v-.5a.25.25 0 0 0-.25-.25H3a1 1 0 1 1 0-2h.75c.14 0 .25-.11.25-.25v-.5a.25.25 0 0 0-.25-.25H3a1 1 0 1 1 0-2h.75c.14 0 .25-.11.25-.25v-.5a.25.25 0 0 0-.25-.25H3a1 1 0 0 1 0-2h.75c.14 0 .25-.11.25-.25v-.5A.25.25 0 0 0 3.75 7H3a1 1 0 0 1 0-2h.75ZM13 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 1a5 5 0 0 0-5 5 1 1 0 0 0 1 1c.16 0 .3-.11.35-.27.18-.64.42-1.24.64-1.74.11-.24.43-.15.4.12l-.13 1.34c-.03.3.2.55.5.55h4.49a.5.5 0 0 0 .5-.55l-.14-1.34c-.03-.27.29-.36.4-.12.22.5.46 1.1.64 1.74.04.16.19.27.35.27a1 1 0 0 0 1-1 5 5 0 0 0-5-5Z",
                clipRule: "evenodd",
                className: _,
            }),
        }),
    );
};
