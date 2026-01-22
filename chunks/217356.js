n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(770178),
    l = n(765548),
    c = n(685073),
    u = n(534400),
    d = n(277150);

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

function p(e) {
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

function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e, t) {
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
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let E = i.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: a } = e,
        f = m(e, ["children", "isOverlay", "contextGuildId"]),
        [_, g] = i.useState({
            maskImage: "none",
        }),
        E = i.useRef(null),
        b = (0, l.A)(() => {
            var e, t, r, i;
            let a = null != (e = null == (r = y.current) ? void 0 : r.getBoundingClientRect()) ? e : null,
                s = null != (t = null == (i = E.current) ? void 0 : i.getBoundingClientRect()) ? t : null;
            if (n || null == a || null == s)
                return void g({
                    maskImage: "none",
                });
            let o = s.right - a.right,
                l = s.width - o;
            l > s.width
                ? g({
                      maskImage: "none",
                  })
                : g({
                      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(l, "px)"),
                  });
        }),
        y = (0, o.w)(b),
        O = (0, c.Wb)(f.userId, a);
    return (0, r.jsxs)("div", {
        className: s()(d.kL, n && d.ur),
        ref: y,
        children: [
            (0, r.jsx)("div", {
                className: d.QV,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: d.Qz,
                children: (0, r.jsx)("span", {
                    className: s()(d.Tm, !O && n && d.pN),
                    ref: E,
                    style: _,
                    children: (0, r.jsx)(
                        u.Ay,
                        h(p({}, f), {
                            contextGuildId: a,
                            className: s()(f.className, n && d.ZW),
                            disableGuildProfile: !0,
                        }),
                    ),
                }),
            }),
        ],
    });
});
