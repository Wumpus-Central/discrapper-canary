a.r(e), a.d(e, { BadgeImageWithProgressCircle: () => u, default: () => x });
var s = a(627968);
a(64700);
var t = a(503698),
    l = a.n(t),
    c = a(366010),
    i = a(834730),
    o = a(736653),
    n = a(905545);
let d = (r) => {
    let {
            innerRingPercent: e,
            outerRingColor: a = "currentColor",
            innerRingColor: t = "currentColor",
            strokeWidth: l = 4,
            children: c,
            backgroundCircleColor: i,
            backgroundCircleBlurAmount: o = 0,
        } = r,
        d = Math.min(Math.max(e, 0), 100),
        h = (100 - l) / 2,
        u = h * Math.PI * 2,
        x = (100 - l) / 2,
        k = x * Math.PI * 2;
    return (0, s.jsxs)("div", {
        className: n.kL,
        children: [
            (0, s.jsx)("svg", {
                viewBox: "0 0 100 100",
                className: n.DT,
                style: null != o ? { "--custom-backdrop-blur-amount": `${o}px` } : void 0,
                children: (0, s.jsx)("circle", { cx: 50, cy: 50, r: 50, fill: i }),
            }),
            (0, s.jsxs)("svg", {
                viewBox: "0 0 100 100",
                className: n.JW,
                children: [
                    (0, s.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: h,
                        strokeWidth: l,
                        stroke: a,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 50 50)",
                        style: { strokeDasharray: u },
                    }),
                    (0, s.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: x,
                        strokeWidth: l,
                        stroke: t,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 50 50)",
                        style: { strokeDasharray: k, strokeDashoffset: (1 - d / 100) * k },
                    }),
                ],
            }),
            null != c && (0, s.jsx)("div", { className: n.Lw, children: c }),
        ],
    });
};
var h = a(255041);
let u = (r) => {
        let {
                src: e,
                alt: a,
                progressCircleText: t,
                progressCirclePercent: n,
                progressCircleUrgency: u,
                compact: x = !1,
            } = r,
            k = (0, o.Ay)();
        return (0, s.jsxs)("div", {
            className: l()(h.mI, { [h.oE]: x }),
            children: [
                (0, s.jsx)("img", { alt: a, src: e, className: h.pq }),
                null != t &&
                    null != n &&
                    null != u &&
                    (0, s.jsx)("div", {
                        className: h.$t,
                        children: (0, s.jsx)(d, {
                            innerRingPercent: n,
                            outerRingColor: "critical" === u ? "var(--red-new-74)" : "var(--opacity-orange-36)",
                            innerRingColor: "critical" === u ? "var(--red-new-43)" : "var(--opacity-orange-96)",
                            strokeWidth: 7,
                            backgroundCircleColor: (0, c.M)(k) ? "var(--opacity-black-72)" : "var(--opacity-white-72)",
                            backgroundCircleBlurAmount: 2,
                            children: (0, s.jsx)(i.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: t,
                            }),
                        }),
                    }),
            ],
        });
    },
    x = u;
