n.d(t, { X: () => c }), n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(713654),
    l = n(557582),
    a = n(88860);
function o(e) {
    let { channel: t } = e,
        n = (0, s._U)(t.type);
    return (0, r.jsxs)("div", {
        className: a.Nj,
        children: [
            null != n
                ? (0, r.jsx)(n, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                  })
                : null,
            (0, r.jsx)(i.Text, {
                className: a.dN,
                color: "none",
                variant: "text-sm/semibold",
                children: t.name,
            }),
        ],
    });
}
function c(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, r.jsxs)("div", {
        className: a.kL,
        children: [
            (0, r.jsx)(l.Uq, {
                className: a.II,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n,
            }),
            (0, r.jsx)(l.sC, {
                name: n.name,
                description: n.description,
                guildId: n.guild_id,
            }),
            null != t && n.channel_id === t.id ? (0, r.jsx)(o, { channel: t }) : null,
        ],
    });
}
