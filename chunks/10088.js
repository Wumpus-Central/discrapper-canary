t.d(l, {
    A: () => n,
});
var s,
    e,
    c = t(311907),
    i = t(73153),
    r = t(652215);
let f = null,
    d = {};
class o extends (e = c.Ay.Store) {
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
let n = new o(i.h, {
    NATIVE_APP_MODAL_OPENING: function (a) {
        let { code: l } = a;
        (d[l] = r.fAW.OPENING), null === f && (f = r.fAW.OPENING);
    },
    NATIVE_APP_MODAL_OPENED: function (a) {
        let { code: l } = a;
        (d[l] = r.fAW.OPEN), (f = r.fAW.OPEN);
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (a) {
        let { code: l } = a;
        (d[l] = r.fAW.OPEN_FAIL), (null === f || f === r.fAW.OPENING) && (f = r.fAW.OPEN_FAIL);
    },
});
