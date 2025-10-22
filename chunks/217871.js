n.d(t, { Z: () => E }), n(388685), n(358797);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(13941),
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
    C = n(843693),
    y = n(641033),
    _ = n(989830),
    v = n(388032),
    x = n(436083);
let O = r.memo(function (e) {
        let { channelId: t, width: n } = e,
            l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            a = (0, s.e7)([C.ZP], () => C.ZP.getMostRecentMessageCombo(t), [t]),
            [u, p] = r.useState(!1);
        r.useEffect(() => {
            if (null == a ? void 0 : a.displayed) return;
            p(!1),
                setImmediate(() => {
                    p((null != a ? (0, y.Eo)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                p(!1), null != a && (0, g.ew)(a);
            }, 2000);
            return () => clearTimeout(e);
        }, [a]);
        let h = null != a ? "100%" : "200%",
            f = (0, c.q_F)(
                {
                    opacity: +!!u,
                    translateY: u ? "0" : h,
                    pointerEvents: "none",
                    width: n,
                    config: l ? o.config.stiff : o.config.slow,
                },
                "animate-always",
            );
        return (
            null != a &&
            (0, i.jsx)(o.animated.div, {
                className: x.messageComboScore,
                style: f,
                children: (0, i.jsx)(c.Text, {
                    className: x.comboScore,
                    variant: "text-sm/bold",
                    children: (0, y.Eo)(a.combo),
                }),
            })
        );
    }),
    j = r.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: l, square: o, flair: s } = r.useMemo(() => (0, y.yz)(n), [n]),
            u = (0, p.Lq)(l);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    className: x.comboValue,
                    variant: "text-sm/bold",
                    children: t,
                }),
                (0, i.jsxs)("div", {
                    className: x.comboNameplate,
                    style: { color: u },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: x.comboMultiplier,
                            style: { color: u },
                            variant: "text-sm/bold",
                            children: v.intl.format(v.t["6bgVlq"], { multiplier: n }),
                        }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(x.comboSquare, x.left),
                                        style: { backgroundColor: u },
                                    }),
                                    (0, i.jsx)("div", {
                                        className: a()(x.comboSquare, x.right),
                                        style: { backgroundColor: u },
                                    }),
                                ],
                            }),
                        s &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(x.confettiIcon, x.left),
                                        children: (0, i.jsx)(m.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: a()(x.confettiIcon, x.right),
                                        children: (0, i.jsx)(m.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, i.jsx)(c.Text, {
                                className: x.tip,
                                variant: "text-sm/bold",
                                children: v.intl.string(v.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    E = r.memo(function (e) {
        let { channelId: t } = e,
            n = (0, s.e7)([h.default], () => h.default.getId()),
            l = (0, s.e7)([f.Z], () => f.Z.isTyping(t, n), [t, n]),
            a = (0, s.e7)([b.Z], () => b.Z.isEnabled()),
            d = (0, s.e7)([C.ZP], () => C.ZP.isComboing(n, t), [t, n]),
            { ref: p, width: m = 0 } = (0, u.ZP)(),
            [g, y] = r.useState(!1),
            v = (0, _.Z)(t),
            E = a && d && l;
        r.useEffect(() => {
            E && y(!0);
            let e = setTimeout(() => y(E), 1000);
            return () => clearTimeout(e);
        }, [E]);
        let S = (0, c.q_F)({
                opacity: +!!g,
                transform: g ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: o.config.stiff,
            }),
            P = r.useMemo(
                () =>
                    null != v
                        ? v
                        : {
                              value: 0,
                              multiplier: 1,
                          },
                [v],
            ),
            I = r.useRef(P);
        r.useEffect(() => {
            (P.multiplier > 1 || P.value > 0) && (I.current = P);
        }, [P]);
        let { multiplier: Z, value: T } = r.useMemo(
            () => ({
                value: E ? P.value : I.current.value,
                multiplier: E ? P.multiplier : I.current.multiplier,
            }),
            [E, P, I],
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O, {
                    channelId: t,
                    width: m,
                }),
                (0, i.jsx)(o.animated.div, {
                    ref: p,
                    className: x.combo,
                    style: S,
                    children: (0, i.jsx)(j, {
                        value: T,
                        multiplier: Z,
                    }),
                }),
            ],
        });
    });
