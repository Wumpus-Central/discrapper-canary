n.d(t, {
    A: () => c,
    x: () => u,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(397927),
    s = n(297413),
    o = n(828043);
function c(e) {
    let { user: t, status: n, isFocused: i, guildId: l } = e;
    return (0, r.jsxs)("div", {
        className: o.Ku,
        children: [
            (0, r.jsx)(a.euF, {
                src: t.getAvatarURL(l, 24),
                className: o.my,
                "aria-label": t.username,
                size: a._3J.SIZE_24,
                status: n,
                statusColor: i ? "currentColor" : void 0,
            }),
            (0, r.jsx)(s.A, {
                user: t,
                hideDiscriminator: !0,
            }),
        ],
    });
}
function u(e) {
    let { label: t } = e;
    return (0, r.jsxs)("div", {
        className: o.Ku,
        children: [(0, r.jsx)("div", { className: l()(o.my, o.L5) }), (0, r.jsx)("div", { children: t })],
    });
}
