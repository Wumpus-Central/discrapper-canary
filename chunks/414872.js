"use strict";
n.d(t, { Ay: () => I, ap: () => E, kg: () => A });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
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
    C = n(344767);
let A = 41;
function E() {
    let e = (0, r.bG)([f.A], () => f.A.useReducedMotion),
        [t, s] = (0, g.kn)([o.M.TRIAL_NUX_EMOJI_PICKER]),
        c = t === o.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                c && s(_.i.TAKE_ACTION);
            },
            [c, s],
        ),
        (0, l.jsxs)("div", {
            className: a()(C.gg, C.sk),
            children: [
                (0, l.jsx)("div", { className: C.d6 }),
                (0, l.jsx)("div", { className: a()(C.FV, C.ys, { [C.VN]: e || !c }) }),
                (0, l.jsxs)("div", {
                    className: C.tP,
                    children: [
                        (0, l.jsx)("div", { className: C.Mq }),
                        !e &&
                            c &&
                            (0, l.jsx)(d.a, {
                                className: C.UV,
                                loop: !1,
                                importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, l.jsxs)("div", {
                            className: a()(C.bl, { [C.VN]: e || !c }),
                            children: [
                                (0, l.jsx)(h.t, { size: "xs", color: "white" }),
                                (0, l.jsx)(m.E, {
                                    variant: "text-xs/medium",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: x.intl.string(x.t["BMw+7I"]),
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", { className: C.Ss }),
                    ],
                }),
                (0, l.jsx)("div", { className: C.EL }),
            ],
        })
    );
}
let I = function (e) {
    let { className: t } = e,
        n = (0, p.Ay)(),
        i = (0, c.q)(n);
    return (0, l.jsxs)("div", {
        className: a()(C.gg, t),
        children: [
            (0, l.jsx)("div", { className: C.d6 }),
            (0, l.jsx)("div", { className: C.FV }),
            (0, l.jsxs)("div", {
                className: C.tP,
                children: [
                    (0, l.jsx)("div", { className: C.Mq }),
                    (0, l.jsx)("div", {
                        className: C._Y,
                        children: (0, l.jsx)(u.X, { size: "xs", color: i ? "black" : "white" }),
                    }),
                    (0, l.jsx)("div", { className: C.Ss }),
                ],
            }),
            (0, l.jsx)("div", { className: C.KI }),
        ],
    });
};
