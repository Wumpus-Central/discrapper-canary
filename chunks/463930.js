n.d(t, { V: () => E, g: () => _ });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(834730),
    u = n(28863),
    o = n(17928),
    c = n(473193),
    d = n(775602),
    f = n(36075),
    m = n(545442),
    g = n(400590);
function A(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: a,
            roleName: u,
            colorStrings: o,
            dotAlignment: d = "left",
            className: A,
            nameTextClassName: E,
            animateRoleGradient: _,
            variant: p,
            displayNameStylesFont: S = "",
            displayInline: b = !1,
        } = e,
        h = r.useContext(c.C),
        [y, M] = r.useState(!1),
        D = r.useCallback(() => {
            M(!0);
        }, []),
        R = r.useCallback(() => {
            M(!1);
        }, []),
        G = "username" === t,
        T = null != o && null != o.primaryColor && null != o.secondaryColor,
        N = G && T,
        {
            gradientStyle: x,
            gradientClassname: C,
            gradientGlowClassname: v,
        } = (0, f.v5)({ colorStrings: o, roleStyle: "username", animateGradient: _ || y || h?.animate }),
        w = (0, f.CR)(n),
        I = { className: i()(g.UU, E, S, { [g.Xh]: G, [C]: N }), children: w },
        L = { className: i()(g.lD, v, S), children: n },
        H =
            "dot" === t
                ? (0, l.jsx)(m.W, {
                      color: a,
                      colors: T ? o : null,
                      name: u,
                      className: "left" === d ? g.Hf : g.WN,
                      hoverOverride: _ || y || h?.animate,
                  })
                : null;
    return (0, l.jsxs)("span", {
        className: i()(A, g.kL, { [g.mO]: b }),
        onMouseEnter: D,
        onMouseLeave: R,
        children: [
            "left" === d && H,
            (0, l.jsxs)("span", {
                className: i()(g.VW, { [g.mO]: b }),
                style: { color: G && !T && null != a ? a : void 0, ...(N ? x : {}) },
                children: [
                    null != p
                        ? (0, l.jsx)(s.E, { tag: "span", color: "currentColor", variant: p, ...I })
                        : (0, l.jsx)("span", { ...I }),
                    N &&
                        (null != p
                            ? (0, l.jsx)(s.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: p,
                                  ...L,
                              })
                            : (0, l.jsx)("span", { "aria-hidden": !0, ...L })),
                ],
            }),
            "right" === d && H,
        ],
    });
}
function E(e) {
    let {
            name: t,
            colorString: n,
            roleName: r,
            dotAlignment: a,
            className: i,
            colorStrings: s,
            animateRoleGradient: c,
            displayInline: f,
            ref: m,
            ...g
        } = e,
        E = (0, o.bG)([d.Ay], () => d.Ay.roleStyle),
        _ = "username" === E,
        p = (0, l.jsx)(A, {
            roleStyle: E,
            name: t,
            colorString: n,
            roleName: r,
            dotAlignment: a,
            className: i,
            colorStrings: s,
            animateRoleGradient: c,
            displayInline: f,
        }),
        S = _ && null != n ? { color: n } : void 0;
    return (0, l.jsx)(u.Anchor, { ...g, children: p, style: S, ref: m });
}
function _(e) {
    let t = (0, o.bG)([d.Ay], () => d.Ay.roleStyle);
    return (0, l.jsx)(A, { ...e, roleStyle: t });
}
