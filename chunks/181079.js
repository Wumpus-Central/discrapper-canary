"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(873298),
    a = n(73153),
    s = n(617617),
    o = n(95701),
    l = n(652215);
let u = {},
    c = !1;
function d(e) {
    return (0, o.createChannelRecord)({
        id: e.id,
        name: e.nickname ?? "",
        type: l.rbe.GUILD_CATEGORY,
        position: e.order,
        guild_id: l.YYv,
    });
}
function _() {
    (c = s.A.settings.favorites?.muted ?? !1), (u = {});
    let e = s.A.settings.favorites?.favoriteChannels;
    if (null == e) return !1;
    for (let t in e) {
        let n = e[t];
        u[t] = {
            id: t,
            nickname: "" !== n.nickname ? n.nickname : null,
            type: n.type,
            order: n.position,
            parentId: "0" !== n.parentId ? n.parentId : null,
        };
    }
}
class f extends r.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(s.A), _(), this.syncWith([s.A], _);
    }
    getFavoriteChannels() {
        return u;
    }
    get favoriteServerMuted() {
        return c;
    }
    isFavorite(e) {
        return null != e && null != u[e];
    }
    getFavorite(e) {
        if (null != e) return u[e];
    }
    getCategoryRecord(e) {
        return e in u && u[e].type === i.Ip.CATEGORY ? d(u[e]) : null;
    }
    getNickname(e) {
        let t = this.getFavorite(e);
        return t?.nickname ?? void 0;
    }
}
let p = new f(a.h, {});
