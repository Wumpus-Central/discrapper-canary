n.d(t, {
    H: () => f,
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
                    fill: "#201D1C",
                    d: "m14.62 10.43.84 2.13.86-2.13h.66l-1.36 3.25h-.34l-1.34-3.25h.68ZM6.54 11.25c0 .17.1.26.48.4.7.25.9.48.9.98 0 .62-.44 1.04-1.09 1.04-.46 0-.8-.18-1.1-.6l.4-.38c.15.27.39.42.68.42.28 0 .48-.2.48-.45a.38.38 0 0 0-.18-.33c-.07-.03-.19-.1-.43-.18-.58-.2-.78-.43-.78-.86 0-.52.43-.91.99-.91.34 0 .66.12.93.35l-.33.42c-.16-.18-.3-.25-.5-.25-.26 0-.45.15-.45.35Z",
                }),
                (0, r.jsx)("path", {
                    fill: "#201D1C",
                    fillRule: "evenodd",
                    d: "M2 10.43h.9c1 0 1.7.65 1.7 1.59a1.59 1.59 0 0 1-1.7 1.58H2v-3.17Zm.78 2.63c.4 0 .65-.08.85-.25a1.09 1.09 0 0 0 0-1.59c-.2-.18-.45-.25-.85-.25h-.16v2.09h.16Z",
                    clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                    fill: "#201D1C",
                    d: "M4.89 13.6h.62v-3.17h-.62v3.17ZM8.12 12.02c0 .93.73 1.65 1.67 1.65.27 0 .5-.06.78-.19v-.72c-.25.24-.47.34-.75.34-.62 0-1.06-.45-1.06-1.09 0-.6.45-1.09 1.03-1.09.3 0 .52.1.78.36v-.73c-.28-.13-.5-.2-.76-.2-.94 0-1.69.75-1.69 1.67ZM17.26 13.6h1.75v-.54h-1.13v-.85h1.1v-.54h-1.1v-.7h1.13v-.54h-1.75v3.17Z",
                }),
                (0, r.jsx)("path", {
                    fill: "#201D1C",
                    fillRule: "evenodd",
                    d: "M21.46 11.36c0-.59-.41-.93-1.12-.93h-.92v3.17h.62v-1.28h.08l.85 1.28h.76l-1-1.34c.47-.1.73-.41.73-.9Zm-1.24.53h-.18v-.96h.19c.38 0 .6.16.6.47 0 .32-.22.49-.61.49Z",
                    clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                    fill: "#201D1C",
                    d: "M21.75 10.46c.06 0 .1.03.1.09v.02a.07.07 0 0 0 .03-.06c0-.05-.04-.08-.13-.08h-.03v.03h.03ZM21.72 10.59v-.13h-.06v.28h.06v-.1l.08.1h.08l-.09-.11c.03-.01.06-.03.06-.06a.18.18 0 0 1-.1.02h-.03Z",
                }),
                (0, r.jsx)("path", {
                    fill: "#201D1C",
                    fillRule: "evenodd",
                    d: "M21.76 10.36c-.13 0-.24.1-.24.24 0 .14.1.24.24.24.13 0 .24-.1.24-.24 0-.13-.1-.24-.24-.24Zm0 .44a.2.2 0 0 1-.2-.2c0-.1.1-.2.2-.2s.2.1.2.2c0 .11-.1.2-.2.2Z",
                    clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                    fill: "url(#a)",
                    d: "M12.38 13.8a1.77 1.77 0 1 1 0-3.55 1.77 1.77 0 0 1 0 3.54Z",
                }),
                (0, r.jsx)("defs", {
                    children: (0, r.jsxs)("radialGradient", {
                        id: "a",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientTransform: "matrix(-2.72642 -2.18115 1.701 -2.12624 13.6 12.98)",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            (0, r.jsx)("stop", {
                                stopColor: "#F08F14",
                            }),
                            (0, r.jsx)("stop", {
                                offset: ".8",
                                stopColor: "#E0481E",
                            }),
                            (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#661D14",
                            }),
                        ],
                    }),
                }),
            ],
        }),
    );
};
