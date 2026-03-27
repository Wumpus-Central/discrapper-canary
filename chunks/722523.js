n.d(t, { Ay: () => v, GU: () => A });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(732955),
    o = n(438874),
    a = n(363487),
    u = n(439156),
    d = n(689906),
    c = n(224331),
    p = n(568065),
    _ = n(333354),
    m = n(985018),
    f = n(58962);
function A(e) {
    let { className: t, guildId: n, powerup: i, onClick: o } = e,
        a = (0, d.A)(n, i),
        u = (0, c.A)(n, i),
        A = p.HO.has(i.skuId);
    return (0, r.jsx)("div", {
        className: l()(f.FS, t),
        children: (0, r.jsx)(s.$nd, {
            variant: "primary",
            fullWidth: !0,
            text: A ? m.intl.string(_.default.g5Ds69) : m.intl.string(m.t["0Q61kF"]),
            onClick: (e) => {
                o?.(e), A ? a?.(e) : u?.();
            },
        }),
    });
}
function g(e) {
    let { className: t, guildId: n, powerup: i } = e,
        o = (0, c.A)(n, i);
    return (0, r.jsx)("div", {
        className: l()(f.kL, t),
        children: (0, r.jsx)("div", {
            className: f.FS,
            children: (0, r.jsx)(s.$nd, {
                variant: "primary",
                fullWidth: !0,
                text: i.type === p.o9.LEVEL ? m.intl.string(m.t["0Q61kF"]) : m.intl.string(m.t.Xa11Ep),
                onClick: o,
            }),
        }),
    });
}
function x(e) {
    let { className: t, guildId: n, powerup: i, expressiveCta: s, onError: a } = e,
        { showToggleButton: d, isPowerupActive: c } = (0, o.A)(n, i),
        p = !c;
    return (0, r.jsxs)("div", {
        className: l()(f.kL, t),
        children: [
            d && (0, r.jsx)(u.A, { guildId: n, powerup: i, onError: a, grow: p, compact: !p, expressiveCta: s }),
            c && (0, r.jsx)(A, { guildId: n, powerup: i }),
        ],
    });
}
function v(e) {
    let { ...t } = e;
    return (0, a.A)(t.guildId) ? (0, r.jsx)(x, { ...t }) : (0, r.jsx)(g, { ...t });
}
