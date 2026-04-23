n.d(t, { Ay: () => E }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(356197),
    u = n(61491),
    o = n(717421),
    c = n(939249),
    d = n(834730),
    m = n(972441),
    f = n(645871),
    h = n(6821);
h.f5;
let p = { tension: 300, friction: 30, clamp: !0 };
function E(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: E,
            backgroundColor: v,
            playerState: x,
            preloadedBuffers: b,
            durationSec: g,
            maxSeekableTime: y,
            progressClassName: A,
            timelineHeightPx: C = 4,
            segmentBorderRadius: S,
            hoverTimelineHeightPx: N,
            initialTimelineHeightPx: R = C,
            persistPlayhead: L = !0,
            onClick: w,
            onScrubBack: T,
            onScrubForward: P,
            onDragStateChange: D,
            indicatorConfig: M,
            getCurrentTimeSec: j,
            "data-testid": k,
        } = e,
        {
            contRef: I,
            boundingRect: B,
            handleMouseEnter: F,
            handleMouseLeave: U,
            handleMouseMove: G,
            handleKeyDown: Q,
            hoveredAtX: O,
            maxSeekableX: _,
            isHovering: K,
            isDragging: $,
            dragX: Y,
            isHoverBeyondMax: X,
            handleClick: z,
            handleMouseDown: V,
            ariaProps: W,
        } = (0, m.A)({
            onScrubBack: T,
            onScrubForward: P,
            maxSeekableTime: y,
            interactionEnabled: E,
            durationSec: g,
            percent: n,
            onClick: w,
            onDragStateChange: D,
        }),
        H = l.useMemo(() => (null == O || null == B ? null : (0, u.rB)((0, u.hc)(O, B, g))), [O, B, g]),
        Z = l.useMemo(() => {
            if (null != B) return (0, u.TO)(n, B);
        }, [n, B]),
        J = B?.width != null && B?.width !== 0 ? B?.width : 1,
        [{ playbackPxSpring: q }, ee] = (0, o.z)(() => ({ playbackPxSpring: 0, config: p })),
        et = l.useRef(null),
        en = l.useRef($);
    l.useLayoutEffect(() => {
        let e = en.current;
        (en.current = $), e && !$ && ee({ playbackPxSpring: null == Z || Number.isNaN(Z) ? 0 : Z, immediate: !0 });
    }, [$, Z, ee]);
    let er = l.useRef(null),
        el = l.useRef(null),
        ea = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == j || g <= 0 || J <= 0) return;
        (el.current = er.current ?? j()), (ea.current = performance.now());
        let e = 0,
            t = () => {
                let n = performance.now(),
                    r = ea.current;
                ea.current = n;
                let l = el.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = j();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = j() ?? null;
                null != l &&
                    Number.isFinite(l) &&
                    ((el.current = l),
                    (er.current = l),
                    ee({ playbackPxSpring: Math.min(Math.max(0, (l / g) * J), J), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            };
        return (
            (e = requestAnimationFrame(t)),
            () => {
                cancelAnimationFrame(e), (el.current = null), (ea.current = null);
            }
        );
    }, [a, j, g, J, ee]);
    let ei = a && null != j && g > 0;
    l.useEffect(() => {
        let e;
        if (!ei) {
            if (null != j && g > 0 && J > 0) {
                let t = j();
                null != t && Number.isFinite(t) && ((er.current = t), (e = Math.min(Math.max(0, (t / g) * J), J)));
            }
            null == e && (e = null == Z || Number.isNaN(Z) ? 0 : Z), ee({ playbackPxSpring: e, immediate: !0 });
        }
    }, [Z, ei, ee, j, g, J]);
    let es = g > 1,
        eu = M?.indicators,
        eo = l.useMemo(() => {
            let e;
            return null != eu && null != B && es
                ? ((e = B.width),
                  eu.map((t) => {
                      let n = Math.max(0, Math.min((0, u.DX)(t.timeSec, g, B) - t.widthPx / 2, e - t.widthPx));
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [eu, g, B, es]),
        ec = l.useMemo(
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
                })(J, eo),
            [J, eo],
        ),
        ed = M?.hoverExpansionPx ?? 0,
        em = l.useCallback(
            (e) =>
                null != e &&
                null != eo &&
                eo.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (M?.animatingIndex === t.index ? ed : 0) &&
                        e <= t.rightPx + t.gapPx + (M?.animatingIndex === t.index ? ed : 0),
                ),
            [eo, M?.animatingIndex, ed],
        );
    return (0, r.jsx)("div", {
        className: h.jD,
        ref: I,
        "data-testid": k,
        style: {
            "--custom-timeline-height": `${null != N && K ? N : C}px`,
            "--custom-initial-timeline-height": `${R}px`,
        },
        children: (0, r.jsxs)(c.D, {
            className: i()(h.KF, { [h.uc]: E }),
            style: X ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: z,
            onMouseDown: V,
            onMouseEnter: F,
            onMouseLeave: U,
            onMouseMove: G,
            onKeyDown: Q,
            tabIndex: E ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: h.PH,
                    ...W,
                    style: null != v ? { "--custom-segment-bg": v } : void 0,
                    children:
                        null != B &&
                        ec.map((e, t) =>
                            (0, r.jsx)(
                                f.A,
                                {
                                    segment: e,
                                    playbackPxSpring: q,
                                    playerState: x,
                                    isDragging: $,
                                    dragX: Y,
                                    animatingIndex: M?.animatingIndex,
                                    expansionSpring: M?.expansionSpring,
                                    timelineWidth: J,
                                    preloadedBuffers: b,
                                    maxSeekableX: _,
                                    segmentBorderRadius: S,
                                    progressClassName: A,
                                },
                                t,
                            ),
                        ),
                }),
                null != B && eo?.map((e) => M?.renderIndicator(e, null != Z && !Number.isNaN(Z) ? Z : 0)),
                K &&
                    null != H &&
                    t &&
                    !em(O) &&
                    (0, r.jsx)(d.E, {
                        className: h.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != O ? `${O}px` : "auto" },
                        children: H,
                    }),
                (K || L) &&
                    E &&
                    null != Z &&
                    !em($ && null != Y ? Y : Z) &&
                    (0, r.jsx)(s.animated.div, {
                        ref: et,
                        "data-testid": "discord-web-video-player-playhead",
                        className: h.lG,
                        style: { left: $ && null != Y ? `${Y}px` : q.to((e) => `${e}px`) },
                    }),
            ],
        }),
    });
}
