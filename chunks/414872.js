"use strict";
n.d(t, { Ay: () => y, ap: () => I, kg: () => E });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(554146),
    u = n(366010),
    c = n(194261),
    d = n(604121),
    h = n(403581),
    m = n(834730),
    f = n(736653),
    p = n(775602),
    g = n(131607),
    x = n(49999),
    A = n(375708),
    C = n(175655);
let E = 41;
function I() {
    let e = (0, a.bG)([p.Ay], () => p.Ay.useReducedMotion),
        [t, s] = (0, g.kn)([o.M.TRIAL_NUX_EMOJI_PICKER]),
        u = t === o.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                u && s(x.i.TAKE_ACTION);
            },
            [u, s],
        ),
        (0, l.jsxs)("div", {
            className: r()(C.gg, C.sk),
            children: [
                (0, l.jsx)("div", { className: C.d6 }),
                (0, l.jsx)("div", { className: r()(C.FV, C.ys, { [C.VN]: e || !u }) }),
                (0, l.jsxs)("div", {
                    className: C.tP,
                    children: [
                        (0, l.jsx)("div", { className: C.Mq }),
                        !e &&
                            u &&
                            (0, l.jsx)(d.a, {
                                className: C.UV,
                                loop: !1,
                                importData: () => n.e("131838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, l.jsxs)("div", {
                            className: r()(C.bl, { [C.VN]: e || !u }),
                            children: [
                                (0, l.jsx)(h.t, { size: "xs", color: "white" }),
                                (0, l.jsx)(m.E, {
                                    variant: "text-xs/medium",
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    children: A.intl.string(A.t["BMw+7I"]),
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
let y = function (e) {
    let { className: t } = e,
        n = (0, f.Ay)(),
        i = (0, u.q)(n);
    return (0, l.jsxs)("div", {
        className: r()(C.gg, t),
        children: [
            (0, l.jsx)("div", { className: C.d6 }),
            (0, l.jsx)("div", { className: C.FV }),
            (0, l.jsxs)("div", {
                className: C.tP,
                children: [
                    (0, l.jsx)("div", { className: C.Mq }),
                    (0, l.jsx)("div", {
                        className: C._Y,
                        children: (0, l.jsx)(c.X, { size: "xs", color: i ? "black" : "white" }),
                    }),
                    (0, l.jsx)("div", { className: C.Ss }),
                ],
            }),
            (0, l.jsx)("div", { className: C.KI }),
        ],
    });
};
