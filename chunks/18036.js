n.d(t, { Z: () => g }), n(47120);
var i,
    r = n(442837),
    l = n(570140),
    o = n(592125),
    s = n(944486),
    a = n(9156);
function u(e, t, n) {
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
    h = {};
function f() {
    let e = s.Z.getChannelId();
    if (null == e) return;
    let t = o.Z.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if ((null == h[e] && (h[e] = 0), t.isThread() || (a.ZP.isOptInEnabled(n) && !a.ZP.isChannelOrParentOptedIn(n, t.id)))) {
        delete h[e], null != d[n] && d[n].delete(e);
        return;
    }
    if ((h[e]++, null == d[n] && (d[n] = new Set()), a.ZP.isFavorite(n, e))) {
        d[n].delete(e);
        return;
    }
    if ((null == c[n] || !c[n].has(e)) && h[e] > 50) return d[n].add(e), !0;
}
class p extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        if ((this.syncWith([s.Z], f), null == e)) return;
        let { suggestedChannels: i, dismissedSuggestions: r, channelOpensByChannelId: l } = e;
        if (null != i) for (let e in i) (t = new Set(i[e])), (d[e] = void 0 !== t ? t : new Set());
        if (null != r) for (let e in r) (n = new Set(r[e])), (c[e] = void 0 !== n ? n : new Set());
        h = null != l ? l : {};
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
u(p, 'displayName', 'FavoritesSuggestionStore'), u(p, 'persistKey', 'FavoritesSuggestionStore');
let g = new p(l.Z, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: t, channelId: n } = e;
        return null == c[t] && (c[t] = new Set()), c[t].add(n), d[t].delete(n), !0;
    }
});
