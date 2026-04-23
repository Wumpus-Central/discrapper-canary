n.d(t, { Ay: () => y }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(419354),
    u = n(61491),
    o = n(717421),
    c = n(939249),
    d = n(834730),
    m = n(621466),
    f = n(460890),
    h = n(770178),
    p = n(765548),
    E = n(650583),
    v = n(876230),
    x = n(6821);
let b = (e) => {
    let {
            segment: t,
            animatingIndex: n,
            playbackPxSpring: a,
            playerState: u,
            isDragging: o,
            dragX: c,
            expansionSpring: d,
            timelineWidth: m,
            preloadedBuffers: f,
            maxSeekableX: h,
            segmentBorderRadius: p = 99,
            progressClassName: E,
        } = e,
        { startPx: b, endPx: g, leftIndicatorIndex: y, rightIndicatorIndex: S } = t,
        C = g - b,
        N = a.to((e) => Math.min(Math.max(0, e - b), C)),
        A = null != n && null != d && y === n,
        R = !A && null != n && null != d && S === n,
        L = A || R,
        w = o && null != c ? Math.min(Math.max(0, c - b), C) : null,
        { progressToPlayheadBarTransform: T, glowWidth: P } = (function (e) {
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
                        progressToPlayheadBarTransform: (0, s.to)(
                            [a, i],
                            (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                        ),
                        glowWidth: (0, s.to)([a, i], (e, n) => Math.min(Number(e), t - Number(n))),
                    }
                  : l && null != i
                    ? {
                          progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                          glowWidth: (0, s.to)([a, i], (e, t) => Math.max(0, Number(e) - Number(t))),
                      }
                    : { progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`), glowWidth: a };
        })({
            segmentWidth: C,
            dragFillWidth: w,
            shrinkEnd: R,
            isAnimating: L,
            fillWidthAnimated: N,
            expansionSpring: d,
        }),
        D = null != w ? (w <= 0 ? 0 : 1) : N.to((e) => (e <= 0 ? 0 : 1)),
        M = u !== v.Q6.ENDED,
        j = Math.max(0, (h ?? 0) - b),
        k = { borderRadius: `${p}px` },
        I = l.useMemo(
            () =>
                f
                    ?.map((e) => ({ startPx: e.start * m, endPx: (e.start + e.size) * m }))
                    .filter((e) => e.endPx >= b && e.startPx <= g),
            [f, b, g, m],
        );
    return (0, r.jsxs)(s.animated.div, {
        className: i()(x.Td, E),
        style: {
            left: A ? d.to((e) => b + e) : b,
            width: L ? d.to((e) => C - e) : C,
            "--custom-r-left": a.to((e) => (0 === b || e >= b ? "99px" : "0px")),
            "--custom-r-right": a.to((e) => (g >= m || e >= g ? "99px" : "0px")),
            "--custom-timeline-width": `${m}px`,
        },
        children: [
            (0, r.jsxs)("div", {
                className: x.MI,
                children: [
                    (0, r.jsxs)(s.animated.div, {
                        className: x._I,
                        style: { left: A ? d.to((e) => -(b + e)) : -b },
                        children: [
                            I?.map((e) =>
                                (0, r.jsx)(
                                    "div",
                                    {
                                        className: x.Zn,
                                        style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...k },
                                    },
                                    `${e.startPx}:${e.endPx}`,
                                ),
                            ),
                            null != h &&
                                j > 0 &&
                                (0, r.jsx)("div", { className: x.YK, style: { width: `${j}px`, opacity: 1, ...k } }),
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, { className: x.wx, style: { transform: T, opacity: D } }),
                ],
            }),
            M && (0, r.jsx)(s.animated.div, { className: x.fk, style: { width: P, opacity: D } }),
        ],
    });
};
x.f5;
let g = { tension: 300, friction: 30, clamp: !0 };
function y(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: v,
            backgroundColor: y,
            playerState: S,
            preloadedBuffers: C,
            durationSec: N,
            maxSeekableTime: A,
            progressClassName: R,
            timelineHeightPx: L = 4,
            segmentBorderRadius: w,
            hoverTimelineHeightPx: T,
            initialTimelineHeightPx: P = L,
            persistPlayhead: D = !0,
            onClick: M,
            onScrubBack: j,
            onScrubForward: k,
            onDragStateChange: I,
            indicatorConfig: B,
            getCurrentTimeSec: F,
            "data-testid": G,
        } = e,
        {
            contRef: U,
            boundingRect: O,
            handleMouseEnter: Q,
            handleMouseLeave: _,
            handleMouseMove: K,
            handleKeyDown: $,
            hoveredAtX: Y,
            maxSeekableX: X,
            isHovering: z,
            isDragging: V,
            dragX: W,
            isHoverBeyondMax: H,
            handleClick: Z,
            handleMouseDown: J,
            ariaProps: q,
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
                [d, v] = l.useState(null),
                [x, b] = l.useState(null),
                [g, y] = l.useState(!1),
                [S, C] = l.useState(!1),
                [N, A] = l.useState(null),
                [R, L] = l.useState(!1),
                { i18n: w } = (0, f.G9)(),
                T = l.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != o &&
                            "number" == typeof o &&
                            ((e["aria-valuenow"] = o),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = w.PERCENT_COMPLETE(Math.round(o)))),
                        e
                    );
                }, [o, w]),
                P = l.useMemo(() => (null == d || null == r ? null : (0, u.DX)(r, i, d)), [d, r, i]),
                D = (0, p.A)((e) => {
                    v(e.contentRect);
                }),
                M = (0, h.w)(D),
                j = (e) => {
                    if (null != M.current) {
                        let t = M.current.getBoundingClientRect(),
                            n = e.clientX - t.left,
                            l = null != r ? (r / i) * t.width : null;
                        L(null != l && n > l), b(n);
                    }
                },
                k = l.useRef(!1),
                I = l.useRef(null),
                B = (0, p.A)((e, t) => {
                    if (null == s) return;
                    let n = e - t.left,
                        l = (0, u.hc)(n, t, i);
                    (null != r && l > r) || s(l);
                }),
                F = l.useCallback(
                    (e) => {
                        let { key: r } = e;
                        r === E.N$.ArrowLeft && null != t
                            ? (e.preventDefault(), e.stopPropagation(), t())
                            : r === E.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
                    },
                    [t, n],
                );
            return (
                l.useEffect(
                    () => () => {
                        (k.current = !1), I.current?.(), (I.current = null);
                    },
                    [],
                ),
                {
                    contRef: M,
                    boundingRect: d,
                    handleMouseEnter: (e) => {
                        a && (y(!0), j(e));
                    },
                    handleMouseLeave: (e) => {
                        a && !k.current && (y(!1), b(null), L(!1));
                    },
                    handleMouseMove: (e) => {
                        a && g && j(e);
                    },
                    handleMouseDown: (e) => {
                        if (!a || null == s || 0 !== e.button) return;
                        I.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, u.hc)(e.clientX - t.left, t, i);
                        if (null != r && n > r) return;
                        (k.current = !0),
                            C(!0),
                            c?.(!0),
                            A(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                            B(e.clientX, t);
                        let l = (e) => {
                                if (null != M.current) {
                                    let t = M.current.getBoundingClientRect(),
                                        n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                        l = null != r ? (r / i) * t.width : null,
                                        a = null != l ? Math.min(n, l) : n;
                                    L(null != l && n > l), b(n), A(a), B(e.clientX, t);
                                } else B(e.clientX, t);
                            },
                            o = (e) => {
                                (k.current = !1),
                                    (I.current = null),
                                    C(!1),
                                    A(null),
                                    c?.(!1),
                                    L(!1),
                                    null != M.current &&
                                        (((0, m.vq)(e.target, Node) && M.current.contains(e.target)) ||
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
                    hoveredAtX: x,
                    maxSeekableX: P,
                    isHovering: g,
                    isDragging: S,
                    dragX: N,
                    isHoverBeyondMax: R,
                    handleClick: () => {},
                    ariaProps: T,
                }
            );
        })({
            onScrubBack: j,
            onScrubForward: k,
            maxSeekableTime: A,
            interactionEnabled: v,
            durationSec: N,
            percent: n,
            onClick: M,
            onDragStateChange: I,
        }),
        ee = l.useMemo(() => (null == Y || null == O ? null : (0, u.rB)((0, u.hc)(Y, O, N))), [Y, O, N]),
        et = l.useMemo(() => {
            if (null != O) return (0, u.TO)(n, O);
        }, [n, O]),
        en = O?.width != null && O?.width !== 0 ? O?.width : 1,
        [{ playbackPxSpring: er }, el] = (0, o.z)(() => ({ playbackPxSpring: 0, config: g })),
        ea = l.useRef(null),
        ei = l.useRef(V);
    l.useLayoutEffect(() => {
        let e = ei.current;
        (ei.current = V), e && !V && el({ playbackPxSpring: null == et || Number.isNaN(et) ? 0 : et, immediate: !0 });
    }, [V, et, el]);
    let es = l.useRef(null),
        eu = l.useRef(null),
        eo = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == F || N <= 0 || en <= 0) return;
        (eu.current = es.current ?? F()), (eo.current = performance.now());
        let e = 0,
            t = () => {
                let n = performance.now(),
                    r = eo.current;
                eo.current = n;
                let l = eu.current;
                if (null != l) {
                    l += null != r ? (n - r) / 1e3 : 0;
                    let e = F();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - l;
                        l = Math.abs(t) > 0.5 ? e : l + 0.1 * t;
                    }
                } else l = F() ?? null;
                null != l &&
                    Number.isFinite(l) &&
                    ((eu.current = l),
                    (es.current = l),
                    el({ playbackPxSpring: Math.min(Math.max(0, (l / N) * en), en), immediate: !0 })),
                    (e = requestAnimationFrame(t));
            };
        return (
            (e = requestAnimationFrame(t)),
            () => {
                cancelAnimationFrame(e), (eu.current = null), (eo.current = null);
            }
        );
    }, [a, F, N, en, el]);
    let ec = a && null != F && N > 0;
    l.useEffect(() => {
        let e;
        if (!ec) {
            if (null != F && N > 0 && en > 0) {
                let t = F();
                null != t && Number.isFinite(t) && ((es.current = t), (e = Math.min(Math.max(0, (t / N) * en), en)));
            }
            null == e && (e = null == et || Number.isNaN(et) ? 0 : et), el({ playbackPxSpring: e, immediate: !0 });
        }
    }, [et, ec, el, F, N, en]);
    let ed = N > 1,
        em = B?.indicators,
        ef = l.useMemo(() => {
            let e;
            return null != em && null != O && ed
                ? ((e = O.width),
                  em.map((t) => {
                      let n = Math.max(0, Math.min((0, u.DX)(t.timeSec, N, O) - t.widthPx / 2, e - t.widthPx));
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [em, N, O, ed]),
        eh = l.useMemo(
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
                })(en, ef),
            [en, ef],
        ),
        ep = B?.hoverExpansionPx ?? 0,
        eE = l.useCallback(
            (e) =>
                null != e &&
                null != ef &&
                ef.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (B?.animatingIndex === t.index ? ep : 0) &&
                        e <= t.rightPx + t.gapPx + (B?.animatingIndex === t.index ? ep : 0),
                ),
            [ef, B?.animatingIndex, ep],
        );
    return (0, r.jsx)("div", {
        className: x.jD,
        ref: U,
        "data-testid": G,
        style: {
            "--custom-timeline-height": `${null != T && z ? T : L}px`,
            "--custom-initial-timeline-height": `${P}px`,
        },
        children: (0, r.jsxs)(c.D, {
            className: i()(x.KF, { [x.uc]: v }),
            style: H ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: Z,
            onMouseDown: J,
            onMouseEnter: Q,
            onMouseLeave: _,
            onMouseMove: K,
            onKeyDown: $,
            tabIndex: v ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: x.PH,
                    ...q,
                    style: null != y ? { "--custom-segment-bg": y } : void 0,
                    children:
                        null != O &&
                        eh.map((e, t) =>
                            (0, r.jsx)(
                                b,
                                {
                                    segment: e,
                                    playbackPxSpring: er,
                                    playerState: S,
                                    isDragging: V,
                                    dragX: W,
                                    animatingIndex: B?.animatingIndex,
                                    expansionSpring: B?.expansionSpring,
                                    timelineWidth: en,
                                    preloadedBuffers: C,
                                    maxSeekableX: X,
                                    segmentBorderRadius: w,
                                    progressClassName: R,
                                },
                                t,
                            ),
                        ),
                }),
                null != O && ef?.map((e) => B?.renderIndicator(e, null != et && !Number.isNaN(et) ? et : 0)),
                z &&
                    null != ee &&
                    t &&
                    !eE(Y) &&
                    (0, r.jsx)(d.E, {
                        className: x.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != Y ? `${Y}px` : "auto" },
                        children: ee,
                    }),
                (z || D) &&
                    v &&
                    null != et &&
                    !eE(V && null != W ? W : et) &&
                    (0, r.jsx)(s.animated.div, {
                        ref: ea,
                        "data-testid": "discord-web-video-player-playhead",
                        className: x.lG,
                        style: { left: V && null != W ? `${W}px` : er.to((e) => `${e}px`) },
                    }),
            ],
        }),
    });
}
