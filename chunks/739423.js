n.d(t, {
    r: () => f,
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
                    fill: "url(#a)",
                    d: "M15.54 13.13h1.02l.12-.01c.2-.04.36-.22.36-.46 0-.23-.17-.4-.36-.45H15.54v.92Z",
                }),
                (0, r.jsx)("path", {
                    fill: "url(#b)",
                    d: "M16.44 6.74c-.96 0-1.75.78-1.75 1.76v1.82h2.64c.56.03.98.32.98.82 0 .4-.28.73-.8.8v.02c.57.04 1 .36 1 .85 0 .53-.48.87-1.12.87h-2.71v3.57h2.57c.96 0 1.75-.78 1.75-1.76V6.74h-2.56Z",
                }),
                (0, r.jsx)("path", {
                    fill: "url(#c)",
                    d: "M16.91 11.26a.4.4 0 0 0-.35-.42h-1.02v.84h1.02a.4.4 0 0 0 .35-.42Z",
                }),
                (0, r.jsx)("path", {
                    fill: "url(#d)",
                    d: "M6.76 6.74C5.79 6.74 5 7.52 5 8.5v4.32c.5.24 1 .4 1.52.4.6 0 .93-.37.93-.87V10.3h1.5v2.03c0 .79-.49 1.43-2.16 1.43-1 0-1.8-.22-1.8-.22v3.69h2.57c.97 0 1.76-.78 1.76-1.76V6.74H6.76Z",
                }),
                (0, r.jsx)("path", {
                    fill: "url(#e)",
                    d: "M11.6 6.74c-.96 0-1.75.78-1.75 1.76v2.29c.44-.38 1.2-.62 2.45-.56.66.03 1.38.21 1.38.21v.74a3.33 3.33 0 0 0-1.33-.38c-.94-.07-1.51.4-1.51 1.2 0 .82.57 1.28 1.5 1.2a3.5 3.5 0 0 0 1.34-.38v.74s-.7.18-1.38.21c-1.24.06-2.01-.18-2.45-.56v4.05h2.57c.96 0 1.75-.78 1.75-1.76V6.74H11.6Z",
                }),
                (0, r.jsxs)("defs", {
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "a",
                            x1: "14.69",
                            x2: "19.01",
                            y1: "12.67",
                            y2: "12.67",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    stopColor: "#007940",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".23",
                                    stopColor: "#00873F",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".74",
                                    stopColor: "#40A737",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#5CB531",
                                }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "b",
                            x1: "14.69",
                            x2: "19.01",
                            y1: "11.99",
                            y2: "11.99",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    stopColor: "#007940",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".23",
                                    stopColor: "#00873F",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".74",
                                    stopColor: "#40A737",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#5CB531",
                                }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "c",
                            x1: "14.69",
                            x2: "19.01",
                            y1: "11.26",
                            y2: "11.26",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    stopColor: "#007940",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".23",
                                    stopColor: "#00873F",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".74",
                                    stopColor: "#40A737",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#5CB531",
                                }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "d",
                            x1: "5",
                            x2: "9.39",
                            y1: "11.99",
                            y2: "11.99",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    stopColor: "#1F286F",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".47",
                                    stopColor: "#004E94",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".83",
                                    stopColor: "#0066B1",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#006FBC",
                                }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "e",
                            x1: "9.82",
                            x2: "14.09",
                            y1: "11.99",
                            y2: "11.99",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", {
                                    stopColor: "#6C2C2F",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".17",
                                    stopColor: "#882730",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".57",
                                    stopColor: "#BE1833",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: ".86",
                                    stopColor: "#DC0436",
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#E60039",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    );
};
