n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(48026),
    a = n(772848),
    i = n(442837),
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
    N = n(364491),
    v = n(220371),
    O = n(839538),
    j = n(332536),
    Z = n(733),
    _ = n(483586);
function P(e) {
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
let C = n(97996),
    w = n(675755),
    E = [_],
    S = [v, O, j],
    I = [
        {
            src: Z,
            colorize: !1
        }
    ],
    k = [],
    M = new o.qA(),
    W = [x.FK.LAWNMOWER_1, x.FK.LAWNMOWER_2];
function R(e) {
    var t, n, v;
    let { isPaused: O, width: j, windowKey: Z } = e,
        [_, R] = (0, s.useState)(0),
        A = (0, s.useRef)('right'),
        [T, L] = (0, s.useState)(null),
        [B, D] = (0, s.useState)(null),
        F = (0, s.useRef)(null),
        U = (0, o.uR)(T, B),
        G = l.Mq[x.yN.LAWNMOWER],
        [K, V] = (0, s.useState)({}),
        H = (0, i.e7)([c.Z], () => c.Z.getWindow(Z)),
        [q, z] = (0, d.Z)(x.yN.LAWNMOWER),
        Y = null != (t = q.count) ? t : 0;
    (0, b.is)(C, O);
    let X = (0, b.eR)(w);
    (0, f.Z)(W, Y);
    let J = (0, s.useCallback)(() => {
            if (U.isReady && null != F.current) {
                let { x: e, y: t } = F.current.getBoundingClientRect(),
                    n = 'right' === A.current ? 45 : 25;
                U.createMultipleConfetti(
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
                    (n = P({}, e)),
                    (r = r = { [(0, a.Z)()]: null != (t = G.points) ? t : 0 }),
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
        }, [U, G.points]),
        Q = (0, s.useCallback)(() => {
            R(1), z({ count: Y + 1 }), X();
        }, [Y, X, z]),
        $ = (0, s.useCallback)(() => {
            1 === _ && R(2);
        }, [_]),
        ee = (0, s.useCallback)(() => {
            2 === _ && 0.1 >= Math.random() && R(0);
        }, [_]);
    (0, u.Z)({
        onInterval: ee,
        interval: 1000,
        isPaused: O
    });
    let et = (0, s.useCallback)(
        (e) => {
            delete K[e], V(P({}, K));
        },
        [K]
    );
    return 2 === _
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.Ji, {
                      ref: D,
                      sprites: I,
                      colors: k,
                      spriteWidth: 8,
                      spriteHeight: 8
                  }),
                  (0, r.jsx)(y.Z, {
                      interval: 1000,
                      pointsPerInterval: G.points,
                      isPaused: O || 0 !== _,
                      itemId: x.yN.LAWNMOWER,
                      onPointsInterval: J
                  }),
                  (0, r.jsx)(g.Z, {
                      className: N.lawnmowerClickable,
                      onClick: Q,
                      children: (0, r.jsx)(p.Z, {
                          className: N.lawnmower,
                          width: j,
                          minSpeed: 50,
                          maxSpeed: 75,
                          imageSize: 80,
                          isPaused: O || 0 !== _,
                          children: (e) => (
                              (A.current = e),
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(h.Z, {
                                          renderedPoints: K,
                                          onRemovePoint: et
                                      }),
                                      (0, r.jsx)(m.Z, {
                                          imageRef: F,
                                          className: 'left' === e ? N.imageFlipped : N.image,
                                          isPaused: O,
                                          interval: 200,
                                          sources: 0 === _ ? E : S,
                                          onLoopEnd: $
                                      })
                                  ]
                              })
                          )
                      })
                  }),
                  (0, r.jsx)(o.O_, {
                      className: N.confettiCanvas,
                      environment: M,
                      ref: L,
                      requestAnimationFrame: null != (n = null == H ? void 0 : H.requestAnimationFrame) ? n : requestAnimationFrame,
                      cancelAnimationFrame: null != (v = null == H ? void 0 : H.cancelAnimationFrame) ? v : cancelAnimationFrame
                  })
              ]
          });
}
