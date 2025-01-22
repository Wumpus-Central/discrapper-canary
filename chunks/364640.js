var i,
    a = r(47120);
var o = r(626135),
    s = r(591759),
    l = r(777754),
    u = r(754688),
    c = r(981631);
!(function (e) {
    (e.MESSAGE = 'Discord Message Link'), (e.CHANNEL = 'Discord Channel Link'), (e.SERVER_INVITE = 'Discord Server Invite'), (e.GIFT = 'Discord Gift Link'), (e.UNKNOWN = 'Unknown'), (e.DISCOVERY = 'Discord Discovery Link');
})(i || (i = {}));
let d = [
    (e) => (l.Z.isInvite(e) ? 'Discord Server Invite' : null),
    (e) => {
        let n = s.Z.safeParseWithQuery(e);
        if (null == n) return null;
        let r = (0, u.Qj)(n.path);
        return null == r
            ? null
            : f({
                  guildId: r.guildId,
                  channelId: r.channelId,
                  messageId: r.messageId
              });
    },
    (e) => (l.Z.isDiscoveryLink(e) ? 'Discord Discovery Link' : null)
];
function f(e) {
    return null != e.guildId && null != e.channelId && null != e.messageId ? 'Discord Message Link' : null != e.guildId && null != e.channelId ? 'Discord Channel Link' : 'Unknown';
}
function p(e) {
    for (let n of d) {
        let r = n(e);
        if (null != r) return r;
    }
    return 'Unknown';
}
function h(e, n) {
    return null == n && null == e ? 'Unknown' : null == n ? p(e) : f(n);
}
function _(e) {
    o.default.track(c.rMx.LINK_CLICKED, {
        is_discord_link: !0,
        discord_link_type: f(e)
    });
}
function m(e, n) {
    if (null == e && null == n) return;
    let r = s.Z.isDiscordUrl(e, !0) || null != n;
    o.default.track(c.rMx.LINK_CLICKED, {
        is_discord_link: r,
        discord_link_type: r ? h(e, n) : null
    });
}
function g(e) {
    let { messageId: n, channelId: r, guildId: i, sourceChannelId: a, sourceGuildId: s } = e;
    o.default.track(c.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
        message_id: n,
        channel_id: r,
        guild_id: i,
        source_channel_id: a,
        source_guild_id: s
    });
}
n.Z = {
    trackDiscordLinkClicked: _,
    trackLinkClicked: m,
    trackAnnouncementMessageLinkClicked: g
};
