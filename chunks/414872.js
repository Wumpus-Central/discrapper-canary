"use strict";
n.d(t, { Ay: () => g, ap: () => E, kg: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(554146),
    u = n(397927),
    c = n(736653),
    d = n(775602),
    _ = n(932001),
    f = n(49999),
    p = n(985018),
    h = n(188239);
let m = 41;
function E() {
    let e = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        [t, s] = (0, _.kn)([l.M.TRIAL_NUX_EMOJI_PICKER]),
        c = t === l.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                c && s(f.i.TAKE_ACTION);
            },
            [c, s],
        ),
        (0, r.jsxs)("div", {
            className: a()(h.gg, h.sk),
            children: [
                (0, r.jsx)("div", { className: h.d6 }),
                (0, r.jsx)("div", { className: a()(h.FV, h.ys, { [h.VN]: e || !c }) }),
                (0, r.jsxs)("div", {
                    className: h.tP,
                    children: [
                        (0, r.jsx)("div", { className: h.Mq }),
                        !e &&
                            c &&
                            (0, r.jsx)(u.akl, {
                                className: h.UV,
                                loop: !1,
                                importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, r.jsxs)("div", {
                            className: a()(h.bl, { [h.VN]: e || !c }),
                            children: [
                                (0, r.jsx)(u.tvc, { size: "xs", color: "white" }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: p.intl.string(p.t["BMw+7I"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", { className: h.Ss }),
                    ],
                }),
                (0, r.jsx)("div", { className: h.EL }),
            ],
        })
    );
}
let g = function (e) {
    let { className: t } = e,
        n = (0, c.Ay)(),
        i = (0, u.qB1)(n);
    return (0, r.jsxs)("div", {
        className: a()(h.gg, t),
        children: [
            (0, r.jsx)("div", { className: h.d6 }),
            (0, r.jsx)("div", { className: h.FV }),
            (0, r.jsxs)("div", {
                className: h.tP,
                children: [
                    (0, r.jsx)("div", { className: h.Mq }),
                    (0, r.jsx)("div", {
                        className: h._Y,
                        children: (0, r.jsx)(u.XAi, { size: "xs", color: i ? "black" : "white" }),
                    }),
                    (0, r.jsx)("div", { className: h.Ss }),
                ],
            }),
            (0, r.jsx)("div", { className: h.KI }),
        ],
    });
};
