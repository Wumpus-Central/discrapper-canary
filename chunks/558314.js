n.d(t, { Z: () => u });
var r,
    i,
    a,
    l = n(442837),
    o = n(570140);
let s = { matureAgree: !1 };
class c extends (a = l.ZP.Store) {
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
let u = new c(o.Z, {
    APPLICATION_STORE_MATURE_AGREE: function () {
        s.matureAgree = !0;
    }
});
