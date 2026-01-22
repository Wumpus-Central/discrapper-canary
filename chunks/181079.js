n.d(t, { A: () => m });
var r,
    i = n(311907),
    a = n(873298),
    s = n(73153),
    o = n(617617),
    l = n(95701),
    c = n(652215);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = {},
    f = !1;
function p(e) {
    var t;
    return (0, l.createChannelRecord)({
        id: e.id,
        name: null != (t = e.nickname) ? t : "",
        type: c.rbe.GUILD_CATEGORY,
        position: e.order,
        guild_id: c.YYv,
    });
}
function _() {
    var e, t, n;
    (f = null != (e = null == (t = o.A.settings.favorites) ? void 0 : t.muted) && e), (d = {});
    let r = null == (n = o.A.settings.favorites) ? void 0 : n.favoriteChannels;
    if (null == r) return !1;
    for (let e in r) {
        let t = r[e];
        d[e] = {
            id: e,
            nickname: "" !== t.nickname ? t.nickname : null,
            type: t.type,
            order: t.position,
            parentId: "0" !== t.parentId ? t.parentId : null,
        };
    }
}
class h extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A), _(), this.syncWith([o.A], _);
    }
    getFavoriteChannels() {
        return d;
    }
    get favoriteServerMuted() {
        return f;
    }
    isFavorite(e) {
        return null != e && null != d[e];
    }
    getFavorite(e) {
        if (null != e) return d[e];
    }
    getCategoryRecord(e) {
        return e in d && d[e].type === a.Ip.CATEGORY ? p(d[e]) : null;
    }
    getNickname(e) {
        var t;
        let n = this.getFavorite(e);
        return null != (t = null == n ? void 0 : n.nickname) ? t : void 0;
    }
}
u(h, "displayName", "FavoriteStore");
let m = new h(s.h, {});
