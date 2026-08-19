"use strict";
n.d(t, { V: () => g, g: () => x });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(17928),
    u = n(349288),
    c = n(473193),
    d = n(775602),
    h = n(36075),
    m = n(545442),
    f = n(58939);
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
            displayNameStylesFont: E = "",
            displayInline: C = !1,
        } = e,
        I = i.useContext(c.C),
        [y, S] = i.useState(!1),
        v = i.useCallback(() => {
            S(!0);
        }, []),
        _ = i.useCallback(() => {
            S(!1);
        }, []),
        N = "username" === t,
        T = null != u && null != u.primaryColor && null != u.secondaryColor,
        j = N && T,
        {
            gradientStyle: b,
            gradientClassname: R,
            gradientGlowClassname: L,
        } = (0, h.v5)({ colorStrings: u, roleStyle: "username", animateGradient: x || y || I?.animate }),
        O = (0, h.CR)(n),
        M = { className: r()(f.UU, g, E, { [f.Xh]: N, [R]: j }), children: O },
        w = { className: r()(f.lD, L, E), children: n },
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
        className: r()(p, f.kL, { [f.mO]: C }),
        onMouseEnter: v,
        onMouseLeave: _,
        children: [
            "left" === d && k,
            (0, l.jsxs)("span", {
                className: r()(f.VW, { [f.mO]: C }),
                style: { color: N && !T && null != s ? s : void 0, ...(j ? b : {}) },
                children: [
                    null != A
                        ? (0, l.jsx)(a.E, { tag: "span", color: "currentColor", variant: A, ...M })
                        : (0, l.jsx)("span", { ...M }),
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
        g = (0, o.bG)([d.Ay], () => d.Ay.roleStyle),
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
        E = x && null != n ? { color: n } : void 0;
    return (0, l.jsx)(u.Anchor, { ...f, children: A, style: E, ref: m });
}
function x(e) {
    let t = (0, o.bG)([d.Ay], () => d.Ay.roleStyle);
    return (0, l.jsx)(p, { ...e, roleStyle: t });
}
