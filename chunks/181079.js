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
function p(e) {
    return (0, l.createChannelRecord)({
        id: e.id,
        name: e.nickname ?? "",
        type: c.rbe.GUILD_CATEGORY,
        position: e.order,
        guild_id: c.YYv,
    });
}
function h() {
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
class m extends i.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(o.A), h(), this.syncWith([o.A], h);
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
        return e in d && d[e].type === s.Ip.CATEGORY ? p(d[e]) : null;
    }
    getNickname(e) {
        let t = this.getFavorite(e);
        return t?.nickname ?? void 0;
    }
    hasStoredFavorites() {
        return !(0, r.isEmpty)(this.getFavoriteChannels());
    }
}
let E = new m(a.h, {});
