n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(687498),
    o = n(397927),
    d = n(398025),
    c = n(419367),
    u = n(44556);
let _ = "var(--background-mod-strong)",
    m = l.forwardRef((e, t) => {
        let {
                percentComplete: n,
                size: s = 42,
                style: m = "default",
                percentCompleteText: h,
                percentCompleteTextVariant: p = "text-lg/medium",
                children: g,
            } = e,
            { strokeWidth: A } = "small" === m ? { strokeWidth: 3 } : { strokeWidth: 4 },
            x = s / 2,
            f = s / 2 - A / 2,
            C = 2 * Math.PI * f,
            E = C - n * C,
            I = l.useMemo(() => ({ strokeDasharray: `${C} ${C}`, strokeDashoffset: E }), [C, E]),
            { progressTextAnimation: v } = (0, o.zhh)({ progressTextAnimation: +(null != h && 1 !== n), config: c.N });
        return (0, i.jsxs)("div", {
            className: u.A7,
            ref: t,
            style: { width: s, height: s, padding: A + 2 },
            children: [
                (0, i.jsxs)("div", {
                    className: u.vW,
                    children: [
                        g,
                        (0, i.jsxs)(a.animated.div, {
                            style: { opacity: (0, d.a)(v), inset: A },
                            className: r()(u.rD, u.qk),
                            children: [
                                (0, i.jsx)("div", { className: r()(u.rD, u.LU) }),
                                (0, i.jsx)(o.Text, { variant: p, color: "text-strong", className: u.l_, children: h }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("svg", {
                    className: u.hr,
                    height: s,
                    width: s,
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
