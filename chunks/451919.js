n.d(t, {
    Ay: () => c,
    Uj: () => d,
    bG: () => u,
});
var r = n(495756),
    i = n(734057),
    a = n(696451),
    s = n(71393),
    o = n(90165);
let l = 5184000000;
function c(e) {
    var t, n;
    let { message: r, userId: i, suppressEveryone: a = !1, suppressRoles: s = !1 } = e;
    return d({
        userId: i,
        channelId: r.channel_id,
        mentionEveryone: r.mentionEveryone,
        mentionUsers: r.mentions,
        mentionRoles: r.mentionRoles,
        mentionGames: null != (t = null == (n = r.mentionGames) ? void 0 : n.map((e) => e.id)) ? t : [],
        suppressEveryone: a,
        suppressRoles: s,
    });
}
function u(e) {
    var t, n, r, i, a, s;
    let { rawMessage: o, userId: l, suppressEveryone: c = !1, suppressRoles: u = !1 } = e;
    return d({
        userId: l,
        channelId: o.channel_id,
        mentionEveryone: null != (t = o.mention_everyone) && t,
        mentionUsers: null != (n = null == (a = o.mentions) ? void 0 : a.map((e) => e.id)) ? n : [],
        mentionRoles: null != (r = o.mention_roles) ? r : [],
        mentionGames: null != (i = null == (s = o.mention_games) ? void 0 : s.map((e) => e.id)) ? i : [],
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
            return !r.A.getMute(e) && (null != (t = o.A.getLastPlayedDateTime(e)) ? t : 0) > Date.now() - l;
        })
    )
        return !0;
    if (_ || null == d || 0 === d.length) return !1;
    let h = i.A.getChannel(n);
    if (null == h) return !1;
    let m = h.getGuildId();
    if (null == m || null == s.A.getGuild(m)) return !1;
    let g = a.Ay.getMember(m, t);
    return null != g && d.some((e) => g.roles.includes(e));
}
