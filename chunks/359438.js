n.d(t, { X: () => u });
var l = n(627968);
n(64700);
var a = n(834730),
    s = n(713654),
    i = n(557582),
    r = n(131165);
function o(e) {
    let { channel: t } = e,
        n = (0, s._U)(t.type);
    return (0, l.jsxs)("div", {
        className: r.Nj,
        children: [
            null != n ? (0, l.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, l.jsx)(a.E, { className: r.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function u(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, l.jsxs)("div", {
        className: r.kL,
        children: [
            (0, l.jsx)(i.Uq, { className: r.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, l.jsx)(i.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, l.jsx)(o, { channel: t }) : null,
        ],
    });
}
