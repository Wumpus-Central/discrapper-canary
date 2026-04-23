n.d(t, { A: () => c });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(356197),
    u = n(876230),
    o = n(6821);
let c = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            playbackPxSpring: a,
            playerState: c,
            isDragging: d,
            dragX: m,
            expansionSpring: f,
            timelineWidth: h,
            preloadedBuffers: p,
            maxSeekableX: E,
            segmentBorderRadius: v = 99,
            progressClassName: x,
        } = e,
        { startPx: b, endPx: g, leftIndicatorIndex: y, rightIndicatorIndex: A } = t,
        C = g - b,
        S = a.to((e) => Math.min(Math.max(0, e - b), C)),
        N = null != n && null != f && y === n,
        R = !N && null != n && null != f && A === n,
        L = N || R,
        w = d && null != m ? Math.min(Math.max(0, m - b), C) : null,
        { progressToPlayheadBarTransform: T, glowWidth: P } = (function (e) {
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
            dragFillWidth: w,
            shrinkEnd: R,
            isAnimating: L,
            fillWidthAnimated: S,
            expansionSpring: f,
        }),
        D = null != w ? (w <= 0 ? 0 : 1) : S.to((e) => (e <= 0 ? 0 : 1)),
        M = c !== u.Q6.ENDED,
        j = Math.max(0, (E ?? 0) - b),
        k = { borderRadius: `${v}px` },
        I = l.useMemo(
            () =>
                p
                    ?.map((e) => ({ startPx: e.start * h, endPx: (e.start + e.size) * h }))
                    .filter((e) => e.endPx >= b && e.startPx <= g),
            [p, b, g, h],
        );
    return (0, r.jsxs)(s.animated.div, {
        className: i()(o.Td, x),
        style: {
            left: N ? f.to((e) => b + e) : b,
            width: L ? f.to((e) => C - e) : C,
            "--custom-r-left": a.to((e) => (0 === b || e >= b ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (g >= h || e >= g ? "99px" : "0px")),
            "--custom-timeline-width": `${h}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: o.MI,
                children: [
                    (0, r.jsxs)(s.animated.div, {
                        className: o._I,
                        style: { left: N ? f.to((e) => -(b + e)) : -b },
                        children: [
                            I?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: o.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...k },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != E &&
                                j > 0 &&
                                (0, r.jsx)("div", { className: o.YK, style: { width: `${j}px`, opacity: 1, ...k } }),
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, { className: o.wx, style: { transform: T, opacity: D } }),
                ],
            }),
            M && (0, r.jsx)(s.animated.div, { className: o.fk, style: { width: P, opacity: D } }),
        ],
    });
};
