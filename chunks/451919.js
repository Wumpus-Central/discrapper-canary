var i = n(734057),
    r = n(696451),
    a = n(71393);
function s(e) {
    let {
        userId: t,
        channelId: n,
        mentionEveryone: s,
        mentionUsers: l,
        mentionRoles: o,
        suppressEveryone: d = !1,
        suppressRoles: c = !1,
    } = e;
    if ((s && !d) || l.includes(t)) return !0;
    if (c || null == o || 0 === o.length) return !1;
    let u = i.A.getChannel(n);
    if (null == u) return !1;
    let _ = u.getGuildId();
    if (null == _ || null == a.A.getGuild(_)) return !1;
    let E = r.Ay.getMember(_, t);
    return null != E && o.some((e) => E.roles.includes(e));
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let { message: t, userId: n, suppressEveryone: i = !1, suppressRoles: r = !1 } = e;
            return s({
                userId: n,
                channelId: t.channel_id,
                mentionEveryone: t.mentionEveryone,
                mentionUsers: t.mentions,
                mentionRoles: t.mentionRoles,
                suppressEveryone: i,
                suppressRoles: r,
            });
        },
        Uj: s,
        bG: function (e) {
            let { rawMessage: t, userId: n, suppressEveryone: i = !1, suppressRoles: r = !1 } = e;
            return s({
                userId: n,
                channelId: t.channel_id,
                mentionEveryone: t.mention_everyone ?? !1,
                mentionUsers: t.mentions?.map((e) => e.id) ?? [],
                mentionRoles: t.mention_roles ?? [],
                suppressEveryone: i,
                suppressRoles: r,
            });
        },
    },
);
