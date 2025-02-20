n.d(t, { Z: () => d });
var r,
    i,
    o,
    a = n(442837),
    l = n(570140),
    s = n(981631);
let c = {};
class u extends (o = a.ZP.Store) {
    getState(e) {
        return c[e];
    }
}
(i = 'CodedLinkNativeAppStateStore'),
    (r = 'displayName') in u
        ? Object.defineProperty(u, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[r] = i);
let d = new u(l.Z, {
    NATIVE_APP_MODAL_OPENING: function (e) {
        let { code: t } = e;
        c[t] = s.kEZ.OPENING;
    },
    NATIVE_APP_MODAL_OPENED: function (e) {
        let { code: t } = e;
        c[t] = s.kEZ.OPEN;
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
        let { code: t } = e;
        c[t] = s.kEZ.OPEN_FAIL;
    }
});
