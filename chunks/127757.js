n.d(t, { d: () => x });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(834730),
    a = n(408278),
    o = n(241326),
    d = n(486020),
    c = n(11351),
    u = n(320137),
    m = n(985018),
    g = n(251436);
function h(e) {
    let { emoji: t, onRemoveEmoji: n, disabled: l = !1 } = e,
        c = d.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 32 });
    return (0, i.jsxs)("div", {
        className: s()(g.nI, { [g.r9]: l }),
        children: [
            (0, i.jsx)("img", { className: g.mp, src: c, alt: t.name }),
            (0, i.jsx)(r.E, { color: "text-strong", variant: "text-md/medium", className: g.JN, children: t.name }),
            (0, i.jsx)("div", {
                className: g.G5,
                children: (0, i.jsx)(a.K, {
                    variant: "secondary",
                    icon: o.u,
                    onClick: () => n(t),
                    "aria-label": m.intl.string(m.t.dVS92c),
                    disabled: l,
                }),
            }),
        ],
    });
}
function x(e) {
    let { tierEmojiIds: t, guildId: n, onRemoveEmoji: l } = e,
        s = (0, u.A)(n),
        r = null != t ? s.filter((e) => t.has(e.id)) : [],
        a = (0, c.gN)();
    return (0, i.jsx)("div", {
        className: g.kL,
        children: r.map((e) => (0, i.jsx)(h, { emoji: e, onRemoveEmoji: () => l(e), disabled: a }, e.id)),
    });
}
