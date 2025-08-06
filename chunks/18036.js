t.d(n, { Z: () => C }), t(388685);
var l,
    i = t(442837),
    r = t(570140),
    a = t(592125),
    u = t(944486),
    s = t(9156);
function o(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
let d = {},
    c = {},
    g = {};
function f() {
    let e = u.Z.getChannelId();
    if (null == e) return;
    let n = a.Z.getChannel(e);
    if (null == n || null == n.guild_id) return;
    let t = n.guild_id;
    if (
        (null == g[e] && (g[e] = 0),
        n.isThread() || (s.ZP.isOptInEnabled(t) && !s.ZP.isChannelOrParentOptedIn(t, n.id)))
    ) {
        delete g[e], null != d[t] && d[t].delete(e);
        return;
    }
    return (g[e]++, null == d[t] && (d[t] = new Set()), s.ZP.isFavorite(t, e))
        ? void d[t].delete(e)
        : (null == c[t] || !c[t].has(e)) && g[e] > 50
          ? (d[t].add(e), !0)
          : void 0;
}
class h extends (l = i.ZP.PersistedStore) {
    initialize(e) {
        var n, t;
        if ((this.syncWith([u.Z], f), null == e)) return;
        let { suggestedChannels: l, dismissedSuggestions: i, channelOpensByChannelId: r } = e;
        if (null != l) for (let e in l) (n = new Set(l[e])), (d[e] = void 0 !== n ? n : new Set());
        if (null != i) for (let e in i) (t = new Set(i[e])), (c[e] = void 0 !== t ? t : new Set());
        g = null != r ? r : {};
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
o(h, "displayName", "FavoritesSuggestionStore"), o(h, "persistKey", "FavoritesSuggestionStore");
let C = new h(r.Z, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: n, channelId: t } = e;
        return null == c[n] && (c[n] = new Set()), c[n].add(t), d[n].delete(t), !0;
    },
});
