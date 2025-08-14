n.d(t, {
    P: () => I,
    r: () => v,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(442837),
    c = n(756715),
    u = n(573385),
    d = n(607070),
    f = n(865672),
    _ = n(109161),
    p = n(836484);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: o,
            roleName: l,
            colorStrings: c,
            dotAlignment: d = "left",
            className: h,
            nameTextClassName: g,
            animateRoleGradient: E,
            variant: b,
            displayNameStylesFont: y = "",
        } = e,
        O = i.useContext(u.d),
        [v, I] = i.useState(!1),
        T = i.useCallback(() => {
            I(!0);
        }, []),
        S = i.useCallback(() => {
            I(!1);
        }, []),
        A = "username" === t,
        N = "dot" === t,
        C = null != c && null != c.primaryColor && null != c.secondaryColor,
        R = A && C,
        {
            gradientStyle: P,
            gradientClassname: w,
            gradientGlowClassname: D,
        } = (0, f.Ic)({
            colorStrings: c,
            roleStyle: "username",
            animateGradient: E || v || (null == O ? void 0 : O.animate),
        }),
        L = (0, f.EJ)(n),
        x = {
            className: a()(p.name, g, y, {
                [p.username]: A,
                [w]: R,
            }),
            children: L,
        },
        M = {
            className: a()(p.nameGlow, D, y),
            children: n,
        },
        j = N
            ? (0, r.jsx)(_.F, {
                  color: o,
                  colors: C ? c : null,
                  name: l,
                  className: "left" === d ? p.roleDotLeft : p.roleDotRight,
                  hoverOverride: E || v || (null == O ? void 0 : O.animate),
              })
            : null;
    return (0, r.jsxs)("span", {
        className: a()(h, p.container),
        onMouseEnter: T,
        onMouseLeave: S,
        children: [
            "left" === d && j,
            (0, r.jsxs)("span", {
                className: p.nameContainer,
                style: m({ color: A && !C && null != o ? o : void 0 }, R ? P : {}),
                children: [
                    null != b
                        ? (0, r.jsx)(
                              s.xv,
                              m(
                                  {
                                      tag: "span",
                                      color: "currentColor",
                                      variant: b,
                                  },
                                  x,
                              ),
                          )
                        : (0, r.jsx)("span", m({}, x)),
                    R &&
                        (null != b
                            ? (0, r.jsx)(
                                  s.xv,
                                  m(
                                      {
                                          tag: "span",
                                          color: "currentColor",
                                          "aria-hidden": !0,
                                          variant: b,
                                      },
                                      M,
                                  ),
                              )
                            : (0, r.jsx)("span", m({ "aria-hidden": !0 }, M))),
                ],
            }),
            "right" === d && j,
        ],
    });
}
function v(e) {
    let {
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: o,
            className: a,
            colorStrings: s,
            animateRoleGradient: u,
            ref: f,
        } = e,
        _ = b(e, [
            "name",
            "colorString",
            "roleName",
            "dotAlignment",
            "className",
            "colorStrings",
            "animateRoleGradient",
            "ref",
        ]),
        p = (0, l.e7)([d.Z], () => d.Z.roleStyle),
        h = "username" === p,
        g = (0, r.jsx)(O, {
            roleStyle: p,
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: o,
            className: a,
            colorStrings: s,
            animateRoleGradient: u,
        }),
        y = h && null != n ? { color: n } : void 0;
    return (0, r.jsx)(
        c.Anchor,
        E(m({}, _), {
            children: g,
            style: y,
            ref: f,
        }),
    );
}
function I(e) {
    let t = (0, l.e7)([d.Z], () => d.Z.roleStyle);
    return (0, r.jsx)(O, E(m({}, e), { roleStyle: t }));
}
