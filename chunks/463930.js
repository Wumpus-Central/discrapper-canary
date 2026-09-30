e.d(n, { V: () => f, g: () => g });
var t = e(477900),
    a = e(582128),
    r = e(503698),
    s = e.n(r),
    o = e(834730),
    i = e(28863),
    u = e(17928),
    c = e(473193),
    d = e(775602),
    h = e(36075),
    A = e(545442),
    m = e(400590);
function v(l) {
    let {
            roleStyle: n,
            name: e,
            colorString: r,
            roleName: i,
            colorStrings: u,
            dotAlignment: d = "left",
            className: v,
            nameTextClassName: f,
            animateRoleGradient: g,
            variant: p,
            displayNameStylesFont: w = "",
            displayInline: C = !1,
        } = l,
        E = a.useContext(c.C),
        [y, x] = a.useState(!1),
        _ = a.useCallback(() => {
            x(!0);
        }, []),
        N = a.useCallback(() => {
            x(!1);
        }, []),
        R = "username" === n,
        I = null != u && null != u.primaryColor && null != u.secondaryColor,
        j = R && I,
        {
            gradientStyle: T,
            gradientClassname: D,
            gradientGlowClassname: S,
        } = (0, h.v5)({ colorStrings: u, roleStyle: "username", animateGradient: g || y || E?.animate }),
        H = (0, h.CR)(e),
        L = { className: s()(m.UU, f, w, { [m.Xh]: R, [D]: j }), children: H },
        G = { className: s()(m.lD, S, w), children: e },
        V =
            "dot" === n
                ? (0, t.jsx)(A.W, {
                      color: r,
                      colors: I ? u : null,
                      name: i,
                      className: "left" === d ? m.Hf : m.WN,
                      hoverOverride: g || y || E?.animate,
                  })
                : null;
    return (0, t.jsxs)("span", {
        className: s()(v, m.kL, { [m.mO]: C }),
        onMouseEnter: _,
        onMouseLeave: N,
        children: [
            "left" === d && V,
            (0, t.jsxs)("span", {
                className: s()(m.VW, { [m.mO]: C }),
                style: { color: R && !I && null != r ? r : void 0, ...(j ? T : {}) },
                children: [
                    null != p
                        ? (0, t.jsx)(o.E, { tag: "span", color: "currentColor", variant: p, ...L })
                        : (0, t.jsx)("span", { ...L }),
                    j &&
                        (null != p
                            ? (0, t.jsx)(o.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: p,
                                  ...G,
                              })
                            : (0, t.jsx)("span", { "aria-hidden": !0, ...G })),
                ],
            }),
            "right" === d && V,
        ],
    });
}
function f(l) {
    let {
            name: n,
            colorString: e,
            roleName: a,
            dotAlignment: r,
            className: s,
            colorStrings: o,
            animateRoleGradient: c,
            displayInline: h,
            ref: A,
            ...m
        } = l,
        f = (0, u.bG)([d.Ay], () => d.Ay.roleStyle),
        g = "username" === f,
        p = (0, t.jsx)(v, {
            roleStyle: f,
            name: n,
            colorString: e,
            roleName: a,
            dotAlignment: r,
            className: s,
            colorStrings: o,
            animateRoleGradient: c,
            displayInline: h,
        }),
        w = g && null != e ? { color: e } : void 0;
    return (0, t.jsx)(i.Anchor, { ...m, children: p, style: w, ref: A });
}
function g(l) {
    let n = (0, u.bG)([d.Ay], () => d.Ay.roleStyle);
    return (0, t.jsx)(v, { ...l, roleStyle: n });
}
