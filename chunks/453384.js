t.d(e, { A: () => x });
var r = t(627968),
    a = t(64700),
    i = t(503698),
    l = t.n(i),
    c = t(785651),
    d = t(717421),
    n = t(834730),
    o = t(398025),
    h = t(419367),
    k = t(337689);
let m = "var(--background-mod-strong)",
    x = a.forwardRef((s, e) => {
        let {
                percentComplete: t,
                size: i = 42,
                style: x = "default",
                overlayText: p,
                overlayTextVariant: f = "text-lg/medium",
                children: g,
            } = s,
            { strokeWidth: N } = "small" === x ? { strokeWidth: 3 } : { strokeWidth: 4 },
            u = i / 2,
            j = i / 2 - N / 2,
            v = 2 * Math.PI * j,
            y = v - t * v,
            W = a.useMemo(() => ({ strokeDasharray: `${v} ${v}`, strokeDashoffset: y }), [v, y]),
            { progressTextAnimation: w } = (0, d.z)({ progressTextAnimation: +(null != p && 1 !== t), config: h.N });
        return (0, r.jsxs)("div", {
            className: k.A7,
            ref: e,
            style: { width: i, height: i, padding: N + 2 },
            children: [
                (0, r.jsxs)("div", {
                    className: k.vW,
                    children: [
                        g,
                        (0, r.jsxs)(c.animated.div, {
                            style: { opacity: (0, o.a)(w), inset: N },
                            className: l()(k.rD, k.qk),
                            children: [
                                (0, r.jsx)("div", { className: l()(k.rD, k.LU) }),
                                (0, r.jsx)(n.E, { variant: f, color: "text-strong", className: k.l_, children: p }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("svg", {
                    className: k.hr,
                    height: i,
                    width: i,
                    children: [
                        (0, r.jsx)("circle", {
                            className: k.qB,
                            strokeWidth: N,
                            fill: "transparent",
                            r: j,
                            cx: u,
                            cy: u,
                            stroke: m,
                        }),
                        (0, r.jsx)("circle", {
                            className: k.qB,
                            strokeWidth: N,
                            fill: "transparent",
                            r: j,
                            cx: u,
                            cy: u,
                            stroke: m,
                        }),
                        (0, r.jsx)("circle", {
                            className: k.qB,
                            strokeWidth: N,
                            fill: "transparent",
                            r: j,
                            cx: u,
                            cy: u,
                            stroke: "rgba(98, 196, 101, 1)",
                            style: W,
                        }),
                    ],
                }),
            ],
        });
    });
