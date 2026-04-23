"use strict";
n.d(t, { Ay: () => S, ap: () => T, kg: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(554146),
    u = n(366010),
    c = n(194261),
    d = n(604121),
    _ = n(403581),
    f = n(834730),
    p = n(736653),
    h = n(775602),
    E = n(932001),
    m = n(49999),
    g = n(985018),
    A = n(344767);
let I = 41;
function T() {
    let e = (0, o.bG)([h.A], () => h.A.useReducedMotion),
        [t, s] = (0, E.kn)([l.M.TRIAL_NUX_EMOJI_PICKER]),
        u = t === l.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                u && s(m.i.TAKE_ACTION);
            },
            [u, s],
        ),
        (0, r.jsxs)("div", {
            className: a()(A.gg, A.sk),
            children: [
                (0, r.jsx)("div", { className: A.d6 }),
                (0, r.jsx)("div", { className: a()(A.FV, A.ys, { [A.VN]: e || !u }) }),
                (0, r.jsxs)("div", {
                    className: A.tP,
                    children: [
                        (0, r.jsx)("div", { className: A.Mq }),
                        !e &&
                            u &&
                            (0, r.jsx)(d.a, {
                                className: A.UV,
                                loop: !1,
                                importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, r.jsxs)("div", {
                            className: a()(A.bl, { [A.VN]: e || !u }),
                            children: [
                                (0, r.jsx)(_.t, { size: "xs", color: "white" }),
                                (0, r.jsx)(f.E, {
                                    variant: "text-xs/medium",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: g.intl.string(g.t["BMw+7I"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", { className: A.Ss }),
                    ],
                }),
                (0, r.jsx)("div", { className: A.EL }),
            ],
        })
    );
}
let S = function (e) {
    let { className: t } = e,
        n = (0, p.Ay)(),
        i = (0, u.q)(n);
    return (0, r.jsxs)("div", {
        className: a()(A.gg, t),
        children: [
            (0, r.jsx)("div", { className: A.d6 }),
            (0, r.jsx)("div", { className: A.FV }),
            (0, r.jsxs)("div", {
                className: A.tP,
                children: [
                    (0, r.jsx)("div", { className: A.Mq }),
                    (0, r.jsx)("div", {
                        className: A._Y,
                        children: (0, r.jsx)(c.X, { size: "xs", color: i ? "black" : "white" }),
                    }),
                    (0, r.jsx)("div", { className: A.Ss }),
                ],
            }),
            (0, r.jsx)("div", { className: A.KI }),
        ],
    });
};
