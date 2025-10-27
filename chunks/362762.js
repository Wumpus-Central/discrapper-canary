n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(981631);
let o = null,
    c = {};
class u extends (i = l.ZP.Store) {
    getState(e) {
        return c[e];
    }
    getHighestState() {
        return o;
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "CodedLinkNativeAppStateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "CodedLinkNativeAppStateStore");
let d = new u(a.Z, {
    NATIVE_APP_MODAL_OPENING: function (e) {
        let { code: t } = e;
        (c[t] = s.kEZ.OPENING), null === o && (o = s.kEZ.OPENING);
    },
    NATIVE_APP_MODAL_OPENED: function (e) {
        let { code: t } = e;
        (c[t] = s.kEZ.OPEN), (o = s.kEZ.OPEN);
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
        let { code: t } = e;
        (c[t] = s.kEZ.OPEN_FAIL), (null === o || o === s.kEZ.OPENING) && (o = s.kEZ.OPEN_FAIL);
    },
});
