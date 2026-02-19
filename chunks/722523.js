"use strict";
n.d(t, { Ay: () => x, GU: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(732955),
    a = n(438874),
    o = n(363487),
    c = n(439156),
    d = n(689906),
    u = n(224331),
    h = n(568065),
    A = n(333354),
    p = n(985018),
    g = n(993747);
function m(e) {
    let { className: t, guildId: n, powerup: s, onClick: a } = e,
        o = (0, d.A)(n, s),
        c = (0, u.A)(n, s),
        m = h.HO.has(s.skuId);
    return (0, i.jsx)("div", {
        className: l()(g.FS, t),
        children: (0, i.jsx)(r.$nd, {
            variant: "primary",
            fullWidth: !0,
            text: m ? p.intl.string(A.default.g5Ds69) : p.intl.string(p.t["0Q61kF"]),
            onClick: (e) => {
                a?.(e), m ? o?.(e) : c?.();
            },
        }),
    });
}
function _(e) {
    let { className: t, guildId: n, powerup: s } = e,
        a = (0, u.A)(n, s);
    return (0, i.jsx)("div", {
        className: l()(g.kL, t),
        children: (0, i.jsx)("div", {
            className: g.FS,
            children: (0, i.jsx)(r.$nd, {
                variant: "primary",
                fullWidth: !0,
                text: s.type === h.o9.LEVEL ? p.intl.string(p.t["0Q61kF"]) : p.intl.string(p.t.Xa11Ep),
                onClick: a,
            }),
        }),
    });
}
function f(e) {
    let { className: t, guildId: n, powerup: s, onError: r } = e,
        { showToggleButton: o, isPowerupActive: d } = (0, a.A)(n, s),
        u = !d;
    return (0, i.jsxs)("div", {
        className: l()(g.kL, t),
        children: [
            o && (0, i.jsx)(c.A, { guildId: n, powerup: s, onError: r, grow: u, compact: !u }),
            d && (0, i.jsx)(m, { guildId: n, powerup: s }),
        ],
    });
}
function x(e) {
    let { ...t } = e;
    return (0, o.A)(t.guildId) ? (0, i.jsx)(f, { ...t }) : (0, i.jsx)(_, { ...t });
}
