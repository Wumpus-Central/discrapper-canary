"use strict";
n.d(t, { V: () => g, g: () => x });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(28863),
    u = n(17928),
    c = n(473193),
    d = n(775602),
    h = n(36075),
    m = n(545442),
    f = n(400590);
function p(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: s,
            roleName: o,
            colorStrings: u,
            dotAlignment: d = "left",
            className: p,
            nameTextClassName: g,
            animateRoleGradient: x,
            variant: A,
            displayNameStylesFont: C = "",
            displayInline: E = !1,
        } = e,
        I = i.useContext(c.C),
        [y, S] = i.useState(!1),
        v = i.useCallback(() => {
            S(!0);
        }, []),
        N = i.useCallback(() => {
            S(!1);
        }, []),
        _ = "username" === t,
        T = null != u && null != u.primaryColor && null != u.secondaryColor,
        j = _ && T,
        {
            gradientStyle: b,
            gradientClassname: R,
            gradientGlowClassname: O,
        } = (0, h.v5)({ colorStrings: u, roleStyle: "username", animateGradient: x || y || I?.animate }),
        M = (0, h.CR)(n),
        L = { className: r()(f.UU, g, C, { [f.Xh]: _, [R]: j }), children: M },
        w = { className: r()(f.lD, O, C), children: n },
        k =
            "dot" === t
                ? (0, l.jsx)(m.W, {
                      color: s,
                      colors: T ? u : null,
                      name: o,
                      className: "left" === d ? f.Hf : f.WN,
                      hoverOverride: x || y || I?.animate,
                  })
                : null;
    return (0, l.jsxs)("span", {
        className: r()(p, f.kL, { [f.mO]: E }),
        onMouseEnter: v,
        onMouseLeave: N,
        children: [
            "left" === d && k,
            (0, l.jsxs)("span", {
                className: r()(f.VW, { [f.mO]: E }),
                style: { color: _ && !T && null != s ? s : void 0, ...(j ? b : {}) },
                children: [
                    null != A
                        ? (0, l.jsx)(a.E, { tag: "span", color: "currentColor", variant: A, ...L })
                        : (0, l.jsx)("span", { ...L }),
                    j &&
                        (null != A
                            ? (0, l.jsx)(a.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: A,
                                  ...w,
                              })
                            : (0, l.jsx)("span", { "aria-hidden": !0, ...w })),
                ],
            }),
            "right" === d && k,
        ],
    });
}
function g(e) {
    let {
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: s,
            className: r,
            colorStrings: a,
            animateRoleGradient: c,
            displayInline: h,
            ref: m,
            ...f
        } = e,
        g = (0, u.bG)([d.Ay], () => d.Ay.roleStyle),
        x = "username" === g,
        A = (0, l.jsx)(p, {
            roleStyle: g,
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: s,
            className: r,
            colorStrings: a,
            animateRoleGradient: c,
            displayInline: h,
        }),
        C = x && null != n ? { color: n } : void 0;
    return (0, l.jsx)(o.Anchor, { ...f, children: A, style: C, ref: m });
}
function x(e) {
    let t = (0, u.bG)([d.Ay], () => d.Ay.roleStyle);
    return (0, l.jsx)(p, { ...e, roleStyle: t });
}
