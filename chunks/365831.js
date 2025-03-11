n.d(t, { y: () => N }), n(47120), n(266796);
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
    f = n(743498),
    h = n(56848),
    g = n(378441),
    _ = n(388032),
    b = n(591128);
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
let x = {
        mass: 2,
        friction: 30,
        tension: 500,
        clamp: !0
    },
    O = {
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
    j = {
        mass: 1,
        friction: 28,
        tension: 800
    };
function N(e) {
    var t;
    let {} = e,
        { activeVoice: n } = (0, g.o)(),
        a = (0, u.Z)(n),
        N = (0, h.z)(n),
        { toggleLoopback: C, isLoopbackEnabled: I } = (function () {
            let { activeVoice: e } = (0, g.o)(),
                t = (0, s.e7)([m.Z], () => m.Z.getVoiceFilterPlaybackEnabled()),
                n = i.useCallback(() => {
                    (0, p.GN)(t ? 'voice_filter_loopback_off' : 'voice_filter_loopback_on'), (0, f._j)(!t);
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
        S = I ? c.Iy5 : c.X_q,
        T = i.useCallback(() => (0, f.v6)(null), []),
        P = (0, c.dQu)(c.TVs.colors.BACKGROUND_SECONDARY).hex(),
        A = (0, c.dQu)(c.TVs.colors.WHITE).hex(),
        w = i.useRef(0),
        Z = n !== a ? w.current + 1 : w.current;
    i.useEffect(() => {
        w.current = Z;
    }, [Z]);
    let k = null != n,
        R = !k,
        D = k && null != a,
        L = null == n && null != a,
        M = (0, c.q_F)(
            {
                opacity: +!!k,
                height: 72 * !!k,
                pointerEvents: k ? 'auto' : 'none',
                backgroundColor: null !== (t = null == N ? void 0 : N.baseColor) && void 0 !== t ? t : P,
                config: x,
                delay: D ? 150 : 100 * !!L
            },
            'respect-motion-settings'
        ),
        W = (0, c.Yzy)(
            null == N ? void 0 : N.id,
            {
                key: Z,
                from: {
                    opacity: 0,
                    background: null == N ? void 0 : N.splashGradient
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
                                    config: y(v({}, j), { restVelocity: 0.5 })
                                },
                                {
                                    translateY: 0,
                                    config: j
                                }
                            ],
                config: E,
                delay: L ? 100 - 50 * e : 150 + 50 * e
            }),
            'respect-motion-settings',
            [n]
        ),
        U = (0, c.Yzy)(
            null == N ? void 0 : N.iconURL,
            {
                key: Z,
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
                config: x
            },
            'respect-motion-settings'
        ),
        B = (0, c.Yzy)(
            null == N ? void 0 : N.name,
            {
                key: Z,
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
                    config: null == a ? E : O
                },
                leave: {
                    opacity: 0,
                    translateX: 40 * (null != n),
                    translateY: 16 * (null == n),
                    delay: L ? 200 : 150,
                    config: null == a ? E : O
                },
                config: E
            },
            'respect-motion-settings'
        ),
        G = _.NW.string(I ? _.t.esVyo6 : _.t.UQqFCA);
    return (0, r.jsxs)(l.animated.div, {
        className: b.voiceFilterHero,
        'aria-hidden': R,
        style: M,
        children: [
            (0, r.jsx)('div', {
                className: o()([b.bgGradient, b.bgGradientHighlight])
            }),
            W((e) =>
                (0, r.jsx)(l.animated.div, {
                    className: b.bgGradient,
                    style: e
                })
            ),
            (0, r.jsx)('div', {
                className: b.iconWrapper,
                children: U((e, t) =>
                    (0, r.jsx)(
                        l.animated.img,
                        {
                            className: b.activeVoiceIcon,
                            style: e,
                            alt: '',
                            src: t
                        },
                        t
                    )
                )
            }),
            (0, r.jsx)('div', {
                className: b.descriptionWrapper,
                children: B((e, t) =>
                    (0, r.jsxs)(l.animated.div, {
                        className: b.description,
                        style: e,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                className: b.offWhiteText,
                                children: _.NW.string(_.t.WW5DAA)
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: null != t ? _.NW.string(t) : ''
                            })
                        ]
                    })
                )
            }),
            (0, r.jsxs)('div', {
                className: b.buttonWrapper,
                children: [
                    (0, r.jsx)(c.ua7, {
                        'aria-label': G,
                        tooltipClassName: b.tooltip,
                        tooltipContentClassName: b.tooltipContent,
                        shouldShow: k,
                        text: (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-sm/normal',
                                    color: 'header-primary',
                                    className: b.tooltipHeader,
                                    children: G
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-muted',
                                    children: _.NW.string(I ? _.t.Sg6cfn : _.t.ZKhtw8)
                                })
                            ]
                        }),
                        children: (e) =>
                            (0, r.jsx)(l.animated.div, {
                                className: b.buttonWrapper,
                                style: F[0],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        v(
                                            {
                                                className: b.button,
                                                'aria-hidden': R,
                                                focusProps: { enabled: k },
                                                tabIndex: k ? 0 : -1
                                            },
                                            e
                                        ),
                                        {
                                            onClick: () => C(),
                                            children: (0, r.jsx)(S, {
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
                        shouldShow: k,
                        text: _.NW.string(_.t.UvMx7O),
                        children: (e) =>
                            (0, r.jsx)(l.animated.div, {
                                className: b.buttonWrapper,
                                style: F[1],
                                children: (0, r.jsx)(
                                    c.P3F,
                                    y(
                                        v(
                                            {
                                                className: b.button,
                                                'aria-hidden': R,
                                                focusProps: { enabled: k },
                                                tabIndex: k ? 0 : -1
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
