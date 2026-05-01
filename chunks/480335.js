"use strict";
n.d(t, { A: () => R, p: () => v });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(854284),
    l = n(17928),
    u = n(775602),
    c = n(218394),
    d = n(203632),
    _ = n(219220),
    f = n(940622),
    h = n(881106),
    p = n(284009),
    E = n.n(p),
    m = n(964486);
let g = 1e3 / 24,
    A = function (e) {
        let {
                minInterval: t = g,
                allowableMinInterval: n,
                droppedFramesCallbackThreshold: i,
                droppedFramesCallback: s,
                droppedFramesResetTime: a = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = r.useRef(t),
            l = r.useRef(0),
            u = r.useRef(void 0),
            c = r.useRef(void 0),
            d = r.useRef(!0),
            _ = r.useRef(0),
            f = r.useRef(void 0),
            h = r.useCallback(() => {
                (_.current = 0), null != f.current && (clearTimeout(f.current), (f.current = void 0));
            }, []),
            p = r.useCallback(() => {
                (d.current = !1), cancelAnimationFrame(l.current), clearTimeout(f.current);
            }, []),
            A = r.useCallback(
                (t) => {
                    if (!d.current) return;
                    null == u.current && (u.current = t), null == c.current && (c.current = t);
                    let r = t - c.current;
                    t - u.current > 1.5 * Math.min(n ?? 120, o.current) &&
                        ((_.current += 1),
                        null != f.current && clearTimeout(f.current),
                        (f.current = setTimeout(h, a)),
                        null != i &&
                            _.current > i &&
                            (E()(
                                null != s,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            s() && (_.current = 0))),
                        (u.current = t),
                        r >= o.current - 3 && ((c.current = t), e(r)),
                        (l.current = requestAnimationFrame(A));
                },
                [n, h, a, i, s, e],
            ),
            I = r.useCallback(() => {
                (d.current = !0), (c.current = void 0), (l.current = requestAnimationFrame(A));
            }, [A]);
        return (
            r.useEffect(() => {
                o.current = t;
            }, [t]),
            (0, m.Ay)(() => ((l.current = requestAnimationFrame(A)), () => p())),
            { stop: p, reset: I, ticking: d }
        );
    };
var I = n(942426),
    T = n(735438);
n(323874), n(14289), n(35956);
var S = n(676279),
    N = n(38405),
    y = n(839827);
let C = (e) => {
        let {
                layerConfig: t,
                animationType: n,
                ticking: s,
                time: a,
                hasPlayedThrough: l,
                setHasPlayedThrough: u,
                maxLoops: c,
                loopEnd: d,
                bannerAdjustment: _,
                imageData: f,
            } = e,
            p = !0,
            E = 0,
            m = (0, S.gm)() && null != t.loopDelay && t.loopDelay > 0 && f?.src != null,
            [g, A] = r.useState("reset"),
            I = r.useRef(f?.src ?? t.src),
            [T, C] = r.useState(f?.src ?? t.src);
        r.useEffect(() => {
            if (!m || "layer" === g) return;
            let e = new AbortController();
            return (
                (async () => {
                    try {
                        let t = I.current,
                            n = await fetch(t, { signal: e.signal }),
                            i = await n.blob();
                        if (e.signal.aborted) return;
                        t !== f?.src && URL.revokeObjectURL(t),
                            (I.current = URL.createObjectURL(i)),
                            C(() => I.current);
                    } catch (e) {
                        if ("AbortError" === e.name) return null;
                        N.A.captureException(e);
                    }
                })(),
                () => {
                    e.abort();
                }
            );
        }, [g, m, C, f?.src]),
            r.useEffect(
                () => () => {
                    I.current !== f?.src && URL.revokeObjectURL(I.current);
                },
                [],
            );
        let v = (e) => {
            (0, S.gm)() && e !== g && A(e);
        };
        if (
            (s || (p = !1),
            a < t.start && (p = !1),
            !t.loop && a > t.duration + t.start && (p = !1),
            n === o.l.ANIMATION_TYPE_PERSISTENT && !l && null != c && a >= d && u(!0),
            t.loop && void 0 !== t.loopDelay && t.loopDelay > 0)
        ) {
            let e = t.duration + t.loopDelay;
            (E = Math.floor((a - t.start) / e)),
                a - t.start - E * e > t.duration &&
                    (n === o.l.ANIMATION_TYPE_INTERMITTENT && !l && null != c && E >= c && u(!0), (p = !1));
        }
        return p
            ? (v("layer"),
              (0, i.jsx)("img", {
                  src: T,
                  className: y.QZ,
                  style: { top: (t.position?.y ?? 0) - _, left: t.position?.x ?? 0 },
                  alt: "",
                  "aria-hidden": !0,
              }))
            : (v("reset"), (0, i.jsx)("img", { src: h.Ut, alt: "", "aria-hidden": !0 }));
    },
    v = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: s = !1,
                isHovering: l = !1,
                useOpacityOnHover: u = !0,
                autoPlay: c = !0,
                restartMethod: _,
                profileEffect: f,
                delayIntro: h = !0,
                layerData: p,
            } = e,
            E = r.useRef(null),
            [m, g] = r.useState([]),
            [I, T] = r.useState(0),
            [S, N] = r.useState(0),
            { accessibilityLabel: v } = f,
            O = h ? 500 : 0.1,
            [R, b] = r.useState(-O),
            {
                stop: D,
                reset: L,
                ticking: w,
            } = A((e) => {
                b((t) => t + e);
            }),
            M = r.useRef(O);
        r.useEffect(() => {
            M.current = O;
        }),
            r.useEffect(() => {
                b(-M.current), g(f.effects.sort((e, t) => (e.zIndex ?? 0) - (t.zIndex ?? 0)));
            }, [f]),
            r.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                m.forEach((n) => {
                    let i = n.start + n.duration;
                    i > e && (e = i), n.loop && n.start < t && (t = n.start);
                }),
                    T(t),
                    N(e);
            }, [N, m]);
        let [P, x] = r.useState(!1);
        return (
            r.useEffect(() => {
                !0 === c || l || (D(), b(0)),
                    !l && P && w.current && (D(), b(0)),
                    s &&
                        l &&
                        !w.current &&
                        (L(),
                        f.animationType === o.l.ANIMATION_TYPE_PERSISTENT ? b(_ === d.HL.FromStart ? 0 : I) : b(0));
            }, [l, P, I, s, D, L, w, f.animationType, c, _]),
            (0, i.jsx)("div", {
                ref: E,
                className: a()(y.yC, { [y.yo]: l && u }),
                "aria-label": v,
                role: "img",
                children: (0, i.jsx)("div", {
                    className: y.vW,
                    children: m.map((e, r) => {
                        if (
                            !w.current &&
                            f.animationType === o.l.ANIMATION_TYPE_PERSISTENT &&
                            null != f.staticFrameSrc &&
                            0 === r &&
                            !0 === c
                        ) {
                            let { staticFrameSrc: n } = f;
                            return (0, i.jsx)(
                                "img",
                                {
                                    className: y.QZ,
                                    style: { top: e.position?.y ?? 0 - t, left: e.position?.x ?? 0 },
                                    src: n,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + r,
                            );
                        }
                        return (0, i.jsx)(
                            C,
                            {
                                layerConfig: e,
                                animationType: f.animationType,
                                ticking: w.current,
                                time: R,
                                hasPlayedThrough: P,
                                setHasPlayedThrough: x,
                                maxLoops: n,
                                loopEnd: S,
                                bannerAdjustment: t,
                                imageData: p?.[e.src],
                            },
                            e.src + r,
                        );
                    }),
                }),
            })
        );
    },
    O = (e) => {
        let {
                profileEffect: t,
                useThumbnail: n,
                bannerAdjustment: r = 0,
                isHovering: s = !1,
                useOpacityOnHover: o = !0,
            } = e,
            { reducedMotionSrc: l, thumbnailPreviewSrc: u, accessibilityLabel: c } = t;
        return (0, i.jsx)("div", {
            className: a()(y.yC, { [y.yo]: s && o }),
            "aria-label": c,
            role: "img",
            children: (0, i.jsx)("div", {
                className: y.vW,
                children: (0, i.jsx)("img", {
                    src: n && !s ? u : l,
                    className: y.QZ,
                    style: { top: 0 - r },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    R = (e) => {
        let t = (0, c.j)(),
            n = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            s = (0, I.A)(e.skuId),
            a = (0, f.C)(s),
            d = r.useMemo(() => {
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
            h = a ?? d,
            { autoPlay: p = !0, isHovering: E } = e,
            m = !!(
                (!t && e.shopPreview) ||
                (!t && s?.animationType === o.l.ANIMATION_TYPE_PERSISTENT) ||
                n ||
                (!1 === p && !1 === E)
            ),
            { loaded: g, layerData: A } = (0, _.A)({ skuId: s?.skuId, layers: s?.effects, playing: !1 === m });
        return null != s && null != h && (t || e.shopPreview || s.animationType !== o.l.ANIMATION_TYPE_INTERMITTENT)
            ? m
                ? (0, i.jsx)(O, {
                      useThumbnail: e.useThumbnail,
                      profileEffect: h,
                      bannerAdjustment: e.bannerAdjustment,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : g
                  ? (0, i.jsx)(v, { profileEffect: h, layerData: A, ...e })
                  : null
            : null;
    };
