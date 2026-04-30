"use strict";
n.d(t, { V: () => g, g: () => x });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(834730),
    o = n(17928),
    c = n(349288),
    u = n(473193),
    d = n(775602),
    h = n(36075),
    m = n(545442),
    p = n(791347);
function f(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: s,
            roleName: o,
            colorStrings: c,
            dotAlignment: d = "left",
            className: f,
            nameTextClassName: g,
            animateRoleGradient: x,
            variant: C,
            displayNameStylesFont: A = "",
        } = e,
        E = i.useContext(u.C),
        [I, y] = i.useState(!1),
        v = i.useCallback(() => {
            y(!0);
        }, []),
        S = i.useCallback(() => {
            y(!1);
        }, []),
        N = "username" === t,
        j = null != c && null != c.primaryColor && null != c.secondaryColor,
        _ = N && j,
        {
            gradientStyle: T,
            gradientClassname: b,
            gradientGlowClassname: R,
        } = (0, h.v5)({ colorStrings: c, roleStyle: "username", animateGradient: x || I || E?.animate }),
        O = (0, h.CR)(n),
        L = { className: a()(p.UU, g, A, { [p.Xh]: N, [b]: _ }), children: O },
        w = { className: a()(p.lD, R, A), children: n },
        M =
            "dot" === t
                ? (0, l.jsx)(m.W, {
                      color: s,
                      colors: j ? c : null,
                      name: o,
                      className: "left" === d ? p.Hf : p.WN,
                      hoverOverride: x || I || E?.animate,
                  })
                : null;
    return (0, l.jsxs)("span", {
        className: a()(f, p.kL),
        onMouseEnter: v,
        onMouseLeave: S,
        children: [
            "left" === d && M,
            (0, l.jsxs)("span", {
                className: p.VW,
                style: { color: N && !j && null != s ? s : void 0, ...(_ ? T : {}) },
                children: [
                    null != C
                        ? (0, l.jsx)(r.E, { tag: "span", color: "currentColor", variant: C, ...L })
                        : (0, l.jsx)("span", { ...L }),
                    _ &&
                        (null != C
                            ? (0, l.jsx)(r.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: C,
                                  ...w,
                              })
                            : (0, l.jsx)("span", { "aria-hidden": !0, ...w })),
                ],
            }),
            "right" === d && M,
        ],
    });
}
function g(e) {
    let {
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: s,
            className: a,
            colorStrings: r,
            animateRoleGradient: u,
            ref: h,
            ...m
        } = e,
        p = (0, o.bG)([d.A], () => d.A.roleStyle),
        g = "username" === p,
        x = (0, l.jsx)(f, {
            roleStyle: p,
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: s,
            className: a,
            colorStrings: r,
            animateRoleGradient: u,
        }),
        C = g && null != n ? { color: n } : void 0;
    return (0, l.jsx)(c.Anchor, { ...m, children: x, style: C, ref: h });
}
function x(e) {
    let t = (0, o.bG)([d.A], () => d.A.roleStyle);
    return (0, l.jsx)(f, { ...e, roleStyle: t });
}
