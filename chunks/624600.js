n.d(t, { A: () => u });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(475539),
    o = n(712119);
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
            interactionEnabled: f,
            useNewStyles: E,
            showGlow: h,
            glowClassName: v,
            progressFillClassName: x,
        } = e,
        { startPx: g, endPx: S, leftIndicatorIndex: A, rightIndicatorIndex: C } = t,
        b = S - g,
        _ = u.to((e) => Math.min(Math.max(0, e - g), b)),
        y = null != n && null != c && A === n,
        T = !y && null != n && null != c && C === n,
        N = y || T,
        D = T
            ? (0, s.to)([_, c], (e, t) => `translateX(-${Math.max(0, b - t - e)}px)`)
            : _.to((e) => `translateX(-${b - e}px)`),
        I = N ? (0, s.to)([_, c], (e, t) => (y ? Math.max(0, e - t) : Math.min(e, b - t))) : _,
        L = Math.max(0, (p ?? 0) - g),
        j = E ? o.KR : o.Fv,
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
            left: y ? c.to((e) => g + e) : g,
            width: N ? c.to((e) => b - e) : b,
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
                        style: { left: y ? c.to((e) => -(g + e)) : -g },
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
                            !f &&
                                L > 0 &&
                                (0, r.jsx)("div", { className: a()(o.YK, j), style: { width: `${L}px`, opacity: 1 } }),
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, {
                        className: a()(o.TN, x),
                        style: { transform: D, opacity: _.to((e) => (e <= 0 ? 0 : 1)) },
                    }),
                ],
            }),
            h && (0, r.jsx)(s.animated.div, { className: a()(o.DT, v), style: { width: I } }),
        ],
    });
};
