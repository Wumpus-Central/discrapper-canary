n.d(t, { y: () => I }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(642128),
    s = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(110924),
    p = n(460181),
    m = n(131951),
    f = n(19780),
    h = n(743498),
    g = n(56848),
    _ = n(378441),
    b = n(190676),
    v = n(388032),
    y = n(248244);
function x(e) {
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
function O(e, t) {
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
let E = {
        mass: 2,
        friction: 30,
        tension: 500,
        clamp: !0
    },
    j = {
        mass: 1,
        friction: 28,
        tension: 700,
        clamp: !0
    },
    N = {
        mass: 1,
        friction: 28,
        tension: 500
    },
    C = {
        mass: 1,
        friction: 28,
        tension: 800
    };
function I(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, _.o)(),
        a = (0, u.Z)(n),
        I = (0, g.z)(n),
        { toggleLoopback: S, isLoopbackEnabled: P } = (function () {
            let { activeVoice: e } = (0, _.o)(),
                t = (0, s.e7)([m.Z], () => m.Z.getVoiceFilterPlaybackEnabled()),
                n = i.useCallback(() => {
                    (0, p.GN)(t ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, h._j)(!t);
                }, [t]);
            return (
                i.useEffect(
                    () => (
                        d.Z.setLoopback('voice_filter_preview', null != e && t),
                        () => {
                            d.Z.setLoopback('voice_filter_preview', !1);
                        }
                    ),
                    [t, e]
                ),
                {
                    isLoopbackEnabled: t,
                    toggleLoopback: n
                }
            );
        })(),
        T = P ? c.Iy5 : c.X_q,
        A = i.useCallback(() => (0, h.v6)(null), []),
        w = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(),
        Z = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        k = (0, s.e7)([f.Z], () => f.Z.isConnected()),
        R = i.useRef(0),
        L = n !== a ? R.current + 1 : R.current;
    i.useEffect(() => {
        R.current = L;
    }, [L]);
    let D = null != n,
        M = !D,
        W = D && null != a,
        F = null == n && null != a,
        U = (0, c.q_F)(
            {
                opacity: +!!D,
                height: 72 * !!D,
                pointerEvents: D ? 'auto' : 'none',
                backgroundColor: null !== (t = null == I ? void 0 : I.baseColor) && void 0 !== t ? t : w,
                config: E,
                delay: W ? 150 : 100 * !!F
            },
            'respect-motion-settings'
        ),
        B = (0, c.Yzy)(
            null == I ? void 0 : I.id,
            {
                key: L,
                from: {
                    opacity: 0,
                    background: null == I ? void 0 : I.splashGradient
                },
                enter: {
                    opacity: 1,
                    delay: 150
                },
                leave: {
                    opacity: 0,
                    delay: 50
                },
                config: E
            },
            'respect-motion-settings'
        ),
        [G] = (0, c.bYB)(
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
                                    config: O(x({}, C), { restVelocity: 0.5 })
                                },
                                {
                                    translateY: 0,
                                    config: C
                                }
                            ],
                config: N,
                delay: F ? 100 - 50 * e : 150 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        H = (0, c.Yzy)(
            null == I ? void 0 : I.iconURL,
            {
                key: L,
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
                config: E
            },
            'respect-motion-settings'
        ),
        V = (0, c.Yzy)(
            null == I ? void 0 : I.name,
            {
                key: L,
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
                    config: null == a ? N : j
                },
                leave: {
                    opacity: 0,
                    translateX: 40 * (null != n),
                    translateY: 16 * (null == n),
                    delay: F ? 200 : 150,
                    config: null == a ? N : j
                },
                config: N
            },
            'respect-motion-settings'
        ),
        z = v.NW.string(P ? v.t.esVyo6 : v.t.UQqFCA);
    return (0, r.jsxs)(l.animated.div, {
        className: y.voiceFilterHero,
        'aria-hidden': M,
        style: U,
        children: [
            (0, r.jsx)('div', {
                className: o()([y.bgGradient, y.bgGradientHighlight])
            }),
            B((e) =>
                (0, r.jsx)(l.animated.div, {
                    className: y.bgGradient,
                    style: e
                })
            ),
            (0, r.jsx)('div', {
                className: y.iconWrapper,
                children: H((e, t) =>
                    (0, r.jsx)(
                        l.animated.img,
                        {
                            className: y.activeVoiceIcon,
                            style: e,
                            alt: '',
                            src: t
                        },
                        t
                    )
                )
            }),
            (0, r.jsx)('div', {
                className: y.descriptionWrapper,
                children: V((e, t) =>
                    (0, r.jsxs)(l.animated.div, {
                        className: y.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: y.offWhiteText,
                                children: v.NW.string(v.t.WW5DAA)
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
                className: y.buttonWrapper,
                children: [
                    (0, r.jsx)(b.b, {
                        children: (e, t) =>
                            (0, r.jsx)(c.ua7, {
                                'aria-label': z,
                                tooltipClassName: y.tooltip,
                                tooltipContentClassName: y.tooltipContent,
                                shouldShow: D && !e,
                                text: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-sm/normal',
                                            color: 'header-primary',
                                            className: y.tooltipHeader,
                                            children: z
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: v.NW.string(P ? v.t['0NnojY'] : v.t.raWNzM)
                                        }),
                                        P &&
                                            !k &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-muted',
                                                children: v.NW.string(v.t.ZK9aMD)
                                            })
                                    ]
                                }),
                                children: (e) =>
                                    (0, r.jsx)(l.animated.div, {
                                        className: y.buttonWrapper,
                                        style: G[0],
                                        children: (0, r.jsx)(
                                            c.P3F,
                                            O(
                                                x(
                                                    {
                                                        className: y.button,
                                                        'aria-hidden': M,
                                                        focusProps: { enabled: D },
                                                        tabIndex: D ? 0 : -1
                                                    },
                                                    e
                                                ),
                                                {
                                                    onClick: () => {
                                                        null == t || t(), S();
                                                    },
                                                    children: (0, r.jsx)(T, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        color: Z
                                                    })
                                                }
                                            )
                                        )
                                    })
                            })
                    }),
                    (0, r.jsx)(c.ua7, {
                        shouldShow: D,
                        text: v.NW.string(v.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(l.animated.div, {
                                className: y.buttonWrapper,
                                style: G[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    O(
                                        x(
                                            {
                                                className: y.button,
                                                'aria-hidden': M,
                                                focusProps: { enabled: D },
                                                tabIndex: D ? 0 : -1
                                            },
                                            e
                                        ),
                                        {
                                            onClick: A,
                                            children: (0, r.jsx)(c.k$p, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20,
                                                color: Z
                                            })
                                        }
                                    )
                                )
                            })
                    })
                ]
            })
        ]
    });
}
