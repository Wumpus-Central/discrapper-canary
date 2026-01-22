n.d(t, {
    u: () => p,
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
                d: "M11.83 1c1.6 0 3.12.35 4.5.99.83-.16 2.06-.2 3.69.28 4.36 1.26 3.81 3.4 3.03 3.32-.77-.08-.23-1.11-1.71-1.43-.7-.14-1.18.1-1.5.43a11.02 11.02 0 0 1 2.28 3.96c.4-.34.96-.73 1.4-.6.85.27-.49 1.63-.86 4.07A10.91 10.91 0 0 1 11.83 23 10.91 10.91 0 0 1 1 11.99C1 5.92 5.85 1 11.83 1Zm2.08 5.3c-.15.25-.28.52-.4.8-1.14-.17-2.3-.17-3.45 0a8.05 8.05 0 0 0-.4-.8c-1.07.18-2.12.5-3.1.95a12.54 12.54 0 0 0-2.24 8.53 12.5 12.5 0 0 0 3.81 1.91c.31-.41.59-.86.82-1.31a8.28 8.28 0 0 1-1.29-.62l.32-.23a8.97 8.97 0 0 0 7.62 0c.1.08.2.16.32.23-.41.25-.84.45-1.3.62.24.46.52.9.83 1.31a12.5 12.5 0 0 0 3.8-1.9c.32-3.24-.53-6.05-2.23-8.54-.99-.45-2.03-.77-3.1-.95h-.01Zm-4.63 4.75c.77 0 1.37.68 1.36 1.5-.01.84-.6 1.51-1.35 1.51-.75 0-1.36-.67-1.36-1.5s.59-1.5 1.35-1.5Zm5.01 0c.76 0 1.37.68 1.36 1.5-.02.84-.6 1.51-1.36 1.51-.74 0-1.35-.67-1.35-1.5s.59-1.5 1.35-1.5Z",
                className: _,
            }),
        }),
    );
};
