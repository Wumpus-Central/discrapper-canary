n.d(e, { K: () => m });
var r = n(477900),
    i = n(17928),
    l = n(834730),
    s = n(778712),
    a = n(775602),
    o = n(951305),
    c = n(552736),
    g = n(810498),
    u = n(298305),
    d = n(420754);
function m() {
    let t = (0, i.bG)([a.Ay], () => a.Ay.useReducedMotion),
        { claimableRewards: e } = (0, o.Pv)(),
        n = (0, c.A)(),
        m = n?.planSelection;
    if (null == m || null == e || 0 === e.length) return null;
    let x = (0, g.gc)(m.getBannerImageUrl?.()),
        h = (0, g.K5)(m.gradientConfig, { defaultAngle: 180 });
    return (0, r.jsxs)("div", {
        className: d.us,
        style: x ?? h,
        children: [
            (0, r.jsxs)("div", {
                className: d.ZR,
                children: [
                    (0, r.jsx)(l.E, {
                        variant: "text-sm/semibold",
                        color: "text-overlay-light",
                        children: m.heading(),
                    }),
                    null != m.subheading &&
                        (0, r.jsx)(l.E, {
                            variant: "text-sm/normal",
                            color: "text-overlay-light",
                            children: m.subheading(e.length),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d.my,
                children: (0, r.jsx)(u.A, {
                    maxRewardImageSrc: m.getImageUrl(!0, t),
                    claimableRewards: e,
                    size: s._3.SIZE_80,
                }),
            }),
        ],
    });
}
