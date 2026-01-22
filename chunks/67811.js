n.d(t, { j: () => y }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(960488),
    l = n(397927),
    c = n(240248),
    u = n(796151);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
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
function _(e, t) {
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
function h(e, t) {
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
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let g = [18, 18, 16, 16, 14, 12, 10];
function E(e) {
    var t;
    return null != (t = g[e.length - 1]) ? t : g[g.length - 1];
}
function b(e, t) {
    return s()({
        [u.AN]: !0,
        [u.CW]: "always" === e,
        [u._W]: "on-hover" === e && t,
    });
}
let y = (e) => {
    let t,
        n,
        {
            backgroundStyle: a = "always",
            children: d,
            icon: p,
            name: m,
            ariaLabel: g,
            className: y,
            style: O,
            to: A,
            onClick: v,
            selected: S = !1,
        } = e,
        I = h(e, [
            "backgroundStyle",
            "children",
            "icon",
            "name",
            "ariaLabel",
            "className",
            "style",
            "to",
            "onClick",
            "selected",
        ]),
        T = (0, o.W6)();
    null == p && null != m && (n = E((t = (0, c.oN)(m))));
    let C = i.useCallback(
            (e) => {
                if (null == A);
                else if ("string" == typeof A) T.push(A);
                else {
                    let { pathname: e = "", state: t } = A;
                    T.push(e, t);
                }
                null != v && v(e);
            },
            [T, A, v],
        ),
        N = (0, l.rdh)(l.LU0.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsxs)(
        l.DUT,
        _(f({}, I), {
            onClick: C,
            className: s()(y, u.iE, { [u.wH]: S }),
            style: _(f({}, O), { fontSize: n }),
            focusProps: { enabled: !1 },
            children: [
                (0, r.jsx)(l.AC4, { children: null != g && "" !== g ? g : null != m ? m : "" }),
                null != t
                    ? (0, r.jsx)("div", {
                          className: s()(b(a, !1), u.q9),
                          "aria-hidden": !0,
                          children: t,
                      })
                    : null,
                null != p
                    ? (0, r.jsx)("img", {
                          className: u.Kk,
                          src: p,
                          alt: " ",
                          width: N,
                          height: N,
                          "aria-hidden": !0,
                      })
                    : null,
                null != d
                    ? (0, r.jsx)("div", {
                          className: b(a, !0),
                          children: d,
                      })
                    : null,
            ],
        }),
    );
};
