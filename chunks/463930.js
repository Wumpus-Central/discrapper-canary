"use strict";
n.d(t, { V: () => E, g: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(17928),
    u = n(349288),
    c = n(473193),
    d = n(775602),
    _ = n(521100),
    f = n(545442),
    h = n(791347);
function p(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: s,
            roleName: l,
            colorStrings: u,
            dotAlignment: d = "left",
            className: p,
            nameTextClassName: E,
            animateRoleGradient: m,
            variant: g,
            displayNameStylesFont: A = "",
        } = e,
        I = r.useContext(c.C),
        [T, S] = r.useState(!1),
        N = r.useCallback(() => {
            S(!0);
        }, []),
        y = r.useCallback(() => {
            S(!1);
        }, []),
        C = "username" === t,
        v = null != u && null != u.primaryColor && null != u.secondaryColor,
        O = C && v,
        {
            gradientStyle: R,
            gradientClassname: b,
            gradientGlowClassname: D,
        } = (0, _.v5)({ colorStrings: u, roleStyle: "username", animateGradient: m || T || I?.animate }),
        L = (0, _.CR)(n),
        w = { className: a()(h.UU, E, A, { [h.Xh]: C, [b]: O }), children: L },
        M = { className: a()(h.lD, D, A), children: n },
        P =
            "dot" === t
                ? (0, i.jsx)(f.W, {
                      color: s,
                      colors: v ? u : null,
                      name: l,
                      className: "left" === d ? h.Hf : h.WN,
                      hoverOverride: m || T || I?.animate,
                  })
                : null;
    return (0, i.jsxs)("span", {
        className: a()(p, h.kL),
        onMouseEnter: N,
        onMouseLeave: y,
        children: [
            "left" === d && P,
            (0, i.jsxs)("span", {
                className: h.VW,
                style: { color: C && !v && null != s ? s : void 0, ...(O ? R : {}) },
                children: [
                    null != g
                        ? (0, i.jsx)(o.E, { tag: "span", color: "currentColor", variant: g, ...w })
                        : (0, i.jsx)("span", { ...w }),
                    O &&
                        (null != g
                            ? (0, i.jsx)(o.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: g,
                                  ...M,
                              })
                            : (0, i.jsx)("span", { "aria-hidden": !0, ...M })),
                ],
            }),
            "right" === d && P,
        ],
    });
}
function E(e) {
    let {
            name: t,
            colorString: n,
            roleName: r,
            dotAlignment: s,
            className: a,
            colorStrings: o,
            animateRoleGradient: c,
            ref: _,
            ...f
        } = e,
        h = (0, l.bG)([d.A], () => d.A.roleStyle),
        E = "username" === h,
        m = (0, i.jsx)(p, {
            roleStyle: h,
            name: t,
            colorString: n,
            roleName: r,
            dotAlignment: s,
            className: a,
            colorStrings: o,
            animateRoleGradient: c,
        }),
        g = E && null != n ? { color: n } : void 0;
    return (0, i.jsx)(u.Anchor, { ...f, children: m, style: g, ref: _ });
}
function m(e) {
    let t = (0, l.bG)([d.A], () => d.A.roleStyle);
    return (0, i.jsx)(p, { ...e, roleStyle: t });
}
