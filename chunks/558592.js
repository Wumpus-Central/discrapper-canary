a.r(e),
    a.d(e, {
        BadgeImageWithProgressCircle: () => i,
        default: () => l,
    });
var c = a(54381);
a(473749);
var n = a(925477),
    o = a(410030),
    s = a(457082),
    t = a(768917);
let i = (r) => {
        let { src: e, alt: a, progressCircleText: i, progressCirclePercent: l, progressCircleUrgency: d } = r,
            g = (0, o.ZP)();
        return (0, c.jsxs)("div", {
            className: t.badgeImageContainer,
            children: [
                (0, c.jsx)("img", {
                    alt: a,
                    src: e,
                    className: t.badgeImage,
                }),
                null != i &&
                    null != l &&
                    null != d &&
                    (0, c.jsx)("div", {
                        className: t.progressCircleContainer,
                        children: (0, c.jsx)(s.Z, {
                            innerRingPercent: l,
                            outerRingColor: "critical" === d ? "var(--red-new-74)" : "var(--opacity-orange-36)",
                            innerRingColor: "critical" === d ? "var(--red-new-43)" : "var(--opacity-orange-96)",
                            strokeWidth: 7,
                            backgroundCircleColor: (0, n.wj)(g) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
                            backgroundCircleBlurAmount: 2,
                            children: (0, c.jsx)("span", {
                                className: t.progressCircleText,
                                children: i,
                            }),
                        }),
                    }),
            ],
        });
    },
    l = i;
