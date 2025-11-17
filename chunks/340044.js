n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(393903),
    l = n(448986),
    c = n(731722),
    u = n(172751),
    d = n(356326);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = i.memo(function (e) {
    var { children: t, isOverlay: n, contextGuildId: a } = e,
        f = m(e, ["children", "isOverlay", "contextGuildId"]);
    let [p, g] = i.useState({ maskImage: "none" }),
        E = i.useRef(null),
        b = (0, l.Z)(() => {
            var e, t, r, i;
            let a = null != (r = null == (e = y.current) ? void 0 : e.getBoundingClientRect()) ? r : null,
                o = null != (i = null == (t = E.current) ? void 0 : t.getBoundingClientRect()) ? i : null;
            if (n || null == a || null == o) return void g({ maskImage: "none" });
            let s = o.right - a.right,
                l = o.width - s;
            if (l > o.width) return void g({ maskImage: "none" });
            g({ maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(l, "px)") });
        }),
        y = (0, s.y)(b),
        O = (0, c.yF)(f.userId, a);
    return (0, r.jsxs)("div", {
        className: o()(d.container, n && d.isOverlayContainer),
        ref: y,
        children: [
            (0, r.jsx)("div", {
                className: d.usernameContainer,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: d.chipletParent,
                children: (0, r.jsx)("span", {
                    className: o()(d.chipletContainer, !O && n && d.noPadding),
                    ref: E,
                    style: p,
                    children: (0, r.jsx)(
                        u.ZP,
                        h(_({}, f), {
                            contextGuildId: a,
                            className: o()(f.className, n && d.isOverlayTag),
                            disableGuildProfile: !0,
                        }),
                    ),
                }),
            }),
        ],
    });
});
