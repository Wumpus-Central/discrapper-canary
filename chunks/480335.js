t.d(r, { A: () => M, p: () => S });
var n = t(627968),
    l = t(64700),
    a = t(503698),
    u = t.n(a),
    s = t(631903),
    o = t(17928),
    c = t(775602),
    i = t(218394),
    d = t(203632),
    f = t(855915),
    A = t(940622),
    m = t(881106),
    T = t(284009),
    E = t.n(T),
    I = t(964486);
let p = 1e3 / 24,
    h = function (e) {
        let {
                minInterval: r = p,
                allowableMinInterval: t,
                droppedFramesCallbackThreshold: n,
                droppedFramesCallback: a,
                droppedFramesResetTime: u = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = l.useRef(r),
            o = l.useRef(0),
            c = l.useRef(void 0),
            i = l.useRef(void 0),
            d = l.useRef(!0),
            f = l.useRef(0),
            A = l.useRef(void 0),
            m = l.useCallback(() => {
                (f.current = 0), null != A.current && (clearTimeout(A.current), (A.current = void 0));
            }, []),
            T = l.useCallback(() => {
                (d.current = !1), cancelAnimationFrame(o.current), clearTimeout(A.current);
            }, []),
            h = l.useCallback(
                (r) => {
                    if (!d.current) return;
                    null == c.current && (c.current = r), null == i.current && (i.current = r);
                    let l = r - i.current;
                    r - c.current > 1.5 * Math.min(t ?? 120, s.current) &&
                        ((f.current += 1),
                        null != A.current && clearTimeout(A.current),
                        (A.current = setTimeout(m, u)),
                        null != n &&
                            f.current > n &&
                            (E()(
                                null != a,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            a() && (f.current = 0))),
                        (c.current = r),
                        l >= s.current - 3 && ((i.current = r), e(l)),
                        (o.current = requestAnimationFrame(h));
                },
                [t, m, u, n, a, e],
            ),
            N = l.useCallback(() => {
                (d.current = !0),
                    (i.current = void 0),
                    cancelAnimationFrame(o.current),
                    (o.current = requestAnimationFrame(h));
            }, [h]);
        return (
            l.useEffect(() => {
                s.current = r;
            }, [r]),
            (0, I.Ay)(() => ((o.current = requestAnimationFrame(h)), () => T())),
            { stop: T, reset: N, ticking: d }
        );
    };
var N = t(942426),
    y = t(735438);
function b(e) {
    if (null == e) return e;
    let r = (0, y.cloneDeep)(e),
        t = Math.floor(
            Math.random() *
                (r.effects.reduce((e, r) => {
                    let t = r.randomizedSources?.length ?? 0;
                    return t > 0 && (e = 0 === e ? t : Math.min(e, t)), e;
                }, 0) -
                    1 -
                    0 +
                    1) +
                0,
        );
    return (
        (r.effects = r.effects.map(
            (e) => (
                null != e.randomizedSources && e.randomizedSources.length > 0 && (e.src = e.randomizedSources[t].src), e
            ),
        )),
        r
    );
}
t(323874), t(14289), t(35956);
var v = t(676279),
    g = t(38405),
    R = t(839827);
let P = (e) => {
        let {
                layerConfig: r,
                animationType: t,
                ticking: a,
                time: u,
                hasPlayedThrough: o,
                setHasPlayedThrough: c,
                maxLoops: i,
                loopEnd: d,
                bannerAdjustment: f,
                imageData: A,
            } = e,
            T = !0,
            E = 0,
            [I, p] = l.useState("reset"),
            h = l.useRef(A?.src ?? r.src),
            [N, y] = l.useState(A?.src ?? r.src),
            b = l.useRef(null),
            P = (0, v.gm)() && null != r.loopDelay && r.loopDelay > 0 && A?.src != null;
        function S(e) {
            (0, v.gm)() && e !== I && p(e);
        }
        if (
            (l.useEffect(() => {
                if (!P || "layer" === I) return;
                let e = new AbortController();
                return (
                    (async () => {
                        try {
                            if (null == b.current) {
                                let r = await fetch(A.src, { signal: e.signal }),
                                    t = await r.blob();
                                if (e.signal.aborted) return;
                                b.current = t;
                            }
                            h.current !== A?.src && URL.revokeObjectURL(h.current),
                                (h.current = URL.createObjectURL(b.current)),
                                y(() => h.current);
                        } catch (e) {
                            if ("AbortError" === e.name) return null;
                            g.A.captureException(e);
                        }
                    })(),
                    () => {
                        e.abort();
                    }
                );
            }, [I, P, y, A?.src]),
            l.useEffect(
                () => () => {
                    h.current !== A?.src && URL.revokeObjectURL(h.current);
                },
                [],
            ),
            a || (T = !1),
            u < r.start && (T = !1),
            !r.loop && u > r.duration + r.start && (T = !1),
            t === s.l.ANIMATION_TYPE_PERSISTENT && !o && null != i && u >= d && c(!0),
            r.loop && void 0 !== r.loopDelay && r.loopDelay > 0)
        ) {
            let e = r.duration + r.loopDelay;
            (E = Math.floor((u - r.start) / e)),
                u - r.start - E * e > r.duration &&
                    (t === s.l.ANIMATION_TYPE_INTERMITTENT && !o && null != i && E >= i && c(!0), (T = !1));
        }
        return T
            ? (S("layer"),
              (0, n.jsx)("img", {
                  src: N,
                  className: R.QZ,
                  style: { top: (r.position?.y ?? 0) - f, left: r.position?.x ?? 0 },
                  alt: "",
                  "aria-hidden": !0,
              }))
            : (S("reset"), (0, n.jsx)("img", { src: m.Ut, alt: "", "aria-hidden": !0 }));
    },
    S = (e) => {
        let {
                bannerAdjustment: r = 0,
                maxLoops: t,
                resetOnHover: a = !1,
                isHovering: o = !1,
                useOpacityOnHover: c = !0,
                autoPlay: i = !0,
                restartMethod: f,
                profileEffect: A,
                delayIntro: m = !0,
                restartKey: T,
                layerData: E,
            } = e,
            I = l.useRef(null),
            p = l.useMemo(() => A.effects.sort((e, r) => (e.zIndex ?? 0) - (r.zIndex ?? 0)), [A]),
            { accessibilityLabel: N } = A,
            { firstLoop: y, loopEnd: b } = l.useMemo(() => {
                let e = 0,
                    r = 1 / 0;
                return (
                    p.forEach((t) => {
                        let n = t.start + t.duration;
                        n > e && (e = n), t.loop && t.start < r && (r = t.start);
                    }),
                    { firstLoop: r, loopEnd: e }
                );
            }, [p]),
            v = m ? 500 : 0.1,
            [g, S] = l.useState(-v),
            {
                stop: _,
                reset: M,
                ticking: C,
            } = h(
                l.useCallback((e) => {
                    S((r) => r + e);
                }, []),
            ),
            O = l.useRef(v);
        l.useEffect(() => {
            O.current = v;
        }),
            l.useEffect(() => {
                S(-O.current);
            }, [A]);
        let [j, k] = l.useState(!1);
        return (
            l.useEffect(() => {
                null != T && (S(-O.current), k(!1), C.current || M());
            }, [T, M, C]),
            l.useEffect(() => {
                !0 === i || o || (_(), S(0)),
                    !o && j && C.current && (_(), S(0)),
                    a &&
                        o &&
                        !C.current &&
                        (M(),
                        A.animationType === s.l.ANIMATION_TYPE_PERSISTENT ? S(f === d.HL.FromStart ? 0 : y) : S(0));
            }, [o, j, y, a, _, M, C, A.animationType, i, f]),
            (0, n.jsx)("div", {
                ref: I,
                className: u()(R.yC, { [R.yo]: o && c }),
                "aria-label": N,
                role: "img",
                children: (0, n.jsx)("div", {
                    className: R.vW,
                    children: p.map((e, l) => {
                        if (
                            !C.current &&
                            A.animationType === s.l.ANIMATION_TYPE_PERSISTENT &&
                            null != A.staticFrameSrc &&
                            0 === l &&
                            !0 === i
                        ) {
                            let { staticFrameSrc: t } = A;
                            return (0, n.jsx)(
                                "img",
                                {
                                    className: R.QZ,
                                    style: { top: e.position?.y ?? 0 - r, left: e.position?.x ?? 0 },
                                    src: t,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + l,
                            );
                        }
                        return (0, n.jsx)(
                            P,
                            {
                                layerConfig: e,
                                animationType: A.animationType,
                                ticking: C.current,
                                time: g,
                                hasPlayedThrough: j,
                                setHasPlayedThrough: k,
                                maxLoops: t,
                                loopEnd: b,
                                bannerAdjustment: r,
                                imageData: E?.[e.src],
                            },
                            e.src + l,
                        );
                    }),
                }),
            })
        );
    };
function _(e) {
    let {
            profileEffect: r,
            useThumbnail: t,
            bannerAdjustment: l = 0,
            isHovering: a = !1,
            useOpacityOnHover: s = !0,
        } = e,
        { reducedMotionSrc: o, thumbnailPreviewSrc: c, accessibilityLabel: i } = r;
    return (0, n.jsx)("div", {
        className: u()(R.yC, { [R.yo]: a && s }),
        "aria-label": i,
        role: "img",
        children: (0, n.jsx)("div", {
            className: R.vW,
            children: (0, n.jsx)("img", {
                src: t && !a ? c : o,
                className: R.QZ,
                style: { top: 0 - l },
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
let M = function (e) {
    let r = (0, i.j)(),
        t = (0, o.bG)([c.Ay], () => c.Ay.useReducedMotion),
        a = (0, N.A)(e.skuId),
        u = (0, A.C)(a),
        d = (function (e) {
            let [r, t] = l.useState(e),
                [n, a] = l.useState(b(e));
            return (0, y.isEqual)(r, e) || (t(e), a(b(e))), n;
        })(a),
        m = u ?? d,
        { autoPlay: T = !0, isHovering: E } = e,
        I = !!(
            (!r && e.shopPreview) ||
            (!r && a?.animationType === s.l.ANIMATION_TYPE_PERSISTENT) ||
            t ||
            (!1 === T && !1 === E)
        ),
        { loaded: p, layerData: h } = (0, f.A)({ skuId: a?.skuId, layers: I ? void 0 : a?.effects });
    return null != a && null != m && (r || e.shopPreview || a.animationType !== s.l.ANIMATION_TYPE_INTERMITTENT)
        ? I
            ? (0, n.jsx)(_, {
                  useThumbnail: e.useThumbnail,
                  profileEffect: m,
                  bannerAdjustment: e.bannerAdjustment,
                  isHovering: e.isHovering,
                  useOpacityOnHover: e.useOpacityOnHover,
              })
            : p
              ? (0, n.jsx)(S, { profileEffect: m, layerData: h, ...e })
              : null
        : null;
};
