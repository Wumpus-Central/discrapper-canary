r.d(n, {
    n: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(607070),
    d = r(451478),
    f = r(119837),
    p = r(802433),
    h = r(658312),
    _ = r(729436),
    m = r(142145),
    g = r(710867),
    E = r(312904),
    v = r(186917),
    y = r(264275);
let b = (e) => {
        let { bannerAdjustment: n = 0, maxLoops: r, resetOnHover: i = !1, isHovering: s = !1, useOpacityOnHover: u = !0, autoPlay: c = !0, restartMethod: d, urlQueryString: g, profileEffectConfig: v, noBorderRadius: b = !1, introDelay: I = f.lG } = e,
            T = o.useRef(null),
            [S, A] = o.useState([]);
        (0, E.Z)(v);
        let [C, N] = o.useState(0),
            [R, O] = o.useState(0),
            { accessibilityLabel: D } = v,
            [x, L] = o.useState(-I),
            {
                stop: w,
                reset: P,
                ticking: M
            } = (0, h.Z)((e) => {
                L((n) => n + e);
            }),
            k = o.useRef(I);
        o.useEffect(() => {
            k.current = I;
        }),
            o.useEffect(() => {
                L(-k.current), A((0, _.H)(v.effects));
            }, [v]),
            o.useEffect(() => {
                let e = 0,
                    n = 1 / 0;
                S.forEach((r) => {
                    let i = r.start + r.duration;
                    i > e && (e = i), r.loop && r.start < n && (n = r.start);
                }),
                    N(n),
                    O(e);
            }, [O, S]);
        let [U, B] = o.useState(!1);
        return (
            o.useEffect(() => {
                !0 !== c && !s && (w(), L(0)), !s && U && M.current && (w(), L(0)), i && s && !M.current && (P(), v.animationType === p.Q.PERSISTENT ? L(d === p.j.FromStart ? 0 : C) : L(0));
            }, [s, U, C, i, w, P, M, v.animationType, c, d]),
            (0, a.jsx)('div', {
                ref: T,
                className: l()(y.profileEffects, { [y.hovered]: s && u }),
                children: (0, a.jsx)('div', {
                    className: b ? y.innerNoRadius : y.inner,
                    children: S.map((e, i) => {
                        if (!M.current && v.animationType === p.Q.PERSISTENT && null != v.staticFrameSrc && 0 === i && !0 === c) {
                            var o, s, l, u;
                            let { staticFrameSrc: r } = v;
                            return (0, a.jsx)(
                                'img',
                                {
                                    className: y.effect,
                                    style: {
                                        top: null !== (l = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== l ? l : 0 - n,
                                        left: null !== (u = null === (s = e.position) || void 0 === s ? void 0 : s.x) && void 0 !== u ? u : 0
                                    },
                                    src: r,
                                    alt: D
                                },
                                e.src + i
                            );
                        }
                        return (0, a.jsx)(
                            m.Z,
                            {
                                layerConfig: e,
                                animationType: v.animationType,
                                ticking: M.current,
                                time: x,
                                accessibilityLabel: D,
                                hasPlayedThrough: U,
                                setHasPlayedThrough: B,
                                urlQueryString: g,
                                maxLoops: r,
                                loopEnd: R,
                                bannerAdjustment: n
                            },
                            e.src + i
                        );
                    })
                })
            })
        );
    },
    I = (e) => {
        let { config: n, useThumbnail: r, bannerAdjustment: i = 0, noBorderRadius: o, isHovering: s = !1, useOpacityOnHover: u = !0 } = e,
            { reducedMotionSrc: c, thumbnailPreviewSrc: d, accessibilityLabel: f } = n;
        return (0, a.jsx)('div', {
            className: l()(y.profileEffects, { [y.hovered]: s && u }),
            children: (0, a.jsx)('div', {
                className: o ? y.innerNoRadius : y.inner,
                children: (0, a.jsx)('img', {
                    src: r && !s ? d : c,
                    className: y.effect,
                    style: { top: 0 - i },
                    alt: f
                })
            })
        });
    },
    T = (e) => {
        let n = (0, u.e7)([d.Z], () => d.Z.isFocused()),
            r = (0, u.e7)([c.Z], () => c.Z.useReducedMotion),
            [i, s] = o.useState(!1),
            { preset: l } = (0, v.Z)(e.profileEffectId, () => s(!1)),
            f = (0, _.C)(null == l ? void 0 : l.config);
        return null != l && null != f && (n || e.shopPreview || l.config.animationType !== p.Q.INTERMITTENT)
            ? (!n && e.shopPreview) || (!n && l.config.animationType === p.Q.PERSISTENT) || r || (!1 === e.autoPlay && !1 === e.isHovering)
                ? (0, a.jsx)(I, {
                      useThumbnail: e.useThumbnail,
                      config: f,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover
                  })
                : i
                  ? (0, a.jsx)(b, {
                        profileEffectConfig: f,
                        ...e
                    })
                  : (0, a.jsx)(g.Z, {
                        profileEffectConfig: f,
                        onReady: () => {
                            s(!0);
                        }
                    })
            : null;
    };
n.Z = T;
