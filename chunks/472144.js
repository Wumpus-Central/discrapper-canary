n.d(t, { Z: () => p });
var r = n(951288),
    s = n(647438),
    o = n(120356),
    l = n.n(o),
    i = n(358458),
    a = n(481060),
    c = n(569379),
    u = n(642145),
    d = n(184128);
let p = s.forwardRef((e, t) => {
    let {
            quest: n,
            percentComplete: s,
            size: o = 42,
            strokeWidth: p = 3,
            glowBlur: f = 0.4,
            percentCompleteText: x,
            percentCompleteTextVariant: g = "text-lg/medium",
            children: j,
        } = e,
        m = (0, c.E)(n, s > 0),
        h = o / 2,
        C = o / 2 - p / 2,
        b = 2 * Math.PI * C,
        y = b - s * b,
        v = {
            strokeDasharray: "".concat(b, " ").concat(b),
            strokeDashoffset: y,
        },
        O = {
            strokeDasharray: "".concat(b, " ").concat(b),
            strokeDashoffset: -s * b,
        },
        k = { boxShadow: "0 0 30px 0px ".concat(m.glow) },
        { progressTextAnimation: S } = (0, a.q_F)({
            progressTextAnimation: +(null != x && 1 !== s),
            config: u.Y,
        });
    return (0, r.jsxs)("div", {
        className: d.outer,
        ref: t,
        children: [
            (0, r.jsxs)("div", {
                className: d.inner,
                style: k,
                children: [
                    j,
                    (0, r.jsxs)(i.animated.div, {
                        style: { opacity: S },
                        className: l()(d.coverContent, d.progressTextWrapper),
                        children: [
                            (0, r.jsx)("div", { className: l()(d.coverContent, d.progressTextOverlay) }),
                            (0, r.jsx)(a.Text, {
                                variant: g,
                                color: "text-primary",
                                className: d.progressText,
                                children: x,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("svg", {
                className: d.progressBar,
                height: o,
                width: o,
                children: [
                    (0, r.jsxs)("defs", {
                        children: [
                            (0, r.jsxs)("filter", {
                                id: "glow",
                                children: [
                                    (0, r.jsx)("feGaussianBlur", {
                                        result: "coloredBlur",
                                        stdDeviation: f,
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
                                        stopColor: m.backgroundTop,
                                    }),
                                    (0, r.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: m.backgroundBottom,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("circle", {
                        className: d.progress,
                        strokeWidth: p,
                        fill: "transparent",
                        r: C,
                        cx: h,
                        cy: h,
                        stroke: "url(#linear)",
                        style: O,
                    }),
                    (0, r.jsx)("circle", {
                        className: d.progress,
                        strokeWidth: p,
                        fill: "transparent",
                        r: C,
                        cx: h,
                        cy: h,
                        stroke: m.foreground,
                        style: v,
                    }),
                ],
            }),
        ],
    });
});
