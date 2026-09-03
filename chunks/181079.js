let i;
n.d(t, { A: () => m });
var r = n(435558),
    a = n(17928),
    s = n(873298),
    l = n(228366),
    o = n(617617),
    d = n(95701),
    c = n(349828),
    u = n(652215);
let _ = {},
    E = 0,
    A = 0,
    h = !1,
    I = !1,
    f = !1;
function p() {
    let e = o.A.settings.favorites,
        t = e?.muted ?? !1,
        n = {},
        a = 0,
        l = 0,
        d = e?.favoriteChannels;
    if (null != d)
        for (let e in d) {
            let t = d[e];
            a++,
                t.type !== s.Ip.CATEGORY && l++,
                (n[e] = {
                    id: e,
                    nickname: "" !== t.nickname ? t.nickname : null,
                    type: t.type,
                    channelType: t.channelType?.value,
                    order: t.position,
                    parentId: t.parentId !== c.O8 ? t.parentId : null,
                });
        }
    let u = e?.guildVisible?.value,
        p = u ?? !(0, r.isEmpty)(n),
        T = e?.autoAddJoinedThreads ?? !1;
    return (
        !(h === t && I === p && i === u && f === T && (0, r.isEqual)(_, n)) &&
        ((h = t), (I = p), (i = u), (f = T), (_ = n), (E = a), (A = l), !0)
    );
}
class T extends a.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(o.A), p(), this.syncWith([o.A], p);
    }
    getFavoriteChannels() {
        return _;
    }
    get favoriteGuildMuted() {
        return h;
    }
    get favoriteGuildEnabled() {
        return I;
    }
    get favoriteGuildVisibleSetting() {
        return i;
    }
    get autoAddJoinedThreads() {
        return f && I;
    }
    isFavorite(e) {
        return null != e && null != _[e];
    }
    isChannelOrParentFavorited(e) {
        return this.isFavorite(e.id) || (e.isThread() && this.isFavorite(e.parent_id));
    }
    getFavorite(e) {
        if (null != e) return _[e];
    }
    getCategoryRecord(e) {
        if (e in _ && _[e].type === s.Ip.CATEGORY) {
            var t;
            return (
                (t = _[e]),
                (0, d.createChannelRecord)({
                    id: t.id,
                    name: t.nickname ?? "",
                    type: u.rbe.GUILD_CATEGORY,
                    position: t.order,
                    guild_id: u.YYv,
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
        return E;
    }
    getFavoritesCountAgainstLimit() {
        return A;
    }
    hasStoredFavorites() {
        return !(0, r.isEmpty)(this.getFavoriteChannels());
    }
}
let m = new T(l.h, {});
