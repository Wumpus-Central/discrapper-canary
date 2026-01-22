n.d(t, {
    _: () => p,
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
                    d: "M13.63 2.45a1.23 1.23 0 0 1 2.39.61l-1.91 8.17.67.26 2.78-7.4a1.17 1.17 0 0 1 2.2.75l-2.12 6.78c-.1.34-.4.6-.73.7a7 7 0 0 0-4.42 9.24c.16.41-.09.89-.53.89a7.47 7.47 0 0 1-7.14-5.28l-1.26-4.11a2.1 2.1 0 0 0-.16-.37l-1.33-2.5a.61.61 0 0 1 .05-.65c.43-.6 1.24-.8 1.9-.47l.33.16c.82.4 1.47 1.08 1.85 1.9l.66 1.49c.18.38.74.3.8-.1l.49-3 1.07-6.85a1.26 1.26 0 0 1 2.49.34l-.83 6.97.6.23 2.15-7.76Zm6.1 6.38a1.19 1.19 0 0 1 2.17.96l-.7 1.66c-.2.46-.7.7-1.2.62a7 7 0 0 0-1-.07c-.33 0-.58-.34-.44-.65l1.17-2.52Z",
                    fill: "string" == typeof p ? p : p.css,
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M15.46 15.46a5 5 0 0 1 7.07 0 5 5 0 0 1-7.07 7.07 5 5 0 0 1 0-7.07Zm2.25 6.25a3 3 0 0 0 4-4l-4 4Zm2.58-5.42a3 3 0 0 0-4 4l4-4Z",
                    clipRule: "evenodd",
                    fill: "string" == typeof p ? p : p.css,
                    className: _,
                }),
            ],
        }),
    );
};
