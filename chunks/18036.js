n.d(t, { Z: () => g }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(592125),
    s = n(944486),
    l = n(9156);
function c(e, t, n) {
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
let u = 50,
    d = {},
    f = {},
    p = {};
function _() {
    let e = s.Z.getChannelId();
    if (null == e) return;
    let t = o.Z.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if (
        (null == p[e] && (p[e] = 0),
        t.isThread() || (l.ZP.isOptInEnabled(n) && !l.ZP.isChannelOrParentOptedIn(n, t.id)))
    ) {
        delete p[e], null != d[n] && d[n].delete(e);
        return;
    }
    return (p[e]++, null == d[n] && (d[n] = new Set()), l.ZP.isFavorite(n, e))
        ? void d[n].delete(e)
        : (null == f[n] || !f[n].has(e)) && p[e] > u
          ? (d[n].add(e), !0)
          : void 0;
}
function m(e) {
    let { guildId: t, channelId: n } = e;
    return null == f[t] && (f[t] = new Set()), f[t].add(n), d[t].delete(n), !0;
}
class h extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        if ((this.waitFor(o.Z, s.Z, l.ZP), this.syncWith([s.Z], _), null == e)) return;
        let { suggestedChannels: r, dismissedSuggestions: i, channelOpensByChannelId: a } = e;
        if (null != r) for (let e in r) (t = new Set(r[e])), (d[e] = void 0 !== t ? t : new Set());
        if (null != i) for (let e in i) (n = new Set(i[e])), (f[e] = void 0 !== n ? n : new Set());
        p = null != a ? a : {};
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
c(h, "displayName", "FavoritesSuggestionStore"), c(h, "persistKey", "FavoritesSuggestionStore");
let g = new h(a.Z, { DISMISS_FAVORITE_SUGGESTION: m });
