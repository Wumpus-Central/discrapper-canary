n.d(t, { Ay: () => h }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(825638),
    u = n(61491),
    o = n(397927),
    c = n(972441),
    d = n(645871),
    m = n(6821);
m.f5;
let f = { tension: 300, friction: 30, clamp: !0 };
function h(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: h,
            backgroundColor: p,
            playerState: E,
            preloadedBuffers: x,
            durationSec: v,
            maxSeekableTime: b,
            progressClassName: g,
            timelineHeightPx: y = 4,
            segmentBorderRadius: A,
            hoverTimelineHeightPx: C,
            initialTimelineHeightPx: S = y,
            persistPlayhead: N = !0,
            onClick: R,
            onScrubBack: L,
            onScrubForward: w,
            onDragStateChange: T,
            indicatorConfig: P,
            getCurrentTimeSec: D,
            "data-testid": M,
        } = e,
        {
            contRef: j,
            boundingRect: k,
            handleMouseEnter: I,
            handleMouseLeave: B,
            handleMouseMove: U,
            handleKeyDown: F,
            hoveredAtX: G,
            maxSeekableX: Q,
            isHovering: O,
            isDragging: $,
            dragX: _,
            isHoverBeyondMax: K,
            handleClick: Y,
            handleMouseDown: X,
            ariaProps: z,
        } = (0, c.A)({
            onScrubBack: L,
            onScrubForward: w,
            maxSeekableTime: b,
            interactionEnabled: h,
            durationSec: v,
            percent: n,
            onClick: R,
            onDragStateChange: T,
        }),
        V = l.useMemo(() => (null == G || null == k ? null : (0, u.rB)((0, u.hc)(G, k, v))), [G, k, v]),
        W = l.useMemo(() => {
            if (null != k) return (0, u.TO)(n, k);
        }, [n, k]),
        H = k?.width != null && k?.width !== 0 ? k?.width : 1,
        [{ playbackPxSpring: Z }, J] = (0, o.zhh)(() => ({ playbackPxSpring: 0, config: f })),
        q = l.useRef(null),
        ee = l.useRef($);
    l.useLayoutEffect(() => {
        let e = ee.current;
        (ee.current = $), e && !$ && J({ playbackPxSpring: null == W || Number.isNaN(W) ? 0 : W, immediate: !0 });
    }, [$, W, J]);
    let et = l.useRef(null),
        en = l.useRef(null),
        er = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == D || v <= 0 || H <= 0) return;
        (en.current = et.current ?? D()), (er.current = performance.now());
        let e = 0,
            t = () => {
                let n = performance.now(),
                    r = er.current;
                er.current = n;
                let l = en.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = D();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = D() ?? null;
                null != l &&
                    Number.isFinite(l) &&
                    ((en.current = l),
                    (et.current = l),
                    J({ playbackPxSpring: Math.min(Math.max(0, (l / v) * H), H), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            };
        return (
            (e = requestAnimationFrame(t)),
            () => {
                cancelAnimationFrame(e), (en.current = null), (er.current = null);
            }
        );
    }, [a, D, v, H, J]);
    let el = a && null != D && v > 0;
    l.useEffect(() => {
        let e;
        if (!el) {
            if (null != D && v > 0 && H > 0) {
                let t = D();
                null != t && Number.isFinite(t) && ((et.current = t), (e = Math.min(Math.max(0, (t / v) * H), H)));
            }
            null == e && (e = null == W || Number.isNaN(W) ? 0 : W), J({ playbackPxSpring: e, immediate: !0 });
        }
    }, [W, el, J, D, v, H]);
    let ea = v > 1,
        ei = P?.indicators,
        es = l.useMemo(() => {
            let e;
            return null != ei && null != k && ea
                ? ((e = k.width),
                  ei.map((t) => {
                      let n = Math.max(0, Math.min((0, u.DX)(t.timeSec, v, k) - t.widthPx / 2, e - t.widthPx));
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ei, v, k, ea]),
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
                })(H, es),
            [H, es],
        ),
        eo = P?.hoverExpansionPx ?? 0,
        ec = l.useCallback(
            (e) =>
                null != e &&
                null != es &&
                es.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (P?.animatingIndex === t.index ? eo : 0) &&
                        e <= t.rightPx + t.gapPx + (P?.animatingIndex === t.index ? eo : 0),
                ),
            [es, P?.animatingIndex, eo],
        );
    return (0, r.jsx)("div", {
        className: m.jD,
        ref: j,
        "data-testid": M,
        style: {
            "--custom-timeline-height": `${null != C && O ? C : y}px`,
            "--custom-initial-timeline-height": `${S}px`,
        },
        children: (0, r.jsxs)(o.DUT, {
            className: i()(m.KF, { [m.uc]: h }),
            style: K ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: Y,
            onMouseDown: X,
            onMouseEnter: I,
            onMouseLeave: B,
            onMouseMove: U,
            onKeyDown: F,
            tabIndex: h ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: m.PH,
                    ...z,
                    style: null != p ? { "--custom-segment-bg": p } : void 0,
                    children:
                        null != k &&
                        eu.map((e, t) =>
                            (0, r.jsx)(
                                d.A,
                                {
                                    segment: e,
                                    playbackPxSpring: Z,
                                    playerState: E,
                                    isDragging: $,
                                    dragX: _,
                                    animatingIndex: P?.animatingIndex,
                                    expansionSpring: P?.expansionSpring,
                                    timelineWidth: H,
                                    preloadedBuffers: x,
                                    maxSeekableX: Q,
                                    segmentBorderRadius: A,
                                    progressClassName: g,
                                },
                                t,
                            ),
                        ),
                }),
                null != k && es?.map((e) => P?.renderIndicator(e, null != W && !Number.isNaN(W) ? W : 0)),
                O &&
                    null != V &&
                    t &&
                    !ec(G) &&
                    (0, r.jsx)(o.Text, {
                        className: m.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != G ? `${G}px` : "auto" },
                        children: V,
                    }),
                (O || N) &&
                    h &&
                    null != W &&
                    !ec($ && null != _ ? _ : W) &&
                    (0, r.jsx)(s.animated.div, {
                        ref: q,
                        "data-testid": "discord-web-video-player-playhead",
                        className: m.lG,
                        style: { left: $ && null != _ ? `${_}px` : Z.to((e) => `${e}px`) },
                    }),
            ],
        }),
    });
}
