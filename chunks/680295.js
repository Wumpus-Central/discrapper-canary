n.d(t, {
    Z: () => S,
    n: () => y
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(607070),
    c = n(451478),
    u = n(119837),
    d = n(802433),
    f = n(658312),
    p = n(729436),
    _ = n(142145),
    h = n(710867),
    m = n(312904),
    g = n(186917),
    E = n(663058);
function v(e, t, n) {
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
function b(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
let y = (e) => {
        let { bannerAdjustment: t = 0, maxLoops: n, resetOnHover: o = !1, isHovering: s = !1, useOpacityOnHover: l = !0, autoPlay: c = !0, restartMethod: h, urlQueryString: g, profileEffectConfig: v, noBorderRadius: b = !1, introDelay: y = u.lG } = e,
            O = i.useRef(null),
            [S, I] = i.useState([]);
        (0, m.Z)(v);
        let [T, N] = i.useState(0),
            [A, C] = i.useState(0),
            { accessibilityLabel: R } = v,
            [P, w] = i.useState(-y),
            {
                stop: D,
                reset: x,
                ticking: L
            } = (0, f.Z)((e) => {
                w((t) => t + e);
            }),
            M = i.useRef(y);
        i.useEffect(() => {
            M.current = y;
        }),
            i.useEffect(() => {
                w(-M.current), I((0, p.H)(v.effects));
            }, [v]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                S.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    N(t),
                    C(e);
            }, [C, S]);
        let [k, j] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 === c || s || (D(), w(0)), !s && k && L.current && (D(), w(0)), o && s && !L.current && (x(), v.animationType === d.Q.PERSISTENT ? w(h === d.j.FromStart ? 0 : T) : w(0));
            }, [s, k, T, o, D, x, L, v.animationType, c, h]),
            (0, r.jsx)('div', {
                ref: O,
                className: a()(E.profileEffects, { [E.hovered]: s && l }),
                children: (0, r.jsx)('div', {
                    className: b ? E.innerNoRadius : E.inner,
                    children: S.map((e, i) => {
                        if (!L.current && v.animationType === d.Q.PERSISTENT && null != v.staticFrameSrc && 0 === i && !0 === c) {
                            var o, a, s, l;
                            let { staticFrameSrc: n } = v;
                            return (0, r.jsx)(
                                'img',
                                {
                                    className: E.effect,
                                    style: {
                                        top: null !== (s = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== s ? s : 0 - t,
                                        left: null !== (l = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== l ? l : 0
                                    },
                                    src: n,
                                    alt: R
                                },
                                e.src + i
                            );
                        }
                        return (0, r.jsx)(
                            _.Z,
                            {
                                layerConfig: e,
                                animationType: v.animationType,
                                ticking: L.current,
                                time: P,
                                accessibilityLabel: R,
                                hasPlayedThrough: k,
                                setHasPlayedThrough: j,
                                urlQueryString: g,
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
    O = (e) => {
        let { config: t, useThumbnail: n, bannerAdjustment: i = 0, noBorderRadius: o, isHovering: s = !1, useOpacityOnHover: l = !0 } = e,
            { reducedMotionSrc: c, thumbnailPreviewSrc: u, accessibilityLabel: d } = t;
        return (0, r.jsx)('div', {
            className: a()(E.profileEffects, { [E.hovered]: s && l }),
            children: (0, r.jsx)('div', {
                className: o ? E.innerNoRadius : E.inner,
                children: (0, r.jsx)('img', {
                    src: n && !s ? u : c,
                    className: E.effect,
                    style: { top: 0 - i },
                    alt: d
                })
            })
        });
    },
    S = (e) => {
        let t = (0, s.e7)([c.Z], () => c.Z.isFocused()),
            n = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
            [o, a] = i.useState(!1),
            { preset: u } = (0, g.Z)(e.profileEffectId, () => a(!1)),
            f = (0, p.C)(null == u ? void 0 : u.config);
        return null != u && null != f && (t || e.shopPreview || u.config.animationType !== d.Q.INTERMITTENT)
            ? (!t && e.shopPreview) || (!t && u.config.animationType === d.Q.PERSISTENT) || n || (!1 === e.autoPlay && !1 === e.isHovering)
                ? (0, r.jsx)(O, {
                      useThumbnail: e.useThumbnail,
                      config: f,
                      bannerAdjustment: e.bannerAdjustment,
                      noBorderRadius: e.noBorderRadius,
                      isHovering: e.isHovering,
                      useOpacityOnHover: e.useOpacityOnHover
                  })
                : o
                  ? (0, r.jsx)(y, b({ profileEffectConfig: f }, e))
                  : (0, r.jsx)(h.Z, {
                        profileEffectConfig: f,
                        onReady: () => {
                            a(!0);
                        }
                    })
            : null;
    };
