t.d(n, { V: () => p, g: () => E });
var l = t(477900),
    a = t(582128),
    r = t(503698),
    i = t.n(r),
    s = t(834730),
    o = t(28863),
    u = t(17928),
    d = t(473193),
    c = t(775602),
    f = t(36075),
    m = t(545442),
    g = t(400590);
function A(e) {
    let {
            roleStyle: n,
            name: t,
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
        [y, D] = a.useState(!1),
        M = a.useCallback(() => {
            D(!0);
        }, []),
        R = a.useCallback(() => {
            D(!1);
        }, []),
        x = "username" === n,
        v = null != u && null != u.primaryColor && null != u.secondaryColor,
        N = x && v,
        {
            gradientStyle: T,
            gradientClassname: w,
            gradientGlowClassname: C,
        } = (0, f.v5)({ colorStrings: u, roleStyle: "username", animateGradient: E || y || S?.animate }),
        G = (0, f.CR)(t),
        I = { className: i()(g.UU, p, b, { [g.Xh]: x, [w]: N }), children: G },
        L = { className: i()(g.lD, C, b), children: t },
        j =
            "dot" === n
                ? (0, l.jsx)(m.W, {
                      color: r,
                      colors: v ? u : null,
                      name: o,
                      className: "left" === c ? g.Hf : g.WN,
                      hoverOverride: E || y || S?.animate,
                  })
                : null;
    return (0, l.jsxs)("span", {
        className: i()(A, g.kL, { [g.mO]: _ }),
        onMouseEnter: M,
        onMouseLeave: R,
        children: [
            "left" === c && j,
            (0, l.jsxs)("span", {
                className: i()(g.VW, { [g.mO]: _ }),
                style: { color: x && !v && null != r ? r : void 0, ...(N ? T : {}) },
                children: [
                    null != h
                        ? (0, l.jsx)(s.E, { tag: "span", color: "currentColor", variant: h, ...I })
                        : (0, l.jsx)("span", { ...I }),
                    N &&
                        (null != h
                            ? (0, l.jsx)(s.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: h,
                                  ...L,
                              })
                            : (0, l.jsx)("span", { "aria-hidden": !0, ...L })),
                ],
            }),
            "right" === c && j,
        ],
    });
}
function p(e) {
    let {
            name: n,
            colorString: t,
            roleName: a,
            dotAlignment: r,
            className: i,
            colorStrings: s,
            animateRoleGradient: d,
            displayInline: f,
            ref: m,
            ...g
        } = e,
        p = (0, u.bG)([c.Ay], () => c.Ay.roleStyle),
        E = "username" === p,
        h = (0, l.jsx)(A, {
            roleStyle: p,
            name: n,
            colorString: t,
            roleName: a,
            dotAlignment: r,
            className: i,
            colorStrings: s,
            animateRoleGradient: d,
            displayInline: f,
        }),
        b = E && null != t ? { color: t } : void 0;
    return (0, l.jsx)(o.Anchor, { ...g, children: h, style: b, ref: m });
}
function E(e) {
    let n = (0, u.bG)([c.Ay], () => c.Ay.roleStyle);
    return (0, l.jsx)(A, { ...e, roleStyle: n });
}
