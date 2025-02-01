n.d(t, { Z: () => u });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140),
    o = n(496675),
    c = n(981631);
class d extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z), this.syncWith([o.Z], c.dG4);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= c.Hqc && o.Z.can(c.Plq.MANAGE_GUILD, e);
    }
}
(l = 'GuildBoostingNoticeStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = l);
let u = new d(s.Z);
