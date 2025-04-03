n.d(t, { Z: () => p }), n(47120);
var i,
    s = n(442837),
    l = n(570140),
    r = n(592125),
    a = n(944486),
    d = n(9156);
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
let h = {},
    u = {},
    c = {};
function g() {
    let e = a.Z.getChannelId();
    if (null == e) return;
    let t = r.Z.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if ((null == c[e] && (c[e] = 0), t.isThread() || (d.ZP.isOptInEnabled(n) && !d.ZP.isChannelOrParentOptedIn(n, t.id)))) {
        delete c[e], null != h[n] && h[n].delete(e);
        return;
    }
    return (c[e]++, null == h[n] && (h[n] = new Set()), d.ZP.isFavorite(n, e)) ? void h[n].delete(e) : (null == u[n] || !u[n].has(e)) && c[e] > 50 ? (h[n].add(e), !0) : void 0;
}
class C extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        if ((this.syncWith([a.Z], g), null == e)) return;
        let { suggestedChannels: i, dismissedSuggestions: s, channelOpensByChannelId: l } = e;
        if (null != i) for (let e in i) (t = new Set(i[e])), (h[e] = void 0 !== t ? t : new Set());
        if (null != s) for (let e in s) (n = new Set(s[e])), (u[e] = void 0 !== n ? n : new Set());
        c = null != l ? l : {};
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
o(C, 'displayName', 'FavoritesSuggestionStore'), o(C, 'persistKey', 'FavoritesSuggestionStore');
let p = new C(l.Z, {
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { guildId: t, channelId: n } = e;
        return null == u[t] && (u[t] = new Set()), u[t].add(n), h[t].delete(n), !0;
    }
});
