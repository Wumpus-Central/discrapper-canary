"use strict";
n.d(t, { V: () => I, g: () => f });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(17928),
    d = n(349288),
    c = n(473193),
    u = n(775602),
    _ = n(36075),
    E = n(545442),
    A = n(71411);
function h(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: a,
            roleName: o,
            colorStrings: d,
            dotAlignment: u = "left",
            className: h,
            nameTextClassName: I,
            animateRoleGradient: f,
            variant: p,
            displayNameStylesFont: T = "",
            displayInline: m = !1,
        } = e,
        g = r.useContext(c.C),
        [S, N] = r.useState(!1),
        C = r.useCallback(() => {
            N(!0);
        }, []),
        R = r.useCallback(() => {
            N(!1);
        }, []),
        O = "username" === t,
        L = null != d && null != d.primaryColor && null != d.secondaryColor,
        D = O && L,
        {
            gradientStyle: y,
            gradientClassname: v,
            gradientGlowClassname: b,
        } = (0, _.v5)({ colorStrings: d, roleStyle: "username", animateGradient: f || S || g?.animate }),
        M = (0, _.CR)(n),
        P = { className: s()(A.UU, I, T, { [A.Xh]: O, [v]: D }), children: M },
        U = { className: s()(A.lD, b, T), children: n },
        w =
            "dot" === t
                ? (0, i.jsx)(E.W, {
                      color: a,
                      colors: L ? d : null,
                      name: o,
                      className: "left" === u ? A.Hf : A.WN,
                      hoverOverride: f || S || g?.animate,
                  })
                : null;
    return (0, i.jsxs)("span", {
        className: s()(h, A.kL, { [A.mO]: m }),
        onMouseEnter: C,
        onMouseLeave: R,
        children: [
            "left" === u && w,
            (0, i.jsxs)("span", {
                className: s()(A.VW, { [A.mO]: m }),
                style: { color: O && !L && null != a ? a : void 0, ...(D ? y : {}) },
                children: [
                    null != p
                        ? (0, i.jsx)(l.E, { tag: "span", color: "currentColor", variant: p, ...P })
                        : (0, i.jsx)("span", { ...P }),
                    D &&
                        (null != p
                            ? (0, i.jsx)(l.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: p,
                                  ...U,
                              })
                            : (0, i.jsx)("span", { "aria-hidden": !0, ...U })),
                ],
            }),
            "right" === u && w,
        ],
    });
}
function I(e) {
    let {
            name: t,
            colorString: n,
            roleName: r,
            dotAlignment: a,
            className: s,
            colorStrings: l,
            animateRoleGradient: c,
            displayInline: _,
            ref: E,
            ...A
        } = e,
        I = (0, o.bG)([u.Ay], () => u.Ay.roleStyle),
        f = "username" === I,
        p = (0, i.jsx)(h, {
            roleStyle: I,
            name: t,
            colorString: n,
            roleName: r,
            dotAlignment: a,
            className: s,
            colorStrings: l,
            animateRoleGradient: c,
            displayInline: _,
        }),
        T = f && null != n ? { color: n } : void 0;
    return (0, i.jsx)(d.Anchor, { ...A, children: p, style: T, ref: E });
}
function f(e) {
    let t = (0, o.bG)([u.Ay], () => u.Ay.roleStyle);
    return (0, i.jsx)(h, { ...e, roleStyle: t });
}
