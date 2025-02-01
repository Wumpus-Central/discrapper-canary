n.d(t, { Z: () => N }), n(47120), n(177593);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(642128),
    o = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    h = n(44315),
    p = n(314897),
    m = n(111583),
    f = n(889901),
    g = n(64078),
    _ = n(351780),
    C = n(843693),
    x = n(641033),
    v = n(989830),
    E = n(388032),
    I = n(242803);
let b = l.memo(function (e) {
        let { channelId: t, width: n } = e,
            a = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
            r = (0, o.e7)([C.ZP], () => C.ZP.getMostRecentMessageCombo(t), [t]),
            [d, h] = l.useState(!1);
        l.useEffect(() => {
            if (null == r ? void 0 : r.displayed) return;
            h(!1),
                setImmediate(() => {
                    h((null != r ? (0, x.Eo)(r.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                h(!1), null != r && (0, g.ew)(r);
            }, 2000);
            return () => clearTimeout(e);
        }, [r]);
        let p = null != r ? '100%' : '200%',
            m = (0, c.q_F)(
                {
                    opacity: d ? 1 : 0,
                    translateY: d ? '0' : p,
                    pointerEvents: 'none',
                    width: n,
                    config: a ? s.config.stiff : s.config.slow
                },
                'animate-always'
            );
        return (0, i.jsx)(i.Fragment, {
            children:
                null != r &&
                (0, i.jsx)(s.animated.div, {
                    className: I.messageComboScore,
                    style: m,
                    children: (0, i.jsx)(c.Text, {
                        className: I.comboScore,
                        variant: 'text-sm/bold',
                        children: (0, x.Eo)(r.combo)
                    })
                })
        });
    }),
    Z = l.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: a, square: s, flair: o } = l.useMemo(() => (0, x.yz)(n), [n]),
            d = (0, h.Lq)(a);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    className: I.comboValue,
                    variant: 'text-sm/bold',
                    children: t
                }),
                (0, i.jsxs)('div', {
                    className: I.comboNameplate,
                    style: { color: d },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: I.comboMultiplier,
                            style: { color: d },
                            variant: 'text-sm/bold',
                            children: E.intl.format(E.t['6bgVlp'], { multiplier: n })
                        }),
                        s &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: r()(I.comboSquare, I.left),
                                        style: { backgroundColor: d }
                                    }),
                                    (0, i.jsx)('div', {
                                        className: r()(I.comboSquare, I.right),
                                        style: { backgroundColor: d }
                                    })
                                ]
                            }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: r()(I.confettiIcon, I.left),
                                        children: (0, i.jsx)(f.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: r()(I.confettiIcon, I.right),
                                        children: (0, i.jsx)(f.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                ]
                            }),
                        1 === n &&
                            (0, i.jsx)(c.Text, {
                                className: I.tip,
                                variant: 'text-sm/bold',
                                children: E.intl.string(E.t.b5Cpoa)
                            })
                    ]
                })
            ]
        });
    }),
    N = l.memo(function (e) {
        let { channelId: t } = e,
            n = (0, o.e7)([p.default], () => p.default.getId()),
            a = (0, o.e7)([m.Z], () => m.Z.isTyping(t, n), [t, n]),
            r = (0, o.e7)([_.Z], () => _.Z.isEnabled()),
            u = (0, o.e7)([C.ZP], () => C.ZP.isComboing(n, t), [t, n]),
            { ref: h, width: f = 0 } = (0, d.Z)(),
            [g, x] = l.useState(!1),
            E = (0, v.Z)(t),
            N = r && u && a;
        l.useEffect(() => {
            N && x(!0);
            let e = setTimeout(() => x(N), 1000);
            return () => clearTimeout(e);
        }, [N]);
        let T = (0, c.q_F)({
                opacity: g ? 1 : 0,
                transform: g ? 'translateY(0)' : 'translateY(100%)',
                pointerEvents: 'none',
                config: s.config.stiff
            }),
            S = l.useMemo(
                () =>
                    null != E
                        ? E
                        : {
                              value: 0,
                              multiplier: 1
                          },
                [E]
            ),
            j = l.useRef(S);
        l.useEffect(() => {
            (S.multiplier > 1 || S.value > 0) && (j.current = S);
        }, [S]);
        let { multiplier: A, value: y } = l.useMemo(
            () => ({
                value: N ? S.value : j.current.value,
                multiplier: N ? S.multiplier : j.current.multiplier
            }),
            [N, S, j]
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(b, {
                    channelId: t,
                    width: f
                }),
                (0, i.jsx)(s.animated.div, {
                    ref: h,
                    className: I.combo,
                    style: T,
                    children: (0, i.jsx)(Z, {
                        value: y,
                        multiplier: A
                    })
                })
            ]
        });
    });
