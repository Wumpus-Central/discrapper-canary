n.d(t, {
    Z: () => T,
    n: () => S,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(480210),
    l = n(442837),
    c = n(607070),
    u = n(619899),
    d = n(506071),
    f = n(119837),
    p = n(802433),
    _ = n(658312),
    m = n(731896),
    h = n(729436),
    g = n(142145),
    E = n(710867),
    b = n(312904),
    y = n(107225);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
let S = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: a = !1,
                isHovering: l = !1,
                useOpacityOnHover: c = !0,
                autoPlay: u = !0,
                restartMethod: d,
                urlQueryString: m,
                profileEffectConfig: E,
                noBorderRadius: O = !1,
                delayIntro: v = !0,
            } = e,
            S = i.useRef(null),
            [I, T] = i.useState([]);
        (0, b.Z)(E);
        let [C, A] = i.useState(0),
            [N, P] = i.useState(0),
            { accessibilityLabel: R } = E,
            D = v ? f.JH : 0.1,
            [w, x] = i.useState(-D),
            {
                stop: L,
                reset: j,
                ticking: M,
            } = (0, _.Z)((e) => {
                x((t) => t + e);
            }),
            k = i.useRef(D);
        i.useEffect(() => {
            k.current = D;
        }),
            i.useEffect(() => {
                x(-k.current), T((0, h.H)(E.effects));
            }, [E]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                I.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    A(t),
                    P(e);
            }, [P, I]);
        let [U, G] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 === u || l || (L(), x(0)),
                    !l && U && M.current && (L(), x(0)),
                    a &&
                        l &&
                        !M.current &&
                        (j(),
                        E.animationType === s.y.ANIMATION_TYPE_PERSISTENT ? x(d === p.Q.FromStart ? 0 : C) : x(0));
            }, [l, U, C, a, L, j, M, E.animationType, u, d]),
            (0, r.jsx)("div", {
                ref: S,
                className: o()(y.profileEffects, { [y.hovered]: l && c }),
                "aria-label": R,
                role: "img",
                children: (0, r.jsx)("div", {
                    className: O ? y.innerNoRadius : y.inner,
                    children: I.map((e, i) => {
                        if (
                            !M.current &&
                            E.animationType === s.y.ANIMATION_TYPE_PERSISTENT &&
                            null != E.staticFrameSrc &&
                            0 === i &&
                            !0 === u
                        ) {
                            var a, o, l, c;
                            let { staticFrameSrc: n } = E;
                            return (0, r.jsx)(
                                "img",
                                {
                                    className: y.effect,
                                    style: {
                                        top: null != (l = null == (a = e.position) ? void 0 : a.y) ? l : 0 - t,
                                        left: null != (c = null == (o = e.position) ? void 0 : o.x) ? c : 0,
                                    },
                                    src: n,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + i,
                            );
                        }
                        return (0, r.jsx)(
                            g.Z,
                            {
                                layerConfig: e,
                                animationType: E.animationType,
                                ticking: M.current,
                                time: w,
                                hasPlayedThrough: U,
                                setHasPlayedThrough: G,
                                urlQueryString: m,
                                maxLoops: n,
                                loopEnd: N,
                                bannerAdjustment: t,
                            },
                            e.src + i,
                        );
                    }),
                }),
            })
        );
    },
    I = (e) => {
        let {
                config: t,
                useThumbnail: n,
                bannerAdjustment: i = 0,
                noBorderRadius: a,
                isHovering: s = !1,
                useOpacityOnHover: l = !0,
            } = e,
            { reducedMotionSrc: c, thumbnailPreviewSrc: u, accessibilityLabel: d } = t;
        return (0, r.jsx)("div", {
            className: o()(y.profileEffects, { [y.hovered]: s && l }),
            "aria-label": d,
            role: "img",
            children: (0, r.jsx)("div", {
                className: a ? y.innerNoRadius : y.inner,
                children: (0, r.jsx)("img", {
                    src: n && !s ? u : c,
                    className: y.effect,
                    style: { top: 0 - i },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    T = (e) => {
        let t = (0, d.n)(),
            n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            [a, o] = i.useState(!1),
            f = (0, m.V)(e.skuId),
            p = (0, u.ex)(null == f ? void 0 : f.config),
            _ = (0, h.C)(null == f ? void 0 : f.config),
            g = null != p ? p : _;
        return null != f &&
            null != g &&
            (t || e.shopPreview || f.config.animationType !== s.y.ANIMATION_TYPE_INTERMITTENT)
            ? (!t && e.shopPreview) ||
              (!t && f.config.animationType === s.y.ANIMATION_TYPE_PERSISTENT) ||
              n ||
              (!1 === e.autoPlay && !1 === e.isHovering)
                ? (0, r.jsx)(I, {
                      useThumbnail: e.useThumbnail,
                      config: g,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : a
                  ? (0, r.jsx)(S, v({ profileEffectConfig: g }, e))
                  : (0, r.jsx)(E.Z, {
                        profileEffectConfig: g,
                        onReady: () => {
                            o(!0);
                        },
                    })
            : null;
    };
