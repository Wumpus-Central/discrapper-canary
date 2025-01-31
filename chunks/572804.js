n.d(t, {
    Hl: () => o,
    Sz: () => l,
    ZP: () => s
});
var i = n(592125),
    r = n(271383),
    a = n(430824);
function s(e) {
    let { message: t, userId: n, suppressEveryone: i = !1, suppressRoles: r = !1 } = e;
    return l({
        userId: n,
        channelId: t.channel_id,
        mentionEveryone: t.mentionEveryone,
        mentionUsers: t.mentions,
        mentionRoles: t.mentionRoles,
        suppressEveryone: i,
        suppressRoles: r
    });
}
function o(e) {
    var t, n, i, r;
    let { rawMessage: a, userId: s, suppressEveryone: o = !1, suppressRoles: u = !1 } = e;
    return l({
        userId: s,
        channelId: a.channel_id,
        mentionEveryone: null !== (n = a.mention_everyone) && void 0 !== n && n,
        mentionUsers: null !== (i = null === (t = a.mentions) || void 0 === t ? void 0 : t.map((e) => e.id)) && void 0 !== i ? i : [],
        mentionRoles: null !== (r = a.mention_roles) && void 0 !== r ? r : [],
        suppressEveryone: o,
        suppressRoles: u
    });
}
function l(e) {
    let { userId: t, channelId: n, mentionEveryone: s, mentionUsers: o, mentionRoles: l, suppressEveryone: u = !1, suppressRoles: c = !1 } = e;
    if ((s && !u) || o.includes(t)) return !0;
    if (c || null == l || 0 === l.length) return !1;
    let d = i.Z.getChannel(n);
    if (null == d) return !1;
    let f = d.getGuildId();
    if (null == f || null == a.Z.getGuild(f)) return !1;
    let _ = r.ZP.getMember(f, t);
    return null != _ && l.some((e) => _.roles.includes(e));
}
