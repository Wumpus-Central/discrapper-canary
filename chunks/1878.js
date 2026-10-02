n.d(e, { K: () => d });
var r = n(477900),
    i = n(17928),
    l = n(834730),
    a = n(778712),
    s = n(775602),
    o = n(951305),
    c = n(552736),
    g = n(810498),
    u = n(298305),
    m = n(420754);
function d() {
    let t = (0, i.bG)([s.Ay], () => s.Ay.useReducedMotion),
        { claimableRewards: e } = (0, o.Pv)(),
        n = (0, c.A)(),
        d = n?.planSelection;
    if (null == d || null == e || 0 === e.length) return null;
    let x = (0, g.gc)(d.getBannerImageUrl?.()),
        T = (0, g.K5)(d.gradientConfig, { defaultAngle: 180 });
    return (0, r.jsxs)("div", {
        className: m.us,
        style: x ?? T,
        children: [
            (0, r.jsxs)("div", {
                className: m.ZR,
                children: [
                    (0, r.jsx)(l.E, {
                        variant: "text-sm/semibold",
                        color: "text-overlay-light",
                        children: d.heading(),
                    }),
                    null != d.subheading &&
                        (0, r.jsx)(l.E, {
                            variant: "text-sm/normal",
                            color: "text-overlay-light",
                            children: d.subheading(e.length),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: m.my,
                children: (0, r.jsx)(u.A, {
                    maxRewardImageSrc: d.getImageUrl(!0, t),
                    claimableRewards: e,
                    size: a._3.SIZE_80,
                }),
            }),
        ],
    });
}
