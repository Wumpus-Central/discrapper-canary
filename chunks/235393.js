"use strict";
n.d(t, { A: () => d });
var r = n(954571),
    i = n(998218),
    s = n(988102),
    a = n(376943),
    o = n(652215);
let l = [
    (e) => (s.A.isInvite(e) ? "Discord Server Invite" : null),
    (e) => {
        let t = i.A.safeParseWithQuery(e);
        if (null == t) return null;
        let n = (0, a.vu)(t.path);
        return null == n ? null : u({ guildId: n.guildId, channelId: n.channelId, messageId: n.messageId });
    },
    (e) => (s.A.isDiscoveryLink(e) ? "Discord Discovery Link" : null),
];
function u(e) {
    return null != e.guildId && null != e.channelId && null != e.messageId
        ? "Discord Message Link"
        : null != e.guildId && null != e.channelId
          ? "Discord Channel Link"
          : "Unknown";
}
let d = {
    trackDiscordLinkClicked: function (e) {
        r.default.track(o.HAw.LINK_CLICKED, { is_discord_link: !0, discord_link_type: u(e) });
    },
    trackLinkClicked: function (e, t) {
        if (null == e && null == t) return;
        let n = i.A.isDiscordUrl(e, !0) || null != t;
        r.default.track(o.HAw.LINK_CLICKED, {
            is_discord_link: n,
            discord_link_type: n
                ? (function (e, t) {
                      if (null == t && null == e) return "Unknown";
                      if (null != t) return u(t);
                      for (let t of l) {
                          let n = t(e);
                          if (null != n) return n;
                      }
                      return "Unknown";
                  })(e, t)
                : null,
        });
    },
    trackAnnouncementMessageLinkClicked: function (e) {
        let { messageId: t, channelId: n, guildId: i, sourceChannelId: s, sourceGuildId: a } = e;
        r.default.track(o.HAw.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
            message_id: t,
            channel_id: n,
            guild_id: i,
            source_channel_id: s,
            source_guild_id: a,
        });
    },
};
