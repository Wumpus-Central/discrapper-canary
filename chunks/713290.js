c.r(e),
    c.d(e, {
        BadgeImageWithProgressCircle: () => i,
        default: () => d,
    });
var a = c(627968);
c(64700);
var t = c(349941),
    s = c(158954),
    o = c(736653),
    l = c(209270),
    n = c(626108);
let i = (r) => {
        let { src: e, alt: c, progressCircleText: i, progressCirclePercent: d, progressCircleUrgency: h } = r,
            u = (0, o.Ay)();
        return (0, a.jsxs)("div", {
            className: n.mI,
            children: [
                (0, a.jsx)("img", {
                    alt: c,
                    src: e,
                    className: n.pq,
                }),
                null != i &&
                    null != d &&
                    null != h &&
                    (0, a.jsx)("div", {
                        className: n.$t,
                        children: (0, a.jsx)(l.A, {
                            innerRingPercent: d,
                            outerRingColor: "critical" === h ? "var(--red-new-74)" : "var(--opacity-orange-36)",
                            innerRingColor: "critical" === h ? "var(--red-new-43)" : "var(--opacity-orange-96)",
                            strokeWidth: 7,
                            backgroundCircleColor: (0, t.Mw)(u) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
                            backgroundCircleBlurAmount: 2,
                            children: (0, a.jsx)(s.EYj, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: i,
                            }),
                        }),
                    }),
            ],
        });
    },
    d = i;
