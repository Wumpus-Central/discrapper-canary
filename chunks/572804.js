n.d(t, {
    Hl: () => u,
    Sz: () => d,
    ZP: () => c,
});
var r = n(893642),
    i = n(592125),
    a = n(271383),
    o = n(430824),
    s = n(230307);
let l = 5184000000;
function c(e) {
    var t, n;
    let { message: r, userId: i, suppressEveryone: a = !1, suppressRoles: o = !1 } = e;
    return d({
        userId: i,
        channelId: r.channel_id,
        mentionEveryone: r.mentionEveryone,
        mentionUsers: r.mentions,
        mentionRoles: r.mentionRoles,
        mentionGames: null != (n = null == (t = r.mentionGames) ? void 0 : t.map((e) => e.id)) ? n : [],
        suppressEveryone: a,
        suppressRoles: o,
    });
}
function u(e) {
    var t, n, r, i, a, o;
    let { rawMessage: s, userId: l, suppressEveryone: c = !1, suppressRoles: u = !1 } = e;
    return d({
        userId: l,
        channelId: s.channel_id,
        mentionEveryone: null != (r = s.mention_everyone) && r,
        mentionUsers: null != (i = null == (t = s.mentions) ? void 0 : t.map((e) => e.id)) ? i : [],
        mentionRoles: null != (a = s.mention_roles) ? a : [],
        mentionGames: null != (o = null == (n = s.mention_games) ? void 0 : n.map((e) => e.id)) ? o : [],
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
        suppressEveryone: p = !1,
        suppressRoles: _ = !1,
    } = e;
    if (
        (c && !p) ||
        u.includes(t) ||
        f.some((e) => {
            var t;
            return !r.Z.getMute(e) && (null != (t = s.Z.getLastPlayedDateTime(e)) ? t : 0) > Date.now() - l;
        })
    )
        return !0;
    if (_ || null == d || 0 === d.length) return !1;
    let m = i.Z.getChannel(n);
    if (null == m) return !1;
    let h = m.getGuildId();
    if (null == h || null == o.Z.getGuild(h)) return !1;
    let g = a.ZP.getMember(h, t);
    return null != g && d.some((e) => g.roles.includes(e));
}
