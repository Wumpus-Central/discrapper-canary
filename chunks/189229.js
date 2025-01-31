d.r(e), d.d(e, { default: () => o });
var n = d(367907),
    a = d(592125),
    i = d(888369),
    u = d(430824),
    c = d(9156),
    l = d(981631);
function o(t) {
    let e = a.Z.getChannel(t);
    (0, n.yw)(l.rMx.ACK_MESSAGES, {
        channel_id: t,
        guild_id: null == e ? void 0 : e.getGuildId(),
        location,
        guild_unread_statuses: Object.values(u.Z.getGuilds()).map((t) => {
            let e = i.default.hasUnread(t.id),
                d = i.default.getMentionCount(t.id),
                n = c.ZP.isMuted(t.id),
                a = c.ZP.resolveGuildUnreadSetting(t);
            return ''.concat(t.id, ',').concat(e, ',').concat(d, ',').concat(n, ',').concat(a);
        })
    });
}
