n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(106778);
let a = [n(426560)],
    s = ["#FFFFFF"],
    o = 1e3 / 60,
    c = {
        velocity: {
            type: "static-random",
            minValue: {
                x: 0,
                y: 1,
            },
            maxValue: {
                x: 3,
                y: 3,
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
            maxValue: 6,
        },
        dragCoefficient: {
            type: "static",
            value: 830,
        },
        opacity: {
            type: "static",
            value: 0.3,
        },
    };

function u(e) {
    let { className: t, firing: n = !0, wind: u = 2, sprites: d = a, spriteColors: p = s, confettiConfig: f } = e,
        [h, A] = i.useState(null),
        [g, m] = i.useState(null),
        b = (0, l.f9)(g, h),
        _ = i.useMemo(
            () =>
                new l.OH({
                    wind: u,
                }),
            [u],
        ),
        E = i.useCallback(() => {
            var e, t;
            let n = null == g ? void 0 : g.getCanvas();
            if (null == n) return;
            let r = n.getBoundingClientRect();
            b.createConfetti(
                ((e = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, c, f)),
                (t = t =
                    {
                        position: {
                            type: "static-random",
                            minValue: {
                                x: -r.width / 2,
                                y: -6,
                            },
                            maxValue: {
                                x: r.width,
                                y: -6,
                            },
                        },
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
                e),
            );
        }, [b, g, f]);
    return (
        i.useEffect(() => {
            let e = n ? setInterval(E, o) : null;
            return () => clearInterval(e);
        }, [n, E]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.Fk, {
                    ref: m,
                    className: t,
                    environment: _,
                }),
                (0, r.jsx)(l.K_, {
                    ref: A,
                    colors: p,
                    sprites: d,
                    spriteWidth: 6,
                    spriteHeight: 6,
                }),
            ],
        })
    );
}
