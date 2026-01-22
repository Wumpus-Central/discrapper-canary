n.d(t, { i: () => y }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(21161),
    o = n(531301),
    l = n(267102),
    c = n(129185),
    u = n(652215);
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
let h = 1000 / 60,
    m = 24,
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
    b = [n(426560), ...(0, o.A)(["snowflake"])];
function y(e) {
    let { children: t } = e,
        [n, o] = i.useState(!1),
        d = (0, l.Us)(),
        [p, y] = i.useState(null),
        { confettiCanvas: O } = i.useContext(s.x),
        A = (0, a.f9)(O, p),
        v = i.useMemo(
            () => ({
                triggerAnimation: () => o(!0),
                untriggerAnimation: () => o(!1),
            }),
            [],
        ),
        S = i.useCallback(() => {
            let e = null == O ? void 0 : O.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            A.createConfetti(
                _(f({}, g), {
                    position: {
                        type: "static-random",
                        minValue: {
                            x: -t.width / 2,
                            y: -m,
                        },
                        maxValue: {
                            x: t.width,
                            y: -m,
                        },
                    },
                }),
            );
        }, [A, O]);
    return (i.useEffect(() => {
        let e = n ? setInterval(S, h) : null;
        return () => clearInterval(e);
    }, [n, S]),
    d === u.BRT.OVERLAY)
        ? t
        : (0, r.jsxs)(c.wE.Provider, {
              value: v,
              children: [
                  t,
                  (0, r.jsx)(a.K_, {
                      ref: y,
                      colors: E,
                      sprites: b,
                      spriteWidth: m,
                      spriteHeight: m,
                  }),
              ],
          });
}
