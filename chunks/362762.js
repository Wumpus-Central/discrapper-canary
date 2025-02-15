n.d(t, { Z: () => u });
var i,
    r,
    a,
    l = n(442837),
    o = n(570140),
    s = n(981631);
let c = {};
class d extends (a = l.ZP.Store) {
    getState(e) {
        return c[e];
    }
}
(r = 'CodedLinkNativeAppStateStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = r);
let u = new d(o.Z, {
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
