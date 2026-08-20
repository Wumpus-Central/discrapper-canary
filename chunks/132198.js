t.d(r, { _: () => O, m: () => N });
var a = t(477900),
    s = t(582128),
    n = t(503698),
    i = t.n(n),
    d = t(149282),
    o = t(305003),
    c = t(752079),
    l = t(521e3),
    A = t(758836),
    I = t(121615),
    C = t(455156);
function E(e) {
    let { alt: r, className: t, artboard: n } = e,
        o = s.useContext(l.vf);
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": r,
        className: i()(I.eV, t),
        children:
            "STACKED COINS" === n
                ? (0, a.jsx)(d.s, { artboard: "STACKED COINS", eventTargetRef: o ?? void 0 })
                : (0, a.jsx)(d.s, { artboard: "SINGLE COIN", eventTargetRef: o ?? void 0 }),
    });
}
let N = {
    [A.Dp.FRACTIONAL_PREMIUM]: {
        render: (e) => {
            let { alt: r, className: t } = e;
            return (0, a.jsx)(E, { alt: r, className: t, artboard: "STACKED COINS" });
        },
    },
    [A.Dp.FRACTIONAL_PREMIUM_1_DAY]: {
        render: (e) => {
            let { alt: r, className: t } = e;
            return (0, a.jsx)(E, { alt: r, className: t, artboard: "SINGLE COIN" });
        },
    },
    [A.Dp.ORB_PROFILE_BADGE]: {
        render: (e) => {
            let { animationState: r = "on", className: t } = e;
            return (0, a.jsx)(c.A, { animationState: r, className: i()(I.oy, t) });
        },
    },
};
function O() {
    return { id: o.A.ORB_PROFILE_BADGE, icon: o.A.ORB_PROFILE_BADGE, iconSrc: C.A, description: "", isPreviewMode: !0 };
}
