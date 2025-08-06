n.d(t, { Z: () => u });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = { matureAgree: !1 };
function l() {
    s.matureAgree = !0;
}
class c extends (r = i.ZP.Store) {
    get didMatureAgree() {
        return s.matureAgree;
    }
}
a(c, 'displayName', 'ApplicationStoreSettingsStore');
let u = new c(o.Z, { APPLICATION_STORE_MATURE_AGREE: l });
