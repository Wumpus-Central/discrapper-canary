"use strict";
n.d(t, { Ay: () => S, ap: () => g, kg: () => m });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(554146),
    d = n(366010),
    c = n(194261),
    u = n(604121),
    _ = n(403581),
    E = n(834730),
    A = n(736653),
    h = n(775602),
    I = n(131607),
    f = n(49999),
    p = n(375708),
    T = n(175655);
let m = 41;
function g() {
    let e = (0, l.bG)([h.Ay], () => h.Ay.useReducedMotion),
        [t, a] = (0, I.kn)([o.M.TRIAL_NUX_EMOJI_PICKER]),
        d = t === o.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        r.useEffect(
            () => () => {
                d && a(f.i.TAKE_ACTION);
            },
            [d, a],
        ),
        (0, i.jsxs)("div", {
            className: s()(T.gg, T.sk),
            children: [
                (0, i.jsx)("div", { className: T.d6 }),
                (0, i.jsx)("div", { className: s()(T.FV, T.ys, { [T.VN]: e || !d }) }),
                (0, i.jsxs)("div", {
                    className: T.tP,
                    children: [
                        (0, i.jsx)("div", { className: T.Mq }),
                        !e &&
                            d &&
                            (0, i.jsx)(u.a, {
                                className: T.UV,
                                loop: !1,
                                importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, i.jsxs)("div", {
                            className: s()(T.bl, { [T.VN]: e || !d }),
                            children: [
                                (0, i.jsx)(_.t, { size: "xs", color: "white" }),
                                (0, i.jsx)(E.E, {
                                    variant: "text-xs/medium",
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    children: p.intl.string(p.t["BMw+7I"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: T.Ss }),
                    ],
                }),
                (0, i.jsx)("div", { className: T.EL }),
            ],
        })
    );
}
let S = function (e) {
    let { className: t } = e,
        n = (0, A.Ay)(),
        r = (0, d.q)(n);
    return (0, i.jsxs)("div", {
        className: s()(T.gg, t),
        children: [
            (0, i.jsx)("div", { className: T.d6 }),
            (0, i.jsx)("div", { className: T.FV }),
            (0, i.jsxs)("div", {
                className: T.tP,
                children: [
                    (0, i.jsx)("div", { className: T.Mq }),
                    (0, i.jsx)("div", {
                        className: T._Y,
                        children: (0, i.jsx)(c.X, { size: "xs", color: r ? "black" : "white" }),
                    }),
                    (0, i.jsx)("div", { className: T.Ss }),
                ],
            }),
            (0, i.jsx)("div", { className: T.KI }),
        ],
    });
};
