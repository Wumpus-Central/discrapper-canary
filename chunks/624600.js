n.d(t, { A: () => u });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(497766),
    o = n(712119);
let u = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            backgroundColor: a,
            playbackPxSpring: u,
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
        { startPx: g, endPx: S, leftIndicatorIndex: A, rightIndicatorIndex: b } = t,
        _ = S - g,
        C = u.to((e) => Math.min(Math.max(0, e - g), _)),
        y = null != n && null != c && A === n,
        T = !y && null != n && null != c && b === n,
        N = y || T,
        D = T
            ? (0, s.to)([C, c], (e, t) => `translateX(-${Math.max(0, _ - t - e)}px)`)
            : C.to((e) => `translateX(-${_ - e}px)`),
        I = N ? (0, s.to)([C, c], (e, t) => (y ? Math.max(0, e - t) : Math.min(e, _ - t))) : C,
        R = Math.max(0, (p ?? 0) - g),
        L = f ? o.KR : o.Fv,
        w = l.useMemo(
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
            width: N ? c.to((e) => _ - e) : _,
            "--custom-segment-bg": null != a ? a : void 0,
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
                            w?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: i()(o.r, L),
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px` },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            !E &&
                                R > 0 &&
                                (0, r.jsx)("div", { className: i()(o.YK, L), style: { width: `${R}px`, opacity: 1 } }),
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, {
                        className: i()(o.TN, x),
                        style: { transform: D, opacity: C.to((e) => (e <= 0 ? 0 : 1)) },
                    }),
                ],
            }),
            h && (0, r.jsx)(s.animated.div, { className: i()(o.DT, v), style: { width: I } }),
        ],
    });
};
