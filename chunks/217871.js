n.d(t, { Z: () => E }), n(388685), n(358797);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(666917),
    s = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    p = n(314897),
    h = n(111583),
    f = n(889901),
    m = n(64078),
    g = n(351780),
    b = n(843693),
    y = n(641033),
    C = n(989830),
    v = n(388032),
    _ = n(23586);
let O = r.memo(function (e) {
        let { channelId: t, width: n } = e,
            l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            a = (0, s.e7)([b.ZP], () => b.ZP.getMostRecentMessageCombo(t), [t]),
            [u, p] = r.useState(!1);
        r.useEffect(() => {
            if (null == a ? void 0 : a.displayed) return;
            p(!1),
                setImmediate(() => {
                    p((null != a ? (0, y.Eo)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                p(!1), null != a && (0, m.ew)(a);
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
                className: _.messageComboScore,
                style: f,
                children: (0, i.jsx)(c.Text, {
                    className: _.comboScore,
                    variant: "text-sm/bold",
                    children: (0, y.Eo)(a.combo),
                }),
            })
        );
    }),
    x = r.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: l, square: o, flair: s } = r.useMemo(() => (0, y.yz)(n), [n]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    className: _.comboValue,
                    variant: "text-sm/bold",
                    children: t,
                }),
                (0, i.jsxs)("div", {
                    className: _.comboNameplate,
                    style: { color: l },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: _.comboMultiplier,
                            style: { color: l },
                            variant: "text-sm/bold",
                            children: v.intl.format(v.t["6bgVlq"], { multiplier: n }),
                        }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(_.comboSquare, _.left),
                                        style: { backgroundColor: l },
                                    }),
                                    (0, i.jsx)("div", {
                                        className: a()(_.comboSquare, _.right),
                                        style: { backgroundColor: l },
                                    }),
                                ],
                            }),
                        s &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(_.confettiIcon, _.left),
                                        children: (0, i.jsx)(f.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: a()(_.confettiIcon, _.right),
                                        children: (0, i.jsx)(f.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, i.jsx)(c.Text, {
                                className: _.tip,
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
            n = (0, s.e7)([p.default], () => p.default.getId()),
            l = (0, s.e7)([h.Z], () => h.Z.isTyping(t, n), [t, n]),
            a = (0, s.e7)([g.Z], () => g.Z.isEnabled()),
            d = (0, s.e7)([b.ZP], () => b.ZP.isComboing(n, t), [t, n]),
            { ref: f, width: m = 0 } = (0, u.ZP)(),
            [y, v] = r.useState(!1),
            E = (0, C.Z)(t),
            j = a && d && l;
        r.useEffect(() => {
            j && v(!0);
            let e = setTimeout(() => v(j), 1000);
            return () => clearTimeout(e);
        }, [j]);
        let S = (0, c.q_F)({
                opacity: +!!y,
                transform: y ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: o.config.stiff,
            }),
            P = r.useMemo(
                () =>
                    null != E
                        ? E
                        : {
                              value: 0,
                              multiplier: 1,
                          },
                [E],
            ),
            I = r.useRef(P);
        r.useEffect(() => {
            (P.multiplier > 1 || P.value > 0) && (I.current = P);
        }, [P]);
        let { multiplier: Z, value: T } = r.useMemo(
            () => ({
                value: j ? P.value : I.current.value,
                multiplier: j ? P.multiplier : I.current.multiplier,
            }),
            [j, P, I],
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O, {
                    channelId: t,
                    width: m,
                }),
                (0, i.jsx)(o.animated.div, {
                    ref: f,
                    className: _.combo,
                    style: S,
                    children: (0, i.jsx)(x, {
                        value: T,
                        multiplier: Z,
                    }),
                }),
            ],
        });
    });
