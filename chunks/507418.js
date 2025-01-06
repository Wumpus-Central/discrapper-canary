n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(83474),
    o = n(245315),
    s = n(556041),
    c = n(347475),
    u = n(592125),
    d = n(368859);
function m(e, t) {
    if ((0, o.cp)(t)) return (0, i.jsx)(s.Z, {});
    if ((0, d.Z)(t)) {
        var n, r;
        let l = (null !== (r = null == t ? void 0 : null === (n = t.author) || void 0 === n ? void 0 : n.username) && void 0 !== r ? r : '').split(' ').slice(0, -1).join(' '),
            { guild_id: o, channel_id: s, message_id: c } = t.messageReference;
        if (null != o)
            return (0, i.jsx)(a.ZP, {
                setPopoutRef: e.setPopoutRef,
                guildId: o,
                channelId: s,
                messageId: c,
                name: l
            });
    }
    if (null != t.interaction && 'SENDING' === t.state) return (0, i.jsx)(i.Fragment, {});
    let m = u.Z.getChannel(t.channel_id);
    return (
        l()(null != m, 'renderUserGuildPopout: channel should never be null'),
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
