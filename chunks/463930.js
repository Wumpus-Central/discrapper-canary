e.d(n, { V: () => p, g: () => y });
var r = e(477900),
    t = e(582128),
    a = e(503698),
    o = e.n(a),
    s = e(834730),
    i = e(28863),
    u = e(17928),
    c = e(473193),
    d = e(775602),
    h = e(36075),
    m = e(545442),
    A = e(400590);
function f(l) {
    let {
            roleStyle: n,
            name: e,
            colorString: a,
            roleName: i,
            colorStrings: u,
            dotAlignment: d = "left",
            className: f,
            nameTextClassName: p,
            animateRoleGradient: y,
            variant: g,
            displayNameStylesFont: v = "",
            displayInline: C = !1,
        } = l,
        _ = t.useContext(c.C),
        [E, R] = t.useState(!1),
        x = t.useCallback(() => {
            R(!0);
        }, []),
        N = t.useCallback(() => {
            R(!1);
        }, []),
        D = "username" === n,
        S = null != u && null != u.primaryColor && null != u.secondaryColor,
        j = D && S,
        {
            gradientStyle: w,
            gradientClassname: G,
            gradientGlowClassname: I,
        } = (0, h.v5)({ colorStrings: u, roleStyle: "username", animateGradient: y || E || _?.animate }),
        T = (0, h.CR)(e),
        H = { className: o()(A.UU, p, v, { [A.Xh]: D, [G]: j }), children: T },
        L = { className: o()(A.lD, I, v), children: e },
        V =
            "dot" === n
                ? (0, r.jsx)(m.W, {
                      color: a,
                      colors: S ? u : null,
                      name: i,
                      className: "left" === d ? A.Hf : A.WN,
                      hoverOverride: y || E || _?.animate,
                  })
                : null;
    return (0, r.jsxs)("span", {
        className: o()(f, A.kL, { [A.mO]: C }),
        onMouseEnter: x,
        onMouseLeave: N,
        children: [
            "left" === d && V,
            (0, r.jsxs)("span", {
                className: o()(A.VW, { [A.mO]: C }),
                style: { color: D && !S && null != a ? a : void 0, ...(j ? w : {}) },
                children: [
                    null != g
                        ? (0, r.jsx)(s.E, { tag: "span", color: "currentColor", variant: g, ...H })
                        : (0, r.jsx)("span", { ...H }),
                    j &&
                        (null != g
                            ? (0, r.jsx)(s.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: g,
                                  ...L,
                              })
                            : (0, r.jsx)("span", { "aria-hidden": !0, ...L })),
                ],
            }),
            "right" === d && V,
        ],
    });
}
function p(l) {
    let {
            name: n,
            colorString: e,
            roleName: t,
            dotAlignment: a,
            className: o,
            colorStrings: s,
            animateRoleGradient: c,
            displayInline: h,
            ref: m,
            ...A
        } = l,
        p = (0, u.bG)([d.Ay], () => d.Ay.roleStyle),
        y = "username" === p,
        g = (0, r.jsx)(f, {
            roleStyle: p,
            name: n,
            colorString: e,
            roleName: t,
            dotAlignment: a,
            className: o,
            colorStrings: s,
            animateRoleGradient: c,
            displayInline: h,
        }),
        v = y && null != e ? { color: e } : void 0;
    return (0, r.jsx)(i.Anchor, { ...A, children: g, style: v, ref: m });
}
function y(l) {
    let n = (0, u.bG)([d.Ay], () => d.Ay.roleStyle);
    return (0, r.jsx)(f, { ...l, roleStyle: n });
}
