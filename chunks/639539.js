n.d(t, { J: () => C }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(164369),
    o = n(642128),
    c = n(481060),
    d = n(70956),
    u = n(388032),
    h = n(513933);
function p(e) {
    if (null != e) {
        let t = new Date(),
            {
                hours: n,
                minutes: i,
                seconds: l
            } = (0, s.Z)({
                start: t,
                end: e
            });
        return {
            hours: String(n).padStart(2, '0'),
            minutes: String(i).padStart(2, '0'),
            seconds: String(l).padStart(2, '0'),
            countdownString: u.intl.formatToPlainString(u.t.U0Hhr6, { duration: new Date(0, 0, 0, n, i, l) })
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
        return (0, i.jsx)('div', {
            className: h.animatedDigit,
            children: n((e, t) =>
                (0, i.jsx)(o.animated.div, {
                    style: {
                        ...e,
                        position: 'absolute',
                        width: '100%',
                        textAlign: 'center'
                    },
                    children: (0, i.jsx)(c.Text, {
                        variant: 'text-sm/bold',
                        children: t
                    })
                })
            )
        });
    },
    f = () => {
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
                        Math.max(100, (Math.floor(i / d.Z.Millis.HALF_SECOND) + 1) * d.Z.Millis.HALF_SECOND - i)
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
        return (0, i.jsxs)(o.animated.div, {
            style: n,
            className: h.colonContainer,
            children: [(0, i.jsx)('div', { className: h.tinyDot }), (0, i.jsx)('div', { className: h.tinyDot })]
        });
    },
    g = (e) => {
        let { digits: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: h.digitContainer,
                    children: (0, i.jsx)(m, { digit: t[0] })
                }),
                (0, i.jsx)('div', {
                    className: h.digitContainer,
                    children: (0, i.jsx)(m, { digit: t[1] })
                })
            ]
        });
    },
    _ = (e) => {
        let { countdown: t } = e;
        return (0, i.jsxs)('div', {
            className: h.digitsContainer,
            children: [(0, i.jsx)(g, { digits: t.hours }), (0, i.jsx)(f, {}), (0, i.jsx)(g, { digits: t.minutes }), (0, i.jsx)(f, {}), (0, i.jsx)(g, { digits: t.seconds })]
        });
    };
function C(e) {
    let { textVariant: t, className: n, catalogUpdateTime: a, isScrolled: s } = e,
        [o, d] = l.useState(() => p(a));
    return (
        l.useEffect(() => {
            let e = setInterval(() => {
                d(() => p(a));
            }, 1000);
            return () => clearInterval(e);
        }, [a]),
        (0, i.jsxs)('div', {
            className: r()(n, h.countdownContainer, { [h.isScrolled]: s }),
            'aria-label': o.countdownString,
            children: [
                (0, i.jsxs)('div', {
                    className: h.iconContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: h.clockIconWrapper,
                            children: (0, i.jsx)(c.T39, {
                                size: 'custom',
                                height: 16,
                                width: 16,
                                color: 'currentColor',
                                colorClass: h.clockIcon
                            })
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: null != t ? t : 'text-sm/medium',
                            color: 'header-primary',
                            children: u.intl.string(u.t.VZsY3t)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: h.digitsContainer,
                    children: (0, i.jsx)(_, { countdown: o })
                })
            ]
        })
    );
}
