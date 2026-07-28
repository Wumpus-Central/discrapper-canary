l.d(t, { _: () => v, m: () => p });
var n = l(477900),
    r = l(582128),
    a = l(503698),
    i = l.n(a),
    s = l(149282),
    o = l(305003),
    c = l(752079),
    u = l(521e3),
    d = l(758836),
    m = l(690524),
    x = l(455156);
function f(e) {
    let { alt: t, className: l, artboard: a } = e,
        o = r.useContext(u.vf);
    return (0, n.jsx)("div", {
        role: "img",
        "aria-label": t,
        className: i()(m.eV, l),
        children:
            "STACKED COINS" === a
                ? (0, n.jsx)(s.s, { artboard: "STACKED COINS", eventTargetRef: o ?? void 0 })
                : (0, n.jsx)(s.s, { artboard: "SINGLE COIN", eventTargetRef: o ?? void 0 }),
    });
}
let p = {
    [d.Dp.FRACTIONAL_PREMIUM]: {
        render: (e) => {
            let { alt: t, className: l } = e;
            return (0, n.jsx)(f, { alt: t, className: l, artboard: "STACKED COINS" });
        },
    },
    [d.Dp.FRACTIONAL_PREMIUM_1_DAY]: {
        render: (e) => {
            let { alt: t, className: l } = e;
            return (0, n.jsx)(f, { alt: t, className: l, artboard: "SINGLE COIN" });
        },
    },
    [d.Dp.ORB_PROFILE_BADGE]: {
        render: (e) => {
            let { animationState: t = "on", className: l } = e;
            return (0, n.jsx)(c.A, { animationState: t, className: i()(m.oy, l) });
        },
    },
};
function v() {
    return { id: o.A.ORB_PROFILE_BADGE, icon: o.A.ORB_PROFILE_BADGE, iconSrc: x.A, description: "", isPreviewMode: !0 };
}
