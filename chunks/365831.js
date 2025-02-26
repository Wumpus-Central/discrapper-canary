n.d(t, { y: () => S }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(642128),
    s = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(493773),
    p = n(110924),
    m = n(460181),
    f = n(131951),
    h = n(19780),
    g = n(743498),
    _ = n(56848),
    b = n(378441),
    v = n(190676),
    y = n(388032),
    x = n(248244);
function E(e) {
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
let j = {
        mass: 2,
        friction: 30,
        tension: 500,
        clamp: !0
    },
    N = {
        mass: 1,
        friction: 28,
        tension: 700,
        clamp: !0
    },
    C = {
        mass: 1,
        friction: 28,
        tension: 500
    },
    I = {
        mass: 1,
        friction: 28,
        tension: 800
    };
function S(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, b.o)(),
        a = (0, p.Z)(n),
        S = (0, _.z)(n),
        { toggleLoopback: P, isLoopbackEnabled: T } = (function () {
            let { activeVoice: e } = (0, b.o)(),
                t = (0, s.e7)([f.Z], () => f.Z.getVoiceFilterPlaybackEnabled()),
                n = i.useCallback(() => {
                    (0, m.GN)(t ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, g._j)(!t);
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
                (0, u.ZP)(
                    () => (
                        f.Z.getVoiceFilterPlaybackEnabled() && (0, m.GN)('voice_filter_loopback_on'),
                        () => {
                            f.Z.getVoiceFilterPlaybackEnabled() && (0, m.GN)('voice_filter_loopback_off');
                        }
                    )
                ),
                {
                    isLoopbackEnabled: t,
                    toggleLoopback: n
                }
            );
        })(),
        A = T ? c.Iy5 : c.X_q,
        w = i.useCallback(() => (0, g.v6)(null), []),
        Z = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(),
        k = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        R = (0, s.e7)([h.Z], () => h.Z.isConnected()),
        L = i.useRef(0),
        D = n !== a ? L.current + 1 : L.current;
    i.useEffect(() => {
        L.current = D;
    }, [D]);
    let M = null != n,
        W = !M,
        F = M && null != a,
        U = null == n && null != a,
        B = (0, c.q_F)(
            {
                opacity: +!!M,
                height: 72 * !!M,
                pointerEvents: M ? 'auto' : 'none',
                backgroundColor: null !== (t = null == S ? void 0 : S.baseColor) && void 0 !== t ? t : Z,
                config: j,
                delay: F ? 150 : 100 * !!U
            },
            'respect-motion-settings'
        ),
        G = (0, c.Yzy)(
            null == S ? void 0 : S.id,
            {
                key: D,
                from: {
                    opacity: 0,
                    background: null == S ? void 0 : S.splashGradient
                },
                enter: {
                    opacity: 1,
                    delay: 150
                },
                leave: {
                    opacity: 0,
                    delay: 50
                },
                config: j
            },
            'respect-motion-settings'
        ),
        [H] = (0, c.bYB)(
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
                                    config: O(E({}, I), { restVelocity: 0.5 })
                                },
                                {
                                    translateY: 0,
                                    config: I
                                }
                            ],
                config: C,
                delay: U ? 100 - 50 * e : 150 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        V = (0, c.Yzy)(
            null == S ? void 0 : S.iconURL,
            {
                key: D,
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
                config: j
            },
            'respect-motion-settings'
        ),
        z = (0, c.Yzy)(
            null == S ? void 0 : S.name,
            {
                key: D,
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
                    config: null == a ? C : N
                },
                leave: {
                    opacity: 0,
                    translateX: 40 * (null != n),
                    translateY: 16 * (null == n),
                    delay: U ? 200 : 150,
                    config: null == a ? C : N
                },
                config: C
            },
            'respect-motion-settings'
        ),
        K = y.NW.string(T ? y.t.esVyo6 : y.t.UQqFCA);
    return (0, r.jsxs)(l.animated.div, {
        className: x.voiceFilterHero,
        'aria-hidden': W,
        style: B,
        children: [
            (0, r.jsx)('div', {
                className: o()([x.bgGradient, x.bgGradientHighlight])
            }),
            G((e) =>
                (0, r.jsx)(l.animated.div, {
                    className: x.bgGradient,
                    style: e
                })
            ),
            (0, r.jsx)('div', {
                className: x.iconWrapper,
                children: V((e, t) =>
                    (0, r.jsx)(
                        l.animated.img,
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
            (0, r.jsx)('div', {
                className: x.descriptionWrapper,
                children: z((e, t) =>
                    (0, r.jsxs)(l.animated.div, {
                        className: x.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: x.offWhiteText,
                                children: y.NW.string(y.t.WW5DAA)
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: null != t ? y.NW.string(t) : ''
                            })
                        ]
                    })
                )
            }),
            (0, r.jsxs)('div', {
                className: x.buttonWrapper,
                children: [
                    (0, r.jsx)(v.b, {
                        children: (e, t) =>
                            (0, r.jsx)(c.ua7, {
                                'aria-label': K,
                                tooltipClassName: x.tooltip,
                                tooltipContentClassName: x.tooltipContent,
                                shouldShow: M && !e,
                                text: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.X6q, {
                                            variant: 'heading-sm/normal',
                                            color: 'header-primary',
                                            className: x.tooltipHeader,
                                            children: K
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: y.NW.string(T ? y.t['0NnojY'] : y.t.raWNzM)
                                        }),
                                        T &&
                                            !R &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'header-muted',
                                                children: y.NW.string(y.t.ZK9aMD)
                                            })
                                    ]
                                }),
                                children: (e) =>
                                    (0, r.jsx)(l.animated.div, {
                                        className: x.buttonWrapper,
                                        style: H[0],
                                        children: (0, r.jsx)(
                                            c.P3F,
                                            O(
                                                E(
                                                    {
                                                        className: x.button,
                                                        'aria-hidden': W,
                                                        focusProps: { enabled: M },
                                                        tabIndex: M ? 0 : -1
                                                    },
                                                    e
                                                ),
                                                {
                                                    onClick: () => {
                                                        null == t || t(), P();
                                                    },
                                                    children: (0, r.jsx)(A, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        color: k
                                                    })
                                                }
                                            )
                                        )
                                    })
                            })
                    }),
                    (0, r.jsx)(c.ua7, {
                        shouldShow: M,
                        text: y.NW.string(y.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(l.animated.div, {
                                className: x.buttonWrapper,
                                style: H[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    O(
                                        E(
                                            {
                                                className: x.button,
                                                'aria-hidden': W,
                                                focusProps: { enabled: M },
                                                tabIndex: M ? 0 : -1
                                            },
                                            e
                                        ),
                                        {
                                            onClick: w,
                                            children: (0, r.jsx)(c.k$p, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20,
                                                color: k
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
