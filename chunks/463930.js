t.d(n, { V: () => b, g: () => E });
var a = t(477900),
    l = t(582128),
    r = t(503698),
    i = t.n(r),
    s = t(834730),
    o = t(28863),
    d = t(17928),
    u = t(473193),
    c = t(775602),
    f = t(36075),
    g = t(545442),
    m = t(400590);
function A(e) {
    let {
            roleStyle: n,
            name: t,
            colorString: r,
            roleName: o,
            colorStrings: d,
            dotAlignment: c = "left",
            className: A,
            nameTextClassName: b,
            animateRoleGradient: E,
            variant: p,
            displayNameStylesFont: h = "",
            displayInline: S = !1,
        } = e,
        _ = l.useContext(u.C),
        [y, D] = l.useState(!1),
        R = l.useCallback(() => {
            D(!0);
        }, []),
        x = l.useCallback(() => {
            D(!1);
        }, []),
        v = "username" === n,
        M = null != d && null != d.primaryColor && null != d.secondaryColor,
        N = v && M,
        {
            gradientStyle: T,
            gradientClassname: w,
            gradientGlowClassname: C,
        } = (0, f.v5)({ colorStrings: d, roleStyle: "username", animateGradient: E || y || _?.animate }),
        G = (0, f.CR)(t),
        L = { className: i()(m.UU, b, h, { [m.Xh]: v, [w]: N }), children: G },
        j = { className: i()(m.lD, C, h), children: t },
        I =
            "dot" === n
                ? (0, a.jsx)(g.W, {
                      color: r,
                      colors: M ? d : null,
                      name: o,
                      className: "left" === c ? m.Hf : m.WN,
                      hoverOverride: E || y || _?.animate,
                  })
                : null;
    return (0, a.jsxs)("span", {
        className: i()(A, m.kL, { [m.mO]: S }),
        onMouseEnter: R,
        onMouseLeave: x,
        children: [
            "left" === c && I,
            (0, a.jsxs)("span", {
                className: i()(m.VW, { [m.mO]: S }),
                style: { color: v && !M && null != r ? r : void 0, ...(N ? T : {}) },
                children: [
                    null != p
                        ? (0, a.jsx)(s.E, { tag: "span", color: "currentColor", variant: p, ...L })
                        : (0, a.jsx)("span", { ...L }),
                    N &&
                        (null != p
                            ? (0, a.jsx)(s.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: p,
                                  ...j,
                              })
                            : (0, a.jsx)("span", { "aria-hidden": !0, ...j })),
                ],
            }),
            "right" === c && I,
        ],
    });
}
function b(e) {
    let {
            name: n,
            colorString: t,
            roleName: l,
            dotAlignment: r,
            className: i,
            colorStrings: s,
            animateRoleGradient: u,
            displayInline: f,
            ref: g,
            ...m
        } = e,
        b = (0, d.bG)([c.Ay], () => c.Ay.roleStyle),
        E = "username" === b,
        p = (0, a.jsx)(A, {
            roleStyle: b,
            name: n,
            colorString: t,
            roleName: l,
            dotAlignment: r,
            className: i,
            colorStrings: s,
            animateRoleGradient: u,
            displayInline: f,
        }),
        h = E && null != t ? { color: t } : void 0;
    return (0, a.jsx)(o.Anchor, { ...m, children: p, style: h, ref: g });
}
function E(e) {
    let n = (0, d.bG)([c.Ay], () => c.Ay.roleStyle);
    return (0, a.jsx)(A, { ...e, roleStyle: n });
}
