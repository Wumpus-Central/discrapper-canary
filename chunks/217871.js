n.d(t, { Z: () => E }), n(47120), n(177593);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(642128),
    s = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    p = n(44315),
    h = n(314897),
    f = n(111583),
    m = n(889901),
    g = n(64078),
    b = n(351780),
    _ = n(843693),
    C = n(641033),
    y = n(989830),
    x = n(388032),
    v = n(837265);
let j = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            o = (0, s.e7)([_.ZP], () => _.ZP.getMostRecentMessageCombo(t), [t]),
            [u, p] = i.useState(!1);
        i.useEffect(() => {
            if (null == o ? void 0 : o.displayed) return;
            p(!1),
                setImmediate(() => {
                    p((null != o ? (0, C.Eo)(o.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                p(!1), null != o && (0, g.ew)(o);
            }, 2000);
            return () => clearTimeout(e);
        }, [o]);
        let h = null != o ? '100%' : '200%',
            f = (0, c.q_F)(
                {
                    opacity: +!!u,
                    translateY: u ? '0' : h,
                    pointerEvents: 'none',
                    width: n,
                    config: l ? a.config.stiff : a.config.slow
                },
                'animate-always'
            );
        return (
            null != o &&
            (0, r.jsx)(a.animated.div, {
                className: v.messageComboScore,
                style: f,
                children: (0, r.jsx)(c.Text, {
                    className: v.comboScore,
                    variant: 'text-sm/bold',
                    children: (0, C.Eo)(o.combo)
                })
            })
        );
    }),
    O = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: l, square: a, flair: s } = i.useMemo(() => (0, C.yz)(n), [n]),
            u = (0, p.Lq)(l);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Text, {
                    className: v.comboValue,
                    variant: 'text-sm/bold',
                    children: t
                }),
                (0, r.jsxs)('div', {
                    className: v.comboNameplate,
                    style: { color: u },
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: v.comboMultiplier,
                            style: { color: u },
                            variant: 'text-sm/bold',
                            children: x.NW.format(x.t['6bgVlp'], { multiplier: n })
                        }),
                        a &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(v.comboSquare, v.left),
                                        style: { backgroundColor: u }
                                    }),
                                    (0, r.jsx)('div', {
                                        className: o()(v.comboSquare, v.right),
                                        style: { backgroundColor: u }
                                    })
                                ]
                            }),
                        s &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(v.confettiIcon, v.left),
                                        children: (0, r.jsx)(m.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: o()(v.confettiIcon, v.right),
                                        children: (0, r.jsx)(m.Z, {
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                ]
                            }),
                        1 === n &&
                            (0, r.jsx)(c.Text, {
                                className: v.tip,
                                variant: 'text-sm/bold',
                                children: x.NW.string(x.t.b5Cpoa)
                            })
                    ]
                })
            ]
        });
    }),
    E = i.memo(function (e) {
        let { channelId: t } = e,
            n = (0, s.e7)([h.default], () => h.default.getId()),
            l = (0, s.e7)([f.Z], () => f.Z.isTyping(t, n), [t, n]),
            o = (0, s.e7)([b.Z], () => b.Z.isEnabled()),
            d = (0, s.e7)([_.ZP], () => _.ZP.isComboing(n, t), [t, n]),
            { ref: p, width: m = 0 } = (0, u.Z)(),
            [g, C] = i.useState(!1),
            x = (0, y.Z)(t),
            E = o && d && l;
        i.useEffect(() => {
            E && C(!0);
            let e = setTimeout(() => C(E), 1000);
            return () => clearTimeout(e);
        }, [E]);
        let N = (0, c.q_F)({
                opacity: +!!g,
                transform: g ? 'translateY(0)' : 'translateY(100%)',
                pointerEvents: 'none',
                config: a.config.stiff
            }),
            I = i.useMemo(
                () =>
                    null != x
                        ? x
                        : {
                              value: 0,
                              multiplier: 1
                          },
                [x]
            ),
            P = i.useRef(I);
        i.useEffect(() => {
            (I.multiplier > 1 || I.value > 0) && (P.current = I);
        }, [I]);
        let { multiplier: S, value: Z } = i.useMemo(
            () => ({
                value: E ? I.value : P.current.value,
                multiplier: E ? I.multiplier : P.current.multiplier
            }),
            [E, I, P]
        );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j, {
                    channelId: t,
                    width: m
                }),
                (0, r.jsx)(a.animated.div, {
                    ref: p,
                    className: v.combo,
                    style: N,
                    children: (0, r.jsx)(O, {
                        value: Z,
                        multiplier: S
                    })
                })
            ]
        });
    });
