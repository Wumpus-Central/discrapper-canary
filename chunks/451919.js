"use strict";
n.d(t, { Ay: () => u, Uj: () => d, bG: () => c });
var r = n(495756),
    i = n(734057),
    a = n(696451),
    s = n(71393),
    o = n(90165);
let l = 5184e6;
function u(e) {
    let { message: t, userId: n, suppressEveryone: r = !1, suppressRoles: i = !1 } = e;
    return d({
        userId: n,
        channelId: t.channel_id,
        mentionEveryone: t.mentionEveryone,
        mentionUsers: t.mentions,
        mentionRoles: t.mentionRoles,
        mentionGames: t.mentionGames?.map((e) => e.id) ?? [],
        suppressEveryone: r,
        suppressRoles: i,
    });
}
function c(e) {
    let { rawMessage: t, userId: n, suppressEveryone: r = !1, suppressRoles: i = !1 } = e;
    return d({
        userId: n,
        channelId: t.channel_id,
        mentionEveryone: t.mention_everyone ?? !1,
        mentionUsers: t.mentions?.map((e) => e.id) ?? [],
        mentionRoles: t.mention_roles ?? [],
        mentionGames: t.mention_games?.map((e) => e.id) ?? [],
        suppressEveryone: r,
        suppressRoles: i,
    });
}
function d(e) {
    let {
        userId: t,
        channelId: n,
        mentionEveryone: u,
        mentionUsers: c,
        mentionRoles: d,
        mentionGames: _,
        suppressEveryone: f = !1,
        suppressRoles: p = !1,
    } = e;
    if (
        (u && !f) ||
        c.includes(t) ||
        _.some((e) => !r.A.getMute(e) && (o.A.getLastPlayedDateTime(e) ?? 0) > Date.now() - l)
    )
        return !0;
    if (p || null == d || 0 === d.length) return !1;
    let h = i.A.getChannel(n);
    if (null == h) return !1;
    let m = h.getGuildId();
    if (null == m || null == s.A.getGuild(m)) return !1;
    let g = a.Ay.getMember(m, t);
    return null != g && d.some((e) => g.roles.includes(e));
}
