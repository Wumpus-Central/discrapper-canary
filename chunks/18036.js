n.d(t, { Z: () => C }), n(47120);
var i,
    l = n(442837),
    r = n(570140),
    s = n(592125),
    a = n(944486),
    o = n(9156);
function d(e, t, n) {
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
    c = {},
    h = {};
function g() {
    let e = a.Z.getChannelId();
    if (null == e) return;
    let t = s.Z.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if ((null == h[e] && (h[e] = 0), t.isThread() || (o.ZP.isOptInEnabled(n) && !o.ZP.isChannelOrParentOptedIn(n, t.id)))) {
        delete h[e], null != u[n] && u[n].delete(e);
        return;
    }
    if ((h[e]++, null == u[n] && (u[n] = new Set()), o.ZP.isFavorite(n, e))) {
        u[n].delete(e);
        return;
    }
    if ((null == c[n] || !c[n].has(e)) && h[e] > 50) return u[n].add(e), !0;
}
class f extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        if ((this.syncWith([a.Z], g), null == e)) return;
        let { suggestedChannels: i, dismissedSuggestions: l, channelOpensByChannelId: r } = e;
        if (null != i) for (let e in i) (t = new Set(i[e])), (u[e] = void 0 !== t ? t : new Set());
        if (null != l) for (let e in l) (n = new Set(l[e])), (c[e] = void 0 !== n ? n : new Set());
        h = null != r ? r : {};
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
d(f, 'displayName', 'FavoritesSuggestionStore'), d(f, 'persistKey', 'FavoritesSuggestionStore');
let C = new f(r.Z, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: t, channelId: n } = e;
        return null == c[t] && (c[t] = new Set()), c[t].add(n), u[t].delete(n), !0;
    }
});
