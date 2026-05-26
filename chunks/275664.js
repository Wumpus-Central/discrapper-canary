n.d(t, { Ay: () => C }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    u = n(61491),
    s = n(717421),
    o = n(939249),
    c = n(834730),
    d = n(621466),
    m = n(460890),
    p = n(770178),
    f = n(765548),
    h = n(650583),
    x = n(565164),
    v = n(873174),
    E = n(19557);
let b = l.memo(function (e) {
    let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
    return (0, r.jsx)(v.animated.div, {
        "data-testid": "discord-web-video-player-playhead",
        className: E.lG,
        style: { left: n && null != l ? `${l}px` : t.to((e) => `${e}px`) },
    });
});
var g = n(876230);
let y = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            playbackPxSpring: a,
            playerState: u,
            isDragging: s,
            dragX: o,
            expansionSpring: c,
            timelineWidth: d,
            preloadedBuffers: m,
            maxSeekableX: p,
            segmentBorderRadius: f = 99,
            progressClassName: h,
        } = e,
        { startPx: x, endPx: b, leftIndicatorIndex: y, rightIndicatorIndex: S } = t,
        C = b - x,
        N = a.to((e) => Math.min(Math.max(0, e - x), C)),
        R = null != n && null != c && y === n,
        A = !R && null != n && null != c && S === n,
        w = R || A,
        P = s && null != o ? Math.min(Math.max(0, o - x), C) : null,
        { progressToPlayheadBarTransform: L, glowWidth: T } = (function (e) {
            let {
                segmentWidth: t,
                dragFillWidth: n,
                shrinkEnd: r,
                isAnimating: l,
                fillWidthAnimated: a,
                expansionSpring: i,
            } = e;
            return null != n
                ? { progressToPlayheadBarTransform: `translateX(-${t - n}px)`, glowWidth: n }
                : r && null != i
                  ? {
                        progressToPlayheadBarTransform: (0, v.to)(
                            [a, i],
                            (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                        ),
                        glowWidth: (0, v.to)([a, i], (e, n) => Math.min(Number(e), t - Number(n))),
                    }
                  : l && null != i
                    ? {
                          progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                          glowWidth: (0, v.to)([a, i], (e, t) => Math.max(0, Number(e) - Number(t))),
                      }
                    : { progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`), glowWidth: a };
        })({
            segmentWidth: C,
            dragFillWidth: P,
            shrinkEnd: A,
            isAnimating: w,
            fillWidthAnimated: N,
            expansionSpring: c,
        }),
        k = null != P ? (P <= 0 ? 0 : 1) : N.to((e) => (e <= 0 ? 0 : 1)),
        j = u !== g.Q6.ENDED,
        D = Math.max(0, (p ?? 0) - x),
        M = { borderRadius: `${f}px` },
        I = l.useMemo(
            () =>
                m
                    ?.map((e) => ({ startPx: e.start * d, endPx: (e.start + e.size) * d }))
                    .filter((e) => e.endPx >= x && e.startPx <= b),
            [m, x, b, d],
        );
    return (0, r.jsxs)(v.animated.div, {
        className: i()(E.Td, h),
        style: {
            left: R ? c.to((e) => x + e) : x,
            width: w ? c.to((e) => C - e) : C,
            "--custom-r-left": a.to((e) => (0 === x || e >= x ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (b >= d || e >= b ? "99px" : "0px")),
            "--custom-timeline-width": `${d}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: E.MI,
                children: [
                    (0, r.jsxs)(v.animated.div, {
                        className: E._I,
                        style: { left: R ? c.to((e) => -(x + e)) : -x },
                        children: [
                            I?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: E.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...M },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != p &&
                                D > 0 &&
                                (0, r.jsx)("div", { className: E.YK, style: { width: `${D}px`, opacity: 1, ...M } }),
                        ],
                    }),
                    (0, r.jsx)(v.animated.div, { className: E.wx, style: { transform: L, opacity: k } }),
                ],
            }),
            j && (0, r.jsx)(v.animated.div, { className: E.fk, style: { width: T, opacity: k } }),
        ],
    });
};
E.f5;
let S = { tension: 300, friction: 30, clamp: !0 };
function C(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: c,
            backgroundColor: v,
            playerState: g,
            preloadedBuffers: C,
            durationSec: R,
            maxSeekableTime: A,
            progressClassName: w,
            timelineHeightPx: P = 4,
            segmentBorderRadius: L,
            hoverTimelineHeightPx: T,
            initialTimelineHeightPx: k = P,
            persistPlayhead: j = !0,
            onClick: D,
            onScrubBack: M,
            onScrubForward: I,
            onDragStateChange: B,
            indicatorConfig: F,
            scrubPreviewCues: U,
            onIndicatorSeek: $,
            getCurrentTimeSec: O,
            "data-testid": G,
        } = e,
        {
            contRef: K,
            boundingRect: _,
            handleMouseEnter: Q,
            handleMouseLeave: Y,
            handleMouseMove: z,
            handleKeyDown: X,
            hoveredAtX: V,
            maxSeekableX: H,
            isHovering: W,
            isDragging: Z,
            dragX: J,
            isHoverBeyondMax: q,
            handleClick: ee,
            handleMouseDown: et,
            ariaProps: en,
        } = (function (e) {
            let {
                    onScrubBack: t,
                    onScrubForward: n,
                    maxSeekableTime: r,
                    interactionEnabled: a,
                    durationSec: i,
                    onClick: s,
                    percent: o,
                    onDragStateChange: c,
                } = e,
                [x, v] = l.useState(null),
                [E, b] = l.useState(null),
                [g, y] = l.useState(!1),
                [S, C] = l.useState(!1),
                [N, R] = l.useState(null),
                [A, w] = l.useState(!1),
                { i18n: P } = (0, m.G9)(),
                L = l.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != o &&
                            "number" == typeof o &&
                            ((e["aria-valuenow"] = o),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = P.PERCENT_COMPLETE(Math.round(o)))),
                        e
                    );
                }, [o, P]),
                T = l.useMemo(() => (null == x || null == r ? null : (0, u.DX)(r, i, x)), [x, r, i]),
                k = (0, f.A)((e) => {
                    v(e.contentRect);
                }),
                j = (0, p.w)(k),
                D = (e) => {
                    if (null != j.current) {
                        let t = j.current.getBoundingClientRect(),
                            n = e.clientX - t.left,
                            l = null != r ? (r / i) * t.width : null;
                        w(null != l && n > l), b(n);
                    }
                },
                M = l.useRef(!1),
                I = l.useRef(null),
                B = (0, f.A)((e, t) => {
                    if (null == s) return;
                    let n = e - t.left,
                        l = (0, u.hc)(n, t, i);
                    (null != r && l > r) || s(l);
                }),
                F = l.useCallback(
                    (e) => {
                        let { key: r } = e;
                        r === h.N$.ArrowLeft && null != t
                            ? (e.preventDefault(), e.stopPropagation(), t())
                            : r === h.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
                    },
                    [t, n],
                );
            return (
                l.useEffect(
                    () => () => {
                        (M.current = !1), I.current?.(), (I.current = null);
                    },
                    [],
                ),
                {
                    contRef: j,
                    boundingRect: x,
                    handleMouseEnter: (e) => {
                        a && (y(!0), D(e));
                    },
                    handleMouseLeave: (e) => {
                        a && !M.current && (y(!1), b(null), w(!1));
                    },
                    handleMouseMove: (e) => {
                        a && g && D(e);
                    },
                    handleMouseDown: (e) => {
                        if (!a || null == s || 0 !== e.button) return;
                        I.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, u.hc)(e.clientX - t.left, t, i);
                        if (null != r && n > r) return;
                        (M.current = !0),
                            C(!0),
                            c?.(!0),
                            R(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            B(e.clientX, t);
                        let l = (e) => {
                                if (null != j.current) {
                                    let t = j.current.getBoundingClientRect(),
                                        n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                        l = null != r ? (r / i) * t.width : null,
                                        a = null != l ? Math.min(n, l) : n;
                                    w(null != l && n > l), b(n), R(a), B(e.clientX, t);
                                } else B(e.clientX, t);
                            },
                            o = (e) => {
                                (M.current = !1),
                                    (I.current = null),
                                    C(!1),
                                    R(null),
                                    c?.(!1),
                                    w(!1),
                                    null != j.current &&
                                        (((0, d.vq)(e.target, Node) && j.current.contains(e.target)) ||
                                            (y(!1), b(null))),
                                    window.removeEventListener("mousemove", l),
                                    window.removeEventListener("mouseup", o);
                            };
                        window.addEventListener("mousemove", l),
                            window.addEventListener("mouseup", o),
                            (I.current = () => {
                                window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", o);
                            });
                    },
                    handleKeyDown: F,
                    hoveredAtX: E,
                    maxSeekableX: T,
                    isHovering: g,
                    isDragging: S,
                    dragX: N,
                    isHoverBeyondMax: A,
                    handleClick: () => {},
                    ariaProps: L,
                }
            );
        })({
            onScrubBack: M,
            onScrubForward: I,
            maxSeekableTime: A,
            interactionEnabled: c,
            durationSec: R,
            percent: n,
            onClick: D,
            onDragStateChange: B,
        }),
        er = l.useMemo(() => (null == V || null == _ ? null : (0, u.hc)(V, _, R)), [V, _, R]),
        el = l.useMemo(() => (null == er ? null : (0, u.rB)(er)), [er]),
        ea = l.useMemo(() => (null == U || null == er ? null : (0, x.B8)(U, er)), [U, er]),
        ei = l.useMemo(() => {
            if (null != _) return (0, u.TO)(n, _);
        }, [n, _]),
        eu = _?.width != null && _?.width !== 0 ? _?.width : 1,
        [{ playbackPxSpring: es }, eo] = (0, s.z)(() => ({ playbackPxSpring: 0, config: S })),
        ec = l.useRef(Z);
    l.useLayoutEffect(() => {
        let e = ec.current;
        (ec.current = Z), e && !Z && eo({ playbackPxSpring: null == ei || Number.isNaN(ei) ? 0 : ei, immediate: !0 });
    }, [Z, ei, eo]);
    let ed = l.useRef(null),
        em = l.useRef(null),
        ep = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == O || R <= 0 || eu <= 0) return;
        (em.current = ed.current ?? O()), (ep.current = performance.now());
        let e = 0,
            t = () => {
                let n = performance.now(),
                    r = ep.current;
                ep.current = n;
                let l = em.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = O();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = O() ?? null;
                null != l &&
                    Number.isFinite(l) &&
                    ((em.current = l),
                    (ed.current = l),
                    eo({ playbackPxSpring: Math.min(Math.max(0, (l / R) * eu), eu), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            };
        return (
            (e = requestAnimationFrame(t)),
            () => {
                cancelAnimationFrame(e), (em.current = null), (ep.current = null);
            }
        );
    }, [a, O, R, eu, eo]);
    let ef = a && null != O && R > 0;
    l.useEffect(() => {
        let e;
        if (!ef) {
            if (null != O && R > 0 && eu > 0) {
                let t = O();
                null != t && Number.isFinite(t) && ((ed.current = t), (e = Math.min(Math.max(0, (t / R) * eu), eu)));
            }
            null == e && (e = null == ei || Number.isNaN(ei) ? 0 : ei), eo({ playbackPxSpring: e, immediate: !0 });
        }
    }, [ei, ef, eo, O, R, eu]);
    let eh = R > 1,
        ex = F?.indicators,
        ev = l.useMemo(() => {
            let e;
            return null != ex && null != _ && eh
                ? ((e = _.width),
                  ex.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, u.DX)(t.timeSec, R, _) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ex, R, _, eh]),
        eE = l.useMemo(
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
                })(eu, ev),
            [eu, ev],
        ),
        eb = F?.hoverExpansionPx ?? 0,
        eg = l.useCallback(
            (e) =>
                null != e &&
                null != ev &&
                ev.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (F?.animatingIndex === t.index ? eb : 0) &&
                        e <= t.rightPx + t.gapPx + (F?.animatingIndex === t.index ? eb : 0),
                ),
            [ev, F?.animatingIndex, eb],
        );
    return (0, r.jsx)("div", {
        className: E.jD,
        ref: K,
        "data-testid": G,
        style: {
            "--custom-timeline-height": `${null != T && W ? T : P}px`,
            "--custom-initial-timeline-height": `${k}px`,
        },
        children: (0, r.jsxs)(o.D, {
            className: i()(E.KF, { [E.uc]: c }),
            style: q ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: ee,
            onMouseDown: et,
            onMouseEnter: Q,
            onMouseLeave: Y,
            onMouseMove: z,
            onKeyDown: X,
            tabIndex: c ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: E.PH,
                    ...en,
                    style: null != v ? { "--custom-segment-bg": v } : void 0,
                    children:
                        null != _ &&
                        eE.map((e, t) =>
                            (0, r.jsx)(
                                y,
                                {
                                    segment: e,
                                    playbackPxSpring: es,
                                    playerState: g,
                                    isDragging: Z,
                                    dragX: J,
                                    animatingIndex: F?.animatingIndex,
                                    expansionSpring: F?.expansionSpring,
                                    timelineWidth: eu,
                                    preloadedBuffers: C,
                                    maxSeekableX: H,
                                    segmentBorderRadius: L,
                                    progressClassName: w,
                                },
                                t,
                            ),
                        ),
                }),
                null != _ &&
                    ev?.map((e) =>
                        F?.renderIndicator(
                            e,
                            null != ei && !Number.isNaN(ei) ? ei : 0,
                            !0 === e.source.clickable && null != $ ? () => $(e.source.timeSec) : void 0,
                        ),
                    ),
                (0, r.jsx)(N, {
                    isHovering: W,
                    hoveredAtX: V,
                    hoveredTimeSec: er,
                    formattedTime: el,
                    isFullyVisible: t,
                    isInExclusionZone: eg,
                    scrubPreviewCue: ea,
                    timelineWidthPx: eu,
                }),
                (W || j) &&
                    c &&
                    null != ei &&
                    !eg(Z && null != J ? J : ei) &&
                    (0, r.jsx)(b, { playbackPxSpring: es, isDragging: Z, dragX: J }),
            ],
        }),
    });
}
function N(e) {
    let {
        isHovering: t,
        hoveredAtX: n,
        hoveredTimeSec: l,
        formattedTime: a,
        isFullyVisible: i,
        isInExclusionZone: u,
        scrubPreviewCue: s,
        timelineWidthPx: o,
    } = e;
    return !t || null == n || !i || u(n)
        ? null
        : null != s && null != l
          ? (0, r.jsx)(x.wb, { cue: s, timeSec: l, cursorXPx: n, timelineWidthPx: o })
          : null == a
            ? null
            : (0, r.jsx)(c.E, {
                  className: E.Hz,
                  variant: "text-xs/normal",
                  color: "always-white",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: a,
              });
}
