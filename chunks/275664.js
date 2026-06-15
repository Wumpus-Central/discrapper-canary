n.d(t, { Ay: () => w }), n(321073);
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
    h = n(770178),
    f = n(765548),
    p = n(650583),
    v = n(565164),
    g = n(922139),
    x = n(6821);
let E = l.memo(function (e) {
    let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
    return (0, r.jsx)(g.animated.div, {
        "data-testid": "discord-web-video-player-playhead",
        className: x.lG,
        style: { left: n && null != l ? `${l}px` : t.to((e) => `${e}px`) },
    });
});
var b = n(876230);
let S = (e) => {
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
            maxSeekableX: h,
            segmentBorderRadius: f = 99,
            progressClassName: p,
        } = e,
        { startPx: v, endPx: E, leftIndicatorIndex: S, rightIndicatorIndex: C } = t,
        w = E - v,
        y = a.to((e) => Math.min(Math.max(0, e - v), w)),
        A = null != n && null != c && S === n,
        N = !A && null != n && null != c && C === n,
        R = A || N,
        T = u && null != o ? Math.min(Math.max(0, o - v), w) : null,
        { progressToPlayheadBarTransform: L, glowWidth: M } = (function (e) {
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
                        progressToPlayheadBarTransform: (0, g.to)(
                            [a, i],
                            (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                        ),
                        glowWidth: (0, g.to)([a, i], (e, n) => Math.min(Number(e), t - Number(n))),
                    }
                  : l && null != i
                    ? {
                          progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                          glowWidth: (0, g.to)([a, i], (e, t) => Math.max(0, Number(e) - Number(t))),
                      }
                    : { progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`), glowWidth: a };
        })({
            segmentWidth: w,
            dragFillWidth: T,
            shrinkEnd: N,
            isAnimating: R,
            fillWidthAnimated: y,
            expansionSpring: c,
        }),
        P = null != T ? (T <= 0 ? 0 : 1) : y.to((e) => (e <= 0 ? 0 : 1)),
        j = s !== b.Q6.ENDED,
        k = Math.max(0, (h ?? 0) - v),
        D = { borderRadius: `${f}px` },
        I = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= v && e.startPx <= E),
            [m, v, E, d],
        );
    return (0, r.jsxs)(g.animated.div, {
        className: i()(x.Td, p),
        style: {
            left: A ? c.to((e) => v + e) : v,
            width: R ? c.to((e) => w - e) : w,
            "--custom-r-left": a.to((e) => (0 === v || e >= v ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (E >= d || e >= E ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: x.MI,
                children: [
                    (0, r.jsxs)(g.animated.div, {
                        className: x._I,
                        style: { left: A ? c.to((e) => -(v + e)) : -v },
                        children: [
                            I?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: x.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...D },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != h &&
                                k > 0 &&
                                (0, r.jsx)("div", { className: x.YK, style: { width: `${k}px`, opacity: 1, ...D } }),
                        ],
                    }),
                    (0, r.jsx)(g.animated.div, { className: x.wx, style: { transform: L, opacity: P } }),
                ],
            }),
            j && (0, r.jsx)(g.animated.div, { className: x.fk, style: { width: M, opacity: P } }),
        ],
    });
};
x.f5;
let C = { tension: 300, friction: 30, clamp: !0 };
function w(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: c,
            backgroundColor: g,
            playerState: b,
            preloadedBuffers: w,
            durationSec: A,
            maxSeekableTime: N,
            progressClassName: R,
            timelineHeightPx: T = 4,
            segmentBorderRadius: L,
            hoverTimelineHeightPx: M,
            initialTimelineHeightPx: P = T,
            persistPlayhead: j = !0,
            onClick: k,
            onScrubBack: D,
            onScrubForward: I,
            onDragStateChange: B,
            indicatorConfig: F,
            scrubPreviewCues: _,
            onIndicatorSeek: U,
            getCurrentTimeSec: O,
            "data-testid": K,
        } = e,
        {
            contRef: Q,
            boundingRect: $,
            handleMouseEnter: G,
            handleMouseLeave: V,
            handleMouseMove: H,
            handleKeyDown: Y,
            hoveredAtX: Z,
            maxSeekableX: z,
            isHovering: X,
            isDragging: W,
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
                    onClick: u,
                    percent: o,
                    onDragStateChange: c,
                } = e,
                [v, g] = l.useState(null),
                [x, E] = l.useState(null),
                [b, S] = l.useState(!1),
                [C, w] = l.useState(!1),
                [y, A] = l.useState(null),
                [N, R] = l.useState(!1),
                { i18n: T } = (0, m.G9)(),
                L = l.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != o &&
                            "number" == typeof o &&
                            ((e["aria-valuenow"] = o),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = T.PERCENT_COMPLETE(Math.round(o)))),
                        e
                    );
                }, [o, T]),
                M = l.useMemo(() => (null == v || null == r ? null : (0, s.DX)(r, i, v)), [v, r, i]),
                P = (0, f.A)((e) => {
                    g(e.contentRect);
                }),
                j = (0, h.w)(P),
                k = (e) => {
                    if (null != j.current) {
                        let t = j.current.getBoundingClientRect(),
                            n = e.clientX - t.left,
                            l = null != r ? (r / i) * t.width : null;
                        R(null != l && n > l), E(n);
                    }
                },
                D = l.useRef(!1),
                I = l.useRef(null),
                B = (0, f.A)((e, t) => {
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
                        (D.current = !1), I.current?.(), (I.current = null);
                    },
                    [],
                ),
                {
                    contRef: j,
                    boundingRect: v,
                    handleMouseEnter: (e) => {
                        a && (S(!0), k(e));
                    },
                    handleMouseLeave: (e) => {
                        a && !D.current && (S(!1), E(null), R(!1));
                    },
                    handleMouseMove: (e) => {
                        a && b && k(e);
                    },
                    handleMouseDown: (e) => {
                        if (!a || null == u || 0 !== e.button) return;
                        I.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, s.hc)(e.clientX - t.left, t, i);
                        if (null != r && n > r) return;
                        (D.current = !0),
                            w(!0),
                            c?.(!0),
                            A(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            B(e.clientX, t);
                        let l = (e) => {
                                if (null != j.current) {
                                    let t = j.current.getBoundingClientRect(),
                                        n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                        l = null != r ? (r / i) * t.width : null,
                                        a = null != l ? Math.min(n, l) : n;
                                    R(null != l && n > l), E(n), A(a), B(e.clientX, t);
                                } else B(e.clientX, t);
                            },
                            o = (e) => {
                                (D.current = !1),
                                    (I.current = null),
                                    w(!1),
                                    A(null),
                                    c?.(!1),
                                    R(!1),
                                    null != j.current &&
                                        (((0, d.vq)(e.target, Node) && j.current.contains(e.target)) ||
                                            (S(!1), E(null))),
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
                    maxSeekableX: M,
                    isHovering: b,
                    isDragging: C,
                    dragX: y,
                    isHoverBeyondMax: N,
                    handleClick: () => {},
                    ariaProps: L,
                }
            );
        })({
            onScrubBack: D,
            onScrubForward: I,
            maxSeekableTime: N,
            interactionEnabled: c,
            durationSec: A,
            percent: n,
            onClick: k,
            onDragStateChange: B,
        }),
        er = l.useMemo(() => (null == Z || null == $ ? null : (0, s.hc)(Z, $, A)), [Z, $, A]),
        el = l.useMemo(() => (null == er ? null : (0, s.rB)(er)), [er]),
        ea = l.useMemo(() => (null == _ || null == er ? null : (0, v.B8)(_, er)), [_, er]),
        ei = l.useMemo(() => {
            if (null != $) return (0, s.TO)(n, $);
        }, [n, $]),
        es = $?.width != null && $?.width !== 0 ? $?.width : 1,
        [{ playbackPxSpring: eu }, eo] = (0, u.z)(() => ({ playbackPxSpring: 0, config: C })),
        ec = l.useRef(W);
    l.useLayoutEffect(() => {
        let e = ec.current;
        (ec.current = W), e && !W && eo({ playbackPxSpring: null == ei || Number.isNaN(ei) ? 0 : ei, immediate: !0 });
    }, [W, ei, eo]);
    let ed = l.useRef(null),
        em = l.useRef(null),
        eh = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == O || A <= 0 || es <= 0) return;
        (em.current = ed.current ?? O()), (eh.current = performance.now());
        let e = 0,
            t = () => {
                let n = performance.now(),
                    r = eh.current;
                eh.current = n;
                let l = em.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = O();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = O() ?? null;
                null != l &&
                    Number.isFinite(l) &&
                    ((em.current = l),
                    (ed.current = l),
                    eo({ playbackPxSpring: Math.min(Math.max(0, (l / A) * es), es), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            };
        return (
            (e = requestAnimationFrame(t)),
            () => {
                cancelAnimationFrame(e), (em.current = null), (eh.current = null);
            }
        );
    }, [a, O, A, es, eo]);
    let ef = a && null != O && A > 0;
    l.useEffect(() => {
        let e;
        if (!ef) {
            if (null != O && A > 0 && es > 0) {
                let t = O();
                null != t && Number.isFinite(t) && ((ed.current = t), (e = Math.min(Math.max(0, (t / A) * es), es)));
            }
            null == e && (e = null == ei || Number.isNaN(ei) ? 0 : ei), eo({ playbackPxSpring: e, immediate: !0 });
        }
    }, [ei, ef, eo, O, A, es]);
    let ep = A > 1,
        ev = F?.indicators,
        eg = l.useMemo(() => {
            let e;
            return null != ev && null != $ && ep
                ? ((e = $.width),
                  ev.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, s.DX)(t.timeSec, A, $) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ev, A, $, ep]),
        ex = l.useMemo(
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
                })(es, eg),
            [es, eg],
        ),
        eE = F?.hoverExpansionPx ?? 0,
        eb = l.useCallback(
            (e) =>
                null != e &&
                null != eg &&
                eg.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (F?.animatingIndex === t.index ? eE : 0) &&
                        e <= t.rightPx + t.gapPx + (F?.animatingIndex === t.index ? eE : 0),
                ),
            [eg, F?.animatingIndex, eE],
        );
    return (0, r.jsx)("div", {
        className: x.jD,
        ref: Q,
        "data-testid": K,
        style: {
            "--custom-timeline-height": `${null != M && X ? M : T}px`,
            "--custom-initial-timeline-height": `${P}px`,
        },
        children: (0, r.jsxs)(o.D, {
            className: i()(x.KF, { [x.uc]: c }),
            style: J ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: ee,
            onMouseDown: et,
            onMouseEnter: G,
            onMouseLeave: V,
            onMouseMove: H,
            onKeyDown: Y,
            tabIndex: c ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: x.PH,
                    ...en,
                    style: null != g ? { "--custom-segment-bg": g } : void 0,
                    children:
                        null != $ &&
                        ex.map((e, t) =>
                            (0, r.jsx)(
                                S,
                                {
                                    segment: e,
                                    playbackPxSpring: eu,
                                    playerState: b,
                                    isDragging: W,
                                    dragX: q,
                                    animatingIndex: F?.animatingIndex,
                                    expansionSpring: F?.expansionSpring,
                                    timelineWidth: es,
                                    preloadedBuffers: w,
                                    maxSeekableX: z,
                                    segmentBorderRadius: L,
                                    progressClassName: R,
                                },
                                t,
                            ),
                        ),
                }),
                null != $ &&
                    eg?.map((e) =>
                        F?.renderIndicator(
                            e,
                            null != ei && !Number.isNaN(ei) ? ei : 0,
                            !0 === e.source.clickable && null != U ? () => U(e.source.timeSec) : void 0,
                        ),
                    ),
                (0, r.jsx)(y, {
                    isHovering: X,
                    hoveredAtX: Z,
                    hoveredTimeSec: er,
                    formattedTime: el,
                    isFullyVisible: t,
                    isInExclusionZone: eb,
                    scrubPreviewCue: ea,
                    timelineWidthPx: es,
                }),
                (X || j) &&
                    c &&
                    null != ei &&
                    !eb(W && null != q ? q : ei) &&
                    (0, r.jsx)(E, { playbackPxSpring: eu, isDragging: W, dragX: q }),
            ],
        }),
    });
}
function y(e) {
    let {
        isHovering: t,
        hoveredAtX: n,
        hoveredTimeSec: l,
        formattedTime: a,
        isFullyVisible: i,
        isInExclusionZone: s,
        scrubPreviewCue: u,
        timelineWidthPx: o,
    } = e;
    return !t || null == n || !i || s(n)
        ? null
        : null != u && null != l
          ? (0, r.jsx)(v.wb, { cue: u, timeSec: l, cursorXPx: n, timelineWidthPx: o })
          : null == a
            ? null
            : (0, r.jsx)(c.E, {
                  className: x.Hz,
                  variant: "text-xs/normal",
                  color: "always-white",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: a,
              });
}
