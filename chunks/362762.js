n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(981631);
let s = null,
    c = {};
class u extends (i = l.ZP.Store) {
    getState(e) {
        return c[e];
    }
    getHighestState() {
        return s;
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
        (c[t] = o.kEZ.OPENING), null === s && (s = o.kEZ.OPENING);
    },
    NATIVE_APP_MODAL_OPENED: function (e) {
        let { code: t } = e;
        (c[t] = o.kEZ.OPEN), (s = o.kEZ.OPEN);
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
        let { code: t } = e;
        (c[t] = o.kEZ.OPEN_FAIL), (null === s || s === o.kEZ.OPENING) && (s = o.kEZ.OPEN_FAIL);
    },
});
