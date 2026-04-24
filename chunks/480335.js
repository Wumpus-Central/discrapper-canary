t.d(r, { A: () => M, p: () => S });
var n = t(627968),
    a = t(64700),
    u = t(503698),
    s = t.n(u),
    l = t(854284),
    c = t(17928),
    o = t(775602),
    i = t(218394),
    f = t(203632),
    d = t(219220),
    A = t(940622),
    T = t(881106),
    m = t(284009),
    E = t.n(m),
    I = t(964486);
let h = 1e3 / 24,
    p = function (e) {
        let {
                minInterval: r = h,
                allowableMinInterval: t,
                droppedFramesCallbackThreshold: n,
                droppedFramesCallback: u,
                droppedFramesResetTime: s = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = a.useRef(r),
            c = a.useRef(0),
            o = a.useRef(void 0),
            i = a.useRef(void 0),
            f = a.useRef(!0),
            d = a.useRef(0),
            A = a.useRef(void 0),
            T = a.useCallback(() => {
                (d.current = 0), null != A.current && (clearTimeout(A.current), (A.current = void 0));
            }, []),
            m = a.useCallback(() => {
                (f.current = !1), cancelAnimationFrame(c.current), clearTimeout(A.current);
            }, []),
            p = a.useCallback(
                (r) => {
                    if (!f.current) return;
                    null == o.current && (o.current = r), null == i.current && (i.current = r);
                    let a = r - i.current;
                    r - o.current > 1.5 * Math.min(t ?? 120, l.current) &&
                        ((d.current += 1),
                        null != A.current && clearTimeout(A.current),
                        (A.current = setTimeout(T, s)),
                        null != n &&
                            d.current > n &&
                            (E()(
                                null != u,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            u() && (d.current = 0))),
                        (o.current = r),
                        a >= l.current - 3 && ((i.current = r), e(a)),
                        (c.current = requestAnimationFrame(p));
                },
                [t, T, s, n, u, e],
            ),
            N = a.useCallback(() => {
                (f.current = !0), (i.current = void 0), (c.current = requestAnimationFrame(p));
            }, [p]);
        return (
            a.useEffect(() => {
                l.current = r;
            }, [r]),
            (0, I.Ay)(() => ((c.current = requestAnimationFrame(p)), () => m())),
            { stop: m, reset: N, ticking: f }
        );
    };
var N = t(942426),
    y = t(735438);
t(323874), t(14289), t(35956);
var R = t(676279),
    b = t(38405),
    g = t(839827);
let v = (e) => {
        let {
                layerConfig: r,
                animationType: t,
                ticking: u,
                time: s,
                hasPlayedThrough: c,
                setHasPlayedThrough: o,
                maxLoops: i,
                loopEnd: f,
                bannerAdjustment: d,
                imageData: A,
            } = e,
            m = !0,
            E = 0,
            I = (0, R.gm)() && null != r.loopDelay && r.loopDelay > 0 && A?.src != null,
            [h, p] = a.useState("reset"),
            N = a.useRef(A?.src ?? r.src),
            [y, v] = a.useState(A?.src ?? r.src);
        a.useEffect(() => {
            if (!I || "layer" === h) return;
            let e = new AbortController();
            return (
                (async () => {
                    try {
                        let r = N.current,
                            t = await fetch(r, { signal: e.signal }),
                            n = await t.blob();
                        if (e.signal.aborted) return;
                        r !== A?.src && URL.revokeObjectURL(r),
                            (N.current = URL.createObjectURL(n)),
                            v(() => N.current);
                    } catch (e) {
                        if ("AbortError" === e.name) return null;
                        b.A.captureException(e);
                    }
                })(),
                () => {
                    e.abort();
                }
            );
        }, [h, I, v, A?.src]),
            a.useEffect(
                () => () => {
                    N.current !== A?.src && URL.revokeObjectURL(N.current);
                },
                [],
            );
        let S = (e) => {
            (0, R.gm)() && e !== h && p(e);
        };
        if (
            (u || (m = !1),
            s < r.start && (m = !1),
            !r.loop && s > r.duration + r.start && (m = !1),
            t === l.l.ANIMATION_TYPE_PERSISTENT && !c && null != i && s >= f && o(!0),
            r.loop && void 0 !== r.loopDelay && r.loopDelay > 0)
        ) {
            let e = r.duration + r.loopDelay;
            (E = Math.floor((s - r.start) / e)),
                s - r.start - E * e > r.duration &&
                    (t === l.l.ANIMATION_TYPE_INTERMITTENT && !c && null != i && E >= i && o(!0), (m = !1));
        }
        return m
            ? (S("layer"),
              (0, n.jsx)("img", {
                  src: y,
                  className: g.QZ,
                  style: { top: (r.position?.y ?? 0) - d, left: r.position?.x ?? 0 },
                  alt: "",
                  "aria-hidden": !0,
              }))
            : (S("reset"), (0, n.jsx)("img", { src: T.Ut, alt: "", "aria-hidden": !0 }));
    },
    S = (e) => {
        let {
                bannerAdjustment: r = 0,
                maxLoops: t,
                resetOnHover: u = !1,
                isHovering: c = !1,
                useOpacityOnHover: o = !0,
                autoPlay: i = !0,
                restartMethod: d,
                profileEffect: A,
                delayIntro: T = !0,
                layerData: m,
            } = e,
            E = a.useRef(null),
            [I, h] = a.useState([]),
            [N, y] = a.useState(0),
            [R, b] = a.useState(0),
            { accessibilityLabel: S } = A,
            P = T ? 500 : 0.1,
            [M, _] = a.useState(-P),
            {
                stop: O,
                reset: j,
                ticking: w,
            } = p((e) => {
                _((r) => r + e);
            }),
            k = a.useRef(P);
        a.useEffect(() => {
            k.current = P;
        }),
            a.useEffect(() => {
                _(-k.current), h(A.effects.sort((e, r) => (e.zIndex ?? 0) - (r.zIndex ?? 0)));
            }, [A]),
            a.useEffect(() => {
                let e = 0,
                    r = 1 / 0;
                I.forEach((t) => {
                    let n = t.start + t.duration;
                    n > e && (e = n), t.loop && t.start < r && (r = t.start);
                }),
                    y(r),
                    b(e);
            }, [b, I]);
        let [C, x] = a.useState(!1);
        return (
            a.useEffect(() => {
                !0 === i || c || (O(), _(0)),
                    !c && C && w.current && (O(), _(0)),
                    u &&
                        c &&
                        !w.current &&
                        (j(),
                        A.animationType === l.l.ANIMATION_TYPE_PERSISTENT ? _(d === f.HL.FromStart ? 0 : N) : _(0));
            }, [c, C, N, u, O, j, w, A.animationType, i, d]),
            (0, n.jsx)("div", {
                ref: E,
                className: s()(g.yC, { [g.yo]: c && o }),
                "aria-label": S,
                role: "img",
                children: (0, n.jsx)("div", {
                    className: g.vW,
                    children: I.map((e, a) => {
                        if (
                            !w.current &&
                            A.animationType === l.l.ANIMATION_TYPE_PERSISTENT &&
                            null != A.staticFrameSrc &&
                            0 === a &&
                            !0 === i
                        ) {
                            let { staticFrameSrc: t } = A;
                            return (0, n.jsx)(
                                "img",
                                {
                                    className: g.QZ,
                                    style: { top: e.position?.y ?? 0 - r, left: e.position?.x ?? 0 },
                                    src: t,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + a,
                            );
                        }
                        return (0, n.jsx)(
                            v,
                            {
                                layerConfig: e,
                                animationType: A.animationType,
                                ticking: w.current,
                                time: M,
                                hasPlayedThrough: C,
                                setHasPlayedThrough: x,
                                maxLoops: t,
                                loopEnd: R,
                                bannerAdjustment: r,
                                imageData: m?.[e.src],
                            },
                            e.src + a,
                        );
                    }),
                }),
            })
        );
    },
    P = (e) => {
        let {
                profileEffect: r,
                useThumbnail: t,
                bannerAdjustment: a = 0,
                isHovering: u = !1,
                useOpacityOnHover: l = !0,
            } = e,
            { reducedMotionSrc: c, thumbnailPreviewSrc: o, accessibilityLabel: i } = r;
        return (0, n.jsx)("div", {
            className: s()(g.yC, { [g.yo]: u && l }),
            "aria-label": i,
            role: "img",
            children: (0, n.jsx)("div", {
                className: g.vW,
                children: (0, n.jsx)("img", {
                    src: t && !u ? o : c,
                    className: g.QZ,
                    style: { top: 0 - a },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    M = (e) => {
        let r = (0, i.j)(),
            t = (0, c.bG)([o.A], () => o.A.useReducedMotion),
            u = (0, N.A)(e.skuId),
            s = (0, A.C)(u),
            f = a.useMemo(() => {
                if (null == u) return u;
                let e = (0, y.cloneDeep)(u),
                    r = Math.floor(
                        Math.random() *
                            (e.effects.reduce((e, r) => {
                                let t = r.randomizedSources?.length ?? 0;
                                return t > 0 && (e = 0 === e ? t : Math.min(e, t)), e;
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
                                (e.src = e.randomizedSources[r].src),
                            e
                        ),
                    )),
                    e
                );
            }, [u]),
            T = s ?? f,
            { autoPlay: m = !0, isHovering: E } = e,
            I = !!(
                (!r && e.shopPreview) ||
                (!r && u?.animationType === l.l.ANIMATION_TYPE_PERSISTENT) ||
                t ||
                (!1 === m && !1 === E)
            ),
            { loaded: h, layerData: p } = (0, d.A)({ skuId: u?.skuId, layers: u?.effects, playing: !1 === I });
        return null != u && null != T && (r || e.shopPreview || u.animationType !== l.l.ANIMATION_TYPE_INTERMITTENT)
            ? I
                ? (0, n.jsx)(P, {
                      useThumbnail: e.useThumbnail,
                      profileEffect: T,
                      bannerAdjustment: e.bannerAdjustment,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : h
                  ? (0, n.jsx)(S, { profileEffect: T, layerData: p, ...e })
                  : null
            : null;
    };
