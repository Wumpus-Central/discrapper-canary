n.d(t, {
    o: () => f,
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
                    fill: "#383536",
                    fillRule: "evenodd",
                    d: "M16.97 12.1c.49.22.83.7.83 1.25 0 .78-.68 1.41-1.5 1.41h-2.32c-.22 0-.4-.17-.4-.37V10c0-.22.18-.4.4-.4h1.92a1.48 1.48 0 0 1 1.07 2.5Zm-1.73-.37h.73a.7.7 0 0 0 .6-.7.7.7 0 0 0-.7-.7h-1.49V14h1.88c.4 0 .73-.32.73-.72 0-.4-.33-.72-.73-.72h-1.02a.4.4 0 0 1-.41-.41c0-.23.18-.4.4-.4Z",
                    clipRule: "evenodd",
                }),
                (0, r.jsx)("path", {
                    fill: "#383536",
                    d: "M13.22 14.32a.46.46 0 1 1-.93.1l-.38-3.5-1.35 3.42v.02h-.01v.02h-.01v.01a.46.46 0 0 1-.1.13.46.46 0 0 1-.09.06l-.02.01h-.01v.01h-.02l-.02.01a.46.46 0 0 1-.14.03h-.03a.46.46 0 0 1-.15-.03h-.01l-.01-.01h-.02l-.01-.01H9.9v-.01a.47.47 0 0 1-.08-.05l-.01-.01-.01-.02h-.02l-.01-.02a.46.46 0 0 1-.05-.08l-.01-.02v-.01H9.7v-.02L8.33 10.9l-.38 3.5a.47.47 0 1 1-.93-.09l.45-4.13a.77.77 0 0 1 .67-.69H8.29c.05 0 .1 0 .14.02.24.05.45.22.54.46l1.15 2.92 1.15-2.92a.76.76 0 0 1 .69-.48.78.78 0 0 1 .14 0 .77.77 0 0 1 .67.68l.45 4.14Z",
                }),
                (0, r.jsx)("path", {
                    fill: "#1766AC",
                    fillRule: "evenodd",
                    d: "M17 17.54c1.05 0 1.06-1.12.96-1.68-.06-.37-.7-.37-.76 0v.43c0 .2-.17.36-.36.36H7.99a.36.36 0 0 1-.36-.36v-.43c-.07-.37-.7-.37-.76 0-.1.56-.1 1.68.96 1.68H17ZM16.24 6.8c.5 0 .9.43.9.96v.46c0 .65-.87.65-.87 0v-.25a.3.3 0 0 0-.3-.29H8.84a.3.3 0 0 0-.29.3v.24c0 .64-.84.64-.84.01v-.47c0-.53.41-.96.91-.96h7.62Z",
                    clipRule: "evenodd",
                }),
            ],
        }),
    );
};
