n.d(t, { r: () => c }), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(471445),
    a = n(742593),
    l = n(944072);
function s(e) {
    let { channel: t } = e,
        n = (0, o.Th)(t.type);
    return (0, r.jsxs)('div', {
        className: l.channelInfoContainer,
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
                className: l.channelInfoText,
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
        className: l.container,
        children: [
            (0, r.jsx)(a.HZ, {
                className: l.statusContainer,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            (0, r.jsx)(a.Rf, {
                name: n.name,
                description: n.description,
                guildId: n.guild_id
            }),
            null != t && n.channel_id === t.id ? (0, r.jsx)(s, { channel: t }) : null
        ]
    });
}
