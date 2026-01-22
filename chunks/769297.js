n.d(t, {
    F: () => p,
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
                d: "M12.79 20.97a1 1 0 0 1 .17 1.99 11.13 11.13 0 0 1-1.92 0 1 1 0 0 1 .17-2 9.11 9.11 0 0 0 1.58 0ZM5.45 19.62a1 1 0 0 1 1.39-.25 9 9 0 0 0 1.36.79 1 1 0 0 1-.85 1.81 11 11 0 0 1-1.66-.96 1 1 0 0 1-.24-1.4ZM17.16 19.37a1 1 0 1 1 1.15 1.64c-.52.37-1.08.69-1.66.96a1 1 0 0 1-.85-1.81 9 9 0 0 0 1.36-.79ZM2.51 15.32a1 1 0 0 1 1.33.48 9 9 0 0 0 .79 1.36 1 1 0 1 1-1.64 1.15 11 11 0 0 1-.96-1.66 1 1 0 0 1 .48-1.33ZM20.16 15.8a1 1 0 0 1 1.81.85c-.27.58-.6 1.14-.96 1.66a1 1 0 1 1-1.64-1.15 9 9 0 0 0 .79-1.36ZM8.4 14.01a1 1 0 0 1 .63.35l.07.09.12.17a3.51 3.51 0 0 0 5.7-.17 1.01 1.01 0 0 1 1.03-.43 1 1 0 0 1 .79 1.18c-.03.13-.08.26-.15.37a5.52 5.52 0 0 1-6.95 1.91 5.51 5.51 0 0 1-2.02-1.64l-.19-.27-.05-.1a1.01 1.01 0 0 1 .33-1.3 1 1 0 0 1 .7-.16ZM2.12 10.13a1 1 0 0 1 .91 1.08 9.13 9.13 0 0 0 0 1.58 1 1 0 0 1-1.99.17 11.13 11.13 0 0 1 0-1.92 1 1 0 0 1 1.08-.9ZM21.88 10.13a1 1 0 0 1 1.08.91 11.13 11.13 0 0 1 0 1.92 1 1 0 0 1-2-.17 9.11 9.11 0 0 0 0-1.58 1 1 0 0 1 .92-1.08ZM6.21 10.03a1.5 1.5 0 0 1 1.8 1.48A1.51 1.51 0 0 1 6.5 13a1.5 1.5 0 0 1-1.48-1.8 1.51 1.51 0 0 1 1.18-1.18ZM17.51 10a1.5 1.5 0 0 1 1.5 1.5 1.51 1.51 0 0 1-.92 1.4 1.5 1.5 0 0 1-2.05-1.1 1.52 1.52 0 0 1 1.47-1.8ZM2.99 5.69a1 1 0 0 1 1.64 1.15 9 9 0 0 0-.79 1.36 1 1 0 0 1-1.81-.85 11 11 0 0 1 .96-1.66ZM19.62 5.45a1 1 0 0 1 1.4.24 11 11 0 0 1 .95 1.66 1 1 0 0 1-1.81.85 9 9 0 0 0-.79-1.36 1 1 0 0 1 .25-1.4ZM7.35 2.03a1 1 0 0 1 .85 1.81 9 9 0 0 0-1.36.79 1 1 0 1 1-1.15-1.64 11 11 0 0 1 1.66-.96ZM15.32 2.51a1 1 0 0 1 1.33-.48 11 11 0 0 1 1.66.96 1 1 0 1 1-1.15 1.64 9 9 0 0 0-1.36-.79 1 1 0 0 1-.48-1.33ZM12 1c.32 0 .64.01.96.04a1 1 0 0 1-.17 2 9.13 9.13 0 0 0-1.58 0 1 1 0 0 1-.17-2c.32-.03.64-.04.96-.04Z",
                className: _,
            }),
        }),
    );
};
