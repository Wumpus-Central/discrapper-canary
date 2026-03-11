"use strict";
n.d(t, { X: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(713654),
    l = n(557582),
    a = n(553630);
function o(e) {
    let { channel: t } = e,
        n = (0, r._U)(t.type);
    return (0, i.jsxs)("div", {
        className: a.Nj,
        children: [
            null != n ? (0, i.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, i.jsx)(s.Text, { className: a.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function d(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, i.jsxs)("div", {
        className: a.kL,
        children: [
            (0, i.jsx)(l.Uq, { className: a.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, i.jsx)(l.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, i.jsx)(o, { channel: t }) : null,
        ],
    });
}
