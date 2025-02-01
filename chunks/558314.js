n.d(t, { Z: () => d });
var i,
    l,
    a,
    r = n(442837),
    s = n(570140);
let o = { matureAgree: !1 };
class c extends (a = r.ZP.Store) {
    get didMatureAgree() {
        return o.matureAgree;
    }
}
(l = 'ApplicationStoreSettingsStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = l);
let d = new c(s.Z, {
    APPLICATION_STORE_MATURE_AGREE: function () {
        o.matureAgree = !0;
    }
});
