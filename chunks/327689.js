n.d(t, { Z: () => u });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140),
    o = n(430824),
    d = n(981631);
class c extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z), this.syncWith([o.Z], d.dG4);
    }
    channelNoticePredicate(e, t) {
        return !e.hasFeature(d.oNc.BANNER) && Date.now() - t >= d.Hqc;
    }
}
(l = 'GuildBoostingNoticeStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = l);
let u = new c(s.Z);
