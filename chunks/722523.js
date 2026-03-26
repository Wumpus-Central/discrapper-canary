"use strict";
n.d(t, { Ay: () => x, GU: () => g });
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
    m = n(985018),
    p = n(58962);
function g(e) {
    let { className: t, guildId: n, powerup: s, onClick: a } = e,
        o = (0, d.A)(n, s),
        c = (0, u.A)(n, s),
        g = h.HO.has(s.skuId);
    return (0, i.jsx)("div", {
        className: l()(p.FS, t),
        children: (0, i.jsx)(r.$nd, {
            variant: "primary",
            fullWidth: !0,
            text: g ? m.intl.string(A.default.g5Ds69) : m.intl.string(m.t["0Q61kF"]),
            onClick: (e) => {
                a?.(e), g ? o?.(e) : c?.();
            },
        }),
    });
}
function _(e) {
    let { className: t, guildId: n, powerup: s } = e,
        a = (0, u.A)(n, s);
    return (0, i.jsx)("div", {
        className: l()(p.kL, t),
        children: (0, i.jsx)("div", {
            className: p.FS,
            children: (0, i.jsx)(r.$nd, {
                variant: "primary",
                fullWidth: !0,
                text: s.type === h.o9.LEVEL ? m.intl.string(m.t["0Q61kF"]) : m.intl.string(m.t.Xa11Ep),
                onClick: a,
            }),
        }),
    });
}
function f(e) {
    let { className: t, guildId: n, powerup: s, expressiveCta: r, onError: o } = e,
        { showToggleButton: d, isPowerupActive: u } = (0, a.A)(n, s),
        h = !u;
    return (0, i.jsxs)("div", {
        className: l()(p.kL, t),
        children: [
            d && (0, i.jsx)(c.A, { guildId: n, powerup: s, onError: o, grow: h, compact: !h, expressiveCta: r }),
            u && (0, i.jsx)(g, { guildId: n, powerup: s }),
        ],
    });
}
function x(e) {
    let { ...t } = e;
    return (0, o.A)(t.guildId) ? (0, i.jsx)(f, { ...t }) : (0, i.jsx)(_, { ...t });
}
