n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(6383),
    l = n(481060),
    c = n(569379),
    u = n(642145),
    d = n(184128);
let f = (e, t) => {
        let {
                quest: n,
                percentComplete: i,
                size: a = 42,
                strokeWidth: f = 3,
                glowBlur: _ = 0.4,
                percentCompleteText: p,
                percentCompleteTextVariant: h = "text-lg/medium",
                children: m,
            } = e,
            g = (0, c.E)(n, i > 0),
            E = a / 2,
            b = a / 2 - f / 2,
            y = 2 * Math.PI * b,
            O = y - i * y,
            v = {
                strokeDasharray: "".concat(y, " ").concat(y),
                strokeDashoffset: O,
            },
            I = {
                strokeDasharray: "".concat(y, " ").concat(y),
                strokeDashoffset: -i * y,
            },
            T = { boxShadow: "0 0 30px 0px ".concat(g.glow) },
            { progressTextAnimation: S } = (0, l.q_F)({
                progressTextAnimation: +(null != p && 1 !== i),
                config: u.Y,
            });
        return (0, r.jsxs)("div", {
            className: d.outer,
            ref: t,
            children: [
                (0, r.jsxs)("div", {
                    className: d.inner,
                    style: T,
                    children: [
                        m,
                        (0, r.jsxs)(s.animated.div, {
                            style: { opacity: S },
                            className: o()(d.coverContent, d.progressTextWrapper),
                            children: [
                                (0, r.jsx)("div", { className: o()(d.coverContent, d.progressTextOverlay) }),
                                (0, r.jsx)(l.Text, {
                                    variant: h,
                                    color: "text-primary",
                                    className: d.progressText,
                                    children: p,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("svg", {
                    className: d.progressBar,
                    height: a,
                    width: a,
                    children: [
                        (0, r.jsxs)("defs", {
                            children: [
                                (0, r.jsxs)("filter", {
                                    id: "glow",
                                    children: [
                                        (0, r.jsx)("feGaussianBlur", {
                                            result: "coloredBlur",
                                            stdDeviation: _,
                                        }),
                                        (0, r.jsxs)("feMerge", {
                                            children: [
                                                (0, r.jsx)("feMergeNode", { in: "coloredBlur" }),
                                                (0, r.jsx)("feMergeNode", { in: "coloredBlur" }),
                                                (0, r.jsx)("feMergeNode", { in: "coloredBlur" }),
                                                (0, r.jsx)("feMergeNode", { in: "SourceGraphic" }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("linearGradient", {
                                    id: "linear",
                                    x1: "100%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "0%",
                                    children: [
                                        (0, r.jsx)("stop", {
                                            offset: "0%",
                                            stopColor: g.backgroundTop,
                                        }),
                                        (0, r.jsx)("stop", {
                                            offset: "100%",
                                            stopColor: g.backgroundBottom,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("circle", {
                            className: d.progress,
                            strokeWidth: f,
                            fill: "transparent",
                            r: b,
                            cx: E,
                            cy: E,
                            stroke: "url(#linear)",
                            style: I,
                        }),
                        (0, r.jsx)("circle", {
                            className: d.progress,
                            strokeWidth: f,
                            fill: "transparent",
                            r: b,
                            cx: E,
                            cy: E,
                            stroke: g.foreground,
                            style: v,
                        }),
                    ],
                }),
            ],
        });
    },
    _ = i.forwardRef(f);
