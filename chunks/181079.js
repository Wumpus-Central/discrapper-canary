"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(873298),
    a = n(73153),
    s = n(617617),
    o = n(95701),
    l = n(349828),
    u = n(652215);
let c = {},
    d = !1;
function _(e) {
    return (0, o.createChannelRecord)({
        id: e.id,
        name: e.nickname ?? "",
        type: u.rbe.GUILD_CATEGORY,
        position: e.order,
        guild_id: u.YYv,
    });
}
function f() {
    (d = s.A.settings.favorites?.muted ?? !1), (c = {});
    let e = s.A.settings.favorites?.favoriteChannels;
    if (null == e) return !1;
    for (let t in e) {
        let n = e[t];
        c[t] = {
            id: t,
            nickname: "" !== n.nickname ? n.nickname : null,
            type: n.type,
            order: n.position,
            parentId: n.parentId !== l.O8 ? n.parentId : null,
        };
    }
}
class h extends r.Ay.Store {
    static displayName = "FavoriteStore";
    initialize() {
        this.waitFor(s.A), f(), this.syncWith([s.A], f);
    }
    getFavoriteChannels() {
        return c;
    }
    get favoriteServerMuted() {
        return d;
    }
    isFavorite(e) {
        return null != e && null != c[e];
    }
    getFavorite(e) {
        if (null != e) return c[e];
    }
    getCategoryRecord(e) {
        return e in c && c[e].type === i.Ip.CATEGORY ? _(c[e]) : null;
    }
    getNickname(e) {
        let t = this.getFavorite(e);
        return t?.nickname ?? void 0;
    }
}
let p = new h(a.h, {});
