a.r(e), a.d(e, { BadgeImageWithProgressCircle: () => d, default: () => u });
var s = a(627968);
a(64700);
var t = a(366010),
    c = a(834730),
    l = a(736653),
    o = a(905545);
let i = (r) => {
    let {
            innerRingPercent: e,
            outerRingColor: a = "currentColor",
            innerRingColor: t = "currentColor",
            strokeWidth: c = 4,
            children: l,
            backgroundCircleColor: i,
            backgroundCircleBlurAmount: n = 0,
        } = r,
        d = Math.min(Math.max(e, 0), 100),
        u = (100 - c) / 2,
        h = u * Math.PI * 2,
        x = (100 - c) / 2,
        m = x * Math.PI * 2;
    return (0, s.jsxs)("div", {
        className: o.kL,
        children: [
            (0, s.jsx)("svg", {
                viewBox: "0 0 100 100",
                className: o.DT,
                style: null != n ? { "--custom-backdrop-blur-amount": `${n}px` } : void 0,
                children: (0, s.jsx)("circle", { cx: 50, cy: 50, r: 50, fill: i }),
            }),
            (0, s.jsxs)("svg", {
                viewBox: "0 0 100 100",
                className: o.JW,
                children: [
                    (0, s.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: u,
                        strokeWidth: c,
                        stroke: a,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 50 50)",
                        style: { strokeDasharray: h },
                    }),
                    (0, s.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: x,
                        strokeWidth: c,
                        stroke: t,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 50 50)",
                        style: { strokeDasharray: m, strokeDashoffset: (1 - d / 100) * m },
                    }),
                ],
            }),
            null != l && (0, s.jsx)("div", { className: o.Lw, children: l }),
        ],
    });
};
var n = a(255041);
let d = (r) => {
        let { src: e, alt: a, progressCircleText: o, progressCirclePercent: d, progressCircleUrgency: u } = r,
            h = (0, l.Ay)();
        return (0, s.jsxs)("div", {
            className: n.mI,
            children: [
                (0, s.jsx)("img", { alt: a, src: e, className: n.pq }),
                null != o &&
                    null != d &&
                    null != u &&
                    (0, s.jsx)("div", {
                        className: n.$t,
                        children: (0, s.jsx)(i, {
                            innerRingPercent: d,
                            outerRingColor: "critical" === u ? "var(--red-new-74)" : "var(--opacity-orange-36)",
                            innerRingColor: "critical" === u ? "var(--red-new-43)" : "var(--opacity-orange-96)",
                            strokeWidth: 7,
                            backgroundCircleColor: (0, t.M)(h) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
                            backgroundCircleBlurAmount: 2,
                            children: (0, s.jsx)(c.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: o,
                            }),
                        }),
                    }),
            ],
        });
    },
    u = d;
