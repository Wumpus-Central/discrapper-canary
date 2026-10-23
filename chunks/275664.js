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
    v = n(565164),
    x = n(941143),
    E = n(494154);
let g = l.memo(function (e) {
    let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
    return (0, r.jsx)(x.animated.div, {
        "data-testid": "discord-web-video-player-playhead",
        className: E.lG,
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
        { startPx: v, endPx: g, leftIndicatorIndex: y, rightIndicatorIndex: S } = t,
        C = g - v,
        P = a.to((e) => Math.min(Math.max(0, e - v), C)),
        w = null != n && null != c && y === n,
        A = !w && null != n && null != c && S === n,
        R = w || A,
        N = o && null != s ? Math.min(Math.max(0, s - v), C) : null,
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
            segmentWidth: C,
            dragFillWidth: N,
            shrinkEnd: A,
            isAnimating: R,
            fillWidthAnimated: P,
            expansionSpring: c,
        }),
        k = null != N ? (N <= 0 ? 0 : 1) : P.to((e) => (e <= 0 ? 0 : 1)),
        M = u !== b.Q6.ENDED,
        j = Math.max(0, (f ?? 0) - v),
        D = { borderRadius: `${p}px` },
        I = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= v && e.startPx <= g),
            [m, v, g, d],
        );
    return (0, r.jsxs)(x.animated.div, {
        className: i()(E.Td, h),
        style: {
            left: w ? c.to((e) => v + e) : v,
            width: R ? c.to((e) => C - e) : C,
            "--custom-r-left": a.to((e) => (0 === v || e >= v ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (g >= d || e >= g ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: E.MI,
                children: [
                    (0, r.jsxs)(x.animated.div, {
                        className: E._I,
                        style: { left: w ? c.to((e) => -(v + e)) : -v },
                        children: [
                            I?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: E.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...D },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != f &&
                                j > 0 &&
                                (0, r.jsx)("div", { className: E.YK, style: { width: `${j}px`, opacity: 1, ...D } }),
                        ],
                    }),
                    (0, r.jsx)(x.animated.div, { className: E.wx, style: { transform: L, opacity: k } }),
                ],
            }),
            M && (0, r.jsx)(x.animated.div, { className: E.fk, style: { width: T, opacity: k } }),
        ],
    });
};
E.f5;
let S = { tension: 300, friction: 30, clamp: !0 };
function C(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: c,
            backgroundColor: x,
            playerState: b,
            preloadedBuffers: C,
            durationSec: w,
            maxSeekableTime: A,
            progressClassName: R,
            timelineHeightPx: N = 4,
            segmentBorderRadius: L,
            hoverTimelineHeightPx: T,
            initialTimelineHeightPx: k = N,
            persistPlayhead: M = !0,
            onClick: j,
            onScrubBack: D,
            onScrubForward: I,
            onDragStateChange: B,
            indicatorConfig: F,
            scrubPreviewCues: U,
            onIndicatorSeek: G,
            getCurrentTimeSec: _,
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
                    onDragXChange: v,
                } = e,
                [x, E] = l.useState(null),
                [g, b] = l.useState(null),
                [y, S] = l.useState(!1),
                [C, P] = l.useState(!1),
                [w, A] = l.useState(null),
                [R, N] = l.useState(!1),
                { i18n: L } = (0, m.G9)(),
                T = l.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != s &&
                            "number" == typeof s &&
                            ((e["aria-valuenow"] = s),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = L.PERCENT_COMPLETE(Math.round(s)))),
                        e
                    );
                }, [s, L]),
                k = l.useMemo(() => (null == x || null == r ? null : (0, u.DX)(r, i, x)), [x, r, i]),
                M = (0, p.A)((e) => {
                    E(e.contentRect);
                }),
                j = (0, f.w)(M);
            function D(e) {
                if (null != j.current) {
                    let t = j.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        l = null != r ? (r / i) * t.width : null;
                    (N(null != l && n > l), b(n));
                }
            }
            let I = l.useRef(!1),
                B = l.useRef(null),
                F = (0, p.A)((e, t) => {
                    if (null == o) return;
                    let n = e - t.left,
                        l = (0, u.hc)(n, t, i);
                    (null != r && l > r) || o(l);
                }),
                U = l.useCallback(
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
                        ((I.current = !1), B.current?.(), (B.current = null));
                    },
                    [],
                ),
                {
                    contRef: j,
                    boundingRect: x,
                    handleMouseEnter: function (e) {
                        a && (S(!0), D(e));
                    },
                    handleMouseLeave: function (e) {
                        a && !I.current && (S(!1), b(null), N(!1));
                    },
                    handleMouseMove: function (e) {
                        a && y && D(e);
                    },
                    handleMouseDown: function (e) {
                        if (!a || null == o || 0 !== e.button) return;
                        B.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, u.hc)(e.clientX - t.left, t, i);
                        if (null != r && n > r) return;
                        ((I.current = !0), P(!0), c?.(!0));
                        let l = Math.max(0, Math.min(e.clientX - t.left, t.width));
                        function s(e) {
                            if (null != j.current) {
                                let t = j.current.getBoundingClientRect(),
                                    n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                    l = null != r ? (r / i) * t.width : null,
                                    a = null != l ? Math.min(n, l) : n;
                                (N(null != l && n > l), b(n), A(a), v?.(a), F(e.clientX, t));
                            } else F(e.clientX, t);
                        }
                        function m(e) {
                            ((I.current = !1),
                                (B.current = null),
                                P(!1),
                                A(null),
                                c?.(!1),
                                N(!1),
                                null != j.current &&
                                    (((0, d.vq)(e.target, Node) && j.current.contains(e.target)) || (S(!1), b(null))),
                                window.removeEventListener("mousemove", s),
                                window.removeEventListener("mouseup", m));
                        }
                        (A(l),
                            v?.(l),
                            F(e.clientX, t),
                            window.addEventListener("mousemove", s),
                            window.addEventListener("mouseup", m),
                            (B.current = () => {
                                (window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", m));
                            }));
                    },
                    handleKeyDown: U,
                    hoveredAtX: g,
                    maxSeekableX: k,
                    isHovering: y,
                    isDragging: C,
                    dragX: w,
                    isHoverBeyondMax: R,
                    handleClick: function () {},
                    ariaProps: T,
                }
            );
        })({
            onScrubBack: D,
            onScrubForward: I,
            maxSeekableTime: A,
            interactionEnabled: c,
            durationSec: w,
            percent: n,
            onClick: j,
            onDragStateChange: B,
            onDragXChange: (e) => eo.set(e),
        }),
        er = l.useMemo(() => (null == z || null == O ? null : (0, u.hc)(z, O, w)), [z, O, w]),
        el = l.useMemo(() => (null == er ? null : (0, u.rB)(er)), [er]),
        ea = l.useMemo(() => (null == U || null == er ? null : (0, v.B8)(U, er)), [U, er]),
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
        if (!a || null == _ || w <= 0 || eu <= 0) return;
        ((em.current = ed.current ?? _()), (ef.current = performance.now()));
        let e = 0,
            t = !1;
        return (
            (e = requestAnimationFrame(function n() {
                if (t || null == _) return;
                let r = performance.now(),
                    l = ef.current;
                ef.current = r;
                let a = em.current;
                if (null != a) {
                    a += null != l ? (r - l) / 1e3 : 0;
                    let e = _();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - a;
                        a = Math.abs(t) > 0.5 ? e : a + 0.1 * t;
                    }
                } else a = _() ?? null;
                if (null != a && Number.isFinite(a)) {
                    ((em.current = a), (ed.current = a));
                    let e = Math.min(Math.max(0, (a / w) * eu), eu);
                    eo.set(e);
                }
                e = requestAnimationFrame(n);
            })),
            () => {
                ((t = !0), cancelAnimationFrame(e), (em.current = null), (ef.current = null));
            }
        );
    }, [a, _, w, eu, eo]);
    let ep = a && null != _ && w > 0;
    l.useEffect(() => {
        let e;
        if (!ep) {
            if (null != _ && w > 0 && eu > 0) {
                let t = _();
                null != t && Number.isFinite(t) && ((ed.current = t), (e = Math.min(Math.max(0, (t / w) * eu), eu)));
            }
            (null == e && (e = null == ei || Number.isNaN(ei) ? 0 : ei), es({ playbackPxSpring: e, immediate: !0 }));
        }
    }, [ei, ep, es, _, w, eu]);
    let eh = w > 1,
        ev = F?.indicators,
        ex = l.useMemo(() => {
            let e;
            return null != ev && null != O && eh
                ? ((e = O.width),
                  ev.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, u.DX)(t.timeSec, w, O) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ev, w, O, eh]),
        eE = l.useMemo(
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
                })(eu, ex),
            [eu, ex],
        ),
        eg = F?.hoverExpansionPx ?? 0,
        eb = l.useCallback(
            (e) =>
                null != e &&
                null != ex &&
                ex.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (F?.animatingIndex === t.index ? eg : 0) &&
                        e <= t.rightPx + t.gapPx + (F?.animatingIndex === t.index ? eg : 0),
                ),
            [ex, F?.animatingIndex, eg],
        );
    return (0, r.jsx)("div", {
        className: E.jD,
        ref: K,
        "data-testid": $,
        style: {
            "--custom-timeline-height": `${null != T && W ? T : N}px`,
            "--custom-initial-timeline-height": `${k}px`,
        },
        children: (0, r.jsxs)(s.D, {
            className: i()(E.KF, { [E.uc]: c }),
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
                    className: E.PH,
                    ...en,
                    style: null != x ? { "--custom-segment-bg": x } : void 0,
                    children:
                        null != O &&
                        eE.map((e, t) =>
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
                                    progressClassName: R,
                                },
                                t,
                            ),
                        ),
                }),
                null != O &&
                    ex?.map((e) =>
                        F?.renderIndicator(
                            e,
                            null != ei && !Number.isNaN(ei) ? ei : 0,
                            !0 === e.source.clickable && null != G ? () => G(e.source.timeSec) : void 0,
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
                    (0, r.jsx)(g, { playbackPxSpring: eo, isDragging: Z, dragX: q }),
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
          ? (0, r.jsx)(v.wb, { cue: o, timeSec: l, cursorXPx: n, timelineWidthPx: s })
          : null == a
            ? null
            : (0, r.jsx)(c.E, {
                  className: E.Hz,
                  variant: "text-xs/normal",
                  color: "text-overlay-light",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: a,
              });
}
