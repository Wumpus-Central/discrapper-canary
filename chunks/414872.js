n.d(t, {
    Ay: () => b,
    ap: () => E,
    kg: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(554146),
    c = n(397927),
    u = n(736653),
    d = n(775602),
    f = n(379848),
    p = n(49999),
    _ = n(985018),
    h = n(997994);
let m = 0.2,
    g = 41;
function E() {
    let e = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        [t, a] = (0, f.kn)([l.M.TRIAL_NUX_EMOJI_PICKER]),
        u = t === l.M.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                u && a(p.i.TAKE_ACTION);
            },
            [u, a],
        ),
        (0, r.jsxs)("div", {
            className: h.gg,
            children: [
                (0, r.jsx)("div", { className: h.d6 }),
                (0, r.jsx)("div", { className: s()(h.FV, h.ys, { [h.VN]: e || !u }) }),
                (0, r.jsxs)("div", {
                    className: h.tP,
                    children: [
                        (0, r.jsx)("div", { className: h.Mq }),
                        !e &&
                            u &&
                            (0, r.jsx)(c.akl, {
                                className: h.UV,
                                loop: !1,
                                importData: () => n.e("31838").then(n.t.bind(n, 650125, 19)),
                            }),
                        (0, r.jsxs)("div", {
                            className: s()(h.bl, { [h.VN]: e || !u }),
                            children: [
                                (0, r.jsx)(c.tvc, {
                                    size: "xs",
                                    color: "white",
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: _.intl.string(_.t["BMw+7I"]),
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
let b = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = m, enableBrandRefresh: a = !1 } = e,
        o = (0, u.Ay)(),
        l = (0, c.qB1)(o);
    return (0, r.jsxs)("div", {
        className: s()(h.gg, n),
        children: [
            (0, r.jsx)("div", { className: h.d6 }),
            (0, r.jsx)("div", {
                style: { opacity: a ? 0 : t },
                className: h.FV,
            }),
            (0, r.jsxs)("div", {
                className: h.tP,
                children: [
                    (0, r.jsx)("div", { className: s()(h.Mq, { [h.N4]: a }) }),
                    (0, r.jsx)("div", {
                        className: s()(h._Y, { [h.N4]: a }),
                        children: (0, r.jsx)(c.XAi, {
                            size: "xs",
                            color: a && l ? "black" : "white",
                        }),
                    }),
                    (0, r.jsx)("div", { className: s()(h.Ss, { [h.N4]: a }) }),
                ],
            }),
            (0, r.jsx)("div", {
                style: { opacity: a ? 1 : i },
                className: s()(h.KI, { [h.N4]: a }),
            }),
        ],
    });
};
