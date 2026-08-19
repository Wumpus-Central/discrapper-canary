"use strict";
n.d(t, { A: () => c });
var i = n(174459),
    r = n(998218),
    a = n(988102),
    s = n(376943),
    l = n(652215);
let o = [
    (e) => (a.A.isInvite(e) ? "Discord Server Invite" : null),
    (e) => {
        let t = r.A.safeParseWithQuery(e);
        if (null == t) return null;
        let n = (0, s.vu)(t.path);
        return null == n ? null : d({ guildId: n.guildId, channelId: n.channelId, messageId: n.messageId });
    },
    (e) => (a.A.isDiscoveryLink(e) ? "Discord Discovery Link" : null),
];
function d(e) {
    return null != e.guildId && null != e.channelId && null != e.messageId
        ? "Discord Message Link"
        : null != e.guildId && null != e.channelId
          ? "Discord Channel Link"
          : "Unknown";
}
let c = {
    trackDiscordLinkClicked: function (e) {
        i.default.track(l.HAw.LINK_CLICKED, { is_discord_link: !0, discord_link_type: d(e) });
    },
    trackLinkClicked: function (e, t) {
        if (null == e && null == t) return;
        let n = r.A.isDiscordUrl(e, !0) || null != t;
        i.default.track(l.HAw.LINK_CLICKED, {
            is_discord_link: n,
            discord_link_type: n
                ? (function (e, t) {
                      if (null == t && null == e) return "Unknown";
                      if (null != t) return d(t);
                      for (let t of o) {
                          let n = t(e);
                          if (null != n) return n;
                      }
                      return "Unknown";
                  })(e, t)
                : null,
        });
    },
    trackAnnouncementMessageLinkClicked: function (e) {
        let { messageId: t, channelId: n, guildId: r, sourceChannelId: a, sourceGuildId: s } = e;
        i.default.track(l.HAw.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
            message_id: t,
            channel_id: n,
            guild_id: r,
            source_channel_id: a,
            source_guild_id: s,
        });
    },
};
