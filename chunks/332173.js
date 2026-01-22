n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(317097),
    l = n(397927),
    c = n(232042),
    u = n(189153);

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
let g = (e) => {
    let {
            ref: t,
            children: n,
            className: a,
            color: d,
            roleColors: p,
            iconType: m,
            onMouseEnter: g,
            onMouseLeave: E,
        } = e,
        b = h(e, ["ref", "children", "className", "color", "roleColors", "iconType", "onMouseEnter", "onMouseLeave"]),
        [y, O] = i.useState(!1),
        { gradientStyle: A, gradientClassname: v } = (0, l.v5K)({
            colorStrings: null != p ? p : null,
            roleStyle: "username",
            animateGradient: y,
        }),
        S = i.useCallback(
            (e) => {
                O(!0), null == g || g(e);
            },
            [O, g],
        ),
        I = i.useCallback(
            (e) => {
                O(!1), null == E || E(e);
            },
            [O, E],
        ),
        T = {};
    return (
        null != d &&
            (T = {
                color: (0, o.Hl)(d),
                backgroundColor: y ? (0, o.gq)(d, 0.3) : (0, o.gq)(d, 0.1),
            }),
        (0, r.jsx)(
            l.DUT,
            _(f({}, b), {
                innerRef: t,
                tag: "span",
                className: s()(a, {
                    [u.i]: !0,
                    interactive: b.onClick,
                }),
                onMouseEnter: S,
                onMouseLeave: I,
                style: T,
                tabIndex: null != b.onClick ? 0 : -1,
                children:
                    null != m
                        ? (0, r.jsx)(c.A, {
                              iconType: m,
                              children: n,
                          })
                        : null != p
                          ? (0, r.jsx)("span", {
                                style: f({}, A),
                                className: v,
                                children: n,
                            })
                          : n,
            }),
        )
    );
};
