n.d(t, { A: () => u });
var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(576705),
    o = n(652215);
class c extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(s.A), this.syncWith([s.A], o.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= o.D2K && s.A.can(o.xBc.MANAGE_GUILD, e);
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
