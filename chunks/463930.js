var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(834730),
    o = n(28863),
    u = n(855986),
    d = n(473193),
    c = n(775602),
    f = n(36075),
    _ = n(545442),
    E = n(400590);
function g(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: i,
            roleName: o,
            colorStrings: u,
            dotAlignment: c = "left",
            className: g,
            nameTextClassName: m,
            animateRoleGradient: A,
            variant: p,
            displayNameStylesFont: S = "",
            displayInline: h = !1,
        } = e,
        b = r.useContext(d.C),
        [y, D] = r.useState(!1),
        R = r.useCallback(() => {
            D(!0);
        }, []),
        M = r.useCallback(() => {
            D(!1);
        }, []),
        T = "username" === t,
        w = null != u && null != u.primaryColor && null != u.secondaryColor,
        I = T && w,
        {
            gradientStyle: x,
            gradientClassname: G,
            gradientGlowClassname: H,
        } = (0, f.v5)({ colorStrings: u, roleStyle: "username", animateGradient: A || y || b?.animate }),
        N = (0, f.CR)(n),
        C = { className: a()(E.UU, m, S, { [E.Xh]: T, [G]: I }), children: N },
        L = { className: a()(E.lD, H, S), children: n },
        v =
            "dot" === t
                ? (0, l.jsx)(_.W, {
                      color: i,
                      colors: w ? u : null,
                      name: o,
                      className: "left" === c ? E.Hf : E.WN,
                      hoverOverride: A || y || b?.animate,
                  })
                : null;
    return (0, l.jsxs)("span", {
        className: a()(g, E.kL, { [E.mO]: h }),
        onMouseEnter: R,
        onMouseLeave: M,
        children: [
            "left" === c && v,
            (0, l.jsxs)("span", {
                className: a()(E.VW, { [E.mO]: h }),
                style: { color: T && !w && null != i ? i : void 0, ...(I ? x : {}) },
                children: [
                    null != p
                        ? (0, l.jsx)(s.E, { tag: "span", color: "currentColor", variant: p, ...C })
                        : (0, l.jsx)("span", { ...C }),
                    I &&
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
            "right" === c && v,
        ],
    });
}
n.d(
    t,
    {},
    {
        V: function (e) {
            let {
                    name: t,
                    colorString: n,
                    roleName: r,
                    dotAlignment: i,
                    className: a,
                    colorStrings: s,
                    animateRoleGradient: d,
                    displayInline: f,
                    ref: _,
                    ...E
                } = e,
                m = (0, u.bG)([c.Ay], () => c.Ay.roleStyle),
                A = "username" === m,
                p = (0, l.jsx)(g, {
                    roleStyle: m,
                    name: t,
                    colorString: n,
                    roleName: r,
                    dotAlignment: i,
                    className: a,
                    colorStrings: s,
                    animateRoleGradient: d,
                    displayInline: f,
                }),
                S = A && null != n ? { color: n } : void 0;
            return (0, l.jsx)(o.Anchor, { ...E, children: p, style: S, ref: _ });
        },
        g: function (e) {
            let t = (0, u.bG)([c.Ay], () => c.Ay.roleStyle);
            return (0, l.jsx)(g, { ...e, roleStyle: t });
        },
    },
);
