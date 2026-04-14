"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(445887),
    l = n(876230),
    u = n(716277);
let c = 99,
    d = (e) => {
        let {
                segment: t,
                animatingIndex: n,
                playbackPxSpring: s,
                animate: d,
                playerState: _,
                isDragging: f,
                dragX: h,
                expansionSpring: p,
                timelineWidth: m,
                preloadedBuffers: E,
                maxSeekableX: g,
                segmentBorderRadius: A = 99,
                showGlow: I,
                glowClassName: T,
                progressFillClassName: S,
            } = e,
            { startPx: y, endPx: v, leftIndicatorIndex: C, rightIndicatorIndex: N } = t,
            R = v - y,
            b = i.useRef(null),
            O = i.useRef(null),
            D = i.useRef(d);
        i.useLayoutEffect(() => {
            let e = D.current;
            (D.current = d),
                e && !d && _ !== l.Q6.PLAYING
                    ? (null != b.current && (b.current.style.transform = getComputedStyle(b.current).transform),
                      null != O.current && (O.current.style.width = getComputedStyle(O.current).width))
                    : !e &&
                      d &&
                      (null != b.current && (b.current.style.transform = getComputedStyle(b.current).transform),
                      null != O.current && (O.current.style.width = getComputedStyle(O.current).width));
        }, [d, _]);
        let L = s.to((e) => Math.min(Math.max(0, e - y), R)),
            w = null != n && null != p && C === n,
            M = !w && null != n && null != p && N === n,
            x = w || M,
            P = f && null != h ? Math.min(Math.max(0, h - y), R) : null,
            k =
                null != P
                    ? `translateX(-${R - P}px)`
                    : M
                      ? (0, o.to)([L, p], (e, t) => `translateX(-${Math.max(0, R - t - e)}px)`)
                      : L.to((e) => `translateX(-${R - e}px)`),
            U = null != P ? P : x ? (0, o.to)([L, p], (e, t) => (w ? Math.max(0, e - t) : Math.min(e, R - t))) : L,
            G = Math.max(0, (g ?? 0) - y),
            F = null != g && G > 0,
            B = { borderRadius: `${A}px` },
            V = i.useMemo(
                () =>
                    E?.map((e) => ({ startPx: e.start * m, endPx: (e.start + e.size) * m })).filter(
                        (e) => e.endPx >= y && e.startPx <= v,
                    ),
                [E, y, v, m],
            );
        return (0, r.jsxs)(o.animated.div, {
            className: u.$v,
            style: {
                left: w ? p.to((e) => y + e) : y,
                width: x ? p.to((e) => R - e) : R,
                "--custom-r-left": s.to((e) => (0 === y || e >= y ? `${c}px` : "0px")),
                "--custom-r-right": s.to((e) => (v >= m || e >= v ? `${c}px` : "0px")),
                "--custom-timeline-width": `${m}px`,
            },
            children: [
                (0, r.jsxs)("div", {
                    className: u.WJ,
                    children: [
                        (0, r.jsxs)(o.animated.div, {
                            className: u.Bw,
                            style: { left: w ? p.to((e) => -(y + e)) : -y },
                            children: [
                                V?.map((e) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: u.r,
                                            style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...B },
                                        },
                                        `${e.startPx}:${e.endPx}`,
                                    ),
                                ),
                                F &&
                                    (0, r.jsx)("div", {
                                        className: u.YK,
                                        style: { width: `${G}px`, opacity: 1, ...B },
                                    }),
                            ],
                        }),
                        (0, r.jsx)(o.animated.div, {
                            ref: b,
                            className: a()(u.TN, S),
                            style: {
                                transform: k,
                                opacity: null != P ? (P <= 0 ? 0 : 1) : L.to((e) => (e <= 0 ? 0 : 1)),
                            },
                        }),
                    ],
                }),
                I && (0, r.jsx)(o.animated.div, { ref: O, className: a()(u.DT, T), style: { width: U } }),
            ],
        });
    };
