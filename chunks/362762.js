t.d(l, { Z: () => n });
var s,
    e,
    c = t(442837),
    i = t(570140),
    r = t(981631);
let f = null,
    d = {};
class o extends (e = c.ZP.Store) {
    getState(a) {
        return d[a];
    }
    getHighestState() {
        return f;
    }
}
(s = "displayName") in o
    ? Object.defineProperty(o, s, {
          value: "CodedLinkNativeAppStateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[s] = "CodedLinkNativeAppStateStore");
let n = new o(i.Z, {
    NATIVE_APP_MODAL_OPENING: function (a) {
        let { code: l } = a;
        (d[l] = r.kEZ.OPENING), null === f && (f = r.kEZ.OPENING);
    },
    NATIVE_APP_MODAL_OPENED: function (a) {
        let { code: l } = a;
        (d[l] = r.kEZ.OPEN), (f = r.kEZ.OPEN);
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (a) {
        let { code: l } = a;
        (d[l] = r.kEZ.OPEN_FAIL), (null === f || f === r.kEZ.OPENING) && (f = r.kEZ.OPEN_FAIL);
    },
});
