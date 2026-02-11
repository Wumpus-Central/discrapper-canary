"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(397927),
    u = n(398025),
    c = n(772244),
    d = n(419367),
    _ = n(511036);
let f = (e, t) => {
        let {
                quest: n,
                percentComplete: i,
                size: a = 42,
                strokeWidth: f = 3,
                glowBlur: h = 0.4,
                percentCompleteText: p,
                percentCompleteTextVariant: g = "text-lg/medium",
                children: E,
            } = e,
            A = (0, c.OY)(n, i > 0),
            I = a / 2,
            T = a / 2 - f / 2,
            y = 2 * Math.PI * T,
            S = y - i * y,
            v = { strokeDasharray: `${y} ${y}`, strokeDashoffset: S },
            C = { strokeDasharray: `${y} ${y}`, strokeDashoffset: -i * y },
            b = { boxShadow: `0 0 20px 0px ${A.glow}` },
            { progressTextAnimation: N } = (0, l.zhh)({ progressTextAnimation: +(null != p && 1 !== i), config: d.N });
        return (0, r.jsxs)("div", {
            className: _.A7,
            ref: t,
            children: [
                (0, r.jsxs)("div", {
                    className: _.vW,
                    style: b,
                    children: [
                        E,
                        (0, r.jsxs)(o.animated.div, {
                            style: { opacity: (0, u.a)(N) },
                            className: s()(_.rD, _.qk),
                            children: [
                                (0, r.jsx)("div", { className: s()(_.rD, _.LU) }),
                                (0, r.jsx)(l.Text, { variant: g, color: "text-strong", className: _.l_, children: p }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("svg", {
                    className: _.hr,
                    height: a,
                    width: a,
                    children: [
                        (0, r.jsxs)("defs", {
                            children: [
                                (0, r.jsxs)("filter", {
                                    id: "glow",
                                    children: [
                                        (0, r.jsx)("feGaussianBlur", { result: "coloredBlur", stdDeviation: h }),
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
                                        (0, r.jsx)("stop", { offset: "0%", stopColor: A.backgroundTop }),
                                        (0, r.jsx)("stop", { offset: "100%", stopColor: A.backgroundBottom }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("circle", {
                            className: _.qB,
                            strokeWidth: f,
                            fill: "transparent",
                            r: T,
                            cx: I,
                            cy: I,
                            stroke: "url(#linear)",
                            style: C,
                        }),
                        (0, r.jsx)("circle", {
                            className: _.qB,
                            strokeWidth: f,
                            fill: "transparent",
                            r: T,
                            cx: I,
                            cy: I,
                            stroke: A.foreground,
                            style: v,
                        }),
                    ],
                }),
            ],
        });
    },
    h = i.forwardRef(f);
