n.d(t, { Ay: () => v, GU: () => _ });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(821609),
    s = n(438874),
    o = n(363487),
    u = n(439156),
    d = n(689906),
    c = n(224331),
    p = n(568065),
    E = n(853513),
    A = n(375708),
    f = n(742786);
function _(e) {
    let { className: t, guildId: n, powerup: i, onClick: s } = e,
        o = (0, d.A)(n, i);
    return (0, l.jsx)("div", {
        className: r()(f.FS, t),
        children: (0, l.jsx)(a.$, {
            variant: "primary",
            fullWidth: !0,
            text: A.intl.string(E.default.g5Ds69),
            onClick: (e) => {
                s?.(e), o?.(e);
            },
        }),
    });
}
function y(e) {
    let { className: t, guildId: n, powerup: i, onClick: s } = e,
        o = (0, c.A)(n, i);
    return (0, l.jsx)("div", {
        className: r()(f.FS, t),
        children: (0, l.jsx)(a.$, {
            variant: "primary",
            fullWidth: !0,
            text: A.intl.string(A.t["0Q61kF"]),
            onClick: (e) => {
                s?.(e), o?.();
            },
        }),
    });
}
function I(e) {
    let { className: t, guildId: n, powerup: i } = e,
        s = (0, c.A)(n, i);
    return (0, l.jsx)("div", {
        className: r()(f.kL, t),
        children: (0, l.jsx)("div", {
            className: f.FS,
            children: (0, l.jsx)(a.$, {
                variant: "primary",
                fullWidth: !0,
                text: i.type === p.o9.LEVEL ? A.intl.string(A.t["0Q61kF"]) : A.intl.string(A.t.Xa11Ep),
                onClick: s,
            }),
        }),
    });
}
function g(e) {
    let { className: t, guildId: n, powerup: i, expressiveCta: a, onError: o } = e,
        { showToggleButton: d, isPowerupActive: c, showConfigureButton: p } = (0, s.A)(n, i);
    return (0, l.jsx)("div", {
        className: r()(f.kL, t),
        children: p
            ? (0, l.jsx)(_, { guildId: n, powerup: i })
            : c
              ? (0, l.jsx)(y, { guildId: n, powerup: i })
              : d
                ? (0, l.jsx)(u.A, { guildId: n, powerup: i, onError: o, grow: !0, compact: !1, expressiveCta: a })
                : null,
    });
}
function v(e) {
    let { ...t } = e;
    return (0, o.A)(t.guildId) ? (0, l.jsx)(g, { ...t }) : (0, l.jsx)(I, { ...t });
}
