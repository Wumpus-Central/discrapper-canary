n.d(t, { A: () => I }), n(142703);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(563495),
    o = n(311907),
    c = n(397927),
    d = n(765671),
    u = n(775602),
    h = n(961350),
    m = n(741961),
    A = n(682174),
    p = n(928830),
    g = n(3137),
    f = n(559908),
    _ = n(103640),
    E = n(924177),
    C = n(985018),
    x = n(733313);
let S = l.memo(function (e) {
        let { channelId: t, width: n } = e,
            a = (0, o.bG)([u.A], () => u.A.useReducedMotion),
            s = (0, o.bG)([f.Ay], () => f.Ay.getMostRecentMessageCombo(t), [t]),
            [d, h] = l.useState(!1);
        l.useEffect(() => {
            if (s?.displayed) return;
            h(!1),
                setImmediate(() => {
                    h((null != s ? (0, _.RL)(s.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                h(!1), null != s && (0, p.Nu)(s);
            }, 2e3);
            return () => clearTimeout(e);
        }, [s]);
        let m = null != s ? "100%" : "200%",
            A = (0, c.zhh)(
                {
                    opacity: +!!d,
                    translateY: d ? "0" : m,
                    pointerEvents: "none",
                    width: n,
                    config: a ? r.config.stiff : r.config.slow,
                },
                "animate-always",
            );
        return (
            null != s &&
            (0, i.jsx)(r.animated.div, {
                className: x.Gi,
                style: A,
                children: (0, i.jsx)(c.Text, {
                    className: x.fX,
                    variant: "text-sm/bold",
                    children: (0, _.RL)(s.combo),
                }),
            })
        );
    }),
    T = l.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: a, square: r, flair: o } = l.useMemo(() => (0, _.HN)(n), [n]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, { className: x.iR, variant: "text-sm/bold", children: t }),
                (0, i.jsxs)("div", {
                    className: x._Z,
                    style: { color: a },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: x.On,
                            style: { color: a },
                            variant: "text-sm/bold",
                            children: C.intl.format(C.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: s()(x.QA, x.kb), style: { backgroundColor: a } }),
                                    (0, i.jsx)("div", { className: s()(x.QA, x.pG), style: { backgroundColor: a } }),
                                ],
                            }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: s()(x.ox, x.kb),
                                        children: (0, i.jsx)(A.A, { width: 24, height: 24 }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: s()(x.ox, x.pG),
                                        children: (0, i.jsx)(A.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, i.jsx)(c.Text, {
                                className: x.uN,
                                variant: "text-sm/bold",
                                children: C.intl.string(C.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    I = l.memo(function (e) {
        let { channelId: t } = e,
            n = (0, o.bG)([h.default], () => h.default.getId()),
            a = (0, o.bG)([m.A], () => m.A.isTyping(t, n), [t, n]),
            s = (0, o.bG)([g.A], () => g.A.isEnabled()),
            u = (0, o.bG)([f.Ay], () => f.Ay.isComboing(n, t), [t, n]),
            { ref: A, width: p = 0 } = (0, d.Ay)(),
            [_, C] = l.useState(!1),
            I = (0, E.A)(t),
            N = s && u && a;
        l.useEffect(() => {
            N && C(!0);
            let e = setTimeout(() => C(N), 1e3);
            return () => clearTimeout(e);
        }, [N]);
        let v = (0, c.zhh)({
                opacity: +!!_,
                transform: _ ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: r.config.stiff,
            }),
            y = l.useMemo(() => I ?? { value: 0, multiplier: 1 }, [I]),
            b = l.useRef(y);
        l.useEffect(() => {
            (y.multiplier > 1 || y.value > 0) && (b.current = y);
        }, [y]);
        let { multiplier: R, value: j } = l.useMemo(
            () => ({ value: N ? y.value : b.current.value, multiplier: N ? y.multiplier : b.current.multiplier }),
            [N, y, b],
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S, { channelId: t, width: p }),
                (0, i.jsx)(r.animated.div, {
                    ref: A,
                    className: x.p_,
                    style: v,
                    children: (0, i.jsx)(T, { value: j, multiplier: R }),
                }),
            ],
        });
    });
