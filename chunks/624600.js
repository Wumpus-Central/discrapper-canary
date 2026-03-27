n.d(t, { A: () => u });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(880013),
    o = n(751741);
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
            interactionEnabled: h,
            useNewStyles: f,
            showGlow: x,
            glowClassName: E,
            progressFillClassName: v,
        } = e,
        { startPx: g, endPx: b, leftIndicatorIndex: y, rightIndicatorIndex: S } = t,
        C = b - g,
        A = u.to((e) => Math.min(Math.max(0, e - g), C)),
        N = null != n && null != c && y === n,
        T = !N && null != n && null != c && S === n,
        w = N || T,
        R = T
            ? (0, s.to)([A, c], (e, t) => `translateX(-${Math.max(0, C - t - e)}px)`)
            : A.to((e) => `translateX(-${C - e}px)`),
        j = w ? (0, s.to)([A, c], (e, t) => (N ? Math.max(0, e - t) : Math.min(e, C - t))) : A,
        D = Math.max(0, (p ?? 0) - g),
        P = f ? o.KR : o.Fv,
        L = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= g && e.startPx <= b),
            [m, g, b, d],
        );
    return (0, r.jsxs)(s.animated.div, {
        className: o.$v,
        style: {
            left: N ? c.to((e) => g + e) : g,
            width: w ? c.to((e) => C - e) : C,
            "--custom-segment-bg": null != a ? a : void 0,
            "--custom-r-left": u.to((e) => (0 === g || e >= g ? "99px" : "0px")),
            "--custom-r-right": u.to((e) => (b >= d || e >= b ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: o.WJ,
                children: [
                    (0, r.jsxs)(s.animated.div, {
                        className: o.Bw,
                        style: { left: N ? c.to((e) => -(g + e)) : -g },
                        children: [
                            L?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: i()(o.r, P),
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px` },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            !h &&
                                D > 0 &&
                                (0, r.jsx)("div", { className: i()(o.YK, P), style: { width: `${D}px`, opacity: 1 } }),
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, {
                        className: i()(o.TN, v),
                        style: { transform: R, opacity: A.to((e) => (e <= 0 ? 0 : 1)) },
                    }),
                ],
            }),
            x && (0, r.jsx)(s.animated.div, { className: i()(o.DT, E), style: { width: j } }),
        ],
    });
};
