n.d(t, { Z: () => u });
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(430824),
    o = n(981631);
class c extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), this.syncWith([s.Z], o.dG4);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(o.GuildFeatures.BANNER) && Date.now() - t >= o.Hqc;
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
