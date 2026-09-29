r.d(e, { Ay: () => O, GU: () => f });
var n = r(477900);
r(582128);
var s = r(503698),
    a = r.n(s),
    i = r(821609),
    l = r(438874),
    u = r(363487),
    d = r(439156),
    c = r(689906),
    o = r(224331),
    E = r(568065),
    p = r(356863),
    _ = r(375708),
    R = r(191137);
function f(t) {
    let { className: e, guildId: r, powerup: s, onClick: l } = t,
        u = (0, c.A)(r, s);
    return (0, n.jsx)("div", {
        className: a()(R.FS, e),
        children: (0, n.jsx)(i.$, {
            variant: "primary",
            fullWidth: !0,
            text: _.intl.string(p.default.g5Ds69),
            onClick: (t) => {
                (l?.(t), u?.(t));
            },
        }),
    });
}
function x(t) {
    let { className: e, guildId: r, powerup: s, onClick: l } = t,
        u = (0, o.A)(r, s);
    return (0, n.jsx)("div", {
        className: a()(R.FS, e),
        children: (0, n.jsx)(i.$, {
            variant: "primary",
            fullWidth: !0,
            text: _.intl.string(_.t["0Q61kF"]),
            onClick: (t) => {
                (l?.(t), u?.());
            },
        }),
    });
}
function A(t) {
    let { className: e, guildId: r, powerup: s } = t,
        l = (0, o.A)(r, s);
    return (0, n.jsx)("div", {
        className: a()(R.kL, e),
        children: (0, n.jsx)("div", {
            className: R.FS,
            children: (0, n.jsx)(i.$, {
                variant: "primary",
                fullWidth: !0,
                text: s.type === E.o9.LEVEL ? _.intl.string(_.t["0Q61kF"]) : _.intl.string(_.t.Xa11Ep),
                onClick: l,
            }),
        }),
    });
}
function I(t) {
    let { className: e, guildId: r, powerup: s, expressiveCta: i, onError: u } = t,
        { showToggleButton: c, isPowerupActive: o, showConfigureButton: E } = (0, l.A)(r, s);
    return (0, n.jsx)("div", {
        className: a()(R.kL, e),
        children: E
            ? (0, n.jsx)(f, { guildId: r, powerup: s })
            : o
              ? (0, n.jsx)(x, { guildId: r, powerup: s })
              : c
                ? (0, n.jsx)(d.A, { guildId: r, powerup: s, onError: u, grow: !0, compact: !1, expressiveCta: i })
                : null,
    });
}
function O(t) {
    let { ...e } = t;
    return (0, u.A)(e.guildId) ? (0, n.jsx)(I, { ...e }) : (0, n.jsx)(A, { ...e });
}
