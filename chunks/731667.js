n.d(t, { A: () => h }), n(896048);
var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(891540),
    o = n(71393),
    c = n(652215);
let u = !1;
function d(e) {
    let t = o.A.getGuild(e);
    return null != t && !!t.features.has(c.GuildFeatures.HUB) && ((u = !0), !0);
}
function p() {
    return !0;
}
class f extends (r = l.Ay.Store) {
    initialize() {
        this.waitFor(o.A, s.A), this.syncWith([s.A], p);
    }
    channelNoticePredicate(e) {
        return !!e.features.has(c.GuildFeatures.LINKED_TO_HUB) && !u;
    }
}
(i = "displayName") in f
    ? Object.defineProperty(f, i, {
          value: "HubLinkNoticeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[i] = "HubLinkNoticeStore");
let h = new f(a.h, {
    CONNECTION_OPEN: function (e) {
        for (let t of e.guilds) if (d(t.id)) return !0;
        return !1;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return d(t.id);
    },
});
