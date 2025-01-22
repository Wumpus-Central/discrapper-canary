r.d(n, {
    Hl: function () {
        return l;
    },
    Sz: function () {
        return u;
    },
    ZP: function () {
        return s;
    }
});
var i = r(592125),
    a = r(271383),
    o = r(430824);
function s(e) {
    let { message: n, userId: r, suppressEveryone: i = !1, suppressRoles: a = !1 } = e;
    return u({
        userId: r,
        channelId: n.channel_id,
        mentionEveryone: n.mentionEveryone,
        mentionUsers: n.mentions,
        mentionRoles: n.mentionRoles,
        suppressEveryone: i,
        suppressRoles: a
    });
}
function l(e) {
    var n, r, i, a;
    let { rawMessage: o, userId: s, suppressEveryone: l = !1, suppressRoles: c = !1 } = e;
    return u({
        userId: s,
        channelId: o.channel_id,
        mentionEveryone: null !== (r = o.mention_everyone) && void 0 !== r && r,
        mentionUsers: null !== (i = null === (n = o.mentions) || void 0 === n ? void 0 : n.map((e) => e.id)) && void 0 !== i ? i : [],
        mentionRoles: null !== (a = o.mention_roles) && void 0 !== a ? a : [],
        suppressEveryone: l,
        suppressRoles: c
    });
}
function u(e) {
    let { userId: n, channelId: r, mentionEveryone: s, mentionUsers: l, mentionRoles: u, suppressEveryone: c = !1, suppressRoles: d = !1 } = e;
    if ((s && !c) || l.includes(n)) return !0;
    if (d || null == u || 0 === u.length) return !1;
    let f = i.Z.getChannel(r);
    if (null == f) return !1;
    let p = f.getGuildId();
    if (null == p || null == o.Z.getGuild(p)) return !1;
    let h = a.ZP.getMember(p, n);
    return null != h && u.some((e) => h.roles.includes(e));
}
