"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(922139),
    l = n(717421),
    u = n(834730),
    c = n(398025),
    d = n(419367),
    _ = n(375708),
    h = n(337689);
let f = r.forwardRef((e, t) => {
    let {
            percentComplete: n,
            size: s = 42,
            style: f = "default",
            overlayText: p,
            overlayTextVariant: E = "text-lg/medium",
            children: m,
            useAltStyle: g = !1,
        } = e,
        { strokeWidth: A } = "small" === f ? { strokeWidth: 3 } : { strokeWidth: 4 },
        I = s / 2,
        T = s / 2 - A / 2,
        S = 2 * Math.PI * T,
        y = S - n * S,
        N = r.useMemo(() => ({ strokeDasharray: `${S} ${S}`, strokeDashoffset: y }), [S, y]),
        { progressTextAnimation: v } = (0, l.z)({ progressTextAnimation: +(null != p && 1 !== n), config: d.N }),
        C = Math.round(100 * n),
        R = r.useMemo(() => (g ? "rgba(123, 194, 112, 1)" : "rgba(98, 196, 101, 1)"), [g]),
        O = r.useMemo(() => (g ? "rgba(108, 111, 124, 0.24)" : "var(--background-mod-strong)"), [g]);
    return (0, i.jsxs)("div", {
        className: h.A7,
        ref: t,
        style: { width: s, height: s, padding: A + 2 },
        role: "progressbar",
        "aria-valuenow": C,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": _.intl.formatToPlainString(_.t.Gj8Jqn, { percent: C }),
        children: [
            (0, i.jsxs)("div", {
                className: h.vW,
                children: [
                    m,
                    (0, i.jsxs)(o.animated.div, {
                        style: { opacity: (0, c.a)(v), inset: A },
                        className: a()(h.rD, h.qk),
                        children: [
                            (0, i.jsx)("div", { className: a()(h.rD, h.LU) }),
                            (0, i.jsx)(u.E, { variant: E, color: "text-strong", className: h.l_, children: p }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("svg", {
                className: h.hr,
                viewBox: `0 0 ${s} ${s}`,
                children: [
                    !g &&
                        (0, i.jsx)("circle", {
                            className: h.qB,
                            strokeWidth: A,
                            fill: "transparent",
                            r: T,
                            cx: I,
                            cy: I,
                            stroke: O,
                        }),
                    (0, i.jsx)("circle", {
                        className: h.qB,
                        strokeWidth: A,
                        fill: "transparent",
                        r: T,
                        cx: I,
                        cy: I,
                        stroke: O,
                    }),
                    (0, i.jsx)("circle", {
                        className: a()(h.qB, { [h.ee]: g }),
                        strokeWidth: A,
                        strokeLinecap: g ? "round" : void 0,
                        fill: "transparent",
                        r: T,
                        cx: I,
                        cy: I,
                        stroke: R,
                        style: N,
                    }),
                ],
            }),
        ],
    });
});
