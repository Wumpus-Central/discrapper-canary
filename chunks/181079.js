"use strict";
n.d(t, { A: () => E });
var i = n(735438),
    r = n(17928),
    s = n(873298),
    a = n(228366),
    o = n(617617),
    l = n(95701),
    u = n(349828),
    c = n(652215);
let d = {},
    _ = !1,
    h = !1;
function f() {
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
                channelType: t.channelType?.value,
                order: t.position,
                parentId: t.parentId !== u.O8 ? t.parentId : null,
            };
        }
    let s = e?.guildVisible?.value ?? !(0, i.isEmpty)(n);
    return !(_ === t && h === s && (0, i.isEqual)(d, n)) && ((_ = t), (h = s), (d = n), !0);
}
class p extends r.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(o.A), f(), this.syncWith([o.A], f);
    }
    getFavoriteChannels() {
        return d;
    }
    get favoriteGuildMuted() {
        return _;
    }
    get favoriteGuildEnabled() {
        return h;
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
        return !(0, i.isEmpty)(this.getFavoriteChannels());
    }
}
let E = new p(a.h, {});
