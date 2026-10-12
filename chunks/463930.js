l.d(n, { V: () => m, g: () => h });
var t = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    o = l(834730),
    s = l(28863),
    u = l(17928),
    d = l(473193),
    c = l(775602),
    A = l(36075),
    f = l(545442),
    g = l(400590);
function E(e) {
    let {
            roleStyle: n,
            name: l,
            colorString: r,
            roleName: s,
            colorStrings: u,
            dotAlignment: c = "left",
            className: E,
            nameTextClassName: m,
            animateRoleGradient: h,
            variant: _,
            displayNameStylesFont: S = "",
            displayInline: R = !1,
        } = e,
        D = a.useContext(d.C),
        [p, v] = a.useState(!1),
        w = a.useCallback(() => {
            v(!0);
        }, []),
        y = a.useCallback(() => {
            v(!1);
        }, []),
        M = "username" === n,
        N = null != u && null != u.primaryColor && null != u.secondaryColor,
        x = M && N,
        {
            gradientStyle: b,
            gradientClassname: C,
            gradientGlowClassname: T,
        } = (0, A.v5)({ colorStrings: u, roleStyle: "username", animateGradient: h || p || D?.animate }),
        I = (0, A.CR)(l),
        L = { className: i()(g.UU, m, S, { [g.Xh]: M, [C]: x }), children: I },
        G = { className: i()(g.lD, T, S), children: l },
        j =
            "dot" === n
                ? (0, t.jsx)(f.W, {
                      color: r,
                      colors: N ? u : null,
                      name: s,
                      className: "left" === c ? g.Hf : g.WN,
                      hoverOverride: h || p || D?.animate,
                  })
                : null;
    return (0, t.jsxs)("span", {
        className: i()(E, g.kL, { [g.mO]: R }),
        onMouseEnter: w,
        onMouseLeave: y,
        children: [
            "left" === c && j,
            (0, t.jsxs)("span", {
                className: i()(g.VW, { [g.mO]: R }),
                style: { color: M && !N && null != r ? r : void 0, ...(x ? b : {}) },
                children: [
                    null != _
                        ? (0, t.jsx)(o.E, { tag: "span", color: "currentColor", variant: _, ...L })
                        : (0, t.jsx)("span", { ...L }),
                    x &&
                        (null != _
                            ? (0, t.jsx)(o.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: _,
                                  ...G,
                              })
                            : (0, t.jsx)("span", { "aria-hidden": !0, ...G })),
                ],
            }),
            "right" === c && j,
        ],
    });
}
function m(e) {
    let {
            name: n,
            colorString: l,
            roleName: a,
            dotAlignment: r,
            className: i,
            colorStrings: o,
            animateRoleGradient: d,
            displayInline: A,
            ref: f,
            ...g
        } = e,
        m = (0, u.bG)([c.Ay], () => c.Ay.roleStyle),
        h = "username" === m,
        _ = (0, t.jsx)(E, {
            roleStyle: m,
            name: n,
            colorString: l,
            roleName: a,
            dotAlignment: r,
            className: i,
            colorStrings: o,
            animateRoleGradient: d,
            displayInline: A,
        }),
        S = h && null != l ? { color: l } : void 0;
    return (0, t.jsx)(s.Anchor, { ...g, children: _, style: S, ref: f });
}
function h(e) {
    let n = (0, u.bG)([c.Ay], () => c.Ay.roleStyle);
    return (0, t.jsx)(E, { ...e, roleStyle: n });
}
