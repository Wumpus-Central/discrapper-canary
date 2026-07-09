"use strict";
n.d(t, { Ay: () => N }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(61491),
    o = n(717421),
    d = n(939249),
    c = n(834730),
    u = n(621466),
    _ = n(460890),
    E = n(770178),
    A = n(765548),
    h = n(650583),
    I = n(565164),
    f = n(580929),
    p = n(19557);
let T = r.memo(function (e) {
    let { playbackPxSpring: t, isDragging: n, dragX: r } = e;
    return (0, i.jsx)(f.animated.div, {
        "data-testid": "discord-web-video-player-playhead",
        className: p.lG,
        style: { left: n && null != r ? `${r}px` : t.to((e) => `${e}px`) },
    });
});
var m = n(876230);
let g = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            playbackPxSpring: a,
            playerState: l,
            isDragging: o,
            dragX: d,
            expansionSpring: c,
            timelineWidth: u,
            preloadedBuffers: _,
            maxSeekableX: E,
            segmentBorderRadius: A = 99,
            progressClassName: h,
        } = e,
        { startPx: I, endPx: T, leftIndicatorIndex: g, rightIndicatorIndex: S } = t,
        N = T - I,
        C = a.to((e) => Math.min(Math.max(0, e - I), N)),
        R = null != n && null != c && g === n,
        O = !R && null != n && null != c && S === n,
        L = R || O,
        D = o && null != d ? Math.min(Math.max(0, d - I), N) : null,
        { progressToPlayheadBarTransform: y, glowWidth: v } = (function (e) {
            let {
                segmentWidth: t,
                dragFillWidth: n,
                shrinkEnd: i,
                isAnimating: r,
                fillWidthAnimated: a,
                expansionSpring: s,
            } = e;
            return null != n
                ? { progressToPlayheadBarTransform: `translateX(-${t - n}px)`, glowWidth: n }
                : i && null != s
                  ? {
                        progressToPlayheadBarTransform: (0, f.to)(
                            [a, s],
                            (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                        ),
                        glowWidth: (0, f.to)([a, s], (e, n) => Math.min(Number(e), t - Number(n))),
                    }
                  : r && null != s
                    ? {
                          progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                          glowWidth: (0, f.to)([a, s], (e, t) => Math.max(0, Number(e) - Number(t))),
                      }
                    : { progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`), glowWidth: a };
        })({
            segmentWidth: N,
            dragFillWidth: D,
            shrinkEnd: O,
            isAnimating: L,
            fillWidthAnimated: C,
            expansionSpring: c,
        }),
        b = null != D ? (D <= 0 ? 0 : 1) : C.to((e) => (e <= 0 ? 0 : 1)),
        M = l !== m.Q6.ENDED,
        P = Math.max(0, (E ?? 0) - I),
        U = { borderRadius: `${A}px` },
        w = r.useMemo(
            () =>
                _?.map((e) => ({ startPx: e.start * u, endPx: (e.start + e.size) * u })).filter(
                    (e) => e.endPx >= I && e.startPx <= T,
                ),
            [_, I, T, u],
        );
    return (0, i.jsxs)(f.animated.div, {
        className: s()(p.Td, h),
        style: {
            left: R ? c.to((e) => I + e) : I,
            width: L ? c.to((e) => N - e) : N,
            "--custom-r-left": a.to((e) => (0 === I || e >= I ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (T >= u || e >= T ? "99px" : "0px")),
            "--custom-timeline-width": `${u}px`,
        },
        children: [
            (0, i.jsxs)("div", {
                className: p.MI,
                children: [
                    (0, i.jsxs)(f.animated.div, {
                        className: p._I,
                        style: { left: R ? c.to((e) => -(I + e)) : -I },
                        children: [
                            w?.map((e) =>
                                (0, i.jsx)(
                                    "div",
                                    {
                                        className: p.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...U },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != E &&
                                P > 0 &&
                                (0, i.jsx)("div", { className: p.YK, style: { width: `${P}px`, opacity: 1, ...U } }),
                        ],
                    }),
                    (0, i.jsx)(f.animated.div, { className: p.wx, style: { transform: y, opacity: b } }),
                ],
            }),
            M && (0, i.jsx)(f.animated.div, { className: p.fk, style: { width: v, opacity: b } }),
        ],
    });
};
p.f5;
let S = { tension: 300, friction: 30, clamp: !0 };
function N(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: c,
            backgroundColor: f,
            playerState: m,
            preloadedBuffers: N,
            durationSec: R,
            maxSeekableTime: O,
            progressClassName: L,
            timelineHeightPx: D = 4,
            segmentBorderRadius: y,
            hoverTimelineHeightPx: v,
            initialTimelineHeightPx: b = D,
            persistPlayhead: M = !0,
            onClick: P,
            onScrubBack: U,
            onScrubForward: w,
            onDragStateChange: G,
            indicatorConfig: x,
            scrubPreviewCues: k,
            onIndicatorSeek: F,
            getCurrentTimeSec: V,
            "data-testid": B,
        } = e,
        {
            contRef: H,
            boundingRect: j,
            handleMouseEnter: W,
            handleMouseLeave: Y,
            handleMouseMove: K,
            handleKeyDown: $,
            hoveredAtX: z,
            maxSeekableX: q,
            isHovering: Z,
            isDragging: X,
            dragX: Q,
            isHoverBeyondMax: J,
            handleClick: ee,
            handleMouseDown: et,
            ariaProps: en,
        } = (function (e) {
            let {
                    onScrubBack: t,
                    onScrubForward: n,
                    maxSeekableTime: i,
                    interactionEnabled: a,
                    durationSec: s,
                    onClick: o,
                    percent: d,
                    onDragStateChange: c,
                } = e,
                [I, f] = r.useState(null),
                [p, T] = r.useState(null),
                [m, g] = r.useState(!1),
                [S, N] = r.useState(!1),
                [C, R] = r.useState(null),
                [O, L] = r.useState(!1),
                { i18n: D } = (0, _.G9)(),
                y = r.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != d &&
                            "number" == typeof d &&
                            ((e["aria-valuenow"] = d),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = D.PERCENT_COMPLETE(Math.round(d)))),
                        e
                    );
                }, [d, D]),
                v = r.useMemo(() => (null == I || null == i ? null : (0, l.DX)(i, s, I)), [I, i, s]),
                b = (0, A.A)((e) => {
                    f(e.contentRect);
                }),
                M = (0, E.w)(b),
                P = (e) => {
                    if (null != M.current) {
                        let t = M.current.getBoundingClientRect(),
                            n = e.clientX - t.left,
                            r = null != i ? (i / s) * t.width : null;
                        L(null != r && n > r), T(n);
                    }
                },
                U = r.useRef(!1),
                w = r.useRef(null),
                G = (0, A.A)((e, t) => {
                    if (null == o) return;
                    let n = e - t.left,
                        r = (0, l.hc)(n, t, s);
                    (null != i && r > i) || o(r);
                }),
                x = r.useCallback(
                    (e) => {
                        let { key: i } = e;
                        i === h.N$.ArrowLeft && null != t
                            ? (e.preventDefault(), e.stopPropagation(), t())
                            : i === h.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
                    },
                    [t, n],
                );
            return (
                r.useEffect(
                    () => () => {
                        (U.current = !1), w.current?.(), (w.current = null);
                    },
                    [],
                ),
                {
                    contRef: M,
                    boundingRect: I,
                    handleMouseEnter: function (e) {
                        a && (g(!0), P(e));
                    },
                    handleMouseLeave: function (e) {
                        a && !U.current && (g(!1), T(null), L(!1));
                    },
                    handleMouseMove: function (e) {
                        a && m && P(e);
                    },
                    handleMouseDown: (e) => {
                        if (!a || null == o || 0 !== e.button) return;
                        w.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, l.hc)(e.clientX - t.left, t, s);
                        if (null != i && n > i) return;
                        (U.current = !0),
                            N(!0),
                            c?.(!0),
                            R(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            G(e.clientX, t);
                        let r = (e) => {
                            if (null != M.current) {
                                let t = M.current.getBoundingClientRect(),
                                    n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                    r = null != i ? (i / s) * t.width : null,
                                    a = null != r ? Math.min(n, r) : n;
                                L(null != r && n > r), T(n), R(a), G(e.clientX, t);
                            } else G(e.clientX, t);
                        };
                        function d(e) {
                            (U.current = !1),
                                (w.current = null),
                                N(!1),
                                R(null),
                                c?.(!1),
                                L(!1),
                                null != M.current &&
                                    (((0, u.vq)(e.target, Node) && M.current.contains(e.target)) || (g(!1), T(null))),
                                window.removeEventListener("mousemove", r),
                                window.removeEventListener("mouseup", d);
                        }
                        window.addEventListener("mousemove", r),
                            window.addEventListener("mouseup", d),
                            (w.current = () => {
                                window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", d);
                            });
                    },
                    handleKeyDown: x,
                    hoveredAtX: p,
                    maxSeekableX: v,
                    isHovering: m,
                    isDragging: S,
                    dragX: C,
                    isHoverBeyondMax: O,
                    handleClick: function () {},
                    ariaProps: y,
                }
            );
        })({
            onScrubBack: U,
            onScrubForward: w,
            maxSeekableTime: O,
            interactionEnabled: c,
            durationSec: R,
            percent: n,
            onClick: P,
            onDragStateChange: G,
        }),
        ei = r.useMemo(() => (null == z || null == j ? null : (0, l.hc)(z, j, R)), [z, j, R]),
        er = r.useMemo(() => (null == ei ? null : (0, l.rB)(ei)), [ei]),
        ea = r.useMemo(() => (null == k || null == ei ? null : (0, I.B8)(k, ei)), [k, ei]),
        es = r.useMemo(() => {
            if (null != j) return (0, l.TO)(n, j);
        }, [n, j]),
        el = j?.width != null && j?.width !== 0 ? j?.width : 1,
        [{ playbackPxSpring: eo }, ed] = (0, o.z)(() => ({ playbackPxSpring: 0, config: S })),
        ec = r.useRef(X);
    r.useLayoutEffect(() => {
        let e = ec.current;
        (ec.current = X), e && !X && ed({ playbackPxSpring: null == es || Number.isNaN(es) ? 0 : es, immediate: !0 });
    }, [X, es, ed]);
    let eu = r.useRef(null),
        e_ = r.useRef(null),
        eE = r.useRef(null);
    r.useEffect(() => {
        if (!a || null == V || R <= 0 || el <= 0) return;
        (e_.current = eu.current ?? V()), (eE.current = performance.now());
        let e = 0,
            t = () => {
                let n = performance.now(),
                    i = eE.current;
                eE.current = n;
                let r = e_.current;
                if (null != r) {
                    r += null != i ? (n - i) / 1e3 : 0;
                    let e = V();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - r;
                        r = Math.abs(t) > 0.5 ? e : r + 0.1 * t;
                    }
                } else r = V() ?? null;
                null != r &&
                    Number.isFinite(r) &&
                    ((e_.current = r),
                    (eu.current = r),
                    ed({ playbackPxSpring: Math.min(Math.max(0, (r / R) * el), el), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            };
        return (
            (e = requestAnimationFrame(t)),
            () => {
                cancelAnimationFrame(e), (e_.current = null), (eE.current = null);
            }
        );
    }, [a, V, R, el, ed]);
    let eA = a && null != V && R > 0;
    r.useEffect(() => {
        let e;
        if (!eA) {
            if (null != V && R > 0 && el > 0) {
                let t = V();
                null != t && Number.isFinite(t) && ((eu.current = t), (e = Math.min(Math.max(0, (t / R) * el), el)));
            }
            null == e && (e = null == es || Number.isNaN(es) ? 0 : es), ed({ playbackPxSpring: e, immediate: !0 });
        }
    }, [es, eA, ed, V, R, el]);
    let eh = R > 1,
        eI = x?.indicators,
        ef = r.useMemo(() => {
            let e;
            return null != eI && null != j && eh
                ? ((e = j.width),
                  eI.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, l.DX)(t.timeSec, R, j) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [eI, R, j, eh]),
        ep = r.useMemo(
            () =>
                (function (e, t) {
                    let n = [{ startPx: 0, endPx: e, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (null == t || 0 === t.length) return n;
                    for (let i = 0; i < t.length; i++) {
                        let r = Math.max(0, t[i].leftPx - t[i].gapPx),
                            a = Math.min(e, t[i].rightPx + t[i].gapPx),
                            s = n[n.length - 1];
                        null != s && ((s.endPx = r), (s.rightIndicatorIndex = t[i].index)),
                            null != s && s.endPx <= s.startPx && n.pop(),
                            a < e &&
                                n.push({
                                    startPx: a,
                                    endPx: e,
                                    leftIndicatorIndex: t[i].index,
                                    rightIndicatorIndex: null,
                                });
                    }
                    return n;
                })(el, ef),
            [el, ef],
        ),
        eT = x?.hoverExpansionPx ?? 0,
        em = r.useCallback(
            (e) =>
                null != e &&
                null != ef &&
                ef.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (x?.animatingIndex === t.index ? eT : 0) &&
                        e <= t.rightPx + t.gapPx + (x?.animatingIndex === t.index ? eT : 0),
                ),
            [ef, x?.animatingIndex, eT],
        );
    return (0, i.jsx)("div", {
        className: p.jD,
        ref: H,
        "data-testid": B,
        style: {
            "--custom-timeline-height": `${null != v && Z ? v : D}px`,
            "--custom-initial-timeline-height": `${b}px`,
        },
        children: (0, i.jsxs)(d.D, {
            className: s()(p.KF, { [p.uc]: c }),
            style: J ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: ee,
            onMouseDown: et,
            onMouseEnter: W,
            onMouseLeave: Y,
            onMouseMove: K,
            onKeyDown: $,
            tabIndex: c ? void 0 : -1,
            children: [
                (0, i.jsx)("div", {
                    className: p.PH,
                    ...en,
                    style: null != f ? { "--custom-segment-bg": f } : void 0,
                    children:
                        null != j &&
                        ep.map((e, t) =>
                            (0, i.jsx)(
                                g,
                                {
                                    segment: e,
                                    playbackPxSpring: eo,
                                    playerState: m,
                                    isDragging: X,
                                    dragX: Q,
                                    animatingIndex: x?.animatingIndex,
                                    expansionSpring: x?.expansionSpring,
                                    timelineWidth: el,
                                    preloadedBuffers: N,
                                    maxSeekableX: q,
                                    segmentBorderRadius: y,
                                    progressClassName: L,
                                },
                                t,
                            ),
                        ),
                }),
                null != j &&
                    ef?.map((e) =>
                        x?.renderIndicator(
                            e,
                            null != es && !Number.isNaN(es) ? es : 0,
                            !0 === e.source.clickable && null != F ? () => F(e.source.timeSec) : void 0,
                        ),
                    ),
                (0, i.jsx)(C, {
                    isHovering: Z,
                    hoveredAtX: z,
                    hoveredTimeSec: ei,
                    formattedTime: er,
                    isFullyVisible: t,
                    isInExclusionZone: em,
                    scrubPreviewCue: ea,
                    timelineWidthPx: el,
                }),
                (Z || M) &&
                    c &&
                    null != es &&
                    !em(X && null != Q ? Q : es) &&
                    (0, i.jsx)(T, { playbackPxSpring: eo, isDragging: X, dragX: Q }),
            ],
        }),
    });
}
function C(e) {
    let {
        isHovering: t,
        hoveredAtX: n,
        hoveredTimeSec: r,
        formattedTime: a,
        isFullyVisible: s,
        isInExclusionZone: l,
        scrubPreviewCue: o,
        timelineWidthPx: d,
    } = e;
    return !t || null == n || !s || l(n)
        ? null
        : null != o && null != r
          ? (0, i.jsx)(I.wb, { cue: o, timeSec: r, cursorXPx: n, timelineWidthPx: d })
          : null == a
            ? null
            : (0, i.jsx)(c.E, {
                  className: p.Hz,
                  variant: "text-xs/normal",
                  color: "text-overlay-light",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: a,
              });
}
