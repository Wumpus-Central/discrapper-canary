var r = n(477900),
    o = n(582128),
    a = n(503698),
    t = n.n(a),
    s = n(834730),
    u = n(28863),
    i = n(855986),
    c = n(473193),
    d = n(775602),
    m = n(36075),
    y = n(545442),
    C = n(400590);
function p(l) {
    let {
            roleStyle: e,
            name: n,
            colorString: a,
            roleName: u,
            colorStrings: i,
            dotAlignment: d = "left",
            className: p,
            nameTextClassName: h,
            animateRoleGradient: x,
            variant: f,
            displayNameStylesFont: j = "",
            displayInline: v = !1,
        } = l,
        g = o.useContext(c.C),
        [N, S] = o.useState(!1),
        k = o.useCallback(() => {
            S(!0);
        }, []),
        A = o.useCallback(() => {
            S(!1);
        }, []),
        b = "username" === e,
        G = null != i && null != i.primaryColor && null != i.secondaryColor,
        E = b && G,
        {
            gradientStyle: O,
            gradientClassname: V,
            gradientGlowClassname: W,
        } = (0, m.v5)({ colorStrings: i, roleStyle: "username", animateGradient: x || N || g?.animate }),
        _ = (0, m.CR)(n),
        w = { className: t()(C.UU, h, j, { [C.Xh]: b, [V]: E }), children: _ },
        H = { className: t()(C.lD, W, j), children: n },
        L =
            "dot" === e
                ? (0, r.jsx)(y.W, {
                      color: a,
                      colors: G ? i : null,
                      name: u,
                      className: "left" === d ? C.Hf : C.WN,
                      hoverOverride: x || N || g?.animate,
                  })
                : null;
    return (0, r.jsxs)("span", {
        className: t()(p, C.kL, { [C.mO]: v }),
        onMouseEnter: k,
        onMouseLeave: A,
        children: [
            "left" === d && L,
            (0, r.jsxs)("span", {
                className: t()(C.VW, { [C.mO]: v }),
                style: { color: b && !G && null != a ? a : void 0, ...(E ? O : {}) },
                children: [
                    null != f
                        ? (0, r.jsx)(s.E, { tag: "span", color: "currentColor", variant: f, ...w })
                        : (0, r.jsx)("span", { ...w }),
                    E &&
                        (null != f
                            ? (0, r.jsx)(s.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: f,
                                  ...H,
                              })
                            : (0, r.jsx)("span", { "aria-hidden": !0, ...H })),
                ],
            }),
            "right" === d && L,
        ],
    });
}
n.d(
    e,
    {},
    {
        V: function (l) {
            let {
                    name: e,
                    colorString: n,
                    roleName: o,
                    dotAlignment: a,
                    className: t,
                    colorStrings: s,
                    animateRoleGradient: c,
                    displayInline: m,
                    ref: y,
                    ...C
                } = l,
                h = (0, i.bG)([d.Ay], () => d.Ay.roleStyle),
                x = "username" === h,
                f = (0, r.jsx)(p, {
                    roleStyle: h,
                    name: e,
                    colorString: n,
                    roleName: o,
                    dotAlignment: a,
                    className: t,
                    colorStrings: s,
                    animateRoleGradient: c,
                    displayInline: m,
                }),
                j = x && null != n ? { color: n } : void 0;
            return (0, r.jsx)(u.Anchor, { ...C, children: f, style: j, ref: y });
        },
        g: function (l) {
            let e = (0, i.bG)([d.Ay], () => d.Ay.roleStyle);
            return (0, r.jsx)(p, { ...l, roleStyle: e });
        },
    },
);
