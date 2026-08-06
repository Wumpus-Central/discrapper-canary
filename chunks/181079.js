"use strict";
n.d(t, { A: () => p });
var i = n(435558),
    r = n(17928),
    a = n(873298),
    s = n(228366),
    l = n(617617),
    o = n(95701),
    d = n(349828),
    c = n(652215);
let u = {},
    _ = 0,
    E = !1,
    A = !1,
    h = !1;
function I() {
    let e = l.A.settings.favorites,
        t = e?.muted ?? !1,
        n = {},
        r = 0,
        s = e?.favoriteChannels;
    if (null != s)
        for (let e in s) {
            let t = s[e];
            t.type !== a.Ip.CATEGORY && r++,
                (n[e] = {
                    id: e,
                    nickname: "" !== t.nickname ? t.nickname : null,
                    type: t.type,
                    channelType: t.channelType?.value,
                    order: t.position,
                    parentId: t.parentId !== d.O8 ? t.parentId : null,
                });
        }
    let o = e?.guildVisible?.value,
        c = o ?? !(0, i.isEmpty)(n),
        I = !1 === o;
    return (
        !(E === t && A === c && h === I && (0, i.isEqual)(u, n)) && ((E = t), (A = c), (h = I), (u = n), (_ = r), !0)
    );
}
class f extends r.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(l.A), I(), this.syncWith([l.A], I);
    }
    getFavoriteChannels() {
        return u;
    }
    get favoriteGuildMuted() {
        return E;
    }
    get favoriteGuildEnabled() {
        return A;
    }
    get favoriteGuildExplicitlyHidden() {
        return h;
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
    getFavoritesCountAgainstLimit() {
        return _;
    }
    hasStoredFavorites() {
        return !(0, i.isEmpty)(this.getFavoriteChannels());
    }
}
let p = new f(s.h, {});
