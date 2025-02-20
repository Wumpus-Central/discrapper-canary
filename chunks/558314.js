n.d(t, { Z: () => d });
var r,
    i,
    a,
    o = n(442837),
    l = n(570140);
let s = { matureAgree: !1 };
class c extends (a = o.ZP.Store) {
    get didMatureAgree() {
        return s.matureAgree;
    }
}
(i = 'ApplicationStoreSettingsStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = i);
let d = new c(l.Z, {
    APPLICATION_STORE_MATURE_AGREE: function () {
        s.matureAgree = !0;
    }
});
