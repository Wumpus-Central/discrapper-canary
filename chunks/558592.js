e.r(a),
    e.d(a, {
        BadgeImageWithProgressCircle: () => l,
        default: () => d,
    });
var c = e(54381);
e(473749);
var n = e(925477),
    o = e(793030),
    t = e(410030),
    s = e(457082),
    i = e(768917);
let l = (r) => {
        let { src: a, alt: e, progressCircleText: l, progressCirclePercent: d, progressCircleUrgency: g } = r,
            u = (0, t.ZP)();
        return (0, c.jsxs)("div", {
            className: i.badgeImageContainer,
            children: [
                (0, c.jsx)("img", {
                    alt: e,
                    src: a,
                    className: i.badgeImage,
                }),
                null != l &&
                    null != d &&
                    null != g &&
                    (0, c.jsx)("div", {
                        className: i.progressCircleContainer,
                        children: (0, c.jsx)(s.Z, {
                            innerRingPercent: d,
                            outerRingColor: "critical" === g ? "var(--red-new-74)" : "var(--opacity-orange-36)",
                            innerRingColor: "critical" === g ? "var(--red-new-43)" : "var(--opacity-orange-96)",
                            strokeWidth: 7,
                            backgroundCircleColor: (0, n.wj)(u) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
                            backgroundCircleBlurAmount: 2,
                            children: (0, c.jsx)(o.xvT, {
                                variant: "text-sm/semibold",
                                color: "text-secondary",
                                children: l,
                            }),
                        }),
                    }),
            ],
        });
    },
    d = l;
