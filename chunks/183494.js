n.d(t, { Ay: () => p }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(445887),
    u = n(876230),
    o = n(61491),
    c = n(397927),
    d = n(972441),
    m = n(645871),
    f = n(716277);
let h = { tension: 300, friction: 30, clamp: !0 };
function p(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: p,
            backgroundColor: x,
            playerState: E,
            preloadedBuffers: b,
            durationSec: v,
            maxSeekableTime: g,
            progressGlow: y,
            progressFillClassName: S,
            glowClassName: C,
            timelineHeightPx: A = 4,
            segmentBorderRadius: N,
            hoverTimelineHeightPx: R,
            initialTimelineHeightPx: w = A,
            persistGrabber: T = !0,
            onClick: L,
            onScrubBack: j,
            onScrubForward: P,
            onDragStateChange: D,
            indicatorConfig: M,
            "data-testid": k,
        } = e,
        {
            contRef: I,
            boundingRect: B,
            handleMouseEnter: U,
            handleMouseLeave: G,
            handleMouseMove: $,
            handleKeyDown: O,
            hoveredAtX: Q,
            maxSeekableX: F,
            isHovering: _,
            isDragging: Y,
            dragX: K,
            isHoverBeyondMax: X,
            handleClick: z,
            handleMouseDown: W,
            ariaProps: V,
        } = (0, d.A)({
            onScrubBack: j,
            onScrubForward: P,
            maxSeekableTime: g,
            interactionEnabled: p,
            durationSec: v,
            percent: n,
            onClick: L,
            onDragStateChange: D,
        }),
        H = l.useMemo(() => (null == Q || null == B ? null : (0, o.rB)((0, o.hc)(Q, B, v))), [Q, B, v]),
        J = l.useMemo(() => {
            if (null != B) return (0, o.TO)(n, B);
        }, [n, B]),
        Z = B?.width != null && B?.width !== 0 ? B?.width : 1,
        [{ playbackPxSpring: q }, ee] = (0, c.zhh)(() => ({ playbackPxSpring: 0, config: h })),
        et = l.useRef(null),
        en = l.useRef(!1),
        er = l.useRef(a);
    l.useLayoutEffect(() => {
        let e = er.current;
        if (((er.current = a), e && !a && E !== u.Q6.PLAYING && null != et.current)) {
            let e = parseFloat(getComputedStyle(et.current).left);
            Number.isNaN(e) || ((et.current.style.left = `${e}px`), ee({ playbackPxSpring: e, immediate: !0 })),
                (en.current = !0);
        } else if (!e && a && null != et.current) {
            let e = null == J || Number.isNaN(J) ? 0 : J,
                t = v > 0 ? Math.min(e + (Z / v) * 0.275, Z) : e;
            (et.current.style.left = `${e}px`), ee({ playbackPxSpring: t, immediate: !0 });
        }
    }, [a, ee, J, E, v, Z]);
    let el = l.useRef(Y);
    l.useLayoutEffect(() => {
        let e = el.current;
        (el.current = Y), e && !Y && ee({ playbackPxSpring: null == J || Number.isNaN(J) ? 0 : J, immediate: !0 });
    }, [Y, J, ee]),
        l.useEffect(() => {
            if (en.current) {
                en.current = !1;
                return;
            }
            let e = null == J || Number.isNaN(J) ? 0 : J;
            a && v > 0
                ? ee({ playbackPxSpring: Math.min(e + (Z / v) * 0.275, Z), immediate: !0 })
                : ee({ playbackPxSpring: e, immediate: !0 });
        }, [J, a, ee, Z, v]);
    let ea = v > 1,
        ei = M?.indicators,
        es = l.useMemo(() => {
            let e;
            return null != ei && null != B && ea
                ? ((e = B.width),
                  ei.map((t) => {
                      let n = Math.max(0, Math.min((0, o.DX)(t.timeSec, v, B) - t.widthPx / 2, e - t.widthPx));
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ei, v, B, ea]),
        eu = l.useMemo(
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
                })(Z, es),
            [Z, es],
        ),
        eo = M?.hoverExpansionPx ?? 0,
        ec = l.useCallback(
            (e) =>
                null != e &&
                null != es &&
                es.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (M?.animatingIndex === t.index ? eo : 0) &&
                        e <= t.rightPx + t.gapPx + (M?.animatingIndex === t.index ? eo : 0),
                ),
            [es, M?.animatingIndex, eo],
        );
    return (0, r.jsx)("div", {
        className: i()(f.jD, { [f.we]: a }),
        ref: I,
        "data-testid": k,
        style: {
            "--custom-timeline-height": `${null != R && _ ? R : A}px`,
            "--custom-initial-timeline-height": `${w}px`,
            "--custom-playback-transition-duration": "275ms",
        },
        children: (0, r.jsxs)(c.DUT, {
            className: i()(f.KF, { [f.uc]: p }),
            style: X ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: z,
            onMouseDown: W,
            onMouseEnter: U,
            onMouseLeave: G,
            onMouseMove: $,
            onKeyDown: O,
            tabIndex: p ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: f.G9,
                    ...V,
                    style: null != x ? { "--custom-segment-bg": x } : void 0,
                    children:
                        null != B &&
                        eu.map((e, t) =>
                            (0, r.jsx)(
                                m.A,
                                {
                                    segment: e,
                                    playbackPxSpring: q,
                                    animate: a,
                                    playerState: E,
                                    isDragging: Y,
                                    dragX: K,
                                    animatingIndex: M?.animatingIndex,
                                    expansionSpring: M?.expansionSpring,
                                    timelineWidth: Z,
                                    preloadedBuffers: b,
                                    maxSeekableX: F,
                                    segmentBorderRadius: N,
                                    progressFillClassName: S ?? f.UA,
                                    glowClassName: C ?? f.pN,
                                    showGlow: y && E !== u.Q6.ENDED && null != J && J > e.startPx,
                                },
                                t,
                            ),
                        ),
                }),
                null != B && es?.map((e) => M?.renderIndicator(e, null != J && !Number.isNaN(J) ? J : 0)),
                _ &&
                    null != H &&
                    t &&
                    !ec(Q) &&
                    (0, r.jsx)(c.Text, {
                        className: f.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != Q ? `${Q}px` : "auto" },
                        children: H,
                    }),
                (_ || T) &&
                    p &&
                    null != J &&
                    !ec(Y && null != K ? K : J) &&
                    (0, r.jsx)(s.animated.div, {
                        ref: et,
                        className: f.Ub,
                        style: { left: Y && null != K ? `${K}px` : q.to((e) => `${e}px`) },
                    }),
            ],
        }),
    });
}
