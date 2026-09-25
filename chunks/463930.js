n.d(e, { V: () => v, g: () => g });
var t = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    s = n(834730),
    i = n(28863),
    u = n(17928),
    c = n(473193),
    d = n(775602),
    h = n(36075),
    A = n(545442),
    m = n(400590);
function f(l) {
    let {
            roleStyle: e,
            name: n,
            colorString: a,
            roleName: i,
            colorStrings: u,
            dotAlignment: d = "left",
            className: f,
            nameTextClassName: v,
            animateRoleGradient: g,
            variant: p,
            displayNameStylesFont: y = "",
            displayInline: C = !1,
        } = l,
        E = r.useContext(c.C),
        [_, x] = r.useState(!1),
        w = r.useCallback(() => {
            x(!0);
        }, []),
        N = r.useCallback(() => {
            x(!1);
        }, []),
        R = "username" === e,
        j = null != u && null != u.primaryColor && null != u.secondaryColor,
        D = R && j,
        {
            gradientStyle: I,
            gradientClassname: S,
            gradientGlowClassname: T,
        } = (0, h.v5)({ colorStrings: u, roleStyle: "username", animateGradient: g || _ || E?.animate }),
        G = (0, h.CR)(n),
        H = { className: o()(m.UU, v, y, { [m.Xh]: R, [S]: D }), children: G },
        L = { className: o()(m.lD, T, y), children: n },
        V =
            "dot" === e
                ? (0, t.jsx)(A.W, {
                      color: a,
                      colors: j ? u : null,
                      name: i,
                      className: "left" === d ? m.Hf : m.WN,
                      hoverOverride: g || _ || E?.animate,
                  })
                : null;
    return (0, t.jsxs)("span", {
        className: o()(f, m.kL, { [m.mO]: C }),
        onMouseEnter: w,
        onMouseLeave: N,
        children: [
            "left" === d && V,
            (0, t.jsxs)("span", {
                className: o()(m.VW, { [m.mO]: C }),
                style: { color: R && !j && null != a ? a : void 0, ...(D ? I : {}) },
                children: [
                    null != p
                        ? (0, t.jsx)(s.E, { tag: "span", color: "currentColor", variant: p, ...H })
                        : (0, t.jsx)("span", { ...H }),
                    D &&
                        (null != p
                            ? (0, t.jsx)(s.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: p,
                                  ...L,
                              })
                            : (0, t.jsx)("span", { "aria-hidden": !0, ...L })),
                ],
            }),
            "right" === d && V,
        ],
    });
}
function v(l) {
    let {
            name: e,
            colorString: n,
            roleName: r,
            dotAlignment: a,
            className: o,
            colorStrings: s,
            animateRoleGradient: c,
            displayInline: h,
            ref: A,
            ...m
        } = l,
        v = (0, u.bG)([d.Ay], () => d.Ay.roleStyle),
        g = "username" === v,
        p = (0, t.jsx)(f, {
            roleStyle: v,
            name: e,
            colorString: n,
            roleName: r,
            dotAlignment: a,
            className: o,
            colorStrings: s,
            animateRoleGradient: c,
            displayInline: h,
        }),
        y = g && null != n ? { color: n } : void 0;
    return (0, t.jsx)(i.Anchor, { ...m, children: p, style: y, ref: A });
}
function g(l) {
    let e = (0, u.bG)([d.Ay], () => d.Ay.roleStyle);
    return (0, t.jsx)(f, { ...l, roleStyle: e });
}
