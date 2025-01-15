n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(119617),
    l = n(995295),
    c = n(476183),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    x = n(569379),
    g = n(675654),
    h = n(418098),
    f = n(197857);
let v = ['#51BC9D'];
t.Z = (e) => {
    var t;
    let { expansionSpring: n, overlayRef: s, quest: C, progressBarRef: j, isExpanded: _ } = e,
        { completionSpring: T, startCompletionAnimation: E } = (0, x.G)(),
        S = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        b = r.useRef(!1),
        N = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        B = r.useRef(null),
        y = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
        A = (0, u.Z)(y),
        [w, R] = r.useState(null),
        [I, P] = r.useState(null),
        k = r.useRef(
            new i.qA({
                gravity: 0,
                wind: 0
            })
        ),
        O = (0, i.uR)(w, I),
        q = r.useCallback(() => {
            if (N) return;
            let e = j.current,
                t = B.current;
            if (null != t && null != e && O.isReady) {
                var n, o, r, s;
                let { x: a, y: i } = e.getBoundingClientRect(),
                    { x: l, y: c } = t.getBoundingClientRect();
                O.createMultipleConfetti(
                    ((n = a - l),
                    (o = i - c),
                    (r = e.clientHeight),
                    (s = e.clientWidth),
                    {
                        ...g.We,
                        position: {
                            type: 'static-random',
                            minValue: {
                                x: n,
                                y: o
                            },
                            maxValue: {
                                x: n + r,
                                y: o + s
                            }
                        },
                        velocity: {
                            type: 'static-random',
                            minValue: {
                                x: -20,
                                y: -20
                            },
                            maxValue: {
                                x: 20,
                                y: 20
                            }
                        },
                        opacity: {
                            type: 'linear',
                            value: 2,
                            addValue: -0.1
                        },
                        dragCoefficient: {
                            type: 'static',
                            value: 0.166
                        },
                        size: {
                            type: 'static-random',
                            minValue: 2,
                            maxValue: 3
                        }
                    }),
                    100
                );
            }
        }, [j, B, O, N]),
        M = (0, u.Z)(_);
    return (r.useEffect(() => {
        S && _ && !M && (E(), q());
    }, [_, S, E, q, M]),
    r.useEffect(() => {
        S &&
            !y &&
            A &&
            setTimeout(() => {
                E(), q();
            }, 200);
    }, [S, A, y, E, q]),
    r.useEffect(() => {
        if (!!O.isReady) !b.current && S && (E(), q()), (b.current = S);
    }, [S, b, q, E, O]),
    N)
        ? null
        : (0, o.jsxs)('div', {
              className: h.wrapper,
              'aria-hidden': 'true',
              ref: B,
              children: [
                  (0, o.jsx)(c.animated.div, {
                      className: h.background,
                      style: { opacity: T }
                  }),
                  (0, o.jsx)(c.animated.div, {
                      className: a()(h.borders, h.bordersTopLeft),
                      style: { opacity: T }
                  }),
                  (0, o.jsxs)(c.animated.div, {
                      className: h.confettiWrapper,
                      style: {
                          transform: n
                              .to({
                                  range: [0, 1],
                                  output: [-35, 0]
                              })
                              .to((e) => 'translateY('.concat(e, 'px)'))
                      },
                      children: [
                          (0, o.jsx)(i.O_, {
                              ref: R,
                              className: h.confetti,
                              environment: k.current
                          }),
                          (0, o.jsx)(i.Ji, {
                              ref: P,
                              sprites: [f],
                              colors: v,
                              spriteWidth: g.Ko,
                              spriteHeight: g.Ko
                          }),
                          null != s.current &&
                              (0, l.createPortal)(
                                  (0, o.jsx)(c.animated.div, {
                                      className: a()(h.borders, h.bordersBottom),
                                      style: { opacity: T }
                                  }),
                                  s.current
                              )
                      ]
                  })
              ]
          });
};
