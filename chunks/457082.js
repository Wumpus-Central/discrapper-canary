e.d(a, { Z: () => o });
var c = e(54381);
e(473749);
var n = e(1249);
let o = (r) => {
    let {
            innerRingPercent: a,
            outerRingColor: e = "currentColor",
            innerRingColor: o = "currentColor",
            strokeWidth: t = 4,
            children: s,
            backgroundCircleColor: i,
            backgroundCircleBlurAmount: l = 0,
        } = r,
        d = Math.min(Math.max(a, 0), 100),
        g = (100 - t) / 2,
        u = g * Math.PI * 2,
        v = (100 - t) / 2,
        h = v * Math.PI * 2;
    return (0, c.jsxs)("div", {
        className: n.container,
        children: [
            (0, c.jsx)("svg", {
                viewBox: "0 0 ".concat(100, " ").concat(100),
                className: n.backgroundSvg,
                style: null != l ? { "--custom-backdrop-blur-amount": "".concat(l, "px") } : void 0,
                children: (0, c.jsx)("circle", {
                    cx: 50,
                    cy: 50,
                    r: 50,
                    fill: i,
                }),
            }),
            (0, c.jsxs)("svg", {
                viewBox: "0 0 ".concat(100, " ").concat(100),
                className: n.svg,
                children: [
                    (0, c.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: g,
                        strokeWidth: t,
                        stroke: e,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 ".concat(50, " ").concat(50, ")"),
                        style: { strokeDasharray: u },
                    }),
                    (0, c.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: v,
                        strokeWidth: t,
                        stroke: o,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 ".concat(50, " ").concat(50, ")"),
                        style: {
                            strokeDasharray: h,
                            strokeDashoffset: (1 - d / 100) * h,
                        },
                    }),
                ],
            }),
            null != s &&
                (0, c.jsx)("div", {
                    className: n.overlay,
                    children: s,
                }),
        ],
    });
};
