n.d(t, { A: () => d, x: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(397927),
    s = n(297413),
    o = n(564450);
function d(e) {
    let { user: t, status: n, guildId: l } = e;
    return (0, i.jsxs)("div", {
        className: o.Ku,
        children: [
            (0, i.jsx)(r.euF, {
                src: t.getAvatarURL(l, 24),
                className: o.my,
                "aria-label": t.username,
                size: r._3J.SIZE_24,
                status: n,
            }),
            (0, i.jsx)(s.A, { user: t, hideDiscriminator: !0 }),
        ],
    });
}
function c(e) {
    let { label: t } = e;
    return (0, i.jsxs)("div", {
        className: o.Ku,
        children: [(0, i.jsx)("div", { className: a()(o.my, o.L5) }), (0, i.jsx)("div", { children: t })],
    });
}
