r.d(n, {
    n: function () {
        return T;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(607070),
    d = r(451478),
    f = r(119837),
    _ = r(802433),
    h = r(658312),
    p = r(729436),
    m = r(142145),
    g = r(710867),
    E = r(312904),
    v = r(186917),
    I = r(264275);
let T = (e) => {
        let { bannerAdjustment: n = 0, maxLoops: r, resetOnHover: i = !1, isHovering: o = !1, useOpacityOnHover: u = !0, autoPlay: c = !0, restartMethod: d, urlQueryString: g, profileEffectConfig: v, noBorderRadius: T = !1, introDelay: b = f.lG } = e,
            y = s.useRef(null),
            [S, A] = s.useState([]);
        (0, E.Z)(v);
        let [N, C] = s.useState(0),
            [R, O] = s.useState(0),
            { accessibilityLabel: D } = v,
            [L, x] = s.useState(-b),
            {
                stop: w,
                reset: P,
                ticking: M
            } = (0, h.Z)((e) => {
                x((n) => n + e);
            }),
            k = s.useRef(b);
        s.useEffect(() => {
            k.current = b;
        }),
            s.useEffect(() => {
                x(-k.current), A((0, p.H)(v.effects));
            }, [v]),
            s.useEffect(() => {
                let e = 0,
                    n = 1 / 0;
                S.forEach((r) => {
                    let i = r.start + r.duration;
                    i > e && (e = i), r.loop && r.start < n && (n = r.start);
                }),
                    C(n),
                    O(e);
            }, [O, S]);
        let [U, B] = s.useState(!1);
        return (
            s.useEffect(() => {
                !0 !== c && !o && (w(), x(0)), !o && U && M.current && (w(), x(0)), i && o && !M.current && (P(), v.animationType === _.Q.PERSISTENT ? x(d === _.j.FromStart ? 0 : N) : x(0));
            }, [o, U, N, i, w, P, M, v.animationType, c, d]),
            (0, a.jsx)('div', {
                ref: y,
                className: l()(I.profileEffects, { [I.hovered]: o && u }),
                children: (0, a.jsx)('div', {
                    className: T ? I.innerNoRadius : I.inner,
                    children: S.map((e, i) => {
                        if (!M.current && v.animationType === _.Q.PERSISTENT && null != v.staticFrameSrc && 0 === i && !0 === c) {
                            var s, o, l, u;
                            let { staticFrameSrc: r } = v;
                            return (0, a.jsx)(
                                'img',
                                {
                                    className: I.effect,
                                    style: {
                                        top: null !== (l = null === (s = e.position) || void 0 === s ? void 0 : s.y) && void 0 !== l ? l : 0 - n,
                                        left: null !== (u = null === (o = e.position) || void 0 === o ? void 0 : o.x) && void 0 !== u ? u : 0
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
                                time: L,
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
    b = (e) => {
        let { config: n, useThumbnail: r, bannerAdjustment: i = 0, noBorderRadius: s, isHovering: o = !1, useOpacityOnHover: u = !0 } = e,
            { reducedMotionSrc: c, thumbnailPreviewSrc: d, accessibilityLabel: f } = n;
        return (0, a.jsx)('div', {
            className: l()(I.profileEffects, { [I.hovered]: o && u }),
            children: (0, a.jsx)('div', {
                className: s ? I.innerNoRadius : I.inner,
                children: (0, a.jsx)('img', {
                    src: r && !o ? d : c,
                    className: I.effect,
                    style: { top: 0 - i },
                    alt: f
                })
            })
        });
    },
    y = (e) => {
        let n = (0, u.e7)([d.Z], () => d.Z.isFocused()),
            r = (0, u.e7)([c.Z], () => c.Z.useReducedMotion),
            [i, o] = s.useState(!1),
            { preset: l } = (0, v.Z)(e.profileEffectId, () => o(!1)),
            f = (0, p.C)(null == l ? void 0 : l.config);
        return null != l && null != f && (n || e.shopPreview || l.config.animationType !== _.Q.INTERMITTENT)
            ? (!n && e.shopPreview) || (!n && l.config.animationType === _.Q.PERSISTENT) || r || (!1 === e.autoPlay && !1 === e.isHovering)
                ? (0, a.jsx)(b, {
                      useThumbnail: e.useThumbnail,
                      config: f,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover
                  })
                : i
                  ? (0, a.jsx)(T, {
                        profileEffectConfig: f,
                        ...e
                    })
                  : (0, a.jsx)(g.Z, {
                        profileEffectConfig: f,
                        onReady: () => {
                            o(!0);
                        }
                    })
            : null;
    };
n.Z = y;
