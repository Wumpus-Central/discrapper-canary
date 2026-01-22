n.d(t, { E: () => p });
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
                d: "M10.93 15.17a5.95 5.95 0 0 1 5.92 3.4l.21.45a1.43 1.43 0 1 1-2.58 1.24l-.22-.45a3.07 3.07 0 0 0-2.39-1.8 3.4 3.4 0 0 0-.67 0 3.07 3.07 0 0 0-2.39 1.8l-.21.45a1.43 1.43 0 1 1-2.58-1.24l.21-.45a5.95 5.95 0 0 1 4.7-3.4ZM2.96 5.95c.36-.12.75-.1 1.1.06l.44.22a5.95 5.95 0 0 1 3.4 5.92 5.95 5.95 0 0 1-3.4 4.7l-.45.21c-.2.1-.4.14-.62.13a1.43 1.43 0 0 1-.62-2.72l.45-.21a3.07 3.07 0 0 0 1.8-2.4c.02-.22.02-.44 0-.66a3.07 3.07 0 0 0-1.8-2.4l-.45-.2a1.43 1.43 0 0 1 .15-2.65Zm16.6-.08a1.43 1.43 0 0 1 .7 2.72l-.45.21a3.07 3.07 0 0 0-1.8 2.4v.66a3.08 3.08 0 0 0 1.8 2.4l.45.2a1.43 1.43 0 0 1 .14 2.51 1.43 1.43 0 0 1-1.38.08l-.45-.21a5.94 5.94 0 0 1-3.4-5.92 5.95 5.95 0 0 1 3.4-4.7l.45-.21c.17-.08.35-.13.54-.14ZM15.3 2.08a1.43 1.43 0 0 1 1.77 1.97l-.22.45a5.95 5.95 0 0 1-5.91 3.4 5.95 5.95 0 0 1-4.7-3.4l-.21-.44A1.43 1.43 0 0 1 8.6 2.82l.21.44a3.07 3.07 0 0 0 2.4 1.8c.22.02.44.02.66 0a3.07 3.07 0 0 0 2.4-1.8l.2-.45c.17-.34.46-.6.82-.73Z",
                className: _,
            }),
        }),
    );
};
