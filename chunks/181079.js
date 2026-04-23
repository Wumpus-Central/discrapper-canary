"use strict";
n.d(t, { A: () => E });
var r = n(735438),
    i = n(311907),
    s = n(873298),
    a = n(73153),
    o = n(617617),
    l = n(95701),
    u = n(349828),
    c = n(652215);
let d = {},
    _ = !1,
    f = !1;
function p() {
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
    return !(_ === t && f === s && (0, r.isEqual)(d, n)) && ((_ = t), (f = s), (d = n), !0);
}
class h extends i.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(o.A), p(), this.syncWith([o.A], p);
    }
    getFavoriteChannels() {
        return d;
    }
    get favoriteGuildMuted() {
        return _;
    }
    get favoriteGuildEnabled() {
        return f;
    }
    isFavorite(e) {
        return null != e && null != d[e];
    }
    getFavorite(e) {
        if (null != e) return d[e];
    }
    getCategoryRecord(e) {
        if (e in d && d[e].type === s.Ip.CATEGORY) {
            var t;
            return (
                (t = d[e]),
                (0, l.createChannelRecord)({
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
        return Object.keys(this.getFavoriteChannels()).length;
    }
    hasStoredFavorites() {
        return !(0, r.isEmpty)(this.getFavoriteChannels());
    }
}
let E = new h(a.h, {});
