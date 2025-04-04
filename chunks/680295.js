n.d(t, {
    Z: () => S,
    n: () => O
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(607070),
    c = n(619899),
    u = n(451478),
    d = n(119837),
    f = n(802433),
    _ = n(658312),
    p = n(729436),
    h = n(142145),
    m = n(710867),
    g = n(312904),
    E = n(186917),
    b = n(422786);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
let O = (e) => {
        let { bannerAdjustment: t = 0, maxLoops: n, resetOnHover: o = !1, isHovering: s = !1, useOpacityOnHover: l = !0, autoPlay: c = !0, restartMethod: u, urlQueryString: m, profileEffectConfig: E, noBorderRadius: y = !1, introDelay: v = d.lG } = e,
            O = i.useRef(null),
            [I, S] = i.useState([]);
        (0, g.Z)(E);
        let [T, N] = i.useState(0),
            [A, C] = i.useState(0),
            { accessibilityLabel: R } = E,
            [P, w] = i.useState(-v),
            {
                stop: D,
                reset: L,
                ticking: x
            } = (0, _.Z)((e) => {
                w((t) => t + e);
            }),
            M = i.useRef(v);
        i.useEffect(() => {
            M.current = v;
        }),
            i.useEffect(() => {
                w(-M.current), S((0, p.H)(E.effects));
            }, [E]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                I.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    N(t),
                    C(e);
            }, [C, I]);
        let [k, j] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 === c || s || (D(), w(0)), !s && k && x.current && (D(), w(0)), o && s && !x.current && (L(), E.animationType === f.Q.PERSISTENT ? w(u === f.j.FromStart ? 0 : T) : w(0));
            }, [s, k, T, o, D, L, x, E.animationType, c, u]),
            (0, r.jsx)('div', {
                ref: O,
                className: a()(b.profileEffects, { [b.hovered]: s && l }),
                children: (0, r.jsx)('div', {
                    className: y ? b.innerNoRadius : b.inner,
                    children: I.map((e, i) => {
                        if (!x.current && E.animationType === f.Q.PERSISTENT && null != E.staticFrameSrc && 0 === i && !0 === c) {
                            var o, a, s, l;
                            let { staticFrameSrc: n } = E;
                            return (0, r.jsx)(
                                'img',
                                {
                                    className: b.effect,
                                    style: {
                                        top: null != (s = null == (o = e.position) ? void 0 : o.y) ? s : 0 - t,
                                        left: null != (l = null == (a = e.position) ? void 0 : a.x) ? l : 0
                                    },
                                    src: n,
                                    alt: R
                                },
                                e.src + i
                            );
                        }
                        return (0, r.jsx)(
                            h.Z,
                            {
                                layerConfig: e,
                                animationType: E.animationType,
                                ticking: x.current,
                                time: P,
                                accessibilityLabel: R,
                                hasPlayedThrough: k,
                                setHasPlayedThrough: j,
                                urlQueryString: m,
                                maxLoops: n,
                                loopEnd: A,
                                bannerAdjustment: t
                            },
                            e.src + i
                        );
                    })
                })
            })
        );
    },
    I = (e) => {
        let { config: t, useThumbnail: n, bannerAdjustment: i = 0, noBorderRadius: o, isHovering: s = !1, useOpacityOnHover: l = !0 } = e,
            { reducedMotionSrc: c, thumbnailPreviewSrc: u, accessibilityLabel: d } = t;
        return (0, r.jsx)('div', {
            className: a()(b.profileEffects, { [b.hovered]: s && l }),
            children: (0, r.jsx)('div', {
                className: o ? b.innerNoRadius : b.inner,
                children: (0, r.jsx)('img', {
                    src: n && !s ? u : c,
                    className: b.effect,
                    style: { top: 0 - i },
                    alt: d
                })
            })
        });
    },
    S = (e) => {
        let t = (0, s.e7)([u.Z], () => u.Z.isFocused()),
            n = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
            [o, a] = i.useState(!1),
            { preset: d } = (0, E.Z)(e.profileEffectId, () => a(!1)),
            _ = (0, c.ex)(null == d ? void 0 : d.config),
            h = (0, p.C)(null == d ? void 0 : d.config),
            g = null != _ ? _ : h;
        return null != d && null != g && (t || e.shopPreview || d.config.animationType !== f.Q.INTERMITTENT)
            ? (!t && e.shopPreview) || (!t && d.config.animationType === f.Q.PERSISTENT) || n || (!1 === e.autoPlay && !1 === e.isHovering)
                ? (0, r.jsx)(I, {
                      useThumbnail: e.useThumbnail,
                      config: g,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover
                  })
                : o
                  ? (0, r.jsx)(O, v({ profileEffectConfig: g }, e))
                  : (0, r.jsx)(m.Z, {
                        profileEffectConfig: g,
                        onReady: () => {
                            a(!0);
                        }
                    })
            : null;
    };
