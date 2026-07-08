t.d(n, { A: () => x });
var l = t(627968),
    i = t(64700),
    s = t(305866),
    a = t(849516),
    r = t(834730),
    o = t(939249),
    c = t(972213),
    u = t(355622),
    d = t(408018),
    A = t(138617),
    h = t(7584),
    m = t(408822),
    C = t(662731),
    E = t(375708),
    p = t(691053);
function x(e) {
    let { channel: n, onClose: t } = e,
        [x, g] = (0, i.useState)(""),
        [I, f] = (0, i.useState)(""),
        [T, v] = (0, i.useState)((0, d.x7)("")),
        [j, _] = (0, i.useState)(!1);
    return (0, l.jsxs)(s.l, {
        className: p.kL,
        children: [
            (0, l.jsxs)("div", {
                className: p.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: p.DD,
                        children: [
                            (0, l.jsx)(a.u, { size: "sm" }),
                            (0, l.jsx)(r.E, { variant: "text-sm/semibold", children: E.intl.string(E.t.PbMNh2) }),
                        ],
                    }),
                    (0, l.jsx)(o.D, { onClick: t, className: p.vk, children: (0, l.jsx)(c.d, { size: "sm" }) }),
                ],
            }),
            (0, l.jsx)("hr", { className: p.me }),
            (0, l.jsx)(A.Ay, {
                className: p.Kf,
                innerClassName: p.Kf,
                maxCharacterCount: 512,
                onChange: (e, n, t) => {
                    f(n), v(t), g(h.Ay.translateInlineEmojiToSurrogates(n));
                },
                placeholder: E.intl.string(C.default.IAcEEn),
                channel: n,
                textValue: I,
                richValue: T,
                type: u.oU.GUILD_ROOM,
                onFocus: () => {
                    _(!0);
                },
                onBlur: () => {
                    _(!1);
                },
                focused: j,
                onSubmit: () =>
                    0 === x.trim().length
                        ? new Promise((e) => {
                              e({ shouldClear: !1, shouldRefocus: !0 });
                          })
                        : ((0, m.Ix)(n.id, x),
                          new Promise((e) => {
                              e({ shouldClear: !0, shouldRefocus: !1 }), t();
                          })),
                disableThemedBackground: !0,
                showValueWhenDisabled: !0,
            }),
        ],
    });
}
