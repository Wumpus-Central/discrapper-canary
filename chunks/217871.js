n.d(t, { Z: () => j }), n(388685), n(358797);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(467721),
    s = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    p = n(314897),
    f = n(111583),
    h = n(889901),
    m = n(64078),
    g = n(351780),
    b = n(843693),
    C = n(641033),
    y = n(989830),
    v = n(388032),
    O = n(869121);
let x = r.memo(function (e) {
        let { channelId: t, width: n } = e,
            l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            a = (0, s.e7)([b.ZP], () => b.ZP.getMostRecentMessageCombo(t), [t]),
            [u, p] = r.useState(!1);
        r.useEffect(() => {
            if (null == a ? void 0 : a.displayed) return;
            p(!1),
                setImmediate(() => {
                    p((null != a ? (0, C.Eo)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                p(!1), null != a && (0, m.ew)(a);
            }, 2000);
            return () => clearTimeout(e);
        }, [a]);
        let f = null != a ? "100%" : "200%",
            h = (0, c.q_F)(
                {
                    opacity: +!!u,
                    translateY: u ? "0" : f,
                    pointerEvents: "none",
                    width: n,
                    config: l ? o.config.stiff : o.config.slow,
                },
                "animate-always",
            );
        return (
            null != a &&
            (0, i.jsx)(o.animated.div, {
                className: O.messageComboScore,
                style: h,
                children: (0, i.jsx)(c.Text, {
                    className: O.comboScore,
                    variant: "text-sm/bold",
                    children: (0, C.Eo)(a.combo),
                }),
            })
        );
    }),
    E = r.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: l, square: o, flair: s } = r.useMemo(() => (0, C.yz)(n), [n]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, {
                    className: O.comboValue,
                    variant: "text-sm/bold",
                    children: t,
                }),
                (0, i.jsxs)("div", {
                    className: O.comboNameplate,
                    style: { color: l },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: O.comboMultiplier,
                            style: { color: l },
                            variant: "text-sm/bold",
                            children: v.intl.format(v.t["6bgVlq"], { multiplier: n }),
                        }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(O.comboSquare, O.left),
                                        style: { backgroundColor: l },
                                    }),
                                    (0, i.jsx)("div", {
                                        className: a()(O.comboSquare, O.right),
                                        style: { backgroundColor: l },
                                    }),
                                ],
                            }),
                        s &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(O.confettiIcon, O.left),
                                        children: (0, i.jsx)(h.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: a()(O.confettiIcon, O.right),
                                        children: (0, i.jsx)(h.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, i.jsx)(c.Text, {
                                className: O.tip,
                                variant: "text-sm/bold",
                                children: v.intl.string(v.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    j = r.memo(function (e) {
        let { channelId: t } = e,
            n = (0, s.e7)([p.default], () => p.default.getId()),
            l = (0, s.e7)([f.Z], () => f.Z.isTyping(t, n), [t, n]),
            a = (0, s.e7)([g.Z], () => g.Z.isEnabled()),
            d = (0, s.e7)([b.ZP], () => b.ZP.isComboing(n, t), [t, n]),
            { ref: h, width: m = 0 } = (0, u.ZP)(),
            [C, v] = r.useState(!1),
            j = (0, y.Z)(t),
            S = a && d && l;
        r.useEffect(() => {
            S && v(!0);
            let e = setTimeout(() => v(S), 1000);
            return () => clearTimeout(e);
        }, [S]);
        let _ = (0, c.q_F)({
                opacity: +!!C,
                transform: C ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: o.config.stiff,
            }),
            P = r.useMemo(
                () =>
                    null != j
                        ? j
                        : {
                              value: 0,
                              multiplier: 1,
                          },
                [j],
            ),
            I = r.useRef(P);
        r.useEffect(() => {
            (P.multiplier > 1 || P.value > 0) && (I.current = P);
        }, [P]);
        let { multiplier: Z, value: T } = r.useMemo(
            () => ({
                value: S ? P.value : I.current.value,
                multiplier: S ? P.multiplier : I.current.multiplier,
            }),
            [S, P, I],
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x, {
                    channelId: t,
                    width: m,
                }),
                (0, i.jsx)(o.animated.div, {
                    ref: h,
                    className: O.combo,
                    style: _,
                    children: (0, i.jsx)(E, {
                        value: T,
                        multiplier: Z,
                    }),
                }),
            ],
        });
    });
