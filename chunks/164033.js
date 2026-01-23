n.d(t, {
    f: () => f,
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
                (0, r.jsx)("g", {
                    clipPath: "url(#a)",
                    children: (0, r.jsx)("path", {
                        fill: "#000",
                        d: "M19.27 13.55a.75.75 0 0 1-.74-.75c0-.42.33-.76.74-.76.42 0 .75.34.75.76 0 .41-.33.75-.75.75Zm-.2.8c.35 0 .8-.13 1.06-.66l.02.01c-.1.3-.1.46-.1.5v.07h.89v-2.95h-.9v.07c0 .04 0 .2.11.5h-.02c-.25-.52-.7-.65-1.06-.65-.86 0-1.46.67-1.46 1.56 0 .88.6 1.55 1.46 1.55Zm-3.02-3.11c-.4 0-.72.14-.98.66l-.02-.01c.1-.3.1-.46.1-.5v-.07h-.89v2.95h.92v-1.55c0-.41.24-.67.63-.67s.58.22.58.66v1.56h.92V12.4c0-.67-.53-1.15-1.26-1.15Zm-3.12.66-.02-.01c.1-.3.1-.46.1-.5v-.07h-.89v2.95h.92v-1.42c0-.41.23-.66.6-.66a1 1 0 0 1 .26.03v-.9c-.4-.09-.77.07-.97.58Zm-2.92 1.65a.75.75 0 0 1-.75-.75c0-.42.33-.76.75-.76.41 0 .74.34.74.76 0 .41-.33.75-.74.75Zm-.21.8c.35 0 .8-.13 1.06-.66l.02.01c-.1.3-.1.46-.1.5v.07h.89v-2.95h-.9v.07c0 .04 0 .2.11.5h-.02c-.25-.52-.7-.65-1.06-.65-.86 0-1.46.67-1.46 1.56 0 .88.6 1.55 1.46 1.55Zm-2.74-.08h.92V10h-.92v4.27ZM6.4 10h-.94c0 .76-.47 1.45-1.2 1.93l-.27.2V10H3v4.27h.98v-2.12l1.6 2.12h1.2l-1.55-2.02A2.7 2.7 0 0 0 6.39 10Z",
                    }),
                }),
                (0, r.jsx)("defs", {
                    children: (0, r.jsx)("clipPath", {
                        id: "a",
                        children: (0, r.jsx)("path", {
                            fill: "#fff",
                            d: "M3 10h18v4.35H3z",
                        }),
                    }),
                }),
            ],
        }),
    );
};
