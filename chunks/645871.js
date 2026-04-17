n.d(t, { A: () => c });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(876230),
    o = n(6821);
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
            preloadedBuffers: E,
            maxSeekableX: x,
            segmentBorderRadius: v = 99,
            progressClassName: b,
        } = e,
        { startPx: g, endPx: y, leftIndicatorIndex: S, rightIndicatorIndex: A } = t,
        C = y - g,
        N = l.useRef(null),
        R = l.useRef(null),
        L = l.useRef(c);
    l.useLayoutEffect(() => {
        let e = L.current;
        (L.current = c),
            e && !c && d !== u.Q6.PLAYING
                ? (null != N.current && (N.current.style.transform = getComputedStyle(N.current).transform),
                  null != R.current && (R.current.style.width = getComputedStyle(R.current).width))
                : !e &&
                  c &&
                  (null != N.current && (N.current.style.transform = getComputedStyle(N.current).transform),
                  null != R.current && (R.current.style.width = getComputedStyle(R.current).width));
    }, [c, d]);
    let w = a.to((e) => Math.min(Math.max(0, e - g), C)),
        T = null != n && null != h && S === n,
        P = !T && null != n && null != h && A === n,
        D = T || P,
        j = m && null != f ? Math.min(Math.max(0, f - g), C) : null,
        { progressToPlayheadBarTransform: M, glowWidth: k } = (function (e) {
            let {
                segmentWidth: t,
                dragFillWidth: n,
                shrinkEnd: r,
                isAnimating: l,
                fillWidthAnimated: a,
                expansionSpring: i,
            } = e;
            return null != n
                ? { progressToPlayheadBarTransform: `translateX(-${t - n}px)`, glowWidth: n }
                : r && null != i
                  ? {
                        progressToPlayheadBarTransform: (0, s.to)(
                            [a, i],
                            (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                        ),
                        glowWidth: (0, s.to)([a, i], (e, n) => Math.min(Number(e), t - Number(n))),
                    }
                  : l && null != i
                    ? {
                          progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                          glowWidth: (0, s.to)([a, i], (e, t) => Math.max(0, Number(e) - Number(t))),
                      }
                    : { progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`), glowWidth: a };
        })({
            segmentWidth: C,
            dragFillWidth: j,
            shrinkEnd: P,
            isAnimating: D,
            fillWidthAnimated: w,
            expansionSpring: h,
        }),
        I = null != j ? (j <= 0 ? 0 : 1) : w.to((e) => (e <= 0 ? 0 : 1)),
        B = d !== u.Q6.ENDED,
        U = Math.max(0, (x ?? 0) - g),
        F = { borderRadius: `${v}px` },
        G = l.useMemo(
            () =>
                E?.map((e) => ({ startPx: e.start * p, endPx: (e.start + e.size) * p })).filter(
                    (e) => e.endPx >= g && e.startPx <= y,
                ),
            [E, g, y, p],
        );
    return (0, r.jsxs)(s.animated.div, {
        className: i()(o.Td, b),
        style: {
            left: T ? h.to((e) => g + e) : g,
            width: D ? h.to((e) => C - e) : C,
            "--custom-r-left": a.to((e) => (0 === g || e >= g ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (y >= p || e >= y ? "99px" : "0px")),
            "--custom-timeline-width": `${p}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: o.MI,
                children: [
                    (0, r.jsxs)(s.animated.div, {
                        className: o._I,
                        style: { left: T ? h.to((e) => -(g + e)) : -g },
                        children: [
                            G?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: o.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...F },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != x &&
                                U > 0 &&
                                (0, r.jsx)("div", { className: o.YK, style: { width: `${U}px`, opacity: 1, ...F } }),
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, { ref: N, className: o.wx, style: { transform: M, opacity: I } }),
                ],
            }),
            B && (0, r.jsx)(s.animated.div, { ref: R, className: o.fk, style: { width: k, opacity: I } }),
        ],
    });
};
