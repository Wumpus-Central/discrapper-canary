n.d(t, {
    V: () => A,
    g: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(349288),
    u = n(473193),
    d = n(775602),
    f = n(36075),
    p = n(545442),
    _ = n(224896);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
            className: h,
            nameTextClassName: g,
            animateRoleGradient: E,
            variant: b,
            displayNameStylesFont: y = "",
        } = e,
        O = i.useContext(u.C),
        [A, v] = i.useState(!1),
        S = i.useCallback(() => {
            v(!0);
        }, []),
        I = i.useCallback(() => {
            v(!1);
        }, []),
        T = "username" === t,
        C = "dot" === t,
        N = null != c && null != c.primaryColor && null != c.secondaryColor,
        R = T && N,
        {
            gradientStyle: w,
            gradientClassname: P,
            gradientGlowClassname: D,
        } = (0, f.v5)({
            colorStrings: c,
            roleStyle: "username",
            animateGradient: E || A || (null == O ? void 0 : O.animate),
        }),
        x = (0, f.CR)(n),
        L = {
            className: s()(_.UU, g, y, {
                [_.Xh]: T,
                [P]: R,
            }),
            children: x,
        },
        j = {
            className: s()(_.lD, D, y),
            children: n,
        },
        M = C
            ? (0, r.jsx)(p.W, {
                  color: a,
                  colors: N ? c : null,
                  name: l,
                  className: "left" === d ? _.Hf : _.WN,
                  hoverOverride: E || A || (null == O ? void 0 : O.animate),
              })
            : null;
    return (0, r.jsxs)("span", {
        className: s()(h, _.kL),
        onMouseEnter: S,
        onMouseLeave: I,
        children: [
            "left" === d && M,
            (0, r.jsxs)("span", {
                className: _.VW,
                style: m(
                    {
                        color: T && !N && null != a ? a : void 0,
                    },
                    R ? w : {},
                ),
                children: [
                    null != b
                        ? (0, r.jsx)(
                              o.EYj,
                              m(
                                  {
                                      tag: "span",
                                      color: "currentColor",
                                      variant: b,
                                  },
                                  L,
                              ),
                          )
                        : (0, r.jsx)("span", m({}, L)),
                    R &&
                        (null != b
                            ? (0, r.jsx)(
                                  o.EYj,
                                  m(
                                      {
                                          tag: "span",
                                          color: "currentColor",
                                          "aria-hidden": !0,
                                          variant: b,
                                      },
                                      j,
                                  ),
                              )
                            : (0, r.jsx)(
                                  "span",
                                  m(
                                      {
                                          "aria-hidden": !0,
                                      },
                                      j,
                                  ),
                              )),
                ],
            }),
            "right" === d && M,
        ],
    });
}

function A(e) {
    let {
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: a,
            className: s,
            colorStrings: o,
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
        _ = (0, l.bG)([d.A], () => d.A.roleStyle),
        h = "username" === _,
        g = (0, r.jsx)(O, {
            roleStyle: _,
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: a,
            className: s,
            colorStrings: o,
            animateRoleGradient: u,
        }),
        y =
            h && null != n
                ? {
                      color: n,
                  }
                : void 0;
    return (0, r.jsx)(
        c.Anchor,
        E(m({}, p), {
            children: g,
            style: y,
            ref: f,
        }),
    );
}

function v(e) {
    let t = (0, l.bG)([d.A], () => d.A.roleStyle);
    return (0, r.jsx)(
        O,
        E(m({}, e), {
            roleStyle: t,
        }),
    );
}
