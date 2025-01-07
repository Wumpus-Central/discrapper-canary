n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(119617),
    l = n(995295),
    c = n(752877),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    x = n(569379),
    f = n(675654),
    g = n(211720),
    h = n(197857);
let C = ['#51BC9D'];
t.Z = (e) => {
    var t;
    let { expansionSpring: n, overlayRef: s, quest: v, progressBarRef: j, isExpanded: _ } = e,
        { completionSpring: b, startCompletionAnimation: N } = (0, x.G)(),
        E = (null === (t = v.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        B = r.useRef(!1),
        T = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        S = r.useRef(null),
        y = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
        A = (0, u.Z)(y),
        [R, w] = r.useState(null),
        [I, k] = r.useState(null),
        q = r.useRef(
            new i.qA({
                gravity: 0,
                wind: 0
            })
        ),
        P = (0, i.uR)(R, I),
        M = r.useCallback(() => {
            if (T) return;
            let e = j.current,
                t = S.current;
            if (null != t && null != e && P.isReady) {
                var n, o, r, s;
                let { x: a, y: i } = e.getBoundingClientRect(),
                    { x: l, y: c } = t.getBoundingClientRect();
                P.createMultipleConfetti(
                    ((n = a - l),
                    (o = i - c),
                    (r = e.clientHeight),
                    (s = e.clientWidth),
                    {
                        ...f.We,
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
        }, [j, S, P, T]),
        O = (0, u.Z)(_);
    return (r.useEffect(() => {
        E && _ && !O && (N(), M());
    }, [_, E, N, M, O]),
    r.useEffect(() => {
        E &&
            !y &&
            A &&
            setTimeout(() => {
                N(), M();
            }, 200);
    }, [E, A, y, N, M]),
    r.useEffect(() => {
        if (!!P.isReady) !B.current && E && (N(), M()), (B.current = E);
    }, [E, B, M, N, P]),
    T)
        ? null
        : (0, o.jsxs)('div', {
              className: g.wrapper,
              'aria-hidden': 'true',
              ref: S,
              children: [
                  (0, o.jsx)(c.animated.div, {
                      className: g.background,
                      style: { opacity: b }
                  }),
                  (0, o.jsx)(c.animated.div, {
                      className: a()(g.borders, g.bordersTopLeft),
                      style: { opacity: b }
                  }),
                  (0, o.jsxs)(c.animated.div, {
                      className: g.confettiWrapper,
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
                              ref: w,
                              className: g.confetti,
                              environment: q.current
                          }),
                          (0, o.jsx)(i.Ji, {
                              ref: k,
                              sprites: [h],
                              colors: C,
                              spriteWidth: f.Ko,
                              spriteHeight: f.Ko
                          }),
                          null != s.current &&
                              (0, l.createPortal)(
                                  (0, o.jsx)(c.animated.div, {
                                      className: a()(g.borders, g.bordersBottom),
                                      style: { opacity: b }
                                  }),
                                  s.current
                              )
                      ]
                  })
              ]
          });
};
