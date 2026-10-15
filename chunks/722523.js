r.d(i, { Ay: () => m, GU: () => k });
var n = r(477900);
r(582128);
var l = r(503698),
    s = r.n(l),
    e = r(821609),
    a = r(438874),
    d = r(363487),
    u = r(439156),
    c = r(689906),
    p = r(224331),
    o = r(568065),
    x = r(356863),
    h = r(105292),
    j = r(191137);
function k(t) {
    let { className: i, guildId: r, powerup: l, onClick: a } = t,
        d = (0, c.A)(r, l);
    return (0, n.jsx)("div", {
        className: s()(j.FS, i),
        children: (0, n.jsx)(e.$, {
            variant: "primary",
            fullWidth: !0,
            text: h.intl.string(x.default.g5Ds69),
            onClick: (t) => {
                (a?.(t), d?.(t));
            },
        }),
    });
}
function g(t) {
    let { className: i, guildId: r, powerup: l, onClick: a } = t,
        d = (0, p.A)(r, l);
    return (0, n.jsx)("div", {
        className: s()(j.FS, i),
        children: (0, n.jsx)(e.$, {
            variant: "primary",
            fullWidth: !0,
            text: h.intl.string(h.t["0Q61kF"]),
            onClick: (t) => {
                (a?.(t), d?.());
            },
        }),
    });
}
function v(t) {
    let { className: i, guildId: r, powerup: l } = t,
        a = (0, p.A)(r, l);
    return (0, n.jsx)("div", {
        className: s()(j.kL, i),
        children: (0, n.jsx)("div", {
            className: j.FS,
            children: (0, n.jsx)(e.$, {
                variant: "primary",
                fullWidth: !0,
                text: l.type === o.o9.LEVEL ? h.intl.string(h.t["0Q61kF"]) : h.intl.string(h.t.Xa11Ep),
                onClick: a,
            }),
        }),
    });
}
function f(t) {
    let { className: i, guildId: r, powerup: l, onError: e } = t,
        { showToggleButton: d, isPowerupActive: c, showConfigureButton: p } = (0, a.A)(r, l);
    return (0, n.jsx)("div", {
        className: s()(j.kL, i),
        children: p
            ? (0, n.jsx)(k, { guildId: r, powerup: l })
            : c
              ? (0, n.jsx)(g, { guildId: r, powerup: l })
              : d
                ? (0, n.jsx)(u.A, { guildId: r, powerup: l, onError: e, grow: !0, compact: !1 })
                : null,
    });
}
function m(t) {
    let { ...i } = t;
    return (0, d.A)(i.guildId) ? (0, n.jsx)(f, { ...i }) : (0, n.jsx)(v, { ...i });
}
