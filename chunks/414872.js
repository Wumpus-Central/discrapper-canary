"use strict";
n.d(t, { Ay: () => S, ap: () => T, kg: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(554146),
    d = n(366010),
    _ = n(194261),
    u = n(604121),
    c = n(403581),
    E = n(834730),
    h = n(736653),
    m = n(775602),
    f = n(932001),
    g = n(49999),
    p = n(985018),
    A = n(344767);
let I = 41;
function T() {
    let e = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        [t, s] = (0, f.kn)([l.M.TRIAL_NUX_EMOJI_PICKER]),
        d = t === l.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        r.useEffect(
            () => () => {
                d && s(g.i.TAKE_ACTION);
            },
            [d, s],
        ),
        (0, i.jsxs)("div", {
            className: a()(A.gg, A.sk),
            children: [
                (0, i.jsx)("div", { className: A.d6 }),
                (0, i.jsx)("div", { className: a()(A.FV, A.ys, { [A.VN]: e || !d }) }),
                (0, i.jsxs)("div", {
                    className: A.tP,
                    children: [
                        (0, i.jsx)("div", { className: A.Mq }),
                        !e &&
                            d &&
                            (0, i.jsx)(u.a, {
                                className: A.UV,
                                loop: !1,
                                importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, i.jsxs)("div", {
                            className: a()(A.bl, { [A.VN]: e || !d }),
                            children: [
                                (0, i.jsx)(c.t, { size: "xs", color: "white" }),
                                (0, i.jsx)(E.E, {
                                    variant: "text-xs/medium",
                                    color: "always-white",
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
let S = function (e) {
    let { className: t } = e,
        n = (0, h.Ay)(),
        r = (0, d.q)(n);
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
                        children: (0, i.jsx)(_.X, { size: "xs", color: r ? "black" : "white" }),
                    }),
                    (0, i.jsx)("div", { className: A.Ss }),
                ],
            }),
            (0, i.jsx)("div", { className: A.KI }),
        ],
    });
};
