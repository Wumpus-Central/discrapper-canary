n.d(t, { A: () => v }), n(142703);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(356197),
    o = n(311907),
    c = n(717421),
    d = n(834730),
    u = n(765671),
    h = n(775602),
    m = n(961350),
    A = n(741961),
    g = n(682174),
    p = n(928830),
    _ = n(3137),
    f = n(559908),
    E = n(103640),
    C = n(924177),
    x = n(985018),
    S = n(51940);
let I = l.memo(function (e) {
        let { channelId: t, width: n } = e,
            a = (0, o.bG)([h.A], () => h.A.useReducedMotion),
            s = (0, o.bG)([f.Ay], () => f.Ay.getMostRecentMessageCombo(t), [t]),
            [u, m] = l.useState(!1);
        l.useEffect(() => {
            if (s?.displayed) return;
            m(!1),
                setImmediate(() => {
                    m((null != s ? (0, E.RL)(s.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                m(!1), null != s && (0, p.Nu)(s);
            }, 2e3);
            return () => clearTimeout(e);
        }, [s]);
        let A = null != s ? "100%" : "200%",
            g = (0, c.z)(
                {
                    opacity: +!!u,
                    translateY: u ? "0" : A,
                    pointerEvents: "none",
                    width: n,
                    config: a ? r.config.stiff : r.config.slow,
                },
                "animate-always",
            );
        return (
            null != s &&
            (0, i.jsx)(r.animated.div, {
                className: S.Gi,
                style: g,
                children: (0, i.jsx)(d.E, { className: S.fX, variant: "text-sm/bold", children: (0, E.RL)(s.combo) }),
            })
        );
    }),
    N = l.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: a, square: r, flair: o } = l.useMemo(() => (0, E.HN)(n), [n]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.E, { className: S.iR, variant: "text-sm/bold", children: t }),
                (0, i.jsxs)("div", {
                    className: S._Z,
                    style: { color: a },
                    children: [
                        (0, i.jsx)(d.E, {
                            className: S.On,
                            style: { color: a },
                            variant: "text-sm/bold",
                            children: x.intl.format(x.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: s()(S.QA, S.kb), style: { backgroundColor: a } }),
                                    (0, i.jsx)("div", { className: s()(S.QA, S.pG), style: { backgroundColor: a } }),
                                ],
                            }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: s()(S.ox, S.kb),
                                        children: (0, i.jsx)(g.A, { width: 24, height: 24 }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: s()(S.ox, S.pG),
                                        children: (0, i.jsx)(g.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, i.jsx)(d.E, {
                                className: S.uN,
                                variant: "text-sm/bold",
                                children: x.intl.string(x.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    v = l.memo(function (e) {
        let { channelId: t } = e,
            n = (0, o.bG)([m.default], () => m.default.getId()),
            a = (0, o.bG)([A.A], () => A.A.isTyping(t, n), [t, n]),
            s = (0, o.bG)([_.A], () => _.A.isEnabled()),
            d = (0, o.bG)([f.Ay], () => f.Ay.isComboing(n, t), [t, n]),
            { ref: h, width: g = 0 } = (0, u.Ay)(),
            [p, E] = l.useState(!1),
            x = (0, C.A)(t),
            v = s && d && a;
        l.useEffect(() => {
            v && E(!0);
            let e = setTimeout(() => E(v), 1e3);
            return () => clearTimeout(e);
        }, [v]);
        let T = (0, c.z)({
                opacity: +!!p,
                transform: p ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: r.config.stiff,
            }),
            y = l.useMemo(() => x ?? { value: 0, multiplier: 1 }, [x]),
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
                (0, i.jsx)(I, { channelId: t, width: g }),
                (0, i.jsx)(r.animated.div, {
                    ref: h,
                    className: S.p_,
                    style: T,
                    children: (0, i.jsx)(N, { value: R, multiplier: j }),
                }),
            ],
        });
    });
