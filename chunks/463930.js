"use strict";
n.d(t, { V: () => f, g: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(17928),
    d = n(349288),
    _ = n(473193),
    u = n(775602),
    c = n(36075),
    E = n(545442),
    h = n(791347);
function m(e) {
    let {
            roleStyle: t,
            name: n,
            colorString: s,
            roleName: l,
            colorStrings: d,
            dotAlignment: u = "left",
            className: m,
            nameTextClassName: f,
            animateRoleGradient: g,
            variant: p,
            displayNameStylesFont: A = "",
        } = e,
        I = r.useContext(_.C),
        [T, S] = r.useState(!1),
        N = r.useCallback(() => {
            S(!0);
        }, []),
        C = r.useCallback(() => {
            S(!1);
        }, []),
        R = "username" === t,
        O = null != d && null != d.primaryColor && null != d.secondaryColor,
        y = R && O,
        {
            gradientStyle: v,
            gradientClassname: D,
            gradientGlowClassname: L,
        } = (0, c.v5)({ colorStrings: d, roleStyle: "username", animateGradient: g || T || I?.animate }),
        b = (0, c.CR)(n),
        w = { className: a()(h.UU, f, A, { [h.Xh]: R, [D]: y }), children: b },
        P = { className: a()(h.lD, L, A), children: n },
        k =
            "dot" === t
                ? (0, i.jsx)(E.W, {
                      color: s,
                      colors: O ? d : null,
                      name: l,
                      className: "left" === u ? h.Hf : h.WN,
                      hoverOverride: g || T || I?.animate,
                  })
                : null;
    return (0, i.jsxs)("span", {
        className: a()(m, h.kL),
        onMouseEnter: N,
        onMouseLeave: C,
        children: [
            "left" === u && k,
            (0, i.jsxs)("span", {
                className: h.VW,
                style: { color: R && !O && null != s ? s : void 0, ...(y ? v : {}) },
                children: [
                    null != p
                        ? (0, i.jsx)(o.E, { tag: "span", color: "currentColor", variant: p, ...w })
                        : (0, i.jsx)("span", { ...w }),
                    y &&
                        (null != p
                            ? (0, i.jsx)(o.E, {
                                  tag: "span",
                                  color: "currentColor",
                                  "aria-hidden": !0,
                                  variant: p,
                                  ...P,
                              })
                            : (0, i.jsx)("span", { "aria-hidden": !0, ...P })),
                ],
            }),
            "right" === u && k,
        ],
    });
}
function f(e) {
    let {
            name: t,
            colorString: n,
            roleName: r,
            dotAlignment: s,
            className: a,
            colorStrings: o,
            animateRoleGradient: _,
            ref: c,
            ...E
        } = e,
        h = (0, l.bG)([u.A], () => u.A.roleStyle),
        f = "username" === h,
        g = (0, i.jsx)(m, {
            roleStyle: h,
            name: t,
            colorString: n,
            roleName: r,
            dotAlignment: s,
            className: a,
            colorStrings: o,
            animateRoleGradient: _,
        }),
        p = f && null != n ? { color: n } : void 0;
    return (0, i.jsx)(d.Anchor, { ...E, children: g, style: p, ref: c });
}
function g(e) {
    let t = (0, l.bG)([u.A], () => u.A.roleStyle);
    return (0, i.jsx)(m, { ...e, roleStyle: t });
}
