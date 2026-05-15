"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(717421),
    u = n(834730),
    c = n(398025),
    d = n(419367),
    _ = n(375708),
    f = n(337689);
let h = "var(--background-mod-strong)",
    p = r.forwardRef((e, t) => {
        let {
                percentComplete: n,
                size: s = 42,
                style: p = "default",
                overlayText: E,
                overlayTextVariant: m = "text-lg/medium",
                children: g,
            } = e,
            { strokeWidth: A } = "small" === p ? { strokeWidth: 3 } : { strokeWidth: 4 },
            I = s / 2,
            T = s / 2 - A / 2,
            S = 2 * Math.PI * T,
            N = S - n * S,
            y = r.useMemo(() => ({ strokeDasharray: `${S} ${S}`, strokeDashoffset: N }), [S, N]),
            { progressTextAnimation: C } = (0, l.z)({ progressTextAnimation: +(null != E && 1 !== n), config: d.N }),
            v = Math.round(100 * n);
        return (0, i.jsxs)("div", {
            className: f.A7,
            ref: t,
            style: { width: s, height: s, padding: A + 2 },
            role: "progressbar",
            "aria-valuenow": v,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-label": _.intl.formatToPlainString(_.t.Gj8Jqn, { percent: v }),
            children: [
                (0, i.jsxs)("div", {
                    className: f.vW,
                    children: [
                        g,
                        (0, i.jsxs)(o.animated.div, {
                            style: { opacity: (0, c.a)(C), inset: A },
                            className: a()(f.rD, f.qk),
                            children: [
                                (0, i.jsx)("div", { className: a()(f.rD, f.LU) }),
                                (0, i.jsx)(u.E, { variant: m, color: "text-strong", className: f.l_, children: E }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("svg", {
                    className: f.hr,
                    height: s,
                    width: s,
                    children: [
                        (0, i.jsx)("circle", {
                            className: f.qB,
                            strokeWidth: A,
                            fill: "transparent",
                            r: T,
                            cx: I,
                            cy: I,
                            stroke: h,
                        }),
                        (0, i.jsx)("circle", {
                            className: f.qB,
                            strokeWidth: A,
                            fill: "transparent",
                            r: T,
                            cx: I,
                            cy: I,
                            stroke: h,
                        }),
                        (0, i.jsx)("circle", {
                            className: f.qB,
                            strokeWidth: A,
                            fill: "transparent",
                            r: T,
                            cx: I,
                            cy: I,
                            stroke: "rgba(98, 196, 101, 1)",
                            style: y,
                        }),
                    ],
                }),
            ],
        });
    });
