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
        var n;
        let r = null != (n = null == t ? void 0 : t.timestamp.getTime()) ? n : null;
        (e !== u || r !== c) && ((u = e), (c = r), this.emitChange());
    }
}
(i = 'NotificationsInboxCaughtUpBannerStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = i);
let h = new d(s.Z, {});
