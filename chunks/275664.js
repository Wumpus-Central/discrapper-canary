n.d(t, { Ay: () => S }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(61491),
    u = n(717421),
    o = n(939249),
    c = n(834730),
    d = n(621466),
    m = n(460890),
    f = n(770178),
    h = n(765548),
    p = n(650583),
    E = n(419354),
    v = n(6821);
let x = l.memo(function (e) {
    let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
    return (0, r.jsx)(E.animated.div, {
        "data-testid": "discord-web-video-player-playhead",
        className: v.lG,
        style: { left: n && null != l ? `${l}px` : t.to((e) => `${e}px`) },
    });
});
var b = n(876230);
let g = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            playbackPxSpring: a,
            playerState: s,
            isDragging: u,
            dragX: o,
            expansionSpring: c,
            timelineWidth: d,
            preloadedBuffers: m,
            maxSeekableX: f,
            segmentBorderRadius: h = 99,
            progressClassName: p,
        } = e,
        { startPx: x, endPx: g, leftIndicatorIndex: y, rightIndicatorIndex: S } = t,
        C = g - x,
        N = a.to((e) => Math.min(Math.max(0, e - x), C)),
        A = null != n && null != c && y === n,
        R = !A && null != n && null != c && S === n,
        L = A || R,
        w = u && null != o ? Math.min(Math.max(0, o - x), C) : null,
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
                        progressToPlayheadBarTransform: (0, E.to)(
                            [a, i],
                            (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                        ),
                        glowWidth: (0, E.to)([a, i], (e, n) => Math.min(Number(e), t - Number(n))),
                    }
                  : l && null != i
                    ? {
                          progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                          glowWidth: (0, E.to)([a, i], (e, t) => Math.max(0, Number(e) - Number(t))),
                      }
                    : { progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`), glowWidth: a };
        })({
            segmentWidth: C,
            dragFillWidth: w,
            shrinkEnd: R,
            isAnimating: L,
            fillWidthAnimated: N,
            expansionSpring: c,
        }),
        D = null != w ? (w <= 0 ? 0 : 1) : N.to((e) => (e <= 0 ? 0 : 1)),
        M = s !== b.Q6.ENDED,
        j = Math.max(0, (f ?? 0) - x),
        k = { borderRadius: `${h}px` },
        I = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= x && e.startPx <= g),
            [m, x, g, d],
        );
    return (0, r.jsxs)(E.animated.div, {
        className: i()(v.Td, p),
        style: {
            left: A ? c.to((e) => x + e) : x,
            width: L ? c.to((e) => C - e) : C,
            "--custom-r-left": a.to((e) => (0 === x || e >= x ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (g >= d || e >= g ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: v.MI,
                children: [
                    (0, r.jsxs)(E.animated.div, {
                        className: v._I,
                        style: { left: A ? c.to((e) => -(x + e)) : -x },
                        children: [
                            I?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: v.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...k },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != f &&
                                j > 0 &&
                                (0, r.jsx)("div", { className: v.YK, style: { width: `${j}px`, opacity: 1, ...k } }),
                        ],
                    }),
                    (0, r.jsx)(E.animated.div, { className: v.wx, style: { transform: T, opacity: D } }),
                ],
            }),
            M && (0, r.jsx)(E.animated.div, { className: v.fk, style: { width: P, opacity: D } }),
        ],
    });
};
v.f5;
let y = { tension: 300, friction: 30, clamp: !0 };
function S(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: E,
            backgroundColor: b,
            playerState: S,
            preloadedBuffers: C,
            durationSec: N,
            maxSeekableTime: A,
            progressClassName: R,
            timelineHeightPx: L = 4,
            segmentBorderRadius: w,
            hoverTimelineHeightPx: T,
            initialTimelineHeightPx: P = L,
            persistPlayhead: D = !0,
            onClick: M,
            onScrubBack: j,
            onScrubForward: k,
            onDragStateChange: I,
            indicatorConfig: B,
            onIndicatorSeek: F,
            getCurrentTimeSec: G,
            "data-testid": U,
        } = e,
        {
            contRef: O,
            boundingRect: Q,
            handleMouseEnter: _,
            handleMouseLeave: K,
            handleMouseMove: $,
            handleKeyDown: Y,
            hoveredAtX: X,
            maxSeekableX: z,
            isHovering: V,
            isDragging: W,
            dragX: H,
            isHoverBeyondMax: Z,
            handleClick: J,
            handleMouseDown: q,
            ariaProps: ee,
        } = (function (e) {
            let {
                    onScrubBack: t,
                    onScrubForward: n,
                    maxSeekableTime: r,
                    interactionEnabled: a,
                    durationSec: i,
                    onClick: u,
                    percent: o,
                    onDragStateChange: c,
                } = e,
                [E, v] = l.useState(null),
                [x, b] = l.useState(null),
                [g, y] = l.useState(!1),
                [S, C] = l.useState(!1),
                [N, A] = l.useState(null),
                [R, L] = l.useState(!1),
                { i18n: w } = (0, m.G9)(),
                T = l.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != o &&
                            "number" == typeof o &&
                            ((e["aria-valuenow"] = o),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = w.PERCENT_COMPLETE(Math.round(o)))),
                        e
                    );
                }, [o, w]),
                P = l.useMemo(() => (null == E || null == r ? null : (0, s.DX)(r, i, E)), [E, r, i]),
                D = (0, h.A)((e) => {
                    v(e.contentRect);
                }),
                M = (0, f.w)(D),
                j = (e) => {
                    if (null != M.current) {
                        let t = M.current.getBoundingClientRect(),
                            n = e.clientX - t.left,
                            l = null != r ? (r / i) * t.width : null;
                        L(null != l && n > l), b(n);
                    }
                },
                k = l.useRef(!1),
                I = l.useRef(null),
                B = (0, h.A)((e, t) => {
                    if (null == u) return;
                    let n = e - t.left,
                        l = (0, s.hc)(n, t, i);
                    (null != r && l > r) || u(l);
                }),
                F = l.useCallback(
                    (e) => {
                        let { key: r } = e;
                        r === p.N$.ArrowLeft && null != t
                            ? (e.preventDefault(), e.stopPropagation(), t())
                            : r === p.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
                    },
                    [t, n],
                );
            return (
                l.useEffect(
                    () => () => {
                        (k.current = !1), I.current?.(), (I.current = null);
                    },
                    [],
                ),
                {
                    contRef: M,
                    boundingRect: E,
                    handleMouseEnter: (e) => {
                        a && (y(!0), j(e));
                    },
                    handleMouseLeave: (e) => {
                        a && !k.current && (y(!1), b(null), L(!1));
                    },
                    handleMouseMove: (e) => {
                        a && g && j(e);
                    },
                    handleMouseDown: (e) => {
                        if (!a || null == u || 0 !== e.button) return;
                        I.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, s.hc)(e.clientX - t.left, t, i);
                        if (null != r && n > r) return;
                        (k.current = !0),
                            C(!0),
                            c?.(!0),
                            A(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            B(e.clientX, t);
                        let l = (e) => {
                                if (null != M.current) {
                                    let t = M.current.getBoundingClientRect(),
                                        n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                        l = null != r ? (r / i) * t.width : null,
                                        a = null != l ? Math.min(n, l) : n;
                                    L(null != l && n > l), b(n), A(a), B(e.clientX, t);
                                } else B(e.clientX, t);
                            },
                            o = (e) => {
                                (k.current = !1),
                                    (I.current = null),
                                    C(!1),
                                    A(null),
                                    c?.(!1),
                                    L(!1),
                                    null != M.current &&
                                        (((0, d.vq)(e.target, Node) && M.current.contains(e.target)) ||
                                            (y(!1), b(null))),
                                    window.removeEventListener("mousemove", l),
                                    window.removeEventListener("mouseup", o);
                            };
                        window.addEventListener("mousemove", l),
                            window.addEventListener("mouseup", o),
                            (I.current = () => {
                                window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", o);
                            });
                    },
                    handleKeyDown: F,
                    hoveredAtX: x,
                    maxSeekableX: P,
                    isHovering: g,
                    isDragging: S,
                    dragX: N,
                    isHoverBeyondMax: R,
                    handleClick: () => {},
                    ariaProps: T,
                }
            );
        })({
            onScrubBack: j,
            onScrubForward: k,
            maxSeekableTime: A,
            interactionEnabled: E,
            durationSec: N,
            percent: n,
            onClick: M,
            onDragStateChange: I,
        }),
        et = l.useMemo(() => (null == X || null == Q ? null : (0, s.rB)((0, s.hc)(X, Q, N))), [X, Q, N]),
        en = l.useMemo(() => {
            if (null != Q) return (0, s.TO)(n, Q);
        }, [n, Q]),
        er = Q?.width != null && Q?.width !== 0 ? Q?.width : 1,
        [{ playbackPxSpring: el }, ea] = (0, u.z)(() => ({ playbackPxSpring: 0, config: y })),
        ei = l.useRef(W);
    l.useLayoutEffect(() => {
        let e = ei.current;
        (ei.current = W), e && !W && ea({ playbackPxSpring: null == en || Number.isNaN(en) ? 0 : en, immediate: !0 });
    }, [W, en, ea]);
    let es = l.useRef(null),
        eu = l.useRef(null),
        eo = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == G || N <= 0 || er <= 0) return;
        (eu.current = es.current ?? G()), (eo.current = performance.now());
        let e = 0,
            t = () => {
                let n = performance.now(),
                    r = eo.current;
                eo.current = n;
                let l = eu.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = G();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = G() ?? null;
                null != l &&
                    Number.isFinite(l) &&
                    ((eu.current = l),
                    (es.current = l),
                    ea({ playbackPxSpring: Math.min(Math.max(0, (l / N) * er), er), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            };
        return (
            (e = requestAnimationFrame(t)),
            () => {
                cancelAnimationFrame(e), (eu.current = null), (eo.current = null);
            }
        );
    }, [a, G, N, er, ea]);
    let ec = a && null != G && N > 0;
    l.useEffect(() => {
        let e;
        if (!ec) {
            if (null != G && N > 0 && er > 0) {
                let t = G();
                null != t && Number.isFinite(t) && ((es.current = t), (e = Math.min(Math.max(0, (t / N) * er), er)));
            }
            null == e && (e = null == en || Number.isNaN(en) ? 0 : en), ea({ playbackPxSpring: e, immediate: !0 });
        }
    }, [en, ec, ea, G, N, er]);
    let ed = N > 1,
        em = B?.indicators,
        ef = l.useMemo(() => {
            let e;
            return null != em && null != Q && ed
                ? ((e = Q.width),
                  em.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, s.DX)(t.timeSec, N, Q) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [em, N, Q, ed]),
        eh = l.useMemo(
            () =>
                ((e, t) => {
                    let n = [{ startPx: 0, endPx: e, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (null == t || 0 === t.length) return n;
                    for (let r = 0; r < t.length; r++) {
                        let l = Math.max(0, t[r].leftPx - t[r].gapPx),
                            a = Math.min(e, t[r].rightPx + t[r].gapPx),
                            i = n[n.length - 1];
                        null != i && ((i.endPx = l), (i.rightIndicatorIndex = t[r].index)),
                            null != i && i.endPx <= i.startPx && n.pop(),
                            a < e &&
                                n.push({
                                    startPx: a,
                                    endPx: e,
                                    leftIndicatorIndex: t[r].index,
                                    rightIndicatorIndex: null,
                                });
                    }
                    return n;
                })(er, ef),
            [er, ef],
        ),
        ep = B?.hoverExpansionPx ?? 0,
        eE = l.useCallback(
            (e) =>
                null != e &&
                null != ef &&
                ef.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (B?.animatingIndex === t.index ? ep : 0) &&
                        e <= t.rightPx + t.gapPx + (B?.animatingIndex === t.index ? ep : 0),
                ),
            [ef, B?.animatingIndex, ep],
        );
    return (0, r.jsx)("div", {
        className: v.jD,
        ref: O,
        "data-testid": U,
        style: {
            "--custom-timeline-height": `${null != T && V ? T : L}px`,
            "--custom-initial-timeline-height": `${P}px`,
        },
        children: (0, r.jsxs)(o.D, {
            className: i()(v.KF, { [v.uc]: E }),
            style: Z ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: J,
            onMouseDown: q,
            onMouseEnter: _,
            onMouseLeave: K,
            onMouseMove: $,
            onKeyDown: Y,
            tabIndex: E ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: v.PH,
                    ...ee,
                    style: null != b ? { "--custom-segment-bg": b } : void 0,
                    children:
                        null != Q &&
                        eh.map((e, t) =>
                            (0, r.jsx)(
                                g,
                                {
                                    segment: e,
                                    playbackPxSpring: el,
                                    playerState: S,
                                    isDragging: W,
                                    dragX: H,
                                    animatingIndex: B?.animatingIndex,
                                    expansionSpring: B?.expansionSpring,
                                    timelineWidth: er,
                                    preloadedBuffers: C,
                                    maxSeekableX: z,
                                    segmentBorderRadius: w,
                                    progressClassName: R,
                                },
                                t,
                            ),
                        ),
                }),
                null != Q &&
                    ef?.map((e) =>
                        B?.renderIndicator(
                            e,
                            null != en && !Number.isNaN(en) ? en : 0,
                            !0 === e.source.clickable && null != F ? () => F(e.source.timeSec) : void 0,
                        ),
                    ),
                V &&
                    null != et &&
                    t &&
                    !eE(X) &&
                    (0, r.jsx)(c.E, {
                        className: v.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != X ? `${X}px` : "auto" },
                        children: et,
                    }),
                (V || D) &&
                    E &&
                    null != en &&
                    !eE(W && null != H ? H : en) &&
                    (0, r.jsx)(x, { playbackPxSpring: el, isDragging: W, dragX: H }),
            ],
        }),
    });
}
