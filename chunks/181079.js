"use strict";
n.d(t, { A: () => p });
var r = n(735438),
    i = n(311907),
    s = n(873298),
    a = n(73153),
    o = n(617617),
    l = n(95701),
    u = n(349828),
    d = n(652215);
let c = {},
    _ = !1,
    f = !1;
function E() {
    let e = o.A.settings.favorites,
        t = e?.muted ?? !1,
        n = {},
        i = e?.favoriteChannels;
    if (null != i)
        for (let e in i) {
            let t = i[e];
            n[e] = {
                id: e,
                nickname: "" !== t.nickname ? t.nickname : null,
                type: t.type,
                order: t.position,
                parentId: t.parentId !== u.O8 ? t.parentId : null,
            };
        }
    let s = e?.guildVisible?.value ?? !(0, r.isEmpty)(n);
    return !(_ === t && f === s && (0, r.isEqual)(c, n)) && ((_ = t), (f = s), (c = n), !0);
}
class h extends i.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(o.A), E(), this.syncWith([o.A], E);
    }
    getFavoriteChannels() {
        return c;
    }
    get favoriteGuildMuted() {
        return _;
    }
    get favoriteGuildEnabled() {
        return f;
    }
    isFavorite(e) {
        return null != e && null != c[e];
    }
    getFavorite(e) {
        if (null != e) return c[e];
    }
    getCategoryRecord(e) {
        if (e in c && c[e].type === s.Ip.CATEGORY) {
            var t;
            return (
                (t = c[e]),
                (0, l.createChannelRecord)({
                    id: t.id,
                    name: t.nickname ?? "",
                    type: d.rbe.GUILD_CATEGORY,
                    position: t.order,
                    guild_id: d.YYv,
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
    hasStoredFavorites() {
        return !(0, r.isEmpty)(this.getFavoriteChannels());
    }
}
let p = new h(a.h, {});
