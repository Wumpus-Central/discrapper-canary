n.d(t, {
    A: () => C,
}),
    n(896048),
    n(142703);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(92674),
    o = n(311907),
    c = n(397927),
    u = n(765671),
    d = n(775602),
    h = n(961350),
    p = n(741961),
    f = n(682174),
    m = n(928830),
    g = n(3137),
    A = n(559908),
    b = n(103640),
    _ = n(924177),
    y = n(985018),
    v = n(733313);
let E = r.memo(function (e) {
        let { channelId: t, width: n } = e,
            i = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            a = (0, o.bG)([A.Ay], () => A.Ay.getMostRecentMessageCombo(t), [t]),
            [u, h] = r.useState(!1);
        r.useEffect(() => {
            if (null == a ? void 0 : a.displayed) return;
            h(!1),
                setImmediate(() => {
                    h((null != a ? (0, b.RL)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                h(!1), null != a && (0, m.Nu)(a);
            }, 2e3);
            return () => clearTimeout(e);
        }, [a]);
        let p = null != a ? "100%" : "200%",
            f = (0, c.zhh)(
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
            (0, l.jsx)(s.animated.div, {
                className: v.Gi,
                style: f,
                children: (0, l.jsx)(c.Text, {
                    className: v.fX,
                    variant: "text-sm/bold",
                    children: (0, b.RL)(a.combo),
                }),
            })
        );
    }),
    O = r.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: i, square: s, flair: o } = r.useMemo(() => (0, b.HN)(n), [n]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(c.Text, {
                    className: v.iR,
                    variant: "text-sm/bold",
                    children: t,
                }),
                (0, l.jsxs)("div", {
                    className: v._Z,
                    style: {
                        color: i,
                    },
                    children: [
                        (0, l.jsx)(c.Text, {
                            className: v.On,
                            style: {
                                color: i,
                            },
                            variant: "text-sm/bold",
                            children: y.intl.format(y.t["6bgVlq"], {
                                multiplier: n,
                            }),
                        }),
                        s &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: a()(v.QA, v.kb),
                                        style: {
                                            backgroundColor: i,
                                        },
                                    }),
                                    (0, l.jsx)("div", {
                                        className: a()(v.QA, v.pG),
                                        style: {
                                            backgroundColor: i,
                                        },
                                    }),
                                ],
                            }),
                        o &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: a()(v.ox, v.kb),
                                        children: (0, l.jsx)(f.A, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: a()(v.ox, v.pG),
                                        children: (0, l.jsx)(f.A, {
                                            width: 24,
                                            height: 24,
                                        }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, l.jsx)(c.Text, {
                                className: v.uN,
                                variant: "text-sm/bold",
                                children: y.intl.string(y.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    C = r.memo(function (e) {
        let { channelId: t } = e,
            n = (0, o.bG)([h.default], () => h.default.getId()),
            i = (0, o.bG)([p.A], () => p.A.isTyping(t, n), [t, n]),
            a = (0, o.bG)([g.A], () => g.A.isEnabled()),
            d = (0, o.bG)([A.Ay], () => A.Ay.isComboing(n, t), [t, n]),
            { ref: f, width: m = 0 } = (0, u.Ay)(),
            [b, y] = r.useState(!1),
            C = (0, _.A)(t),
            S = a && d && i;
        r.useEffect(() => {
            S && y(!0);
            let e = setTimeout(() => y(S), 1e3);
            return () => clearTimeout(e);
        }, [S]);
        let x = (0, c.zhh)({
                opacity: +!!b,
                transform: b ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: s.config.stiff,
            }),
            j = r.useMemo(
                () =>
                    null != C
                        ? C
                        : {
                              value: 0,
                              multiplier: 1,
                          },
                [C],
            ),
            I = r.useRef(j);
        r.useEffect(() => {
            (j.multiplier > 1 || j.value > 0) && (I.current = j);
        }, [j]);
        let { multiplier: T, value: N } = r.useMemo(
            () => ({
                value: S ? j.value : I.current.value,
                multiplier: S ? j.multiplier : I.current.multiplier,
            }),
            [S, j, I],
        );
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(E, {
                    channelId: t,
                    width: m,
                }),
                (0, l.jsx)(s.animated.div, {
                    ref: f,
                    className: v.p_,
                    style: x,
                    children: (0, l.jsx)(O, {
                        value: N,
                        multiplier: T,
                    }),
                }),
            ],
        });
    });
