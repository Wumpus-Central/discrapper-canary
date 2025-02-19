n.d(t, { t: () => j }), n(47120), n(301563), n(474991), n(398202);
var r = n(200651),
    i = n(192379),
    o = n(119617),
    a = n(481060),
    s = n(40851),
    l = n(745510),
    c = n(661637),
    u = n(549006),
    d = n(146128),
    f = n(981631),
    p = n(675654),
    _ = n(333219);
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
let v = [],
    b = -5,
    y = -40,
    O = -40,
    S = -100,
    I = 11,
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
let x = {
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
function L() {
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
                        E(m({}, p.We), {
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
                                    x: b,
                                    y: O
                                },
                                maxValue: {
                                    x: y,
                                    y: S
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
            colors: v,
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
        p = i.useRef(null),
        [h, m] = i.useState(!1),
        g = i.useRef('jack_o_lantern'),
        E = (0, s.bp)(),
        v = i.useCallback(
            (e) => {
                if (!h) {
                    let t = D(e);
                    null != t && ((g.current = t), m(!0), l(null));
                }
            },
            [h]
        ),
        b = i.useMemo(
            () => ({
                triggerAnimation: v,
                untriggerAnimation: () => {}
            }),
            [v]
        ),
        y = i.useCallback((e) => {
            l(e);
        }, []),
        O = i.useCallback((e) => {
            'exit' === e && m(!1);
        }, []),
        S = i.useCallback((e) => {
            p.current = e;
        }, []);
    return (i.useEffect(() => {
        if ('confetti' === o) {
            if (null == p.current) return;
            let e = p.current.getBoundingClientRect(),
                t = e.left - I,
                r = e.top + T,
                i = n.current[g.current];
            null == i || i.fireConfetti(t, r);
        }
    }, [o]),
    E !== f.IlC.APP)
        ? (0, r.jsx)(r.Fragment, { children: t })
        : (0, r.jsxs)(d.Rm.Provider, {
              value: b,
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
                                className: _.animationWrapper,
                                children: (0, r.jsx)(a.kci, {
                                    animationRef: S,
                                    className: _.lottieAnimation,
                                    nextScene: c,
                                    sceneSegments: x,
                                    onScenePlay: y,
                                    onSceneComplete: O,
                                    importData: L,
                                    pauseWhileUnfocused: !1
                                })
                            })
                        })
                      : null
              ]
          });
}
