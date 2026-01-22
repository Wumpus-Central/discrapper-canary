n.d(t, {
    A: () => p,
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
    let {
            size: o = "md",
            width: c,
            height: f,
            secondaryColor: p = i.A.colors.ICON_FEEDBACK_NOTIFICATION,
            secondaryColorClass: _ = "",
            color: h = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: m = "",
        } = e,
        g = d(e, ["size", "width", "height", "secondaryColor", "secondaryColorClass", "color", "colorClass"]),
        E = (0, s.J)(o),
        b = null != (t = null == E ? void 0 : E.width) ? t : c,
        y = null != (n = null == E ? void 0 : E.height) ? n : f;
    return (0, r.jsxs)(
        "svg",
        u(l({}, (0, a.A)(g)), {
            xmlns: "http://www.w3.org/2000/svg",
            width: b,
            height: y,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                (0, r.jsx)("circle", {
                    cx: "19",
                    cy: "19",
                    r: "5",
                    fill: "string" == typeof p ? p : p.css,
                    className: _,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof h ? h : h.css,
                    d: "M5.52 2a3 3 0 0 0-2.89 2.19l-.55 1.98A3.02 3.02 0 0 0 4.98 10h.05A2.97 2.97 0 0 0 8 7.03V3a1 1 0 0 0-1-1H5.52ZM9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4.03a2.99 2.99 0 0 1-3.3 2.95A3 3 0 0 1 9 7V3ZM17 2a1 1 0 0 0-1 1V7.03A2.95 2.95 0 0 0 18.96 10h.06c2 0 3.44-1.9 2.9-3.83l-.56-1.98A3 3 0 0 0 18.48 2H17Z",
                    className: m,
                }),
                (0, r.jsx)("path", {
                    fill: "string" == typeof h ? h : h.css,
                    d: "M20.35 12.13c.33.06.65-.18.65-.51v-.2c0-.18-.2-.3-.37-.24a4.46 4.46 0 0 1-4.94-1.1.28.28 0 0 0-.4 0 4.49 4.49 0 0 1-6.58 0 .28.28 0 0 0-.4 0 4.45 4.45 0 0 1-4.94 1.1c-.17-.07-.37.06-.37.24V19a3 3 0 0 0 3 3h2.75c.14 0 .25-.11.25-.25V16c0-1.1.9-2 2-2h2a2 2 0 0 1 .55.08c.21.06.45.02.6-.13a6.98 6.98 0 0 1 6.2-1.82Z",
                    className: m,
                }),
            ],
        }),
    );
};
