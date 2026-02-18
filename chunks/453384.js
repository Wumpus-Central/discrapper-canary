n.d(t, { A: () => h });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(522160),
    o = n(397927),
    d = n(398025),
    c = n(419367),
    u = n(638322);
let m = "var(--background-mod-strong)",
    h = i.forwardRef((e, t) => {
        let {
                percentComplete: n,
                size: s = 42,
                style: h = "default",
                percentCompleteText: p,
                percentCompleteTextVariant: x = "text-lg/medium",
                children: g,
            } = e,
            { strokeWidth: _ } = "small" === h ? { strokeWidth: 3 } : { strokeWidth: 4 },
            f = s / 2,
            b = s / 2 - _ / 2,
            v = 2 * Math.PI * b,
            j = v - n * v,
            C = i.useMemo(() => ({ strokeDasharray: `${v} ${v}`, strokeDashoffset: j }), [v, j]),
            { progressTextAnimation: A } = (0, o.zhh)({ progressTextAnimation: +(null != p && 1 !== n), config: c.N });
        return (0, a.jsxs)("div", {
            className: u.A7,
            ref: t,
            style: { width: s, height: s, padding: _ + 2 },
            children: [
                (0, a.jsxs)("div", {
                    className: u.vW,
                    children: [
                        g,
                        (0, a.jsxs)(r.animated.div, {
                            style: { opacity: (0, d.a)(A), inset: _ },
                            className: l()(u.rD, u.qk),
                            children: [
                                (0, a.jsx)("div", { className: l()(u.rD, u.LU) }),
                                (0, a.jsx)(o.Text, { variant: x, color: "text-strong", className: u.l_, children: p }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("svg", {
                    className: u.hr,
                    height: s,
                    width: s,
                    children: [
                        (0, a.jsx)("circle", {
                            className: u.qB,
                            strokeWidth: _,
                            fill: "transparent",
                            r: b,
                            cx: f,
                            cy: f,
                            stroke: m,
                        }),
                        (0, a.jsx)("circle", {
                            className: u.qB,
                            strokeWidth: _,
                            fill: "transparent",
                            r: b,
                            cx: f,
                            cy: f,
                            stroke: m,
                        }),
                        (0, a.jsx)("circle", {
                            className: u.qB,
                            strokeWidth: _,
                            fill: "transparent",
                            r: b,
                            cx: f,
                            cy: f,
                            stroke: "rgba(98, 196, 101, 1)",
                            style: C,
                        }),
                    ],
                }),
            ],
        });
    });
