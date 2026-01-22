n.d(t, {
    x: () => p,
});
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
    return (0, r.jsxs)(
        "svg",
        u(l({}, (0, a.A)(h)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: g,
            height: E,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M19.1 16.14v.15c-.04.36-.2.7-.46.95l-5.53 5.33-.11.1c-.6.47-1.45.44-2-.1l-2.72-2.61 1.44-1.44 1.62 1.56c.4.38 1.02.38 1.42 0l4-3.85c.2-.2.3-.46.3-.74v-4.32l2.04-2.03v7Zm-4.07-1.38c0 .21-.08.41-.23.55l-2.22 2.14a.76.76 0 0 1-1.06 0l-.37-.36 3.88-3.88v1.55ZM11 1.43c.6-.57 1.53-.57 2.12 0l2.66 2.56-1.44 1.44-1.57-1.51a1.02 1.02 0 0 0-1.42 0l-4 3.85c-.2.2-.3.46-.3.74v4.21L5 14.76v-6.9c0-.42.17-.81.47-1.1l5.52-5.33Zm.53 5.12a.76.76 0 0 1 1.06 0l.32.3-3.83 3.84V9.24c0-.21.09-.41.23-.55l2.22-2.14ZM22.7 1.3a1 1 0 0 1 0 1.4l-20 20a1 1 0 0 1-1.4-1.4l20-20a1 1 0 0 1 1.4 0Z",
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M19.1 16.14v.15c-.04.36-.2.7-.46.95l-5.53 5.33-.11.1c-.6.47-1.45.44-2-.1l-2.72-2.61 1.44-1.44 1.62 1.56c.4.38 1.02.38 1.42 0l4-3.85c.2-.2.3-.46.3-.74v-4.32l2.04-2.03v7Z",
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M15.03 14.76c0 .21-.08.4-.23.55l-2.22 2.14a.76.76 0 0 1-1.06 0l-.37-.36 3.88-3.88v1.55ZM11 1.43c.58-.57 1.52-.57 2.11 0l2.66 2.56-1.44 1.44-1.57-1.51a1.02 1.02 0 0 0-1.42 0l-4 3.85c-.2.2-.3.46-.3.74v4.21L5 14.76v-6.9c0-.42.17-.81.47-1.1l5.52-5.33Z",
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M11.52 6.55a.76.76 0 0 1 1.06 0l.32.3-3.83 3.84V9.24c0-.21.09-.41.23-.55l2.22-2.14ZM22.7 1.3a1 1 0 0 1 0 1.4l-20 20a1 1 0 0 1-1.4-1.4l20-20a1 1 0 0 1 1.4 0Z",
                    className: _,
                }),
            ],
        }),
    );
};
