n.d(t, {
    A: () => g,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(734057),
    o = n(309010),
    l = n(543465);

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
    let e = o.A.getChannelId();
    if (null == e) return;
    let t = s.A.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if (
        (null == p[e] && (p[e] = 0),
        t.isThread() || (l.Ay.isOptInEnabled(n) && !l.Ay.isChannelOrParentOptedIn(n, t.id)))
    ) {
        delete p[e], null != d[n] && d[n].delete(e);
        return;
    }
    return (p[e]++, null == d[n] && (d[n] = new Set()), l.Ay.isFavorite(n, e))
        ? void d[n].delete(e)
        : (null == f[n] || !f[n].has(e)) && p[e] > u
          ? (d[n].add(e), !0)
          : void 0;
}

function h(e) {
    let { guildId: t, channelId: n } = e;
    return null == f[t] && (f[t] = new Set()), f[t].add(n), d[t].delete(n), !0;
}
class m extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t, n;
        if ((this.waitFor(s.A, o.A, l.Ay), this.syncWith([o.A], _), null == e)) return;
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
c(m, "displayName", "FavoritesSuggestionStore"), c(m, "persistKey", "FavoritesSuggestionStore");
let g = new m(a.h, {
    DISMISS_FAVORITE_SUGGESTION: h,
});
