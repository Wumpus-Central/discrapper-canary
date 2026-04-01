n.d(t, { A: () => m });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(773690),
    o = n(397927),
    d = n(398025),
    c = n(419367),
    u = n(293225);
let _ = "var(--background-mod-strong)",
    m = a.forwardRef((e, t) => {
        let {
                percentComplete: n,
                size: r = 42,
                style: m = "default",
                percentCompleteText: h,
                percentCompleteTextVariant: p = "text-lg/medium",
                children: g,
            } = e,
            { strokeWidth: A } = "small" === m ? { strokeWidth: 3 } : { strokeWidth: 4 },
            x = r / 2,
            f = r / 2 - A / 2,
            C = 2 * Math.PI * f,
            I = C - n * C,
            E = a.useMemo(() => ({ strokeDasharray: `${C} ${C}`, strokeDashoffset: I }), [C, I]),
            { progressTextAnimation: b } = (0, o.zhh)({ progressTextAnimation: +(null != h && 1 !== n), config: c.N });
        return (0, i.jsxs)("div", {
            className: u.A7,
            ref: t,
            style: { width: r, height: r, padding: A + 2 },
            children: [
                (0, i.jsxs)("div", {
                    className: u.vW,
                    children: [
                        g,
                        (0, i.jsxs)(s.animated.div, {
                            style: { opacity: (0, d.a)(b), inset: A },
                            className: l()(u.rD, u.qk),
                            children: [
                                (0, i.jsx)("div", { className: l()(u.rD, u.LU) }),
                                (0, i.jsx)(o.Text, { variant: p, color: "text-strong", className: u.l_, children: h }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("svg", {
                    className: u.hr,
                    height: r,
                    width: r,
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
                            style: E,
                        }),
                    ],
                }),
            ],
        });
    });
