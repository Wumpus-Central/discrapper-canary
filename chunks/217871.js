n(47120), n(177593);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(666912),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    h = n(44315),
    p = n(314897),
    m = n(111583),
    f = n(889901),
    g = n(64078),
    C = n(351780),
    x = n(843693),
    v = n(641033),
    _ = n(989830),
    I = n(388032),
    E = n(242803);
let b = l.memo(function (e) {
        let { channelId: t, width: n } = e,
            r = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
            a = (0, o.e7)([x.ZP], () => x.ZP.getMostRecentMessageCombo(t), [t]),
            [d, h] = l.useState(!1);
        l.useEffect(() => {
            if (null == a ? void 0 : a.displayed) return;
            h(!1),
                setImmediate(() => {
                    h((null != a ? (0, v.Eo)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                h(!1), null != a && (0, g.ew)(a);
            }, 2000);
            return () => clearTimeout(e);
        }, [a]);
        let p = null != a ? '100%' : '200%',
            m = (0, c.useSpring)(
                {
                    opacity: d ? 1 : 0,
                    translateY: d ? '0' : p,
                    pointerEvents: 'none',
                    width: n,
                    config: r ? s.config.stiff : s.config.slow
                },
                'animate-always'
            );
        return (0, i.jsx)(i.Fragment, {
            children:
                null != a &&
                (0, i.jsx)(s.animated.div, {
                    className: E.messageComboScore,
                    style: m,
                    children: (0, i.jsx)(c.Text, {
                        className: E.comboScore,
                        variant: 'text-sm/bold',
                        children: (0, v.Eo)(a.combo)
                    })
                })
        });
    }),
    Z = l.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: r, square: s, flair: o } = l.useMemo(() => (0, v.yz)(n), [n]),
            d = (0, h.Lq)(r);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    className: E.comboValue,
                    variant: 'text-sm/bold',
                    children: t
                }),
                (0, i.jsxs)('div', {
                    className: E.comboNameplate,
                    style: { color: d },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: E.comboMultiplier,
                            style: { color: d },
                            variant: 'text-sm/bold',
                            children: I.intl.format(I.t['6bgVlp'], { multiplier: n })
                        }),
                        s &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: a()(E.comboSquare, E.left),
                                        style: { backgroundColor: d }
                                    }),
                                    (0, i.jsx)('div', {
                                        className: a()(E.comboSquare, E.right),
                                        style: { backgroundColor: d }
                                    })
                                ]
                            }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: a()(E.confettiIcon, E.left),
                                        children: (0, i.jsx)(f.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: a()(E.confettiIcon, E.right),
                                        children: (0, i.jsx)(f.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                ]
                            }),
                        1 === n &&
                            (0, i.jsx)(c.Text, {
                                className: E.tip,
                                variant: 'text-sm/bold',
                                children: I.intl.string(I.t.b5Cpoa)
                            })
                    ]
                })
            ]
        });
    });
t.Z = l.memo(function (e) {
    let { channelId: t } = e,
        n = (0, o.e7)([p.default], () => p.default.getId()),
        r = (0, o.e7)([m.Z], () => m.Z.isTyping(t, n), [t, n]),
        a = (0, o.e7)([C.Z], () => C.Z.isEnabled()),
        u = (0, o.e7)([x.ZP], () => x.ZP.isComboing(n, t), [t, n]),
        { ref: h, width: f = 0 } = (0, d.Z)(),
        [g, v] = l.useState(!1),
        I = (0, _.Z)(t),
        N = a && u && r;
    l.useEffect(() => {
        N && v(!0);
        let e = setTimeout(() => v(N), 1000);
        return () => clearTimeout(e);
    }, [N]);
    let S = (0, c.useSpring)({
            opacity: g ? 1 : 0,
            transform: g ? 'translateY(0)' : 'translateY(100%)',
            pointerEvents: 'none',
            config: s.config.stiff
        }),
        T = l.useMemo(
            () =>
                null != I
                    ? I
                    : {
                          value: 0,
                          multiplier: 1
                      },
            [I]
        ),
        j = l.useRef(T);
    l.useEffect(() => {
        (T.multiplier > 1 || T.value > 0) && (j.current = T);
    }, [T]);
    let { multiplier: A, value: y } = l.useMemo(
        () => ({
            value: N ? T.value : j.current.value,
            multiplier: N ? T.multiplier : j.current.multiplier
        }),
        [N, T, j]
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b, {
                channelId: t,
                width: f
            }),
            (0, i.jsx)(s.animated.div, {
                ref: h,
                className: E.combo,
                style: S,
                children: (0, i.jsx)(Z, {
                    value: y,
                    multiplier: A
                })
            })
        ]
    });
});
