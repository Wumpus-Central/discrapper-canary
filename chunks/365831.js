(n.d(t, { y: () => I }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(451463),
    s = n(442837),
    c = n(481060),
    u = n(846027),
    d = n(110924),
    p = n(460181),
    f = n(131951),
    m = n(743498),
    g = n(56848),
    b = n(378441),
    _ = n(388032),
    v = n(270217);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function y(e, t) {
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
let O = (e) => 1 - Math.pow(1 - e, 4),
    j = {
        mass: 1,
        friction: 64,
        tension: 1000,
        clamp: !0
    },
    S = {
        mass: 1,
        friction: 64,
        tension: 1000
    },
    x = {
        mass: 1,
        friction: 35,
        tension: 1000
    };
function I(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, b.o)(),
        l = (0, d.Z)(n),
        I = (0, g.z)(n),
        { toggleLoopback: P, isLoopbackEnabled: C } = (function () {
            let { activeVoice: e } = (0, b.o)(),
                t = (0, s.e7)([f.Z], () => f.Z.getVoiceFilterPlaybackEnabled()),
                n = i.useCallback(() => {
                    ((0, p.GN)(t ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, m._j)(!t));
                }, [t]);
            return (
                i.useEffect(
                    () => (
                        u.Z.setLoopback('voice_filter_preview', null != e && t),
                        () => {
                            u.Z.setLoopback('voice_filter_preview', !1);
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
        E = C ? c.Iy5 : c.X_q,
        w = i.useCallback(() => (0, m.v6)(null), []),
        T = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
        N = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        Z = i.useRef(0),
        A = n !== l ? Z.current + 1 : Z.current;
    i.useEffect(() => {
        Z.current = A;
    }, [A]);
    let D = null != n,
        k = !D,
        L = D && null != l,
        M = null == n && null != l,
        R = (0, c.q_F)(
            {
                opacity: +!!D,
                height: 72 * !!D,
                pointerEvents: D ? 'auto' : 'none',
                backgroundColor: null != (t = null == I ? void 0 : I.baseColor) ? t : T,
                config: (e) =>
                    'backgroundColor' === e
                        ? {
                              easing: O,
                              duration: 200
                          }
                        : j,
                delay: 100 * !!L
            },
            'respect-motion-settings'
        ),
        F = (0, c.Yzy)(
            null == I ? void 0 : I.id,
            {
                key: A,
                from: {
                    opacity: 0,
                    background: null == I ? void 0 : I.splashGradient
                },
                enter: {
                    opacity: 1,
                    delay: L ? 100 : 50
                },
                leave: {
                    opacity: 0,
                    delay: L ? 100 : 150
                },
                config: {
                    easing: O,
                    duration: L ? 250 : 200
                }
            },
            'respect-motion-settings'
        ),
        [U] = (0, c.bYB)(
            2,
            (e) => ({
                from: L
                    ? {
                          translateY: 0,
                          opacity: 1
                      }
                    : {
                          translateY: 16,
                          opacity: 0
                      },
                to:
                    null == n
                        ? {
                              translateY: 16,
                              opacity: 0
                          }
                        : L
                          ? null
                          : {
                                translateY: 0,
                                opacity: 1
                            },
                config: (e) =>
                    'opacity' === e
                        ? {
                              easing: O,
                              duration: 200
                          }
                        : S,
                delay: M ? 50 - 50 * e : 200 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        V = (0, c.Yzy)(
            null == I ? void 0 : I.iconURL,
            {
                key: A,
                from: {
                    opacity: 0,
                    scale: 80 / 88,
                    translateX: L ? -16 : 0
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    delay: 50
                },
                leave: {
                    opacity: 0,
                    scale: D ? 80 / 88 : 1,
                    translateX: 24 * !!D,
                    delay: 150 * !L
                },
                config: (e) =>
                    'opacity' === e
                        ? {
                              easing: O,
                              duration: 200
                          }
                        : D
                          ? j
                          : x
            },
            'respect-motion-settings'
        ),
        B = (0, c.Yzy)(
            null == I ? void 0 : I.name,
            {
                key: A,
                from: {
                    opacity: 0,
                    scale: L ? 0.9 : 1,
                    translateY: 16 * !L
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    translateY: 0,
                    delay: 150,
                    config: (e) =>
                        'opacity' === e
                            ? {
                                  easing: O,
                                  duration: 200
                              }
                            : L
                              ? j
                              : S
                },
                leave: {
                    opacity: 0,
                    translateX: 24 * (null != n),
                    translateY: 16 * (null == n),
                    delay: M ? 100 : 50,
                    config: (e) =>
                        'opacity' === e
                            ? {
                                  easing: O,
                                  duration: 200
                              }
                            : L
                              ? j
                              : S
                }
            },
            'respect-motion-settings'
        ),
        Y = _.intl.string(C ? _.t.esVyo6 : _.t.UQqFCA);
    return (0, r.jsxs)(a.animated.div, {
        className: v.voiceFilterHero,
        'aria-hidden': k,
        style: R,
        children: [
            (0, r.jsx)('div', {
                className: o()([v.bgGradient, v.bgGradientHighlight])
            }),
            F((e) =>
                (0, r.jsx)(a.animated.div, {
                    className: v.bgGradient,
                    style: e
                })
            ),
            (0, r.jsx)('div', {
                className: v.iconWrapper,
                children: V((e, t) =>
                    (0, r.jsx)(
                        a.animated.img,
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
                    (0, r.jsxs)(a.animated.div, {
                        className: v.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: v.offWhiteText,
                                children: _.intl.string(_.t.WW5DAA)
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: null != t ? _.intl.string(t) : ''
                            })
                        ]
                    })
                )
            }),
            (0, r.jsxs)('div', {
                className: v.buttonWrapper,
                children: [
                    (0, r.jsx)(c.ua7, {
                        'aria-label': Y,
                        tooltipClassName: v.tooltip,
                        tooltipContentClassName: v.tooltipContent,
                        shouldShow: D,
                        text: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-sm/normal',
                                    color: 'header-primary',
                                    className: v.tooltipHeader,
                                    children: Y
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-muted',
                                    children: _.intl.string(C ? _.t.Sg6cfn : _.t.ZKhtw8)
                                })
                            ]
                        }),
                        children: (e) =>
                            (0, r.jsx)(a.animated.div, {
                                className: v.buttonWrapper,
                                style: U[0],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        h(
                                            {
                                                className: o()(v.button, { [v.loopbackEnabled]: C }),
                                                'aria-hidden': k,
                                                focusProps: { enabled: D },
                                                tabIndex: D ? 0 : -1
                                            },
                                            e
                                        ),
                                        {
                                            onClick: () => P(),
                                            children: (0, r.jsx)(E, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20,
                                                color: N
                                            })
                                        }
                                    )
                                )
                            })
                    }),
                    (0, r.jsx)(c.ua7, {
                        shouldShow: D,
                        text: _.intl.string(_.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(a.animated.div, {
                                className: v.buttonWrapper,
                                style: U[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        h(
                                            {
                                                className: v.button,
                                                'aria-hidden': k,
                                                focusProps: { enabled: D },
                                                tabIndex: D ? 0 : -1
                                            },
                                            e
                                        ),
                                        {
                                            onClick: w,
                                            children: (0, r.jsx)(c.k$p, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20,
                                                color: N
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
