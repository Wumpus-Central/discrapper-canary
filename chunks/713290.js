a.r(e), a.d(e, { BadgeImageWithProgressCircle: () => n, default: () => d });
var s = a(627968);
a(64700);
var t = a(366010),
    c = a(834730),
    l = a(736653),
    o = a(209270),
    i = a(255041);
let n = (r) => {
        let { src: e, alt: a, progressCircleText: n, progressCirclePercent: d, progressCircleUrgency: u } = r,
            h = (0, l.Ay)();
        return (0, s.jsxs)("div", {
            className: i.mI,
            children: [
                (0, s.jsx)("img", { alt: a, src: e, className: i.pq }),
                null != n &&
                    null != d &&
                    null != u &&
                    (0, s.jsx)("div", {
                        className: i.$t,
                        children: (0, s.jsx)(o.A, {
                            innerRingPercent: d,
                            outerRingColor: "critical" === u ? "var(--red-new-74)" : "var(--opacity-orange-36)",
                            innerRingColor: "critical" === u ? "var(--red-new-43)" : "var(--opacity-orange-96)",
                            strokeWidth: 7,
                            backgroundCircleColor: (0, t.M)(h) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
                            backgroundCircleBlurAmount: 2,
                            children: (0, s.jsx)(c.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: n,
                            }),
                        }),
                    }),
            ],
        });
    },
    d = n;
