n.d(t, {
    A: () => d,
});
var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(576705),
    o = n(652215);

function c() {
    return !0;
}
class u extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(s.A), this.syncWith([s.A], c);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= o.D2K && s.A.can(o.xBc.ADMINISTRATOR, e);
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
let d = new u(a.h);
