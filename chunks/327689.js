n.d(t, { Z: () => d });
var r,
    i,
    l,
    o = n(442837),
    a = n(570140),
    s = n(430824),
    c = n(981631);
class u extends (l = o.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), this.syncWith([s.Z], c.dG4);
    }
    channelNoticePredicate(e, t) {
        return !e.hasFeature(c.oNc.BANNER) && Date.now() - t >= c.Hqc;
    }
}
(i = 'GuildBoostingNoticeStore'),
    (r = 'displayName') in u
        ? Object.defineProperty(u, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[r] = i);
let d = new u(a.Z);
