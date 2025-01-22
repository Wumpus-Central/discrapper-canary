var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = { matureAgree: !1 };
class u extends (a = o.ZP.Store) {
    get didMatureAgree() {
        return c.matureAgree;
    }
}
(l = 'ApplicationStoreSettingsStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new u(s.Z, {
        APPLICATION_STORE_MATURE_AGREE: function () {
            c.matureAgree = !0;
        }
    }));
