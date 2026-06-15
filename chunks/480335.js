t.d(r, { A: () => g, p: () => b });
var n = t(627968),
    a = t(64700),
    u = t(503698),
    l = t.n(u),
    s = t(631903),
    c = t(17928),
    i = t(775602),
    o = t(218394),
    d = t(203632),
    A = t(855915),
    T = t(940622),
    f = t(881106),
    m = t(284009),
    E = t.n(m),
    I = t(964486);
let p = 1e3 / 24,
    N = function (e) {
        let {
                minInterval: r = p,
                allowableMinInterval: t,
                droppedFramesCallbackThreshold: n,
                droppedFramesCallback: u,
                droppedFramesResetTime: l = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = a.useRef(r),
            c = a.useRef(0),
            i = a.useRef(void 0),
            o = a.useRef(void 0),
            d = a.useRef(!0),
            A = a.useRef(0),
            T = a.useRef(void 0),
            f = a.useCallback(() => {
                (A.current = 0), null != T.current && (clearTimeout(T.current), (T.current = void 0));
            }, []),
            m = a.useCallback(() => {
                (d.current = !1), cancelAnimationFrame(c.current), clearTimeout(T.current);
            }, []),
            N = a.useCallback(
                (r) => {
                    if (!d.current) return;
                    null == i.current && (i.current = r), null == o.current && (o.current = r);
                    let a = r - o.current;
                    r - i.current > 1.5 * Math.min(t ?? 120, s.current) &&
                        ((A.current += 1),
                        null != T.current && clearTimeout(T.current),
                        (T.current = setTimeout(f, l)),
                        null != n &&
                            A.current > n &&
                            (E()(
                                null != u,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            u() && (A.current = 0))),
                        (i.current = r),
                        a >= s.current - 3 && ((o.current = r), e(a)),
                        (c.current = requestAnimationFrame(N));
                },
                [t, f, l, n, u, e],
            ),
            h = a.useCallback(() => {
                (d.current = !0), (o.current = void 0), (c.current = requestAnimationFrame(N));
            }, [N]);
        return (
            a.useEffect(() => {
                s.current = r;
            }, [r]),
            (0, I.Ay)(() => ((c.current = requestAnimationFrame(N)), () => m())),
            { stop: m, reset: h, ticking: d }
        );
    };
var h = t(942426),
    y = t(735438);
t(323874), t(14289), t(35956);
var R = t(676279),
    v = t(38405),
    S = t(839827);
let _ = (e) => {
        let {
                layerConfig: r,
                animationType: t,
                ticking: u,
                time: l,
                hasPlayedThrough: c,
                setHasPlayedThrough: i,
                maxLoops: o,
                loopEnd: d,
                bannerAdjustment: A,
                imageData: T,
            } = e,
            m = !0,
            E = 0,
            [I, p] = a.useState("reset"),
            N = a.useRef(T?.src ?? r.src),
            [h, y] = a.useState(T?.src ?? r.src),
            _ = a.useRef(null),
            b = (0, R.gm)() && null != r.loopDelay && r.loopDelay > 0 && T?.src != null;
        a.useEffect(() => {
            if (!b || "layer" === I) return;
            let e = new AbortController();
            return (
                (async () => {
                    try {
                        if (null == _.current) {
                            let r = await fetch(T.src, { signal: e.signal }),
                                t = await r.blob();
                            if (e.signal.aborted) return;
                            _.current = t;
                        }
                        N.current !== T?.src && URL.revokeObjectURL(N.current),
                            (N.current = URL.createObjectURL(_.current)),
                            y(() => N.current);
                    } catch (e) {
                        if ("AbortError" === e.name) return null;
                        v.A.captureException(e);
                    }
                })(),
                () => {
                    e.abort();
                }
            );
        }, [I, b, y, T?.src]),
            a.useEffect(
                () => () => {
                    N.current !== T?.src && URL.revokeObjectURL(N.current);
                },
                [],
            );
        let P = (e) => {
            (0, R.gm)() && e !== I && p(e);
        };
        if (
            (u || (m = !1),
            l < r.start && (m = !1),
            !r.loop && l > r.duration + r.start && (m = !1),
            t === s.l.ANIMATION_TYPE_PERSISTENT && !c && null != o && l >= d && i(!0),
            r.loop && void 0 !== r.loopDelay && r.loopDelay > 0)
        ) {
            let e = r.duration + r.loopDelay;
            (E = Math.floor((l - r.start) / e)),
                l - r.start - E * e > r.duration &&
                    (t === s.l.ANIMATION_TYPE_INTERMITTENT && !c && null != o && E >= o && i(!0), (m = !1));
        }
        return m
            ? (P("layer"),
              (0, n.jsx)("img", {
                  src: h,
                  className: S.QZ,
                  style: { top: (r.position?.y ?? 0) - A, left: r.position?.x ?? 0 },
                  alt: "",
                  "aria-hidden": !0,
              }))
            : (P("reset"), (0, n.jsx)("img", { src: f.Ut, alt: "", "aria-hidden": !0 }));
    },
    b = (e) => {
        let {
                bannerAdjustment: r = 0,
                maxLoops: t,
                resetOnHover: u = !1,
                isHovering: c = !1,
                useOpacityOnHover: i = !0,
                autoPlay: o = !0,
                restartMethod: A,
                profileEffect: T,
                delayIntro: f = !0,
                layerData: m,
            } = e,
            E = a.useRef(null),
            [I, p] = a.useState([]),
            [h, y] = a.useState(0),
            [R, v] = a.useState(0),
            { accessibilityLabel: b } = T,
            P = f ? 500 : 0.1,
            [g, M] = a.useState(-P),
            {
                stop: O,
                reset: j,
                ticking: x,
            } = N((e) => {
                M((r) => r + e);
            }),
            C = a.useRef(P);
        a.useEffect(() => {
            C.current = P;
        }),
            a.useEffect(() => {
                M(-C.current), p(T.effects.sort((e, r) => (e.zIndex ?? 0) - (r.zIndex ?? 0)));
            }, [T]),
            a.useEffect(() => {
                let e = 0,
                    r = 1 / 0;
                I.forEach((t) => {
                    let n = t.start + t.duration;
                    n > e && (e = n), t.loop && t.start < r && (r = t.start);
                }),
                    y(r),
                    v(e);
            }, [v, I]);
        let [k, Y] = a.useState(!1);
        return (
            a.useEffect(() => {
                !0 === o || c || (O(), M(0)),
                    !c && k && x.current && (O(), M(0)),
                    u &&
                        c &&
                        !x.current &&
                        (j(),
                        T.animationType === s.l.ANIMATION_TYPE_PERSISTENT ? M(A === d.HL.FromStart ? 0 : h) : M(0));
            }, [c, k, h, u, O, j, x, T.animationType, o, A]),
            (0, n.jsx)("div", {
                ref: E,
                className: l()(S.yC, { [S.yo]: c && i }),
                "aria-label": b,
                role: "img",
                children: (0, n.jsx)("div", {
                    className: S.vW,
                    children: I.map((e, a) => {
                        if (
                            !x.current &&
                            T.animationType === s.l.ANIMATION_TYPE_PERSISTENT &&
                            null != T.staticFrameSrc &&
                            0 === a &&
                            !0 === o
                        ) {
                            let { staticFrameSrc: t } = T;
                            return (0, n.jsx)(
                                "img",
                                {
                                    className: S.QZ,
                                    style: { top: e.position?.y ?? 0 - r, left: e.position?.x ?? 0 },
                                    src: t,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + a,
                            );
                        }
                        return (0, n.jsx)(
                            _,
                            {
                                layerConfig: e,
                                animationType: T.animationType,
                                ticking: x.current,
                                time: g,
                                hasPlayedThrough: k,
                                setHasPlayedThrough: Y,
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
                useOpacityOnHover: s = !0,
            } = e,
            { reducedMotionSrc: c, thumbnailPreviewSrc: i, accessibilityLabel: o } = r;
        return (0, n.jsx)("div", {
            className: l()(S.yC, { [S.yo]: u && s }),
            "aria-label": o,
            role: "img",
            children: (0, n.jsx)("div", {
                className: S.vW,
                children: (0, n.jsx)("img", {
                    src: t && !u ? i : c,
                    className: S.QZ,
                    style: { top: 0 - a },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    g = (e) => {
        let r = (0, o.j)(),
            t = (0, c.bG)([i.Ay], () => i.Ay.useReducedMotion),
            u = (0, h.A)(e.skuId),
            l = (0, T.C)(u),
            d = a.useMemo(() => {
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
            f = l ?? d,
            { autoPlay: m = !0, isHovering: E } = e,
            I = !!(
                (!r && e.shopPreview) ||
                (!r && u?.animationType === s.l.ANIMATION_TYPE_PERSISTENT) ||
                t ||
                (!1 === m && !1 === E)
            ),
            { loaded: p, layerData: N } = (0, A.A)({ skuId: u?.skuId, layers: I ? void 0 : u?.effects });
        return null != u && null != f && (r || e.shopPreview || u.animationType !== s.l.ANIMATION_TYPE_INTERMITTENT)
            ? I
                ? (0, n.jsx)(P, {
                      useThumbnail: e.useThumbnail,
                      profileEffect: f,
                      bannerAdjustment: e.bannerAdjustment,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : p
                  ? (0, n.jsx)(b, { profileEffect: f, layerData: N, ...e })
                  : null
            : null;
    };
