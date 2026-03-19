n.d(t, { A: () => u });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(497766),
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
            interactionEnabled: f,
            useNewStyles: E,
            showGlow: h,
            glowClassName: v,
            progressFillClassName: x,
        } = e,
        { startPx: g, endPx: S, leftIndicatorIndex: A, rightIndicatorIndex: C } = t,
        _ = S - g,
        b = u.to((e) => Math.min(Math.max(0, e - g), _)),
        y = null != n && null != c && A === n,
        T = !y && null != n && null != c && C === n,
        N = y || T,
        D = T
            ? (0, a.to)([b, c], (e, t) => `translateX(-${Math.max(0, _ - t - e)}px)`)
            : b.to((e) => `translateX(-${_ - e}px)`),
        R = N ? (0, a.to)([b, c], (e, t) => (y ? Math.max(0, e - t) : Math.min(e, _ - t))) : b,
        L = Math.max(0, (p ?? 0) - g),
        M = E ? o.KR : o.Fv,
        j = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= g && e.startPx <= S),
            [m, g, S, d],
        );
    return (0, r.jsxs)(a.animated.div, {
        className: o.$v,
        style: {
            left: y ? c.to((e) => g + e) : g,
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
                    (0, r.jsxs)(a.animated.div, {
                        className: o.Bw,
                        style: { left: y ? c.to((e) => -(g + e)) : -g },
                        children: [
                            j?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: s()(o.r, M),
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px` },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            !f &&
                                L > 0 &&
                                (0, r.jsx)("div", { className: s()(o.YK, M), style: { width: `${L}px`, opacity: 1 } }),
                        ],
                    }),
                    (0, r.jsx)(a.animated.div, {
                        className: s()(o.TN, x),
                        style: { transform: D, opacity: b.to((e) => (e <= 0 ? 0 : 1)) },
                    }),
                ],
            }),
            h && (0, r.jsx)(a.animated.div, { className: s()(o.DT, v), style: { width: R } }),
        ],
    });
};
