a.d(e, { A: () => v });
var r = a(477900),
    t = a(582128),
    i = a(503698),
    l = a.n(i),
    n = a(202091),
    c = a(717421),
    o = a(834730),
    d = a(398025),
    h = a(419367),
    m = a(660183),
    u = a(977056);
let v = function (s) {
    let {
            percentComplete: e,
            size: a = 42,
            style: i = "default",
            overlayText: v,
            overlayTextVariant: k = "text-lg/medium",
            children: x,
            useAltStyle: p = !1,
            ref: g,
        } = s,
        { strokeWidth: f } = "small" === i ? { strokeWidth: 3 } : { strokeWidth: 4 },
        N = a / 2,
        j = a / 2 - f / 2,
        y = 2 * Math.PI * j,
        b = y - e * y,
        W = t.useMemo(() => ({ strokeDasharray: `${y} ${y}`, strokeDashoffset: b }), [y, b]),
        { progressTextAnimation: q } = (0, c.z)({ progressTextAnimation: +(null != v && 1 !== e), config: h.N }),
        w = Math.round(100 * e),
        M = t.useMemo(() => (p ? "rgba(123, 194, 112, 1)" : "var(--status-positive)"), [p]),
        A = t.useMemo(() => (p ? "rgba(108, 111, 124, 0.24)" : "var(--background-mod-strong)"), [p]);
    return (0, r.jsxs)("div", {
        className: u.A7,
        ref: g,
        style: { width: a, height: a, padding: f + 2 },
        role: "progressbar",
        "aria-valuenow": w,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": m.intl.formatToPlainString(m.t.Gj8Jqn, { percent: w }),
        children: [
            (0, r.jsxs)("div", {
                className: u.vW,
                children: [
                    x,
                    (0, r.jsxs)(n.animated.div, {
                        style: { opacity: (0, d.a)(q), inset: f },
                        className: l()(u.rD, u.qk),
                        children: [
                            (0, r.jsx)("div", { className: l()(u.rD, u.LU) }),
                            (0, r.jsx)(o.E, { variant: k, color: "text-strong", className: u.l_, children: v }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("svg", {
                className: u.hr,
                viewBox: `0 0 ${a} ${a}`,
                children: [
                    !p &&
                        (0, r.jsx)("circle", {
                            className: u.qB,
                            strokeWidth: f,
                            fill: "transparent",
                            r: j,
                            cx: N,
                            cy: N,
                            stroke: A,
                        }),
                    (0, r.jsx)("circle", {
                        className: u.qB,
                        strokeWidth: f,
                        fill: "transparent",
                        r: j,
                        cx: N,
                        cy: N,
                        stroke: A,
                    }),
                    (0, r.jsx)("circle", {
                        className: l()(u.qB, { [u.ee]: p }),
                        strokeWidth: f,
                        strokeLinecap: p ? "round" : void 0,
                        fill: "transparent",
                        r: j,
                        cx: N,
                        cy: N,
                        stroke: M,
                        style: W,
                    }),
                ],
            }),
        ],
    });
};
