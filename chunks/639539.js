n.d(t, { J: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(164369),
    o = n(188650),
    c = n(642128),
    d = n(481060),
    u = n(70956),
    h = n(388032),
    p = n(414167);
function m(e) {
    if (null != e) {
        let t = new Date(),
            {
                hours: n,
                minutes: i,
                seconds: l
            } = (0, s.Z)({
                start: t,
                end: e
            }),
            a = (0, o.Z)(e, t);
        return {
            hours: String(n).padStart(2, '0'),
            minutes: String(i).padStart(2, '0'),
            seconds: String(l).padStart(2, '0'),
            shouldDisplaySeconds: a < 60,
            countdownString: h.intl.formatToPlainString(h.t.U0Hhr6, { duration: new Date(0, 0, 0, n, i, l) })
        };
    }
    return {
        hours: '',
        minutes: '',
        seconds: '',
        shouldDisplaySeconds: !1,
        countdownString: ''
    };
}
let f = (e) => {
        let { digit: t } = e,
            n = (0, d.Yzy)(t, {
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
        return (0, i.jsx)('div', {
            className: p.animatedDigit,
            children: n((e, t) =>
                (0, i.jsx)(c.animated.div, {
                    style: {
                        ...e,
                        position: 'absolute',
                        width: '100%',
                        textAlign: 'center'
                    },
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-sm/bold',
                        children: t
                    })
                })
            )
        });
    },
    g = () => {
        let [e, t] = l.useState(!1);
        l.useEffect(() => {
            let e;
            return (
                !(function n() {
                    let i = Date.now();
                    e = setTimeout(
                        () => {
                            t((e) => !e), n();
                        },
                        Math.max(100, (Math.floor(i / u.Z.Millis.HALF_SECOND) + 1) * u.Z.Millis.HALF_SECOND - i)
                    );
                })(),
                () => {
                    clearTimeout(e);
                }
            );
        }, []);
        let n = (0, d.q_F)({
            opacity: e ? 0.5 : 1,
            config: { duration: 100 }
        });
        return (0, i.jsxs)(c.animated.div, {
            style: n,
            className: p.colonContainer,
            children: [(0, i.jsx)('div', { className: p.tinyDot }), (0, i.jsx)('div', { className: p.tinyDot })]
        });
    },
    _ = (e) => {
        let { digits: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: p.digitContainer,
                    children: (0, i.jsx)(f, { digit: t[0] })
                }),
                (0, i.jsx)('div', {
                    className: p.digitContainer,
                    children: (0, i.jsx)(f, { digit: t[1] })
                })
            ]
        });
    },
    C = (e) => {
        let { countdown: t, shouldDisplaySeconds: n } = e;
        return (0, i.jsxs)('div', {
            className: p.digitsContainer,
            children: [
                (0, i.jsx)(_, { digits: t.hours }),
                (0, i.jsx)(g, {}),
                (0, i.jsx)(_, { digits: t.minutes }),
                n &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(g, {}), (0, i.jsx)(_, { digits: t.seconds })]
                    })
            ]
        });
    };
function x(e) {
    let { textVariant: t, className: n, catalogUpdateTime: a, isScrolled: s } = e,
        [o, c] = l.useState(() => m(a));
    return (
        l.useEffect(() => {
            let e = setInterval(() => {
                c(() => m(a));
            }, 1000);
            return () => clearInterval(e);
        }, [a]),
        (0, i.jsxs)('div', {
            className: r()(n, p.countdownContainer, { [p.isScrolled]: s }),
            'aria-label': o.countdownString,
            children: [
                (0, i.jsxs)('div', {
                    className: p.iconContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: p.clockIconWrapper,
                            children: (0, i.jsx)(d.T39, {
                                size: 'custom',
                                height: 16,
                                width: 16,
                                color: 'currentColor',
                                colorClass: p.clockIcon
                            })
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: null != t ? t : 'text-sm/medium',
                            color: 'header-primary',
                            children: h.intl.string(h.t.VZsY3t)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: p.digitsContainer,
                    children: (0, i.jsx)(C, {
                        countdown: o,
                        shouldDisplaySeconds: o.shouldDisplaySeconds
                    })
                })
            ]
        })
    );
}
