a.r(r),
    a.d(r, {
        BadgeImageWithProgressCircle: () => l,
        default: () => d,
    });
var c = a(54381);
a(473749);
var n = a(925477),
    o = a(793030),
    t = a(410030),
    s = a(457082),
    i = a(164300);
let l = (e) => {
        let { src: r, alt: a, progressCircleText: l, progressCirclePercent: d, progressCircleUrgency: g } = e,
            u = (0, t.ZP)();
        return (0, c.jsxs)("div", {
            className: i.badgeImageContainer,
            children: [
                (0, c.jsx)("img", {
                    alt: a,
                    src: r,
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
                                color: "text-subtle",
                                children: l,
                            }),
                        }),
                    }),
            ],
        });
    },
    d = l;
