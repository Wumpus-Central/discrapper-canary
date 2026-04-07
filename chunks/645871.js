n.d(t, { A: () => c });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(687498),
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
            showGlow: g,
            glowClassName: v,
            progressFillClassName: y,
        } = e,
        { startPx: S, endPx: C, leftIndicatorIndex: A, rightIndicatorIndex: N } = t,
        R = C - S,
        w = l.useRef(null),
        T = l.useRef(null),
        L = l.useRef(c);
    l.useLayoutEffect(() => {
        let e = L.current;
        (L.current = c),
            e && !c && d !== u.Q6.PLAYING
                ? (null != w.current && (w.current.style.transform = getComputedStyle(w.current).transform),
                  null != T.current && (T.current.style.width = getComputedStyle(T.current).width))
                : !e &&
                  c &&
                  (null != w.current && (w.current.style.transform = getComputedStyle(w.current).transform),
                  null != T.current && (T.current.style.width = getComputedStyle(T.current).width));
    }, [c, d]);
    let j = a.to((e) => Math.min(Math.max(0, e - S), R)),
        P = null != n && null != h && A === n,
        D = !P && null != n && null != h && N === n,
        M = P || D,
        k = m && null != f ? Math.min(Math.max(0, f - S), R) : null,
        I =
            null != k
                ? `translateX(-${R - k}px)`
                : D
                  ? (0, s.to)([j, h], (e, t) => `translateX(-${Math.max(0, R - t - e)}px)`)
                  : j.to((e) => `translateX(-${R - e}px)`),
        B = null != k ? k : M ? (0, s.to)([j, h], (e, t) => (P ? Math.max(0, e - t) : Math.min(e, R - t))) : j,
        U = Math.max(0, (E ?? 0) - S),
        G = { borderRadius: `${b}px` },
        $ = l.useMemo(
            () =>
                x
                    ?.map((e) => ({ startPx: e.start * p, endPx: (e.start + e.size) * p }))
                    .filter((e) => e.endPx >= S && e.startPx <= C),
            [x, S, C, p],
        );
    return (0, r.jsxs)(s.animated.div, {
        className: o.$v,
        style: {
            left: P ? h.to((e) => S + e) : S,
            width: M ? h.to((e) => R - e) : R,
            "--custom-r-left": a.to((e) => (0 === S || e >= S ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (C >= p || e >= C ? "99px" : "0px")),
            "--custom-timeline-width": `${p}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: o.WJ,
                children: [
                    (0, r.jsxs)(s.animated.div, {
                        className: o.Bw,
                        style: { left: P ? h.to((e) => -(S + e)) : -S },
                        children: [
                            $?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: o.r,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...G },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != E &&
                                U > 0 &&
                                (0, r.jsx)("div", { className: o.YK, style: { width: `${U}px`, opacity: 1, ...G } }),
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, {
                        ref: w,
                        className: i()(o.TN, y),
                        style: { transform: I, opacity: null != k ? (k <= 0 ? 0 : 1) : j.to((e) => (e <= 0 ? 0 : 1)) },
                    }),
                ],
            }),
            g && (0, r.jsx)(s.animated.div, { ref: T, className: i()(o.DT, v), style: { width: B } }),
        ],
    });
};
