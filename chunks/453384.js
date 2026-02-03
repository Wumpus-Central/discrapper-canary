n.d(t, {
    A: () => p,
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(92674),
    o = n(397927),
    c = n(398025),
    d = n(772244),
    u = n(419367),
    m = n(638322);
let p = l.forwardRef((e, t) => {
    let {
            quest: n,
            percentComplete: l,
            size: r = 42,
            strokeWidth: p = 3,
            glowBlur: h = 0.4,
            percentCompleteText: x,
            percentCompleteTextVariant: g = "text-lg/medium",
            children: f,
        } = e,
        b = (0, d.OY)(n, l > 0),
        v = r / 2,
        j = r / 2 - p / 2,
        _ = 2 * Math.PI * j,
        y = _ - l * _,
        A = {
            strokeDasharray: "".concat(_, " ").concat(_),
            strokeDashoffset: y,
        },
        C = {
            strokeDasharray: "".concat(_, " ").concat(_),
            strokeDashoffset: -l * _,
        },
        S = {
            boxShadow: "0 0 20px 0px ".concat(b.glow),
        },
        { progressTextAnimation: O } = (0, o.zhh)({
            progressTextAnimation: +(null != x && 1 !== l),
            config: u.N,
        });
    return (0, a.jsxs)("div", {
        className: m.A7,
        ref: t,
        children: [
            (0, a.jsxs)("div", {
                className: m.vW,
                style: S,
                children: [
                    f,
                    (0, a.jsxs)(s.animated.div, {
                        style: {
                            opacity: (0, c.a)(O),
                        },
                        className: i()(m.rD, m.qk),
                        children: [
                            (0, a.jsx)("div", {
                                className: i()(m.rD, m.LU),
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: g,
                                color: "text-strong",
                                className: m.l_,
                                children: x,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("svg", {
                className: m.hr,
                height: r,
                width: r,
                children: [
                    (0, a.jsxs)("defs", {
                        children: [
                            (0, a.jsxs)("filter", {
                                id: "glow",
                                children: [
                                    (0, a.jsx)("feGaussianBlur", {
                                        result: "coloredBlur",
                                        stdDeviation: h,
                                    }),
                                    (0, a.jsxs)("feMerge", {
                                        children: [
                                            (0, a.jsx)("feMergeNode", {
                                                in: "coloredBlur",
                                            }),
                                            (0, a.jsx)("feMergeNode", {
                                                in: "coloredBlur",
                                            }),
                                            (0, a.jsx)("feMergeNode", {
                                                in: "coloredBlur",
                                            }),
                                            (0, a.jsx)("feMergeNode", {
                                                in: "SourceGraphic",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("linearGradient", {
                                id: "linear",
                                x1: "100%",
                                y1: "0%",
                                x2: "0%",
                                y2: "0%",
                                children: [
                                    (0, a.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: b.backgroundTop,
                                    }),
                                    (0, a.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: b.backgroundBottom,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("circle", {
                        className: m.qB,
                        strokeWidth: p,
                        fill: "transparent",
                        r: j,
                        cx: v,
                        cy: v,
                        stroke: "url(#linear)",
                        style: C,
                    }),
                    (0, a.jsx)("circle", {
                        className: m.qB,
                        strokeWidth: p,
                        fill: "transparent",
                        r: j,
                        cx: v,
                        cy: v,
                        stroke: b.foreground,
                        style: A,
                    }),
                ],
            }),
        ],
    });
});
