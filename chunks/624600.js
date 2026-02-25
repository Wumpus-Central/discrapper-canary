n.d(t, { A: () => u });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(442215),
    o = n(23373);
let u = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            backgroundColor: i,
            currentPxSpring: u,
            expansionSpring: c,
            timelineWidth: d,
            preloadedBuffers: m,
            maxSeekableX: p,
            interactionEnabled: E,
            useNewStyles: f,
            showGlow: h,
            glowClassName: v,
            progressFillClassName: x,
        } = e,
        { startPx: g, endPx: S, leftIndicatorIndex: A, rightIndicatorIndex: C } = t,
        _ = S - g,
        b = u.to((e) => Math.min(Math.max(0, e - g), _)),
        T = null != n && null != c && A === n,
        y = !T && null != n && null != c && C === n,
        N = T || y,
        D = y
            ? (0, s.to)([b, c], (e, t) => `translateX(-${Math.max(0, _ - t - e)}px)`)
            : b.to((e) => `translateX(-${_ - e}px)`),
        I = N ? (0, s.to)([b, c], (e, t) => (T ? Math.max(0, e - t) : Math.min(e, _ - t))) : b,
        L = Math.max(0, (p ?? 0) - g),
        j = f ? o.KR : o.Fv,
        M = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= g && e.startPx <= S),
            [m, g, S, d],
        );
    return (0, r.jsxs)(s.animated.div, {
        className: o.$v,
        style: {
            left: T ? c.to((e) => g + e) : g,
            width: N ? c.to((e) => _ - e) : _,
            "--custom-segment-bg": null != i ? i : void 0,
            "--custom-r-left": u.to((e) => (0 === g || e >= g ? "99px" : "0px")),
            "--custom-r-right": u.to((e) => (S >= d || e >= S ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: o.WJ,
                children: [
                    (0, r.jsxs)(s.animated.div, {
                        className: o.Bw,
                        style: { left: T ? c.to((e) => -(g + e)) : -g },
                        children: [
                            M?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: a()(o.r, j),
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px` },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            !E &&
                                L > 0 &&
                                (0, r.jsx)("div", { className: a()(o.YK, j), style: { width: `${L}px`, opacity: 1 } }),
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, { className: a()(o.TN, x), style: { transform: D } }),
                ],
            }),
            h && (0, r.jsx)(s.animated.div, { className: a()(o.DT, v), style: { width: I } }),
        ],
    });
};
