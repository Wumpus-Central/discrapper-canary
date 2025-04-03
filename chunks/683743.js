n.d(t, { Z: () => p });
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(496675),
    c = n(981631);
function u() {
    return !0;
}
class d extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), this.syncWith([s.Z], u);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= c.Hqc && s.Z.can(c.Plq.ADMINISTRATOR, e);
    }
}
(i = 'InviteNoticeStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = i);
let p = new d(o.Z);
