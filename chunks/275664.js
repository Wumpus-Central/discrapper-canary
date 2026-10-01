(n.d(t, { Ay: () => C }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(61491),
    o = n(717421),
    s = n(939249),
    c = n(834730),
    d = n(621466),
    m = n(460890),
    f = n(770178),
    p = n(765548),
    h = n(650583),
    x = n(565164),
    v = n(202091),
    g = n(494154);
let E = l.memo(function (e) {
    let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
    return (0, r.jsx)(v.animated.div, {
        "data-testid": "discord-web-video-player-playhead",
        className: g.lG,
        style: { left: n && null != l ? `${l}px` : t.to((e) => `${e}px`) },
    });
});
var b = n(876230);
let y = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            playbackPxSpring: a,
            playerState: u,
            isDragging: o,
            dragX: s,
            expansionSpring: c,
            timelineWidth: d,
            preloadedBuffers: m,
            maxSeekableX: f,
            segmentBorderRadius: p = 99,
            progressClassName: h,
        } = e,
        { startPx: x, endPx: E, leftIndicatorIndex: y, rightIndicatorIndex: S } = t,
        C = E - x,
        P = a.to((e) => Math.min(Math.max(0, e - x), C)),
        A = null != n && null != c && y === n,
        R = !A && null != n && null != c && S === n,
        N = A || R,
        w = o && null != s ? Math.min(Math.max(0, s - x), C) : null,
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
                        progressToPlayheadBarTransform: (0, v.to)(
                            [a, i],
                            (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                        ),
                        glowWidth: (0, v.to)([a, i], (e, n) => Math.min(Number(e), t - Number(n))),
                    }
                  : l && null != i
                    ? {
                          progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                          glowWidth: (0, v.to)([a, i], (e, t) => Math.max(0, Number(e) - Number(t))),
                      }
                    : { progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`), glowWidth: a };
        })({
            segmentWidth: C,
            dragFillWidth: w,
            shrinkEnd: R,
            isAnimating: N,
            fillWidthAnimated: P,
            expansionSpring: c,
        }),
        k = null != w ? (w <= 0 ? 0 : 1) : P.to((e) => (e <= 0 ? 0 : 1)),
        M = u !== b.Q6.ENDED,
        j = Math.max(0, (f ?? 0) - x),
        D = { borderRadius: `${p}px` },
        I = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= x && e.startPx <= E),
            [m, x, E, d],
        );
    return (0, r.jsxs)(v.animated.div, {
        className: i()(g.Td, h),
        style: {
            left: A ? c.to((e) => x + e) : x,
            width: N ? c.to((e) => C - e) : C,
            "--custom-r-left": a.to((e) => (0 === x || e >= x ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (E >= d || e >= E ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: g.MI,
                children: [
                    (0, r.jsxs)(v.animated.div, {
                        className: g._I,
                        style: { left: A ? c.to((e) => -(x + e)) : -x },
                        children: [
                            I?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: g.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...D },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != f &&
                                j > 0 &&
                                (0, r.jsx)("div", { className: g.YK, style: { width: `${j}px`, opacity: 1, ...D } }),
                        ],
                    }),
                    (0, r.jsx)(v.animated.div, { className: g.wx, style: { transform: L, opacity: k } }),
                ],
            }),
            M && (0, r.jsx)(v.animated.div, { className: g.fk, style: { width: T, opacity: k } }),
        ],
    });
};
g.f5;
let S = { tension: 300, friction: 30, clamp: !0 };
function C(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: c,
            backgroundColor: v,
            playerState: b,
            preloadedBuffers: C,
            durationSec: A,
            maxSeekableTime: R,
            progressClassName: N,
            timelineHeightPx: w = 4,
            segmentBorderRadius: L,
            hoverTimelineHeightPx: T,
            initialTimelineHeightPx: k = w,
            persistPlayhead: M = !0,
            onClick: j,
            onScrubBack: D,
            onScrubForward: I,
            onDragStateChange: B,
            indicatorConfig: F,
            scrubPreviewCues: _,
            onIndicatorSeek: U,
            getCurrentTimeSec: G,
            "data-testid": $,
        } = e,
        {
            contRef: K,
            boundingRect: O,
            handleMouseEnter: Q,
            handleMouseLeave: H,
            handleMouseMove: V,
            handleKeyDown: Y,
            hoveredAtX: z,
            maxSeekableX: X,
            isHovering: W,
            isDragging: Z,
            dragX: q,
            isHoverBeyondMax: J,
            handleClick: ee,
            handleMouseDown: et,
            ariaProps: en,
        } = (function (e) {
            let {
                    onScrubBack: t,
                    onScrubForward: n,
                    maxSeekableTime: r,
                    interactionEnabled: a,
                    durationSec: i,
                    onClick: o,
                    percent: s,
                    onDragStateChange: c,
                } = e,
                [x, v] = l.useState(null),
                [g, E] = l.useState(null),
                [b, y] = l.useState(!1),
                [S, C] = l.useState(!1),
                [P, A] = l.useState(null),
                [R, N] = l.useState(!1),
                { i18n: w } = (0, m.G9)(),
                L = l.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != s &&
                            "number" == typeof s &&
                            ((e["aria-valuenow"] = s),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = w.PERCENT_COMPLETE(Math.round(s)))),
                        e
                    );
                }, [s, w]),
                T = l.useMemo(() => (null == x || null == r ? null : (0, u.DX)(r, i, x)), [x, r, i]),
                k = (0, p.A)((e) => {
                    v(e.contentRect);
                }),
                M = (0, f.w)(k);
            function j(e) {
                if (null != M.current) {
                    let t = M.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        l = null != r ? (r / i) * t.width : null;
                    (N(null != l && n > l), E(n));
                }
            }
            let D = l.useRef(!1),
                I = l.useRef(null),
                B = (0, p.A)((e, t) => {
                    if (null == o) return;
                    let n = e - t.left,
                        l = (0, u.hc)(n, t, i);
                    (null != r && l > r) || o(l);
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
                        ((D.current = !1), I.current?.(), (I.current = null));
                    },
                    [],
                ),
                {
                    contRef: M,
                    boundingRect: x,
                    handleMouseEnter: function (e) {
                        a && (y(!0), j(e));
                    },
                    handleMouseLeave: function (e) {
                        a && !D.current && (y(!1), E(null), N(!1));
                    },
                    handleMouseMove: function (e) {
                        a && b && j(e);
                    },
                    handleMouseDown: function (e) {
                        if (!a || null == o || 0 !== e.button) return;
                        I.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, u.hc)(e.clientX - t.left, t, i);
                        function l(e) {
                            if (null != M.current) {
                                let t = M.current.getBoundingClientRect(),
                                    n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                    l = null != r ? (r / i) * t.width : null,
                                    a = null != l ? Math.min(n, l) : n;
                                (N(null != l && n > l), E(n), A(a), B(e.clientX, t));
                            } else B(e.clientX, t);
                        }
                        function s(e) {
                            ((D.current = !1),
                                (I.current = null),
                                C(!1),
                                A(null),
                                c?.(!1),
                                N(!1),
                                null != M.current &&
                                    (((0, d.vq)(e.target, Node) && M.current.contains(e.target)) || (y(!1), E(null))),
                                window.removeEventListener("mousemove", l),
                                window.removeEventListener("mouseup", s));
                        }
                        (null != r && n > r) ||
                            ((D.current = !0),
                            C(!0),
                            c?.(!0),
                            A(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            B(e.clientX, t),
                            window.addEventListener("mousemove", l),
                            window.addEventListener("mouseup", s),
                            (I.current = () => {
                                (window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", s));
                            }));
                    },
                    handleKeyDown: F,
                    hoveredAtX: g,
                    maxSeekableX: T,
                    isHovering: b,
                    isDragging: S,
                    dragX: P,
                    isHoverBeyondMax: R,
                    handleClick: function () {},
                    ariaProps: L,
                }
            );
        })({
            onScrubBack: D,
            onScrubForward: I,
            maxSeekableTime: R,
            interactionEnabled: c,
            durationSec: A,
            percent: n,
            onClick: j,
            onDragStateChange: B,
        }),
        er = l.useMemo(() => (null == z || null == O ? null : (0, u.hc)(z, O, A)), [z, O, A]),
        el = l.useMemo(() => (null == er ? null : (0, u.rB)(er)), [er]),
        ea = l.useMemo(() => (null == _ || null == er ? null : (0, x.B8)(_, er)), [_, er]),
        ei = l.useMemo(() => {
            if (null != O) return (0, u.TO)(n, O);
        }, [n, O]),
        eu = O?.width != null && O?.width !== 0 ? O?.width : 1,
        [{ playbackPxSpring: eo }, es] = (0, o.z)(() => ({ playbackPxSpring: 0, config: S })),
        ec = l.useRef(Z);
    l.useLayoutEffect(() => {
        let e = ec.current;
        ((ec.current = Z), e && !Z && es({ playbackPxSpring: null == ei || Number.isNaN(ei) ? 0 : ei, immediate: !0 }));
    }, [Z, ei, es]);
    let ed = l.useRef(null),
        em = l.useRef(null),
        ef = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == G || A <= 0 || eu <= 0) return;
        ((em.current = ed.current ?? G()), (ef.current = performance.now()));
        let e = 0;
        return (
            (e = requestAnimationFrame(function t() {
                if (null == G) return;
                let n = performance.now(),
                    r = ef.current;
                ef.current = n;
                let l = em.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = G();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = G() ?? null;
                (null != l &&
                    Number.isFinite(l) &&
                    ((em.current = l),
                    (ed.current = l),
                    es({ playbackPxSpring: Math.min(Math.max(0, (l / A) * eu), eu), immediate: !0 })),
                    (e = requestAnimationFrame(t)));
            })),
            () => {
                (cancelAnimationFrame(e), (em.current = null), (ef.current = null));
            }
        );
    }, [a, G, A, eu, es]);
    let ep = a && null != G && A > 0;
    l.useEffect(() => {
        let e;
        if (!ep) {
            if (null != G && A > 0 && eu > 0) {
                let t = G();
                null != t && Number.isFinite(t) && ((ed.current = t), (e = Math.min(Math.max(0, (t / A) * eu), eu)));
            }
            (null == e && (e = null == ei || Number.isNaN(ei) ? 0 : ei), es({ playbackPxSpring: e, immediate: !0 }));
        }
    }, [ei, ep, es, G, A, eu]);
    let eh = A > 1,
        ex = F?.indicators,
        ev = l.useMemo(() => {
            let e;
            return null != ex && null != O && eh
                ? ((e = O.width),
                  ex.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, u.DX)(t.timeSec, A, O) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ex, A, O, eh]),
        eg = l.useMemo(
            () =>
                (function (e, t) {
                    let n = [{ startPx: 0, endPx: e, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (null == t || 0 === t.length) return n;
                    for (let r = 0; r < t.length; r++) {
                        let l = Math.max(0, t[r].leftPx - t[r].gapPx),
                            a = Math.min(e, t[r].rightPx + t[r].gapPx),
                            i = n[n.length - 1];
                        (null != i && ((i.endPx = l), (i.rightIndicatorIndex = t[r].index)),
                            null != i && i.endPx <= i.startPx && n.pop(),
                            a < e &&
                                n.push({
                                    startPx: a,
                                    endPx: e,
                                    leftIndicatorIndex: t[r].index,
                                    rightIndicatorIndex: null,
                                }));
                    }
                    return n;
                })(eu, ev),
            [eu, ev],
        ),
        eE = F?.hoverExpansionPx ?? 0,
        eb = l.useCallback(
            (e) =>
                null != e &&
                null != ev &&
                ev.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (F?.animatingIndex === t.index ? eE : 0) &&
                        e <= t.rightPx + t.gapPx + (F?.animatingIndex === t.index ? eE : 0),
                ),
            [ev, F?.animatingIndex, eE],
        );
    return (0, r.jsx)("div", {
        className: g.jD,
        ref: K,
        "data-testid": $,
        style: {
            "--custom-timeline-height": `${null != T && W ? T : w}px`,
            "--custom-initial-timeline-height": `${k}px`,
        },
        children: (0, r.jsxs)(s.D, {
            className: i()(g.KF, { [g.uc]: c }),
            style: J ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: ee,
            onMouseDown: et,
            onMouseEnter: Q,
            onMouseLeave: H,
            onMouseMove: V,
            onKeyDown: Y,
            tabIndex: c ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: g.PH,
                    ...en,
                    style: null != v ? { "--custom-segment-bg": v } : void 0,
                    children:
                        null != O &&
                        eg.map((e, t) =>
                            (0, r.jsx)(
                                y,
                                {
                                    segment: e,
                                    playbackPxSpring: eo,
                                    playerState: b,
                                    isDragging: Z,
                                    dragX: q,
                                    animatingIndex: F?.animatingIndex,
                                    expansionSpring: F?.expansionSpring,
                                    timelineWidth: eu,
                                    preloadedBuffers: C,
                                    maxSeekableX: X,
                                    segmentBorderRadius: L,
                                    progressClassName: N,
                                },
                                t,
                            ),
                        ),
                }),
                null != O &&
                    ev?.map((e) =>
                        F?.renderIndicator(
                            e,
                            null != ei && !Number.isNaN(ei) ? ei : 0,
                            !0 === e.source.clickable && null != U ? () => U(e.source.timeSec) : void 0,
                        ),
                    ),
                (0, r.jsx)(P, {
                    isHovering: W,
                    hoveredAtX: z,
                    hoveredTimeSec: er,
                    formattedTime: el,
                    isFullyVisible: t,
                    isInExclusionZone: eb,
                    scrubPreviewCue: ea,
                    timelineWidthPx: eu,
                }),
                (W || M) &&
                    c &&
                    null != ei &&
                    !eb(Z && null != q ? q : ei) &&
                    (0, r.jsx)(E, { playbackPxSpring: eo, isDragging: Z, dragX: q }),
            ],
        }),
    });
}
function P(e) {
    let {
        isHovering: t,
        hoveredAtX: n,
        hoveredTimeSec: l,
        formattedTime: a,
        isFullyVisible: i,
        isInExclusionZone: u,
        scrubPreviewCue: o,
        timelineWidthPx: s,
    } = e;
    return !t || null == n || !i || u(n)
        ? null
        : null != o && null != l
          ? (0, r.jsx)(x.wb, { cue: o, timeSec: l, cursorXPx: n, timelineWidthPx: s })
          : null == a
            ? null
            : (0, r.jsx)(c.E, {
                  className: g.Hz,
                  variant: "text-xs/normal",
                  color: "text-overlay-light",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: a,
              });
}
