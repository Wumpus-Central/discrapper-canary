var i = n(435558),
    r = n(855986),
    a = n(873298),
    s = n(73153),
    l = n(617617),
    o = n(95701),
    d = n(349828),
    c = n(652215);
let u = {},
    _ = 0,
    E = 0,
    A = !1,
    f = !1,
    h = "never",
    I = !0,
    p = 0,
    m = d.l0;
function g() {
    let e = l.A.settings.favorites,
        t = e?.muted ?? !1,
        n = {},
        r = 0,
        s = 0,
        o = e?.favoriteChannels;
    if (null != o)
        for (let e in o) {
            let t = o[e];
            (r++,
                t.type !== a.Ip.CATEGORY && s++,
                (n[e] = {
                    id: e,
                    nickname: "" !== t.nickname ? t.nickname : null,
                    type: t.type,
                    channelType: t.channelType?.value,
                    order: t.position,
                    parentId: "0" !== t.parentId ? t.parentId : null,
                }));
        }
    let c = e?.guildVisible?.value ?? !(0, i.isEmpty)(n),
        g = "never";
    e?.autoAddJoinedThreads === !0 && (g = e.autoAddJoinedThreadsPerGuild ? d.Gv : d.AK);
    let T = e?.pruneInactiveThreads?.value ?? !0,
        S = e?.pruneInactiveThreadsDays ?? 0,
        N = e?.pruneAllFavoritedThreads === !0 ? "all" : d.l0;
    return (
        !(A === t && f === c && h === g && I === T && p === S && m === N && (0, i.isEqual)(u, n)) &&
        ((A = t), (f = c), (h = g), (I = T), (p = S), (m = N), (u = n), (_ = r), (E = s), !0)
    );
}
class T extends r.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        (this.waitFor(l.A), g(), this.syncWith([l.A], g));
    }
    getFavoriteChannels() {
        return u;
    }
    get favoriteGuildMuted() {
        return A;
    }
    get favoriteGuildEnabled() {
        return f;
    }
    get autoAddThreadsMode() {
        return f ? h : "never";
    }
    get pruneInactiveThreads() {
        return I && f;
    }
    get pruneInactiveThreadsDays() {
        return p;
    }
    get pruneInactiveThreadsScope() {
        return m;
    }
    isFavorite(e) {
        return null != e && null != u[e];
    }
    isChannelOrParentFavorited(e) {
        return this.isFavorite(e.id) || (e.isThread() && this.isFavorite(e.parent_id));
    }
    getFavorite(e) {
        if (null != e) return u[e];
    }
    getCategoryRecord(e) {
        if (e in u && u[e].type === a.Ip.CATEGORY) {
            var t;
            return (
                (t = u[e]),
                (0, o.createChannelRecord)({
                    id: t.id,
                    name: t.nickname ?? "",
                    type: c.rbe.GUILD_CATEGORY,
                    position: t.order,
                    guild_id: c.YYv,
                })
            );
        }
        return null;
    }
    getNickname(e) {
        let t = this.getFavorite(e);
        return t?.nickname ?? void 0;
    }
    getFavoritesCount() {
        return _;
    }
    getFavoritesCountAgainstLimit() {
        return E;
    }
    hasStoredFavorites() {
        return !(0, i.isEmpty)(this.getFavoriteChannels());
    }
}
let S = new T(s.h, {});
n.d(t, {}, { A: S });
