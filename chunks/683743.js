n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(496675),
    s = n(981631);
function c() {
    return !0;
}
class u extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(o.Z), this.syncWith([o.Z], c);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= s.Hqc && o.Z.can(s.Plq.ADMINISTRATOR, e);
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
