"use strict";
n.d(t, { Ay: () => I, ap: () => E, kg: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(554146),
    c = n(366010),
    u = n(194261),
    d = n(604121),
    h = n(403581),
    m = n(834730),
    p = n(736653),
    f = n(775602),
    g = n(932001),
    _ = n(49999),
    x = n(985018),
    A = n(344767);
let C = 41;
function E() {
    let e = (0, a.bG)([f.A], () => f.A.useReducedMotion),
        [t, s] = (0, g.kn)([o.M.TRIAL_NUX_EMOJI_PICKER]),
        c = t === o.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        l.useEffect(
            () => () => {
                c && s(_.i.TAKE_ACTION);
            },
            [c, s],
        ),
        (0, i.jsxs)("div", {
            className: r()(A.gg, A.sk),
            children: [
                (0, i.jsx)("div", { className: A.d6 }),
                (0, i.jsx)("div", { className: r()(A.FV, A.ys, { [A.VN]: e || !c }) }),
                (0, i.jsxs)("div", {
                    className: A.tP,
                    children: [
                        (0, i.jsx)("div", { className: A.Mq }),
                        !e &&
                            c &&
                            (0, i.jsx)(d.a, {
                                className: A.UV,
                                loop: !1,
                                importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, i.jsxs)("div", {
                            className: r()(A.bl, { [A.VN]: e || !c }),
                            children: [
                                (0, i.jsx)(h.t, { size: "xs", color: "white" }),
                                (0, i.jsx)(m.E, {
                                    variant: "text-xs/medium",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: x.intl.string(x.t["BMw+7I"]),
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
let I = function (e) {
    let { className: t } = e,
        n = (0, p.Ay)(),
        l = (0, c.q)(n);
    return (0, i.jsxs)("div", {
        className: r()(A.gg, t),
        children: [
            (0, i.jsx)("div", { className: A.d6 }),
            (0, i.jsx)("div", { className: A.FV }),
            (0, i.jsxs)("div", {
                className: A.tP,
                children: [
                    (0, i.jsx)("div", { className: A.Mq }),
                    (0, i.jsx)("div", {
                        className: A._Y,
                        children: (0, i.jsx)(u.X, { size: "xs", color: l ? "black" : "white" }),
                    }),
                    (0, i.jsx)("div", { className: A.Ss }),
                ],
            }),
            (0, i.jsx)("div", { className: A.KI }),
        ],
    });
};
