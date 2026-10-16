n.d(t, { V: () => p, g: () => E });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(834730),
    o = n(28863),
    u = n(17928),
    d = n(473193),
    c = n(775602),
    f = n(36075),
    g = n(545442),
    m = n(400590);
function A(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: r,
            roleName: o,
            colorStrings: u,
            dotAlignment: c = "left",
            className: A,
            nameTextClassName: p,
            animateRoleGradient: E,
            variant: h,
            displayNameStylesFont: b = "",
            displayInline: _ = !1,
        } = e,
        S = a.useContext(d.C),
        [y, R] = a.useState(!1),
        x = a.useCallback(() => {
            R(!0);
        }, []),
        D = a.useCallback(() => {
            R(!1);
        }, []),
        M = "username" === t,
        v = null != u && null != u.primaryColor && null != u.secondaryColor,
        N = M && v,
        {
            gradientStyle: T,
            gradientClassname: w,
            gradientGlowClassname: G,
        } = (0, f.v5)({ colorStrings: u, roleStyle: "username", animateGradient: E || y || S?.animate }),
        I = (0, f.CR)(n),
        L = { className: i()(m.UU, p, b, { [m.Xh]: M, [w]: N }), children: I },
        C = { className: i()(m.lD, G, b), children: n },
        j =
            "dot" === t
                ? (0, l.jsx)(g.W, {
                      color: r,
                      colors: v ? u : null,
                      name: o,
                      className: "left" === c ? m.Hf : m.WN,
                      hoverOverride: E || y || S?.animate,
                  })
                : null;
    return (0, l.jsxs)("span", {
        className: i()(A, m.kL, { [m.mO]: _ }),
        onMouseEnter: x,
        onMouseLeave: D,
        children: [
            "left" === c && j,
            (0, l.jsxs)("span", {
                className: i()(m.VW, { [m.mO]: _ }),
                style: { color: M && !v && null != r ? r : void 0, ...(N ? T : {}) },
                children: [
                    null != h
                        ? (0, l.jsx)(s.E, { tag: "span", color: "currentColor", variant: h, ...L })
                        : (0, l.jsx)("span", { ...L }),
                    N &&
                        (null != h
                            ? (0, l.jsx)(s.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: h,
                                  ...C,
                              })
                            : (0, l.jsx)("span", { "aria-hidden": !0, ...C })),
                ],
            }),
            "right" === c && j,
        ],
    });
}
function p(e) {
    let {
            name: t,
            colorString: n,
            roleName: a,
            dotAlignment: r,
            className: i,
            colorStrings: s,
            animateRoleGradient: d,
            displayInline: f,
            ref: g,
            ...m
        } = e,
        p = (0, u.bG)([c.Ay], () => c.Ay.roleStyle),
        E = "username" === p,
        h = (0, l.jsx)(A, {
            roleStyle: p,
            name: t,
            colorString: n,
            roleName: a,
            dotAlignment: r,
            className: i,
            colorStrings: s,
            animateRoleGradient: d,
            displayInline: f,
        }),
        b = E && null != n ? { color: n } : void 0;
    return (0, l.jsx)(o.Anchor, { ...m, children: h, style: b, ref: g });
}
function E(e) {
    let t = (0, u.bG)([c.Ay], () => c.Ay.roleStyle);
    return (0, l.jsx)(A, { ...e, roleStyle: t });
}
