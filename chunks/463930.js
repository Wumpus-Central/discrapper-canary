"use strict";
n.d(t, { V: () => m, g: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    u = n(349288),
    c = n(473193),
    d = n(775602),
    _ = n(36075),
    f = n(545442),
    p = n(224896);
function h(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: a,
            roleName: l,
            colorStrings: u,
            dotAlignment: d = "left",
            className: h,
            nameTextClassName: m,
            animateRoleGradient: g,
            variant: E,
            displayNameStylesFont: A = "",
        } = e,
        I = i.useContext(c.C),
        [T, y] = i.useState(!1),
        S = i.useCallback(() => {
            y(!0);
        }, []),
        v = i.useCallback(() => {
            y(!1);
        }, []),
        C = "username" === t,
        b = "dot" === t,
        N = null != u && null != u.primaryColor && null != u.secondaryColor,
        R = C && N,
        {
            gradientStyle: O,
            gradientClassname: D,
            gradientGlowClassname: L,
        } = (0, _.v5)({ colorStrings: u, roleStyle: "username", animateGradient: g || T || I?.animate }),
        w = (0, _.CR)(n),
        x = { className: s()(p.UU, m, A, { [p.Xh]: C, [D]: R }), children: w },
        P = { className: s()(p.lD, L, A), children: n },
        M = b
            ? (0, r.jsx)(f.W, {
                  color: a,
                  colors: N ? u : null,
                  name: l,
                  className: "left" === d ? p.Hf : p.WN,
                  hoverOverride: g || T || I?.animate,
              })
            : null;
    return (0, r.jsxs)("span", {
        className: s()(h, p.kL),
        onMouseEnter: S,
        onMouseLeave: v,
        children: [
            "left" === d && M,
            (0, r.jsxs)("span", {
                className: p.VW,
                style: { color: C && !N && null != a ? a : void 0, ...(R ? O : {}) },
                children: [
                    null != E
                        ? (0, r.jsx)(o.EYj, { tag: "span", color: "currentColor", variant: E, ...x })
                        : (0, r.jsx)("span", { ...x }),
                    R &&
                        (null != E
                            ? (0, r.jsx)(o.EYj, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: E,
                                  ...P,
                              })
                            : (0, r.jsx)("span", { "aria-hidden": !0, ...P })),
                ],
            }),
            "right" === d && M,
        ],
    });
}
function m(e) {
    let {
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: a,
            className: s,
            colorStrings: o,
            animateRoleGradient: c,
            ref: _,
            ...f
        } = e,
        p = (0, l.bG)([d.A], () => d.A.roleStyle),
        m = "username" === p,
        g = (0, r.jsx)(h, {
            roleStyle: p,
            name: t,
            colorString: n,
            roleName: i,
            dotAlignment: a,
            className: s,
            colorStrings: o,
            animateRoleGradient: c,
        }),
        E = m && null != n ? { color: n } : void 0;
    return (0, r.jsx)(u.Anchor, { ...f, children: g, style: E, ref: _ });
}
function g(e) {
    let t = (0, l.bG)([d.A], () => d.A.roleStyle);
    return (0, r.jsx)(h, { ...e, roleStyle: t });
}
