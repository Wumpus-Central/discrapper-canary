(n.d(t, { J: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(164369),
    s = n(564854),
    c = n(481060),
    u = n(70956),
    d = n(388032),
    f = n(819496);
function p(e) {
    if (null != e) {
        let t = new Date(),
            {
                hours: n,
                minutes: r,
                seconds: i
            } = (0, o.Z)({
                start: t,
                end: e
            });
        return {
            hours: String(n).padStart(2, '0'),
            minutes: String(r).padStart(2, '0'),
            seconds: String(i).padStart(2, '0'),
            countdownString: d.intl.formatToPlainString(d.t.U0Hhr6, { duration: new Date(0, 0, 0, n, r, i) })
        };
    }
    return {
        hours: '',
        minutes: '',
        seconds: '',
        countdownString: ''
    };
}
let m = (e) => {
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
            className: f.animatedDigit,
            children: n((e, t) => {
                var n, i;
                return (0, r.jsx)(s.animated.div, {
                    style:
                        ((n = (function (e) {
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
    g = () => {
        let [e, t] = i.useState(!1);
        i.useEffect(() => {
            let e;
            return (
                !(function n() {
                    let r = Date.now();
                    e = setTimeout(
                        () => {
                            (t((e) => !e), n());
                        },
                        Math.max(100, (Math.floor(r / u.Z.Millis.HALF_SECOND) + 1) * u.Z.Millis.HALF_SECOND - r)
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
            className: f.colonContainer,
            children: [(0, r.jsx)('div', { className: f.tinyDot }), (0, r.jsx)('div', { className: f.tinyDot })]
        });
    },
    h = (e) => {
        let { digits: t } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: f.digitContainer,
                    children: (0, r.jsx)(m, { digit: t[0] })
                }),
                (0, r.jsx)('div', {
                    className: f.digitContainer,
                    children: (0, r.jsx)(m, { digit: t[1] })
                })
            ]
        });
    },
    b = (e) => {
        let { countdown: t } = e;
        return (0, r.jsxs)('div', {
            className: f.digitsContainer,
            children: [(0, r.jsx)(h, { digits: t.hours }), (0, r.jsx)(g, {}), (0, r.jsx)(h, { digits: t.minutes }), (0, r.jsx)(g, {}), (0, r.jsx)(h, { digits: t.seconds })]
        });
    };
function v(e) {
    let { textVariant: t, className: n, catalogUpdateTime: l, isScrolled: o } = e,
        [s, u] = i.useState(() => p(l));
    return (
        i.useEffect(() => {
            let e = setInterval(() => {
                u(() => p(l));
            }, 1000);
            return () => clearInterval(e);
        }, [l]),
        (0, r.jsxs)('div', {
            className: a()(n, f.countdownContainer, { [f.isScrolled]: o }),
            'aria-label': s.countdownString,
            children: [
                (0, r.jsxs)('div', {
                    className: f.iconContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: f.clockIconWrapper,
                            children: (0, r.jsx)(c.T39, {
                                size: 'custom',
                                height: 16,
                                width: 16,
                                color: 'currentColor',
                                colorClass: f.clockIcon
                            })
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: null != t ? t : 'text-sm/medium',
                            color: 'header-primary',
                            children: d.intl.string(d.t.VZsY3t)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: f.digitsContainer,
                    children: (0, r.jsx)(b, { countdown: s })
                })
            ]
        })
    );
}
