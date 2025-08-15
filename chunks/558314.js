n.d(t, { Z: () => c });
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = { matureAgree: !1 };
class s extends (i = l.ZP.Store) {
    get didMatureAgree() {
        return o.matureAgree;
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
let c = new s(a.Z, {
    APPLICATION_STORE_MATURE_AGREE: function () {
        o.matureAgree = !0;
    },
});
