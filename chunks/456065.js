n.d(t, { Z: () => m }), n(388685);
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(810788),
    o = n(430824),
    c = n(981631);
let u = !1;
function d(e) {
    let t = o.Z.getGuild(e);
    return null != t && !!t.features.has(c.GuildFeatures.HUB) && ((u = !0), !0);
}
function p() {
    return !0;
}
class f extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, s.Z), this.syncWith([s.Z], p);
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
let m = new f(a.Z, {
    CONNECTION_OPEN: function (e) {
        for (let t of e.guilds) if (d(t.id)) return !0;
        return !1;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return d(t.id);
    },
});
