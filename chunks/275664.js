(n.d(t, { Ay: () => A }), n(321073));
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    u = n(876230),
    o = n(61491),
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
    P = n(494154);
let S = l.memo(function (e) {
        let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
        return (0, r.jsx)(b.animated.div, {
            "data-testid": "discord-web-video-player-playhead",
            className: P.lG,
            style: { left: n && null != l ? `${l}px` : t.to((e) => `${e}px`) },
        });
    }),
    y = (e) => {
        let {
                segment: t,
                animatingIndex: n,
                playbackPxSpring: l,
                playerState: i,
                isDragging: o,
                dragX: s,
                expansionSpring: c,
                timelineWidth: d,
                bufferedRanges: m,
                maxSeekableX: f,
                segmentBorderRadius: p = 99,
                progressClassName: h,
            } = e,
            { startPx: x, endPx: v, leftIndicatorIndex: g, rightIndicatorIndex: E } = t,
            S = v - x,
            y = l.to((e) => Math.min(Math.max(0, e - x), S)),
            C = null != n && null != c && g === n,
            A = !C && null != n && null != c && E === n,
            w = C || A,
            R = o && null != s ? Math.min(Math.max(0, s - x), S) : null,
            { progressToPlayheadBarTransform: N, glowWidth: T } = (function (e) {
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
                dragFillWidth: R,
                shrinkEnd: A,
                isAnimating: w,
                fillWidthAnimated: y,
                expansionSpring: c,
            }),
            k = null != R ? (R <= 0 ? 0 : 1) : y.to((e) => (e <= 0 ? 0 : 1)),
            L = i !== u.Q6.ENDED,
            M = Math.max(0, (f ?? 0) - x),
            j = m.filter((e) => e.endPx >= x && e.startPx <= v),
            D = { borderRadius: `${p}px` };
        return (0, r.jsxs)(b.animated.div, {
            className: a()(P.Td, h),
            style: {
                left: C ? c.to((e) => x + e) : x,
                width: w ? c.to((e) => S - e) : S,
                "--custom-r-left": l.to((e) => (0 === x || e >= x ? "99px" : "0px")),
                "--custom-r-right": l.to((e) => (v >= d || e >= v ? "99px" : "0px")),
                "--custom-timeline-width": `${d}px`,
            },
            children: [
                (0, r.jsxs)("div", {
                    className: P.MI,
                    children: [
                        (0, r.jsxs)(b.animated.div, {
                            className: P._I,
                            style: { left: C ? c.to((e) => -(x + e)) : -x },
                            children: [
                                j.map((e) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: P.Zn,
                                            style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...D },
                                        },
                                        `${e.startPx}:${e.endPx}`,
                                    ),
                                ),
                                M > 0 &&
                                    (0, r.jsx)("div", {
                                        className: P.YK,
                                        style: { width: `${M}px`, opacity: 1, ...D },
                                    }),
                            ],
                        }),
                        (0, r.jsx)(b.animated.div, { className: P.wx, style: { transform: N, opacity: k } }),
                    ],
                }),
                L && (0, r.jsx)(b.animated.div, { className: P.fk, style: { width: T, opacity: k } }),
            ],
        });
    };
