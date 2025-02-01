n.d(t, { Z: () => h });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140),
    o = n(496675),
    c = n(981631);
function d() {
    return !0;
}
class u extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z), this.syncWith([o.Z], d);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= c.Hqc && o.Z.can(c.Plq.ADMINISTRATOR, e);
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
