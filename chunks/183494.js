n.d(t, { Ay: () => p }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(876230),
    o = n(61491),
    c = n(397927),
    d = n(972441),
    m = n(645871),
    f = n(6821);
f.f5;
let h = { tension: 300, friction: 30, clamp: !0 };
function p(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: p,
            backgroundColor: E,
            playerState: x,
            preloadedBuffers: v,
            durationSec: b,
            maxSeekableTime: g,
            progressClassName: y,
            timelineHeightPx: S = 4,
            segmentBorderRadius: A,
            hoverTimelineHeightPx: C,
            initialTimelineHeightPx: N = S,
            persistPlayhead: R = !0,
            onClick: L,
            onScrubBack: w,
            onScrubForward: T,
            onDragStateChange: P,
            indicatorConfig: D,
            "data-testid": j,
        } = e,
        {
            contRef: M,
            boundingRect: k,
            handleMouseEnter: I,
            handleMouseLeave: B,
            handleMouseMove: U,
            handleKeyDown: F,
            hoveredAtX: G,
            maxSeekableX: Q,
            isHovering: $,
            isDragging: O,
            dragX: _,
            isHoverBeyondMax: K,
            handleClick: Y,
            handleMouseDown: X,
            ariaProps: z,
        } = (0, d.A)({
            onScrubBack: w,
            onScrubForward: T,
            maxSeekableTime: g,
            interactionEnabled: p,
            durationSec: b,
            percent: n,
            onClick: L,
            onDragStateChange: P,
        }),
        V = l.useMemo(() => (null == G || null == k ? null : (0, o.rB)((0, o.hc)(G, k, b))), [G, k, b]),
        W = l.useMemo(() => {
            if (null != k) return (0, o.TO)(n, k);
        }, [n, k]),
        H = k?.width != null && k?.width !== 0 ? k?.width : 1,
        [{ playbackPxSpring: Z }, J] = (0, c.zhh)(() => ({ playbackPxSpring: 0, config: h })),
        q = l.useRef(null),
        ee = l.useRef(!1),
        et = l.useRef(a);
    l.useLayoutEffect(() => {
        let e = et.current;
        if (((et.current = a), e && !a && x !== u.Q6.PLAYING && null != q.current)) {
            let e = parseFloat(getComputedStyle(q.current).left);
            Number.isNaN(e) || ((q.current.style.left = `${e}px`), J({ playbackPxSpring: e, immediate: !0 })),
                (ee.current = !0);
        } else if (!e && a && null != q.current) {
            let e = null == W || Number.isNaN(W) ? 0 : W,
                t = b > 0 ? Math.min(e + (H / b) * 0.275, H) : e;
            (q.current.style.left = `${e}px`), J({ playbackPxSpring: t, immediate: !0 });
        }
    }, [a, J, W, x, b, H]);
    let en = l.useRef(O);
    l.useLayoutEffect(() => {
        let e = en.current;
        (en.current = O), e && !O && J({ playbackPxSpring: null == W || Number.isNaN(W) ? 0 : W, immediate: !0 });
    }, [O, W, J]),
        l.useEffect(() => {
            if (ee.current) {
                ee.current = !1;
                return;
            }
            let e = null == W || Number.isNaN(W) ? 0 : W;
            a && b > 0
                ? J({ playbackPxSpring: Math.min(e + (H / b) * 0.275, H), immediate: !0 })
                : J({ playbackPxSpring: e, immediate: !0 });
        }, [W, a, J, H, b]);
    let er = b > 1,
        el = D?.indicators,
        ea = l.useMemo(() => {
            let e;
            return null != el && null != k && er
                ? ((e = k.width),
                  el.map((t) => {
                      let n = Math.max(0, Math.min((0, o.DX)(t.timeSec, b, k) - t.widthPx / 2, e - t.widthPx));
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [el, b, k, er]),
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
        es = D?.hoverExpansionPx ?? 0,
        eu = l.useCallback(
            (e) =>
                null != e &&
                null != ea &&
                ea.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (D?.animatingIndex === t.index ? es : 0) &&
                        e <= t.rightPx + t.gapPx + (D?.animatingIndex === t.index ? es : 0),
                ),
            [ea, D?.animatingIndex, es],
        );
    return (0, r.jsx)("div", {
        className: i()(f.jD, { [f.we]: a }),
        ref: M,
        "data-testid": j,
        style: {
            "--custom-timeline-height": `${null != C && $ ? C : S}px`,
            "--custom-initial-timeline-height": `${N}px`,
            "--custom-playback-transition-duration": "275ms",
        },
        children: (0, r.jsxs)(c.DUT, {
            className: i()(f.KF, { [f.uc]: p }),
            style: K ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: Y,
            onMouseDown: X,
            onMouseEnter: I,
            onMouseLeave: B,
            onMouseMove: U,
            onKeyDown: F,
            tabIndex: p ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: f.PH,
                    ...z,
                    style: null != E ? { "--custom-segment-bg": E } : void 0,
                    children:
                        null != k &&
                        ei.map((e, t) =>
                            (0, r.jsx)(
                                m.A,
                                {
                                    segment: e,
                                    playbackPxSpring: Z,
                                    animate: a,
                                    playerState: x,
                                    isDragging: O,
                                    dragX: _,
                                    animatingIndex: D?.animatingIndex,
                                    expansionSpring: D?.expansionSpring,
                                    timelineWidth: H,
                                    preloadedBuffers: v,
                                    maxSeekableX: Q,
                                    segmentBorderRadius: A,
                                    progressClassName: y,
                                },
                                t,
                            ),
                        ),
                }),
                null != k && ea?.map((e) => D?.renderIndicator(e, null != W && !Number.isNaN(W) ? W : 0)),
                $ &&
                    null != V &&
                    t &&
                    !eu(G) &&
                    (0, r.jsx)(c.Text, {
                        className: f.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != G ? `${G}px` : "auto" },
                        children: V,
                    }),
                ($ || R) &&
                    p &&
                    null != W &&
                    !eu(O && null != _ ? _ : W) &&
                    (0, r.jsx)(s.animated.div, {
                        ref: q,
                        className: f.lG,
                        style: { left: O && null != _ ? `${_}px` : Z.to((e) => `${e}px`) },
                    }),
            ],
        }),
    });
}
