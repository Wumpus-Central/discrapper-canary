a.d(e, { A: () => c });
var s = a(627968);
a(64700);
var t = a(905545);
let c = (r) => {
    let {
            innerRingPercent: e,
            outerRingColor: a = "currentColor",
            innerRingColor: c = "currentColor",
            strokeWidth: l = 4,
            children: o,
            backgroundCircleColor: i,
            backgroundCircleBlurAmount: n = 0,
        } = r,
        d = Math.min(Math.max(e, 0), 100),
        u = (100 - l) / 2,
        h = u * Math.PI * 2,
        v = (100 - l) / 2,
        x = v * Math.PI * 2;
    return (0, s.jsxs)("div", {
        className: t.kL,
        children: [
            (0, s.jsx)("svg", {
                viewBox: "0 0 100 100",
                className: t.DT,
                style: null != n ? { "--custom-backdrop-blur-amount": `${n}px` } : void 0,
                children: (0, s.jsx)("circle", { cx: 50, cy: 50, r: 50, fill: i }),
            }),
            (0, s.jsxs)("svg", {
                viewBox: "0 0 100 100",
                className: t.JW,
                children: [
                    (0, s.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: u,
                        strokeWidth: l,
                        stroke: a,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 50 50)",
                        style: { strokeDasharray: h },
                    }),
                    (0, s.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: v,
                        strokeWidth: l,
                        stroke: c,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 50 50)",
                        style: { strokeDasharray: x, strokeDashoffset: (1 - d / 100) * x },
                    }),
                ],
            }),
            null != o && (0, s.jsx)("div", { className: t.Lw, children: o }),
        ],
    });
};
