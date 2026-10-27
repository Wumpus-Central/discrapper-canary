a.d(s, { A: () => k });
var t = a(477900),
    r = a(582128),
    i = a(503698),
    n = a.n(i),
    l = a(399513),
    o = a(717421),
    c = a(834730),
    d = a(444431),
    h = a(398025),
    m = a(419367),
    u = a(105292),
    v = a(977056);
let k = function (e) {
    let {
            percentComplete: s,
            size: a = 42,
            style: i = "default",
            overlayText: k,
            overlayTextVariant: x = "text-lg/medium",
            children: p,
            useAltStyle: f = !1,
            ref: g,
        } = e,
        { strokeWidth: N } = "small" === i ? { strokeWidth: 3 } : { strokeWidth: 4 },
        j = a / 2,
        b = a / 2 - N / 2,
        y = 2 * Math.PI * b,
        M = y - s * y,
        W = (0, d.J)(),
        [q, w] = r.useState({ offset: M, ease: !1 }),
        A = q.offset !== M,
        B = A ? Math.abs(q.offset - M) >= 0.5 : q.ease;
    A && W && w({ offset: M, ease: B });
    let D = r.useMemo(
            () => ({ strokeDasharray: `${y} ${y}`, strokeDashoffset: M, transition: B || !W ? void 0 : "none" }),
            [y, M, B, W],
        ),
        { progressTextAnimation: $ } = (0, o.z)({ progressTextAnimation: +(null != k && 1 !== s), config: m.N }),
        _ = Math.round(100 * s),
        C = r.useMemo(() => (f ? "rgba(123, 194, 112, 1)" : "var(--status-positive)"), [f]),
        J = r.useMemo(() => (f ? "rgba(108, 111, 124, 0.24)" : "var(--background-mod-strong)"), [f]);
    return (0, t.jsxs)("div", {
        className: v.A7,
        ref: g,
        style: { width: a, height: a, padding: N + 2 },
        role: "progressbar",
        "aria-valuenow": _,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": u.intl.formatToPlainString(u.t.Gj8Jqn, { percent: _ }),
        children: [
            (0, t.jsxs)("div", {
                className: v.vW,
                children: [
                    p,
                    (0, t.jsxs)(l.animated.div, {
                        style: { opacity: (0, h.a)($), inset: N },
                        className: n()(v.rD, v.qk),
                        children: [
                            (0, t.jsx)("div", { className: n()(v.rD, v.LU) }),
                            (0, t.jsx)(c.E, { variant: x, color: "text-strong", className: v.l_, children: k }),
                        ],
                    }),
                ],
            }),
            (0, t.jsxs)("svg", {
                className: v.hr,
                viewBox: `0 0 ${a} ${a}`,
                children: [
                    !f &&
                        (0, t.jsx)("circle", {
                            className: v.qB,
                            strokeWidth: N,
                            fill: "transparent",
                            r: b,
                            cx: j,
                            cy: j,
                            stroke: J,
                        }),
                    (0, t.jsx)("circle", {
                        className: v.qB,
                        strokeWidth: N,
                        fill: "transparent",
                        r: b,
                        cx: j,
                        cy: j,
                        stroke: J,
                    }),
                    (0, t.jsx)("circle", {
                        className: n()(v.qB, { [v.ee]: f }),
                        strokeWidth: N,
                        strokeLinecap: f ? "round" : void 0,
                        fill: "transparent",
                        r: b,
                        cx: j,
                        cy: j,
                        stroke: C,
                        style: D,
                    }),
                ],
            }),
        ],
    });
};
