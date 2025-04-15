n.d(t, { Z: () => p }), n(388685);
var l,
    i = n(442837),
    r = n(570140),
    a = n(592125),
    u = n(944486),
    s = n(9156);
function o(e, t, n) {
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
let d = {},
    c = {},
    f = {};
function g() {
    let e = u.Z.getChannelId();
    if (null == e) return;
    let t = a.Z.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if ((null == f[e] && (f[e] = 0), t.isThread() || (s.ZP.isOptInEnabled(n) && !s.ZP.isChannelOrParentOptedIn(n, t.id)))) {
        delete f[e], null != d[n] && d[n].delete(e);
        return;
    }
    return (f[e]++, null == d[n] && (d[n] = new Set()), s.ZP.isFavorite(n, e)) ? void d[n].delete(e) : (null == c[n] || !c[n].has(e)) && f[e] > 50 ? (d[n].add(e), !0) : void 0;
}
class h extends (l = i.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        if ((this.syncWith([u.Z], g), null == e)) return;
        let { suggestedChannels: l, dismissedSuggestions: i, channelOpensByChannelId: r } = e;
        if (null != l) for (let e in l) (t = new Set(l[e])), (d[e] = void 0 !== t ? t : new Set());
        if (null != i) for (let e in i) (n = new Set(i[e])), (c[e] = void 0 !== n ? n : new Set());
        f = null != r ? r : {};
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
o(h, 'displayName', 'FavoritesSuggestionStore'), o(h, 'persistKey', 'FavoritesSuggestionStore');
let p = new h(r.Z, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: t, channelId: n } = e;
        return null == c[t] && (c[t] = new Set()), c[t].add(n), d[t].delete(n), !0;
    }
});
