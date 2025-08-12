n.d(t, { Z: () => N }), n(388685), n(358797);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(717976),
    l = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    f = n(44315),
    _ = n(314897),
    p = n(111583),
    h = n(889901),
    m = n(64078),
    g = n(351780),
    E = n(339478),
    b = n(641033),
    y = n(989830),
    O = n(388032),
    v = n(605696);
let I = 1000,
    T = 2000,
    S = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            o = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            a = (0, l.e7)([E.ZP], () => E.ZP.getMostRecentMessageCombo(t), [t]),
            [u, f] = i.useState(!1);
        i.useEffect(() => {
            if (null == a ? void 0 : a.displayed) return;
            f(!1),
                setImmediate(() => {
                    f((null != a ? (0, b.Eo)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                f(!1), null != a && (0, m.ew)(a);
            }, T);
            return () => clearTimeout(e);
        }, [a]);
        let _ = null != a ? "100%" : "200%",
            p = (0, c.q_F)(
                {
                    opacity: +!!u,
                    translateY: u ? "0" : _,
                    pointerEvents: "none",
                    width: n,
                    config: o ? s.config.stiff : s.config.slow,
                },
                "animate-always",
            );
        return (
            null != a &&
            (0, r.jsx)(s.animated.div, {
                className: v.messageComboScore,
                style: p,
                children: (0, r.jsx)(c.Text, {
                    className: v.comboScore,
                    variant: "text-sm/bold",
                    children: (0, b.Eo)(a.combo),
                }),
            })
        );
    }),
    A = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: o, square: s, flair: l } = i.useMemo(() => (0, b.yz)(n), [n]),
            u = (0, f.Lq)(o);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Text, {
                    className: v.comboValue,
                    variant: "text-sm/bold",
                    children: t,
                }),
                (0, r.jsxs)("div", {
                    className: v.comboNameplate,
                    style: { color: u },
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: v.comboMultiplier,
                            style: { color: u },
                            variant: "text-sm/bold",
                            children: O.intl.format(O.t["6bgVlp"], { multiplier: n }),
                        }),
                        s &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(v.comboSquare, v.left),
                                        style: { backgroundColor: u },
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(v.comboSquare, v.right),
                                        style: { backgroundColor: u },
                                    }),
                                ],
                            }),
                        l &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(v.confettiIcon, v.left),
                                        children: (0, r.jsx)(h.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(v.confettiIcon, v.right),
                                        children: (0, r.jsx)(h.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, r.jsx)(c.Text, {
                                className: v.tip,
                                variant: "text-sm/bold",
                                children: O.intl.string(O.t.b5Cpoa),
                            }),
                    ],
                }),
            ],
        });
    }),
    N = i.memo(function (e) {
        let { channelId: t } = e,
            n = (0, l.e7)([_.default], () => _.default.getId()),
            o = (0, l.e7)([p.Z], () => p.Z.isTyping(t, n), [t, n]),
            a = (0, l.e7)([g.Z], () => g.Z.isEnabled()),
            d = (0, l.e7)([E.ZP], () => E.ZP.isComboing(n, t), [t, n]),
            { ref: f, width: h = 0 } = (0, u.ZP)(),
            [m, b] = i.useState(!1),
            O = (0, y.Z)(t),
            T = a && d && o;
        i.useEffect(() => {
            T && b(!0);
            let e = setTimeout(() => b(T), I);
            return () => clearTimeout(e);
        }, [T]);
        let N = (0, c.q_F)({
                opacity: +!!m,
                transform: m ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: s.config.stiff,
            }),
            C = i.useMemo(
                () =>
                    null != O
                        ? O
                        : {
                              value: 0,
                              multiplier: 1,
                          },
                [O],
            ),
            R = i.useRef(C);
        i.useEffect(() => {
            (C.multiplier > 1 || C.value > 0) && (R.current = C);
        }, [C]);
        let { multiplier: P, value: w } = i.useMemo(
            () => ({
                value: T ? C.value : R.current.value,
                multiplier: T ? C.multiplier : R.current.multiplier,
            }),
            [T, C, R],
        );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(S, {
                    channelId: t,
                    width: h,
                }),
                (0, r.jsx)(s.animated.div, {
                    ref: f,
                    className: v.combo,
                    style: N,
                    children: (0, r.jsx)(A, {
                        value: w,
                        multiplier: P,
                    }),
                }),
            ],
        });
    });
