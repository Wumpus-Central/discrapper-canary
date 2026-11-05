var r = n(477900),
    o = n(855986),
    i = n(834730),
    a = n(778712),
    s = n(775602),
    l = n(418200),
    c = n(552736),
    g = n(810498),
    u = n(298305),
    m = n(420754);
n.d(
    e,
    {},
    {
        K: function () {
            let t = (0, o.bG)([s.Ay], () => s.Ay.useReducedMotion),
                { claimableRewards: e } = (0, l.Pv)(),
                n = (0, c.A)(),
                d = n?.planSelection;
            if (null == d || null == e || 0 === e.length) return null;
            let I = (0, g.gc)(d.getBannerImageUrl?.()),
                x = (0, g.K5)(d.gradientConfig, { defaultAngle: 180 });
            return (0, r.jsxs)("div", {
                className: m.us,
                style: I ?? x,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.ZR,
                        children: [
                            (0, r.jsx)(i.E, {
                                variant: "body-sm/semibold",
                                color: "text-overlay-light",
                                children: d.heading(),
                            }),
                            null != d.subheading &&
                                (0, r.jsx)(i.E, {
                                    variant: "body-sm/normal",
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
        },
    },
);
