n.d(t, { J: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(164369),
    s = n(642128),
    c = n(481060),
    d = n(70956),
    u = n(388032),
    _ = n(819496);
function m(e) {
    if (null != e) {
        let t = new Date(),
            {
                hours: n,
                minutes: r,
                seconds: i
            } = (0, l.Z)({
                start: t,
                end: e
            });
        return {
            hours: String(n).padStart(2, '0'),
            minutes: String(r).padStart(2, '0'),
            seconds: String(i).padStart(2, '0'),
            countdownString: u.NW.formatToPlainString(u.t.U0Hhr6, { duration: new Date(0, 0, 0, n, r, i) })
        };
    }
    return {
        hours: '',
        minutes: '',
        seconds: '',
        countdownString: ''
    };
}
let f = (e) => {
        let { digit: t } = e,
            n = (0, c.Yzy)(t, {
                from: {
                    opacity: 0,
                    translateY: '-100%'
                },
                enter: {
                    opacity: 1,
                    translateY: '0%'
                },
                leave: {
                    opacity: 0,
                    translateY: '100%'
                },
                config: {
                    tension: 210,
                    friction: 20,
                    duration: 200
                }
            });
        return (0, r.jsx)('div', {
            className: _.animatedDigit,
            children: n((e, t) => {
                var n, i;
                return (0, r.jsx)(s.animated.div, {
                    style:
                        ((n = (function (e) {
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
                        })({}, e)),
                        (i = i =
                            {
                                position: 'absolute',
                                width: '100%',
                                textAlign: 'center'
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n),
                    children: (0, r.jsx)(c.Text, {
                        variant: 'text-sm/bold',
                        children: t
                    })
                });
            })
        });
    },
    p = () => {
        let [e, t] = i.useState(!1);
        i.useEffect(() => {
            let e;
            return (
                !(function n() {
                    let r = Date.now();
                    e = setTimeout(
                        () => {
                            t((e) => !e), n();
                        },
                        Math.max(100, (Math.floor(r / d.Z.Millis.HALF_SECOND) + 1) * d.Z.Millis.HALF_SECOND - r)
                    );
                })(),
                () => {
                    clearTimeout(e);
                }
            );
        }, []);
        let n = (0, c.q_F)({
            opacity: e ? 0.5 : 1,
            config: { duration: 100 }
        });
        return (0, r.jsxs)(s.animated.div, {
            style: n,
            className: _.colonContainer,
            children: [(0, r.jsx)('div', { className: _.tinyDot }), (0, r.jsx)('div', { className: _.tinyDot })]
        });
    },
    g = (e) => {
        let { digits: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: _.digitContainer,
                    children: (0, r.jsx)(f, { digit: t[0] })
                }),
                (0, r.jsx)('div', {
                    className: _.digitContainer,
                    children: (0, r.jsx)(f, { digit: t[1] })
                })
            ]
        });
    },
    h = (e) => {
        let { countdown: t } = e;
        return (0, r.jsxs)('div', {
            className: _.digitsContainer,
            children: [(0, r.jsx)(g, { digits: t.hours }), (0, r.jsx)(p, {}), (0, r.jsx)(g, { digits: t.minutes }), (0, r.jsx)(p, {}), (0, r.jsx)(g, { digits: t.seconds })]
        });
    };
function v(e) {
    let { textVariant: t, className: n, catalogUpdateTime: a, isScrolled: l } = e,
        [s, d] = i.useState(() => m(a));
    return (
        i.useEffect(() => {
            let e = setInterval(() => {
                d(() => m(a));
            }, 1000);
            return () => clearInterval(e);
        }, [a]),
        (0, r.jsxs)('div', {
            className: o()(n, _.countdownContainer, { [_.isScrolled]: l }),
            'aria-label': s.countdownString,
            children: [
                (0, r.jsxs)('div', {
                    className: _.iconContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: _.clockIconWrapper,
                            children: (0, r.jsx)(c.T39, {
                                size: 'custom',
                                height: 16,
                                width: 16,
                                color: 'currentColor',
                                colorClass: _.clockIcon
                            })
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: null != t ? t : 'text-sm/medium',
                            color: 'header-primary',
                            children: u.NW.string(u.t.VZsY3t)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: _.digitsContainer,
                    children: (0, r.jsx)(h, { countdown: s })
                })
            ]
        })
    );
}
