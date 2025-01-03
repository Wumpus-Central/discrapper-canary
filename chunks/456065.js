n(47120);
var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(570140),
    c = n(810788),
    d = n(430824),
    u = n(981631);
let h = !1;
function m(e) {
    let t = d.Z.getGuild(e);
    return !!(null != t && t.hasFeature(u.oNc.HUB)) && ((h = !0), !0);
}
function p() {
    return !0;
}
class g extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z), this.syncWith([c.Z], p);
    }
    channelNoticePredicate(e) {
        return !!e.hasFeature(u.oNc.LINKED_TO_HUB) && !h && !0;
    }
}
(a = 'HubLinkNoticeStore'),
    (l = 'displayName') in (r = g)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new g(o.Z, {
        CONNECTION_OPEN: function (e) {
            for (let t of e.guilds) if (m(t.id)) return !0;
            return !1;
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            return m(t.id);
        }
    }));
