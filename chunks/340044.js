n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(393903),
    l = n(448986),
    c = n(731722),
    u = n(172751),
    d = n(256099);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = i.memo(function (e) {
    var { children: t, isOverlay: n, contextGuildId: o } = e,
        f = m(e, ["children", "isOverlay", "contextGuildId"]);
    let [p, g] = i.useState({ maskImage: "none" }),
        E = i.useRef(null),
        b = (0, l.Z)(() => {
            var e, t, r, i;
            let o = null != (r = null == (e = y.current) ? void 0 : e.getBoundingClientRect()) ? r : null,
                a = null != (i = null == (t = E.current) ? void 0 : t.getBoundingClientRect()) ? i : null;
            if (n || null == o || null == a) return void g({ maskImage: "none" });
            let s = a.right - o.right,
                l = a.width - s;
            if (l > a.width) return void g({ maskImage: "none" });
            g({ maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(l, "px)") });
        }),
        y = (0, s.y)(b),
        O = (0, c.yF)(f.userId, o);
    return (0, r.jsxs)("div", {
        className: a()(d.container, n && d.isOverlayContainer),
        ref: y,
        children: [
            (0, r.jsx)("div", {
                className: d.usernameContainer,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: d.chipletParent,
                children: (0, r.jsx)("span", {
                    className: a()(d.chipletContainer, !O && n && d.noPadding),
                    ref: E,
                    style: p,
                    children: (0, r.jsx)(
                        u.ZP,
                        h(_({}, f), {
                            contextGuildId: o,
                            className: a()(f.className, n && d.isOverlayTag),
                            disableGuildProfile: !0,
                        }),
                    ),
                }),
            }),
        ],
    });
});
