c.d(e, { A: () => s });
var a = c(627968);
c(64700);
var t = c(653812);
let s = (r) => {
    let {
            innerRingPercent: e,
            outerRingColor: c = "currentColor",
            innerRingColor: s = "currentColor",
            strokeWidth: o = 4,
            children: l,
            backgroundCircleColor: n,
            backgroundCircleBlurAmount: i = 0,
        } = r,
        d = Math.min(Math.max(e, 0), 100),
        h = (100 - o) / 2,
        u = h * Math.PI * 2,
        x = (100 - o) / 2,
        k = x * Math.PI * 2;
    return (0, a.jsxs)("div", {
        className: t.kL,
        children: [
            (0, a.jsx)("svg", {
                viewBox: "0 0 ".concat(100, " ").concat(100),
                className: t.DT,
                style: null != i ? { "--custom-backdrop-blur-amount": "".concat(i, "px") } : void 0,
                children: (0, a.jsx)("circle", {
                    cx: 50,
                    cy: 50,
                    r: 50,
                    fill: n,
                }),
            }),
            (0, a.jsxs)("svg", {
                viewBox: "0 0 ".concat(100, " ").concat(100),
                className: t.JW,
                children: [
                    (0, a.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: h,
                        strokeWidth: o,
                        stroke: c,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 ".concat(50, " ").concat(50, ")"),
                        style: { strokeDasharray: u },
                    }),
                    (0, a.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: x,
                        strokeWidth: o,
                        stroke: s,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 ".concat(50, " ").concat(50, ")"),
                        style: {
                            strokeDasharray: k,
                            strokeDashoffset: (1 - d / 100) * k,
                        },
                    }),
                ],
            }),
            null != l &&
                (0, a.jsx)("div", {
                    className: t.Lw,
                    children: l,
                }),
        ],
    });
};
