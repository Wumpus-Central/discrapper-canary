n.d(t, { Ay: () => C, ap: () => N, kg: () => p });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
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
    A = n(375708),
    _ = n(988864);
let p = 41;
function N() {
    let e = (0, a.bG)([I.Ay], () => I.Ay.useReducedMotion),
        [t, l] = (0, g.kn)([o.M.TRIAL_NUX_EMOJI_PICKER]),
        c = t === o.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        s.useEffect(
            () => () => {
                c && l(h.i.TAKE_ACTION);
            },
            [c, l],
        ),
        (0, i.jsxs)("div", {
            className: r()(_.gg, _.sk),
            children: [
                (0, i.jsx)("div", { className: _.d6 }),
                (0, i.jsx)("div", { className: r()(_.FV, _.ys, { [_.VN]: e || !c }) }),
                (0, i.jsxs)("div", {
                    className: _.tP,
                    children: [
                        (0, i.jsx)("div", { className: _.Mq }),
                        !e &&
                            c &&
                            (0, i.jsx)(d.a, {
                                className: _.UV,
                                loop: !1,
                                importData: () => n.e("131838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, i.jsxs)("div", {
                            className: r()(_.bl, { [_.VN]: e || !c }),
                            children: [
                                (0, i.jsx)(m.t, { size: "xs", color: "white" }),
                                (0, i.jsx)(f.E, {
                                    variant: "text-xs/medium",
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    children: A.intl.string(A.t["BMw+7I"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: _.Ss }),
                    ],
                }),
                (0, i.jsx)("div", { className: _.EL }),
            ],
        })
    );
}
let C = function (e) {
    let { className: t } = e,
        n = (0, E.Ay)(),
        s = (0, c.q)(n);
    return (0, i.jsxs)("div", {
        className: r()(_.gg, t),
        children: [
            (0, i.jsx)("div", { className: _.d6 }),
            (0, i.jsx)("div", { className: _.FV }),
            (0, i.jsxs)("div", {
                className: _.tP,
                children: [
                    (0, i.jsx)("div", { className: _.Mq }),
                    (0, i.jsx)("div", {
                        className: _._Y,
                        children: (0, i.jsx)(u.LockIcon, { size: "xs", color: s ? "black" : "white" }),
                    }),
                    (0, i.jsx)("div", { className: _.Ss }),
                ],
            }),
            (0, i.jsx)("div", { className: _.KI }),
        ],
    });
};
