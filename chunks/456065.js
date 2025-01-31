n.d(t, { Z: () => g }), n(47120);
var i,
    l,
    r,
    a = n(442837),
    s = n(570140),
    o = n(810788),
    c = n(430824),
    d = n(981631);
let u = !1;
function h(e) {
    let t = c.Z.getGuild(e);
    return !!(null != t && t.hasFeature(d.oNc.HUB)) && ((u = !0), !0);
}
function m() {
    return !0;
}
class p extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, o.Z), this.syncWith([o.Z], m);
    }
    channelNoticePredicate(e) {
        return !!e.hasFeature(d.oNc.LINKED_TO_HUB) && !u;
    }
}
(r = 'HubLinkNoticeStore'),
    (l = 'displayName') in p
        ? Object.defineProperty(p, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[l] = r);
let g = new p(s.Z, {
    CONNECTION_OPEN: function (e) {
        for (let t of e.guilds) if (h(t.id)) return !0;
        return !1;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return h(t.id);
    }
});
