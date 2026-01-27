n.d(t, {
    A: () => c,
});
var r,
    i,
    l = n(311907),
    a = n(73153);
let s = {
    matureAgree: !1,
};
class o extends (i = l.Ay.Store) {
    get didMatureAgree() {
        return s.matureAgree;
    }
}
(r = "displayName") in o
    ? Object.defineProperty(o, r, {
          value: "ApplicationStoreSettingsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[r] = "ApplicationStoreSettingsStore");
let c = new o(a.h, {
    APPLICATION_STORE_MATURE_AGREE: function () {
        s.matureAgree = !0;
    },
});
