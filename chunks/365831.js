n.d(t, { y: () => Z }), n(47120);
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
    _ = n(190676),
    C = n(388032),
    x = n(990215);
let v = {
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
    I = {
        mass: 1,
        friction: 28,
        tension: 500
    },
    b = {
        mass: 1,
        friction: 28,
        tension: 800
    };
function Z(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, g.o)(),
        a = (0, d.Z)(n),
        Z = (0, f.z)(n),
        { toggleLoopback: N, isLoopbackEnabled: T } = (function () {
            let e = (0, o.e7)([h.Z], () => h.Z.getVoiceFilterPlaybackEnabled()),
                t = l.useCallback(() => {
                    (0, u.GN)(e ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, m._j)(!e);
                }, [e]);
            return {
                isLoopbackEnabled: e,
                toggleLoopback: t
            };
        })(),
        S = T ? c.Iy5 : c.X_q,
        j = l.useCallback(() => (0, m.v6)(null), []),
        y = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(),
        A = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        P = (0, o.e7)([p.Z], () => p.Z.isConnected()),
        R = l.useRef(0),
        M = n !== a ? R.current + 1 : R.current;
    l.useEffect(() => {
        R.current = M;
    }, [M]);
    let L = null != n,
        k = null == n && null != a,
        O = (0, c.q_F)(
            {
                opacity: L ? 1 : 0,
                height: L ? 72 : 0,
                pointerEvents: L ? 'auto' : 'none',
                backgroundColor: null !== (t = null == Z ? void 0 : Z.baseColor) && void 0 !== t ? t : y,
                config: v,
                delay: L && null != a ? 150 : k ? 100 : 0
            },
            'respect-motion-settings'
        ),
        D = (0, c.Yzy)(
            null == Z ? void 0 : Z.id,
            {
                key: M,
                from: {
                    opacity: 0,
                    background: null == Z ? void 0 : Z.splashGradient
                },
                enter: {
                    opacity: 1,
                    delay: 150
                },
                leave: {
                    opacity: 0,
                    delay: 50
                },
                config: v
            },
            'respect-motion-settings'
        ),
        [w] = (0, c.bYB)(
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
                                        ...b,
                                        restVelocity: 0.5
                                    }
                                },
                                {
                                    translateY: 0,
                                    config: b
                                }
                            ],
                config: I,
                delay: k ? 100 - 50 * e : 150 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        U = (0, c.Yzy)(
            null == Z ? void 0 : Z.iconURL,
            {
                key: M,
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
                config: v
            },
            'respect-motion-settings'
        ),
        B = (0, c.Yzy)(
            null == Z ? void 0 : Z.name,
            {
                key: M,
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
                    config: null == a ? I : E
                },
                leave: {
                    opacity: 0,
                    translateX: null == n ? 0 : 40,
                    translateY: null == n ? 16 : 0,
                    delay: k ? 200 : 150,
                    config: null == a ? I : E
                },
                config: I
            },
            'respect-motion-settings'
        ),
        F = C.intl.string(T ? C.t.esVyo6 : C.t.UQqFCA);
    return (0, i.jsxs)(s.animated.div, {
        className: x.voiceFilterHero,
        style: O,
        children: [
            (0, i.jsx)('div', {
                className: r()([x.bgGradient, x.bgGradientHighlight])
            }),
            D((e) =>
                (0, i.jsx)(s.animated.div, {
                    className: x.bgGradient,
                    style: e
                })
            ),
            (0, i.jsx)('div', {
                className: x.iconWrapper,
                children: U((e, t) =>
                    (0, i.jsx)(
                        s.animated.img,
                        {
                            className: x.activeVoiceIcon,
                            style: e,
                            alt: '',
                            src: t
                        },
                        t
                    )
                )
            }),
            (0, i.jsx)('div', {
                className: x.descriptionWrapper,
                children: B((e, t) =>
                    (0, i.jsxs)(s.animated.div, {
                        className: x.description,
                        style: e,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: x.offWhiteText,
                                children: C.intl.string(C.t.WW5DAA)
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
                className: x.buttonWrapper,
                children: [
                    (0, i.jsx)(_.b, {
                        children: (e, t) =>
                            (0, i.jsx)(c.ua7, {
                                'aria-label': F,
                                tooltipClassName: x.tooltip,
                                tooltipContentClassName: x.tooltipContent,
                                shouldShow: !e,
                                text: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(c.X6q, {
                                            variant: 'heading-sm/normal',
                                            color: 'header-primary',
                                            className: x.tooltipHeader,
                                            children: F
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: C.intl.string(T ? C.t['0NnojY'] : C.t.raWNzM)
                                        }),
                                        T &&
                                            !P &&
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-muted',
                                                children: C.intl.string(C.t.ZK9aMD)
                                            })
                                    ]
                                }),
                                children: (e) =>
                                    (0, i.jsx)(s.animated.div, {
                                        className: x.buttonWrapper,
                                        style: w[0],
                                        children: (0, i.jsx)(c.P3F, {
                                            className: x.button,
                                            ...e,
                                            onClick: () => {
                                                null == t || t(), N();
                                            },
                                            children: (0, i.jsx)(S, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20,
                                                color: A
                                            })
                                        })
                                    })
                            })
                    }),
                    (0, i.jsx)(c.ua7, {
                        text: C.intl.string(C.t.UvMx7O),
                        children: (e) =>
                            (0, i.jsx)(s.animated.div, {
                                className: x.buttonWrapper,
                                style: w[1],
                                children: (0, i.jsx)(c.P3F, {
                                    className: x.button,
                                    ...e,
                                    onClick: j,
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
