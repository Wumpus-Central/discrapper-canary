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
    _ = n(36075),
    h = n(545442),
    f = n(71411);
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
            displayInline: I = !1,
        } = e,
        T = r.useContext(c.C),
        [S, y] = r.useState(!1),
        C = r.useCallback(() => {
            y(!0);
        }, []),
        N = r.useCallback(() => {
            y(!1);
        }, []),
        v = "username" === t,
        R = null != u && null != u.primaryColor && null != u.secondaryColor,
        O = v && R,
        {
            gradientStyle: b,
            gradientClassname: D,
            gradientGlowClassname: L,
        } = (0, _.v5)({ colorStrings: u, roleStyle: "username", animateGradient: m || S || T?.animate }),
        w = (0, _.CR)(n),
        M = { className: a()(f.UU, E, A, { [f.Xh]: v, [D]: O }), children: w },
        P = { className: a()(f.lD, L, A), children: n },
        x =
            "dot" === t
                ? (0, i.jsx)(h.W, {
                      color: s,
                      colors: R ? u : null,
                      name: l,
                      className: "left" === d ? f.Hf : f.WN,
                      hoverOverride: m || S || T?.animate,
                  })
                : null;
    return (0, i.jsxs)("span", {
        className: a()(p, f.kL, { [f.mO]: I }),
        onMouseEnter: C,
        onMouseLeave: N,
        children: [
            "left" === d && x,
            (0, i.jsxs)("span", {
                className: a()(f.VW, { [f.mO]: I }),
                style: { color: v && !R && null != s ? s : void 0, ...(O ? b : {}) },
                children: [
                    null != g
                        ? (0, i.jsx)(o.E, { tag: "span", color: "currentColor", variant: g, ...M })
                        : (0, i.jsx)("span", { ...M }),
                    O &&
                        (null != g
                            ? (0, i.jsx)(o.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: g,
                                  ...P,
                              })
                            : (0, i.jsx)("span", { "aria-hidden": !0, ...P })),
                ],
            }),
            "right" === d && x,
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
            displayInline: _,
            ref: h,
            ...f
        } = e,
        E = (0, l.bG)([d.Ay], () => d.Ay.roleStyle),
        m = "username" === E,
        g = (0, i.jsx)(p, {
            roleStyle: E,
            name: t,
            colorString: n,
            roleName: r,
            dotAlignment: s,
            className: a,
            colorStrings: o,
            animateRoleGradient: c,
            displayInline: _,
        }),
        A = m && null != n ? { color: n } : void 0;
    return (0, i.jsx)(u.Anchor, { ...f, children: g, style: A, ref: h });
}
function m(e) {
    let t = (0, l.bG)([d.Ay], () => d.Ay.roleStyle);
    return (0, i.jsx)(p, { ...e, roleStyle: t });
}
