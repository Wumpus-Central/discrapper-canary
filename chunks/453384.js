"use strict";
n.d(t, { A: () => h });
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
let h = r.forwardRef((e, t) => {
    let {
            percentComplete: n,
            size: s = 42,
            style: h = "default",
            overlayText: p,
            overlayTextVariant: E = "text-lg/medium",
            children: m,
            useAltStyle: g = !1,
        } = e,
        { strokeWidth: A } = "small" === h ? { strokeWidth: 3 } : { strokeWidth: 4 },
        I = s / 2,
        T = s / 2 - A / 2,
        S = 2 * Math.PI * T,
        N = S - n * S,
        y = r.useMemo(() => ({ strokeDasharray: `${S} ${S}`, strokeDashoffset: N }), [S, N]),
        { progressTextAnimation: C } = (0, l.z)({ progressTextAnimation: +(null != p && 1 !== n), config: d.N }),
        v = Math.round(100 * n),
        O = r.useMemo(() => (g ? "rgba(123, 194, 112, 1)" : "rgba(98, 196, 101, 1)"), [g]),
        R = r.useMemo(() => (g ? "var(--background-mod-subtle)" : "var(--background-mod-strong)"), [g]);
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
                    m,
                    (0, i.jsxs)(o.animated.div, {
                        style: { opacity: (0, c.a)(C), inset: A },
                        className: a()(f.rD, f.qk),
                        children: [
                            (0, i.jsx)("div", { className: a()(f.rD, f.LU) }),
                            (0, i.jsx)(u.E, { variant: E, color: "text-strong", className: f.l_, children: p }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("svg", {
                className: f.hr,
                height: s,
                width: s,
                children: [
                    !g &&
                        (0, i.jsx)("circle", {
                            className: f.qB,
                            strokeWidth: A,
                            fill: "transparent",
                            r: T,
                            cx: I,
                            cy: I,
                            stroke: R,
                        }),
                    (0, i.jsx)("circle", {
                        className: f.qB,
                        strokeWidth: A,
                        fill: "transparent",
                        r: T,
                        cx: I,
                        cy: I,
                        stroke: R,
                    }),
                    (0, i.jsx)("circle", {
                        className: f.qB,
                        strokeWidth: A,
                        strokeLinecap: g ? "round" : void 0,
                        fill: "transparent",
                        r: T,
                        cx: I,
                        cy: I,
                        stroke: O,
                        style: y,
                    }),
                ],
            }),
        ],
    });
});
