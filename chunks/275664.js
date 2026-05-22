n.d(t, { Ay: () => C }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    u = n(61491),
    s = n(717421),
    o = n(939249),
    c = n(834730),
    d = n(621466),
    m = n(460890),
    p = n(770178),
    f = n(765548),
    h = n(650583),
    x = n(873174),
    v = n(6821);
let E = l.memo(function (e) {
    let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
    return (0, r.jsx)(x.animated.div, {
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
            playerState: u,
            isDragging: s,
            dragX: o,
            expansionSpring: c,
            timelineWidth: d,
            preloadedBuffers: m,
            maxSeekableX: p,
            segmentBorderRadius: f = 99,
            progressClassName: h,
        } = e,
        { startPx: E, endPx: g, leftIndicatorIndex: y, rightIndicatorIndex: C } = t,
        S = g - E,
        N = a.to((e) => Math.min(Math.max(0, e - E), S)),
        R = null != n && null != c && y === n,
        A = !R && null != n && null != c && C === n,
        w = R || A,
        P = s && null != o ? Math.min(Math.max(0, o - E), S) : null,
        { progressToPlayheadBarTransform: L, glowWidth: T } = (function (e) {
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
                        progressToPlayheadBarTransform: (0, x.to)(
                            [a, i],
                            (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                        ),
                        glowWidth: (0, x.to)([a, i], (e, n) => Math.min(Number(e), t - Number(n))),
                    }
                  : l && null != i
                    ? {
                          progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                          glowWidth: (0, x.to)([a, i], (e, t) => Math.max(0, Number(e) - Number(t))),
                      }
                    : { progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`), glowWidth: a };
        })({
            segmentWidth: S,
            dragFillWidth: P,
            shrinkEnd: A,
            isAnimating: w,
            fillWidthAnimated: N,
            expansionSpring: c,
        }),
        D = null != P ? (P <= 0 ? 0 : 1) : N.to((e) => (e <= 0 ? 0 : 1)),
        j = u !== b.Q6.ENDED,
        k = Math.max(0, (p ?? 0) - E),
        M = { borderRadius: `${f}px` },
        I = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= E && e.startPx <= g),
            [m, E, g, d],
        );
    return (0, r.jsxs)(x.animated.div, {
        className: i()(v.Td, h),
        style: {
            left: R ? c.to((e) => E + e) : E,
            width: w ? c.to((e) => S - e) : S,
            "--custom-r-left": a.to((e) => (0 === E || e >= E ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (g >= d || e >= g ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: v.MI,
                children: [
                    (0, r.jsxs)(x.animated.div, {
                        className: v._I,
                        style: { left: R ? c.to((e) => -(E + e)) : -E },
                        children: [
                            I?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: v.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...M },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != p &&
                                k > 0 &&
                                (0, r.jsx)("div", { className: v.YK, style: { width: `${k}px`, opacity: 1, ...M } }),
                        ],
                    }),
                    (0, r.jsx)(x.animated.div, { className: v.wx, style: { transform: L, opacity: D } }),
                ],
            }),
            j && (0, r.jsx)(x.animated.div, { className: v.fk, style: { width: T, opacity: D } }),
        ],
    });
};
v.f5;
let y = { tension: 300, friction: 30, clamp: !0 };
function C(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: x,
            backgroundColor: b,
            playerState: C,
            preloadedBuffers: S,
            durationSec: N,
            maxSeekableTime: R,
            progressClassName: A,
            timelineHeightPx: w = 4,
            segmentBorderRadius: P,
            hoverTimelineHeightPx: L,
            initialTimelineHeightPx: T = w,
            persistPlayhead: D = !0,
            onClick: j,
            onScrubBack: k,
            onScrubForward: M,
            onDragStateChange: I,
            indicatorConfig: B,
            onIndicatorSeek: F,
            getCurrentTimeSec: U,
            "data-testid": G,
        } = e,
        {
            contRef: K,
            boundingRect: O,
            handleMouseEnter: _,
            handleMouseLeave: Q,
            handleMouseMove: $,
            handleKeyDown: Y,
            hoveredAtX: z,
            maxSeekableX: X,
            isHovering: V,
            isDragging: H,
            dragX: W,
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
                    onClick: s,
                    percent: o,
                    onDragStateChange: c,
                } = e,
                [x, v] = l.useState(null),
                [E, b] = l.useState(null),
                [g, y] = l.useState(!1),
                [C, S] = l.useState(!1),
                [N, R] = l.useState(null),
                [A, w] = l.useState(!1),
                { i18n: P } = (0, m.G9)(),
                L = l.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != o &&
                            "number" == typeof o &&
                            ((e["aria-valuenow"] = o),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = P.PERCENT_COMPLETE(Math.round(o)))),
                        e
                    );
                }, [o, P]),
                T = l.useMemo(() => (null == x || null == r ? null : (0, u.DX)(r, i, x)), [x, r, i]),
                D = (0, f.A)((e) => {
                    v(e.contentRect);
                }),
                j = (0, p.w)(D),
                k = (e) => {
                    if (null != j.current) {
                        let t = j.current.getBoundingClientRect(),
                            n = e.clientX - t.left,
                            l = null != r ? (r / i) * t.width : null;
                        w(null != l && n > l), b(n);
                    }
                },
                M = l.useRef(!1),
                I = l.useRef(null),
                B = (0, f.A)((e, t) => {
                    if (null == s) return;
                    let n = e - t.left,
                        l = (0, u.hc)(n, t, i);
                    (null != r && l > r) || s(l);
                }),
                F = l.useCallback(
                    (e) => {
                        let { key: r } = e;
                        r === h.N$.ArrowLeft && null != t
                            ? (e.preventDefault(), e.stopPropagation(), t())
                            : r === h.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
                    },
                    [t, n],
                );
            return (
                l.useEffect(
                    () => () => {
                        (M.current = !1), I.current?.(), (I.current = null);
                    },
                    [],
                ),
                {
                    contRef: j,
                    boundingRect: x,
                    handleMouseEnter: (e) => {
                        a && (y(!0), k(e));
                    },
                    handleMouseLeave: (e) => {
                        a && !M.current && (y(!1), b(null), w(!1));
                    },
                    handleMouseMove: (e) => {
                        a && g && k(e);
                    },
                    handleMouseDown: (e) => {
                        if (!a || null == s || 0 !== e.button) return;
                        I.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, u.hc)(e.clientX - t.left, t, i);
                        if (null != r && n > r) return;
                        (M.current = !0),
                            S(!0),
                            c?.(!0),
                            R(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            B(e.clientX, t);
                        let l = (e) => {
                                if (null != j.current) {
                                    let t = j.current.getBoundingClientRect(),
                                        n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                        l = null != r ? (r / i) * t.width : null,
                                        a = null != l ? Math.min(n, l) : n;
                                    w(null != l && n > l), b(n), R(a), B(e.clientX, t);
                                } else B(e.clientX, t);
                            },
                            o = (e) => {
                                (M.current = !1),
                                    (I.current = null),
                                    S(!1),
                                    R(null),
                                    c?.(!1),
                                    w(!1),
                                    null != j.current &&
                                        (((0, d.vq)(e.target, Node) && j.current.contains(e.target)) ||
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
                    hoveredAtX: E,
                    maxSeekableX: T,
                    isHovering: g,
                    isDragging: C,
                    dragX: N,
                    isHoverBeyondMax: A,
                    handleClick: () => {},
                    ariaProps: L,
                }
            );
        })({
            onScrubBack: k,
            onScrubForward: M,
            maxSeekableTime: R,
            interactionEnabled: x,
            durationSec: N,
            percent: n,
            onClick: j,
            onDragStateChange: I,
        }),
        et = l.useMemo(() => (null == z || null == O ? null : (0, u.rB)((0, u.hc)(z, O, N))), [z, O, N]),
        en = l.useMemo(() => {
            if (null != O) return (0, u.TO)(n, O);
        }, [n, O]),
        er = O?.width != null && O?.width !== 0 ? O?.width : 1,
        [{ playbackPxSpring: el }, ea] = (0, s.z)(() => ({ playbackPxSpring: 0, config: y })),
        ei = l.useRef(H);
    l.useLayoutEffect(() => {
        let e = ei.current;
        (ei.current = H), e && !H && ea({ playbackPxSpring: null == en || Number.isNaN(en) ? 0 : en, immediate: !0 });
    }, [H, en, ea]);
    let eu = l.useRef(null),
        es = l.useRef(null),
        eo = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == U || N <= 0 || er <= 0) return;
        (es.current = eu.current ?? U()), (eo.current = performance.now());
        let e = 0,
            t = () => {
                let n = performance.now(),
                    r = eo.current;
                eo.current = n;
                let l = es.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = U();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = U() ?? null;
                null != l &&
                    Number.isFinite(l) &&
                    ((es.current = l),
                    (eu.current = l),
                    ea({ playbackPxSpring: Math.min(Math.max(0, (l / N) * er), er), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            };
        return (
            (e = requestAnimationFrame(t)),
            () => {
                cancelAnimationFrame(e), (es.current = null), (eo.current = null);
            }
        );
    }, [a, U, N, er, ea]);
    let ec = a && null != U && N > 0;
    l.useEffect(() => {
        let e;
        if (!ec) {
            if (null != U && N > 0 && er > 0) {
                let t = U();
                null != t && Number.isFinite(t) && ((eu.current = t), (e = Math.min(Math.max(0, (t / N) * er), er)));
            }
            null == e && (e = null == en || Number.isNaN(en) ? 0 : en), ea({ playbackPxSpring: e, immediate: !0 });
        }
    }, [en, ec, ea, U, N, er]);
    let ed = N > 1,
        em = B?.indicators,
        ep = l.useMemo(() => {
            let e;
            return null != em && null != O && ed
                ? ((e = O.width),
                  em.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, u.DX)(t.timeSec, N, O) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [em, N, O, ed]),
        ef = l.useMemo(
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
                })(er, ep),
            [er, ep],
        ),
        eh = B?.hoverExpansionPx ?? 0,
        ex = l.useCallback(
            (e) =>
                null != e &&
                null != ep &&
                ep.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (B?.animatingIndex === t.index ? eh : 0) &&
                        e <= t.rightPx + t.gapPx + (B?.animatingIndex === t.index ? eh : 0),
                ),
            [ep, B?.animatingIndex, eh],
        );
    return (0, r.jsx)("div", {
        className: v.jD,
        ref: K,
        "data-testid": G,
        style: {
            "--custom-timeline-height": `${null != L && V ? L : w}px`,
            "--custom-initial-timeline-height": `${T}px`,
        },
        children: (0, r.jsxs)(o.D, {
            className: i()(v.KF, { [v.uc]: x }),
            style: Z ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: J,
            onMouseDown: q,
            onMouseEnter: _,
            onMouseLeave: Q,
            onMouseMove: $,
            onKeyDown: Y,
            tabIndex: x ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: v.PH,
                    ...ee,
                    style: null != b ? { "--custom-segment-bg": b } : void 0,
                    children:
                        null != O &&
                        ef.map((e, t) =>
                            (0, r.jsx)(
                                g,
                                {
                                    segment: e,
                                    playbackPxSpring: el,
                                    playerState: C,
                                    isDragging: H,
                                    dragX: W,
                                    animatingIndex: B?.animatingIndex,
                                    expansionSpring: B?.expansionSpring,
                                    timelineWidth: er,
                                    preloadedBuffers: S,
                                    maxSeekableX: X,
                                    segmentBorderRadius: P,
                                    progressClassName: A,
                                },
                                t,
                            ),
                        ),
                }),
                null != O &&
                    ep?.map((e) =>
                        B?.renderIndicator(
                            e,
                            null != en && !Number.isNaN(en) ? en : 0,
                            !0 === e.source.clickable && null != F ? () => F(e.source.timeSec) : void 0,
                        ),
                    ),
                V &&
                    null != et &&
                    t &&
                    !ex(z) &&
                    (0, r.jsx)(c.E, {
                        className: v.Hz,
                        variant: "text-xs/normal",
                        color: "always-white",
                        tabularNumbers: !0,
                        style: { left: null != z ? `${z}px` : "auto" },
                        children: et,
                    }),
                (V || D) &&
                    x &&
                    null != en &&
                    !ex(H && null != W ? W : en) &&
                    (0, r.jsx)(E, { playbackPxSpring: el, isDragging: H, dragX: W }),
            ],
        }),
    });
}
