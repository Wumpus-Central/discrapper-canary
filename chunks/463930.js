"use strict";
n.d(t, { V: () => g, g: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(311907),
    c = n(349288),
    u = n(473193),
    d = n(775602),
    h = n(36075),
    m = n(545442),
    p = n(71411);
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
            animateRoleGradient: _,
            variant: x,
            displayNameStylesFont: A = "",
        } = e,
        C = l.useContext(u.C),
        [E, I] = l.useState(!1),
        v = l.useCallback(() => {
            I(!0);
        }, []),
        y = l.useCallback(() => {
            I(!1);
        }, []),
        S = "username" === t,
        b = null != c && null != c.primaryColor && null != c.secondaryColor,
        N = S && b,
        {
            gradientStyle: T,
            gradientClassname: j,
            gradientGlowClassname: R,
        } = (0, h.v5)({ colorStrings: c, roleStyle: "username", animateGradient: _ || E || C?.animate }),
        w = (0, h.CR)(n),
        L = { className: r()(p.UU, g, A, { [p.Xh]: S, [j]: N }), children: w },
        M = { className: r()(p.lD, R, A), children: n },
        k =
            "dot" === t
                ? (0, i.jsx)(m.W, {
                      color: s,
                      colors: b ? c : null,
                      name: o,
                      className: "left" === d ? p.Hf : p.WN,
                      hoverOverride: _ || E || C?.animate,
                  })
                : null;
    return (0, i.jsxs)("span", {
        className: r()(f, p.kL),
        onMouseEnter: v,
        onMouseLeave: y,
        children: [
            "left" === d && k,
            (0, i.jsxs)("span", {
                className: p.VW,
                style: { color: S && !b && null != s ? s : void 0, ...(N ? T : {}) },
                children: [
                    null != x
                        ? (0, i.jsx)(a.E, { tag: "span", color: "currentColor", variant: x, ...L })
                        : (0, i.jsx)("span", { ...L }),
                    N &&
                        (null != x
                            ? (0, i.jsx)(a.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: x,
                                  ...M,
                              })
                            : (0, i.jsx)("span", { "aria-hidden": !0, ...M })),
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
            roleName: l,
            dotAlignment: s,
            className: r,
            colorStrings: a,
            animateRoleGradient: u,
            ref: h,
            ...m
        } = e,
        p = (0, o.bG)([d.A], () => d.A.roleStyle),
        g = "username" === p,
        _ = (0, i.jsx)(f, {
            roleStyle: p,
            name: t,
            colorString: n,
            roleName: l,
            dotAlignment: s,
            className: r,
            colorStrings: a,
            animateRoleGradient: u,
        }),
        x = g && null != n ? { color: n } : void 0;
    return (0, i.jsx)(c.Anchor, { ...m, children: _, style: x, ref: h });
}
function _(e) {
    let t = (0, o.bG)([d.A], () => d.A.roleStyle);
    return (0, i.jsx)(f, { ...e, roleStyle: t });
}
