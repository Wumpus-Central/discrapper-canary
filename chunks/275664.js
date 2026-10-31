(n.d(t, { Ay: () => A }), n(321073));
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    o = n(876230),
    u = n(61491),
    s = n(717421),
    c = n(939249),
    d = n(834730),
    m = n(621466),
    f = n(432816),
    p = n(770178),
    h = n(765548),
    x = n(650583),
    v = n(683574),
    g = n(530567),
    E = n(565164),
    b = n(941143),
    y = n(494154);
let P = l.memo(function (e) {
        let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
        return (0, r.jsx)(b.animated.div, {
            "data-testid": "discord-web-video-player-playhead",
            className: y.lG,
            style: { left: n && null != l ? `${l}px` : t.to((e) => `${e}px`) },
        });
    }),
    S = (e) => {
        let {
                segment: t,
                animatingIndex: n,
                playbackPxSpring: i,
                playerState: u,
                isDragging: s,
                dragX: c,
                expansionSpring: d,
                timelineWidth: m,
                preloadedBuffers: f,
                maxSeekableX: p,
                segmentBorderRadius: h = 99,
                progressClassName: x,
            } = e,
            { startPx: v, endPx: g, leftIndicatorIndex: E, rightIndicatorIndex: P } = t,
            S = g - v,
            C = i.to((e) => Math.min(Math.max(0, e - v), S)),
            A = null != n && null != d && E === n,
            w = !A && null != n && null != d && P === n,
            R = A || w,
            N = s && null != c ? Math.min(Math.max(0, c - v), S) : null,
            { progressToPlayheadBarTransform: T, glowWidth: L } = (function (e) {
                let {
                    segmentWidth: t,
                    dragFillWidth: n,
                    shrinkEnd: r,
                    isAnimating: l,
                    fillWidthAnimated: i,
                    expansionSpring: a,
                } = e;
                return null != n
                    ? { progressToPlayheadBarTransform: `translateX(-${t - n}px)`, glowWidth: n }
                    : r && null != a
                      ? {
                            progressToPlayheadBarTransform: (0, b.to)(
                                [i, a],
                                (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                            ),
                            glowWidth: (0, b.to)([i, a], (e, n) => Math.min(Number(e), t - Number(n))),
                        }
                      : l && null != a
                        ? {
                              progressToPlayheadBarTransform: i.to((e) => `translateX(-${t - Number(e)}px)`),
                              glowWidth: (0, b.to)([i, a], (e, t) => Math.max(0, Number(e) - Number(t))),
                          }
                        : {
                              progressToPlayheadBarTransform: i.to((e) => `translateX(-${t - Number(e)}px)`),
                              glowWidth: i,
                          };
            })({
                segmentWidth: S,
                dragFillWidth: N,
                shrinkEnd: w,
                isAnimating: R,
                fillWidthAnimated: C,
                expansionSpring: d,
            }),
            M = null != N ? (N <= 0 ? 0 : 1) : C.to((e) => (e <= 0 ? 0 : 1)),
            k = u !== o.Q6.ENDED,
            j = Math.max(0, (p ?? 0) - v),
            D = { borderRadius: `${h}px` },
            I = l.useMemo(
                () =>
                    f
                        ?.map((e) => ({ startPx: e.start * m, endPx: (e.start + e.size) * m }))
                        .filter((e) => e.endPx >= v && e.startPx <= g),
                [f, v, g, m],
            );
        return (0, r.jsxs)(b.animated.div, {
            className: a()(y.Td, x),
            style: {
                left: A ? d.to((e) => v + e) : v,
                width: R ? d.to((e) => S - e) : S,
                "--custom-r-left": i.to((e) => (0 === v || e >= v ? "99px" : "0px")),
                "--custom-r-right": i.to((e) => (g >= m || e >= g ? "99px" : "0px")),
                "--custom-timeline-width": `${m}px`,
            },
            children: [
                (0, r.jsxs)("div", {
                    className: y.MI,
                    children: [
                        (0, r.jsxs)(b.animated.div, {
                            className: y._I,
                            style: { left: A ? d.to((e) => -(v + e)) : -v },
                            children: [
                                I?.map((e) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: y.Zn,
                                            style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...D },
                                        },
                                        `${e.startPx}:${e.endPx}`,
                                    ),
                                ),
                                null != p &&
                                    j > 0 &&
                                    (0, r.jsx)("div", {
                                        className: y.YK,
                                        style: { width: `${j}px`, opacity: 1, ...D },
                                    }),
                            ],
                        }),
                        (0, r.jsx)(b.animated.div, { className: y.wx, style: { transform: T, opacity: M } }),
                    ],
                }),
                k && (0, r.jsx)(b.animated.div, { className: y.fk, style: { width: L, opacity: M } }),
            ],
        });
    };
