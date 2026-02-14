"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(397927),
    u = n(398025),
    c = n(419367),
    d = n(638322);
let _ = "rgba(98, 196, 101, 1)",
    f = "var(--background-mod-strong)",
    h = 2,
    p = (e) => ("small" === e ? { strokeWidth: 3 } : { strokeWidth: 4 }),
    g = (e, t) => {
        let {
                percentComplete: n,
                size: a = 42,
                style: g = "default",
                percentCompleteText: E,
                percentCompleteTextVariant: A = "text-lg/medium",
                children: I,
            } = e,
            { strokeWidth: T } = p(g),
            y = a / 2,
            S = a / 2 - T / 2,
            v = 2 * Math.PI * S,
            C = v - n * v,
            b = i.useMemo(() => ({ strokeDasharray: `${v} ${v}`, strokeDashoffset: C }), [v, C]),
            { progressTextAnimation: N } = (0, l.zhh)({ progressTextAnimation: +(null != E && 1 !== n), config: c.N });
        return (0, r.jsxs)("div", {
            className: d.A7,
            ref: t,
            style: { width: a, height: a, padding: T + h },
            children: [
                (0, r.jsxs)("div", {
                    className: d.vW,
                    children: [
                        I,
                        (0, r.jsxs)(o.animated.div, {
                            style: { opacity: (0, u.a)(N), inset: T },
                            className: s()(d.rD, d.qk),
                            children: [
                                (0, r.jsx)("div", { className: s()(d.rD, d.LU) }),
                                (0, r.jsx)(l.Text, { variant: A, color: "text-strong", className: d.l_, children: E }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("svg", {
                    className: d.hr,
                    height: a,
                    width: a,
                    children: [
                        (0, r.jsx)("circle", {
                            className: d.qB,
                            strokeWidth: T,
                            fill: "transparent",
                            r: S,
                            cx: y,
                            cy: y,
                            stroke: f,
                        }),
                        (0, r.jsx)("circle", {
                            className: d.qB,
                            strokeWidth: T,
                            fill: "transparent",
                            r: S,
                            cx: y,
                            cy: y,
                            stroke: f,
                        }),
                        (0, r.jsx)("circle", {
                            className: d.qB,
                            strokeWidth: T,
                            fill: "transparent",
                            r: S,
                            cx: y,
                            cy: y,
                            stroke: _,
                            style: b,
                        }),
                    ],
                }),
            ],
        });
    },
    E = i.forwardRef(g);
