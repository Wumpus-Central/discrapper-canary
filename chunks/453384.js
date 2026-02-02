n.d(t, {
    A: () => m,
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(353709),
    o = n(397927),
    c = n(772244),
    d = n(419367),
    u = n(638322);
let m = l.forwardRef((e, t) => {
    let {
            quest: n,
            percentComplete: l,
            size: r = 42,
            strokeWidth: m = 3,
            glowBlur: p = 0.4,
            percentCompleteText: h,
            percentCompleteTextVariant: x = "text-lg/medium",
            children: g,
        } = e,
        f = (0, c.OY)(n, l > 0),
        b = r / 2,
        v = r / 2 - m / 2,
        j = 2 * Math.PI * v,
        _ = j - l * j,
        y = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: _,
        },
        A = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: -l * j,
        },
        C = {
            boxShadow: "0 0 20px 0px ".concat(f.glow),
        },
        { progressTextAnimation: S } = (0, o.zhh)({
            progressTextAnimation: +(null != h && 1 !== l),
            config: d.N,
        });
    return (0, a.jsxs)("div", {
        className: u.A7,
        ref: t,
        children: [
            (0, a.jsxs)("div", {
                className: u.vW,
                style: C,
                children: [
                    g,
                    (0, a.jsxs)(s.animated.div, {
                        style: {
                            opacity: S,
                        },
                        className: i()(u.rD, u.qk),
                        children: [
                            (0, a.jsx)("div", {
                                className: i()(u.rD, u.LU),
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: x,
                                color: "text-strong",
                                className: u.l_,
                                children: h,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("svg", {
                className: u.hr,
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
                                        stdDeviation: p,
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
                                        stopColor: f.backgroundTop,
                                    }),
                                    (0, a.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: f.backgroundBottom,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("circle", {
                        className: u.qB,
                        strokeWidth: m,
                        fill: "transparent",
                        r: v,
                        cx: b,
                        cy: b,
                        stroke: "url(#linear)",
                        style: A,
                    }),
                    (0, a.jsx)("circle", {
                        className: u.qB,
                        strokeWidth: m,
                        fill: "transparent",
                        r: v,
                        cx: b,
                        cy: b,
                        stroke: f.foreground,
                        style: y,
                    }),
                ],
            }),
        ],
    });
});
