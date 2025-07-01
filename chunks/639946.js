(n.d(t, { r: () => c }), n(953529));
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(471445),
    s = n(742593),
    a = n(944072);
function o(e) {
    let { channel: t } = e,
        n = (0, l.Th)(t.type);
    return (0, r.jsxs)('div', {
        className: a.channelInfoContainer,
        children: [
            null != n
                ? (0, r.jsx)(n, {
                      color: 'currentColor',
                      size: 'custom',
                      width: 20,
                      height: 20
                  })
                : null,
            (0, r.jsx)(i.Text, {
                className: a.channelInfoText,
                color: 'none',
                variant: 'text-sm/semibold',
                children: t.name
            })
        ]
    });
}
function c(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, r.jsxs)('div', {
        className: a.container,
        children: [
            (0, r.jsx)(s.HZ, {
                className: a.statusContainer,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            (0, r.jsx)(s.Rf, {
                name: n.name,
                description: n.description,
                guildId: n.guild_id
            }),
            null != t && n.channel_id === t.id ? (0, r.jsx)(o, { channel: t }) : null
        ]
    });
}
