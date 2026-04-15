n.d(t, { A: () => m });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(407045),
    o = n(397927),
    d = n(398025),
    c = n(419367),
    u = n(293225);
let _ = "var(--background-mod-strong)",
    m = a.forwardRef((e, t) => {
        let {
                percentComplete: n,
                size: l = 42,
                style: m = "default",
                overlayText: h,
                overlayTextVariant: p = "text-lg/medium",
                children: g,
            } = e,
            { strokeWidth: A } = "small" === m ? { strokeWidth: 3 } : { strokeWidth: 4 },
            x = l / 2,
            f = l / 2 - A / 2,
            C = 2 * Math.PI * f,
            E = C - n * C,
            I = a.useMemo(() => ({ strokeDasharray: `${C} ${C}`, strokeDashoffset: E }), [C, E]),
            { progressTextAnimation: v } = (0, o.zhh)({ progressTextAnimation: +(null != h && 1 !== n), config: c.N });
        return (0, i.jsxs)("div", {
            className: u.A7,
            ref: t,
            style: { width: l, height: l, padding: A + 2 },
            children: [
                (0, i.jsxs)("div", {
                    className: u.vW,
                    children: [
                        g,
                        (0, i.jsxs)(r.animated.div, {
                            style: { opacity: (0, d.a)(v), inset: A },
                            className: s()(u.rD, u.qk),
                            children: [
                                (0, i.jsx)("div", { className: s()(u.rD, u.LU) }),
                                (0, i.jsx)(o.Text, { variant: p, color: "text-strong", className: u.l_, children: h }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("svg", {
                    className: u.hr,
                    height: l,
                    width: l,
                    children: [
                        (0, i.jsx)("circle", {
                            className: u.qB,
                            strokeWidth: A,
                            fill: "transparent",
                            r: f,
                            cx: x,
                            cy: x,
                            stroke: _,
                        }),
                        (0, i.jsx)("circle", {
                            className: u.qB,
                            strokeWidth: A,
                            fill: "transparent",
                            r: f,
                            cx: x,
                            cy: x,
                            stroke: _,
                        }),
                        (0, i.jsx)("circle", {
                            className: u.qB,
                            strokeWidth: A,
                            fill: "transparent",
                            r: f,
                            cx: x,
                            cy: x,
                            stroke: "rgba(98, 196, 101, 1)",
                            style: I,
                        }),
                    ],
                }),
            ],
        });
    });
