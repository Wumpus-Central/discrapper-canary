n.d(t, {
    A: () => u,
});
var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(71393),
    o = n(652215);
class c extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(s.A), this.syncWith([s.A], o.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(o.GuildFeatures.BANNER) && Date.now() - t >= o.D2K;
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
let u = new c(a.h);
