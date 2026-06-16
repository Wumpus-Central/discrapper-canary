"use strict";
n.d(t, { Ay: () => S, ap: () => T, kg: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(554146),
    u = n(366010),
    c = n(194261),
    d = n(604121),
    _ = n(403581),
    h = n(834730),
    f = n(736653),
    p = n(775602),
    E = n(131607),
    m = n(49999),
    g = n(375708),
    A = n(344767);
let I = 41;
function T() {
    let e = (0, o.bG)([p.Ay], () => p.Ay.useReducedMotion),
        [t, s] = (0, E.kn)([l.M.TRIAL_NUX_EMOJI_PICKER]),
        u = t === l.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        r.useEffect(
            () => () => {
                u && s(m.i.TAKE_ACTION);
            },
            [u, s],
        ),
        (0, i.jsxs)("div", {
            className: a()(A.gg, A.sk),
            children: [
                (0, i.jsx)("div", { className: A.d6 }),
                (0, i.jsx)("div", { className: a()(A.FV, A.ys, { [A.VN]: e || !u }) }),
                (0, i.jsxs)("div", {
                    className: A.tP,
                    children: [
                        (0, i.jsx)("div", { className: A.Mq }),
                        !e &&
                            u &&
                            (0, i.jsx)(d.a, {
                                className: A.UV,
                                loop: !1,
                                importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, i.jsxs)("div", {
                            className: a()(A.bl, { [A.VN]: e || !u }),
                            children: [
                                (0, i.jsx)(_.t, { size: "xs", color: "white" }),
                                (0, i.jsx)(h.E, {
                                    variant: "text-xs/medium",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: g.intl.string(g.t["BMw+7I"]),
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
let S = function (e) {
    let { className: t } = e,
        n = (0, f.Ay)(),
        r = (0, u.q)(n);
    return (0, i.jsxs)("div", {
        className: a()(A.gg, t),
        children: [
            (0, i.jsx)("div", { className: A.d6 }),
            (0, i.jsx)("div", { className: A.FV }),
            (0, i.jsxs)("div", {
                className: A.tP,
                children: [
                    (0, i.jsx)("div", { className: A.Mq }),
                    (0, i.jsx)("div", {
                        className: A._Y,
                        children: (0, i.jsx)(c.X, { size: "xs", color: r ? "black" : "white" }),
                    }),
                    (0, i.jsx)("div", { className: A.Ss }),
                ],
            }),
            (0, i.jsx)("div", { className: A.KI }),
        ],
    });
};
