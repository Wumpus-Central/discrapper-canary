a.d(e, { A: () => k });
var r = a(627968),
    t = a(64700),
    i = a(503698),
    l = a.n(i),
    o = a(580929),
    n = a(717421),
    c = a(834730),
    d = a(398025),
    h = a(419367),
    m = a(375708),
    u = a(337689);
let k = t.forwardRef((s, e) => {
    let {
            percentComplete: a,
            size: i = 42,
            style: k = "default",
            overlayText: p,
            overlayTextVariant: x = "text-lg/medium",
            children: v,
            useAltStyle: g = !1,
        } = s,
        { strokeWidth: f } = "small" === k ? { strokeWidth: 3 } : { strokeWidth: 4 },
        N = i / 2,
        j = i / 2 - f / 2,
        y = 2 * Math.PI * j,
        b = y - a * y,
        w = t.useMemo(() => ({ strokeDasharray: `${y} ${y}`, strokeDashoffset: b }), [y, b]),
        { progressTextAnimation: W } = (0, n.z)({ progressTextAnimation: +(null != p && 1 !== a), config: h.N }),
        q = Math.round(100 * a),
        M = t.useMemo(() => (g ? "rgba(123, 194, 112, 1)" : "var(--status-positive)"), [g]),
        B = t.useMemo(() => (g ? "rgba(108, 111, 124, 0.24)" : "var(--background-mod-strong)"), [g]);
    return (0, r.jsxs)("div", {
        className: u.A7,
        ref: e,
        style: { width: i, height: i, padding: f + 2 },
        role: "progressbar",
        "aria-valuenow": q,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": m.intl.formatToPlainString(m.t.Gj8Jqn, { percent: q }),
        children: [
            (0, r.jsxs)("div", {
                className: u.vW,
                children: [
                    v,
                    (0, r.jsxs)(o.animated.div, {
                        style: { opacity: (0, d.a)(W), inset: f },
                        className: l()(u.rD, u.qk),
                        children: [
                            (0, r.jsx)("div", { className: l()(u.rD, u.LU) }),
                            (0, r.jsx)(c.E, { variant: x, color: "text-strong", className: u.l_, children: p }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("svg", {
                className: u.hr,
                viewBox: `0 0 ${i} ${i}`,
                children: [
                    !g &&
                        (0, r.jsx)("circle", {
                            className: u.qB,
                            strokeWidth: f,
                            fill: "transparent",
                            r: j,
                            cx: N,
                            cy: N,
                            stroke: B,
                        }),
                    (0, r.jsx)("circle", {
                        className: u.qB,
                        strokeWidth: f,
                        fill: "transparent",
                        r: j,
                        cx: N,
                        cy: N,
                        stroke: B,
                    }),
                    (0, r.jsx)("circle", {
                        className: l()(u.qB, { [u.ee]: g }),
                        strokeWidth: f,
                        strokeLinecap: g ? "round" : void 0,
                        fill: "transparent",
                        r: j,
                        cx: N,
                        cy: N,
                        stroke: M,
                        style: w,
                    }),
                ],
            }),
        ],
    });
});
