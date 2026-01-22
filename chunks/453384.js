n.d(t, { A: () => m });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(432022),
    o = n(397927),
    c = n(772244),
    d = n(419367),
    u = n(638322);
let m = l.forwardRef((e, t) => {
    let {
            quest: n,
            percentComplete: l,
            size: i = 42,
            strokeWidth: m = 3,
            glowBlur: p = 0.4,
            percentCompleteText: h,
            percentCompleteTextVariant: f = "text-lg/medium",
            children: x,
        } = e,
        b = (0, c.OY)(n, l > 0),
        g = i / 2,
        v = i / 2 - m / 2,
        j = 2 * Math.PI * v,
        y = j - l * j,
        _ = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: y,
        },
        A = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: -l * j,
        },
        C = { boxShadow: "0 0 20px 0px ".concat(b.glow) },
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
                    x,
                    (0, a.jsxs)(s.animated.div, {
                        style: { opacity: S },
                        className: r()(u.rD, u.qk),
                        children: [
                            (0, a.jsx)("div", { className: r()(u.rD, u.LU) }),
                            (0, a.jsx)(o.Text, {
                                variant: f,
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
                height: i,
                width: i,
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
                                            (0, a.jsx)("feMergeNode", { in: "coloredBlur" }),
                                            (0, a.jsx)("feMergeNode", { in: "coloredBlur" }),
                                            (0, a.jsx)("feMergeNode", { in: "coloredBlur" }),
                                            (0, a.jsx)("feMergeNode", { in: "SourceGraphic" }),
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
                        className: u.qB,
                        strokeWidth: m,
                        fill: "transparent",
                        r: v,
                        cx: g,
                        cy: g,
                        stroke: "url(#linear)",
                        style: A,
                    }),
                    (0, a.jsx)("circle", {
                        className: u.qB,
                        strokeWidth: m,
                        fill: "transparent",
                        r: v,
                        cx: g,
                        cy: g,
                        stroke: b.foreground,
                        style: _,
                    }),
                ],
            }),
        ],
    });
});
