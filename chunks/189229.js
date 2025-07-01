(e.r(d), e.d(d, { default: () => r }));
var n = e(367907),
    a = e(592125),
    i = e(888369),
    u = e(430824),
    c = e(9156),
    l = e(981631);
function r(t, d) {
    let e = a.Z.getChannel(t);
    (0, n.yw)(l.rMx.ACK_MESSAGES, {
        channel_id: t,
        guild_id: null == e ? void 0 : e.getGuildId(),
        location: d,
        guild_unread_statuses: u.Z.getGuildsArray().map((t) => {
            let d = i.default.hasUnread(t.id),
                e = i.default.getMentionCount(t.id),
                n = c.ZP.isMuted(t.id),
                a = c.ZP.resolveGuildUnreadSetting(t);
            return ''.concat(t.id, ',').concat(d, ',').concat(e, ',').concat(n, ',').concat(a);
        })
    });
}
