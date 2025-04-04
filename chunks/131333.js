n.d(t, { t: () => j }), n(47120), n(301563), n(474991), n(398202);
var r = n(200651),
    i = n(192379),
    o = n(48026),
    a = n(481060),
    s = n(40851),
    l = n(745510),
    c = n(661637),
    u = n(549006),
    d = n(146128),
    f = n(981631),
    _ = n(675654),
    p = n(776280);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = [],
    y = -5,
    v = -40,
    O = -40,
    I = -100,
    S = 11,
    T = 125,
    N = 20,
    A = 12,
    C = 48,
    R = 0.01,
    P = new Set(['jack_o_lantern', 'nose']),
    w = {
        jack_o_lantern: {
            sprites: (0, c.Z)(['chocolate_bar', 'lollipop', 'candy'])
        },
        nose: { sprites: (0, c.Z)(['foot']) }
    };
function D(e) {
    if (null == e) return null;
    for (let t of P) if (null != e.match(new RegExp(':'.concat(t, '(_tone[1-9])?')))) return t;
    return null;
}
let L = {
    enter: {
        BEG: 0,
        END: 22
    },
    confetti: {
        BEG: 23,
        END: 119
    },
    exit: {
        BEG: 164,
        END: 200
    }
};
function x() {
    return n
        .e('77843')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function M(e) {
    if (null == e) return 'enter';
    switch (e) {
        case 'enter':
            return 'confetti';
        case 'confetti':
            return 'exit';
        case 'exit':
            return 'enter';
    }
}
let k = i.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [a, s] = i.useState(null),
        { confettiCanvas: c } = i.useContext(l.h),
        u = (0, o.uR)(c, a);
    return (
        i.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    u.createMultipleConfetti(
                        E(m({}, _.We), {
                            position: {
                                type: 'static',
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: y,
                                    y: O
                                },
                                maxValue: {
                                    x: v,
                                    y: I
                                }
                            },
                            size: {
                                type: 'static-random',
                                minValue: A,
                                maxValue: C
                            },
                            dragCoefficient: {
                                type: 'static',
                                value: R
                            }
                        }),
                        N
                    );
                }
            }),
            [u]
        ),
        (0, r.jsx)(o.Ji, {
            ref: s,
            colors: b,
            sprites: n,
            spriteWidth: C,
            spriteHeight: C
        })
    );
});
function j(e) {
    let { children: t } = e,
        n = i.useRef({}),
        [o, l] = i.useState(null),
        c = M(o),
        _ = i.useRef(null),
        [h, m] = i.useState(!1),
        g = i.useRef('jack_o_lantern'),
        E = (0, s.bp)(),
        b = i.useCallback(
            (e) => {
                if (!h) {
                    let t = D(e);
                    null != t && ((g.current = t), m(!0), l(null));
                }
            },
            [h]
        ),
        y = i.useMemo(
            () => ({
                triggerAnimation: b,
                untriggerAnimation: () => {}
            }),
            [b]
        ),
        v = i.useCallback((e) => {
            l(e);
        }, []),
        O = i.useCallback((e) => {
            'exit' === e && m(!1);
        }, []),
        I = i.useCallback((e) => {
            _.current = e;
        }, []);
    return (i.useEffect(() => {
        if ('confetti' === o) {
            if (null == _.current) return;
            let e = _.current.getBoundingClientRect(),
                t = e.left - S,
                r = e.top + T,
                i = n.current[g.current];
            null == i || i.fireConfetti(t, r);
        }
    }, [o]),
    E !== f.IlC.APP)
        ? t
        : (0, r.jsxs)(d.Rm.Provider, {
              value: y,
              children: [
                  t,
                  Object.keys(w).map((e) => {
                      let t = w[e];
                      return (0, r.jsx)(
                          k,
                          {
                              ref: (t) => {
                                  null != t ? (n.current[e] = t) : delete n.current[e];
                              },
                              sprites: t.sprites
                          },
                          e
                      );
                  }),
                  h
                      ? (0, r.jsx)(u.ZP, {
                            children: (0, r.jsx)('div', {
                                className: p.animationWrapper,
                                children: (0, r.jsx)(a.kci, {
                                    animationRef: I,
                                    className: p.lottieAnimation,
                                    nextScene: c,
                                    sceneSegments: L,
                                    onScenePlay: v,
                                    onSceneComplete: O,
                                    importData: x,
                                    pauseWhileUnfocused: !1
                                })
                            })
                        })
                      : null
              ]
          });
}
