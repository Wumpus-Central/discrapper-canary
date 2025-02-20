n.d(t, { Z: () => f }), n(47120);
var r = n(626135),
    i = n(591759),
    o = n(777754),
    a = n(754688),
    s = n(981631);
let l = [
    (e) => (o.Z.isInvite(e) ? 'Discord Server Invite' : null),
    (e) => {
        let t = i.Z.safeParseWithQuery(e);
        if (null == t) return null;
        let n = (0, a.Qj)(t.path);
        return null == n
            ? null
            : c({
                  guildId: n.guildId,
                  channelId: n.channelId,
                  messageId: n.messageId
              });
    },
    (e) => (o.Z.isDiscoveryLink(e) ? 'Discord Discovery Link' : null)
];
function c(e) {
    return null != e.guildId && null != e.channelId && null != e.messageId ? 'Discord Message Link' : null != e.guildId && null != e.channelId ? 'Discord Channel Link' : 'Unknown';
}
function u(e) {
    for (let t of l) {
        let n = t(e);
        if (null != n) return n;
    }
    return 'Unknown';
}
function d(e, t) {
    return null == t && null == e ? 'Unknown' : null == t ? u(e) : c(t);
}
let f = {
    trackDiscordLinkClicked: function (e) {
        r.default.track(s.rMx.LINK_CLICKED, {
            is_discord_link: !0,
            discord_link_type: c(e)
        });
    },
    trackLinkClicked: function (e, t) {
        if (null == e && null == t) return;
        let n = i.Z.isDiscordUrl(e, !0) || null != t;
        r.default.track(s.rMx.LINK_CLICKED, {
            is_discord_link: n,
            discord_link_type: n ? d(e, t) : null
        });
    },
    trackAnnouncementMessageLinkClicked: function (e) {
        let { messageId: t, channelId: n, guildId: i, sourceChannelId: o, sourceGuildId: a } = e;
        r.default.track(s.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
            message_id: t,
            channel_id: n,
            guild_id: i,
            source_channel_id: o,
            source_guild_id: a
        });
    }
};
