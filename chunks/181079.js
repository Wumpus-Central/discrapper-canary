"use strict";
n.d(t, { A: () => g });
var r = n(735438),
    i = n(311907),
    s = n(873298),
    a = n(73153),
    o = n(617617),
    l = n(95701),
    u = n(349828),
    c = n(652215);
let d = {},
    _ = {},
    f = !1,
    p = !1;
function h(e) {
    return (0, l.createChannelRecord)({
        id: e.id,
        name: e.nickname ?? "",
        type: c.rbe.GUILD_CATEGORY,
        position: e.order,
        guild_id: c.YYv,
    });
}
function m() {
    let e = o.A.settings.favorites,
        t = e?.muted ?? !1,
        n = {},
        i = {},
        a = e?.favoriteChannels;
    if (null != a)
        for (let e in a) {
            let t = a[e],
                r = {
                    id: e,
                    nickname: "" !== t.nickname ? t.nickname : null,
                    type: t.type,
                    order: t.position,
                    parentId: t.parentId !== u.O8 ? t.parentId : null,
                };
            if (((n[e] = r), t.type === s.Ip.CATEGORY)) {
                let t = h(r);
                null != t && (i[e] = t);
            }
        }
    let l = e?.guildVisible?.value ?? !(0, r.isEmpty)(n);
    return !(f === t && p === l && (0, r.isEqual)(d, n)) && ((f = t), (p = l), (d = n), (_ = i), !0);
}
class E extends i.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(o.A), m(), this.syncWith([o.A], m);
    }
    getFavoriteChannels() {
        return d;
    }
    get favoriteGuildMuted() {
        return f;
    }
    get favoriteGuildEnabled() {
        return p;
    }
    isFavorite(e) {
        return null != e && null != d[e];
    }
    getFavorite(e) {
        if (null != e) return d[e];
    }
    getFavoriteCategories() {
        return _;
    }
    getCategoryRecord(e) {
        return _[e] ?? null;
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
let g = new E(a.h, {});
