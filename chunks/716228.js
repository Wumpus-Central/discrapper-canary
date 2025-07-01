(n.d(t, { Z: () => R }), n(388685));
var r = n(255367),
    s = n(73800),
    o = n(505266),
    i = n(772848),
    a = n(442837),
    c = n(522474),
    l = n(359013),
    u = n(115092),
    d = n(284539),
    f = n(67411),
    p = n(529942),
    m = n(26141),
    g = n(18582),
    b = n(3072),
    y = n(401258),
    h = n(81829),
    x = n(477839),
    v = n(364491),
    O = n(220371),
    j = n(839538),
    N = n(332536),
    _ = n(225893),
    P = n(483586);
function w(e) {
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
let C = n(97996),
    Z = n(675755),
    S = [P],
    I = [O, j, N],
    E = [
        {
            src: _,
            colorize: !1
        }
    ],
    k = [],
    M = new o.qA(),
    A = [x.FK.LAWNMOWER_1, x.FK.LAWNMOWER_2];
function R(e) {
    var t, n, O;
    let { isPaused: j, width: N, windowKey: _ } = e,
        [P, R] = (0, s.useState)(0),
        B = (0, s.useRef)('right'),
        [T, L] = (0, s.useState)(null),
        [F, D] = (0, s.useState)(null),
        U = (0, s.useRef)(null),
        W = (0, o.uR)(T, F),
        G = l.Mq[x.yN.LAWNMOWER],
        [K, V] = (0, s.useState)({}),
        H = (0, a.e7)([c.Z], () => c.Z.getWindow(_)),
        [z, q] = (0, d.Z)(x.yN.LAWNMOWER),
        Y = null != (t = z.count) ? t : 0;
    (0, b.is)(C, j);
    let X = (0, b.eR)(Z);
    (0, f.Z)(A, Y);
    let J = (0, s.useCallback)(() => {
            if (W.isReady && null != U.current) {
                let { x: e, y: t } = U.current.getBoundingClientRect(),
                    n = 'right' === B.current ? 45 : 25;
                W.createMultipleConfetti(
                    {
                        position: {
                            type: 'static',
                            value: {
                                x: e + n,
                                y: t + 25
                            }
                        },
                        velocity: {
                            type: 'static-random',
                            minValue: {
                                x: 15,
                                y: -40
                            },
                            maxValue: {
                                x: -15,
                                y: -60
                            }
                        },
                        rotation: {
                            type: 'linear-random',
                            minValue: 0,
                            maxValue: 360,
                            minAddValue: -25,
                            maxAddValue: 25
                        },
                        size: {
                            type: 'static-random',
                            minValue: 2,
                            maxValue: 8
                        }
                    },
                    15
                );
            }
            V((e) => {
                var t, n, r;
                return (
                    (n = w({}, e)),
                    (r = r = { [(0, i.Z)()]: null != (t = G.points) ? t : 0 }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n
                );
            });
        }, [W, G.points]),
        Q = (0, s.useCallback)(() => {
            (R(1), q({ count: Y + 1 }), X());
        }, [Y, X, q]),
        $ = (0, s.useCallback)(() => {
            1 === P && R(2);
        }, [P]),
        ee = (0, s.useCallback)(() => {
            2 === P && 0.1 >= Math.random() && R(0);
        }, [P]);
    (0, u.Z)({
        onInterval: ee,
        interval: 1000,
        isPaused: j
    });
    let et = (0, s.useCallback)(
        (e) => {
            (delete K[e], V(w({}, K)));
        },
        [K]
    );
    return 2 === P
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.Ji, {
                      ref: D,
                      sprites: E,
                      colors: k,
                      spriteWidth: 8,
                      spriteHeight: 8
                  }),
                  (0, r.jsx)(y.Z, {
                      interval: 1000,
                      pointsPerInterval: G.points,
                      isPaused: j || 0 !== P,
                      itemId: x.yN.LAWNMOWER,
                      onPointsInterval: J
                  }),
                  (0, r.jsx)(g.Z, {
                      className: v.lawnmowerClickable,
                      onClick: Q,
                      children: (0, r.jsx)(p.Z, {
                          className: v.lawnmower,
                          width: N,
                          minSpeed: 50,
                          maxSpeed: 75,
                          imageSize: 80,
                          isPaused: j || 0 !== P,
                          children: (e) => (
                              (B.current = e),
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(h.Z, {
                                          renderedPoints: K,
                                          onRemovePoint: et
                                      }),
                                      (0, r.jsx)(m.Z, {
                                          imageRef: U,
                                          className: 'left' === e ? v.imageFlipped : v.image,
                                          isPaused: j,
                                          interval: 200,
                                          sources: 0 === P ? S : I,
                                          onLoopEnd: $
                                      })
                                  ]
                              })
                          )
                      })
                  }),
                  (0, r.jsx)(o.O_, {
                      className: v.confettiCanvas,
                      environment: M,
                      ref: L,
                      requestAnimationFrame: null != (n = null == H ? void 0 : H.requestAnimationFrame) ? n : requestAnimationFrame,
                      cancelAnimationFrame: null != (O = null == H ? void 0 : H.cancelAnimationFrame) ? O : cancelAnimationFrame
                  })
              ]
          });
}
