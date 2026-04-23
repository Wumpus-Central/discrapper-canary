"use strict";
n.d(t, { V: () => E, g: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(311907),
    u = n(349288),
    c = n(473193),
    d = n(775602),
    _ = n(36075),
    f = n(545442),
    p = n(791347);
function h(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: s,
            roleName: l,
            colorStrings: u,
            dotAlignment: d = "left",
            className: h,
            nameTextClassName: E,
            animateRoleGradient: m,
            variant: g,
            displayNameStylesFont: A = "",
        } = e,
        I = i.useContext(c.C),
        [T, S] = i.useState(!1),
        y = i.useCallback(() => {
            S(!0);
        }, []),
        N = i.useCallback(() => {
            S(!1);
        }, []),
        v = "username" === t,
        C = null != u && null != u.primaryColor && null != u.secondaryColor,
        O = v && C,
        {
            gradientStyle: R,
            gradientClassname: b,
            gradientGlowClassname: D,
        } = (0, _.v5)({ colorStrings: u, roleStyle: "username", animateGradient: m || T || I?.animate }),
        L = (0, _.CR)(n),
        w = { className: a()(p.UU, E, A, { [p.Xh]: v, [b]: O }), children: L },
        M = { className: a()(p.lD, D, A), children: n },
        P =
            "dot" === t
                ? (0, r.jsx)(f.W, {
                      color: s,
                      colors: C ? u : null,
                      name: l,
                      className: "left" === d ? p.Hf : p.WN,
                      hoverOverride: m || T || I?.animate,
                  })
                : null;
    return (0, r.jsxs)("span", {
        className: a()(h, p.kL),
        onMouseEnter: y,
        onMouseLeave: N,
        children: [
            "left" === d && P,
            (0, r.jsxs)("span", {
                className: p.VW,
                style: { color: v && !C && null != s ? s : void 0, ...(O ? R : {}) },
                children: [
                    null != g
                        ? (0, r.jsx)(o.E, { tag: "span", color: "currentColor", variant: g, ...w })
                        : (0, r.jsx)("span", { ...w }),
                    O &&
                        (null != g
                            ? (0, r.jsx)(o.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: g,
                                  ...M,
                              })
                            : (0, r.jsx)("span", { "aria-hidden": !0, ...M })),
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
            roleName: i,
            dotAlignment: s,
            className: a,
            colorStrings: o,
            animateRoleGradient: c,
            ref: _,
            ...f
        } = e,
        p = (0, l.bG)([d.A], () => d.A.roleStyle),
        E = "username" === p,
        m = (0, r.jsx)(h, {
            roleStyle: p,
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: s,
            className: a,
            colorStrings: o,
            animateRoleGradient: c,
        }),
        g = E && null != n ? { color: n } : void 0;
    return (0, r.jsx)(u.Anchor, { ...f, children: m, style: g, ref: _ });
}
function m(e) {
    let t = (0, l.bG)([d.A], () => d.A.roleStyle);
    return (0, r.jsx)(h, { ...e, roleStyle: t });
}
