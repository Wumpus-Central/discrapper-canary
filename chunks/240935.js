n.d(t, {
    A: () => f,
}),
    n(896048);
var i,
    s = n(311907),
    r = n(73153),
    l = n(734057),
    o = n(309010),
    a = n(543465);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = {},
    c = {},
    h = {};

function g() {
    let e = o.A.getChannelId();
    if (null == e) return;
    let t = l.A.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if (
        (null == h[e] && (h[e] = 0),
        t.isThread() || (a.Ay.isOptInEnabled(n) && !a.Ay.isChannelOrParentOptedIn(n, t.id)))
    ) {
        delete h[e], null != u[n] && u[n].delete(e);
        return;
    }
    return (h[e]++, null == u[n] && (u[n] = new Set()), a.Ay.isFavorite(n, e))
        ? void u[n].delete(e)
        : (null == c[n] || !c[n].has(e)) && h[e] > 50
          ? (u[n].add(e), !0)
          : void 0;
}
class p extends (i = s.Ay.PersistedStore) {
    initialize(e) {
        var t, n;
        if ((this.waitFor(l.A, o.A, a.Ay), this.syncWith([o.A], g), null == e)) return;
        let { suggestedChannels: i, dismissedSuggestions: s, channelOpensByChannelId: r } = e;
        if (null != i) for (let e in i) (t = new Set(i[e])), (u[e] = void 0 !== t ? t : new Set());
        if (null != s) for (let e in s) (n = new Set(s[e])), (c[e] = void 0 !== n ? n : new Set());
        h = null != r ? r : {};
    }
    getSuggestedChannelId(e) {
        return null;
    }
    getState() {
        return {
            suggestedChannels: {},
            dismissedSuggestions: {},
            channelOpensByChannelId: {},
        };
    }
}
d(p, "displayName", "FavoritesSuggestionStore"), d(p, "persistKey", "FavoritesSuggestionStore");
let f = new p(r.h, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: t, channelId: n } = e;
        return null == c[t] && (c[t] = new Set()), c[t].add(n), u[t].delete(n), !0;
    },
});
