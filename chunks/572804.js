n.d(t, {
    Hl: () => c,
    Sz: () => u,
    ZP: () => l,
});
var r = n(592125),
    i = n(271383),
    o = n(430824),
    a = n(230307);
let s = 5184000000;
function l(e) {
    var t, n;
    let { message: r, userId: i, suppressEveryone: o = !1, suppressRoles: a = !1 } = e;
    return u({
        userId: i,
        channelId: r.channel_id,
        mentionEveryone: r.mentionEveryone,
        mentionUsers: r.mentions,
        mentionRoles: r.mentionRoles,
        mentionGames: null != (n = null == (t = r.mentionGames) ? void 0 : t.map((e) => e.id)) ? n : [],
        suppressEveryone: o,
        suppressRoles: a,
    });
}
function c(e) {
    var t, n, r, i, o, a;
    let { rawMessage: s, userId: l, suppressEveryone: c = !1, suppressRoles: d = !1 } = e;
    return u({
        userId: l,
        channelId: s.channel_id,
        mentionEveryone: null != (r = s.mention_everyone) && r,
        mentionUsers: null != (i = null == (t = s.mentions) ? void 0 : t.map((e) => e.id)) ? i : [],
        mentionRoles: null != (o = s.mention_roles) ? o : [],
        mentionGames: null != (a = null == (n = s.mention_games) ? void 0 : n.map((e) => e.id)) ? a : [],
        suppressEveryone: c,
        suppressRoles: d,
    });
}
function u(e) {
    let {
        userId: t,
        channelId: n,
        mentionEveryone: l,
        mentionUsers: c,
        mentionRoles: u,
        mentionGames: d,
        suppressEveryone: f = !1,
        suppressRoles: _ = !1,
    } = e;
    if (
        (l && !f) ||
        c.includes(t) ||
        d.some((e) => {
            var t;
            return (null != (t = a.Z.getLastPlayedDateTime(e)) ? t : 0) > Date.now() - s;
        })
    )
        return !0;
    if (_ || null == u || 0 === u.length) return !1;
    let p = r.Z.getChannel(n);
    if (null == p) return !1;
    let h = p.getGuildId();
    if (null == h || null == o.Z.getGuild(h)) return !1;
    let m = i.ZP.getMember(h, t);
    return null != m && u.some((e) => m.roles.includes(e));
}
