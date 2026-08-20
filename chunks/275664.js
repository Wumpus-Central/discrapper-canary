n.d(t, { Ay: () => y }), n(321073);
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(61491),
    s = n(717421),
    o = n(939249),
    c = n(834730),
    d = n(621466),
    m = n(460890),
    f = n(770178),
    h = n(765548),
    p = n(650583),
    v = n(565164),
    x = n(53466),
    g = n(494154);
let E = l.memo(function (e) {
    let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
    return (0, r.jsx)(x.animated.div, {
        "data-testid": "discord-web-video-player-playhead",
        className: g.lG,
        style: { left: n && null != l ? `${l}px` : t.to((e) => `${e}px`) },
    });
});
var b = n(876230);
let S = (e) => {
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
            maxSeekableX: f,
            segmentBorderRadius: h = 99,
            progressClassName: p,
        } = e,
        { startPx: v, endPx: E, leftIndicatorIndex: S, rightIndicatorIndex: C } = t,
        y = E - v,
        w = a.to((e) => Math.min(Math.max(0, e - v), y)),
        A = null != n && null != c && S === n,
        N = !A && null != n && null != c && C === n,
        R = A || N,
        T = s && null != o ? Math.min(Math.max(0, o - v), y) : null,
        { progressToPlayheadBarTransform: P, glowWidth: L } = (function (e) {
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
            segmentWidth: y,
            dragFillWidth: T,
            shrinkEnd: N,
            isAnimating: R,
            fillWidthAnimated: w,
            expansionSpring: c,
        }),
        M = null != T ? (T <= 0 ? 0 : 1) : w.to((e) => (e <= 0 ? 0 : 1)),
        j = u !== b.Q6.ENDED,
        D = Math.max(0, (f ?? 0) - v),
        k = { borderRadius: `${h}px` },
        I = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= v && e.startPx <= E),
            [m, v, E, d],
        );
    return (0, r.jsxs)(x.animated.div, {
        className: i()(g.Td, p),
        style: {
            left: A ? c.to((e) => v + e) : v,
            width: R ? c.to((e) => y - e) : y,
            "--custom-r-left": a.to((e) => (0 === v || e >= v ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (E >= d || e >= E ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: g.MI,
                children: [
                    (0, r.jsxs)(x.animated.div, {
                        className: g._I,
                        style: { left: A ? c.to((e) => -(v + e)) : -v },
                        children: [
                            I?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: g.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...k },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != f &&
                                D > 0 &&
                                (0, r.jsx)("div", { className: g.YK, style: { width: `${D}px`, opacity: 1, ...k } }),
                        ],
                    }),
                    (0, r.jsx)(x.animated.div, { className: g.wx, style: { transform: P, opacity: M } }),
                ],
            }),
            j && (0, r.jsx)(x.animated.div, { className: g.fk, style: { width: L, opacity: M } }),
        ],
    });
};
g.f5;
let C = { tension: 300, friction: 30, clamp: !0 };
function y(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: c,
            backgroundColor: x,
            playerState: b,
            preloadedBuffers: y,
            durationSec: A,
            maxSeekableTime: N,
            progressClassName: R,
            timelineHeightPx: T = 4,
            segmentBorderRadius: P,
            hoverTimelineHeightPx: L,
            initialTimelineHeightPx: M = T,
            persistPlayhead: j = !0,
            onClick: D,
            onScrubBack: k,
            onScrubForward: I,
            onDragStateChange: B,
            indicatorConfig: F,
            scrubPreviewCues: _,
            onIndicatorSeek: U,
            getCurrentTimeSec: K,
            "data-testid": O,
        } = e,
        {
            contRef: $,
            boundingRect: Q,
            handleMouseEnter: V,
            handleMouseLeave: G,
            handleMouseMove: Y,
            handleKeyDown: H,
            hoveredAtX: Z,
            maxSeekableX: z,
            isHovering: X,
            isDragging: W,
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
                    onClick: s,
                    percent: o,
                    onDragStateChange: c,
                } = e,
                [v, x] = l.useState(null),
                [g, E] = l.useState(null),
                [b, S] = l.useState(!1),
                [C, y] = l.useState(!1),
                [w, A] = l.useState(null),
                [N, R] = l.useState(!1),
                { i18n: T } = (0, m.G9)(),
                P = l.useMemo(() => {
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
                L = l.useMemo(() => (null == v || null == r ? null : (0, u.DX)(r, i, v)), [v, r, i]),
                M = (0, h.A)((e) => {
                    x(e.contentRect);
                }),
                j = (0, f.w)(M);
            function D(e) {
                if (null != j.current) {
                    let t = j.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        l = null != r ? (r / i) * t.width : null;
                    R(null != l && n > l), E(n);
                }
            }
            let k = l.useRef(!1),
                I = l.useRef(null),
                B = (0, h.A)((e, t) => {
                    if (null == s) return;
                    let n = e - t.left,
                        l = (0, u.hc)(n, t, i);
                    (null != r && l > r) || s(l);
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
                    contRef: j,
                    boundingRect: v,
                    handleMouseEnter: function (e) {
                        a && (S(!0), D(e));
                    },
                    handleMouseLeave: function (e) {
                        a && !k.current && (S(!1), E(null), R(!1));
                    },
                    handleMouseMove: function (e) {
                        a && b && D(e);
                    },
                    handleMouseDown: function (e) {
                        if (!a || null == s || 0 !== e.button) return;
                        I.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, u.hc)(e.clientX - t.left, t, i);
                        function l(e) {
                            if (null != j.current) {
                                let t = j.current.getBoundingClientRect(),
                                    n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                    l = null != r ? (r / i) * t.width : null,
                                    a = null != l ? Math.min(n, l) : n;
                                R(null != l && n > l), E(n), A(a), B(e.clientX, t);
                            } else B(e.clientX, t);
                        }
                        function o(e) {
                            (k.current = !1),
                                (I.current = null),
                                y(!1),
                                A(null),
                                c?.(!1),
                                R(!1),
                                null != j.current &&
                                    (((0, d.vq)(e.target, Node) && j.current.contains(e.target)) || (S(!1), E(null))),
                                window.removeEventListener("mousemove", l),
                                window.removeEventListener("mouseup", o);
                        }
                        (null != r && n > r) ||
                            ((k.current = !0),
                            y(!0),
                            c?.(!0),
                            A(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            B(e.clientX, t),
                            window.addEventListener("mousemove", l),
                            window.addEventListener("mouseup", o),
                            (I.current = () => {
                                window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", o);
                            }));
                    },
                    handleKeyDown: F,
                    hoveredAtX: g,
                    maxSeekableX: L,
                    isHovering: b,
                    isDragging: C,
                    dragX: w,
                    isHoverBeyondMax: N,
                    handleClick: function () {},
                    ariaProps: P,
                }
            );
        })({
            onScrubBack: k,
            onScrubForward: I,
            maxSeekableTime: N,
            interactionEnabled: c,
            durationSec: A,
            percent: n,
            onClick: D,
            onDragStateChange: B,
        }),
        er = l.useMemo(() => (null == Z || null == Q ? null : (0, u.hc)(Z, Q, A)), [Z, Q, A]),
        el = l.useMemo(() => (null == er ? null : (0, u.rB)(er)), [er]),
        ea = l.useMemo(() => (null == _ || null == er ? null : (0, v.B8)(_, er)), [_, er]),
        ei = l.useMemo(() => {
            if (null != Q) return (0, u.TO)(n, Q);
        }, [n, Q]),
        eu = Q?.width != null && Q?.width !== 0 ? Q?.width : 1,
        [{ playbackPxSpring: es }, eo] = (0, s.z)(() => ({ playbackPxSpring: 0, config: C })),
        ec = l.useRef(W);
    l.useLayoutEffect(() => {
        let e = ec.current;
        (ec.current = W), e && !W && eo({ playbackPxSpring: null == ei || Number.isNaN(ei) ? 0 : ei, immediate: !0 });
    }, [W, ei, eo]);
    let ed = l.useRef(null),
        em = l.useRef(null),
        ef = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == K || A <= 0 || eu <= 0) return;
        (em.current = ed.current ?? K()), (ef.current = performance.now());
        let e = 0;
        return (
            (e = requestAnimationFrame(function t() {
                if (null == K) return;
                let n = performance.now(),
                    r = ef.current;
                ef.current = n;
                let l = em.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = K();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = K() ?? null;
                null != l &&
                    Number.isFinite(l) &&
                    ((em.current = l),
                    (ed.current = l),
                    eo({ playbackPxSpring: Math.min(Math.max(0, (l / A) * eu), eu), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            })),
            () => {
                cancelAnimationFrame(e), (em.current = null), (ef.current = null);
            }
        );
    }, [a, K, A, eu, eo]);
    let eh = a && null != K && A > 0;
    l.useEffect(() => {
        let e;
        if (!eh) {
            if (null != K && A > 0 && eu > 0) {
                let t = K();
                null != t && Number.isFinite(t) && ((ed.current = t), (e = Math.min(Math.max(0, (t / A) * eu), eu)));
            }
            null == e && (e = null == ei || Number.isNaN(ei) ? 0 : ei), eo({ playbackPxSpring: e, immediate: !0 });
        }
    }, [ei, eh, eo, K, A, eu]);
    let ep = A > 1,
        ev = F?.indicators,
        ex = l.useMemo(() => {
            let e;
            return null != ev && null != Q && ep
                ? ((e = Q.width),
                  ev.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, u.DX)(t.timeSec, A, Q) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ev, A, Q, ep]),
        eg = l.useMemo(
            () =>
                (function (e, t) {
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
                })(eu, ex),
            [eu, ex],
        ),
        eE = F?.hoverExpansionPx ?? 0,
        eb = l.useCallback(
            (e) =>
                null != e &&
                null != ex &&
                ex.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (F?.animatingIndex === t.index ? eE : 0) &&
                        e <= t.rightPx + t.gapPx + (F?.animatingIndex === t.index ? eE : 0),
                ),
            [ex, F?.animatingIndex, eE],
        );
    return (0, r.jsx)("div", {
        className: g.jD,
        ref: $,
        "data-testid": O,
        style: {
            "--custom-timeline-height": `${null != L && X ? L : T}px`,
            "--custom-initial-timeline-height": `${M}px`,
        },
        children: (0, r.jsxs)(o.D, {
            className: i()(g.KF, { [g.uc]: c }),
            style: q ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: ee,
            onMouseDown: et,
            onMouseEnter: V,
            onMouseLeave: G,
            onMouseMove: Y,
            onKeyDown: H,
            tabIndex: c ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: g.PH,
                    ...en,
                    style: null != x ? { "--custom-segment-bg": x } : void 0,
                    children:
                        null != Q &&
                        eg.map((e, t) =>
                            (0, r.jsx)(
                                S,
                                {
                                    segment: e,
                                    playbackPxSpring: es,
                                    playerState: b,
                                    isDragging: W,
                                    dragX: J,
                                    animatingIndex: F?.animatingIndex,
                                    expansionSpring: F?.expansionSpring,
                                    timelineWidth: eu,
                                    preloadedBuffers: y,
                                    maxSeekableX: z,
                                    segmentBorderRadius: P,
                                    progressClassName: R,
                                },
                                t,
                            ),
                        ),
                }),
                null != Q &&
                    ex?.map((e) =>
                        F?.renderIndicator(
                            e,
                            null != ei && !Number.isNaN(ei) ? ei : 0,
                            !0 === e.source.clickable && null != U ? () => U(e.source.timeSec) : void 0,
                        ),
                    ),
                (0, r.jsx)(w, {
                    isHovering: X,
                    hoveredAtX: Z,
                    hoveredTimeSec: er,
                    formattedTime: el,
                    isFullyVisible: t,
                    isInExclusionZone: eb,
                    scrubPreviewCue: ea,
                    timelineWidthPx: eu,
                }),
                (X || j) &&
                    c &&
                    null != ei &&
                    !eb(W && null != J ? J : ei) &&
                    (0, r.jsx)(E, { playbackPxSpring: es, isDragging: W, dragX: J }),
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
        isInExclusionZone: u,
        scrubPreviewCue: s,
        timelineWidthPx: o,
    } = e;
    return !t || null == n || !i || u(n)
        ? null
        : null != s && null != l
          ? (0, r.jsx)(v.wb, { cue: s, timeSec: l, cursorXPx: n, timelineWidthPx: o })
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
