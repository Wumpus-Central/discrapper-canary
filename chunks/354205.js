n.d(t, {
    P: () => f,
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
                (0, r.jsxs)("g", {
                    clipPath: "url(#a)",
                    children: [
                        (0, r.jsx)("path", {
                            fill: "#C06",
                            d: "M9.3 7.96v8.74h3.8c3.46 0 4.95-1.95 4.95-4.7 0-2.65-1.5-4.7-4.95-4.7H9.95a.66.66 0 0 0-.66.66Z",
                        }),
                        (0, r.jsx)("path", {
                            fill: "#000",
                            d: "M6.51 6.33a.66.66 0 0 0-.66.66V17a.66.66 0 0 0 .66.66h6.15c4.11 0 6.38-2.02 6.38-5.68 0-4.93-4-5.66-6.38-5.66H6.51ZM12.66 18H6.51a.99.99 0 0 1-.99-.99V7a.99.99 0 0 1 1-.99h6.14c5.83 0 6.7 3.75 6.7 5.99 0 3.87-2.38 6.01-6.7 6.01Z",
                        }),
                        (0, r.jsx)("path", {
                            fill: "#fff",
                            d: "M10.6 12.51a.6.6 0 0 0 .2-.03.42.42 0 0 0 .16-.1.53.53 0 0 0 .12-.2 1.23 1.23 0 0 0 .01-.58.57.57 0 0 0-.1-.22.45.45 0 0 0-.18-.13.74.74 0 0 0-.29-.05h-.33v1.31h.41Zm.03-1.7c.14 0 .26.02.38.07a.82.82 0 0 1 .5.51c.05.13.07.28.07.45 0 .16-.02.3-.06.42a.93.93 0 0 1-.17.34.83.83 0 0 1-.3.22 1 1 0 0 1-.42.08h-.9V10.8h.9Zm2.82 0v.39h-1.1v.44h1V12h-1v.51h1.12v.39H11.9V10.8h1.56Zm1.6 1.28-.27-.76-.28.76h.55Zm-.03-1.28.78 2.09h-.48l-.15-.47h-.79l-.16.47h-.46l.79-2.09h.47Zm1.53 0v1.7h1.02v.39h-1.48V10.8h.46Z",
                        }),
                        (0, r.jsx)("path", {
                            fill: "#000",
                            d: "M8.54 11.86a.96.96 0 1 1-1.93 0 .96.96 0 0 1 1.93 0ZM8.3 16.7c-.8 0-1.46-.65-1.46-1.46V14.1a.73.73 0 1 1 1.46 0v2.6Z",
                        }),
                    ],
                }),
                (0, r.jsx)("defs", {
                    children: (0, r.jsx)("clipPath", {
                        id: "a",
                        children: (0, r.jsx)("path", {
                            fill: "#fff",
                            d: "M5.52 6h13.95v12H5.52z",
                        }),
                    }),
                }),
            ],
        }),
    );
};
