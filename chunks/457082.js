a.d(e, { Z: () => o });
var c = a(54381);
a(473749);
var n = a(289556);
let o = (r) => {
    let {
            innerRingPercent: e,
            outerRingColor: a = "currentColor",
            innerRingColor: o = "currentColor",
            strokeWidth: s = 4,
            children: t,
            backgroundCircleColor: i,
            backgroundCircleBlurAmount: l = 0,
        } = r,
        d = Math.min(Math.max(e, 0), 100),
        g = (100 - s) / 2,
        u = g * Math.PI * 2,
        v = (100 - s) / 2,
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
                        strokeWidth: s,
                        stroke: a,
                        fill: "none",
                        strokeLinecap: "round",
                        transform: "rotate(-90 ".concat(50, " ").concat(50, ")"),
                        style: { strokeDasharray: u },
                    }),
                    (0, c.jsx)("circle", {
                        cx: 50,
                        cy: 50,
                        r: v,
                        strokeWidth: s,
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
            null != t &&
                (0, c.jsx)("div", {
                    className: n.overlay,
                    children: t,
                }),
        ],
    });
};
