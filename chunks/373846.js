n.d(t, {
    C: () => p,
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
                    fillRule: "evenodd",
                    d: "M6.94 12.1h-.83a.62.62 0 0 0-.62.63v3.04a.62.62 0 0 0 .62.63h2.7a.62.62 0 0 0 .62-.63v-3.05a.62.62 0 0 0-.62-.62h-.86V8.79h10.18a3.83 3.83 0 1 1 0 7.65h-1.45a5.32 5.32 0 0 1-1.02 1.73c-.44.44-.93.82-1.45 1.15a.45.45 0 0 0-.2.4 1.6 1.6 0 0 1-1.6 1.6H7.58a1.6 1.6 0 0 1-1.61-1.6.45.45 0 0 0-.2-.4 8.02 8.02 0 0 1-1.46-1.15C2.99 16.84 2.18 12.84 2 10.45A1.56 1.56 0 0 1 3.57 8.8h3.37v3.31Zm11.01-1.31a24.9 24.9 0 0 1-.63 3.65h.81a1.83 1.83 0 1 0 0-3.65h-.18Z",
                    clipRule: "evenodd",
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof p ? p : p.css,
                    d: "M13.88 2.5a1.03 1.03 0 0 1 1.06.98 2.86 2.86 0 0 1-1.58 2.5.64.64 0 0 0-.26.8 1 1 0 0 1-.96 1.31.98.98 0 0 1-.93-.64 2.65 2.65 0 0 1 1.11-3.18c.58-.36.62-.71.62-.73a.98.98 0 0 1 .94-1.03ZM11.07 0a1.03 1.03 0 0 1 1.06.97 2.86 2.86 0 0 1-1.58 2.5.64.64 0 0 0-.26.79 1 1 0 0 1-.94 1.34 1 1 0 0 1-.94-.66 2.65 2.65 0 0 1 1.1-3.18c.58-.35.62-.7.62-.73A.98.98 0 0 1 10.7.1a.98.98 0 0 1 .38-.09Z",
                    className: _,
                }),
            ],
        }),
    );
};
