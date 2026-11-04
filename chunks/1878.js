var r = n(477900),
    i = n(855986),
    s = n(834730),
    a = n(778712),
    l = n(775602),
    o = n(418200),
    c = n(552736),
    g = n(810498),
    u = n(298305),
    d = n(420754);
n.d(
    e,
    {},
    {
        K: function () {
            let t = (0, i.bG)([l.Ay], () => l.Ay.useReducedMotion),
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
                            (0, r.jsx)(s.E, {
                                variant: "body-sm/semibold",
                                color: "text-overlay-light",
                                children: m.heading(),
                            }),
                            null != m.subheading &&
                                (0, r.jsx)(s.E, {
                                    variant: "body-sm/normal",
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
                            size: a._3.SIZE_80,
                        }),
                    }),
                ],
            });
        },
    },
);
