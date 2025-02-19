n.d(t, { y: () => C }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(642128),
    s = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(460181),
    p = n(131951),
    m = n(19780),
    f = n(743498),
    h = n(56848),
    g = n(378441),
    _ = n(190676),
    b = n(388032),
    v = n(248244);
function y(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = {
        mass: 2,
        friction: 30,
        tension: 500,
        clamp: !0
    },
    E = {
        mass: 1,
        friction: 28,
        tension: 700,
        clamp: !0
    },
    j = {
        mass: 1,
        friction: 28,
        tension: 500
    },
    N = {
        mass: 1,
        friction: 28,
        tension: 800
    };
function C(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, g.o)(),
        a = (0, d.Z)(n),
        C = (0, h.z)(n),
        { toggleLoopback: I, isLoopbackEnabled: S } = (function () {
            let e = (0, s.e7)([p.Z], () => p.Z.getVoiceFilterPlaybackEnabled()),
                t = i.useCallback(() => {
                    (0, u.GN)(e ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, f._j)(!e);
                }, [e]);
            return {
                isLoopbackEnabled: e,
                toggleLoopback: t
            };
        })(),
        P = S ? c.Iy5 : c.X_q,
        T = i.useCallback(() => (0, f.v6)(null), []),
        A = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(),
        w = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        Z = (0, s.e7)([m.Z], () => m.Z.isConnected()),
        k = i.useRef(0),
        R = n !== a ? k.current + 1 : k.current;
    i.useEffect(() => {
        k.current = R;
    }, [R]);
    let L = null != n,
        D = null == n && null != a,
        M = (0, c.q_F)(
            {
                opacity: +!!L,
                height: 72 * !!L,
                pointerEvents: L ? 'auto' : 'none',
                backgroundColor: null !== (t = null == C ? void 0 : C.baseColor) && void 0 !== t ? t : A,
                config: O,
                delay: L && null != a ? 150 : 100 * !!D
            },
            'respect-motion-settings'
        ),
        W = (0, c.Yzy)(
            null == C ? void 0 : C.id,
            {
                key: R,
                from: {
                    opacity: 0,
                    background: null == C ? void 0 : C.splashGradient
                },
                enter: {
                    opacity: 1,
                    delay: 150
                },
                leave: {
                    opacity: 0,
                    delay: 50
                },
                config: O
            },
            'respect-motion-settings'
        ),
        [F] = (0, c.bYB)(
            3,
            (e) => ({
                from:
                    null == a
                        ? {
                              translateY: 16,
                              opacity: 0
                          }
                        : {
                              translateY: 0,
                              opacity: 1
                          },
                to:
                    null == n
                        ? {
                              translateY: 16,
                              opacity: 0
                          }
                        : null == a
                          ? {
                                translateY: 0,
                                opacity: 1
                            }
                          : [
                                {
                                    translateY: -4,
                                    config: x(y({}, N), { restVelocity: 0.5 })
                                },
                                {
                                    translateY: 0,
                                    config: N
                                }
                            ],
                config: j,
                delay: D ? 100 - 50 * e : 150 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        U = (0, c.Yzy)(
            null == C ? void 0 : C.iconURL,
            {
                key: R,
                from: {
                    opacity: 0,
                    scale: 0.5,
                    translateX: null == a ? 0 : -30
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    delay: 200 * (null != a)
                },
                leave: {
                    opacity: 0,
                    scale: null == n ? 0.5 : 1,
                    translateX: 32 * (null != n),
                    delay: 0
                },
                config: O
            },
            'respect-motion-settings'
        ),
        B = (0, c.Yzy)(
            null == C ? void 0 : C.name,
            {
                key: R,
                from: {
                    opacity: 0,
                    scale: null == a ? 1 : 0.5,
                    translateY: 16 * (null == a)
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    translateY: 0,
                    delay: null == a ? 100 : 275,
                    config: null == a ? j : E
                },
                leave: {
                    opacity: 0,
                    translateX: 40 * (null != n),
                    translateY: 16 * (null == n),
                    delay: D ? 200 : 150,
                    config: null == a ? j : E
                },
                config: j
            },
            'respect-motion-settings'
        ),
        G = b.NW.string(S ? b.t.esVyo6 : b.t.UQqFCA);
    return (0, r.jsxs)(l.animated.div, {
        className: v.voiceFilterHero,
        style: M,
        children: [
            (0, r.jsx)('div', {
                className: o()([v.bgGradient, v.bgGradientHighlight])
            }),
            W((e) =>
                (0, r.jsx)(l.animated.div, {
                    className: v.bgGradient,
                    style: e
                })
            ),
            (0, r.jsx)('div', {
                className: v.iconWrapper,
                children: U((e, t) =>
                    (0, r.jsx)(
                        l.animated.img,
                        {
                            className: v.activeVoiceIcon,
                            style: e,
                            alt: '',
                            src: t
                        },
                        t
                    )
                )
            }),
            (0, r.jsx)('div', {
                className: v.descriptionWrapper,
                children: B((e, t) =>
                    (0, r.jsxs)(l.animated.div, {
                        className: v.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: v.offWhiteText,
                                children: b.NW.string(b.t.WW5DAA)
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: t
                            })
                        ]
                    })
                )
            }),
            (0, r.jsxs)('div', {
                className: v.buttonWrapper,
                children: [
                    (0, r.jsx)(_.b, {
                        children: (e, t) =>
                            (0, r.jsx)(c.ua7, {
                                'aria-label': G,
                                tooltipClassName: v.tooltip,
                                tooltipContentClassName: v.tooltipContent,
                                shouldShow: !e,
                                text: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-sm/normal',
                                            color: 'header-primary',
                                            className: v.tooltipHeader,
                                            children: G
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: b.NW.string(S ? b.t['0NnojY'] : b.t.raWNzM)
                                        }),
                                        S &&
                                            !Z &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-muted',
                                                children: b.NW.string(b.t.ZK9aMD)
                                            })
                                    ]
                                }),
                                children: (e) =>
                                    (0, r.jsx)(l.animated.div, {
                                        className: v.buttonWrapper,
                                        style: F[0],
                                        children: (0, r.jsx)(
                                            c.P3F,
                                            x(y({ className: v.button }, e), {
                                                onClick: () => {
                                                    null == t || t(), I();
                                                },
                                                children: (0, r.jsx)(P, {
                                                    size: 'custom',
                                                    width: 20,
                                                    height: 20,
                                                    color: w
                                                })
                                            })
                                        )
                                    })
                            })
                    }),
                    (0, r.jsx)(c.ua7, {
                        text: b.NW.string(b.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(l.animated.div, {
                                className: v.buttonWrapper,
                                style: F[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    x(y({ className: v.button }, e), {
                                        onClick: T,
                                        children: (0, r.jsx)(c.k$p, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            color: w
                                        })
                                    })
                                )
                            })
                    })
                ]
            })
        ]
    });
}