y.f5;
let C = { tension: 300, friction: 30, clamp: !0 };
function A(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: i,
            interactionEnabled: d,
            backgroundColor: b,
            playerState: A,
            preloadedBuffers: R,
            durationSec: N,
            maxSeekableTime: T,
            progressClassName: L,
            timelineHeightPx: M,
            segmentBorderRadius: k,
            hoverTimelineHeightPx: j,
            initialTimelineHeightPx: D,
            persistPlayhead: I = !0,
            onClick: B,
            onScrubBack: F,
            onScrubForward: $,
            onDragStateChange: G,
            indicatorConfig: H,
            scrubPreviewCues: _,
            onIndicatorSeek: U,
            getCurrentTimeSec: O,
            "data-testid": K,
        } = e,
        Q = l.useContext(v.qb),
        z = Q?.controlBarConfig ?? g.X4[o.oA.MD],
        V = M ?? z.timelineHeightPx,
        X = j ?? (null == M ? z.hoverTimelineHeightPx : void 0),
        {
            contRef: Y,
            boundingRect: W,
            handleMouseEnter: q,
            handleMouseLeave: Z,
            handleMouseMove: J,
            handleKeyDown: ee,
            hoveredAtX: et,
            maxSeekableX: en,
            isHovering: er,
            isDragging: el,
            dragX: ei,
            isHoverBeyondMax: ea,
            handleClick: eo,
            handleMouseDown: eu,
            ariaProps: es,
        } = (function (e) {
            let {
                    onScrubBack: t,
                    onScrubForward: n,
                    maxSeekableTime: r,
                    interactionEnabled: i,
                    durationSec: a,
                    onClick: o,
                    percent: s,
                    onDragStateChange: c,
                    onDragXChange: d,
                } = e,
                [v, g] = l.useState(null),
                [E, b] = l.useState(null),
                [y, P] = l.useState(!1),
                [S, C] = l.useState(!1),
                [A, w] = l.useState(null),
                [R, N] = l.useState(!1),
                { i18n: T } = (0, f.G9)(),
                L = l.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != s &&
                            "number" == typeof s &&
                            ((e["aria-valuenow"] = s),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = T.PERCENT_COMPLETE(Math.round(s)))),
                        e
                    );
                }, [s, T]),
                M = l.useMemo(() => (null == v || null == r ? null : (0, u.DX)(r, a, v)), [v, r, a]),
                k = (0, h.A)((e) => {
                    g(e.contentRect);
                }),
                j = (0, p.w)(k);
            function D(e) {
                if (null != j.current) {
                    let t = j.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        l = null != r ? (r / a) * t.width : null;
                    (N(null != l && n > l), b(n));
                }
            }
            let I = l.useRef(!1),
                B = l.useRef(null),
                F = (0, h.A)((e, t) => {
                    if (null == o) return;
                    let n = e - t.left,
                        l = (0, u.hc)(n, t, a);
                    (null != r && l > r) || o(l);
                }),
                $ = l.useCallback(
                    (e) => {
                        let { key: r } = e;
                        r === x.N$.ArrowLeft && null != t
                            ? (e.preventDefault(), e.stopPropagation(), t())
                            : r === x.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
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
                    boundingRect: v,
                    handleMouseEnter: function (e) {
                        i && (P(!0), D(e));
                    },
                    handleMouseLeave: function (e) {
                        i && !I.current && (P(!1), b(null), N(!1));
                    },
                    handleMouseMove: function (e) {
                        i && y && D(e);
                    },
                    handleMouseDown: function (e) {
                        if (!i || null == o || 0 !== e.button) return;
                        B.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, u.hc)(e.clientX - t.left, t, a);
                        if (null != r && n > r) return;
                        ((I.current = !0), C(!0), c?.(!0));
                        let l = Math.max(0, Math.min(e.clientX - t.left, t.width));
                        function s(e) {
                            if (null != j.current) {
                                let t = j.current.getBoundingClientRect(),
                                    n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                    l = null != r ? (r / a) * t.width : null,
                                    i = null != l ? Math.min(n, l) : n;
                                (N(null != l && n > l), b(n), w(i), d?.(i), F(e.clientX, t));
                            } else F(e.clientX, t);
                        }
                        function f(e) {
                            ((I.current = !1),
                                (B.current = null),
                                C(!1),
                                w(null),
                                c?.(!1),
                                N(!1),
                                null != j.current &&
                                    (((0, m.vq)(e.target, Node) && j.current.contains(e.target)) || (P(!1), b(null))),
                                window.removeEventListener("mousemove", s),
                                window.removeEventListener("mouseup", f));
                        }
                        (w(l),
                            d?.(l),
                            F(e.clientX, t),
                            window.addEventListener("mousemove", s),
                            window.addEventListener("mouseup", f),
                            (B.current = () => {
                                (window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", f));
                            }));
                    },
                    handleKeyDown: $,
                    hoveredAtX: E,
                    maxSeekableX: M,
                    isHovering: y,
                    isDragging: S,
                    dragX: A,
                    isHoverBeyondMax: R,
                    handleClick: function () {},
                    ariaProps: L,
                }
            );
        })({
            onScrubBack: F,
            onScrubForward: $,
            maxSeekableTime: T,
            interactionEnabled: d,
            durationSec: N,
            percent: n,
            onClick: B,
            onDragStateChange: G,
            onDragXChange: (e) => eh.set(e),
        }),
        ec = l.useMemo(() => (null == et || null == W ? null : (0, u.hc)(et, W, N)), [et, W, N]),
        ed = l.useMemo(() => (null == ec ? null : (0, u.rB)(ec)), [ec]),
        em = l.useMemo(() => (null == _ || null == ec ? null : (0, E.B8)(_, ec)), [_, ec]),
        ef = l.useMemo(() => {
            if (null != W) return (0, u.TO)(n, W);
        }, [n, W]),
        ep = W?.width != null && W?.width !== 0 ? W?.width : 1,
        [{ playbackPxSpring: eh }, ex] = (0, s.z)(() => ({ playbackPxSpring: 0, config: C })),
        ev = l.useRef(el);
    l.useLayoutEffect(() => {
        let e = ev.current;
        ((ev.current = el),
            e && !el && ex({ playbackPxSpring: null == ef || Number.isNaN(ef) ? 0 : ef, immediate: !0 }));
    }, [el, ef, ex]);
    let eg = l.useRef(null),
        eE = l.useRef(null),
        eb = l.useRef(null);
    l.useEffect(() => {
        if (!i || null == O || N <= 0 || ep <= 0) return;
        ((eE.current = eg.current ?? O()), (eb.current = performance.now()));
        let e = 0,
            t = !1;
        return (
            (e = requestAnimationFrame(function n() {
                if (t || null == O) return;
                let r = performance.now(),
                    l = eb.current;
                eb.current = r;
                let i = eE.current;
                if (null != i) {
                    i += null != l ? (r - l) / 1e3 : 0;
                    let e = O();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - i;
                        i = Math.abs(t) > 0.5 ? e : i + 0.1 * t;
                    }
                } else i = O() ?? null;
                if (null != i && Number.isFinite(i)) {
                    ((eE.current = i), (eg.current = i));
                    let e = Math.min(Math.max(0, (i / N) * ep), ep);
                    eh.set(e);
                }
                e = requestAnimationFrame(n);
            })),
            () => {
                ((t = !0), cancelAnimationFrame(e), (eE.current = null), (eb.current = null));
            }
        );
    }, [i, O, N, ep, eh]);
    let ey = i && null != O && N > 0;
    l.useEffect(() => {
        let e;
        if (!ey) {
            if (null != O && N > 0 && ep > 0) {
                let t = O();
                null != t && Number.isFinite(t) && ((eg.current = t), (e = Math.min(Math.max(0, (t / N) * ep), ep)));
            }
            (null == e && (e = null == ef || Number.isNaN(ef) ? 0 : ef), ex({ playbackPxSpring: e, immediate: !0 }));
        }
    }, [ef, ey, ex, O, N, ep]);
    let eP = N > 1,
        eS = H?.indicators,
        eC = l.useMemo(() => {
            let e;
            return null != eS && null != W && eP
                ? ((e = W.width),
                  eS.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, u.DX)(t.timeSec, N, W) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [eS, N, W, eP]),
        eA = l.useMemo(
            () =>
                (function (e, t) {
                    let n = [{ startPx: 0, endPx: e, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (null == t || 0 === t.length) return n;
                    for (let r = 0; r < t.length; r++) {
                        let l = Math.max(0, t[r].leftPx - t[r].gapPx),
                            i = Math.min(e, t[r].rightPx + t[r].gapPx),
                            a = n[n.length - 1];
                        (null != a && ((a.endPx = l), (a.rightIndicatorIndex = t[r].index)),
                            null != a && a.endPx <= a.startPx && n.pop(),
                            i < e &&
                                n.push({
                                    startPx: i,
                                    endPx: e,
                                    leftIndicatorIndex: t[r].index,
                                    rightIndicatorIndex: null,
                                }));
                    }
                    return n;
                })(ep, eC),
            [ep, eC],
        ),
        ew = H?.hoverExpansionPx ?? 0,
        eR = l.useCallback(
            (e) =>
                null != e &&
                null != eC &&
                eC.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (H?.animatingIndex === t.index ? ew : 0) &&
                        e <= t.rightPx + t.gapPx + (H?.animatingIndex === t.index ? ew : 0),
                ),
            [eC, H?.animatingIndex, ew],
        );
    return (0, r.jsx)("div", {
        className: y.jD,
        ref: Y,
        "data-testid": K,
        style: {
            "--custom-timeline-height": `${null != X && er ? X : V}px`,
            "--custom-initial-timeline-height": `${D ?? V}px`,
        },
        children: (0, r.jsxs)(c.D, {
            className: a()(y.KF, { [y.uc]: d }),
            style: ea ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: eo,
            onMouseDown: eu,
            onMouseEnter: q,
            onMouseLeave: Z,
            onMouseMove: J,
            onKeyDown: ee,
            tabIndex: d ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: y.PH,
                    ...es,
                    style: null != b ? { "--custom-segment-bg": b } : void 0,
                    children:
                        null != W &&
                        eA.map((e, t) =>
                            (0, r.jsx)(
                                S,
                                {
                                    segment: e,
                                    playbackPxSpring: eh,
                                    playerState: A,
                                    isDragging: el,
                                    dragX: ei,
                                    animatingIndex: H?.animatingIndex,
                                    expansionSpring: H?.expansionSpring,
                                    timelineWidth: ep,
                                    preloadedBuffers: R,
                                    maxSeekableX: en,
                                    segmentBorderRadius: k,
                                    progressClassName: L,
                                },
                                t,
                            ),
                        ),
                }),
                null != W &&
                    eC?.map((e) =>
                        H?.renderIndicator(
                            e,
                            null != ef && !Number.isNaN(ef) ? ef : 0,
                            !0 === e.source.clickable && null != U ? () => U(e.source.timeSec) : void 0,
                        ),
                    ),
                (0, r.jsx)(w, {
                    isHovering: er,
                    hoveredAtX: et,
                    hoveredTimeSec: ec,
                    formattedTime: ed,
                    isFullyVisible: t,
                    isInExclusionZone: eR,
                    scrubPreviewCue: em,
                    timelineWidthPx: ep,
                }),
                (er || I) &&
                    d &&
                    null != ef &&
                    !eR(el && null != ei ? ei : ef) &&
                    (0, r.jsx)(P, { playbackPxSpring: eh, isDragging: el, dragX: ei }),
            ],
        }),
    });
}
function w(e) {
    let {
        isHovering: t,
        hoveredAtX: n,
        hoveredTimeSec: l,
        formattedTime: i,
        isFullyVisible: a,
        isInExclusionZone: o,
        scrubPreviewCue: u,
        timelineWidthPx: s,
    } = e;
    return !t || null == n || !a || o(n)
        ? null
        : null != u && null != l
          ? (0, r.jsx)(E.wb, { cue: u, timeSec: l, cursorXPx: n, timelineWidthPx: s })
          : null == i
            ? null
            : (0, r.jsx)(d.E, {
                  className: y.Hz,
                  variant: "text-xs/normal",
                  color: "text-overlay-light",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: i,
              });
}
