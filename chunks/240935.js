"use strict";
n.d(t, { A: () => g });
var s = n(311907),
    i = n(73153),
    r = n(734057),
    l = n(309010),
    a = n(543465);
let o = {},
    d = {},
    h = {};
function c() {
    let e = l.A.getChannelId();
    if (null == e) return;
    let t = r.A.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if (
        (null == h[e] && (h[e] = 0),
        t.isThread() || (a.Ay.isOptInEnabled(n) && !a.Ay.isChannelOrParentOptedIn(n, t.id)))
    ) {
        delete h[e], null != o[n] && o[n].delete(e);
        return;
    }
    return (h[e]++, null == o[n] && (o[n] = new Set()), a.Ay.isFavorite(n, e))
        ? void o[n].delete(e)
        : (null == d[n] || !d[n].has(e)) && h[e] > 50
          ? (o[n].add(e), !0)
          : void 0;
}
class u extends s.Ay.PersistedStore {
    static displayName = "FavoritesSuggestionStore";
    static persistKey = "FavoritesSuggestionStore";
    initialize(e) {
        if ((this.waitFor(r.A, l.A, a.Ay), this.syncWith([l.A], c), null == e)) return;
        let { suggestedChannels: t, dismissedSuggestions: n, channelOpensByChannelId: s } = e;
        if (null != t) for (let e in t) o[e] = new Set(t[e]) ?? new Set();
        if (null != n) for (let e in n) d[e] = new Set(n[e]) ?? new Set();
        h = s ?? {};
    }
    getSuggestedChannelId(e) {
        return null;
    }
    getState() {
        return { suggestedChannels: {}, dismissedSuggestions: {}, channelOpensByChannelId: {} };
    }
}
let g = new u(i.h, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: t, channelId: n } = e;
        return null == d[t] && (d[t] = new Set()), d[t].add(n), o[t].delete(n), !0;
    },
});
