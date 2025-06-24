n.d(t, { Z: () => w }), n(388685);
var r = n(255367),
    s = n(73800),
    o = n(505266),
    i = n(442837),
    a = n(522474),
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
    v = n(15358);
let O = n(774809),
    j = [m, g, b, y, h, x, v].map((e) => ({
        src: e,
        colorize: !1
    })),
    N = new o.qA({ wind: -5 }),
    _ = [],
    P = {
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
function w(e) {
    var t, n;
    let { isPaused: m, width: g, windowKey: b } = e,
        y = c.Mq[f.yN.RAIN];
    (0, u.is)(O, m);
    let [h, x] = (0, s.useState)(null),
        [v, w] = (0, s.useState)(null),
        C = (0, o.uR)(h, v),
        Z = (0, i.e7)([a.Z], () => a.Z.getWindow(b)),
        S = (0, s.useCallback)(() => {
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
                })({}, P)),
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
            onInterval: S,
            interval: 1000 / 60,
            isPaused: m || !C.isReady
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Ji, {
                    ref: w,
                    sprites: j,
                    colors: _,
                    spriteWidth: 50,
                    spriteHeight: 50
                }),
                (0, r.jsx)(o.O_, {
                    className: p.canvas,
                    environment: N,
                    ref: x,
                    requestAnimationFrame: null != (t = null == Z ? void 0 : Z.requestAnimationFrame) ? t : requestAnimationFrame,
                    cancelAnimationFrame: null != (n = null == Z ? void 0 : Z.cancelAnimationFrame) ? n : cancelAnimationFrame
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
