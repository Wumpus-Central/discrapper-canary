(n.d(t, { Ay: () => y }), n(321073));
var r = n(477900),
    l = n(582128),
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
    g = n(202091),
    x = n(494154);
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
        y = E - v,
        w = a.to((e) => Math.min(Math.max(0, e - v), y)),
        A = null != n && null != c && S === n,
        R = !A && null != n && null != c && C === n,
        P = A || R,
        T = u && null != o ? Math.min(Math.max(0, o - v), y) : null,
        { progressToPlayheadBarTransform: N, glowWidth: M } = (function (e) {
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
            segmentWidth: y,
            dragFillWidth: T,
            shrinkEnd: R,
            isAnimating: P,
            fillWidthAnimated: w,
            expansionSpring: c,
        }),
        I = null != T ? (T <= 0 ? 0 : 1) : w.to((e) => (e <= 0 ? 0 : 1)),
        k = s !== b.Q6.ENDED,
        L = Math.max(0, (h ?? 0) - v),
        j = { borderRadius: `${f}px` },
        D = l.useMemo(
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
            width: P ? c.to((e) => y - e) : y,
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
                            D?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: x.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...j },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != h &&
                                L > 0 &&
                                (0, r.jsx)("div", { className: x.YK, style: { width: `${L}px`, opacity: 1, ...j } }),
                        ],
                    }),
                    (0, r.jsx)(g.animated.div, { className: x.wx, style: { transform: N, opacity: I } }),
                ],
            }),
            k && (0, r.jsx)(g.animated.div, { className: x.fk, style: { width: M, opacity: I } }),
        ],
    });
};
x.f5;
let C = { tension: 300, friction: 30, clamp: !0 };
function y(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: c,
            backgroundColor: g,
            playerState: b,
            preloadedBuffers: y,
            durationSec: A,
            maxSeekableTime: R,
            progressClassName: P,
            timelineHeightPx: T = 4,
            segmentBorderRadius: N,
            hoverTimelineHeightPx: M,
            initialTimelineHeightPx: I = T,
            persistPlayhead: k = !0,
            onClick: L,
            onScrubBack: j,
            onScrubForward: D,
            onDragStateChange: B,
            indicatorConfig: F,
            scrubPreviewCues: _,
            onIndicatorSeek: V,
            getCurrentTimeSec: $,
            "data-testid": H,
        } = e,
        {
            contRef: K,
            boundingRect: O,
            handleMouseEnter: U,
            handleMouseLeave: G,
            handleMouseMove: Q,
            handleKeyDown: W,
            hoveredAtX: z,
            maxSeekableX: Y,
            isHovering: Z,
            isDragging: X,
            dragX: J,
            isHoverBeyondMax: q,
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
                [C, y] = l.useState(!1),
                [w, A] = l.useState(null),
                [R, P] = l.useState(!1),
                { i18n: T } = (0, m.G9)(),
                N = l.useMemo(() => {
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
                I = (0, f.A)((e) => {
                    g(e.contentRect);
                }),
                k = (0, h.w)(I);
            function L(e) {
                if (null != k.current) {
                    let t = k.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        l = null != r ? (r / i) * t.width : null;
                    (P(null != l && n > l), E(n));
                }
            }
            let j = l.useRef(!1),
                D = l.useRef(null),
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
                        ((j.current = !1), D.current?.(), (D.current = null));
                    },
                    [],
                ),
                {
                    contRef: k,
                    boundingRect: v,
                    handleMouseEnter: function (e) {
                        a && (S(!0), L(e));
                    },
                    handleMouseLeave: function (e) {
                        a && !j.current && (S(!1), E(null), P(!1));
                    },
                    handleMouseMove: function (e) {
                        a && b && L(e);
                    },
                    handleMouseDown: function (e) {
                        if (!a || null == u || 0 !== e.button) return;
                        D.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, s.hc)(e.clientX - t.left, t, i);
                        function l(e) {
                            if (null != k.current) {
                                let t = k.current.getBoundingClientRect(),
                                    n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                    l = null != r ? (r / i) * t.width : null,
                                    a = null != l ? Math.min(n, l) : n;
                                (P(null != l && n > l), E(n), A(a), B(e.clientX, t));
                            } else B(e.clientX, t);
                        }
                        function o(e) {
                            ((j.current = !1),
                                (D.current = null),
                                y(!1),
                                A(null),
                                c?.(!1),
                                P(!1),
                                null != k.current &&
                                    (((0, d.vq)(e.target, Node) && k.current.contains(e.target)) || (S(!1), E(null))),
                                window.removeEventListener("mousemove", l),
                                window.removeEventListener("mouseup", o));
                        }
                        (null != r && n > r) ||
                            ((j.current = !0),
                            y(!0),
                            c?.(!0),
                            A(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            B(e.clientX, t),
                            window.addEventListener("mousemove", l),
                            window.addEventListener("mouseup", o),
                            (D.current = () => {
                                (window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", o));
                            }));
                    },
                    handleKeyDown: F,
                    hoveredAtX: x,
                    maxSeekableX: M,
                    isHovering: b,
                    isDragging: C,
                    dragX: w,
                    isHoverBeyondMax: R,
                    handleClick: function () {},
                    ariaProps: N,
                }
            );
        })({
            onScrubBack: j,
            onScrubForward: D,
            maxSeekableTime: R,
            interactionEnabled: c,
            durationSec: A,
            percent: n,
            onClick: L,
            onDragStateChange: B,
        }),
        er = l.useMemo(() => (null == z || null == O ? null : (0, s.hc)(z, O, A)), [z, O, A]),
        el = l.useMemo(() => (null == er ? null : (0, s.rB)(er)), [er]),
        ea = l.useMemo(() => (null == _ || null == er ? null : (0, v.B8)(_, er)), [_, er]),
        ei = l.useMemo(() => {
            if (null != O) return (0, s.TO)(n, O);
        }, [n, O]),
        es = O?.width != null && O?.width !== 0 ? O?.width : 1,
        [{ playbackPxSpring: eu }, eo] = (0, u.z)(() => ({ playbackPxSpring: 0, config: C })),
        ec = l.useRef(X);
    l.useLayoutEffect(() => {
        let e = ec.current;
        ((ec.current = X), e && !X && eo({ playbackPxSpring: null == ei || Number.isNaN(ei) ? 0 : ei, immediate: !0 }));
    }, [X, ei, eo]);
    let ed = l.useRef(null),
        em = l.useRef(null),
        eh = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == $ || A <= 0 || es <= 0) return;
        ((em.current = ed.current ?? $()), (eh.current = performance.now()));
        let e = 0;
        return (
            (e = requestAnimationFrame(function t() {
                if (null == $) return;
                let n = performance.now(),
                    r = eh.current;
                eh.current = n;
                let l = em.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = $();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = $() ?? null;
                (null != l &&
                    Number.isFinite(l) &&
                    ((em.current = l),
                    (ed.current = l),
                    eo({ playbackPxSpring: Math.min(Math.max(0, (l / A) * es), es), immediate: !0 })),
                    (e = requestAnimationFrame(t)));
            })),
            () => {
                (cancelAnimationFrame(e), (em.current = null), (eh.current = null));
            }
        );
    }, [a, $, A, es, eo]);
    let ef = a && null != $ && A > 0;
    l.useEffect(() => {
        let e;
        if (!ef) {
            if (null != $ && A > 0 && es > 0) {
                let t = $();
                null != t && Number.isFinite(t) && ((ed.current = t), (e = Math.min(Math.max(0, (t / A) * es), es)));
            }
            (null == e && (e = null == ei || Number.isNaN(ei) ? 0 : ei), eo({ playbackPxSpring: e, immediate: !0 }));
        }
    }, [ei, ef, eo, $, A, es]);
    let ep = A > 1,
        ev = F?.indicators,
        eg = l.useMemo(() => {
            let e;
            return null != ev && null != O && ep
                ? ((e = O.width),
                  ev.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, s.DX)(t.timeSec, A, O) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ev, A, O, ep]),
        ex = l.useMemo(
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
        ref: K,
        "data-testid": H,
        style: {
            "--custom-timeline-height": `${null != M && Z ? M : T}px`,
            "--custom-initial-timeline-height": `${I}px`,
        },
        children: (0, r.jsxs)(o.D, {
            className: i()(x.KF, { [x.uc]: c }),
            style: q ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: ee,
            onMouseDown: et,
            onMouseEnter: U,
            onMouseLeave: G,
            onMouseMove: Q,
            onKeyDown: W,
            tabIndex: c ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: x.PH,
                    ...en,
                    style: null != g ? { "--custom-segment-bg": g } : void 0,
                    children:
                        null != O &&
                        ex.map((e, t) =>
                            (0, r.jsx)(
                                S,
                                {
                                    segment: e,
                                    playbackPxSpring: eu,
                                    playerState: b,
                                    isDragging: X,
                                    dragX: J,
                                    animatingIndex: F?.animatingIndex,
                                    expansionSpring: F?.expansionSpring,
                                    timelineWidth: es,
                                    preloadedBuffers: y,
                                    maxSeekableX: Y,
                                    segmentBorderRadius: N,
                                    progressClassName: P,
                                },
                                t,
                            ),
                        ),
                }),
                null != O &&
                    eg?.map((e) =>
                        F?.renderIndicator(
                            e,
                            null != ei && !Number.isNaN(ei) ? ei : 0,
                            !0 === e.source.clickable && null != V ? () => V(e.source.timeSec) : void 0,
                        ),
                    ),
                (0, r.jsx)(w, {
                    isHovering: Z,
                    hoveredAtX: z,
                    hoveredTimeSec: er,
                    formattedTime: el,
                    isFullyVisible: t,
                    isInExclusionZone: eb,
                    scrubPreviewCue: ea,
                    timelineWidthPx: es,
                }),
                (Z || k) &&
                    c &&
                    null != ei &&
                    !eb(X && null != J ? J : ei) &&
                    (0, r.jsx)(E, { playbackPxSpring: eu, isDragging: X, dragX: J }),
            ],
        }),
    });
}
function w(e) {
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
                  color: "text-overlay-light",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: a,
              });
}
