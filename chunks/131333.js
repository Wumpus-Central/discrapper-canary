r.d(n, {
    t: function () {
        return U;
    }
});
var i,
    a,
    o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(119617),
    c = r(481060),
    d = r(40851),
    f = r(745510),
    p = r(661637),
    h = r(549006),
    _ = r(146128),
    m = r(981631),
    g = r(675654),
    E = r(75877);
let v = [],
    y = -5,
    b = -40,
    I = -40,
    T = -100,
    S = 11,
    A = 125,
    C = 20,
    N = 12,
    R = 48,
    O = 0.01;
!(function (e) {
    (e.JACK_O_LANTERN = 'jack_o_lantern'), (e.NOSE = 'nose');
})(i || (i = {}));
let D = new Set(['jack_o_lantern', 'nose']),
    L = {
        jack_o_lantern: {
            sprites: (0, p.Z)(['chocolate_bar', 'lollipop', 'candy'])
        },
        nose: { sprites: (0, p.Z)(['foot']) }
    };
function x(e) {
    if (null == e) return null;
    for (let n of D) if (null != e.match(new RegExp(':'.concat(n, '(_tone[1-9])?')))) return n;
    return null;
}
!(function (e) {
    (e.ENTER = 'enter'), (e.CONFETTI = 'confetti'), (e.EXIT = 'exit');
})(a || (a = {}));
let w = {
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
function P() {
    return r
        .e('60005')
        .then(r.t.bind(r, 931152, 19))
        .then((e) => {
            let { default: n } = e;
            return n;
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
let k = l.forwardRef(function (e, n) {
    let { sprites: r } = e,
        [i, a] = l.useState(null),
        { confettiCanvas: o } = l.useContext(f.h),
        c = (0, u.uR)(o, i);
    return (
        l.useImperativeHandle(
            n,
            () => ({
                fireConfetti: (e, n) => {
                    c.createMultipleConfetti(
                        {
                            ...g.We,
                            position: {
                                type: 'static',
                                value: {
                                    x: e,
                                    y: n
                                }
                            },
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: y,
                                    y: I
                                },
                                maxValue: {
                                    x: b,
                                    y: T
                                }
                            },
                            size: {
                                type: 'static-random',
                                minValue: N,
                                maxValue: R
                            },
                            dragCoefficient: {
                                type: 'static',
                                value: O
                            }
                        },
                        C
                    );
                }
            }),
            [c]
        ),
        (0, s.jsx)(u.Ji, {
            ref: a,
            colors: v,
            sprites: r,
            spriteWidth: R,
            spriteHeight: R
        })
    );
});
function U(e) {
    let { children: n } = e,
        r = l.useRef({}),
        [i, a] = l.useState(null),
        o = M(i),
        u = l.useRef(null),
        [f, p] = l.useState(!1),
        g = l.useRef('jack_o_lantern'),
        v = (0, d.bp)(),
        y = l.useCallback(
            (e) => {
                if (!f) {
                    let n = x(e);
                    null != n && ((g.current = n), p(!0), a(null));
                }
            },
            [f]
        ),
        b = l.useMemo(
            () => ({
                triggerAnimation: y,
                untriggerAnimation: () => {}
            }),
            [y]
        ),
        I = l.useCallback((e) => {
            a(e);
        }, []),
        T = l.useCallback((e) => {
            'exit' === e && p(!1);
        }, []),
        C = l.useCallback((e) => {
            u.current = e;
        }, []);
    return (l.useEffect(() => {
        if ('confetti' === i) {
            if (null == u.current) return;
            let e = u.current.getBoundingClientRect(),
                n = e.left - S,
                i = e.top + A,
                a = r.current[g.current];
            null == a || a.fireConfetti(n, i);
        }
    }, [i]),
    v !== m.IlC.APP)
        ? (0, s.jsx)(s.Fragment, { children: n })
        : (0, s.jsxs)(_.Rm.Provider, {
              value: b,
              children: [
                  n,
                  Object.keys(L).map((e) => {
                      let n = L[e];
                      return (0, s.jsx)(
                          k,
                          {
                              ref: (n) => {
                                  null != n ? (r.current[e] = n) : delete r.current[e];
                              },
                              sprites: n.sprites
                          },
                          e
                      );
                  }),
                  f
                      ? (0, s.jsx)(h.ZP, {
                            children: (0, s.jsx)('div', {
                                className: E.animationWrapper,
                                children: (0, s.jsx)(c.SequencedLottieAnimation, {
                                    animationRef: C,
                                    className: E.lottieAnimation,
                                    nextScene: o,
                                    sceneSegments: w,
                                    onScenePlay: I,
                                    onSceneComplete: T,
                                    importData: P,
                                    pauseWhileUnfocused: !1
                                })
                            })
                        })
                      : null
              ]
          });
}
