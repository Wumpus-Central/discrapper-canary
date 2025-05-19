n.d(t, { y: () => O }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    l = n(950035),
    s = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(110924),
    _ = n(460181),
    m = n(131951),
    f = n(743498),
    p = n(56848),
    g = n(378441),
    v = n(388032),
    h = n(756583);
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
let x = (e) => 1 - Math.pow(1 - e, 4),
    j = {
        mass: 1,
        friction: 64,
        tension: 1000,
        clamp: !0
    },
    C = {
        mass: 1,
        friction: 64,
        tension: 1000
    },
    I = {
        mass: 1,
        friction: 35,
        tension: 1000
    };
function O(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, g.o)(),
        a = (0, u.Z)(n),
        O = (0, p.z)(n),
        { toggleLoopback: E, isLoopbackEnabled: P } = (function () {
            let { activeVoice: e } = (0, g.o)(),
                t = (0, s.e7)([m.Z], () => m.Z.getVoiceFilterPlaybackEnabled()),
                n = i.useCallback(() => {
                    (0, _.GN)(t ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, f._j)(!t);
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
        N = P ? c.Iy5 : c.X_q,
        S = i.useCallback(() => (0, f.v6)(null), []),
        w = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(),
        T = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        L = i.useRef(0),
        k = n !== a ? L.current + 1 : L.current;
    i.useEffect(() => {
        L.current = k;
    }, [k]);
    let Z = null != n,
        D = !Z,
        A = Z && null != a,
        F = null == n && null != a,
        R = (0, c.q_F)(
            {
                opacity: +!!Z,
                height: 72 * !!Z,
                pointerEvents: Z ? 'auto' : 'none',
                backgroundColor: null != (t = null == O ? void 0 : O.baseColor) ? t : w,
                config: (e) =>
                    'backgroundColor' === e
                        ? {
                              easing: x,
                              duration: 200
                          }
                        : j,
                delay: 100 * !!A
            },
            'respect-motion-settings'
        ),
        M = (0, c.Yzy)(
            null == O ? void 0 : O.id,
            {
                key: k,
                from: {
                    opacity: 0,
                    background: null == O ? void 0 : O.splashGradient
                },
                enter: {
                    opacity: 1,
                    delay: A ? 100 : 50
                },
                leave: {
                    opacity: 0,
                    delay: A ? 100 : 150
                },
                config: {
                    easing: x,
                    duration: A ? 250 : 200
                }
            },
            'respect-motion-settings'
        ),
        [B] = (0, c.bYB)(
            2,
            (e) => ({
                from: A
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
                        : A
                          ? null
                          : {
                                translateY: 0,
                                opacity: 1
                            },
                config: (e) =>
                    'opacity' === e
                        ? {
                              easing: x,
                              duration: 200
                          }
                        : C,
                delay: F ? 50 - 50 * e : 200 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        z = (0, c.Yzy)(
            null == O ? void 0 : O.iconURL,
            {
                key: k,
                from: {
                    opacity: 0,
                    scale: 80 / 88,
                    translateX: A ? -16 : 0
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
                    delay: 150 * !A
                },
                config: (e) =>
                    'opacity' === e
                        ? {
                              easing: x,
                              duration: 200
                          }
                        : Z
                          ? j
                          : I
            },
            'respect-motion-settings'
        ),
        U = (0, c.Yzy)(
            null == O ? void 0 : O.name,
            {
                key: k,
                from: {
                    opacity: 0,
                    scale: A ? 0.9 : 1,
                    translateY: 16 * !A
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
                                  easing: x,
                                  duration: 200
                              }
                            : A
                              ? j
                              : C
                },
                leave: {
                    opacity: 0,
                    translateX: 24 * (null != n),
                    translateY: 16 * (null == n),
                    delay: F ? 100 : 50,
                    config: (e) =>
                        'opacity' === e
                            ? {
                                  easing: x,
                                  duration: 200
                              }
                            : A
                              ? j
                              : C
                }
            },
            'respect-motion-settings'
        ),
        W = v.intl.string(P ? v.t.esVyo6 : v.t.UQqFCA);
    return (0, r.jsxs)(l.animated.div, {
        className: h.voiceFilterHero,
        'aria-hidden': D,
        style: R,
        children: [
            (0, r.jsx)('div', {
                className: o()([h.bgGradient, h.bgGradientHighlight])
            }),
            M((e) =>
                (0, r.jsx)(l.animated.div, {
                    className: h.bgGradient,
                    style: e
                })
            ),
            (0, r.jsx)('div', {
                className: h.iconWrapper,
                children: z((e, t) =>
                    (0, r.jsx)(
                        l.animated.img,
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
                children: U((e, t) =>
                    (0, r.jsxs)(l.animated.div, {
                        className: h.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: h.offWhiteText,
                                children: v.intl.string(v.t.WW5DAA)
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: null != t ? v.intl.string(t) : ''
                            })
                        ]
                    })
                )
            }),
            (0, r.jsxs)('div', {
                className: h.buttonWrapper,
                children: [
                    (0, r.jsx)(c.ua7, {
                        'aria-label': W,
                        tooltipClassName: h.tooltip,
                        tooltipContentClassName: h.tooltipContent,
                        shouldShow: Z,
                        text: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-sm/normal',
                                    color: 'header-primary',
                                    className: h.tooltipHeader,
                                    children: W
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-muted',
                                    children: v.intl.string(P ? v.t.Sg6cfn : v.t.ZKhtw8)
                                })
                            ]
                        }),
                        children: (e) =>
                            (0, r.jsx)(l.animated.div, {
                                className: h.buttonWrapper,
                                style: B[0],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        b(
                                            {
                                                className: o()(h.button, { [h.loopbackEnabled]: P }),
                                                'aria-hidden': D,
                                                focusProps: { enabled: Z },
                                                tabIndex: Z ? 0 : -1
                                            },
                                            e
                                        ),
                                        {
                                            onClick: () => E(),
                                            children: (0, r.jsx)(N, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20,
                                                color: T
                                            })
                                        }
                                    )
                                )
                            })
                    }),
                    (0, r.jsx)(c.ua7, {
                        shouldShow: Z,
                        text: v.intl.string(v.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(l.animated.div, {
                                className: h.buttonWrapper,
                                style: B[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        b(
                                            {
                                                className: h.button,
                                                'aria-hidden': D,
                                                focusProps: { enabled: Z },
                                                tabIndex: Z ? 0 : -1
                                            },
                                            e
                                        ),
                                        {
                                            onClick: S,
                                            children: (0, r.jsx)(c.k$p, {
                                                size: 'custom',
                                                width: 20,
                                                height: 20,
                                                color: T
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
