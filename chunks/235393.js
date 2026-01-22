n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(954571),
    i = n(998218),
    a = n(988102),
    s = n(376943),
    o = n(652215);
let l = [
    (e) => (a.A.isInvite(e) ? "Discord Server Invite" : null),
    (e) => {
        let t = i.A.safeParseWithQuery(e);
        if (null == t) return null;
        let n = (0, s.vu)(t.path);
        return null == n
            ? null
            : c({
                  guildId: n.guildId,
                  channelId: n.channelId,
                  messageId: n.messageId,
              });
    },
    (e) => (a.A.isDiscoveryLink(e) ? "Discord Discovery Link" : null),
];

function c(e) {
    return null != e.guildId && null != e.channelId && null != e.messageId
        ? "Discord Message Link"
        : null != e.guildId && null != e.channelId
          ? "Discord Channel Link"
          : "Unknown";
}

function u(e) {
    for (let t of l) {
        let n = t(e);
        if (null != n) return n;
    }
    return "Unknown";
}

function d(e, t) {
    return null == t && null == e ? "Unknown" : null == t ? u(e) : c(t);
}
let f = {
    trackDiscordLinkClicked: function (e) {
        r.default.track(o.HAw.LINK_CLICKED, {
            is_discord_link: !0,
            discord_link_type: c(e),
        });
    },
    trackLinkClicked: function (e, t) {
        if (null == e && null == t) return;
        let n = i.A.isDiscordUrl(e, !0) || null != t;
        r.default.track(o.HAw.LINK_CLICKED, {
            is_discord_link: n,
            discord_link_type: n ? d(e, t) : null,
        });
    },
    trackAnnouncementMessageLinkClicked: function (e) {
        let { messageId: t, channelId: n, guildId: i, sourceChannelId: a, sourceGuildId: s } = e;
        r.default.track(o.HAw.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
            message_id: t,
            channel_id: n,
            guild_id: i,
            source_channel_id: a,
            source_guild_id: s,
        });
    },
};
