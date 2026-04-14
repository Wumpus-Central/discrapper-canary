"use strict";
n.d(t, { Ay: () => A }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(294426),
    l = n(876230),
    u = n(61491),
    c = n(397927),
    d = n(972441),
    _ = n(645871),
    f = n(716277);
function h(e, t, n) {
    let r = n.width;
    return e.map((e) => {
        let i = Math.max(0, Math.min((0, u.DX)(e.timeSec, t, n) - e.widthPx / 2, r - e.widthPx));
        return { leftPx: i, rightPx: i + e.widthPx, gapPx: e.gapPx, index: e.index, source: e };
    });
}
let p = (e, t) => {
        let n = [{ startPx: 0, endPx: e, leftIndicatorIndex: null, rightIndicatorIndex: null }];
        if (null == t || 0 === t.length) return n;
        for (let r = 0; r < t.length; r++) {
            let i = Math.max(0, t[r].leftPx - t[r].gapPx),
                s = Math.min(e, t[r].rightPx + t[r].gapPx),
                a = n[n.length - 1];
            null != a && ((a.endPx = i), (a.rightIndicatorIndex = t[r].index)),
                null != a && a.endPx <= a.startPx && n.pop(),
                s < e && n.push({ startPx: s, endPx: e, leftIndicatorIndex: t[r].index, rightIndicatorIndex: null });
        }
        return n;
    },
    m = 4,
    E = { tension: 300, friction: 30, clamp: !0 },
    g = 275;
function A(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: s,
            interactionEnabled: A,
            backgroundColor: I,
            playerState: T,
            preloadedBuffers: S,
            durationSec: y,
            maxSeekableTime: v,
            progressGlow: C,
            progressFillClassName: N,
            glowClassName: R,
            timelineHeightPx: b = m,
            segmentBorderRadius: O,
            hoverTimelineHeightPx: D,
            initialTimelineHeightPx: L = b,
            persistGrabber: w = !0,
            onClick: M,
            onScrubBack: x,
            onScrubForward: P,
            onDragStateChange: k,
            indicatorConfig: U,
            "data-testid": G,
        } = e,
        {
            contRef: F,
            boundingRect: B,
            handleMouseEnter: V,
            handleMouseLeave: H,
            handleMouseMove: j,
            handleKeyDown: Y,
            hoveredAtX: W,
            maxSeekableX: K,
            isHovering: $,
            isDragging: z,
            dragX: q,
            isHoverBeyondMax: Z,
            handleClick: X,
            handleMouseDown: Q,
            ariaProps: J,
        } = (0, d.A)({
            onScrubBack: x,
            onScrubForward: P,
            maxSeekableTime: v,
            interactionEnabled: A,
            durationSec: y,
            percent: n,
            onClick: M,
            onDragStateChange: k,
        }),
        ee = i.useMemo(() => (null == W || null == B ? null : (0, u.rB)((0, u.hc)(W, B, y))), [W, B, y]),
        et = i.useMemo(() => {
            if (null != B) return (0, u.TO)(n, B);
        }, [n, B]),
        en = B?.width != null && B?.width !== 0 ? B?.width : 1,
        [{ playbackPxSpring: er }, ei] = (0, c.zhh)(() => ({ playbackPxSpring: 0, config: E })),
        es = i.useRef(null),
        ea = i.useRef(!1),
        eo = i.useRef(s);
    i.useLayoutEffect(() => {
        let e = eo.current;
        if (((eo.current = s), e && !s && T !== l.Q6.PLAYING && null != es.current)) {
            let e = parseFloat(getComputedStyle(es.current).left);
            Number.isNaN(e) || ((es.current.style.left = `${e}px`), ei({ playbackPxSpring: e, immediate: !0 })),
                (ea.current = !0);
        } else if (!e && s && null != es.current) {
            let e = null == et || Number.isNaN(et) ? 0 : et,
                t = y > 0 ? Math.min(e + (en / y) * (g / 1e3), en) : e;
            (es.current.style.left = `${e}px`), ei({ playbackPxSpring: t, immediate: !0 });
        }
    }, [s, ei, et, T, y, en]);
    let el = i.useRef(z);
    i.useLayoutEffect(() => {
        let e = el.current;
        (el.current = z), e && !z && ei({ playbackPxSpring: null == et || Number.isNaN(et) ? 0 : et, immediate: !0 });
    }, [z, et, ei]),
        i.useEffect(() => {
            if (ea.current) {
                ea.current = !1;
                return;
            }
            let e = null == et || Number.isNaN(et) ? 0 : et;
            s && y > 0
                ? ei({ playbackPxSpring: Math.min(e + (en / y) * (g / 1e3), en), immediate: !0 })
                : ei({ playbackPxSpring: e, immediate: !0 });
        }, [et, s, ei, en, y]);
    let eu = y > 1,
        ec = U?.indicators,
        ed = i.useMemo(() => (null != ec && null != B && eu ? h(ec, y, B) : void 0), [ec, y, B, eu]),
        e_ = i.useMemo(() => p(en, ed), [en, ed]),
        ef = U?.hoverExpansionPx ?? 0,
        eh = i.useCallback(
            (e) =>
                null != e &&
                null != ed &&
                ed.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (U?.animatingIndex === t.index ? ef : 0) &&
                        e <= t.rightPx + t.gapPx + (U?.animatingIndex === t.index ? ef : 0),
                ),
            [ed, U?.animatingIndex, ef],
        );
    return (0, r.jsx)("div", {
        className: a()(f.jD, { [f.we]: s }),
        ref: F,
        "data-testid": G,
        style: {
            "--custom-timeline-height": `${null != D && $ ? D : b}px`,
            "--custom-initial-timeline-height": `${L}px`,
            "--custom-playback-transition-duration": `${g}ms`,
        },
        children: (0, r.jsxs)(c.DUT, {
            className: a()(f.KF, { [f.uc]: A }),
            style: Z ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: X,
            onMouseDown: Q,
            onMouseEnter: V,
            onMouseLeave: H,
            onMouseMove: j,
            onKeyDown: Y,
            tabIndex: A ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: f.G9,
                    ...J,
                    style: null != I ? { "--custom-segment-bg": I } : void 0,
                    children:
                        null != B &&
                        e_.map((e, t) =>
                            (0, r.jsx)(
                                _.A,
                                {
                                    segment: e,
                                    playbackPxSpring: er,
                                    animate: s,
                                    playerState: T,
                                    isDragging: z,
                                    dragX: q,
                                    animatingIndex: U?.animatingIndex,
                                    expansionSpring: U?.expansionSpring,
                                    timelineWidth: en,
                                    preloadedBuffers: S,
                                    maxSeekableX: K,
                                    segmentBorderRadius: O,
                                    progressFillClassName: N ?? f.UA,
                                    glowClassName: R ?? f.pN,
                                    showGlow: C && T !== l.Q6.ENDED && null != et && et > e.startPx,
                                },
                                t,
                            ),
                        ),
                }),
                null != B && ed?.map((e) => U?.renderIndicator(e, null != et && !Number.isNaN(et) ? et : 0)),
                $ &&
                    null != ee &&
                    t &&
                    !eh(W) &&
                    (0, r.jsx)(c.Text, {
                        className: f.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != W ? `${W}px` : "auto" },
                        children: ee,
                    }),
                ($ || w) &&
                    A &&
                    null != et &&
                    !eh(z && null != q ? q : et) &&
                    (0, r.jsx)(o.animated.div, {
                        ref: es,
                        className: f.Ub,
                        style: { left: z && null != q ? `${q}px` : er.to((e) => `${e}px`) },
                    }),
            ],
        }),
    });
}
