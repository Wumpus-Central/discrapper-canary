a.d(s, { A: () => v });
var r = a(477900),
    t = a(582128),
    i = a(503698),
    l = a.n(i),
    n = a(53466),
    c = a(717421),
    o = a(834730),
    d = a(398025),
    h = a(419367),
    m = a(375708),
    u = a(740769);
let v = t.forwardRef(function (e, s) {
    let {
            percentComplete: a,
            size: i = 42,
            style: v = "default",
            overlayText: k,
            overlayTextVariant: x = "text-lg/medium",
            children: p,
            useAltStyle: f = !1,
        } = e,
        { strokeWidth: g } = "small" === v ? { strokeWidth: 3 } : { strokeWidth: 4 },
        N = i / 2,
        j = i / 2 - g / 2,
        y = 2 * Math.PI * j,
        b = y - a * y,
        w = t.useMemo(() => ({ strokeDasharray: `${y} ${y}`, strokeDashoffset: b }), [y, b]),
        { progressTextAnimation: W } = (0, c.z)({ progressTextAnimation: +(null != k && 1 !== a), config: h.N }),
        q = Math.round(100 * a),
        M = t.useMemo(() => (f ? "rgba(123, 194, 112, 1)" : "var(--status-positive)"), [f]),
        A = t.useMemo(() => (f ? "rgba(108, 111, 124, 0.24)" : "var(--background-mod-strong)"), [f]);
    return (0, r.jsxs)("div", {
        className: u.A7,
        ref: s,
        style: { width: i, height: i, padding: g + 2 },
        role: "progressbar",
        "aria-valuenow": q,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": m.intl.formatToPlainString(m.t.Gj8Jqn, { percent: q }),
        children: [
            (0, r.jsxs)("div", {
                className: u.vW,
                children: [
                    p,
                    (0, r.jsxs)(n.animated.div, {
                        style: { opacity: (0, d.a)(W), inset: g },
                        className: l()(u.rD, u.qk),
                        children: [
                            (0, r.jsx)("div", { className: l()(u.rD, u.LU) }),
                            (0, r.jsx)(o.E, { variant: x, color: "text-strong", className: u.l_, children: k }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("svg", {
                className: u.hr,
                viewBox: `0 0 ${i} ${i}`,
                children: [
                    !f &&
                        (0, r.jsx)("circle", {
                            className: u.qB,
                            strokeWidth: g,
                            fill: "transparent",
                            r: j,
                            cx: N,
                            cy: N,
                            stroke: A,
                        }),
                    (0, r.jsx)("circle", {
                        className: u.qB,
                        strokeWidth: g,
                        fill: "transparent",
                        r: j,
                        cx: N,
                        cy: N,
                        stroke: A,
                    }),
                    (0, r.jsx)("circle", {
                        className: l()(u.qB, { [u.ee]: f }),
                        strokeWidth: g,
                        strokeLinecap: f ? "round" : void 0,
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
