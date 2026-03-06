"use strict";
n.d(t, { Ay: () => a, Uj: () => l, bG: () => o });
var r = n(734057),
    i = n(696451),
    s = n(71393);
function a(e) {
    let { message: t, userId: n, suppressEveryone: r = !1, suppressRoles: i = !1 } = e;
    return l({
        userId: n,
        channelId: t.channel_id,
        mentionEveryone: t.mentionEveryone,
        mentionUsers: t.mentions,
        mentionRoles: t.mentionRoles,
        suppressEveryone: r,
        suppressRoles: i,
    });
}
function o(e) {
    let { rawMessage: t, userId: n, suppressEveryone: r = !1, suppressRoles: i = !1 } = e;
    return l({
        userId: n,
        channelId: t.channel_id,
        mentionEveryone: t.mention_everyone ?? !1,
        mentionUsers: t.mentions?.map((e) => e.id) ?? [],
        mentionRoles: t.mention_roles ?? [],
        suppressEveryone: r,
        suppressRoles: i,
    });
}
function l(e) {
    let {
        userId: t,
        channelId: n,
        mentionEveryone: a,
        mentionUsers: o,
        mentionRoles: l,
        suppressEveryone: u = !1,
        suppressRoles: c = !1,
    } = e;
    if ((a && !u) || o.includes(t)) return !0;
    if (c || null == l || 0 === l.length) return !1;
    let d = r.A.getChannel(n);
    if (null == d) return !1;
    let _ = d.getGuildId();
    if (null == _ || null == s.A.getGuild(_)) return !1;
    let f = i.Ay.getMember(_, t);
    return null != f && l.some((e) => f.roles.includes(e));
}
