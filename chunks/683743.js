n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(496675),
    o = n(981631);
function c() {
    return !0;
}
class u extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z), this.syncWith([s.Z], c);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= o.Hqc && s.Z.can(o.Plq.ADMINISTRATOR, e);
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "InviteNoticeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "InviteNoticeStore");
let d = new u(a.Z);
