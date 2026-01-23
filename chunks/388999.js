n.d(t, {
    j: () => f,
});
var r = n(627968);
n(64700);
var i = n(996682),
    a = n(27989);

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

function o(e) {
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

function l(e, t) {
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

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function u(e, t) {
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
    if (((a = d(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let f = (e) => {
    var t, n;
    let { size: s = "md", width: l, height: d } = e,
        f = u(e, ["size", "width", "height"]),
        p = (0, a.J)(s),
        _ = null != (t = null == p ? void 0 : p.width) ? t : l,
        h = null != (n = null == p ? void 0 : p.height) ? n : d;
    return (0, r.jsxs)(
        "svg",
        c(o({}, (0, i.A)(f)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: _,
            height: h,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                (0, r.jsx)("path", {
                    fill: "#F3F3F4",
                    fillRule: "evenodd",
                    d: "M2.4 4h19.2c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2Z",
                    clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                    fill: "#009DDC",
                    fillRule: "evenodd",
                    d: "M15.48 9.54c.13-.78 0-1.3-.42-1.79-.46-.52-1.3-.75-2.37-.75H9.6c-.22 0-.41.16-.45.38l-1.29 8.2c-.02.16.1.31.26.31h1.92l-.13.84c-.02.14.09.27.23.27h1.62c.19 0 .35-.14.38-.33l.02-.08.3-1.93.02-.1c.03-.2.2-.34.39-.34h.24c1.57 0 2.8-.63 3.15-2.48.15-.76.07-1.4-.32-1.86a1.54 1.54 0 0 0-.45-.34Z",
                    clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                    fill: "#211D6F",
                    fillRule: "evenodd",
                    d: "M15.48 9.54c.13-.78 0-1.3-.42-1.79-.46-.52-1.3-.75-2.37-.75H9.6c-.22 0-.41.16-.45.38l-1.29 8.2c-.02.16.1.31.26.31h1.92l.48-3.06-.01.1a.44.44 0 0 1 .44-.38h.91c1.79 0 3.2-.72 3.6-2.83l.03-.18Z",
                    clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                    fill: "#1C3587",
                    fillRule: "evenodd",
                    d: "M11.03 9.55a.39.39 0 0 1 .39-.33h2.43a5.1 5.1 0 0 1 1.3.18c.12.04.23.09.33.14.13-.78 0-1.3-.42-1.79-.46-.52-1.3-.75-2.37-.75H9.6c-.22 0-.41.16-.44.38l-1.3 8.2c-.02.16.1.31.26.31h1.92l.49-3.06.51-3.28Z",
                    clipRule: "evenodd",
                }),
            ],
        }),
    );
};
