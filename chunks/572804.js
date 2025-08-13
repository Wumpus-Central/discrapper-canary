n.d(t, {
    Hl: () => u,
    Sz: () => d,
    ZP: () => c,
});
var r = n(893642),
    i = n(592125),
    o = n(271383),
    a = n(430824),
    s = n(230307);
let l = 5184000000;
function c(e) {
    var t, n;
    let { message: r, userId: i, suppressEveryone: o = !1, suppressRoles: a = !1 } = e;
    return d({
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
function u(e) {
    var t, n, r, i, o, a;
    let { rawMessage: s, userId: l, suppressEveryone: c = !1, suppressRoles: u = !1 } = e;
    return d({
        userId: l,
        channelId: s.channel_id,
        mentionEveryone: null != (r = s.mention_everyone) && r,
        mentionUsers: null != (i = null == (t = s.mentions) ? void 0 : t.map((e) => e.id)) ? i : [],
        mentionRoles: null != (o = s.mention_roles) ? o : [],
        mentionGames: null != (a = null == (n = s.mention_games) ? void 0 : n.map((e) => e.id)) ? a : [],
        suppressEveryone: c,
        suppressRoles: u,
    });
}
function d(e) {
    let {
        userId: t,
        channelId: n,
        mentionEveryone: c,
        mentionUsers: u,
        mentionRoles: d,
        mentionGames: f,
        suppressEveryone: _ = !1,
        suppressRoles: p = !1,
    } = e;
    if (
        (c && !_) ||
        u.includes(t) ||
        f.some((e) => {
            var t;
            return !r.Z.getMute(e) && (null != (t = s.Z.getLastPlayedDateTime(e)) ? t : 0) > Date.now() - l;
        })
    )
        return !0;
    if (p || null == d || 0 === d.length) return !1;
    let h = i.Z.getChannel(n);
    if (null == h) return !1;
    let m = h.getGuildId();
    if (null == m || null == a.Z.getGuild(m)) return !1;
    let g = o.ZP.getMember(m, t);
    return null != g && d.some((e) => g.roles.includes(e));
}
