n.d(t, {
    Z: () => S,
    n: () => I,
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
    _ = n(802433),
    p = n(658312),
    h = n(731896),
    m = n(729436),
    g = n(142145),
    E = n(710867),
    b = n(312904),
    y = n(341225);
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
let I = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: a = !1,
                isHovering: l = !1,
                useOpacityOnHover: c = !0,
                autoPlay: u = !0,
                restartMethod: d,
                urlQueryString: h,
                profileEffectConfig: E,
                noBorderRadius: O = !1,
                introDelay: v = f.lG,
            } = e,
            I = i.useRef(null),
            [T, S] = i.useState([]);
        (0, b.Z)(E);
        let [A, C] = i.useState(0),
            [N, R] = i.useState(0),
            { accessibilityLabel: P } = E,
            [D, w] = i.useState(-v),
            {
                stop: L,
                reset: x,
                ticking: M,
            } = (0, p.Z)((e) => {
                w((t) => t + e);
            }),
            j = i.useRef(v);
        i.useEffect(() => {
            j.current = v;
        }),
            i.useEffect(() => {
                w(-j.current), S((0, m.H)(E.effects));
            }, [E]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                T.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    C(t),
                    R(e);
            }, [R, T]);
        let [k, U] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 === u || l || (L(), w(0)),
                    !l && k && M.current && (L(), w(0)),
                    a &&
                        l &&
                        !M.current &&
                        (x(),
                        E.animationType === s.y.ANIMATION_TYPE_PERSISTENT ? w(d === _.Q.FromStart ? 0 : A) : w(0));
            }, [l, k, A, a, L, x, M, E.animationType, u, d]),
            (0, r.jsx)("div", {
                ref: I,
                className: o()(y.profileEffects, { [y.hovered]: l && c }),
                "aria-label": P,
                role: "img",
                children: (0, r.jsx)("div", {
                    className: O ? y.innerNoRadius : y.inner,
                    children: T.map((e, i) => {
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
                                time: D,
                                hasPlayedThrough: k,
                                setHasPlayedThrough: U,
                                urlQueryString: h,
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
    T = (e) => {
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
    S = (e) => {
        let t = (0, d.n)(),
            n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            [a, o] = i.useState(!1),
            f = (0, h.V)(e.skuId),
            _ = (0, u.ex)(null == f ? void 0 : f.config),
            p = (0, m.C)(null == f ? void 0 : f.config),
            g = null != _ ? _ : p;
        return null != f &&
            null != g &&
            (t || e.shopPreview || f.config.animationType !== s.y.ANIMATION_TYPE_INTERMITTENT)
            ? (!t && e.shopPreview) ||
              (!t && f.config.animationType === s.y.ANIMATION_TYPE_PERSISTENT) ||
              n ||
              (!1 === e.autoPlay && !1 === e.isHovering)
                ? (0, r.jsx)(T, {
                      useThumbnail: e.useThumbnail,
                      config: g,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : a
                  ? (0, r.jsx)(I, v({ profileEffectConfig: g }, e))
                  : (0, r.jsx)(E.Z, {
                        profileEffectConfig: g,
                        onReady: () => {
                            o(!0);
                        },
                    })
            : null;
    };
