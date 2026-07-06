r.d(t, { m: () => v, _: () => E });
var n = r(627968),
    o = r(64700),
    s = r(503698),
    a = r.n(s),
    c = r(149282),
    l = r(305003),
    u = r(752079),
    i = r(521e3),
    d = r(758836),
    p = r(68644);
function f(e) {
    let { alt: t, className: r, artboard: s } = e,
        l = o.useContext(i.vf);
    return (0, n.jsx)("div", {
        role: "img",
        "aria-label": t,
        className: a()(p.eV, r),
        children:
            "STACKED COINS" === s
                ? (0, n.jsx)(c.s, { artboard: "STACKED COINS", eventTargetRef: l ?? void 0 })
                : (0, n.jsx)(c.s, { artboard: "SINGLE COIN", eventTargetRef: l ?? void 0 }),
    });
}
let v = {
    [d.Dp.FRACTIONAL_PREMIUM]: {
        render: (e) => {
            let { alt: t, className: r } = e;
            return (0, n.jsx)(f, { alt: t, className: r, artboard: "STACKED COINS" });
        },
    },
    [d.Dp.FRACTIONAL_PREMIUM_1_DAY]: {
        render: (e) => {
            let { alt: t, className: r } = e;
            return (0, n.jsx)(f, { alt: t, className: r, artboard: "SINGLE COIN" });
        },
    },
    [d.Dp.ORB_PROFILE_BADGE]: {
        render: (e) => {
            let { animationState: t = "on", className: r } = e;
            return (0, n.jsx)(u.A, { animationState: t, className: a()(p.oy, r) });
        },
    },
};
function E() {
    return {
        id: l.A.ORB_PROFILE_BADGE,
        icon: l.A.ORB_PROFILE_BADGE,
        iconSrc:
            "https://cdn.discordapp.com/assets/content/7ec17eb0599fb95fce5411a3261bcbf6aaa81ce85ec91bcf1038f4cf36d35712.png",
        description: "",
        isPreviewMode: !0,
    };
}
