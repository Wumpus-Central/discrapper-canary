"use strict";
n.d(t, { Ay: () => A, ap: () => E, kg: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(554146),
    u = n(397927),
    c = n(736653),
    d = n(775602),
    _ = n(379848),
    f = n(49999),
    p = n(985018),
    h = n(997994);
let m = 0.2,
    g = 41;
function E() {
    let e = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        [t, a] = (0, _.kn)([l.M.TRIAL_NUX_EMOJI_PICKER]),
        c = t === l.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                c && a(f.i.TAKE_ACTION);
            },
            [c, a],
        ),
        (0, r.jsxs)("div", {
            className: h.gg,
            children: [
                (0, r.jsx)("div", { className: h.d6 }),
                (0, r.jsx)("div", { className: s()(h.FV, h.ys, { [h.VN]: e || !c }) }),
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
                            className: s()(h.bl, { [h.VN]: e || !c }),
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
let A = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = m, enableBrandRefresh: a = !1 } = e,
        o = (0, c.Ay)(),
        l = (0, u.qB1)(o);
    return (0, r.jsxs)("div", {
        className: s()(h.gg, n),
        children: [
            (0, r.jsx)("div", { className: h.d6 }),
            (0, r.jsx)("div", { style: { opacity: a ? 0 : t }, className: h.FV }),
            (0, r.jsxs)("div", {
                className: h.tP,
                children: [
                    (0, r.jsx)("div", { className: s()(h.Mq, { [h.N4]: a }) }),
                    (0, r.jsx)("div", {
                        className: s()(h._Y, { [h.N4]: a }),
                        children: (0, r.jsx)(u.XAi, { size: "xs", color: a && l ? "black" : "white" }),
                    }),
                    (0, r.jsx)("div", { className: s()(h.Ss, { [h.N4]: a }) }),
                ],
            }),
            (0, r.jsx)("div", { style: { opacity: a ? 1 : i }, className: s()(h.KI, { [h.N4]: a }) }),
        ],
    });
};
