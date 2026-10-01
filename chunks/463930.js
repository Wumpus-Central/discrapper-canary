e.d(n, { V: () => g, g: () => p });
var t = e(477900),
    r = e(582128),
    a = e(503698),
    o = e.n(a),
    s = e(834730),
    i = e(28863),
    u = e(17928),
    c = e(473193),
    d = e(775602),
    h = e(36075),
    A = e(545442),
    m = e(400590);
function f(l) {
    let {
            roleStyle: n,
            name: e,
            colorString: a,
            roleName: i,
            colorStrings: u,
            dotAlignment: d = "left",
            className: f,
            nameTextClassName: g,
            animateRoleGradient: p,
            variant: v,
            displayNameStylesFont: y = "",
            displayInline: C = !1,
        } = l,
        E = r.useContext(c.C),
        [w, x] = r.useState(!1),
        _ = r.useCallback(() => {
            x(!0);
        }, []),
        N = r.useCallback(() => {
            x(!1);
        }, []),
        R = "username" === n,
        j = null != u && null != u.primaryColor && null != u.secondaryColor,
        D = R && j,
        {
            gradientStyle: I,
            gradientClassname: S,
            gradientGlowClassname: T,
        } = (0, h.v5)({ colorStrings: u, roleStyle: "username", animateGradient: p || w || E?.animate }),
        G = (0, h.CR)(e),
        H = { className: o()(m.UU, g, y, { [m.Xh]: R, [S]: D }), children: G },
        L = { className: o()(m.lD, T, y), children: e },
        V =
            "dot" === n
                ? (0, t.jsx)(A.W, {
                      color: a,
                      colors: j ? u : null,
                      name: i,
                      className: "left" === d ? m.Hf : m.WN,
                      hoverOverride: p || w || E?.animate,
                  })
                : null;
    return (0, t.jsxs)("span", {
        className: o()(f, m.kL, { [m.mO]: C }),
        onMouseEnter: _,
        onMouseLeave: N,
        children: [
            "left" === d && V,
            (0, t.jsxs)("span", {
                className: o()(m.VW, { [m.mO]: C }),
                style: { color: R && !j && null != a ? a : void 0, ...(D ? I : {}) },
                children: [
                    null != v
                        ? (0, t.jsx)(s.E, { tag: "span", color: "currentColor", variant: v, ...H })
                        : (0, t.jsx)("span", { ...H }),
                    D &&
                        (null != v
                            ? (0, t.jsx)(s.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: v,
                                  ...L,
                              })
                            : (0, t.jsx)("span", { "aria-hidden": !0, ...L })),
                ],
            }),
            "right" === d && V,
        ],
    });
}
function g(l) {
    let {
            name: n,
            colorString: e,
            roleName: r,
            dotAlignment: a,
            className: o,
            colorStrings: s,
            animateRoleGradient: c,
            displayInline: h,
            ref: A,
            ...m
        } = l,
        g = (0, u.bG)([d.Ay], () => d.Ay.roleStyle),
        p = "username" === g,
        v = (0, t.jsx)(f, {
            roleStyle: g,
            name: n,
            colorString: e,
            roleName: r,
            dotAlignment: a,
            className: o,
            colorStrings: s,
            animateRoleGradient: c,
            displayInline: h,
        }),
        y = p && null != e ? { color: e } : void 0;
    return (0, t.jsx)(i.Anchor, { ...m, children: v, style: y, ref: A });
}
function p(l) {
    let n = (0, u.bG)([d.Ay], () => d.Ay.roleStyle);
    return (0, t.jsx)(f, { ...l, roleStyle: n });
}
