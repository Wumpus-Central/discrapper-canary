var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(834730),
    o = n(28863),
    u = n(855986),
    d = n(473193),
    c = n(775602),
    _ = n(36075),
    f = n(545442),
    E = n(400590);
function g(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: r,
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
        b = i.useContext(d.C),
        [y, R] = i.useState(!1),
        D = i.useCallback(() => {
            R(!0);
        }, []),
        M = i.useCallback(() => {
            R(!1);
        }, []),
        T = "username" === t,
        w = null != u && null != u.primaryColor && null != u.secondaryColor,
        I = T && w,
        {
            gradientStyle: x,
            gradientClassname: G,
            gradientGlowClassname: H,
        } = (0, _.v5)({ colorStrings: u, roleStyle: "username", animateGradient: A || y || b?.animate }),
        N = (0, _.CR)(n),
        C = { className: a()(E.UU, m, S, { [E.Xh]: T, [G]: I }), children: N },
        L = { className: a()(E.lD, H, S), children: n },
        v =
            "dot" === t
                ? (0, l.jsx)(f.W, {
                      color: r,
                      colors: w ? u : null,
                      name: o,
                      className: "left" === c ? E.Hf : E.WN,
                      hoverOverride: A || y || b?.animate,
                  })
                : null;
    return (0, l.jsxs)("span", {
        className: a()(g, E.kL, { [E.mO]: h }),
        onMouseEnter: D,
        onMouseLeave: M,
        children: [
            "left" === c && v,
            (0, l.jsxs)("span", {
                className: a()(E.VW, { [E.mO]: h }),
                style: { color: T && !w && null != r ? r : void 0, ...(I ? x : {}) },
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
                    roleName: i,
                    dotAlignment: r,
                    className: a,
                    colorStrings: s,
                    animateRoleGradient: d,
                    displayInline: _,
                    ref: f,
                    ...E
                } = e,
                m = (0, u.bG)([c.Ay], () => c.Ay.roleStyle),
                A = "username" === m,
                p = (0, l.jsx)(g, {
                    roleStyle: m,
                    name: t,
                    colorString: n,
                    roleName: i,
                    dotAlignment: r,
                    className: a,
                    colorStrings: s,
                    animateRoleGradient: d,
                    displayInline: _,
                }),
                S = A && null != n ? { color: n } : void 0;
            return (0, l.jsx)(o.Anchor, { ...E, children: p, style: S, ref: f });
        },
        g: function (e) {
            let t = (0, u.bG)([c.Ay], () => c.Ay.roleStyle);
            return (0, l.jsx)(g, { ...e, roleStyle: t });
        },
    },
);