P.f5;
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
            progressClassName: k,
            timelineHeightPx: L,
            segmentBorderRadius: M,
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
        z = Q?.controlBarConfig ?? g.X4[u.oA.MD],
        X = L ?? z.timelineHeightPx,
        V = j ?? (null == L ? z.hoverTimelineHeightPx : void 0),
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
            handleClick: eu,
            handleMouseDown: eo,
            ariaProps: es,
        } = (function (e) {
            let {
                    onScrubBack: t,
                    onScrubForward: n,
                    maxSeekableTime: r,
                    interactionEnabled: i,
                    durationSec: a,
                    onClick: u,
                    percent: s,
                    onDragStateChange: c,
                    onDragXChange: d,
                } = e,
                [v, g] = l.useState(null),
                [E, b] = l.useState(null),
                [P, S] = l.useState(!1),
                [y, C] = l.useState(!1),
                [A, w] = l.useState(null),
                [R, N] = l.useState(!1),
                { i18n: T } = (0, f.G9)(),
                k = l.useMemo(() => {
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
                L = l.useMemo(() => (null == v || null == r ? null : (0, o.DX)(r, a, v)), [v, r, a]),
                M = (0, h.A)((e) => {
                    g(e.contentRect);
                }),
                j = (0, p.w)(M);
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
                    if (null == u) return;
                    let n = e - t.left,
                        l = (0, o.hc)(n, t, a);
                    (null != r && l > r) || u(l);
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
                        i && (S(!0), D(e));
                    },
                    handleMouseLeave: function (e) {
                        i && !I.current && (S(!1), b(null), N(!1));
                    },
                    handleMouseMove: function (e) {
                        i && P && D(e);
                    },
                    handleMouseDown: function (e) {
                        if (!i || null == u || 0 !== e.button) return;
                        B.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, o.hc)(e.clientX - t.left, t, a);
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
                                    (((0, m.vq)(e.target, Node) && j.current.contains(e.target)) || (S(!1), b(null))),
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
                    maxSeekableX: L,
                    isHovering: P,
                    isDragging: y,
                    dragX: A,
                    isHoverBeyondMax: R,
                    handleClick: function () {},
                    ariaProps: k,
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
            onDragXChange: (e) => ex.set(e),
        }),
        ec = l.useMemo(() => (null == et || null == W ? null : (0, o.hc)(et, W, N)), [et, W, N]),
        ed = l.useMemo(() => (null == ec ? null : (0, o.rB)(ec)), [ec]),
        em = l.useMemo(() => (null == _ || null == ec ? null : (0, E.B8)(_, ec)), [_, ec]),
        ef = l.useMemo(() => {
            if (null != W) return (0, o.TO)(n, W);
        }, [n, W]),
        ep = W?.width != null && W?.width !== 0 ? W?.width : 1,
        eh = l.useMemo(() => R?.map((e) => ({ startPx: e.start * ep, endPx: (e.start + e.size) * ep })) ?? [], [R, ep]),
        [{ playbackPxSpring: ex }, ev] = (0, s.z)(() => ({ playbackPxSpring: 0, config: C })),
        eg = l.useRef(el);
    l.useLayoutEffect(() => {
        let e = eg.current;
        ((eg.current = el),
            e && !el && ev({ playbackPxSpring: null == ef || Number.isNaN(ef) ? 0 : ef, immediate: !0 }));
    }, [el, ef, ev]);
    let eE = l.useRef(null),
        eb = l.useRef(null),
        eP = l.useRef(null);
    l.useEffect(() => {
        if (!i || null == O || N <= 0 || ep <= 0) return;
        ((eb.current = eE.current ?? O()), (eP.current = performance.now()));
        let e = 0,
            t = !1;
        return (
            (e = requestAnimationFrame(function n() {
                if (t || null == O) return;
                let r = performance.now(),
                    l = eP.current;
                eP.current = r;
                let i = eb.current;
                if (null != i) {
                    i += null != l ? (r - l) / 1e3 : 0;
                    let e = O();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - i;
                        i = Math.abs(t) > 0.5 ? e : i + 0.1 * t;
                    }
                } else i = O() ?? null;
                if (null != i && Number.isFinite(i)) {
                    ((eb.current = i), (eE.current = i));
                    let e = Math.min(Math.max(0, (i / N) * ep), ep);
                    ex.set(e);
                }
                e = requestAnimationFrame(n);
            })),
            () => {
                ((t = !0), cancelAnimationFrame(e), (eb.current = null), (eP.current = null));
            }
        );
    }, [i, O, N, ep, ex]);
    let eS = i && null != O && N > 0;
    l.useEffect(() => {
        let e;
        if (!eS) {
            if (null != O && N > 0 && ep > 0) {
                let t = O();
                null != t && Number.isFinite(t) && ((eE.current = t), (e = Math.min(Math.max(0, (t / N) * ep), ep)));
            }
            (null == e && (e = null == ef || Number.isNaN(ef) ? 0 : ef), ev({ playbackPxSpring: e, immediate: !0 }));
        }
    }, [ef, eS, ev, O, N, ep]);
    let ey = N > 1,
        eC = H?.indicators,
        eA = l.useMemo(() => {
            let e;
            return null != eC && null != W && ey
                ? ((e = W.width),
                  eC.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, o.DX)(t.timeSec, N, W) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [eC, N, W, ey]),
        ew = l.useMemo(
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
                })(ep, eA),
            [ep, eA],
        ),
        eR = H?.hoverExpansionPx ?? 0,
        eN = l.useCallback(
            (e) =>
                null != e &&
                null != eA &&
                eA.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (H?.animatingIndex === t.index ? eR : 0) &&
                        e <= t.rightPx + t.gapPx + (H?.animatingIndex === t.index ? eR : 0),
                ),
            [eA, H?.animatingIndex, eR],
        );
    return (0, r.jsx)("div", {
        className: P.jD,
        ref: Y,
        "data-testid": K,
        style: {
            "--custom-timeline-height": `${null != V && er ? V : X}px`,
            "--custom-initial-timeline-height": `${D ?? X}px`,
            "--custom-timeline-track-background": b,
        },
        children: (0, r.jsxs)(c.D, {
            className: a()(P.KF, { [P.uc]: d }),
            style: ea ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: eu,
            onMouseDown: eo,
            onMouseEnter: q,
            onMouseLeave: Z,
            onMouseMove: J,
            onKeyDown: ee,
            tabIndex: d ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: P.PH,
                    ...es,
                    children:
                        null != W &&
                        ew.map((e, t) =>
                            (0, r.jsx)(
                                y,
                                {
                                    segment: e,
                                    playbackPxSpring: ex,
                                    playerState: A,
                                    isDragging: el,
                                    dragX: ei,
                                    animatingIndex: H?.animatingIndex,
                                    expansionSpring: H?.expansionSpring,
                                    timelineWidth: ep,
                                    bufferedRanges: eh,
                                    maxSeekableX: en,
                                    segmentBorderRadius: M,
                                    progressClassName: k,
                                },
                                t,
                            ),
                        ),
                }),
                null != W &&
                    eA?.map((e) => {
                        var t;
                        return H?.renderIndicator(
                            e,
                            null != ef && !Number.isNaN(ef) ? ef : 0,
                            !0 === e.source.clickable && null != U ? () => U(e.source.timeSec) : void 0,
                            ((t = (0, o.DX)(e.source.timeSec, N, W)),
                            null != en && t < en
                                ? "var(--custom-timeline-seekable-background)"
                                : eh.some((e) => e.startPx <= t && t <= e.endPx)
                                  ? "var(--custom-timeline-buffered-background)"
                                  : "var(--custom-timeline-track-background)"),
                        );
                    }),
                (0, r.jsx)(w, {
                    isHovering: er,
                    hoveredAtX: et,
                    hoveredTimeSec: ec,
                    formattedTime: ed,
                    isFullyVisible: t,
                    isInExclusionZone: eN,
                    scrubPreviewCue: em,
                    timelineWidthPx: ep,
                }),
                (er || I) &&
                    d &&
                    null != ef &&
                    !eN(el && null != ei ? ei : ef) &&
                    (0, r.jsx)(S, { playbackPxSpring: ex, isDragging: el, dragX: ei }),
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
        isInExclusionZone: u,
        scrubPreviewCue: o,
        timelineWidthPx: s,
    } = e;
    return !t || null == n || !a || u(n)
        ? null
        : null != o && null != l
          ? (0, r.jsx)(E.wb, { cue: o, timeSec: l, cursorXPx: n, timelineWidthPx: s })
          : null == i
            ? null
            : (0, r.jsx)(d.E, {
                  className: P.Hz,
                  variant: "text-xs/normal",
                  color: "text-overlay-light",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: i,
              });
}
