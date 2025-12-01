n.d(t, { k: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(921254),
    o = n(745510),
    s = n(661637),
    l = n(728285),
    c = n(146128),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = 1000 / 60,
    h = 24,
    g = {
        velocity: {
            type: "static-random",
            minValue: {
                x: 8,
                y: 0,
            },
            maxValue: {
                x: 50,
                y: 0,
            },
        },
        rotation: {
            type: "linear-random",
            minValue: {
                x: 0,
                y: 0,
                z: 0,
            },
            maxValue: {
                x: 0,
                y: 0,
                z: 360,
            },
            minAddValue: {
                x: 0,
                y: 0,
                z: -5,
            },
            maxAddValue: {
                x: 0,
                y: 0,
                z: 5,
            },
        },
        size: {
            type: "static-random",
            minValue: 2,
            maxValue: 24,
            uniformVectorValues: !0,
        },
        dragCoefficient: {
            type: "static",
            value: 0.8,
        },
        opacity: {
            type: "static-random",
            minValue: 0.7,
            maxValue: 0.5,
        },
    },
    E = ["#FFFFFF"],
    b = [n(123353), ...(0, s.Z)(["snowflake"])];
function y(e) {
    let { children: t } = e,
        [n, s] = i.useState(!1),
        d = (0, l.bp)(),
        [p, y] = i.useState(null),
        { confettiCanvas: O } = i.useContext(o.h),
        v = (0, a.uR)(O, p),
        S = i.useMemo(
            () => ({
                triggerAnimation: () => s(!0),
                untriggerAnimation: () => s(!1),
            }),
            [],
        ),
        I = i.useCallback(() => {
            let e = null == O ? void 0 : O.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            v.createConfetti(
                _(f({}, g), {
                    position: {
                        type: "static-random",
                        minValue: {
                            x: -t.width / 2,
                            y: -h,
                        },
                        maxValue: {
                            x: t.width,
                            y: -h,
                        },
                    },
                }),
            );
        }, [v, O]);
    return (i.useEffect(() => {
        let e = n ? setInterval(I, m) : null;
        return () => clearInterval(e);
    }, [n, I]),
    d === u.IlC.OVERLAY)
        ? t
        : (0, r.jsxs)(c.Rm.Provider, {
              value: S,
              children: [
                  t,
                  (0, r.jsx)(a.Ji, {
                      ref: y,
                      colors: E,
                      sprites: b,
                      spriteWidth: h,
                      spriteHeight: h,
                  }),
              ],
          });
}
