n.d(t, { Z: () => h });
var r,
    i,
    l,
    o = n(442837),
    s = n(570140);
let a = null,
    c = null,
    u = !1;
class d extends (l = o.ZP.Store) {
    get shouldHide() {
        return (null != c && null != a && c <= a) || !u;
    }
    dismiss() {
        let e = Date.now();
        e !== a && ((a = e), this.emitChange());
    }
    setInboxReadState(e, t) {
        (e !== u || t !== c) && ((u = e), (c = t), this.emitChange());
    }
}
((i = 'NotificationsInboxCaughtUpBannerStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = i));
let h = new d(s.Z, {});
