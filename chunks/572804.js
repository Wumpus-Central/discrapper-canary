n.d(t, {
    Hl: () => s,
    Sz: () => l,
    ZP: () => a
});
var r = n(592125),
    i = n(271383),
    o = n(430824);
function a(e) {
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
    let { rawMessage: o, userId: a, suppressEveryone: s = !1, suppressRoles: c = !1 } = e;
    return l({
        userId: a,
        channelId: o.channel_id,
        mentionEveryone: null != (n = o.mention_everyone) && n,
        mentionUsers: null != (r = null == (t = o.mentions) ? void 0 : t.map((e) => e.id)) ? r : [],
        mentionRoles: null != (i = o.mention_roles) ? i : [],
        suppressEveryone: s,
        suppressRoles: c
    });
}
function l(e) {
    let { userId: t, channelId: n, mentionEveryone: a, mentionUsers: s, mentionRoles: l, suppressEveryone: c = !1, suppressRoles: u = !1 } = e;
    if ((a && !c) || s.includes(t)) return !0;
    if (u || null == l || 0 === l.length) return !1;
    let d = r.Z.getChannel(n);
    if (null == d) return !1;
    let f = d.getGuildId();
    if (null == f || null == o.Z.getGuild(f)) return !1;
    let _ = i.ZP.getMember(f, t);
    return null != _ && l.some((e) => _.roles.includes(e));
}
