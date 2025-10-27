n.d(t, { Z: () => u });
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(496675),
    o = n(981631);
class c extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), this.syncWith([s.Z], o.dG4);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= o.Hqc && s.Z.can(o.Plq.MANAGE_GUILD, e);
    }
}
(r = "displayName") in c
    ? Object.defineProperty(c, r, {
          value: "GuildBoostingNoticeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[r] = "GuildBoostingNoticeStore");
let u = new c(a.Z);
