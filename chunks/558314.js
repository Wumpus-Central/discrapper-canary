n.d(t, { Z: () => c });
var r,
    i,
    l = n(442837),
    o = n(570140);
let a = { matureAgree: !1 };
class s extends (i = l.ZP.Store) {
    get didMatureAgree() {
        return a.matureAgree;
    }
}
(r = "displayName") in s
    ? Object.defineProperty(s, r, {
          value: "ApplicationStoreSettingsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[r] = "ApplicationStoreSettingsStore");
let c = new s(o.Z, {
    APPLICATION_STORE_MATURE_AGREE: function () {
        a.matureAgree = !0;
    },
});
