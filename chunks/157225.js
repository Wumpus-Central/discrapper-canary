n.d(t, {
    N: () => p,
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
                d: "M12 10.1a2.92 2.92 0 0 1 2.31 1.14h.02l3.95 4.44a3.38 3.38 0 0 1-.1 4.71 3.4 3.4 0 0 1-3.65.75 9.4 9.4 0 0 0-2.49-.62h-.1c-.85.1-1.69.3-2.48.63a3.38 3.38 0 0 1-3.74-5.46v-.01l3.97-4.45h.01A2.93 2.93 0 0 1 12 10.1ZM1.82 8.32c1.08-.9 2.85-.54 3.95.8 1.1 1.32 1.1 3.12.03 4.01-1.08.9-2.85.54-3.95-.79-1.1-1.32-1.1-3.13-.03-4.02Zm16.41.8c1.1-1.34 2.86-1.69 3.95-.8 1.08.9 1.06 2.7-.03 4.03-1.1 1.32-2.87 1.68-3.95.79-1.08-.9-1.07-2.7.03-4.03ZM7.86 2.68c1.35-.37 2.81.69 3.26 2.35.44 1.67-.3 3.31-1.65 3.68-1.35.36-2.81-.7-3.26-2.36-.44-1.67.3-3.31 1.65-3.67Zm5.02 2.35c.45-1.66 1.9-2.72 3.26-2.35 1.36.36 2.1 2 1.65 3.67-.45 1.66-1.9 2.72-3.26 2.36-1.36-.37-2.1-2.01-1.65-3.68Z",
                className: _,
            }),
        }),
    );
};
