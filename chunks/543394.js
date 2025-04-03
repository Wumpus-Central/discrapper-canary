n.d(t, { Z: () => P }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(48026),
    a = n(442837),
    i = n(522474),
    c = n(359013),
    l = n(115092),
    u = n(3072),
    d = n(401258),
    f = n(477839),
    p = n(657864),
    m = n(113824),
    g = n(412902),
    b = n(793843),
    y = n(895075),
    h = n(146358),
    x = n(74688),
    N = n(15358);
let v = n(774809),
    O = [m, g, b, y, h, x, N].map((e) => ({
        src: e,
        colorize: !1
    })),
    j = new o.qA({ wind: -5 }),
    Z = [],
    _ = {
        velocity: {
            type: 'static-random',
            minValue: {
                x: 0,
                y: 1
            },
            maxValue: {
                x: 3,
                y: 3
            }
        },
        size: {
            type: 'static-random',
            minValue: 10,
            maxValue: 50,
            uniformVectorValues: !0
        }
    };
function P(e) {
    var t, n;
    let { isPaused: m, width: g, windowKey: b } = e,
        y = c.Mq[f.yN.RAIN];
    (0, u.is)(v, m);
    let [h, x] = (0, s.useState)(null),
        [N, P] = (0, s.useState)(null),
        C = (0, o.uR)(h, N),
        w = (0, a.e7)([i.Z], () => i.Z.getWindow(b)),
        E = (0, s.useCallback)(() => {
            var e, t;
            C.createConfetti(
                ((e = (function (e) {
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
                })({}, _)),
                (t = t =
                    {
                        position: {
                            type: 'static-random',
                            minValue: {
                                x: -g / 2 + 400,
                                y: -50
                            },
                            maxValue: {
                                x: g + 800,
                                y: -50
                            }
                        }
                    }),
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
                e)
            );
        }, [C, g]);
    return (
        (0, l.Z)({
            onInterval: E,
            interval: 1000 / 60,
            isPaused: m || !C.isReady
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Ji, {
                    ref: P,
                    sprites: O,
                    colors: Z,
                    spriteWidth: 50,
                    spriteHeight: 50
                }),
                (0, r.jsx)(o.O_, {
                    className: p.canvas,
                    environment: j,
                    ref: x,
                    requestAnimationFrame: null != (t = null == w ? void 0 : w.requestAnimationFrame) ? t : requestAnimationFrame,
                    cancelAnimationFrame: null != (n = null == w ? void 0 : w.cancelAnimationFrame) ? n : cancelAnimationFrame
                }),
                (0, r.jsx)(d.Z, {
                    itemId: f.yN.RAIN,
                    pointsPerInterval: y.points,
                    interval: 1000,
                    isPaused: m
                })
            ]
        })
    );
}
