n.d(t, { _: () => h, m: () => p });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(149282),
    u = n(305003),
    o = n(752079),
    d = n(521e3),
    c = n(758836),
    m = n(68644),
    x = n(455156);
function f(e) {
    let { alt: t, className: n, artboard: a } = e,
        u = r.useContext(d.vf);
    return (0, l.jsx)("div", {
        role: "img",
        "aria-label": t,
        className: i()(m.eV, n),
        children:
            "STACKED COINS" === a
                ? (0, l.jsx)(s.s, { artboard: "STACKED COINS", eventTargetRef: u ?? void 0 })
                : (0, l.jsx)(s.s, { artboard: "SINGLE COIN", eventTargetRef: u ?? void 0 }),
    });
}
let p = {
    [c.Dp.FRACTIONAL_PREMIUM]: {
        render: (e) => {
            let { alt: t, className: n } = e;
            return (0, l.jsx)(f, { alt: t, className: n, artboard: "STACKED COINS" });
        },
    },
    [c.Dp.FRACTIONAL_PREMIUM_1_DAY]: {
        render: (e) => {
            let { alt: t, className: n } = e;
            return (0, l.jsx)(f, { alt: t, className: n, artboard: "SINGLE COIN" });
        },
    },
    [c.Dp.ORB_PROFILE_BADGE]: {
        render: (e) => {
            let { animationState: t = "on", className: n } = e;
            return (0, l.jsx)(o.A, { animationState: t, className: i()(m.oy, n) });
        },
    },
};
function h() {
    return { id: u.A.ORB_PROFILE_BADGE, icon: u.A.ORB_PROFILE_BADGE, iconSrc: x.A, description: "", isPreviewMode: !0 };
}
