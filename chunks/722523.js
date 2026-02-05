n.d(t, { Ay: () => f, GU: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(732955),
    r = n(438874),
    o = n(363487),
    d = n(439156),
    c = n(689906),
    u = n(224331),
    h = n(568065),
    A = n(333354),
    g = n(985018),
    m = n(993747);
function p(e) {
    let { className: t, guildId: n, powerup: l, onClick: r } = e,
        o = (0, c.A)(n, l),
        d = (0, u.A)(n, l),
        p = h.HO.has(l.skuId);
    return (0, i.jsx)("div", {
        className: s()(m.FS, t),
        children: (0, i.jsx)(a.$nd, {
            variant: "primary",
            fullWidth: !0,
            text: p ? g.intl.string(A.default.g5Ds69) : g.intl.string(g.t["0Q61kF"]),
            onClick: (e) => {
                r?.(e), p ? o?.(e) : d?.();
            },
        }),
    });
}
function _(e) {
    let { className: t, guildId: n, powerup: l } = e,
        r = (0, u.A)(n, l);
    return (0, i.jsx)("div", {
        className: s()(m.kL, t),
        children: (0, i.jsx)("div", {
            className: m.FS,
            children: (0, i.jsx)(a.$nd, {
                variant: "primary",
                fullWidth: !0,
                text: l.type === h.o9.LEVEL ? g.intl.string(g.t["0Q61kF"]) : g.intl.string(g.t.Xa11Ep),
                onClick: r,
            }),
        }),
    });
}
function x(e) {
    let { className: t, guildId: n, powerup: l, onError: a } = e,
        { showToggleButton: o, isPowerupActive: c } = (0, r.A)(n, l),
        u = !c;
    return (0, i.jsxs)("div", {
        className: s()(m.kL, t),
        children: [
            o && (0, i.jsx)(d.A, { guildId: n, powerup: l, onError: a, grow: u, compact: !u }),
            c && (0, i.jsx)(p, { guildId: n, powerup: l }),
        ],
    });
}
function f(e) {
    let { ...t } = e;
    return (0, o.A)(t.guildId) ? (0, i.jsx)(x, { ...t }) : (0, i.jsx)(_, { ...t });
}
