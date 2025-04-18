n.d(t, {
    Hl: () => s,
    Sz: () => l,
    ZP: () => o
});
var r = n(592125),
    i = n(271383),
    a = n(430824);
function o(e) {
    let { message: t, userId: n, suppressEveryone: r = !1, suppressRoles: i = !1 } = e;
    return l({
        userId: n,
        channelId: t.channel_id,
        mentionEveryone: t.mentionEveryone,
        mentionUsers: t.mentions,
        mentionRoles: t.mentionRoles,
        suppressEveryone: r,
        suppressRoles: i
    });
}
function s(e) {
    var t, n, r, i;
    let { rawMessage: a, userId: o, suppressEveryone: s = !1, suppressRoles: c = !1 } = e;
    return l({
        userId: o,
        channelId: a.channel_id,
        mentionEveryone: null != (n = a.mention_everyone) && n,
        mentionUsers: null != (r = null == (t = a.mentions) ? void 0 : t.map((e) => e.id)) ? r : [],
        mentionRoles: null != (i = a.mention_roles) ? i : [],
        suppressEveryone: s,
        suppressRoles: c
    });
}
function l(e) {
    let { userId: t, channelId: n, mentionEveryone: o, mentionUsers: s, mentionRoles: l, suppressEveryone: c = !1, suppressRoles: u = !1 } = e;
    if ((o && !c) || s.includes(t)) return !0;
    if (u || null == l || 0 === l.length) return !1;
    let d = r.Z.getChannel(n);
    if (null == d) return !1;
    let f = d.getGuildId();
    if (null == f || null == a.Z.getGuild(f)) return !1;
    let _ = i.ZP.getMember(f, t);
    return null != _ && l.some((e) => _.roles.includes(e));
}
