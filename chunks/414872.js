n.d(t, { Ay: () => C, ap: () => N, kg: () => _ });
var i = n(477900),
    s = n(582128),
    r = n(503698),
    l = n.n(r),
    a = n(17928),
    o = n(554146),
    c = n(366010),
    u = n(194261),
    d = n(604121),
    m = n(403581),
    f = n(834730),
    E = n(736653),
    I = n(775602),
    g = n(131607),
    h = n(49999),
    p = n(105292),
    A = n(988864);
let _ = 41;
function N() {
    let e = (0, a.bG)([I.Ay], () => I.Ay.useReducedMotion),
        [t, r] = (0, g.kn)([o.M.TRIAL_NUX_EMOJI_PICKER]),
        c = t === o.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        s.useEffect(
            () => () => {
                c && r(h.i.TAKE_ACTION);
            },
            [c, r],
        ),
        (0, i.jsxs)("div", {
            className: l()(A.gg, A.sk),
            children: [
                (0, i.jsx)("div", { className: A.d6 }),
                (0, i.jsx)("div", { className: l()(A.FV, A.ys, { [A.VN]: e || !c }) }),
                (0, i.jsxs)("div", {
                    className: A.tP,
                    children: [
                        (0, i.jsx)("div", { className: A.Mq }),
                        !e &&
                            c &&
                            (0, i.jsx)(d.a, {
                                className: A.UV,
                                loop: !1,
                                importData: () => n.e("131838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, i.jsxs)("div", {
                            className: l()(A.bl, { [A.VN]: e || !c }),
                            children: [
                                (0, i.jsx)(m.t, { size: "xs", color: "white" }),
                                (0, i.jsx)(f.E, {
                                    variant: "text-xs/medium",
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    children: p.intl.string(p.t["BMw+7I"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: A.Ss }),
                    ],
                }),
                (0, i.jsx)("div", { className: A.EL }),
            ],
        })
    );
}
let C = function (e) {
    let { className: t } = e,
        n = (0, E.Ay)(),
        s = (0, c.q)(n);
    return (0, i.jsxs)("div", {
        className: l()(A.gg, t),
        children: [
            (0, i.jsx)("div", { className: A.d6 }),
            (0, i.jsx)("div", { className: A.FV }),
            (0, i.jsxs)("div", {
                className: A.tP,
                children: [
                    (0, i.jsx)("div", { className: A.Mq }),
                    (0, i.jsx)("div", {
                        className: A._Y,
                        children: (0, i.jsx)(u.LockIcon, { size: "xs", color: s ? "black" : "white" }),
                    }),
                    (0, i.jsx)("div", { className: A.Ss }),
                ],
            }),
            (0, i.jsx)("div", { className: A.KI }),
        ],
    });
};
