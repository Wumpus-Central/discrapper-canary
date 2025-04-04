n.d(t, { k: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(48026),
    a = n(40851),
    s = n(745510),
    l = n(661637),
    c = n(146128),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = 1000 / 60,
    m = 24,
    g = {
        velocity: {
            type: 'static-random',
            minValue: {
                x: 8,
                y: 0
            },
            maxValue: {
                x: 50,
                y: 0
            }
        },
        rotation: {
            type: 'linear-random',
            minValue: {
                x: 0,
                y: 0,
                z: 0
            },
            maxValue: {
                x: 0,
                y: 0,
                z: 360
            },
            minAddValue: {
                x: 0,
                y: 0,
                z: -5
            },
            maxAddValue: {
                x: 0,
                y: 0,
                z: 5
            }
        },
        size: {
            type: 'static-random',
            minValue: 2,
            maxValue: 24,
            uniformVectorValues: !0
        },
        dragCoefficient: {
            type: 'static',
            value: 0.8
        },
        opacity: {
            type: 'static-random',
            minValue: 0.7,
            maxValue: 0.5
        }
    },
    E = ['#FFFFFF'],
    b = [n(123353), ...(0, l.Z)(['snowflake'])];
function y(e) {
    let { children: t } = e,
        [n, l] = i.useState(!1),
        d = (0, a.bp)(),
        [_, y] = i.useState(null),
        { confettiCanvas: v } = i.useContext(s.h),
        O = (0, o.uR)(v, _),
        I = i.useMemo(
            () => ({
                triggerAnimation: () => l(!0),
                untriggerAnimation: () => l(!1)
            }),
            []
        ),
        S = i.useCallback(() => {
            let e = null == v ? void 0 : v.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            O.createConfetti(
                p(f({}, g), {
                    position: {
                        type: 'static-random',
                        minValue: {
                            x: -t.width / 2,
                            y: -m
                        },
                        maxValue: {
                            x: t.width,
                            y: -m
                        }
                    }
                })
            );
        }, [O, v]);
    return (i.useEffect(() => {
        let e = n ? setInterval(S, h) : null;
        return () => clearInterval(e);
    }, [n, S]),
    d === u.IlC.OVERLAY)
        ? t
        : (0, r.jsxs)(c.Rm.Provider, {
              value: I,
              children: [
                  t,
                  (0, r.jsx)(o.Ji, {
                      ref: y,
                      colors: E,
                      sprites: b,
                      spriteWidth: m,
                      spriteHeight: m
                  })
              ]
          });
}
