n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(517738),
    o = n(717421),
    d = n(834730),
    c = n(398025),
    u = n(419367),
    m = n(337689);
let _ = "var(--background-mod-strong)",
    h = l.forwardRef((e, t) => {
        let {
                percentComplete: n,
                size: a = 42,
                style: h = "default",
                overlayText: p,
                overlayTextVariant: g = "text-lg/medium",
                children: A,
            } = e,
            { strokeWidth: f } = "small" === h ? { strokeWidth: 3 } : { strokeWidth: 4 },
            x = a / 2,
            C = a / 2 - f / 2,
            E = 2 * Math.PI * C,
            I = E - n * E,
            v = l.useMemo(() => ({ strokeDasharray: `${E} ${E}`, strokeDashoffset: I }), [E, I]),
            { progressTextAnimation: b } = (0, o.z)({ progressTextAnimation: +(null != p && 1 !== n), config: u.N });
        return (0, i.jsxs)("div", {
            className: m.A7,
            ref: t,
            style: { width: a, height: a, padding: f + 2 },
            children: [
                (0, i.jsxs)("div", {
                    className: m.vW,
                    children: [
                        A,
                        (0, i.jsxs)(r.animated.div, {
                            style: { opacity: (0, c.a)(b), inset: f },
                            className: s()(m.rD, m.qk),
                            children: [
                                (0, i.jsx)("div", { className: s()(m.rD, m.LU) }),
                                (0, i.jsx)(d.E, { variant: g, color: "text-strong", className: m.l_, children: p }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("svg", {
                    className: m.hr,
                    height: a,
                    width: a,
                    children: [
                        (0, i.jsx)("circle", {
                            className: m.qB,
                            strokeWidth: f,
                            fill: "transparent",
                            r: C,
                            cx: x,
                            cy: x,
                            stroke: _,
                        }),
                        (0, i.jsx)("circle", {
                            className: m.qB,
                            strokeWidth: f,
                            fill: "transparent",
                            r: C,
                            cx: x,
                            cy: x,
                            stroke: _,
                        }),
                        (0, i.jsx)("circle", {
                            className: m.qB,
                            strokeWidth: f,
                            fill: "transparent",
                            r: C,
                            cx: x,
                            cy: x,
                            stroke: "rgba(98, 196, 101, 1)",
                            style: v,
                        }),
                    ],
                }),
            ],
        });
    });
