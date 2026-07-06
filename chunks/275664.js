"use strict";
n.d(t, { Ay: () => N }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(61491),
    l = n(717421),
    u = n(939249),
    c = n(834730),
    d = n(621466),
    _ = n(460890),
    h = n(770178),
    f = n(765548),
    E = n(650583),
    p = n(565164),
    m = n(580929),
    g = n(6821);
let A = r.memo(function (e) {
    let { playbackPxSpring: t, isDragging: n, dragX: r } = e;
    return (0, i.jsx)(m.animated.div, {
        "data-testid": "discord-web-video-player-playhead",
        className: g.lG,
        style: { left: n && null != r ? `${r}px` : t.to((e) => `${e}px`) },
    });
});
var I = n(876230);
let T = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            playbackPxSpring: s,
            playerState: o,
            isDragging: l,
            dragX: u,
            expansionSpring: c,
            timelineWidth: d,
            preloadedBuffers: _,
            maxSeekableX: h,
            segmentBorderRadius: f = 99,
            progressClassName: E,
        } = e,
        { startPx: p, endPx: A, leftIndicatorIndex: T, rightIndicatorIndex: S } = t,
        N = A - p,
        C = s.to((e) => Math.min(Math.max(0, e - p), N)),
        y = null != n && null != c && T === n,
        O = !y && null != n && null != c && S === n,
        R = y || O,
        v = l && null != u ? Math.min(Math.max(0, u - p), N) : null,
        { progressToPlayheadBarTransform: b, glowWidth: L } = (function (e) {
            let {
                segmentWidth: t,
                dragFillWidth: n,
                shrinkEnd: i,
                isAnimating: r,
                fillWidthAnimated: s,
                expansionSpring: a,
            } = e;
            return null != n
                ? { progressToPlayheadBarTransform: `translateX(-${t - n}px)`, glowWidth: n }
                : i && null != a
                  ? {
                        progressToPlayheadBarTransform: (0, m.to)(
                            [s, a],
                            (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                        ),
                        glowWidth: (0, m.to)([s, a], (e, n) => Math.min(Number(e), t - Number(n))),
                    }
                  : r && null != a
                    ? {
                          progressToPlayheadBarTransform: s.to((e) => `translateX(-${t - Number(e)}px)`),
                          glowWidth: (0, m.to)([s, a], (e, t) => Math.max(0, Number(e) - Number(t))),
                      }
                    : { progressToPlayheadBarTransform: s.to((e) => `translateX(-${t - Number(e)}px)`), glowWidth: s };
        })({
            segmentWidth: N,
            dragFillWidth: v,
            shrinkEnd: O,
            isAnimating: R,
            fillWidthAnimated: C,
            expansionSpring: c,
        }),
        D = null != v ? (v <= 0 ? 0 : 1) : C.to((e) => (e <= 0 ? 0 : 1)),
        w = o !== I.Q6.ENDED,
        P = Math.max(0, (h ?? 0) - p),
        M = { borderRadius: `${f}px` },
        x = r.useMemo(
            () =>
                _?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d })).filter(
                    (e) => e.endPx >= p && e.startPx <= A,
                ),
            [_, p, A, d],
        );
    return (0, i.jsxs)(m.animated.div, {
        className: a()(g.Td, E),
        style: {
            left: y ? c.to((e) => p + e) : p,
            width: R ? c.to((e) => N - e) : N,
            "--custom-r-left": s.to((e) => (0 === p || e >= p ? "99px" : "0px")),
            "--custom-r-right": s.to((e) => (A >= d || e >= A ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, i.jsxs)("div", {
                className: g.MI,
                children: [
                    (0, i.jsxs)(m.animated.div, {
                        className: g._I,
                        style: { left: y ? c.to((e) => -(p + e)) : -p },
                        children: [
                            x?.map((e) =>
                                (0, i.jsx)(
                                    "div",
                                    {
                                        className: g.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...M },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != h &&
                                P > 0 &&
                                (0, i.jsx)("div", { className: g.YK, style: { width: `${P}px`, opacity: 1, ...M } }),
                        ],
                    }),
                    (0, i.jsx)(m.animated.div, { className: g.wx, style: { transform: b, opacity: D } }),
                ],
            }),
            w && (0, i.jsx)(m.animated.div, { className: g.fk, style: { width: L, opacity: D } }),
        ],
    });
};
g.f5;
let S = { tension: 300, friction: 30, clamp: !0 };
function N(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: s,
            interactionEnabled: c,
            backgroundColor: m,
            playerState: I,
            preloadedBuffers: N,
            durationSec: y,
            maxSeekableTime: O,
            progressClassName: R,
            timelineHeightPx: v = 4,
            segmentBorderRadius: b,
            hoverTimelineHeightPx: L,
            initialTimelineHeightPx: D = v,
            persistPlayhead: w = !0,
            onClick: P,
            onScrubBack: M,
            onScrubForward: x,
            onDragStateChange: U,
            indicatorConfig: k,
            scrubPreviewCues: G,
            onIndicatorSeek: V,
            getCurrentTimeSec: F,
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
                    interactionEnabled: s,
                    durationSec: a,
                    onClick: l,
                    percent: u,
                    onDragStateChange: c,
                } = e,
                [p, m] = r.useState(null),
                [g, A] = r.useState(null),
                [I, T] = r.useState(!1),
                [S, N] = r.useState(!1),
                [C, y] = r.useState(null),
                [O, R] = r.useState(!1),
                { i18n: v } = (0, _.G9)(),
                b = r.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != u &&
                            "number" == typeof u &&
                            ((e["aria-valuenow"] = u),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = v.PERCENT_COMPLETE(Math.round(u)))),
                        e
                    );
                }, [u, v]),
                L = r.useMemo(() => (null == p || null == i ? null : (0, o.DX)(i, a, p)), [p, i, a]),
                D = (0, f.A)((e) => {
                    m(e.contentRect);
                }),
                w = (0, h.w)(D),
                P = (e) => {
                    if (null != w.current) {
                        let t = w.current.getBoundingClientRect(),
                            n = e.clientX - t.left,
                            r = null != i ? (i / a) * t.width : null;
                        R(null != r && n > r), A(n);
                    }
                },
                M = r.useRef(!1),
                x = r.useRef(null),
                U = (0, f.A)((e, t) => {
                    if (null == l) return;
                    let n = e - t.left,
                        r = (0, o.hc)(n, t, a);
                    (null != i && r > i) || l(r);
                }),
                k = r.useCallback(
                    (e) => {
                        let { key: i } = e;
                        i === E.N$.ArrowLeft && null != t
                            ? (e.preventDefault(), e.stopPropagation(), t())
                            : i === E.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
                    },
                    [t, n],
                );
            return (
                r.useEffect(
                    () => () => {
                        (M.current = !1), x.current?.(), (x.current = null);
                    },
                    [],
                ),
                {
                    contRef: w,
                    boundingRect: p,
                    handleMouseEnter: function (e) {
                        s && (T(!0), P(e));
                    },
                    handleMouseLeave: function (e) {
                        s && !M.current && (T(!1), A(null), R(!1));
                    },
                    handleMouseMove: function (e) {
                        s && I && P(e);
                    },
                    handleMouseDown: (e) => {
                        if (!s || null == l || 0 !== e.button) return;
                        x.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, o.hc)(e.clientX - t.left, t, a);
                        if (null != i && n > i) return;
                        (M.current = !0),
                            N(!0),
                            c?.(!0),
                            y(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            U(e.clientX, t);
                        let r = (e) => {
                            if (null != w.current) {
                                let t = w.current.getBoundingClientRect(),
                                    n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                    r = null != i ? (i / a) * t.width : null,
                                    s = null != r ? Math.min(n, r) : n;
                                R(null != r && n > r), A(n), y(s), U(e.clientX, t);
                            } else U(e.clientX, t);
                        };
                        function u(e) {
                            (M.current = !1),
                                (x.current = null),
                                N(!1),
                                y(null),
                                c?.(!1),
                                R(!1),
                                null != w.current &&
                                    (((0, d.vq)(e.target, Node) && w.current.contains(e.target)) || (T(!1), A(null))),
                                window.removeEventListener("mousemove", r),
                                window.removeEventListener("mouseup", u);
                        }
                        window.addEventListener("mousemove", r),
                            window.addEventListener("mouseup", u),
                            (x.current = () => {
                                window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", u);
                            });
                    },
                    handleKeyDown: k,
                    hoveredAtX: g,
                    maxSeekableX: L,
                    isHovering: I,
                    isDragging: S,
                    dragX: C,
                    isHoverBeyondMax: O,
                    handleClick: function () {},
                    ariaProps: b,
                }
            );
        })({
            onScrubBack: M,
            onScrubForward: x,
            maxSeekableTime: O,
            interactionEnabled: c,
            durationSec: y,
            percent: n,
            onClick: P,
            onDragStateChange: U,
        }),
        ei = r.useMemo(() => (null == z || null == j ? null : (0, o.hc)(z, j, y)), [z, j, y]),
        er = r.useMemo(() => (null == ei ? null : (0, o.rB)(ei)), [ei]),
        es = r.useMemo(() => (null == G || null == ei ? null : (0, p.B8)(G, ei)), [G, ei]),
        ea = r.useMemo(() => {
            if (null != j) return (0, o.TO)(n, j);
        }, [n, j]),
        eo = j?.width != null && j?.width !== 0 ? j?.width : 1,
        [{ playbackPxSpring: el }, eu] = (0, l.z)(() => ({ playbackPxSpring: 0, config: S })),
        ec = r.useRef(X);
    r.useLayoutEffect(() => {
        let e = ec.current;
        (ec.current = X), e && !X && eu({ playbackPxSpring: null == ea || Number.isNaN(ea) ? 0 : ea, immediate: !0 });
    }, [X, ea, eu]);
    let ed = r.useRef(null),
        e_ = r.useRef(null),
        eh = r.useRef(null);
    r.useEffect(() => {
        if (!s || null == F || y <= 0 || eo <= 0) return;
        (e_.current = ed.current ?? F()), (eh.current = performance.now());
        let e = 0,
            t = () => {
                let n = performance.now(),
                    i = eh.current;
                eh.current = n;
                let r = e_.current;
                if (null != r) {
                    r += null != i ? (n - i) / 1e3 : 0;
                    let e = F();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - r;
                        r = Math.abs(t) > 0.5 ? e : r + 0.1 * t;
                    }
                } else r = F() ?? null;
                null != r &&
                    Number.isFinite(r) &&
                    ((e_.current = r),
                    (ed.current = r),
                    eu({ playbackPxSpring: Math.min(Math.max(0, (r / y) * eo), eo), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            };
        return (
            (e = requestAnimationFrame(t)),
            () => {
                cancelAnimationFrame(e), (e_.current = null), (eh.current = null);
            }
        );
    }, [s, F, y, eo, eu]);
    let ef = s && null != F && y > 0;
    r.useEffect(() => {
        let e;
        if (!ef) {
            if (null != F && y > 0 && eo > 0) {
                let t = F();
                null != t && Number.isFinite(t) && ((ed.current = t), (e = Math.min(Math.max(0, (t / y) * eo), eo)));
            }
            null == e && (e = null == ea || Number.isNaN(ea) ? 0 : ea), eu({ playbackPxSpring: e, immediate: !0 });
        }
    }, [ea, ef, eu, F, y, eo]);
    let eE = y > 1,
        ep = k?.indicators,
        em = r.useMemo(() => {
            let e;
            return null != ep && null != j && eE
                ? ((e = j.width),
                  ep.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, o.DX)(t.timeSec, y, j) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ep, y, j, eE]),
        eg = r.useMemo(
            () =>
                (function (e, t) {
                    let n = [{ startPx: 0, endPx: e, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (null == t || 0 === t.length) return n;
                    for (let i = 0; i < t.length; i++) {
                        let r = Math.max(0, t[i].leftPx - t[i].gapPx),
                            s = Math.min(e, t[i].rightPx + t[i].gapPx),
                            a = n[n.length - 1];
                        null != a && ((a.endPx = r), (a.rightIndicatorIndex = t[i].index)),
                            null != a && a.endPx <= a.startPx && n.pop(),
                            s < e &&
                                n.push({
                                    startPx: s,
                                    endPx: e,
                                    leftIndicatorIndex: t[i].index,
                                    rightIndicatorIndex: null,
                                });
                    }
                    return n;
                })(eo, em),
            [eo, em],
        ),
        eA = k?.hoverExpansionPx ?? 0,
        eI = r.useCallback(
            (e) =>
                null != e &&
                null != em &&
                em.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (k?.animatingIndex === t.index ? eA : 0) &&
                        e <= t.rightPx + t.gapPx + (k?.animatingIndex === t.index ? eA : 0),
                ),
            [em, k?.animatingIndex, eA],
        );
    return (0, i.jsx)("div", {
        className: g.jD,
        ref: H,
        "data-testid": B,
        style: {
            "--custom-timeline-height": `${null != L && Z ? L : v}px`,
            "--custom-initial-timeline-height": `${D}px`,
        },
        children: (0, i.jsxs)(u.D, {
            className: a()(g.KF, { [g.uc]: c }),
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
                    className: g.PH,
                    ...en,
                    style: null != m ? { "--custom-segment-bg": m } : void 0,
                    children:
                        null != j &&
                        eg.map((e, t) =>
                            (0, i.jsx)(
                                T,
                                {
                                    segment: e,
                                    playbackPxSpring: el,
                                    playerState: I,
                                    isDragging: X,
                                    dragX: Q,
                                    animatingIndex: k?.animatingIndex,
                                    expansionSpring: k?.expansionSpring,
                                    timelineWidth: eo,
                                    preloadedBuffers: N,
                                    maxSeekableX: q,
                                    segmentBorderRadius: b,
                                    progressClassName: R,
                                },
                                t,
                            ),
                        ),
                }),
                null != j &&
                    em?.map((e) =>
                        k?.renderIndicator(
                            e,
                            null != ea && !Number.isNaN(ea) ? ea : 0,
                            !0 === e.source.clickable && null != V ? () => V(e.source.timeSec) : void 0,
                        ),
                    ),
                (0, i.jsx)(C, {
                    isHovering: Z,
                    hoveredAtX: z,
                    hoveredTimeSec: ei,
                    formattedTime: er,
                    isFullyVisible: t,
                    isInExclusionZone: eI,
                    scrubPreviewCue: es,
                    timelineWidthPx: eo,
                }),
                (Z || w) &&
                    c &&
                    null != ea &&
                    !eI(X && null != Q ? Q : ea) &&
                    (0, i.jsx)(A, { playbackPxSpring: el, isDragging: X, dragX: Q }),
            ],
        }),
    });
}
function C(e) {
    let {
        isHovering: t,
        hoveredAtX: n,
        hoveredTimeSec: r,
        formattedTime: s,
        isFullyVisible: a,
        isInExclusionZone: o,
        scrubPreviewCue: l,
        timelineWidthPx: u,
    } = e;
    return !t || null == n || !a || o(n)
        ? null
        : null != l && null != r
          ? (0, i.jsx)(p.wb, { cue: l, timeSec: r, cursorXPx: n, timelineWidthPx: u })
          : null == s
            ? null
            : (0, i.jsx)(c.E, {
                  className: g.Hz,
                  variant: "text-xs/normal",
                  color: "text-overlay-light",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: s,
              });
}
