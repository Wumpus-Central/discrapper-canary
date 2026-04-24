n.d(t, { X: () => u });
var r = n(627968);
n(64700);
var l = n(834730),
    i = n(713654),
    a = n(557582),
    s = n(131165);
function o(e) {
    let { channel: t } = e,
        n = (0, i._U)(t.type);
    return (0, r.jsxs)("div", {
        className: s.Nj,
        children: [
            null != n ? (0, r.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, r.jsx)(l.E, { className: s.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function u(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, r.jsxs)("div", {
        className: s.kL,
        children: [
            (0, r.jsx)(a.Uq, { className: s.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, r.jsx)(a.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, r.jsx)(o, { channel: t }) : null,
        ],
    });
}
