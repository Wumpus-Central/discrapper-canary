n.d(t, { y: () => b }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(642128),
    o = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(131951),
    h = n(19780),
    p = n(557177),
    m = n(743498),
    f = n(56848),
    g = n(378441),
    _ = n(388032),
    C = n(596504);
let x = {
        mass: 2,
        friction: 30,
        tension: 500,
        clamp: !0
    },
    v = {
        mass: 1,
        friction: 28,
        tension: 700,
        clamp: !0
    },
    E = {
        mass: 1,
        friction: 28,
        tension: 500
    },
    I = {
        mass: 1,
        friction: 28,
        tension: 800
    };
function b(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, g.o)(),
        a = (0, d.Z)(n),
        b = (0, f.z)(n),
        { toggleLoopback: Z, isLoopbackEnabled: N } = (function () {
            let e = (0, o.e7)([u.Z], () => u.Z.getVoiceFilterLoopbackEnabled()),
                t = l.useCallback(() => {
                    (0, p.GN)(e ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, m._j)(!e);
                }, [e]);
            return {
                isLoopbackEnabled: e,
                toggleLoopback: t
            };
        })(),
        T = N ? c.Iy5 : c.X_q,
        S = l.useCallback(() => (0, m.v6)(null), []),
        j = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(),
        A = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        y = (0, o.e7)([h.Z], () => h.Z.isConnected()),
        P = l.useRef(0),
        R = n !== a ? P.current + 1 : P.current;
    l.useEffect(() => {
        P.current = R;
    }, [R]);
    let M = null != n && null != a,
        L = null == n && null != a,
        k = (0, c.q_F)(
            {
                opacity: null != n ? 1 : 0,
                height: null != n ? 72 : 0,
                backgroundColor: null !== (t = null == b ? void 0 : b.baseColor) && void 0 !== t ? t : j,
                config: x,
                delay: M ? 150 : L ? 100 : 0
            },
            'respect-motion-settings'
        ),
        O = (0, c.Yzy)(
            null == b ? void 0 : b.id,
            {
                key: R,
                from: {
                    opacity: 0,
                    background: null == b ? void 0 : b.splashGradient
                },
                enter: {
                    opacity: 1,
                    delay: 150
                },
                leave: {
                    opacity: 0,
                    delay: 50
                },
                config: x
            },
            'respect-motion-settings'
        ),
        [D] = (0, c.bYB)(
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
                                    config: {
                                        ...I,
                                        restVelocity: 0.5
                                    }
                                },
                                {
                                    translateY: 0,
                                    config: I
                                }
                            ],
                config: E,
                delay: L ? 100 - 50 * e : 150 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        w = (0, c.Yzy)(
            null == b ? void 0 : b.iconURL,
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
                    delay: null == a ? 0 : 200
                },
                leave: {
                    opacity: 0,
                    scale: null == n ? 0.5 : 1,
                    translateX: null == n ? 0 : 32,
                    delay: 0
                },
                config: x
            },
            'respect-motion-settings'
        ),
        U = (0, c.Yzy)(
            null == b ? void 0 : b.name,
            {
                key: R,
                from: {
                    opacity: 0,
                    scale: null == a ? 1 : 0.5,
                    translateY: null == a ? 16 : 0
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    translateY: 0,
                    delay: null == a ? 100 : 275,
                    config: null == a ? E : v
                },
                leave: {
                    opacity: 0,
                    translateX: null == n ? 0 : 40,
                    translateY: null == n ? 16 : 0,
                    delay: L ? 200 : 150,
                    config: null == a ? E : v
                },
                config: E
            },
            'respect-motion-settings'
        ),
        B = _.intl.string(N ? _.t.esVyo6 : _.t.UQqFCA);
    return (0, i.jsxs)(s.animated.div, {
        className: C.voiceFilterHero,
        style: k,
        children: [
            (0, i.jsx)('div', {
                className: r()([C.bgGradient, C.bgGradientHighlight])
            }),
            O((e) =>
                (0, i.jsx)(s.animated.div, {
                    className: C.bgGradient,
                    style: e
                })
            ),
            (0, i.jsx)('div', {
                className: C.iconWrapper,
                children: w((e, t) =>
                    (0, i.jsx)(
                        s.animated.img,
                        {
                            className: C.activeVoiceIcon,
                            style: e,
                            alt: '',
                            src: t
                        },
                        t
                    )
                )
            }),
            (0, i.jsx)('div', {
                className: C.descriptionWrapper,
                children: U((e, t) =>
                    (0, i.jsxs)(s.animated.div, {
                        className: C.description,
                        style: e,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: C.offWhiteText,
                                children: _.intl.string(_.t.WW5DAA)
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: t
                            })
                        ]
                    })
                )
            }),
            (0, i.jsxs)('div', {
                className: C.buttonWrapper,
                children: [
                    (0, i.jsx)(c.ua7, {
                        'aria-label': B,
                        tooltipClassName: C.tooltip,
                        tooltipContentClassName: C.tooltipContent,
                        shouldShow: !0,
                        text: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-sm/normal',
                                    color: 'header-primary',
                                    className: C.tooltipHeader,
                                    children: B
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-muted',
                                    children: _.intl.string(N ? _.t['0NnojY'] : _.t.raWNzM)
                                }),
                                N &&
                                    !y &&
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-muted',
                                        children: _.intl.string(_.t.ZK9aMD)
                                    })
                            ]
                        }),
                        children: (e) =>
                            (0, i.jsx)(s.animated.div, {
                                className: C.buttonWrapper,
                                style: D[0],
                                children: (0, i.jsx)(c.P3F, {
                                    className: C.button,
                                    ...e,
                                    onClick: Z,
                                    children: (0, i.jsx)(T, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        color: A
                                    })
                                })
                            })
                    }),
                    (0, i.jsx)(c.ua7, {
                        text: _.intl.string(_.t.UvMx7O),
                        children: (e) =>
                            (0, i.jsx)(s.animated.div, {
                                className: C.buttonWrapper,
                                style: D[1],
                                children: (0, i.jsx)(c.P3F, {
                                    className: C.button,
                                    ...e,
                                    onClick: S,
                                    children: (0, i.jsx)(c.k$p, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        color: A
                                    })
                                })
                            })
                    })
                ]
            })
        ]
    });
}
