n.d(t, { r: () => c }), n(953529);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(471445),
    l = n(742593),
    o = n(944072);
function a(e) {
    let { channel: t } = e,
        n = (0, s.Th)(t.type);
    return (0, r.jsxs)('div', {
        className: o.channelInfoContainer,
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
                className: o.channelInfoText,
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
        className: o.container,
        children: [
            (0, r.jsx)(l.HZ, {
                className: o.statusContainer,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            (0, r.jsx)(l.Rf, {
                name: n.name,
                description: n.description,
                guildId: n.guild_id
            }),
            null != t && n.channel_id === t.id ? (0, r.jsx)(a, { channel: t }) : null
        ]
    });
}
