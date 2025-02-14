n.d(t, { Z: () => h });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140),
    o = n(496675),
    d = n(981631);
function c() {
    return !0;
}
class u extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z), this.syncWith([o.Z], c);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= d.Hqc && o.Z.can(d.Plq.ADMINISTRATOR, e);
    }
}
(l = 'InviteNoticeStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = l);
let h = new u(s.Z);
