n.d(t, {
    Z: () => I,
    n: () => v,
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
    E = n(410061),
    b = n(664545);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
let v = (e) => {
        let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: a = !1,
                isHovering: l = !1,
                useOpacityOnHover: c = !0,
                autoPlay: u = !0,
                restartMethod: d,
                profileEffectConfig: m,
                noBorderRadius: E = !1,
                delayIntro: y = !0,
                layerData: O,
            } = e,
            v = i.useRef(null),
            [S, I] = i.useState([]),
            [T, C] = i.useState(0),
            [A, N] = i.useState(0),
            { accessibilityLabel: P } = m,
            R = y ? f.JH : 0.1,
            [w, D] = i.useState(-R),
            {
                stop: x,
                reset: L,
                ticking: j,
            } = (0, _.Z)((e) => {
                D((t) => t + e);
            }),
            M = i.useRef(R);
        i.useEffect(() => {
            M.current = R;
        }),
            i.useEffect(() => {
                D(-M.current), I((0, h.H)(m.effects));
            }, [m]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                S.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    C(t),
                    N(e);
            }, [N, S]);
        let [k, U] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 === u || l || (x(), D(0)),
                    !l && k && j.current && (x(), D(0)),
                    a &&
                        l &&
                        !j.current &&
                        (L(),
                        m.animationType === s.y.ANIMATION_TYPE_PERSISTENT ? D(d === p.Q.FromStart ? 0 : T) : D(0));
            }, [l, k, T, a, x, L, j, m.animationType, u, d]),
            (0, r.jsx)("div", {
                ref: v,
                className: o()(b.profileEffects, { [b.hovered]: l && c }),
                "aria-label": P,
                role: "img",
                children: (0, r.jsx)("div", {
                    className: E ? b.innerNoRadius : b.inner,
                    children: S.map((e, i) => {
                        if (
                            !j.current &&
                            m.animationType === s.y.ANIMATION_TYPE_PERSISTENT &&
                            null != m.staticFrameSrc &&
                            0 === i &&
                            !0 === u
                        ) {
                            var a, o, l, c;
                            let { staticFrameSrc: n } = m;
                            return (0, r.jsx)(
                                "img",
                                {
                                    className: b.effect,
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
                                animationType: m.animationType,
                                ticking: j.current,
                                time: w,
                                hasPlayedThrough: k,
                                setHasPlayedThrough: U,
                                maxLoops: n,
                                loopEnd: A,
                                bannerAdjustment: t,
                                imageData: null == O ? void 0 : O[e.src],
                            },
                            e.src + i,
                        );
                    }),
                }),
            })
        );
    },
    S = (e) => {
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
            className: o()(b.profileEffects, { [b.hovered]: s && l }),
            "aria-label": d,
            role: "img",
            children: (0, r.jsx)("div", {
                className: a ? b.innerNoRadius : b.inner,
                children: (0, r.jsx)("img", {
                    src: n && !s ? u : c,
                    className: b.effect,
                    style: { top: 0 - i },
                    alt: "",
                    "aria-hidden": !0,
                }),
            }),
        });
    },
    I = (e) => {
        let t = (0, d.n)(),
            n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            i = (0, m.V)(e.skuId),
            a = (0, u.ex)(null == i ? void 0 : i.config),
            o = (0, h.C)(null == i ? void 0 : i.config),
            f = null != a ? a : o,
            { autoPlay: p = !0, isHovering: _ } = e,
            g = !!(
                (!t && e.shopPreview) ||
                (!t && (null == i ? void 0 : i.config.animationType) === s.y.ANIMATION_TYPE_PERSISTENT) ||
                n ||
                (!1 === p && !1 === _)
            ),
            { loaded: b, layerData: y } = (0, E.Z)(i, !1 === g);
        return null != i &&
            null != f &&
            (t || e.shopPreview || i.config.animationType !== s.y.ANIMATION_TYPE_INTERMITTENT)
            ? g
                ? (0, r.jsx)(S, {
                      useThumbnail: e.useThumbnail,
                      config: f,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover,
                  })
                : b
                  ? (0, r.jsx)(
                        v,
                        O(
                            {
                                profileEffectConfig: f,
                                layerData: y,
                            },
                            e,
                        ),
                    )
                  : null
            : null;
    };
