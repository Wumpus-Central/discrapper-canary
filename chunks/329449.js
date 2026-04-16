n.d(t, { A: () => T }), n(142703);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(407045),
    o = n(311907),
    c = n(397927),
    d = n(765671),
    u = n(775602),
    h = n(961350),
    m = n(741961),
    A = n(682174),
    g = n(928830),
    _ = n(3137),
    p = n(559908),
    f = n(103640),
    E = n(924177),
    C = n(985018),
    x = n(51940);
let S = l.memo(function (e) {
        let { channelId: t, width: n } = e,
            a = (0, o.bG)([u.A], () => u.A.useReducedMotion),
            s = (0, o.bG)([p.Ay], () => p.Ay.getMostRecentMessageCombo(t), [t]),
            [d, h] = l.useState(!1);
        l.useEffect(() => {
            if (s?.displayed) return;
            h(!1),
                setImmediate(() => {
                    h((null != s ? (0, f.RL)(s.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                h(!1), null != s && (0, g.Nu)(s);
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
                    children: (0, f.RL)(s.combo),
                }),
            })
        );
    }),
    I = l.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: a, square: r, flair: o } = l.useMemo(() => (0, f.HN)(n), [n]);
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
    T = l.memo(function (e) {
        let { channelId: t } = e,
            n = (0, o.bG)([h.default], () => h.default.getId()),
            a = (0, o.bG)([m.A], () => m.A.isTyping(t, n), [t, n]),
            s = (0, o.bG)([_.A], () => _.A.isEnabled()),
            u = (0, o.bG)([p.Ay], () => p.Ay.isComboing(n, t), [t, n]),
            { ref: A, width: g = 0 } = (0, d.Ay)(),
            [f, C] = l.useState(!1),
            T = (0, E.A)(t),
            v = s && u && a;
        l.useEffect(() => {
            v && C(!0);
            let e = setTimeout(() => C(v), 1e3);
            return () => clearTimeout(e);
        }, [v]);
        let N = (0, c.zhh)({
                opacity: +!!f,
                transform: f ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: r.config.stiff,
            }),
            y = l.useMemo(() => T ?? { value: 0, multiplier: 1 }, [T]),
            b = l.useRef(y);
        l.useEffect(() => {
            (y.multiplier > 1 || y.value > 0) && (b.current = y);
        }, [y]);
        let { multiplier: j, value: R } = l.useMemo(
            () => ({ value: v ? y.value : b.current.value, multiplier: v ? y.multiplier : b.current.multiplier }),
            [v, y, b],
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S, { channelId: t, width: g }),
                (0, i.jsx)(r.animated.div, {
                    ref: A,
                    className: x.p_,
                    style: N,
                    children: (0, i.jsx)(I, { value: R, multiplier: j }),
                }),
            ],
        });
    });
