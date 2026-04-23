n.d(t, { A: () => g });
var i = n(311907),
    s = n(73153),
    l = n(734057),
    r = n(309010),
    a = n(543465);
let d = {},
    h = {},
    o = {};
function u() {
    let e = r.A.getChannelId();
    if (null == e) return;
    let t = l.A.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if (
        (null == o[e] && (o[e] = 0),
        t.isThread() || (a.Ay.isOptInEnabled(n) && !a.Ay.isChannelOrParentOptedIn(n, t.id)))
    ) {
        delete o[e], null != d[n] && d[n].delete(e);
        return;
    }
    return (o[e]++, null == d[n] && (d[n] = new Set()), a.Ay.isFavorite(n, e))
        ? void d[n].delete(e)
        : (null == h[n] || !h[n].has(e)) && o[e] > 50
          ? (d[n].add(e), !0)
          : void 0;
}
class c extends i.Ay.PersistedStore {
    static displayName = "FavoritesSuggestionStore";
    static persistKey = "FavoritesSuggestionStore";
    initialize(e) {
        if ((this.waitFor(l.A, r.A, a.Ay), this.syncWith([r.A], u), null == e)) return;
        let { suggestedChannels: t, dismissedSuggestions: n, channelOpensByChannelId: i } = e;
        if (null != t) for (let e in t) d[e] = new Set(t[e]) ?? new Set();
        if (null != n) for (let e in n) h[e] = new Set(n[e]) ?? new Set();
        o = i ?? {};
    }
    getSuggestedChannelId(e) {
        return null;
    }
    getState() {
        return { suggestedChannels: {}, dismissedSuggestions: {}, channelOpensByChannelId: {} };
    }
}
let g = new c(s.h, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: t, channelId: n } = e;
        return null == h[t] && (h[t] = new Set()), h[t].add(n), d[t].delete(n), !0;
    },
});
