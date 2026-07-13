"use strict";
n.d(t, { A: () => y, p: () => L });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(631903),
    o = n(17928),
    d = n(775602),
    c = n(218394),
    u = n(203632),
    _ = n(855915),
    E = n(940622),
    A = n(881106),
    h = n(284009),
    I = n.n(h),
    f = n(964486);
let p = 1e3 / 24,
    T = function (e) {
        let {
                minInterval: t = p,
                allowableMinInterval: n,
                droppedFramesCallbackThreshold: i,
                droppedFramesCallback: a,
                droppedFramesResetTime: s = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = r.useRef(t),
            o = r.useRef(0),
            d = r.useRef(void 0),
            c = r.useRef(void 0),
            u = r.useRef(!0),
            _ = r.useRef(0),
            E = r.useRef(void 0),
            A = r.useCallback(() => {
                (_.current = 0), null != E.current && (clearTimeout(E.current), (E.current = void 0));
            }, []),
            h = r.useCallback(() => {
                (u.current = !1), cancelAnimationFrame(o.current), clearTimeout(E.current);
            }, []),
            T = r.useCallback(
                (t) => {
                    if (!u.current) return;
                    null == d.current && (d.current = t), null == c.current && (c.current = t);
                    let r = t - c.current;
                    t - d.current > 1.5 * Math.min(n ?? 120, l.current) &&
                        ((_.current += 1),
                        null != E.current && clearTimeout(E.current),
                        (E.current = setTimeout(A, s)),
                        null != i &&
                            _.current > i &&
                            (I()(
                                null != a,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            a() && (_.current = 0))),
                        (d.current = t),
                        r >= l.current - 3 && ((c.current = t), e(r)),
                        (o.current = requestAnimationFrame(T));
                },
                [n, A, s, i, a, e],
            ),
            m = r.useCallback(() => {
                (u.current = !0),
                    (c.current = void 0),
                    cancelAnimationFrame(o.current),
                    (o.current = requestAnimationFrame(T));
            }, [T]);
        return (
            r.useEffect(() => {
                l.current = t;
            }, [t]),
            (0, f.Ay)(() => ((o.current = requestAnimationFrame(T)), () => h())),
            { stop: h, reset: m, ticking: u }
        );
    };
var m = n(942426),
    g = n(735438);
function S(e) {
    if (null == e) return e;
    let t = (0, g.cloneDeep)(e),
        n = Math.floor(
            Math.random() *
                (t.effects.reduce((e, t) => {
                    let n = t.randomizedSources?.length ?? 0;
                    return n > 0 && (e = 0 === e ? n : Math.min(e, n)), e;
                }, 0) -
                    1 -
                    0 +
                    1) +
                0,
        );
    return (
        (t.effects = t.effects.map(
            (e) => (
                null != e.randomizedSources && e.randomizedSources.length > 0 && (e.src = e.randomizedSources[n].src), e
            ),
        )),
        t
    );
}
n(323874), n(14289), n(35956);
var N = n(676279),
    C = n(38405),
    O = n(839827);
let R = (e) => {
        let {
                layerConfig: t,
                animationType: n,
                ticking: a,
                time: s,
                hasPlayedThrough: o,
                setHasPlayedThrough: d,
                maxLoops: c,
                loopEnd: u,
                bannerAdjustment: _,
                imageData: E,
            } = e,
            h = !0,
            I = 0,
            [f, p] = r.useState("reset"),
            T = r.useRef(E?.src ?? t.src),
            [m, g] = r.useState(E?.src ?? t.src),
            S = r.useRef(null),
            R = (0, N.gm)() && null != t.loopDelay && t.loopDelay > 0 && E?.src != null;
        function L(e) {
            (0, N.gm)() && e !== f && p(e);
        }
        if (
            (r.useEffect(() => {
                if (!R || "layer" === f) return;
                let e = new AbortController();
                return (
                    (async () => {
                        try {
                            if (null == S.current) {
                                let t = await fetch(E.src, { signal: e.signal }),
                                    n = await t.blob();
                                if (e.signal.aborted) return;
                                S.current = n;
                            }
                            T.current !== E?.src && URL.revokeObjectURL(T.current),
                                (T.current = URL.createObjectURL(S.current)),
                                g(() => T.current);
                        } catch (e) {
                            if ("AbortError" === e.name) return null;
                            C.A.captureException(e);
                        }
                    })(),
                    () => {
                        e.abort();
                    }
                );
            }, [f, R, g, E?.src]),
            r.useEffect(
                () => () => {
                    T.current !== E?.src && URL.revokeObjectURL(T.current);
                },
                [],
            ),
            a || (h = !1),
            s < t.start && (h = !1),
            !t.loop && s > t.duration + t.start && (h = !1),
            n === l.l.ANIMATION_TYPE_PERSISTENT && !o && null != c && s >= u && d(!0),
            t.loop && void 0 !== t.loopDelay && t.loopDelay > 0)
        ) {
            let e = t.duration + t.loopDelay;
            (I = Math.floor((s - t.start) / e)),
                s - t.start - I * e > t.duration &&
                    (n === l.l.ANIMATION_TYPE_INTERMITTENT && !o && null != c && I >= c && d(!0), (h = !1));
        }
        return h
            ? (L("layer"),
              (0, i.jsx)("img", {
                  src: m,
                  className: O.QZ,
                  style: { top: (t.position?.y ?? 0) - _, left: t.position?.x ?? 0 },
                  alt: "",
                  "aria-hidden": !0,
              }))
            : (L("reset"), (0, i.jsx)("img", { src: A.Ut, alt: "", "aria-hidden": !0 }));
    },
    L = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: a = !1,
                isHovering: o = !1,
                useOpacityOnHover: d = !0,
                autoPlay: c = !0,
                restartMethod: _,
                profileEffect: E,
                delayIntro: A = !0,
                restartKey: h,
                layerData: I,
            } = e,
            f = r.useRef(null),
            p = r.useMemo(() => E.effects.sort((e, t) => (e.zIndex ?? 0) - (t.zIndex ?? 0)), [E]),
            { accessibilityLabel: m } = E,
            { firstLoop: g, loopEnd: S } = r.useMemo(() => {
                let e = 0,
                    t = 1 / 0;
                return (
                    p.forEach((n) => {
                        let i = n.start + n.duration;
                        i > e && (e = i), n.loop && n.start < t && (t = n.start);
                    }),
                    { firstLoop: t, loopEnd: e }
                );
            }, [p]),
            N = A ? 500 : 0.1,
            [C, L] = r.useState(-N),
            {
                stop: D,
                reset: y,
                ticking: v,
            } = T(
                r.useCallback((e) => {
                    L((t) => t + e);
                }, []),
            ),
            b = r.useRef(N);
        r.useEffect(() => {
            b.current = N;
        }),
            r.useEffect(() => {
                L(-b.current);
            }, [E]);
        let [M, P] = r.useState(!1);
        return (
            r.useEffect(() => {
                null != h && (L(-b.current), P(!1), v.current || y());
            }, [h, y, v]),
            r.useEffect(() => {
                !0 === c || o || (D(), L(0)),
                    !o && M && v.current && (D(), L(0)),
                    a &&
                        o &&
                        !v.current &&
                        (y(),
                        E.animationType === l.l.ANIMATION_TYPE_PERSISTENT ? L(_ === u.HL.FromStart ? 0 : g) : L(0));
            }, [o, M, g, a, D, y, v, E.animationType, c, _]),
            (0, i.jsx)("div", {
                ref: f,
                className: s()(O.yC, { [O.yo]: o && d }),
                "aria-label": m,
                role: "img",
                children: (0, i.jsx)("div", {
                    className: O.vW,
                    children: p.map((e, r) => {
                        if (
                            !v.current &&
                            E.animationType === l.l.ANIMATION_TYPE_PERSISTENT &&
                            null != E.staticFrameSrc &&
                            0 === r &&
                            !0 === c
                        ) {
                            let { staticFrameSrc: n } = E;
                            return (0, i.jsx)(
                                "img",
                                {
                                    className: O.QZ,
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
                                ticking: v.current,
                                time: C,
                                hasPlayedThrough: M,
                                setHasPlayedThrough: P,
                                maxLoops: n,
                                loopEnd: S,
                                bannerAdjustment: t,
                                imageData: I?.[e.src],
                            },
                            e.src + r,
                        );
                    }),
                }),
            })
        );
    };
function D(e) {
    let {
            profileEffect: t,
            useThumbnail: n,
            bannerAdjustment: r = 0,
            isHovering: a = !1,
            useOpacityOnHover: l = !0,
        } = e,
        { reducedMotionSrc: o, thumbnailPreviewSrc: d, accessibilityLabel: c } = t;
    return (0, i.jsx)("div", {
        className: s()(O.yC, { [O.yo]: a && l }),
        "aria-label": c,
        role: "img",
        children: (0, i.jsx)("div", {
            className: O.vW,
            children: (0, i.jsx)("img", {
                src: n && !a ? d : o,
                className: O.QZ,
                style: { top: 0 - r },
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
let y = function (e) {
    let t = (0, c.j)(),
        n = (0, o.bG)([d.Ay], () => d.Ay.useReducedMotion),
        a = (0, m.A)(e.skuId),
        s = (0, E.C)(a),
        u = (function (e) {
            let [t, n] = r.useState(e),
                [i, a] = r.useState(S(e));
            return (0, g.isEqual)(t, e) || (n(e), a(S(e))), i;
        })(a),
        A = s ?? u,
        { autoPlay: h = !0, isHovering: I } = e,
        f = !!(
            (!t && e.shopPreview) ||
            (!t && a?.animationType === l.l.ANIMATION_TYPE_PERSISTENT) ||
            n ||
            (!1 === h && !1 === I)
        ),
        { loaded: p, layerData: T } = (0, _.A)({ skuId: a?.skuId, layers: f ? void 0 : a?.effects });
    return null != a && null != A && (t || e.shopPreview || a.animationType !== l.l.ANIMATION_TYPE_INTERMITTENT)
        ? f
            ? (0, i.jsx)(D, {
                  useThumbnail: e.useThumbnail,
                  profileEffect: A,
                  bannerAdjustment: e.bannerAdjustment,
                  isHovering: e.isHovering,
                  useOpacityOnHover: e.useOpacityOnHover,
              })
            : p
              ? (0, i.jsx)(L, { profileEffect: A, layerData: T, ...e })
              : null
        : null;
};
