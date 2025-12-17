n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(866442),
    l = n(481060),
    c = n(779699),
    u = n(653821);
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = (e) => {
    var {
            ref: t,
            children: n,
            className: a,
            color: d,
            roleColors: p,
            iconType: h,
            onMouseEnter: g,
            onMouseLeave: E,
        } = e,
        b = m(e, ["ref", "children", "className", "color", "roleColors", "iconType", "onMouseEnter", "onMouseLeave"]);
    let [y, O] = i.useState(!1),
        { gradientStyle: v, gradientClassname: S } = (0, l.Icv)({
            colorStrings: null != p ? p : null,
            roleStyle: "username",
            animateGradient: y,
        }),
        I = i.useCallback(
            (e) => {
                O(!0), null == g || g(e);
            },
            [O, g],
        ),
        T = i.useCallback(
            (e) => {
                O(!1), null == E || E(e);
            },
            [O, E],
        ),
        C = {};
    return (
        null != d &&
            (C = {
                color: (0, s.Rf)(d),
                backgroundColor: y ? (0, s.br)(d, 0.3) : (0, s.br)(d, 0.1),
            }),
        (0, r.jsx)(
            l.P3F,
            _(f({}, b), {
                innerRef: t,
                tag: "span",
                className: o()(a, {
                    [u.wrapper]: !0,
                    interactive: b.onClick,
                }),
                onMouseEnter: I,
                onMouseLeave: T,
                style: C,
                tabIndex: null != b.onClick ? 0 : -1,
                children:
                    null != h
                        ? (0, r.jsx)(c.Z, {
                              iconType: h,
                              children: n,
                          })
                        : null != p
                          ? (0, r.jsx)("span", {
                                style: f({}, v),
                                className: S,
                                children: n,
                            })
                          : n,
            }),
        )
    );
};
