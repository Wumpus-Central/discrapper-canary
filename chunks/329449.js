n.d(t, { A: () => T }), n(142703);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(497766),
    o = n(311907),
    c = n(397927),
    d = n(765671),
    u = n(775602),
    h = n(961350),
    m = n(741961),
    A = n(682174),
    g = n(928830),
    p = n(3137),
    f = n(559908),
    _ = n(103640),
    E = n(924177),
    x = n(985018),
    C = n(11239);
let S = l.memo(function (e) {
        let { channelId: t, width: n } = e,
            s = (0, o.bG)([u.A], () => u.A.useReducedMotion),
            a = (0, o.bG)([f.Ay], () => f.Ay.getMostRecentMessageCombo(t), [t]),
            [d, h] = l.useState(!1);
        l.useEffect(() => {
            if (a?.displayed) return;
            h(!1),
                setImmediate(() => {
                    h((null != a ? (0, _.RL)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                h(!1), null != a && (0, g.Nu)(a);
            }, 2e3);
            return () => clearTimeout(e);
        }, [a]);
        let m = null != a ? "100%" : "200%",
            A = (0, c.zhh)(
                {
                    opacity: +!!d,
                    translateY: d ? "0" : m,
                    pointerEvents: "none",
                    width: n,
                    config: s ? r.config.stiff : r.config.slow,
                },
                "animate-always",
            );
        return (
            null != a &&
            (0, i.jsx)(r.animated.div, {
                className: C.Gi,
                style: A,
                children: (0, i.jsx)(c.Text, {
                    className: C.fX,
                    variant: "text-sm/bold",
                    children: (0, _.RL)(a.combo),
                }),
            })
        );
    }),
    I = l.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: s, square: r, flair: o } = l.useMemo(() => (0, _.HN)(n), [n]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Text, { className: C.iR, variant: "text-sm/bold", children: t }),
                (0, i.jsxs)("div", {
                    className: C._Z,
                    style: { color: s },
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: C.On,
                            style: { color: s },
                            variant: "text-sm/bold",
                            children: x.intl.format(x.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: a()(C.QA, C.kb), style: { backgroundColor: s } }),
                                    (0, i.jsx)("div", { className: a()(C.QA, C.pG), style: { backgroundColor: s } }),
                                ],
                            }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(C.ox, C.kb),
                                        children: (0, i.jsx)(A.A, { width: 24, height: 24 }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: a()(C.ox, C.pG),
                                        children: (0, i.jsx)(A.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, i.jsx)(c.Text, {
                                className: C.uN,
                                variant: "text-sm/bold",
                                children: x.intl.string(x.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    T = l.memo(function (e) {
        let { channelId: t } = e,
            n = (0, o.bG)([h.default], () => h.default.getId()),
            s = (0, o.bG)([m.A], () => m.A.isTyping(t, n), [t, n]),
            a = (0, o.bG)([p.A], () => p.A.isEnabled()),
            u = (0, o.bG)([f.Ay], () => f.Ay.isComboing(n, t), [t, n]),
            { ref: A, width: g = 0 } = (0, d.Ay)(),
            [_, x] = l.useState(!1),
            T = (0, E.A)(t),
            N = a && u && s;
        l.useEffect(() => {
            N && x(!0);
            let e = setTimeout(() => x(N), 1e3);
            return () => clearTimeout(e);
        }, [N]);
        let y = (0, c.zhh)({
                opacity: +!!_,
                transform: _ ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: r.config.stiff,
            }),
            b = l.useMemo(() => T ?? { value: 0, multiplier: 1 }, [T]),
            v = l.useRef(b);
        l.useEffect(() => {
            (b.multiplier > 1 || b.value > 0) && (v.current = b);
        }, [b]);
        let { multiplier: j, value: R } = l.useMemo(
            () => ({ value: N ? b.value : v.current.value, multiplier: N ? b.multiplier : v.current.multiplier }),
            [N, b, v],
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S, { channelId: t, width: g }),
                (0, i.jsx)(r.animated.div, {
                    ref: A,
                    className: C.p_,
                    style: y,
                    children: (0, i.jsx)(I, { value: R, multiplier: j }),
                }),
            ],
        });
    });
