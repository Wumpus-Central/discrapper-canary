n.d(t, { A: () => T });
var i = n(435558),
    r = n(17928),
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
    h = !1,
    f = !1;
function I() {
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
                    parentId: t.parentId !== d.O8 ? t.parentId : null,
                }));
        }
    let c = e?.guildVisible?.value ?? !(0, i.isEmpty)(n),
        I = e?.autoAddJoinedThreads ?? !1;
    return (
        !(A === t && h === c && f === I && (0, i.isEqual)(u, n)) &&
        ((A = t), (h = c), (f = I), (u = n), (_ = r), (E = s), !0)
    );
}
class p extends r.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        (this.waitFor(l.A), I(), this.syncWith([l.A], I));
    }
    getFavoriteChannels() {
        return u;
    }
    get favoriteGuildMuted() {
        return A;
    }
    get favoriteGuildEnabled() {
        return h;
    }
    get autoAddJoinedThreads() {
        return f && h;
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
let T = new p(s.h, {});
