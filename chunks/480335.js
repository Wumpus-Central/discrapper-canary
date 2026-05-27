"use strict";
n.d(t, { A: () => O, p: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(631903),
    l = n(17928),
    u = n(775602),
    c = n(218394),
    d = n(203632),
    _ = n(219220),
    h = n(940622),
    f = n(881106),
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
            h = r.useRef(void 0),
            f = r.useCallback(() => {
                (_.current = 0), null != h.current && (clearTimeout(h.current), (h.current = void 0));
            }, []),
            p = r.useCallback(() => {
                (d.current = !1), cancelAnimationFrame(l.current), clearTimeout(h.current);
            }, []),
            A = r.useCallback(
                (t) => {
                    if (!d.current) return;
                    null == u.current && (u.current = t), null == c.current && (c.current = t);
                    let r = t - c.current;
                    t - u.current > 1.5 * Math.min(n ?? 120, o.current) &&
                        ((_.current += 1),
                        null != h.current && clearTimeout(h.current),
                        (h.current = setTimeout(f, a)),
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
                [n, f, a, i, s, e],
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
    y = n(38405),
    N = n(839827);
let v = (e) => {
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
                imageData: h,
            } = e,
            p = !0,
            E = 0,
            m = (0, S.gm)() && null != t.loopDelay && t.loopDelay > 0 && h?.src != null,
            [g, A] = r.useState("reset"),
            I = r.useRef(h?.src ?? t.src),
            [T, v] = r.useState(h?.src ?? t.src);
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
                        t !== h?.src && URL.revokeObjectURL(t),
                            (I.current = URL.createObjectURL(i)),
                            v(() => I.current);
                    } catch (e) {
                        if ("AbortError" === e.name) return null;
                        y.A.captureException(e);
                    }
                })(),
                () => {
                    e.abort();
                }
            );
        }, [g, m, v, h?.src]),
            r.useEffect(
                () => () => {
                    I.current !== h?.src && URL.revokeObjectURL(I.current);
                },
                [],
            );
        let C = (e) => {
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
            ? (C("layer"),
              (0, i.jsx)("img", {
                  src: T,
                  className: N.QZ,
                  style: { top: (t.position?.y ?? 0) - _, left: t.position?.x ?? 0 },
                  alt: "",
                  "aria-hidden": !0,
              }))
            : (C("reset"), (0, i.jsx)("img", { src: f.Ut, alt: "", "aria-hidden": !0 }));
    },
    C = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: s = !1,
                isHovering: l = !1,
                useOpacityOnHover: u = !0,
                autoPlay: c = !0,
                restartMethod: _,
                profileEffect: h,
                delayIntro: f = !0,
                layerData: p,
            } = e,
            E = r.useRef(null),
            [m, g] = r.useState([]),
            [I, T] = r.useState(0),
            [S, y] = r.useState(0),
            { accessibilityLabel: C } = h,
            R = f ? 500 : 0.1,
            [O, b] = r.useState(-R),
            {
                stop: D,
                reset: L,
                ticking: w,
            } = A((e) => {
                b((t) => t + e);
            }),
            M = r.useRef(R);
        r.useEffect(() => {
            M.current = R;
        }),
            r.useEffect(() => {
                b(-M.current), g(h.effects.sort((e, t) => (e.zIndex ?? 0) - (t.zIndex ?? 0)));
            }, [h]),
            r.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                m.forEach((n) => {
                    let i = n.start + n.duration;
                    i > e && (e = i), n.loop && n.start < t && (t = n.start);
                }),
                    T(t),
                    y(e);
            }, [y, m]);
        let [P, x] = r.useState(!1);
        return (
            r.useEffect(() => {
                !0 === c || l || (D(), b(0)),
                    !l && P && w.current && (D(), b(0)),
                    s &&
                        l &&
                        !w.current &&
                        (L(),
                        h.animationType === o.l.ANIMATION_TYPE_PERSISTENT ? b(_ === d.HL.FromStart ? 0 : I) : b(0));
            }, [l, P, I, s, D, L, w, h.animationType, c, _]),
            (0, i.jsx)("div", {
                ref: E,
                className: a()(N.yC, { [N.yo]: l && u }),
                "aria-label": C,
                role: "img",
                children: (0, i.jsx)("div", {
                    className: N.vW,
                    children: m.map((e, r) => {
                        if (
                            !w.current &&
                            h.animationType === o.l.ANIMATION_TYPE_PERSISTENT &&
                            null != h.staticFrameSrc &&
                            0 === r &&
                            !0 === c
                        ) {
                            let { staticFrameSrc: n } = h;
                            return (0, i.jsx)(
                                "img",
                                {
                                    className: N.QZ,
                                    style: { top: e.position?.y ?? 0 - t, left: e.position?.x ?? 0 },
                                    src: n,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + r,
                            );
                        }
                        return (0, i.jsx)(
                            v,
                            {
                                layerConfig: e,
                                animationType: h.animationType,
                                ticking: w.current,
                                time: O,
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
    R = (e) => {
        let {
                profileEffect: t,
                useThumbnail: n,
                bannerAdjustment: r = 0,
                isHovering: s = !1,
                useOpacityOnHover: o = !0,
            } = e,
            { reducedMotionSrc: l, thumbnailPreviewSrc: u, accessibilityLabel: c } = t;
        return (0, i.jsx)("div", {
            className: a()(N.yC, { [N.yo]: s && o }),
            "aria-label": c,
            role: "img",
            children: (0, i.jsx)("div", {
                className: N.vW,
                children: (0, i.jsx)("img", {
                    src: n && !s ? u : l,
                    className: N.QZ,
                    style: { top: 0 - r },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    O = (e) => {
        let t = (0, c.j)(),
            n = (0, l.bG)([u.A], () => u.A.useReducedMotion),
            s = (0, I.A)(e.skuId),
            a = (0, h.C)(s),
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
            f = a ?? d,
            { autoPlay: p = !0, isHovering: E } = e,
            m = !!(
                (!t && e.shopPreview) ||
                (!t && s?.animationType === o.l.ANIMATION_TYPE_PERSISTENT) ||
                n ||
                (!1 === p && !1 === E)
            ),
            { loaded: g, layerData: A } = (0, _.A)({ skuId: s?.skuId, layers: s?.effects, playing: !1 === m });
        return null != s && null != f && (t || e.shopPreview || s.animationType !== o.l.ANIMATION_TYPE_INTERMITTENT)
            ? m
                ? (0, i.jsx)(R, {
                      useThumbnail: e.useThumbnail,
                      profileEffect: f,
                      bannerAdjustment: e.bannerAdjustment,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : g
                  ? (0, i.jsx)(C, { profileEffect: f, layerData: A, ...e })
                  : null
            : null;
    };
