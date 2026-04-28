"use strict";
n.d(t, { V: () => g, g: () => _ });
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
            animateRoleGradient: _,
            variant: x,
            displayNameStylesFont: C = "",
        } = e,
        A = i.useContext(u.C),
        [E, I] = i.useState(!1),
        v = i.useCallback(() => {
            I(!0);
        }, []),
        y = i.useCallback(() => {
            I(!1);
        }, []),
        b = "username" === t,
        S = null != c && null != c.primaryColor && null != c.secondaryColor,
        N = b && S,
        {
            gradientStyle: j,
            gradientClassname: T,
            gradientGlowClassname: w,
        } = (0, h.v5)({ colorStrings: c, roleStyle: "username", animateGradient: _ || E || A?.animate }),
        R = (0, h.CR)(n),
        L = { className: a()(p.UU, g, C, { [p.Xh]: b, [T]: N }), children: R },
        k = { className: a()(p.lD, w, C), children: n },
        O =
            "dot" === t
                ? (0, l.jsx)(m.W, {
                      color: s,
                      colors: S ? c : null,
                      name: o,
                      className: "left" === d ? p.Hf : p.WN,
                      hoverOverride: _ || E || A?.animate,
                  })
                : null;
    return (0, l.jsxs)("span", {
        className: a()(f, p.kL),
        onMouseEnter: v,
        onMouseLeave: y,
        children: [
            "left" === d && O,
            (0, l.jsxs)("span", {
                className: p.VW,
                style: { color: b && !S && null != s ? s : void 0, ...(N ? j : {}) },
                children: [
                    null != x
                        ? (0, l.jsx)(r.E, { tag: "span", color: "currentColor", variant: x, ...L })
                        : (0, l.jsx)("span", { ...L }),
                    N &&
                        (null != x
                            ? (0, l.jsx)(r.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: x,
                                  ...k,
                              })
                            : (0, l.jsx)("span", { "aria-hidden": !0, ...k })),
                ],
            }),
            "right" === d && O,
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
        _ = (0, l.jsx)(f, {
            roleStyle: p,
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: s,
            className: a,
            colorStrings: r,
            animateRoleGradient: u,
        }),
        x = g && null != n ? { color: n } : void 0;
    return (0, l.jsx)(c.Anchor, { ...m, children: _, style: x, ref: h });
}
function _(e) {
    let t = (0, o.bG)([d.A], () => d.A.roleStyle);
    return (0, l.jsx)(f, { ...e, roleStyle: t });
}
