var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(855986),
    o = n(554146),
    c = n(366010),
    u = n(194261),
    d = n(604121),
    m = n(403581),
    f = n(834730),
    E = n(736653),
    I = n(775602),
    h = n(263775),
    g = n(49999),
    A = n(792996),
    p = n(988864);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { className: t } = e,
                n = (0, E.Ay)(),
                s = (0, c.q)(n);
            return (0, i.jsxs)("div", {
                className: r()(p.gg, t),
                children: [
                    (0, i.jsx)("div", { className: p.d6 }),
                    (0, i.jsx)("div", { className: p.FV }),
                    (0, i.jsxs)("div", {
                        className: p.tP,
                        children: [
                            (0, i.jsx)("div", { className: p.Mq }),
                            (0, i.jsx)("div", {
                                className: p._Y,
                                children: (0, i.jsx)(u.LockIcon, { size: "xs", color: s ? "black" : "white" }),
                            }),
                            (0, i.jsx)("div", { className: p.Ss }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: p.KI }),
                ],
            });
        },
        a: function () {
            let e = (0, a.bG)([I.Ay], () => I.Ay.useReducedMotion),
                [t, l] = (0, h.kn)([o.M.TRIAL_NUX_EMOJI_PICKER]),
                c = t === o.M.TRIAL_NUX_EMOJI_PICKER;
            return (
                s.useEffect(
                    () => () => {
                        c && l(g.i.TAKE_ACTION);
                    },
                    [c, l],
                ),
                (0, i.jsxs)("div", {
                    className: r()(p.gg, p.sk),
                    children: [
                        (0, i.jsx)("div", { className: p.d6 }),
                        (0, i.jsx)("div", { className: r()(p.FV, p.ys, { [p.VN]: e || !c }) }),
                        (0, i.jsxs)("div", {
                            className: p.tP,
                            children: [
                                (0, i.jsx)("div", { className: p.Mq }),
                                !e &&
                                    c &&
                                    (0, i.jsx)(d.a, {
                                        className: p.UV,
                                        loop: !1,
                                        importData: () => n.e(131838).then(n.t.bind(n, 650125, 19)),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: r()(p.bl, { [p.VN]: e || !c }),
                                    children: [
                                        (0, i.jsx)(m.NitroWheelIcon, { size: "xs", color: "white" }),
                                        (0, i.jsx)(f.E, {
                                            variant: "body-xs/medium",
                                            color: "text-overlay-light",
                                            lineClamp: 1,
                                            children: A.intl.string(A.t["BMw+7I"]),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: p.Ss }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: p.EL }),
                    ],
                })
            );
        },
    },
);
