n.d(t, { A: () => d, x: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(97808),
    r = n(778712),
    o = n(297413),
    c = n(564450);
function d(e) {
    let { user: t, status: n, guildId: s } = e;
    return (0, i.jsxs)("div", {
        className: c.Ku,
        children: [
            (0, i.jsx)(a.eu, {
                src: t.getAvatarURL(s, 24),
                className: c.my,
                "aria-label": t.username,
                size: r._3.SIZE_24,
                status: n,
            }),
            (0, i.jsx)(o.A, { user: t, hideDiscriminator: !0 }),
        ],
    });
}
function u(e) {
    let { label: t } = e;
    return (0, i.jsxs)("div", {
        className: c.Ku,
        children: [(0, i.jsx)("div", { className: l()(c.my, c.L5) }), (0, i.jsx)("div", { children: t })],
    });
}
