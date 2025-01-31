n.d(t, { Z: () => f }), n(47120);
var i = n(626135),
    r = n(591759),
    a = n(777754),
    s = n(754688),
    o = n(981631);
let l = [
    (e) => (a.Z.isInvite(e) ? 'Discord Server Invite' : null),
    (e) => {
        let t = r.Z.safeParseWithQuery(e);
        if (null == t) return null;
        let n = (0, s.Qj)(t.path);
        return null == n
            ? null
            : u({
                  guildId: n.guildId,
                  channelId: n.channelId,
                  messageId: n.messageId
              });
    },
    (e) => (a.Z.isDiscoveryLink(e) ? 'Discord Discovery Link' : null)
];
function u(e) {
    return null != e.guildId && null != e.channelId && null != e.messageId ? 'Discord Message Link' : null != e.guildId && null != e.channelId ? 'Discord Channel Link' : 'Unknown';
}
function c(e) {
    for (let t of l) {
        let n = t(e);
        if (null != n) return n;
    }
    return 'Unknown';
}
function d(e, t) {
    return null == t && null == e ? 'Unknown' : null == t ? c(e) : u(t);
}
let f = {
    trackDiscordLinkClicked: function (e) {
        i.default.track(o.rMx.LINK_CLICKED, {
            is_discord_link: !0,
            discord_link_type: u(e)
        });
    },
    trackLinkClicked: function (e, t) {
        if (null == e && null == t) return;
        let n = r.Z.isDiscordUrl(e, !0) || null != t;
        i.default.track(o.rMx.LINK_CLICKED, {
            is_discord_link: n,
            discord_link_type: n ? d(e, t) : null
        });
    },
    trackAnnouncementMessageLinkClicked: function (e) {
        let { messageId: t, channelId: n, guildId: r, sourceChannelId: a, sourceGuildId: s } = e;
        i.default.track(o.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
            message_id: t,
            channel_id: n,
            guild_id: r,
            source_channel_id: a,
            source_guild_id: s
        });
    }
};
