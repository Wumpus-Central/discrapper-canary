n.d(t, {
    P: () => S,
    r: () => v,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(756715),
    u = n(573385),
    d = n(607070),
    f = n(865672),
    p = n(109161),
    _ = n(836484);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: a,
            roleName: l,
            colorStrings: c,
            dotAlignment: d = "left",
            className: m,
            nameTextClassName: g,
            animateRoleGradient: E,
            variant: b,
            displayNameStylesFont: y = "",
        } = e,
        O = i.useContext(u.d),
        [v, S] = i.useState(!1),
        I = i.useCallback(() => {
            S(!0);
        }, []),
        T = i.useCallback(() => {
            S(!1);
        }, []),
        A = "username" === t,
        C = "dot" === t,
        N = null != c && null != c.primaryColor && null != c.secondaryColor,
        P = A && N,
        {
            gradientStyle: R,
            gradientClassname: D,
            gradientGlowClassname: w,
        } = (0, f.Ic)({
            colorStrings: c,
            roleStyle: "username",
            animateGradient: E || v || (null == O ? void 0 : O.animate),
        }),
        x = (0, f.EJ)(n),
        L = {
            className: o()(_.name, g, y, {
                [_.username]: A,
                [D]: P,
            }),
            children: x,
        },
        j = {
            className: o()(_.nameGlow, w, y),
            children: n,
        },
        M = C
            ? (0, r.jsx)(p.F, {
                  color: a,
                  colors: N ? c : null,
                  name: l,
                  className: "left" === d ? _.roleDotLeft : _.roleDotRight,
                  hoverOverride: E || v || (null == O ? void 0 : O.animate),
              })
            : null;
    return (0, r.jsxs)("span", {
        className: o()(m, _.container),
        onMouseEnter: I,
        onMouseLeave: T,
        children: [
            "left" === d && M,
            (0, r.jsxs)("span", {
                className: _.nameContainer,
                style: h({ color: A && !N && null != a ? a : void 0 }, P ? R : {}),
                children: [
                    null != b
                        ? (0, r.jsx)(
                              s.xvT,
                              h(
                                  {
                                      tag: "span",
                                      color: "currentColor",
                                      variant: b,
                                  },
                                  L,
                              ),
                          )
                        : (0, r.jsx)("span", h({}, L)),
                    P &&
                        (null != b
                            ? (0, r.jsx)(
                                  s.xvT,
                                  h(
                                      {
                                          tag: "span",
                                          color: "currentColor",
                                          "aria-hidden": !0,
                                          variant: b,
                                      },
                                      j,
                                  ),
                              )
                            : (0, r.jsx)("span", h({ "aria-hidden": !0 }, j))),
                ],
            }),
            "right" === d && M,
        ],
    });
}
function v(e) {
    let {
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: a,
            className: o,
            colorStrings: s,
            animateRoleGradient: u,
            ref: f,
        } = e,
        p = b(e, [
            "name",
            "colorString",
            "roleName",
            "dotAlignment",
            "className",
            "colorStrings",
            "animateRoleGradient",
            "ref",
        ]),
        _ = (0, l.e7)([d.Z], () => d.Z.roleStyle),
        m = "username" === _,
        g = (0, r.jsx)(O, {
            roleStyle: _,
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: a,
            className: o,
            colorStrings: s,
            animateRoleGradient: u,
        }),
        y = m && null != n ? { color: n } : void 0;
    return (0, r.jsx)(
        c.Anchor,
        E(h({}, p), {
            children: g,
            style: y,
            ref: f,
        }),
    );
}
function S(e) {
    let t = (0, l.e7)([d.Z], () => d.Z.roleStyle);
    return (0, r.jsx)(O, E(h({}, e), { roleStyle: t }));
}
