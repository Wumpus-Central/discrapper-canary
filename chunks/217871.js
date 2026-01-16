n.d(t, { Z: () => E }), n(388685), n(358797);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(81239),
    s = n(442837),
    c = n(481060),
    u = n(393238),
    d = n(607070),
    p = n(314897),
    f = n(111583),
    h = n(889901),
    g = n(64078),
    m = n(351780),
    b = n(843693),
    y = n(641033),
    v = n(989830),
    O = n(388032),
    j = n(869121);
let x = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            l = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            a = (0, s.e7)([b.ZP], () => b.ZP.getMostRecentMessageCombo(t), [t]),
            [u, p] = i.useState(!1);
        i.useEffect(() => {
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
            (0, r.jsx)(o.animated.div, {
                className: j.messageComboScore,
                style: h,
                children: (0, r.jsx)(c.Text, {
                    className: j.comboScore,
                    variant: "text-sm/bold",
                    children: (0, y.Eo)(a.combo),
                }),
            })
        );
    }),
    C = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: l, square: o, flair: s } = i.useMemo(() => (0, y.yz)(n), [n]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Text, {
                    className: j.comboValue,
                    variant: "text-sm/bold",
                    children: t,
                }),
                (0, r.jsxs)("div", {
                    className: j.comboNameplate,
                    style: { color: l },
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: j.comboMultiplier,
                            style: { color: l },
                            variant: "text-sm/bold",
                            children: O.intl.format(O.t["6bgVlq"], { multiplier: n }),
                        }),
                        o &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(j.comboSquare, j.left),
                                        style: { backgroundColor: l },
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(j.comboSquare, j.right),
                                        style: { backgroundColor: l },
                                    }),
                                ],
                            }),
                        s &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(j.confettiIcon, j.left),
                                        children: (0, r.jsx)(h.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(j.confettiIcon, j.right),
                                        children: (0, r.jsx)(h.Z, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, r.jsx)(c.Text, {
                                className: j.tip,
                                variant: "text-sm/bold",
                                children: O.intl.string(O.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    E = i.memo(function (e) {
        let { channelId: t } = e,
            n = (0, s.e7)([p.default], () => p.default.getId()),
            l = (0, s.e7)([f.Z], () => f.Z.isTyping(t, n), [t, n]),
            a = (0, s.e7)([m.Z], () => m.Z.isEnabled()),
            d = (0, s.e7)([b.ZP], () => b.ZP.isComboing(n, t), [t, n]),
            { ref: h, width: g = 0 } = (0, u.ZP)(),
            [y, O] = i.useState(!1),
            E = (0, v.Z)(t),
            S = a && d && l;
        i.useEffect(() => {
            S && O(!0);
            let e = setTimeout(() => O(S), 1000);
            return () => clearTimeout(e);
        }, [S]);
        let _ = (0, c.q_F)({
                opacity: +!!y,
                transform: y ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: o.config.stiff,
            }),
            I = i.useMemo(
                () =>
                    null != E
                        ? E
                        : {
                              value: 0,
                              multiplier: 1,
                          },
                [E],
            ),
            P = i.useRef(I);
        i.useEffect(() => {
            (I.multiplier > 1 || I.value > 0) && (P.current = I);
        }, [I]);
        let { multiplier: Z, value: N } = i.useMemo(
            () => ({
                value: S ? I.value : P.current.value,
                multiplier: S ? I.multiplier : P.current.multiplier,
            }),
            [S, I, P],
        );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x, {
                    channelId: t,
                    width: g,
                }),
                (0, r.jsx)(o.animated.div, {
                    ref: h,
                    className: j.combo,
                    style: _,
                    children: (0, r.jsx)(C, {
                        value: N,
                        multiplier: Z,
                    }),
                }),
            ],
        });
    });
