"use strict";
n.d(t, { m: () => f, _: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(149282),
    l = n(305003),
    u = n(752079),
    c = n(521e3),
    d = n(758836),
    _ = n(68644);
function h(e) {
    let { alt: t, className: n, artboard: s } = e,
        l = r.useContext(c.vf);
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": t,
        className: a()(_.eV, n),
        children:
            "STACKED COINS" === s
                ? (0, i.jsx)(o.s, { artboard: "STACKED COINS", eventTargetRef: l ?? void 0 })
                : (0, i.jsx)(o.s, { artboard: "SINGLE COIN", eventTargetRef: l ?? void 0 }),
    });
}
let f = {
    [d.Dp.FRACTIONAL_PREMIUM]: {
        render: (e) => {
            let { alt: t, className: n } = e;
            return (0, i.jsx)(h, { alt: t, className: n, artboard: "STACKED COINS" });
        },
    },
    [d.Dp.FRACTIONAL_PREMIUM_1_DAY]: {
        render: (e) => {
            let { alt: t, className: n } = e;
            return (0, i.jsx)(h, { alt: t, className: n, artboard: "SINGLE COIN" });
        },
    },
    [d.Dp.ORB_PROFILE_BADGE]: {
        render: (e) => {
            let { animationState: t = "on", className: n } = e;
            return (0, i.jsx)(u.A, { animationState: t, className: a()(_.oy, n) });
        },
    },
};
function p() {
    return {
        id: l.A.ORB_PROFILE_BADGE,
        icon: l.A.ORB_PROFILE_BADGE,
        iconSrc:
            "https://cdn.discordapp.com/assets/content/7ec17eb0599fb95fce5411a3261bcbf6aaa81ce85ec91bcf1038f4cf36d35712.png",
        description: "",
        isPreviewMode: !0,
    };
}
