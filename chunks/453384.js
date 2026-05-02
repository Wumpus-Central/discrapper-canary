"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(785651),
    l = n(717421),
    u = n(834730),
    c = n(398025),
    d = n(419367),
    _ = n(337689);
let f = "var(--background-mod-strong)",
    h = r.forwardRef((e, t) => {
        let {
                percentComplete: n,
                size: s = 42,
                style: h = "default",
                overlayText: p,
                overlayTextVariant: E = "text-lg/medium",
                children: m,
            } = e,
            { strokeWidth: g } = "small" === h ? { strokeWidth: 3 } : { strokeWidth: 4 },
            A = s / 2,
            I = s / 2 - g / 2,
            T = 2 * Math.PI * I,
            S = T - n * T,
            N = r.useMemo(() => ({ strokeDasharray: `${T} ${T}`, strokeDashoffset: S }), [T, S]),
            { progressTextAnimation: y } = (0, l.z)({ progressTextAnimation: +(null != p && 1 !== n), config: d.N });
        return (0, i.jsxs)("div", {
            className: _.A7,
            ref: t,
            style: { width: s, height: s, padding: g + 2 },
            children: [
                (0, i.jsxs)("div", {
                    className: _.vW,
                    children: [
                        m,
                        (0, i.jsxs)(o.animated.div, {
                            style: { opacity: (0, c.a)(y), inset: g },
                            className: a()(_.rD, _.qk),
                            children: [
                                (0, i.jsx)("div", { className: a()(_.rD, _.LU) }),
                                (0, i.jsx)(u.E, { variant: E, color: "text-strong", className: _.l_, children: p }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("svg", {
                    className: _.hr,
                    height: s,
                    width: s,
                    children: [
                        (0, i.jsx)("circle", {
                            className: _.qB,
                            strokeWidth: g,
                            fill: "transparent",
                            r: I,
                            cx: A,
                            cy: A,
                            stroke: f,
                        }),
                        (0, i.jsx)("circle", {
                            className: _.qB,
                            strokeWidth: g,
                            fill: "transparent",
                            r: I,
                            cx: A,
                            cy: A,
                            stroke: f,
                        }),
                        (0, i.jsx)("circle", {
                            className: _.qB,
                            strokeWidth: g,
                            fill: "transparent",
                            r: I,
                            cx: A,
                            cy: A,
                            stroke: "rgba(98, 196, 101, 1)",
                            style: N,
                        }),
                    ],
                }),
            ],
        });
    });
