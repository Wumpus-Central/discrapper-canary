"use strict";
n.d(t, { A: () => v, p: () => O });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(854284),
    l = n(17928),
    d = n(775602),
    _ = n(218394),
    u = n(203632),
    c = n(219220),
    E = n(940622),
    h = n(881106),
    m = n(284009),
    f = n.n(m),
    g = n(964486);
let p = 1e3 / 24,
    A = function (e) {
        let {
                minInterval: t = p,
                allowableMinInterval: n,
                droppedFramesCallbackThreshold: i,
                droppedFramesCallback: s,
                droppedFramesResetTime: a = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = r.useRef(t),
            l = r.useRef(0),
            d = r.useRef(void 0),
            _ = r.useRef(void 0),
            u = r.useRef(!0),
            c = r.useRef(0),
            E = r.useRef(void 0),
            h = r.useCallback(() => {
                (c.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            m = r.useCallback(() => {
                (u.current = !1), cancelAnimationFrame(l.current), clearTimeout(E.current);
            }, []),
            A = r.useCallback(
                (t) => {
                    if (!u.current) return;
                    null == d.current && (d.current = t), null == _.current && (_.current = t);
                    let r = t - _.current;
                    t - d.current > 1.5 * Math.min(n ?? 120, o.current) &&
                        ((c.current += 1),
                        null != E.current && clearTimeout(E.current),
                        (E.current = setTimeout(h, a)),
                        null != i &&
                            c.current > i &&
                            (f()(
                                null != s,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            s() && (c.current = 0))),
                        (d.current = t),
                        r >= o.current - 3 && ((_.current = t), e(r)),
                        (l.current = requestAnimationFrame(A));
                },
                [n, h, a, i, s, e],
            ),
            I = r.useCallback(() => {
                (u.current = !0), (_.current = void 0), (l.current = requestAnimationFrame(A));
            }, [A]);
        return (
            r.useEffect(() => {
                o.current = t;
            }, [t]),
            (0, g.Ay)(() => ((l.current = requestAnimationFrame(A)), () => m())),
            { stop: m, reset: I, ticking: u }
        );
    };
var I = n(942426),
    T = n(735438);
n(323874), n(14289), n(35956);
var S = n(676279),
    N = n(38405),
    C = n(839827);
let R = (e) => {
        let {
                layerConfig: t,
                animationType: n,
                ticking: s,
                time: a,
                hasPlayedThrough: l,
                setHasPlayedThrough: d,
                maxLoops: _,
                loopEnd: u,
                bannerAdjustment: c,
                imageData: E,
            } = e,
            m = !0,
            f = 0,
            g = (0, S.gm)() && null != t.loopDelay && t.loopDelay > 0 && E?.src != null,
            [p, A] = r.useState("reset"),
            I = r.useRef(E?.src ?? t.src),
            [T, R] = r.useState(E?.src ?? t.src);
        r.useEffect(() => {
            if (!g || "layer" === p) return;
            let e = new AbortController();
            return (
                (async () => {
                    try {
                        let t = I.current,
                            n = await fetch(t, { signal: e.signal }),
                            i = await n.blob();
                        if (e.signal.aborted) return;
                        t !== E?.src && URL.revokeObjectURL(t),
                            (I.current = URL.createObjectURL(i)),
                            R(() => I.current);
                    } catch (e) {
                        if ("AbortError" === e.name) return null;
                        N.A.captureException(e);
                    }
                })(),
                () => {
                    e.abort();
                }
            );
        }, [p, g, R, E?.src]),
            r.useEffect(
                () => () => {
                    I.current !== E?.src && URL.revokeObjectURL(I.current);
                },
                [],
            );
        let O = (e) => {
            (0, S.gm)() && e !== p && A(e);
        };
        if (
            (s || (m = !1),
            a < t.start && (m = !1),
            !t.loop && a > t.duration + t.start && (m = !1),
            n === o.l.ANIMATION_TYPE_PERSISTENT && !l && null != _ && a >= u && d(!0),
            t.loop && void 0 !== t.loopDelay && t.loopDelay > 0)
        ) {
            let e = t.duration + t.loopDelay;
            (f = Math.floor((a - t.start) / e)),
                a - t.start - f * e > t.duration &&
                    (n === o.l.ANIMATION_TYPE_INTERMITTENT && !l && null != _ && f >= _ && d(!0), (m = !1));
        }
        return m
            ? (O("layer"),
              (0, i.jsx)("img", {
                  src: T,
                  className: C.QZ,
                  style: { top: (t.position?.y ?? 0) - c, left: t.position?.x ?? 0 },
                  alt: "",
                  "aria-hidden": !0,
              }))
            : (O("reset"), (0, i.jsx)("img", { src: h.Ut, alt: "", "aria-hidden": !0 }));
    },
    O = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: s = !1,
                isHovering: l = !1,
                useOpacityOnHover: d = !0,
                autoPlay: _ = !0,
                restartMethod: c,
                profileEffect: E,
                delayIntro: h = !0,
                layerData: m,
            } = e,
            f = r.useRef(null),
            [g, p] = r.useState([]),
            [I, T] = r.useState(0),
            [S, N] = r.useState(0),
            { accessibilityLabel: O } = E,
            y = h ? 500 : 0.1,
            [v, D] = r.useState(-y),
            {
                stop: L,
                reset: b,
                ticking: w,
            } = A((e) => {
                D((t) => t + e);
            }),
            P = r.useRef(y);
        r.useEffect(() => {
            P.current = y;
        }),
            r.useEffect(() => {
                D(-P.current), p(E.effects.sort((e, t) => (e.zIndex ?? 0) - (t.zIndex ?? 0)));
            }, [E]),
            r.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                g.forEach((n) => {
                    let i = n.start + n.duration;
                    i > e && (e = i), n.loop && n.start < t && (t = n.start);
                }),
                    T(t),
                    N(e);
            }, [N, g]);
        let [k, M] = r.useState(!1);
        return (
            r.useEffect(() => {
                !0 === _ || l || (L(), D(0)),
                    !l && k && w.current && (L(), D(0)),
                    s &&
                        l &&
                        !w.current &&
                        (b(),
                        E.animationType === o.l.ANIMATION_TYPE_PERSISTENT ? D(c === u.HL.FromStart ? 0 : I) : D(0));
            }, [l, k, I, s, L, b, w, E.animationType, _, c]),
            (0, i.jsx)("div", {
                ref: f,
                className: a()(C.yC, { [C.yo]: l && d }),
                "aria-label": O,
                role: "img",
                children: (0, i.jsx)("div", {
                    className: C.vW,
                    children: g.map((e, r) => {
                        if (
                            !w.current &&
                            E.animationType === o.l.ANIMATION_TYPE_PERSISTENT &&
                            null != E.staticFrameSrc &&
                            0 === r &&
                            !0 === _
                        ) {
                            let { staticFrameSrc: n } = E;
                            return (0, i.jsx)(
                                "img",
                                {
                                    className: C.QZ,
                                    style: { top: e.position?.y ?? 0 - t, left: e.position?.x ?? 0 },
                                    src: n,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + r,
                            );
                        }
                        return (0, i.jsx)(
                            R,
                            {
                                layerConfig: e,
                                animationType: E.animationType,
                                ticking: w.current,
                                time: v,
                                hasPlayedThrough: k,
                                setHasPlayedThrough: M,
                                maxLoops: n,
                                loopEnd: S,
                                bannerAdjustment: t,
                                imageData: m?.[e.src],
                            },
                            e.src + r,
                        );
                    }),
                }),
            })
        );
    },
    y = (e) => {
        let {
                profileEffect: t,
                useThumbnail: n,
                bannerAdjustment: r = 0,
                isHovering: s = !1,
                useOpacityOnHover: o = !0,
            } = e,
            { reducedMotionSrc: l, thumbnailPreviewSrc: d, accessibilityLabel: _ } = t;
        return (0, i.jsx)("div", {
            className: a()(C.yC, { [C.yo]: s && o }),
            "aria-label": _,
            role: "img",
            children: (0, i.jsx)("div", {
                className: C.vW,
                children: (0, i.jsx)("img", {
                    src: n && !s ? d : l,
                    className: C.QZ,
                    style: { top: 0 - r },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    v = (e) => {
        let t = (0, _.j)(),
            n = (0, l.bG)([d.A], () => d.A.useReducedMotion),
            s = (0, I.A)(e.skuId),
            a = (0, E.C)(s),
            u = r.useMemo(() => {
                if (null == s) return s;
                let e = (0, T.cloneDeep)(s),
                    t = Math.floor(
                        Math.random() *
                            (e.effects.reduce((e, t) => {
                                let n = t.randomizedSources?.length ?? 0;
                                return n > 0 && (e = 0 === e ? n : Math.min(e, n)), e;
                            }, 0) -
                                1 -
                                0 +
                                1) +
                            0,
                    );
                return (
                    (e.effects = e.effects.map(
                        (e) => (
                            null != e.randomizedSources &&
                                e.randomizedSources.length > 0 &&
                                (e.src = e.randomizedSources[t].src),
                            e
                        ),
                    )),
                    e
                );
            }, [s]),
            h = a ?? u,
            { autoPlay: m = !0, isHovering: f } = e,
            g = !!(
                (!t && e.shopPreview) ||
                (!t && s?.animationType === o.l.ANIMATION_TYPE_PERSISTENT) ||
                n ||
                (!1 === m && !1 === f)
            ),
            { loaded: p, layerData: A } = (0, c.A)({ skuId: s?.skuId, layers: s?.effects, playing: !1 === g });
        return null != s && null != h && (t || e.shopPreview || s.animationType !== o.l.ANIMATION_TYPE_INTERMITTENT)
            ? g
                ? (0, i.jsx)(y, {
                      useThumbnail: e.useThumbnail,
                      profileEffect: h,
                      bannerAdjustment: e.bannerAdjustment,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : p
                  ? (0, i.jsx)(O, { profileEffect: h, layerData: A, ...e })
                  : null
            : null;
    };
