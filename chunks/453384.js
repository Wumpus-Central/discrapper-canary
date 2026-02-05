n.d(t, { A: () => h });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(92674),
    o = n(397927),
    d = n(398025),
    c = n(772244),
    u = n(419367),
    m = n(638322);
let h = s.forwardRef((e, t) => {
    let {
            quest: n,
            percentComplete: s,
            size: i = 42,
            strokeWidth: h = 3,
            glowBlur: x = 0.4,
            percentCompleteText: p,
            percentCompleteTextVariant: g = "text-lg/medium",
            children: _,
        } = e,
        f = (0, c.OY)(n, s > 0),
        v = i / 2,
        b = i / 2 - h / 2,
        j = 2 * Math.PI * b,
        A = j - s * j,
        C = { strokeDasharray: `${j} ${j}`, strokeDashoffset: A },
        S = { strokeDasharray: `${j} ${j}`, strokeDashoffset: -s * j },
        T = { boxShadow: `0 0 20px 0px ${f.glow}` },
        { progressTextAnimation: y } = (0, o.zhh)({ progressTextAnimation: +(null != p && 1 !== s), config: u.N });
    return (0, a.jsxs)("div", {
        className: m.A7,
        ref: t,
        children: [
            (0, a.jsxs)("div", {
                className: m.vW,
                style: T,
                children: [
                    _,
                    (0, a.jsxs)(r.animated.div, {
                        style: { opacity: (0, d.a)(y) },
                        className: l()(m.rD, m.qk),
                        children: [
                            (0, a.jsx)("div", { className: l()(m.rD, m.LU) }),
                            (0, a.jsx)(o.Text, { variant: g, color: "text-strong", className: m.l_, children: p }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("svg", {
                className: m.hr,
                height: i,
                width: i,
                children: [
                    (0, a.jsxs)("defs", {
                        children: [
                            (0, a.jsxs)("filter", {
                                id: "glow",
                                children: [
                                    (0, a.jsx)("feGaussianBlur", { result: "coloredBlur", stdDeviation: x }),
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
                                    (0, a.jsx)("stop", { offset: "0%", stopColor: f.backgroundTop }),
                                    (0, a.jsx)("stop", { offset: "100%", stopColor: f.backgroundBottom }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("circle", {
                        className: m.qB,
                        strokeWidth: h,
                        fill: "transparent",
                        r: b,
                        cx: v,
                        cy: v,
                        stroke: "url(#linear)",
                        style: S,
                    }),
                    (0, a.jsx)("circle", {
                        className: m.qB,
                        strokeWidth: h,
                        fill: "transparent",
                        r: b,
                        cx: v,
                        cy: v,
                        stroke: f.foreground,
                        style: C,
                    }),
                ],
            }),
        ],
    });
});
