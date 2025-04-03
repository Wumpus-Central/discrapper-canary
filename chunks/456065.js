n.d(t, { Z: () => g }), n(47120);
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(810788),
    c = n(430824),
    u = n(981631);
let d = !1;
function p(e) {
    let t = c.Z.getGuild(e);
    return null != t && !!t.hasFeature(u.oNc.HUB) && ((d = !0), !0);
}
function h() {
    return !0;
}
class f extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, s.Z), this.syncWith([s.Z], h);
    }
    channelNoticePredicate(e) {
        return !!e.hasFeature(u.oNc.LINKED_TO_HUB) && !d;
    }
}
(l = 'HubLinkNoticeStore'),
    (i = 'displayName') in f
        ? Object.defineProperty(f, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[i] = l);
let g = new f(o.Z, {
    CONNECTION_OPEN: function (e) {
        for (let t of e.guilds) if (p(t.id)) return !0;
        return !1;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return p(t.id);
    }
});
