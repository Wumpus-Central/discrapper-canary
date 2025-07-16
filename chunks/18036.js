(n.d(t, { Z: () => b }), n(388685));
var r,
    i = n(442837),
    s = n(570140),
    l = n(592125),
    o = n(944486),
    a = n(9156);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = {},
    d = {},
    f = {};
function p() {
    let e = o.Z.getChannelId();
    if (null == e) return;
    let t = l.Z.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if ((null == f[e] && (f[e] = 0), t.isThread() || (a.ZP.isOptInEnabled(n) && !a.ZP.isChannelOrParentOptedIn(n, t.id)))) {
        (delete f[e], null != u[n] && u[n].delete(e));
        return;
    }
    return (f[e]++, null == u[n] && (u[n] = new Set()), a.ZP.isFavorite(n, e)) ? void u[n].delete(e) : (null == d[n] || !d[n].has(e)) && f[e] > 50 ? (u[n].add(e), !0) : void 0;
}
class g extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        if ((this.syncWith([o.Z], p), null == e)) return;
        let { suggestedChannels: r, dismissedSuggestions: i, channelOpensByChannelId: s } = e;
        if (null != r) for (let e in r) ((t = new Set(r[e])), (u[e] = void 0 !== t ? t : new Set()));
        if (null != i) for (let e in i) ((n = new Set(i[e])), (d[e] = void 0 !== n ? n : new Set()));
        f = null != s ? s : {};
    }
    getSuggestedChannelId(e) {
        return null;
    }
    getState() {
        return {
            suggestedChannels: {},
            dismissedSuggestions: {},
            channelOpensByChannelId: {}
        };
    }
}
(c(g, 'displayName', 'FavoritesSuggestionStore'), c(g, 'persistKey', 'FavoritesSuggestionStore'));
let b = new g(s.Z, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: t, channelId: n } = e;
        return (null == d[t] && (d[t] = new Set()), d[t].add(n), u[t].delete(n), !0);
    }
});
