"use strict";
n.d(t, { A: () => f });
var i = n(735438),
    r = n(17928),
    s = n(873298),
    a = n(228366),
    o = n(617617),
    l = n(95701),
    d = n(349828),
    _ = n(652215);
let u = {},
    c = !1,
    E = !1;
function h() {
    let e = o.A.settings.favorites,
        t = e?.muted ?? !1,
        n = {},
        r = e?.favoriteChannels;
    if (null != r)
        for (let e in r) {
            let t = r[e];
            n[e] = {
                id: e,
                nickname: "" !== t.nickname ? t.nickname : null,
                type: t.type,
                order: t.position,
                parentId: t.parentId !== d.O8 ? t.parentId : null,
            };
        }
    let s = e?.guildVisible?.value ?? !(0, i.isEmpty)(n);
    return !(c === t && E === s && (0, i.isEqual)(u, n)) && ((c = t), (E = s), (u = n), !0);
}
class m extends r.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(o.A), h(), this.syncWith([o.A], h);
    }
    getFavoriteChannels() {
        return u;
    }
    get favoriteGuildMuted() {
        return c;
    }
    get favoriteGuildEnabled() {
        return E;
    }
    isFavorite(e) {
        return null != e && null != u[e];
    }
    getFavorite(e) {
        if (null != e) return u[e];
    }
    getCategoryRecord(e) {
        if (e in u && u[e].type === s.Ip.CATEGORY) {
            var t;
            return (
                (t = u[e]),
                (0, l.createChannelRecord)({
                    id: t.id,
                    name: t.nickname ?? "",
                    type: _.rbe.GUILD_CATEGORY,
                    position: t.order,
                    guild_id: _.YYv,
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
        return !(0, i.isEmpty)(this.getFavoriteChannels());
    }
}
let f = new m(a.h, {});
