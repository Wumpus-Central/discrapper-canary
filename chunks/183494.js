n.d(t, { Ay: () => p }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(407045),
    u = n(876230),
    o = n(61491),
    c = n(397927),
    d = n(972441),
    m = n(645871),
    f = n(6821);
f.$9;
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
            progressClassName: y,
            timelineHeightPx: S = 4,
            segmentBorderRadius: C,
            hoverTimelineHeightPx: A,
            initialTimelineHeightPx: N = S,
            persistGrabber: R = !0,
            onClick: w,
            onScrubBack: T,
            onScrubForward: L,
            onDragStateChange: j,
            indicatorConfig: P,
            "data-testid": D,
        } = e,
        {
            contRef: M,
            boundingRect: k,
            handleMouseEnter: I,
            handleMouseLeave: B,
            handleMouseMove: U,
            handleKeyDown: G,
            hoveredAtX: $,
            maxSeekableX: O,
            isHovering: Q,
            isDragging: F,
            dragX: _,
            isHoverBeyondMax: Y,
            handleClick: K,
            handleMouseDown: X,
            ariaProps: z,
        } = (0, d.A)({
            onScrubBack: T,
            onScrubForward: L,
            maxSeekableTime: g,
            interactionEnabled: p,
            durationSec: v,
            percent: n,
            onClick: w,
            onDragStateChange: j,
        }),
        V = l.useMemo(() => (null == $ || null == k ? null : (0, o.rB)((0, o.hc)($, k, v))), [$, k, v]),
        W = l.useMemo(() => {
            if (null != k) return (0, o.TO)(n, k);
        }, [n, k]),
        H = k?.width != null && k?.width !== 0 ? k?.width : 1,
        [{ playbackPxSpring: J }, Z] = (0, c.zhh)(() => ({ playbackPxSpring: 0, config: h })),
        q = l.useRef(null),
        ee = l.useRef(!1),
        et = l.useRef(a);
    l.useLayoutEffect(() => {
        let e = et.current;
        if (((et.current = a), e && !a && E !== u.Q6.PLAYING && null != q.current)) {
            let e = parseFloat(getComputedStyle(q.current).left);
            Number.isNaN(e) || ((q.current.style.left = `${e}px`), Z({ playbackPxSpring: e, immediate: !0 })),
                (ee.current = !0);
        } else if (!e && a && null != q.current) {
            let e = null == W || Number.isNaN(W) ? 0 : W,
                t = v > 0 ? Math.min(e + (H / v) * 0.275, H) : e;
            (q.current.style.left = `${e}px`), Z({ playbackPxSpring: t, immediate: !0 });
        }
    }, [a, Z, W, E, v, H]);
    let en = l.useRef(F);
    l.useLayoutEffect(() => {
        let e = en.current;
        (en.current = F), e && !F && Z({ playbackPxSpring: null == W || Number.isNaN(W) ? 0 : W, immediate: !0 });
    }, [F, W, Z]),
        l.useEffect(() => {
            if (ee.current) {
                ee.current = !1;
                return;
            }
            let e = null == W || Number.isNaN(W) ? 0 : W;
            a && v > 0
                ? Z({ playbackPxSpring: Math.min(e + (H / v) * 0.275, H), immediate: !0 })
                : Z({ playbackPxSpring: e, immediate: !0 });
        }, [W, a, Z, H, v]);
    let er = v > 1,
        el = P?.indicators,
        ea = l.useMemo(() => {
            let e;
            return null != el && null != k && er
                ? ((e = k.width),
                  el.map((t) => {
                      let n = Math.max(0, Math.min((0, o.DX)(t.timeSec, v, k) - t.widthPx / 2, e - t.widthPx));
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [el, v, k, er]),
        ei = l.useMemo(
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
                })(H, ea),
            [H, ea],
        ),
        es = P?.hoverExpansionPx ?? 0,
        eu = l.useCallback(
            (e) =>
                null != e &&
                null != ea &&
                ea.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (P?.animatingIndex === t.index ? es : 0) &&
                        e <= t.rightPx + t.gapPx + (P?.animatingIndex === t.index ? es : 0),
                ),
            [ea, P?.animatingIndex, es],
        );
    return (0, r.jsx)("div", {
        className: i()(f.jD, { [f.we]: a }),
        ref: M,
        "data-testid": D,
        style: {
            "--custom-timeline-height": `${null != A && Q ? A : S}px`,
            "--custom-initial-timeline-height": `${N}px`,
            "--custom-playback-transition-duration": "275ms",
        },
        children: (0, r.jsxs)(c.DUT, {
            className: i()(f.KF, { [f.uc]: p }),
            style: Y ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: K,
            onMouseDown: X,
            onMouseEnter: I,
            onMouseLeave: B,
            onMouseMove: U,
            onKeyDown: G,
            tabIndex: p ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: f.G9,
                    ...z,
                    style: null != x ? { "--custom-segment-bg": x } : void 0,
                    children:
                        null != k &&
                        ei.map((e, t) =>
                            (0, r.jsx)(
                                m.A,
                                {
                                    segment: e,
                                    playbackPxSpring: J,
                                    animate: a,
                                    playerState: E,
                                    isDragging: F,
                                    dragX: _,
                                    animatingIndex: P?.animatingIndex,
                                    expansionSpring: P?.expansionSpring,
                                    timelineWidth: H,
                                    preloadedBuffers: b,
                                    maxSeekableX: O,
                                    segmentBorderRadius: C,
                                    progressClassName: y,
                                },
                                t,
                            ),
                        ),
                }),
                null != k && ea?.map((e) => P?.renderIndicator(e, null != W && !Number.isNaN(W) ? W : 0)),
                Q &&
                    null != V &&
                    t &&
                    !eu($) &&
                    (0, r.jsx)(c.Text, {
                        className: f.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != $ ? `${$}px` : "auto" },
                        children: V,
                    }),
                (Q || R) &&
                    p &&
                    null != W &&
                    !eu(F && null != _ ? _ : W) &&
                    (0, r.jsx)(s.animated.div, {
                        ref: q,
                        className: f.Ub,
                        style: { left: F && null != _ ? `${_}px` : J.to((e) => `${e}px`) },
                    }),
            ],
        }),
    });
}
