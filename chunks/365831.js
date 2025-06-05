n.d(t, { y: () => I }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(386230),
    s = n(442837),
    c = n(481060),
    u = n(846027),
    d = n(110924),
    f = n(460181),
    p = n(131951),
    m = n(743498),
    g = n(56848),
    _ = n(378441),
    b = n(388032),
    h = n(270217);
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
        { activeVoice: n } = (0, _.o)(),
        l = (0, d.Z)(n),
        I = (0, g.z)(n),
        { toggleLoopback: P, isLoopbackEnabled: C } = (function () {
            let { activeVoice: e } = (0, _.o)(),
                t = (0, s.e7)([p.Z], () => p.Z.getVoiceFilterPlaybackEnabled()),
                n = i.useCallback(() => {
                    (0, f.GN)(t ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, m._j)(!t);
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
        T = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(),
        N = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        Z = i.useRef(0),
        A = n !== l ? Z.current + 1 : Z.current;
    i.useEffect(() => {
        Z.current = A;
    }, [A]);
    let D = null != n,
        L = !D,
        k = D && null != l,
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
                delay: 100 * !!k
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
                    delay: k ? 100 : 50
                },
                leave: {
                    opacity: 0,
                    delay: k ? 100 : 150
                },
                config: {
                    easing: O,
                    duration: k ? 250 : 200
                }
            },
            'respect-motion-settings'
        ),
        [U] = (0, c.bYB)(
            2,
            (e) => ({
                from: k
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
                        : k
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
                    translateX: k ? -16 : 0
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
                    delay: 150 * !k
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
                    scale: k ? 0.9 : 1,
                    translateY: 16 * !k
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
                            : k
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
                            : k
                              ? j
                              : S
                }
            },
            'respect-motion-settings'
        ),
        Y = b.intl.string(C ? b.t.esVyo6 : b.t.UQqFCA);
    return (0, r.jsxs)(o.animated.div, {
        className: h.voiceFilterHero,
        'aria-hidden': L,
        style: R,
        children: [
            (0, r.jsx)('div', {
                className: a()([h.bgGradient, h.bgGradientHighlight])
            }),
            F((e) =>
                (0, r.jsx)(o.animated.div, {
                    className: h.bgGradient,
                    style: e
                })
            ),
            (0, r.jsx)('div', {
                className: h.iconWrapper,
                children: V((e, t) =>
                    (0, r.jsx)(
                        o.animated.img,
                        {
                            className: h.activeVoiceIcon,
                            style: e,
                            alt: '',
                            src: t
                        },
                        t
                    )
                )
            }),
            (0, r.jsx)('div', {
                className: h.descriptionWrapper,
                children: B((e, t) =>
                    (0, r.jsxs)(o.animated.div, {
                        className: h.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: h.offWhiteText,
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
                className: h.buttonWrapper,
                children: [
                    (0, r.jsx)(c.ua7, {
                        'aria-label': Y,
                        tooltipClassName: h.tooltip,
                        tooltipContentClassName: h.tooltipContent,
                        shouldShow: D,
                        text: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-sm/normal',
                                    color: 'header-primary',
                                    className: h.tooltipHeader,
                                    children: Y
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-muted',
                                    children: b.intl.string(C ? b.t.Sg6cfn : b.t.ZKhtw8)
                                })
                            ]
                        }),
                        children: (e) =>
                            (0, r.jsx)(o.animated.div, {
                                className: h.buttonWrapper,
                                style: U[0],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        v(
                                            {
                                                className: a()(h.button, { [h.loopbackEnabled]: C }),
                                                'aria-hidden': L,
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
                        text: b.intl.string(b.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(o.animated.div, {
                                className: h.buttonWrapper,
                                style: U[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        v(
                                            {
                                                className: h.button,
                                                'aria-hidden': L,
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
