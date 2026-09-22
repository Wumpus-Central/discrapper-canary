n.d(t, { K: () => m });
var r = n(477900),
    l = n(17928),
    i = n(834730),
    s = n(778712),
    a = n(775602),
    o = n(951305),
    c = n(552736),
    u = n(380619),
    d = n(298305),
    g = n(420754);
function m() {
    let e = (0, l.bG)([a.Ay], () => a.Ay.useReducedMotion),
        { claimableRewards: t } = (0, o.Pv)(),
        n = (0, c.A)(),
        m = n?.planSelection;
    if (null == m || null == t || 0 === t.length) return null;
    let h = (0, u.gc)(m.getBannerImageUrl?.()),
        x = (0, u.K5)(m.gradientConfig, { defaultAngle: 180 });
    return (0, r.jsxs)("div", {
        className: g.us,
        style: h ?? x,
        children: [
            (0, r.jsxs)("div", {
                className: g.ZR,
                children: [
                    (0, r.jsx)(i.E, {
                        variant: "text-sm/semibold",
                        color: "text-overlay-light",
                        children: m.heading(),
                    }),
                    null != m.subheading &&
                        (0, r.jsx)(i.E, {
                            variant: "text-sm/normal",
                            color: "text-overlay-light",
                            children: m.subheading(t.length),
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.my,
                children: (0, r.jsx)(d.A, {
                    maxRewardImageSrc: m.getImageUrl(!0, e),
                    claimableRewards: t,
                    size: s._3.SIZE_80,
                }),
            }),
        ],
    });
}
