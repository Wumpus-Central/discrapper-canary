n.d(t, { A: () => h });
var l = n(17928),
    i = n(228366),
    s = n(734057),
    a = n(309010),
    r = n(543465);
let d = {},
    u = {},
    o = {};
function c() {
    let e = a.A.getChannelId();
    if (null == e) return;
    let t = s.A.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if (
        (null == o[e] && (o[e] = 0),
        t.isThread() || (r.Ay.isOptInEnabled(n) && !r.Ay.isChannelOrParentOptedIn(n, t.id)))
    ) {
        delete o[e], null != d[n] && d[n].delete(e);
        return;
    }
    return (o[e]++, null == d[n] && (d[n] = new Set()), r.Ay.isFavorite(n, e))
        ? void d[n].delete(e)
        : (null == u[n] || !u[n].has(e)) && o[e] > 50
          ? (d[n].add(e), !0)
          : void 0;
}
class _ extends l.Ay.PersistedStore {
    static displayName = "FavoritesSuggestionStore";
    static persistKey = "FavoritesSuggestionStore";
    initialize(e) {
        if ((this.waitFor(s.A, a.A, r.Ay), this.syncWith([a.A], c), null == e)) return;
        let { suggestedChannels: t, dismissedSuggestions: n, channelOpensByChannelId: l } = e;
        if (null != t) for (let e in t) d[e] = new Set(t[e]) ?? new Set();
        if (null != n) for (let e in n) u[e] = new Set(n[e]) ?? new Set();
        o = l ?? {};
    }
    getSuggestedChannelId(e) {
        return null;
    }
    getState() {
        return { suggestedChannels: {}, dismissedSuggestions: {}, channelOpensByChannelId: {} };
    }
}
let h = new _(i.h, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: t, channelId: n } = e;
        return null == u[t] && (u[t] = new Set()), u[t].add(n), d[t].delete(n), !0;
    },
});
