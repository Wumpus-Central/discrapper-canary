n.d(t, { A: () => h }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(851110);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = 50,
    f = 10,
    p = 100;
function _(e, t) {
    return (
        (t = null != t ? t : 1),
        u(l({}, s.Mw), {
            position: {
                type: "static-random",
                minValue: {
                    x: e.x,
                    y: e.y,
                },
                maxValue: {
                    x: e.x + e.width,
                    y: e.y + e.height / 2,
                },
            },
            velocity: {
                type: "static-random",
                minValue: {
                    x: -100 * t,
                    y: -50 * t,
                },
                maxValue: {
                    x: 100 * t,
                    y: -300 * t,
                },
            },
            dragCoefficient: {
                type: "static",
                value: 0.166,
            },
        })
    );
}
let h = function (e) {
    let { confettiTarget: t, confettiCanvas: n, confettiVelocityMultiplier: o, sprites: l, colors: c } = e,
        [u, h] = i.useState(null),
        m = (0, a.f9)(n, u),
        [g, E] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = Array(f).fill(0);
            return (
                null != t &&
                    m.isReady &&
                    !g &&
                    (e = e.map((n, r) =>
                        setTimeout(() => {
                            r === e.length - 1 && E(!0), m.createMultipleConfetti(_(t.getBoundingClientRect(), o), d);
                        }, r * p),
                    )),
                () => {
                    for (let t of e) clearTimeout(t);
                }
            );
        }, [m, t, g, o]),
        (0, r.jsx)(a.K_, {
            ref: h,
            sprites: null != l ? l : s.uI,
            colors: null != c ? c : s._t,
            spriteWidth: s.wn,
            spriteHeight: s.wn,
        })
    );
};
