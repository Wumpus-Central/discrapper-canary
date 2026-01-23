n.d(t, {
    y: () => f,
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
                    fill: "#FF5F00",
                    d: "M14.16 8.06H9.84v7.77h4.32V8.06Z",
                }),
                (0, r.jsx)("path", {
                    fill: "#EB001B",
                    d: "M10.11 11.94c0-1.5.7-2.95 1.88-3.88a4.94 4.94 0 1 0 .02 7.77 4.95 4.95 0 0 1-1.9-3.89Z",
                }),
                (0, r.jsx)("path", {
                    fill: "#F79E1B",
                    d: "M20 11.94a4.94 4.94 0 0 1-8 3.89 4.95 4.95 0 0 0 0-7.77 4.92 4.92 0 0 1 8 3.88Z",
                }),
            ],
        }),
    );
};
