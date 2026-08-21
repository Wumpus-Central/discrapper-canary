r.d(e, { Ay: () => L, GU: () => R });
var n = r(477900);
r(582128);
var s = r(503698),
    i = r.n(s),
    a = r(821609),
    l = r(438874),
    c = r(363487),
    u = r(439156),
    d = r(689906),
    o = r(224331),
    E = r(568065),
    p = r(794176),
    A = r(375708),
    _ = r(191137);
function R(t) {
    let { className: e, guildId: r, powerup: s, onClick: l } = t,
        c = (0, d.A)(r, s);
    return (0, n.jsx)("div", {
        className: i()(_.FS, e),
        children: (0, n.jsx)(a.$, {
            variant: "primary",
            fullWidth: !0,
            text: A.intl.string(p.default.g5Ds69),
            onClick: (t) => {
                l?.(t), c?.(t);
            },
        }),
    });
}
function x(t) {
    let { className: e, guildId: r, powerup: s, onClick: l } = t,
        c = (0, o.A)(r, s);
    return (0, n.jsx)("div", {
        className: i()(_.FS, e),
        children: (0, n.jsx)(a.$, {
            variant: "primary",
            fullWidth: !0,
            text: A.intl.string(A.t["0Q61kF"]),
            onClick: (t) => {
                l?.(t), c?.();
            },
        }),
    });
}
function I(t) {
    let { className: e, guildId: r, powerup: s } = t,
        l = (0, o.A)(r, s);
    return (0, n.jsx)("div", {
        className: i()(_.kL, e),
        children: (0, n.jsx)("div", {
            className: _.FS,
            children: (0, n.jsx)(a.$, {
                variant: "primary",
                fullWidth: !0,
                text: s.type === E.o9.LEVEL ? A.intl.string(A.t["0Q61kF"]) : A.intl.string(A.t.Xa11Ep),
                onClick: l,
            }),
        }),
    });
}
function O(t) {
    let { className: e, guildId: r, powerup: s, expressiveCta: a, onError: c } = t,
        { showToggleButton: d, isPowerupActive: o, showConfigureButton: E } = (0, l.A)(r, s);
    return (0, n.jsx)("div", {
        className: i()(_.kL, e),
        children: E
            ? (0, n.jsx)(R, { guildId: r, powerup: s })
            : o
              ? (0, n.jsx)(x, { guildId: r, powerup: s })
              : d
                ? (0, n.jsx)(u.A, { guildId: r, powerup: s, onError: c, grow: !0, compact: !1, expressiveCta: a })
                : null,
    });
}
function L(t) {
    let { ...e } = t;
    return (0, c.A)(e.guildId) ? (0, n.jsx)(O, { ...e }) : (0, n.jsx)(I, { ...e });
}
