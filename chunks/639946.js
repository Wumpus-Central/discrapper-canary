n.d(t, { r: () => c }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    s = n(471445),
    a = n(742593),
    l = n(952632);
function o(e) {
    let { channel: t } = e,
        n = (0, s.Th)(t.type);
    return (0, r.jsxs)("div", {
        className: l.channelInfoContainer,
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
                className: l.channelInfoText,
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
        className: l.container,
        children: [
            (0, r.jsx)(a.HZ, {
                className: l.statusContainer,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n,
            }),
            (0, r.jsx)(a.Rf, {
                name: n.name,
                description: n.description,
                guildId: n.guild_id,
            }),
            null != t && n.channel_id === t.id ? (0, r.jsx)(o, { channel: t }) : null,
        ],
    });
}
