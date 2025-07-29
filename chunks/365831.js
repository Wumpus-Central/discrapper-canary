(n.d(t, { y: () => x }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(564854),
    s = n(442837),
    c = n(481060),
    u = n(846027),
    d = n(110924),
    f = n(460181),
    p = n(131951),
    m = n(743498),
    g = n(56848),
    h = n(378441),
    b = n(388032),
    _ = n(270217);
function v(e) {
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
    S = {
        mass: 1,
        friction: 64,
        tension: 1000,
        clamp: !0
    },
    I = {
        mass: 1,
        friction: 64,
        tension: 1000
    },
    j = {
        mass: 1,
        friction: 35,
        tension: 1000
    };
function x(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, h.o)(),
        l = (0, d.Z)(n),
        x = (0, g.z)(n),
        { toggleLoopback: E, isLoopbackEnabled: P } = (function () {
            let { activeVoice: e } = (0, h.o)(),
                t = (0, s.e7)([p.Z], () => p.Z.getVoiceFilterPlaybackEnabled()),
                n = i.useCallback(() => {
                    ((0, f.GN)(t ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, m._j)(!t));
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
        C = P ? c.Iy5 : c.X_q,
        T = i.useCallback(() => (0, m.v6)(null), []),
        N = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
        A = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        w = i.useRef(0),
        D = n !== l ? w.current + 1 : w.current;
    i.useEffect(() => {
        w.current = D;
    }, [D]);
    let Z = null != n,
        L = !Z,
        M = Z && null != l,
        k = null == n && null != l,
        U = (0, c.q_F)(
            {
                opacity: +!!Z,
                height: 72 * !!Z,
                pointerEvents: Z ? 'auto' : 'none',
                backgroundColor: null != (t = null == x ? void 0 : x.baseColor) ? t : N,
                config: (e) =>
                    'backgroundColor' === e
                        ? {
                              easing: O,
                              duration: 200
                          }
                        : S,
                delay: 100 * !!M
            },
            'respect-motion-settings'
        ),
        R = (0, c.Yzy)(
            null == x ? void 0 : x.id,
            {
                key: D,
                from: {
                    opacity: 0,
                    background: null == x ? void 0 : x.splashGradient
                },
                enter: {
                    opacity: 1,
                    delay: M ? 100 : 50
                },
                leave: {
                    opacity: 0,
                    delay: M ? 100 : 150
                },
                config: {
                    easing: O,
                    duration: M ? 250 : 200
                }
            },
            'respect-motion-settings'
        ),
        [V] = (0, c.bYB)(
            2,
            (e) => ({
                from: M
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
                        : M
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
                        : I,
                delay: k ? 50 - 50 * e : 200 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        F = (0, c.Yzy)(
            null == x ? void 0 : x.iconURL,
            {
                key: D,
                from: {
                    opacity: 0,
                    scale: 80 / 88,
                    translateX: M ? -16 : 0
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    translateX: 0,
                    delay: 50
                },
                leave: {
                    opacity: 0,
                    scale: Z ? 80 / 88 : 1,
                    translateX: 24 * !!Z,
                    delay: 150 * !M
                },
                config: (e) =>
                    'opacity' === e
                        ? {
                              easing: O,
                              duration: 200
                          }
                        : Z
                          ? S
                          : j
            },
            'respect-motion-settings'
        ),
        G = (0, c.Yzy)(
            null == x ? void 0 : x.name,
            {
                key: D,
                from: {
                    opacity: 0,
                    scale: M ? 0.9 : 1,
                    translateY: 16 * !M
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
                            : M
                              ? S
                              : I
                },
                leave: {
                    opacity: 0,
                    translateX: 24 * (null != n),
                    translateY: 16 * (null == n),
                    delay: k ? 100 : 50,
                    config: (e) =>
                        'opacity' === e
                            ? {
                                  easing: O,
                                  duration: 200
                              }
                            : M
                              ? S
                              : I
                }
            },
            'respect-motion-settings'
        ),
        B = b.intl.string(P ? b.t.esVyo6 : b.t.UQqFCA);
    return (0, r.jsxs)(o.animated.div, {
        className: _.voiceFilterHero,
        'aria-hidden': L,
        style: U,
        children: [
            (0, r.jsx)('div', {
                className: a()([_.bgGradient, _.bgGradientHighlight])
            }),
            R((e) =>
                (0, r.jsx)(o.animated.div, {
                    className: _.bgGradient,
                    style: e
                })
            ),
            (0, r.jsx)('div', {
                className: _.iconWrapper,
                children: F((e, t) =>
                    (0, r.jsx)(
                        o.animated.img,
                        {
                            className: _.activeVoiceIcon,
                            style: e,
                            alt: '',
                            src: t
                        },
                        t
                    )
                )
            }),
            (0, r.jsx)('div', {
                className: _.descriptionWrapper,
                children: G((e, t) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: _.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: _.offWhiteText,
                                children: b.intl.string(b.t.WW5DAA)
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: null != t ? b.intl.string(t) : ''
                            })
                        ]
                    })
                )
            }),
            (0, r.jsxs)('div', {
                className: _.buttonWrapper,
                children: [
                    (0, r.jsx)(c.ua7, {
                        'aria-label': B,
                        tooltipClassName: _.tooltip,
                        tooltipContentClassName: _.tooltipContent,
                        shouldShow: Z,
                        text: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-sm/normal',
                                    color: 'header-primary',
                                    className: _.tooltipHeader,
                                    children: B
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-muted',
                                    children: b.intl.string(P ? b.t.Sg6cfn : b.t.ZKhtw8)
                                })
                            ]
                        }),
                        children: (e) =>
                            (0, r.jsx)(o.animated.div, {
                                className: _.buttonWrapper,
                                style: V[0],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        v(
                                            {
                                                className: a()(_.button, { [_.loopbackEnabled]: P }),
                                                'aria-hidden': L,
                                                focusProps: { enabled: Z },
                                                tabIndex: Z ? 0 : -1
                                            },
                                            e
                                        ),
                                        {
                                            onClick: () => E(),
                                            children: (0, r.jsx)(C, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20,
                                                color: A
                                            })
                                        }
                                    )
                                )
                            })
                    }),
                    (0, r.jsx)(c.ua7, {
                        shouldShow: Z,
                        text: b.intl.string(b.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(o.animated.div, {
                                className: _.buttonWrapper,
                                style: V[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        v(
                                            {
                                                className: _.button,
                                                'aria-hidden': L,
                                                focusProps: { enabled: Z },
                                                tabIndex: Z ? 0 : -1
                                            },
                                            e
                                        ),
                                        {
                                            onClick: T,
                                            children: (0, r.jsx)(c.k$p, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20,
                                                color: A
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
