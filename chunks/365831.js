n.d(t, { y: () => I }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(642128),
    o = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(460181),
    h = n(131951),
    p = n(19780),
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
        tension: 500
    },
    E = {
        mass: 1,
        friction: 28,
        tension: 800
    };
function I(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, g.o)(),
        a = (0, d.Z)(n),
        I = (0, f.z)(n),
        { toggleLoopback: b, isLoopbackEnabled: Z } = (function () {
            let e = (0, o.e7)([h.Z], () => h.Z.getVoiceFilterLoopbackEnabled()),
                t = l.useCallback(() => {
                    (0, u.GN)(e ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, m._j)(!e);
                }, [e]);
            return {
                isLoopbackEnabled: e,
                toggleLoopback: t
            };
        })(),
        N = Z ? c.Iy5 : c.X_q,
        T = l.useCallback(() => (0, m.v6)(null), []),
        S = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(),
        j = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        A = (0, o.e7)([p.Z], () => p.Z.isConnected()),
        y = l.useRef(0),
        P = n !== a ? y.current + 1 : y.current;
    l.useEffect(() => {
        y.current = P;
    }, [P]);
    let R = (0, c.q_F)(
            {
                opacity: null != n ? 1 : 0,
                height: null != n ? 72 : 0,
                backgroundColor: null !== (t = null == I ? void 0 : I.baseColor) && void 0 !== t ? t : S,
                config: x,
                delay: null != n && null != a ? 150 : 0
            },
            'respect-motion-settings'
        ),
        M = (0, c.Yzy)(
            null == I ? void 0 : I.id,
            {
                key: P,
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
                config: x
            },
            'respect-motion-settings'
        ),
        [L] = (0, c.bYB)(
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
                                        ...E,
                                        restVelocity: 0.5
                                    }
                                },
                                {
                                    translateY: 0,
                                    config: E
                                }
                            ],
                config: v,
                delay: 150 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        k = (0, c.Yzy)(
            null == I ? void 0 : I.iconURL,
            {
                key: P,
                from: {
                    opacity: 0,
                    scale: 0.5,
                    translateX: null == a ? 0 : -30
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    delay: null == a ? 50 : 100
                },
                leave: {
                    opacity: 0,
                    scale: null == n ? 0.5 : 1,
                    translateX: null == n ? 0 : 44,
                    delay: 50
                },
                config: x
            },
            'respect-motion-settings'
        ),
        O = (0, c.Yzy)(
            null == I ? void 0 : I.name,
            {
                key: P,
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
                    delay: null == a ? 100 : 150,
                    config: null == a ? v : x
                },
                leave: {
                    opacity: 0,
                    translateX: null == n ? 0 : 40,
                    translateY: null == n ? 16 : 0,
                    delay: 150,
                    config: null == a ? v : x
                },
                config: v
            },
            'respect-motion-settings'
        ),
        D = _.intl.string(Z ? _.t.esVyo6 : _.t.UQqFCA);
    return (0, i.jsxs)(s.animated.div, {
        className: C.voiceFilterHero,
        style: R,
        children: [
            (0, i.jsx)('div', {
                className: r()([C.bgGradient, C.bgGradientHighlight])
            }),
            M((e) =>
                (0, i.jsx)(s.animated.div, {
                    className: C.bgGradient,
                    style: e
                })
            ),
            (0, i.jsx)('div', {
                className: C.iconWrapper,
                children: k((e, t) =>
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
                children: O((e, t) =>
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
                        'aria-label': D,
                        tooltipClassName: C.tooltip,
                        tooltipContentClassName: C.tooltipContent,
                        shouldShow: !0,
                        text: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.X6q, {
                                    variant: 'heading-sm/normal',
                                    color: 'header-primary',
                                    className: C.tooltipHeader,
                                    children: D
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-muted',
                                    children: _.intl.string(Z ? _.t['0NnojY'] : _.t.raWNzM)
                                }),
                                Z &&
                                    !A &&
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
                                style: L[0],
                                children: (0, i.jsx)(c.P3F, {
                                    className: C.button,
                                    ...e,
                                    onClick: b,
                                    children: (0, i.jsx)(N, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        color: j
                                    })
                                })
                            })
                    }),
                    (0, i.jsx)(c.ua7, {
                        text: _.intl.string(_.t.UvMx7O),
                        children: (e) =>
                            (0, i.jsx)(s.animated.div, {
                                className: C.buttonWrapper,
                                style: L[1],
                                children: (0, i.jsx)(c.P3F, {
                                    className: C.button,
                                    ...e,
                                    onClick: T,
                                    children: (0, i.jsx)(c.k$p, {
                                        size: 'custom',
                                        width: 20,
                                        height: 20,
                                        color: j
                                    })
                                })
                            })
                    })
                ]
            })
        ]
    });
}
