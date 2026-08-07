"use strict";
let i;
n.d(t, { A: () => p });
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
    A = !1,
    h = !1;
function I() {
    let e = o.A.settings.favorites,
        t = e?.muted ?? !1,
        n = {},
        a = 0,
        l = e?.favoriteChannels;
    if (null != l)
        for (let e in l) {
            let t = l[e];
            t.type !== s.Ip.CATEGORY && a++,
                (n[e] = {
                    id: e,
                    nickname: "" !== t.nickname ? t.nickname : null,
                    type: t.type,
                    channelType: t.channelType?.value,
                    order: t.position,
                    parentId: t.parentId !== c.O8 ? t.parentId : null,
                });
        }
    let d = e?.guildVisible?.value,
        u = d ?? !(0, r.isEmpty)(n);
    return (
        !(A === t && h === u && i === d && (0, r.isEqual)(_, n)) && ((A = t), (h = u), (i = d), (_ = n), (E = a), !0)
    );
}
class f extends a.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(o.A), I(), this.syncWith([o.A], I);
    }
    getFavoriteChannels() {
        return _;
    }
    get favoriteGuildMuted() {
        return A;
    }
    get favoriteGuildEnabled() {
        return h;
    }
    get favoriteGuildVisibleSetting() {
        return i;
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
        return Object.keys(this.getFavoriteChannels()).length;
    }
    getFavoritesCountAgainstLimit() {
        return E;
    }
    hasStoredFavorites() {
        return !(0, r.isEmpty)(this.getFavoriteChannels());
    }
}
let p = new f(l.h, {});
