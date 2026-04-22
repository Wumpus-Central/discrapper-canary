l.d(e, { Ay: () => y, GU: () => E });
var n = l(627968);
l(64700);
var a = l(503698),
    i = l.n(a),
    r = l(821609),
    s = l(438874),
    o = l(363487),
    d = l(439156),
    u = l(689906),
    c = l(224331),
    p = l(568065),
    f = l(853513),
    A = l(985018),
    v = l(742786);
function E(t) {
    let { className: e, guildId: l, powerup: a, onClick: s } = t,
        o = (0, u.A)(l, a);
    return (0, n.jsx)("div", {
        className: i()(v.FS, e),
        children: (0, n.jsx)(r.$, {
            variant: "primary",
            fullWidth: !0,
            text: A.intl.string(f.default.g5Ds69),
            onClick: (t) => {
                s?.(t), o?.(t);
            },
        }),
    });
}
function g(t) {
    let { className: e, guildId: l, powerup: a, onClick: s } = t,
        o = (0, c.A)(l, a);
    return (0, n.jsx)("div", {
        className: i()(v.FS, e),
        children: (0, n.jsx)(r.$, {
            variant: "primary",
            fullWidth: !0,
            text: A.intl.string(A.t["0Q61kF"]),
            onClick: (t) => {
                s?.(t), o?.();
            },
        }),
    });
}
function h(t) {
    let { className: e, guildId: l, powerup: a } = t,
        s = (0, c.A)(l, a);
    return (0, n.jsx)("div", {
        className: i()(v.kL, e),
        children: (0, n.jsx)("div", {
            className: v.FS,
            children: (0, n.jsx)(r.$, {
                variant: "primary",
                fullWidth: !0,
                text: a.type === p.o9.LEVEL ? A.intl.string(A.t["0Q61kF"]) : A.intl.string(A.t.Xa11Ep),
                onClick: s,
            }),
        }),
    });
}
function x(t) {
    let { className: e, guildId: l, powerup: a, expressiveCta: r, onError: o } = t,
        { showToggleButton: u, isPowerupActive: c, showConfigureButton: p } = (0, s.A)(l, a),
        f = !c;
    return (0, n.jsxs)("div", {
        className: i()(v.kL, e),
        children: [
            u && (0, n.jsx)(d.A, { guildId: l, powerup: a, onError: o, grow: f, compact: !f, expressiveCta: r }),
            p ? (0, n.jsx)(E, { guildId: l, powerup: a }) : c ? (0, n.jsx)(g, { guildId: l, powerup: a }) : null,
        ],
    });
}
function y(t) {
    let { ...e } = t;
    return (0, o.A)(e.guildId) ? (0, n.jsx)(x, { ...e }) : (0, n.jsx)(h, { ...e });
}
