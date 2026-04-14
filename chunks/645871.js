n.d(t, { A: () => c });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(445887),
    u = n(876230),
    o = n(716277);
let c = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            playbackPxSpring: a,
            animate: c,
            playerState: d,
            isDragging: m,
            dragX: f,
            expansionSpring: h,
            timelineWidth: p,
            preloadedBuffers: x,
            maxSeekableX: E,
            segmentBorderRadius: b = 99,
            progressClassName: v,
        } = e,
        { startPx: g, endPx: y, leftIndicatorIndex: S, rightIndicatorIndex: C } = t,
        A = y - g,
        N = l.useRef(null),
        R = l.useRef(null),
        w = l.useRef(c);
    l.useLayoutEffect(() => {
        let e = w.current;
        (w.current = c),
            e && !c && d !== u.Q6.PLAYING
                ? (null != N.current && (N.current.style.transform = getComputedStyle(N.current).transform),
                  null != R.current && (R.current.style.width = getComputedStyle(R.current).width))
                : !e &&
                  c &&
                  (null != N.current && (N.current.style.transform = getComputedStyle(N.current).transform),
                  null != R.current && (R.current.style.width = getComputedStyle(R.current).width));
    }, [c, d]);
    let T = a.to((e) => Math.min(Math.max(0, e - g), A)),
        L = null != n && null != h && S === n,
        j = !L && null != n && null != h && C === n,
        P = L || j,
        D = m && null != f ? Math.min(Math.max(0, f - g), A) : null,
        M =
            null != D
                ? `translateX(-${A - D}px)`
                : j
                  ? (0, s.to)([T, h], (e, t) => `translateX(-${Math.max(0, A - t - e)}px)`)
                  : T.to((e) => `translateX(-${A - e}px)`),
        k = null != D ? D : P ? (0, s.to)([T, h], (e, t) => (L ? Math.max(0, e - t) : Math.min(e, A - t))) : T,
        I = d !== u.Q6.ENDED,
        B = Math.max(0, (E ?? 0) - g),
        U = { borderRadius: `${b}px` },
        G = l.useMemo(
            () =>
                x
                    ?.map((e) => ({ startPx: e.start * p, endPx: (e.start + e.size) * p }))
                    .filter((e) => e.endPx >= g && e.startPx <= y),
            [x, g, y, p],
        );
    return (0, r.jsxs)(s.animated.div, {
        className: i()(o.$v, v),
        style: {
            left: L ? h.to((e) => g + e) : g,
            width: P ? h.to((e) => A - e) : A,
            "--custom-r-left": a.to((e) => (0 === g || e >= g ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (y >= p || e >= y ? "99px" : "0px")),
            "--custom-timeline-width": `${p}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: o.WJ,
                children: [
                    (0, r.jsxs)(s.animated.div, {
                        className: o.Bw,
                        style: { left: L ? h.to((e) => -(g + e)) : -g },
                        children: [
                            G?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: o.r,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...U },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != E &&
                                B > 0 &&
                                (0, r.jsx)("div", { className: o.YK, style: { width: `${B}px`, opacity: 1, ...U } }),
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, {
                        ref: N,
                        className: o.TN,
                        style: { transform: M, opacity: null != D ? (D <= 0 ? 0 : 1) : T.to((e) => (e <= 0 ? 0 : 1)) },
                    }),
                ],
            }),
            I &&
                (0, r.jsx)(s.animated.div, {
                    ref: R,
                    className: o.DT,
                    style: { width: k, opacity: null != D ? (D <= 0 ? 0 : 1) : T.to((e) => (e <= 0 ? 0 : 1)) },
                }),
        ],
    });
};
