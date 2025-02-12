n.d(t, {
    Z: () => I,
    n: () => v
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(607070),
    u = n(451478),
    c = n(119837),
    d = n(802433),
    f = n(658312),
    _ = n(729436),
    p = n(142145),
    h = n(710867),
    m = n(312904),
    g = n(186917),
    E = n(150563);
let v = (e) => {
        let { bannerAdjustment: t = 0, maxLoops: n, resetOnHover: a = !1, isHovering: o = !1, useOpacityOnHover: l = !0, autoPlay: u = !0, restartMethod: h, urlQueryString: g, profileEffectConfig: v, noBorderRadius: y = !1, introDelay: I = c.lG } = e,
            T = r.useRef(null),
            [b, S] = r.useState([]);
        (0, m.Z)(v);
        let [A, N] = r.useState(0),
            [C, R] = r.useState(0),
            { accessibilityLabel: O } = v,
            [D, L] = r.useState(-I),
            {
                stop: x,
                reset: P,
                ticking: w
            } = (0, f.Z)((e) => {
                L((t) => t + e);
            }),
            M = r.useRef(I);
        r.useEffect(() => {
            M.current = I;
        }),
            r.useEffect(() => {
                L(-M.current), S((0, _.H)(v.effects));
            }, [v]),
            r.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                b.forEach((n) => {
                    let i = n.start + n.duration;
                    i > e && (e = i), n.loop && n.start < t && (t = n.start);
                }),
                    N(t),
                    R(e);
            }, [R, b]);
        let [k, U] = r.useState(!1);
        return (
            r.useEffect(() => {
                !0 === u || o || (x(), L(0)), !o && k && w.current && (x(), L(0)), a && o && !w.current && (P(), v.animationType === d.Q.PERSISTENT ? L(h === d.j.FromStart ? 0 : A) : L(0));
            }, [o, k, A, a, x, P, w, v.animationType, u, h]),
            (0, i.jsx)('div', {
                ref: T,
                className: s()(E.profileEffects, { [E.hovered]: o && l }),
                children: (0, i.jsx)('div', {
                    className: y ? E.innerNoRadius : E.inner,
                    children: b.map((e, r) => {
                        if (!w.current && v.animationType === d.Q.PERSISTENT && null != v.staticFrameSrc && 0 === r && !0 === u) {
                            var a, s, o, l;
                            let { staticFrameSrc: n } = v;
                            return (0, i.jsx)(
                                'img',
                                {
                                    className: E.effect,
                                    style: {
                                        top: null !== (o = null === (a = e.position) || void 0 === a ? void 0 : a.y) && void 0 !== o ? o : 0 - t,
                                        left: null !== (l = null === (s = e.position) || void 0 === s ? void 0 : s.x) && void 0 !== l ? l : 0
                                    },
                                    src: n,
                                    alt: O
                                },
                                e.src + r
                            );
                        }
                        return (0, i.jsx)(
                            p.Z,
                            {
                                layerConfig: e,
                                animationType: v.animationType,
                                ticking: w.current,
                                time: D,
                                accessibilityLabel: O,
                                hasPlayedThrough: k,
                                setHasPlayedThrough: U,
                                urlQueryString: g,
                                maxLoops: n,
                                loopEnd: C,
                                bannerAdjustment: t
                            },
                            e.src + r
                        );
                    })
                })
            })
        );
    },
    y = (e) => {
        let { config: t, useThumbnail: n, bannerAdjustment: r = 0, noBorderRadius: a, isHovering: o = !1, useOpacityOnHover: l = !0 } = e,
            { reducedMotionSrc: u, thumbnailPreviewSrc: c, accessibilityLabel: d } = t;
        return (0, i.jsx)('div', {
            className: s()(E.profileEffects, { [E.hovered]: o && l }),
            children: (0, i.jsx)('div', {
                className: a ? E.innerNoRadius : E.inner,
                children: (0, i.jsx)('img', {
                    src: n && !o ? c : u,
                    className: E.effect,
                    style: { top: 0 - r },
                    alt: d
                })
            })
        });
    },
    I = (e) => {
        let t = (0, o.e7)([u.Z], () => u.Z.isFocused()),
            n = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
            [a, s] = r.useState(!1),
            { preset: c } = (0, g.Z)(e.profileEffectId, () => s(!1)),
            f = (0, _.C)(null == c ? void 0 : c.config);
        return null != c && null != f && (t || e.shopPreview || c.config.animationType !== d.Q.INTERMITTENT)
            ? (!t && e.shopPreview) || (!t && c.config.animationType === d.Q.PERSISTENT) || n || (!1 === e.autoPlay && !1 === e.isHovering)
                ? (0, i.jsx)(y, {
                      useThumbnail: e.useThumbnail,
                      config: f,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover
                  })
                : a
                  ? (0, i.jsx)(v, {
                        profileEffectConfig: f,
                        ...e
                    })
                  : (0, i.jsx)(h.Z, {
                        profileEffectConfig: f,
                        onReady: () => {
                            s(!0);
                        }
                    })
            : null;
    };
