"use strict";
n.d(t, { A: () => f });
var i = n(435558),
    r = n(17928),
    a = n(873298),
    s = n(228366),
    l = n(617617),
    o = n(95701),
    d = n(349828),
    c = n(652215);
let u = {},
    _ = !1,
    E = !1,
    A = !1;
function h() {
    let e = l.A.settings.favorites,
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
                parentId: t.parentId !== d.O8 ? t.parentId : null,
            };
        }
    let a = e?.guildVisible?.value,
        s = a ?? !(0, i.isEmpty)(n),
        o = !1 === a;
    return !(_ === t && E === s && A === o && (0, i.isEqual)(u, n)) && ((_ = t), (E = s), (A = o), (u = n), !0);
}
class I extends r.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(l.A), h(), this.syncWith([l.A], h);
    }
    getFavoriteChannels() {
        return u;
    }
    get favoriteGuildMuted() {
        return _;
    }
    get favoriteGuildEnabled() {
        return E;
    }
    get favoriteGuildExplicitlyHidden() {
        return A;
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
        return Object.keys(this.getFavoriteChannels()).length;
    }
    hasStoredFavorites() {
        return !(0, i.isEmpty)(this.getFavoriteChannels());
    }
}
let f = new I(s.h, {});
