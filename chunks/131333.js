n.d(t, { t: () => P }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(119617),
    s = n(481060),
    o = n(40851),
    l = n(745510),
    u = n(661637),
    c = n(549006),
    d = n(146128),
    f = n(981631),
    _ = n(675654),
    p = n(383144);
let h = [],
    m = -5,
    g = -40,
    E = -40,
    v = -100,
    y = 11,
    I = 125,
    T = 20,
    b = 12,
    S = 48,
    A = 0.01,
    N = new Set(['jack_o_lantern', 'nose']),
    C = {
        jack_o_lantern: {
            sprites: (0, u.Z)(['chocolate_bar', 'lollipop', 'candy'])
        },
        nose: { sprites: (0, u.Z)(['foot']) }
    };
function R(e) {
    if (null == e) return null;
    for (let t of N) if (null != e.match(new RegExp(':'.concat(t, '(_tone[1-9])?')))) return t;
    return null;
}
let O = {
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
function D() {
    return n
        .e('77843')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function L(e) {
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
let x = r.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [s, o] = r.useState(null),
        { confettiCanvas: u } = r.useContext(l.h),
        c = (0, a.uR)(u, s);
    return (
        r.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    c.createMultipleConfetti(
                        {
                            ..._.We,
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
                                    x: m,
                                    y: E
                                },
                                maxValue: {
                                    x: g,
                                    y: v
                                }
                            },
                            size: {
                                type: 'static-random',
                                minValue: b,
                                maxValue: S
                            },
                            dragCoefficient: {
                                type: 'static',
                                value: A
                            }
                        },
                        T
                    );
                }
            }),
            [c]
        ),
        (0, i.jsx)(a.Ji, {
            ref: o,
            colors: h,
            sprites: n,
            spriteWidth: S,
            spriteHeight: S
        })
    );
});
function P(e) {
    let { children: t } = e,
        n = r.useRef({}),
        [a, l] = r.useState(null),
        u = L(a),
        _ = r.useRef(null),
        [h, m] = r.useState(!1),
        g = r.useRef('jack_o_lantern'),
        E = (0, o.bp)(),
        v = r.useCallback(
            (e) => {
                if (!h) {
                    let t = R(e);
                    null != t && ((g.current = t), m(!0), l(null));
                }
            },
            [h]
        ),
        T = r.useMemo(
            () => ({
                triggerAnimation: v,
                untriggerAnimation: () => {}
            }),
            [v]
        ),
        b = r.useCallback((e) => {
            l(e);
        }, []),
        S = r.useCallback((e) => {
            'exit' === e && m(!1);
        }, []),
        A = r.useCallback((e) => {
            _.current = e;
        }, []);
    return (r.useEffect(() => {
        if ('confetti' === a) {
            if (null == _.current) return;
            let e = _.current.getBoundingClientRect(),
                t = e.left - y,
                i = e.top + I,
                r = n.current[g.current];
            null == r || r.fireConfetti(t, i);
        }
    }, [a]),
    E !== f.IlC.APP)
        ? (0, i.jsx)(i.Fragment, { children: t })
        : (0, i.jsxs)(d.Rm.Provider, {
              value: T,
              children: [
                  t,
                  Object.keys(C).map((e) => {
                      let t = C[e];
                      return (0, i.jsx)(
                          x,
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
                      ? (0, i.jsx)(c.ZP, {
                            children: (0, i.jsx)('div', {
                                className: p.animationWrapper,
                                children: (0, i.jsx)(s.kci, {
                                    animationRef: A,
                                    className: p.lottieAnimation,
                                    nextScene: u,
                                    sceneSegments: O,
                                    onScenePlay: b,
                                    onSceneComplete: S,
                                    importData: D,
                                    pauseWhileUnfocused: !1
                                })
                            })
                        })
                      : null
              ]
          });
}
