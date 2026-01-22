n.d(t, {
    A: () => E,
}),
    n(896048),
    n(142703);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(108531),
    o = n(311907),
    c = n(397927),
    u = n(765671),
    d = n(775602),
    f = n(961350),
    p = n(741961),
    h = n(682174),
    b = n(928830),
    g = n(3137),
    m = n(559908),
    A = n(103640),
    y = n(924177),
    O = n(985018),
    j = n(733313);
let v = l.memo(function (e) {
        let { channelId: t, width: n } = e,
            i = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            a = (0, o.bG)([m.Ay], () => m.Ay.getMostRecentMessageCombo(t), [t]),
            [u, f] = l.useState(!1);
        l.useEffect(() => {
            if (null == a ? void 0 : a.displayed) return;
            f(!1),
                setImmediate(() => {
                    f((null != a ? (0, A.RL)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                f(!1), null != a && (0, b.Nu)(a);
            }, 2e3);
            return () => clearTimeout(e);
        }, [a]);
        let p = null != a ? "100%" : "200%",
            h = (0, c.zhh)(
                {
                    opacity: +!!u,
                    translateY: u ? "0" : p,
                    pointerEvents: "none",
                    width: n,
                    config: i ? s.config.stiff : s.config.slow,
                },
                "animate-always",
            );
        return (
            null != a &&
            (0, r.jsx)(s.animated.div, {
                className: j.Gi,
                style: h,
                children: (0, r.jsx)(c.Text, {
                    className: j.fX,
                    variant: "text-sm/bold",
                    children: (0, A.RL)(a.combo),
                }),
            })
        );
    }),
    x = l.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: i, square: s, flair: o } = l.useMemo(() => (0, A.HN)(n), [n]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Text, {
                    className: j.iR,
                    variant: "text-sm/bold",
                    children: t,
                }),
                (0, r.jsxs)("div", {
                    className: j._Z,
                    style: {
                        color: i,
                    },
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: j.On,
                            style: {
                                color: i,
                            },
                            variant: "text-sm/bold",
                            children: O.intl.format(O.t["6bgVlq"], {
                                multiplier: n,
                            }),
                        }),
                        s &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(j.QA, j.kb),
                                        style: {
                                            backgroundColor: i,
                                        },
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(j.QA, j.pG),
                                        style: {
                                            backgroundColor: i,
                                        },
                                    }),
                                ],
                            }),
                        o &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(j.ox, j.kb),
                                        children: (0, r.jsx)(h.A, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(j.ox, j.pG),
                                        children: (0, r.jsx)(h.A, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, r.jsx)(c.Text, {
                                className: j.uN,
                                variant: "text-sm/bold",
                                children: O.intl.string(O.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    E = l.memo(function (e) {
        let { channelId: t } = e,
            n = (0, o.bG)([f.default], () => f.default.getId()),
            i = (0, o.bG)([p.A], () => p.A.isTyping(t, n), [t, n]),
            a = (0, o.bG)([g.A], () => g.A.isEnabled()),
            d = (0, o.bG)([m.Ay], () => m.Ay.isComboing(n, t), [t, n]),
            { ref: h, width: b = 0 } = (0, u.Ay)(),
            [A, O] = l.useState(!1),
            E = (0, y.A)(t),
            _ = a && d && i;
        l.useEffect(() => {
            _ && O(!0);
            let e = setTimeout(() => O(_), 1e3);
            return () => clearTimeout(e);
        }, [_]);
        let C = (0, c.zhh)({
                opacity: +!!A,
                transform: A ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: s.config.stiff,
            }),
            S = l.useMemo(
                () =>
                    null != E
                        ? E
                        : {
                              value: 0,
                              multiplier: 1,
                          },
                [E],
            ),
            I = l.useRef(S);
        l.useEffect(() => {
            (S.multiplier > 1 || S.value > 0) && (I.current = S);
        }, [S]);
        let { multiplier: N, value: T } = l.useMemo(
            () => ({
                value: _ ? S.value : I.current.value,
                multiplier: _ ? S.multiplier : I.current.multiplier,
            }),
            [_, S, I],
        );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(v, {
                    channelId: t,
                    width: b,
                }),
                (0, r.jsx)(s.animated.div, {
                    ref: h,
                    className: j.p_,
                    style: C,
                    children: (0, r.jsx)(x, {
                        value: T,
                        multiplier: N,
                    }),
                }),
            ],
        });
    });
