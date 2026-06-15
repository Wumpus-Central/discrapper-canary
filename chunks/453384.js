a.d(s, { A: () => u });
var r = a(627968),
    t = a(64700),
    i = a(503698),
    l = a.n(i),
    n = a(922139),
    o = a(717421),
    c = a(834730),
    d = a(398025),
    h = a(419367),
    m = a(375708),
    k = a(337689);
let u = t.forwardRef((e, s) => {
    let {
            percentComplete: a,
            size: i = 42,
            style: u = "default",
            overlayText: x,
            overlayTextVariant: p = "text-lg/medium",
            children: g,
            useAltStyle: v = !1,
        } = e,
        { strokeWidth: f } = "small" === u ? { strokeWidth: 3 } : { strokeWidth: 4 },
        N = i / 2,
        j = i / 2 - f / 2,
        b = 2 * Math.PI * j,
        y = b - a * b,
        w = t.useMemo(() => ({ strokeDasharray: `${b} ${b}`, strokeDashoffset: y }), [b, y]),
        { progressTextAnimation: W } = (0, o.z)({ progressTextAnimation: +(null != x && 1 !== a), config: h.N }),
        q = Math.round(100 * a),
        M = t.useMemo(() => (v ? "rgba(123, 194, 112, 1)" : "rgba(98, 196, 101, 1)"), [v]),
        B = t.useMemo(() => (v ? "rgba(108, 111, 124, 0.24)" : "var(--background-mod-strong)"), [v]);
    return (0, r.jsxs)("div", {
        className: k.A7,
        ref: s,
        style: { width: i, height: i, padding: f + 2 },
        role: "progressbar",
        "aria-valuenow": q,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": m.intl.formatToPlainString(m.t.Gj8Jqn, { percent: q }),
        children: [
            (0, r.jsxs)("div", {
                className: k.vW,
                children: [
                    g,
                    (0, r.jsxs)(n.animated.div, {
                        style: { opacity: (0, d.a)(W), inset: f },
                        className: l()(k.rD, k.qk),
                        children: [
                            (0, r.jsx)("div", { className: l()(k.rD, k.LU) }),
                            (0, r.jsx)(c.E, { variant: p, color: "text-strong", className: k.l_, children: x }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("svg", {
                className: k.hr,
                viewBox: `0 0 ${i} ${i}`,
                children: [
                    !v &&
                        (0, r.jsx)("circle", {
                            className: k.qB,
                            strokeWidth: f,
                            fill: "transparent",
                            r: j,
                            cx: N,
                            cy: N,
                            stroke: B,
                        }),
                    (0, r.jsx)("circle", {
                        className: k.qB,
                        strokeWidth: f,
                        fill: "transparent",
                        r: j,
                        cx: N,
                        cy: N,
                        stroke: B,
                    }),
                    (0, r.jsx)("circle", {
                        className: l()(k.qB, { [k.ee]: v }),
                        strokeWidth: f,
                        strokeLinecap: v ? "round" : void 0,
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
