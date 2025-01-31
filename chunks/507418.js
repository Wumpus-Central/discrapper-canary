n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(512722),
    a = n.n(l),
    r = n(83474),
    s = n(245315),
    o = n(556041),
    c = n(347475),
    d = n(592125),
    u = n(368859);
function m(e, t) {
    if ((0, s.cp)(t)) return (0, i.jsx)(o.Z, {});
    if ((0, u.Z)(t)) {
        var n, l;
        let a = (null !== (l = null == t ? void 0 : null === (n = t.author) || void 0 === n ? void 0 : n.username) && void 0 !== l ? l : '').split(' ').slice(0, -1).join(' '),
            { guild_id: s, channel_id: o, message_id: c } = t.messageReference;
        if (null != s)
            return (0, i.jsx)(r.ZP, {
                setPopoutRef: e.setPopoutRef,
                guildId: s,
                channelId: o,
                messageId: c,
                name: a
            });
    }
    if (null != t.interaction && 'SENDING' === t.state) return (0, i.jsx)(i.Fragment, {});
    let m = d.Z.getChannel(t.channel_id);
    return (
        a()(null != m, 'renderUserGuildPopout: channel should never be null'),
        (0, i.jsx)(c.Z, {
            ...e,
            channelId: t.channel_id,
            messageId: t.id,
            guildId: m.guild_id,
            userId: t.author.id,
            user: null != t.webhookId ? t.author : void 0
        })
    );
}
